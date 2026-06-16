import Phaser from 'phaser';
import { toScreen } from '../isometric/iso-math';
import { sortEntities } from '../isometric/depth-sort';
import { SortableEntity } from '../isometric/iso-types';
import { isInMeleeRange, MELEE_RANGE, MELEE_DAMAGE } from '../systems/combat';
import { InteractableData } from '../systems/interaction';
import PlayerSprite from '../entities/PlayerSprite';
import EnemySprite from '../entities/EnemySprite';
import InteractableSprite from '../entities/InteractableSprite';
import { eventBridge } from '../event-bridge';
import {
  NarrativeState,
  createNarrativeState,
  completeObjective,
  activateCheckpoint,
  collectClue,
  getRespawnPosition,
  checkZone,
  OBJECTIVES,
} from '../systems/narrative-flow';

const TILE_WIDTH = 64;
const TILE_HEIGHT = 32;
const GRID_SIZE = 32;

interface VisualZone {
  name: string;
  id: string;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  color: number;
}

const VISUAL_ZONES: VisualZone[] = [
  { name: 'Base Policial', id: 'base', minX: 2, maxX: 6, minY: 2, maxY: 6, color: 0x3b82f6 },
  { name: 'Rua Externa', id: 'rua', minX: 7, maxX: 15, minY: 2, maxY: 10, color: 0x64748b },
  { name: 'Mercado Abandonado', id: 'mercado', minX: 16, maxX: 22, minY: 2, maxY: 8, color: 0xf59e0b },
  { name: 'Caminho para Residência', id: 'caminho', minX: 10, maxX: 20, minY: 11, maxY: 20, color: 0x78350f },
  { name: 'Casa de Rafael', id: 'casa', minX: 21, maxX: 28, minY: 15, maxY: 24, color: 0x10b981 },
  { name: 'Escola Municipal (Portão)', id: 'escola', minX: 29, maxX: 31, minY: 25, maxY: 29, color: 0xef4444 },
];

export default class GameScene extends Phaser.Scene {
  private graphics!: Phaser.GameObjects.Graphics;
  private player!: PlayerSprite;
  private enemies: EnemySprite[] = [];
  private interactables: InteractableSprite[] = [];
  private gameOver = false;
  private levelComplete = false;
  private gameOverText!: Phaser.GameObjects.Text;
  private levelCompleteText!: Phaser.GameObjects.Text;
  private restartKey!: Phaser.Input.Keyboard.Key;

  // Sistema narrativo
  private narrativeState!: NarrativeState;

  // Posição de referência para o grid (centro do canvas)
  private gridOffsetX = 0;
  private gridOffsetY = 0;

  constructor() {
    super('GameScene');
  }

  create() {
    const { width, height } = this.scale;
    this.gridOffsetX = width / 2;
    this.gridOffsetY = height / 3;

    this.graphics = this.add.graphics();

    // Inicializar o fluxo narrativo
    this.narrativeState = createNarrativeState();
    const spawnPos = getRespawnPosition(this.narrativeState);

    // Criar player no spawn inicial
    this.player = new PlayerSprite(this, spawnPos.posX, spawnPos.posY);

    // Criar inimigos patrulheiros distribuídos nas zonas de transição
    this.enemies = [
      new EnemySprite(this, 'zombie-1', 9, 6),                     // Rua externa
      new EnemySprite(this, 'zombie-2', 15, 14, { alertRadius: 5 }), // Caminho intermediário
      new EnemySprite(this, 'zombie-3', 25, 20),                    // Próximo à casa de Rafael
    ];

    // Criar itens e pistas da fase
    const itemDefs: InteractableData[] = [
      // Pista 1: Mochila de Luísa no Mercado Abandonado
      {
        id: 'note-backpack', posX: 18, posY: 5, interactionRadius: 1.5,
        item: { itemId: 'note-backpack', name: 'Mochila de Luísa', type: 'note', quantity: 1 },
        collected: false,
      },
      // Pista 2: Diário de Luísa na Casa de Rafael
      {
        id: 'note-diary', posX: 24, posY: 18, interactionRadius: 1.5,
        item: { itemId: 'note-diary', name: 'Diário de Luísa', type: 'note', quantity: 1 },
        collected: false,
      },
      // Consumíveis de sobrevivência
      {
        id: 'battery-1', posX: 19, posY: 3, interactionRadius: 1.5,
        item: { itemId: 'battery-1', name: 'Bateria', type: 'battery', quantity: 1 },
        collected: false,
      },
      {
        id: 'heal-1', posX: 23, posY: 22, interactionRadius: 1.5,
        item: { itemId: 'heal-1', name: 'Kit Médico', type: 'healing', quantity: 1 },
        collected: false,
      },
    ];

    this.interactables = itemDefs.map(d => new InteractableSprite(this, d));

    // Desenhar os textos físicos identificando as áreas
    for (const zone of VISUAL_ZONES) {
      const center = toScreen(
        { x: (zone.minX + zone.maxX) / 2, y: (zone.minY + zone.maxY) / 2, z: 0 },
        TILE_WIDTH,
        TILE_HEIGHT
      );
      this.add.text(center.x, center.y - 12, zone.name, {
        fontFamily: 'monospace',
        fontSize: '11px',
        color: '#' + zone.color.toString(16).padStart(6, '0'),
        backgroundColor: '#0f172acc',
        padding: { x: 5, y: 3 },
      }).setOrigin(0.5);
    }

    // Câmera acompanha o player
    this.cameras.main.startFollow(this.player, true, 0.1, 0.1);

    // Configurar telas de status overlays
    this.gameOverText = this.add.text(0, 0, '', {
      fontFamily: 'monospace',
      fontSize: '28px',
      color: '#ef4444',
      backgroundColor: '#000000cc',
      align: 'center',
      padding: { x: 20, y: 10 },
    }).setOrigin(0.5).setScrollFactor(0).setVisible(false).setDepth(100);

    this.levelCompleteText = this.add.text(0, 0, '', {
      fontFamily: 'monospace',
      fontSize: '24px',
      color: '#fbbf24',
      backgroundColor: '#0f172ae6',
      align: 'center',
      padding: { x: 20, y: 15 },
    }).setOrigin(0.5).setScrollFactor(0).setVisible(false).setDepth(100);

    if (this.input.keyboard) {
      this.restartKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }

    // Escutar eventos do player
    eventBridge.on('player:interact', this.handleInteract, this);
    eventBridge.on('player:attack', this.handleAttack, this);
    eventBridge.on('player:dead', this.handlePlayerDead, this);
    eventBridge.on('game:pause', this.handlePause, this);

    // Iniciar HUD
    this.scene.launch('UIScene');

    // Mandar objetivo inicial para a HUD
    eventBridge.emit('narrative:objective', { objective: OBJECTIVES[this.narrativeState.currentObjectiveId] });

    // Mensagem de rádio/diálogo de introdução
    this.time.delayedCall(1000, () => {
      eventBridge.emit('narrative:dialog', { text: "Rafael: 'O plantão policial acabou em caos. Preciso sair deste posto e encontrar Luísa...'" });
    });
  }

  update(time: number, delta: number) {
    if (this.levelComplete) {
      if (this.restartKey && Phaser.Input.Keyboard.JustDown(this.restartKey)) {
        this.handleResetFull();
      }
      return;
    }

    if (this.gameOver) {
      if (this.restartKey && Phaser.Input.Keyboard.JustDown(this.restartKey)) {
        this.handleRespawn();
      }
      return;
    }

    // Atualizar player
    this.player.update(time, delta);

    const px = this.player.playerState.posX;
    const py = this.player.playerState.posY;

    // Verificar triggers narrativos geográficos baseados na posição do player
    this.checkNarrativeTriggers(px, py);

    // Atualizar inimigos e verificar dano de contato
    for (const enemy of this.enemies) {
      const contactDamage = enemy.update(time, delta, px, py);
      if (contactDamage && contactDamage > 0) {
        this.player.takeDamage(contactDamage);
      }
    }

    // Desenhar grid e contornos das zonas
    this.graphics.clear();
    this.drawIsometricGrid(GRID_SIZE, GRID_SIZE);
    this.drawVisualZones();

    // Depth sort
    this.depthSortAll();
  }

  private checkNarrativeTriggers(px: number, py: number) {
    const currentZone = checkZone(px, py);

    if (currentZone === 'rua' && this.narrativeState.currentObjectiveId === 'saia_base') {
      this.narrativeState = completeObjective(this.narrativeState, 'saia_base');
      this.narrativeState = activateCheckpoint(this.narrativeState, 2);
      eventBridge.emit('narrative:objective', { objective: OBJECTIVES[this.narrativeState.currentObjectiveId] });
      eventBridge.emit('narrative:dialog', { text: "Rafael: 'A rua está bloqueada. Devem ter evacuado as pessoas para a praça ou o mercado...'" });
    }

    if (currentZone === 'mercado' && this.narrativeState.currentObjectiveId === 'ir_mercado') {
      this.narrativeState = completeObjective(this.narrativeState, 'ir_mercado');
      eventBridge.emit('narrative:objective', { objective: OBJECTIVES[this.narrativeState.currentObjectiveId] });
      eventBridge.emit('narrative:dialog', { text: "Rafael: 'O mercado está destruído... Talvez haja alguma pista na entrada.'" });
    }

    if (currentZone === 'casa' && this.narrativeState.currentObjectiveId === 'ir_casa') {
      this.narrativeState = completeObjective(this.narrativeState, 'ir_casa');
      this.narrativeState = activateCheckpoint(this.narrativeState, 3);
      eventBridge.emit('narrative:objective', { objective: OBJECTIVES[this.narrativeState.currentObjectiveId] });
      eventBridge.emit('narrative:dialog', { text: "Rafael: 'Cheguei no pátio de casa. Luísa... por favor, esteja bem...'" });
    }

    if (currentZone === 'escola' && this.narrativeState.currentObjectiveId === 'ir_escola') {
      this.narrativeState = completeObjective(this.narrativeState, 'ir_escola');
      this.narrativeState = completeObjective(this.narrativeState, 'fim');
      this.levelComplete = true;

      // Desativar movimento do player
      this.player.setVisible(false);

      this.levelCompleteText.setPosition(this.scale.width / 2, this.scale.height / 2);
      this.levelCompleteText.setText(
        "FASE CONCLUÍDA: PLANTÃO FINAL!\n\nRafael alcançou o portão da Escola Municipal.\nAqui as marcas indicam uma fuga desesperada.\n\n[BLOCO 07 MVP APROVADO]\nPressione R para reiniciar a fase."
      );
      this.levelCompleteText.setVisible(true);
    }
  }

  private drawVisualZones() {
    for (const zone of VISUAL_ZONES) {
      // Coletar os quatro cantos isométricos
      const s1 = toScreen({ x: zone.minX, y: zone.minY, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      const s2 = toScreen({ x: zone.maxX + 1, y: zone.minY, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      const s3 = toScreen({ x: zone.maxX + 1, y: zone.maxY + 1, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      const s4 = toScreen({ x: zone.minX, y: zone.maxY + 1, z: 0 }, TILE_WIDTH, TILE_HEIGHT);

      this.graphics.lineStyle(2, zone.color, 0.75);
      this.graphics.lineBetween(s1.x, s1.y, s2.x, s2.y);
      this.graphics.lineBetween(s2.x, s2.y, s3.x, s3.y);
      this.graphics.lineBetween(s3.x, s3.y, s4.x, s4.y);
      this.graphics.lineBetween(s4.x, s4.y, s1.x, s1.y);
    }
  }

  private drawIsometricGrid(sizeX: number, sizeY: number) {
    this.graphics.lineStyle(1, 0x2d3748, 0.35);

    for (let x = 0; x <= sizeX; x++) {
      const pStart = toScreen({ x, y: 0, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      const pEnd = toScreen({ x, y: sizeY, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      this.graphics.lineBetween(pStart.x, pStart.y, pEnd.x, pEnd.y);
    }

    for (let y = 0; y <= sizeY; y++) {
      const pStart = toScreen({ x: 0, y, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      const pEnd = toScreen({ x: sizeX, y, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      this.graphics.lineBetween(pStart.x, pStart.y, pEnd.x, pEnd.y);
    }
  }

  private depthSortAll() {
    const entities: (SortableEntity & { ref: Phaser.GameObjects.Container })[] = [];

    if (this.player.visible) {
      entities.push({
        id: 'player',
        x: this.player.playerState.posX,
        y: this.player.playerState.posY,
        z: 0, width: 1, length: 1, height: 1,
        ref: this.player,
      });
    }

    for (const enemy of this.enemies) {
      if (enemy.visible) {
        entities.push({
          id: enemy.enemyState.id,
          x: enemy.enemyState.posX,
          y: enemy.enemyState.posY,
          z: 0, width: 1, length: 1, height: 1,
          ref: enemy,
        });
      }
    }

    for (const interactable of this.interactables) {
      if (interactable.visible) {
        entities.push({
          id: interactable.interactableData.id,
          x: interactable.interactableData.posX,
          y: interactable.interactableData.posY,
          z: 0, width: 0.5, length: 0.5, height: 0.5,
          ref: interactable,
        });
      }
    }

    const sorted = sortEntities(entities);
    sorted.forEach((e, i) => {
      (e as typeof entities[number]).ref.setDepth(i + 1);
    });
  }

  private handleInteract(data: { posX: number; posY: number }) {
    for (const sprite of this.interactables) {
      if (sprite.interactableData.collected) continue;

      const dx = data.posX - sprite.interactableData.posX;
      const dy = data.posY - sprite.interactableData.posY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= sprite.interactableData.interactionRadius) {
        const collected = this.player.collectItem(sprite.interactableData.item);
        if (collected) {
          sprite.markCollected();

          // Lógica de diálogos e objetivos com base na pista coletada
          if (sprite.interactableData.id === 'note-backpack') {
            this.narrativeState = collectClue(this.narrativeState, 'backpack');
            this.narrativeState = completeObjective(this.narrativeState, 'pista_mercado');
            eventBridge.emit('narrative:objective', { objective: OBJECTIVES[this.narrativeState.currentObjectiveId] });
            eventBridge.emit('narrative:dialog', { text: "Rafael: 'A mochila da Luísa! Ela estava no mercado... preciso ir para casa agora para ver se ela voltou.'" });
          } else if (sprite.interactableData.id === 'note-diary') {
            this.narrativeState = collectClue(this.narrativeState, 'diary');
            this.narrativeState = completeObjective(this.narrativeState, 'pista_casa');
            eventBridge.emit('narrative:objective', { objective: OBJECTIVES[this.narrativeState.currentObjectiveId] });
            eventBridge.emit('narrative:dialog', { text: "Rafael: 'O diário dela... a última anotação diz: evacuação para a Escola Municipal do bairro. É lá que vou!'" });
          } else {
            eventBridge.emit('narrative:dialog', { text: `Você coletou: ${sprite.interactableData.item.name}` });
          }
        }
        break;
      }
    }
  }

  private handleAttack(data: { posX: number; posY: number }) {
    for (const enemy of this.enemies) {
      if (!enemy.visible) continue;

      if (isInMeleeRange(data.posX, data.posY, enemy.enemyState.posX, enemy.enemyState.posY, MELEE_RANGE)) {
        const died = enemy.receiveDamage(MELEE_DAMAGE);
        if (died) {
          enemy.setVisible(false);
          eventBridge.emit('narrative:dialog', { text: "Rafael: 'Eliminei uma dessas coisas...'" });
        }
        break;
      }
    }
  }

  private handlePlayerDead() {
    this.gameOver = true;
    const { width, height } = this.scale;
    this.gameOverText.setPosition(width / 2, height / 2);
    this.gameOverText.setText('GAME OVER\n\nPressione R para reiniciar no último Checkpoint');
    this.gameOverText.setVisible(true);
  }

  private handleRespawn() {
    this.gameOver = false;
    this.gameOverText.setVisible(false);

    // Recuperar coordenada do checkpoint ativo
    const respawnPos = getRespawnPosition(this.narrativeState);
    this.player.doRespawn(respawnPos.posX, respawnPos.posY);

    // Restaurar e reviver inimigos
    const enemySpawns: Record<string, { posX: number; posY: number }> = {
      'zombie-1': { posX: 9, posY: 6 },
      'zombie-2': { posX: 15, posY: 14 },
      'zombie-3': { posX: 25, posY: 20 },
    };

    for (const enemy of this.enemies) {
      const spawn = enemySpawns[enemy.enemyState.id] || { posX: 15, posY: 15 };
      enemy.enemyState = {
        ...enemy.enemyState,
        health: enemy.enemyState.maxHealth,
        posX: spawn.posX,
        posY: spawn.posY,
        state: 'IDLE',
      };
      enemy.setVisible(true);
    }
  }

  private handleResetFull() {
    this.narrativeState = createNarrativeState();
    this.levelComplete = false;
    this.levelCompleteText.setVisible(false);
    this.gameOver = false;
    this.gameOverText.setVisible(false);
    this.scene.restart();
  }

  private handlePause() {
    this.scene.pause();
    this.scene.launch('PauseScene');
  }

  shutdown() {
    eventBridge.off('player:interact', this.handleInteract, this);
    eventBridge.off('player:attack', this.handleAttack, this);
    eventBridge.off('player:dead', this.handlePlayerDead, this);
    eventBridge.off('game:pause', this.handlePause, this);
  }
}
