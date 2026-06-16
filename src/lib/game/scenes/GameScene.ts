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
import { GAME_ASSETS } from '../config/asset-keys';
import { getCameraBounds, MAP_CONFIG, TILE_HEIGHT, TILE_WIDTH } from '../config/map-config';
import { GAME_ZONES, ZoneId } from '../config/zones';
import {
  NarrativeState,
  createNarrativeState,
  getRespawnPosition,
  checkZone,
  OBJECTIVES,
  canProgressNarrativeInteraction,
  getCurrentObjectiveText,
  progressNarrativeByInteraction,
  progressNarrativeByZone,
} from '../systems/narrative-flow';
import { MissionProgressResult } from '../systems/mission-objectives';
import {
  missionSaveToObjectiveState,
  objectiveStateToMissionSave,
} from '../systems/mission-save';
import { HazardPosition, resolveSafeRestorePosition } from '../systems/safe-restore';
import type { SavePayload } from '../../save/save-schema';
import { deleteLocal, loadLocal, saveLocal } from '../../save/local-save';

interface EnvironmentArt {
  key: string;
  x: number;
  y: number;
  scale: number;
  depth: number;
  alpha?: number;
  originY?: number;
  footprintWidth?: number;
  footprintHeight?: number;
  footprintOffsetY?: number;
  footprintAlpha?: number;
}

const ENVIRONMENT_ART: EnvironmentArt[] = [
  { key: GAME_ASSETS.buildings.policeBase.key, x: 6.4, y: 6.6, scale: 0.125, depth: -30, alpha: 0.88, originY: 0.78, footprintWidth: 230, footprintHeight: 76, footprintOffsetY: 16, footprintAlpha: 0.26 },
  { key: GAME_ASSETS.buildings.exteriorStreet.key, x: 17.6, y: 10.2, scale: 0.105, depth: -32, alpha: 0.58, originY: 0.58, footprintWidth: 280, footprintHeight: 96, footprintOffsetY: 10, footprintAlpha: 0.18 },
  { key: GAME_ASSETS.buildings.abandonedMarket.key, x: 31.8, y: 10.6, scale: 0.115, depth: -28, alpha: 0.84, originY: 0.78, footprintWidth: 220, footprintHeight: 72, footprintOffsetY: 15, footprintAlpha: 0.24 },
  { key: GAME_ASSETS.buildings.residencePath.key, x: 32.6, y: 29.6, scale: 0.105, depth: -31, alpha: 0.58, originY: 0.6, footprintWidth: 260, footprintHeight: 86, footprintOffsetY: 10, footprintAlpha: 0.17 },
  { key: GAME_ASSETS.buildings.rafaelHouse.key, x: 49.4, y: 41.6, scale: 0.118, depth: -27, alpha: 0.84, originY: 0.78, footprintWidth: 220, footprintHeight: 76, footprintOffsetY: 15, footprintAlpha: 0.24 },
  { key: GAME_ASSETS.buildings.schoolGate.key, x: 58.4, y: 56.6, scale: 0.098, depth: -26, alpha: 0.84, originY: 0.78, footprintWidth: 210, footprintHeight: 70, footprintOffsetY: 14, footprintAlpha: 0.22 },
  { key: GAME_ASSETS.props.brokenStreetPole.key, x: 13.2, y: 7.4, scale: 0.115, depth: -22, alpha: 0.86, originY: 0.92 },
  { key: GAME_ASSETS.props.streetSign.key, x: 19.4, y: 7.8, scale: 0.1, depth: -22, alpha: 0.86, originY: 0.92 },
  { key: GAME_ASSETS.props.barricade.key, x: 14.8, y: 11.0, scale: 0.12, depth: -21, alpha: 0.88, originY: 0.76 },
  { key: GAME_ASSETS.props.trashBags.key, x: 21.0, y: 12.2, scale: 0.12, depth: -20, alpha: 0.84, originY: 0.78 },
  { key: GAME_ASSETS.props.marketCrates.key, x: 31.4, y: 12.4, scale: 0.11, depth: -20, alpha: 0.86, originY: 0.78 },
  { key: GAME_ASSETS.props.brokenWall.key, x: 23.6, y: 22.8, scale: 0.105, depth: -21, alpha: 0.82, originY: 0.82 },
  { key: GAME_ASSETS.props.rainPuddle.key, x: 27.2, y: 28.9, scale: 0.13, depth: -25, alpha: 0.5, originY: 0.5 },
  { key: GAME_ASSETS.props.bloodPuddle.key, x: 37.4, y: 35.2, scale: 0.12, depth: -24, alpha: 0.5, originY: 0.5 },
  { key: GAME_ASSETS.props.brokenDoor.key, x: 49.4, y: 40.0, scale: 0.095, depth: -20, alpha: 0.84, originY: 0.92 },
  { key: GAME_ASSETS.props.brokenWindow.key, x: 51.2, y: 43.2, scale: 0.1, depth: -20, alpha: 0.84, originY: 0.82 },
  { key: GAME_ASSETS.props.dragMark.key, x: 57.2, y: 55.0, scale: 0.11, depth: -24, alpha: 0.45, originY: 0.5 },
];

const ENEMY_ASSET_KEYS = [
  GAME_ASSETS.enemies.infectedBusDriver.key,
  GAME_ASSETS.enemies.infectedStreetVendor.key,
  GAME_ASSETS.enemies.infectedTeacher.key,
  GAME_ASSETS.enemies.infectedGym.key,
  GAME_ASSETS.enemies.infectedDelivery.key,
  GAME_ASSETS.enemies.infectedSecurity.key,
  GAME_ASSETS.enemies.infectedUrbanSurvivor.key,
  GAME_ASSETS.enemies.infectedNurse.key,
  GAME_ASSETS.enemies.infectedMechanic.key,
  GAME_ASSETS.enemies.infectedFictionalPoliceman.key,
];

const SAVE_SLOT = 1;

const ENEMY_SPAWNS: Record<string, HazardPosition> = {
  'zombie-1': { id: 'zombie-1', posX: 17, posY: 10 },
  'zombie-2': { id: 'zombie-2', posX: 32, posY: 30 },
  'zombie-3': { id: 'zombie-3', posX: 49, posY: 42 },
};

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
  private environmentSprites: Phaser.GameObjects.GameObject[] = [];

  // Sistema narrativo
  private narrativeState!: NarrativeState;
  private loadedSave: SavePayload | null = null;
  private lastKnownZoneId: ZoneId | null = null;

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
    this.createEnvironmentArt();

    // Inicializar o fluxo narrativo a partir do save local quando existir.
    this.loadedSave = loadLocal(SAVE_SLOT);
    this.narrativeState = this.loadedSave
      ? missionSaveToObjectiveState(this.loadedSave.mission)
      : createNarrativeState();
    const spawnPos = this.getInitialPlayerPosition();
    this.lastKnownZoneId = this.loadedSave?.mission.lastKnownZoneId ?? checkZone(spawnPos.posX, spawnPos.posY);

    // Criar player no spawn inicial
    this.player = new PlayerSprite(this, spawnPos.posX, spawnPos.posY);
    this.hydratePlayerFromSave();

    // Criar inimigos patrulheiros distribuídos nas zonas de transição
    this.enemies = [
      new EnemySprite(this, 'zombie-1', ENEMY_SPAWNS['zombie-1'].posX, ENEMY_SPAWNS['zombie-1'].posY, ENEMY_ASSET_KEYS[0]),                       // Rua externa
      new EnemySprite(this, 'zombie-2', ENEMY_SPAWNS['zombie-2'].posX, ENEMY_SPAWNS['zombie-2'].posY, ENEMY_ASSET_KEYS[4], { alertRadius: 5 }),   // Caminho intermediário
      new EnemySprite(this, 'zombie-3', ENEMY_SPAWNS['zombie-3'].posX, ENEMY_SPAWNS['zombie-3'].posY, ENEMY_ASSET_KEYS[8]),                       // Próximo à casa de Rafael
    ];

    // Criar itens e pistas da fase
    const itemDefs: InteractableData[] = [
      // Pista 1: Mochila de Luísa no Mercado Abandonado
      {
        id: 'note-backpack', posX: 32, posY: 10, interactionRadius: 1.5,
        item: { itemId: 'note-backpack', name: 'Mochila de Luísa', type: 'note', quantity: 1 },
        collected: false,
      },
      // Pista 2: Diário de Luísa na Casa de Rafael
      {
        id: 'note-diary', posX: 49, posY: 41, interactionRadius: 1.5,
        item: { itemId: 'note-diary', name: 'Diário de Luísa', type: 'note', quantity: 1 },
        collected: false,
      },
      // Consumíveis de sobrevivência
      {
        id: 'battery-1', posX: 34, posY: 8, interactionRadius: 1.5,
        item: { itemId: 'battery-1', name: 'Bateria', type: 'battery', quantity: 1 },
        collected: false,
      },
      {
        id: 'heal-1', posX: 51, posY: 46, interactionRadius: 1.5,
        item: { itemId: 'heal-1', name: 'Kit Médico', type: 'healing', quantity: 1 },
        collected: false,
      },
    ];

    this.interactables = itemDefs.map(d => new InteractableSprite(this, d));
    this.restoreCollectedInteractables(this.loadedSave?.mission.collectedInteractionIds ?? []);

    // Desenhar os textos físicos identificando as áreas
    for (const zone of GAME_ZONES) {
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
    const cameraBounds = getCameraBounds();
    this.cameras.main.setBounds(cameraBounds.x, cameraBounds.y, cameraBounds.width, cameraBounds.height);
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

    if (this.narrativeState.phaseCompleted) {
      this.showLevelCompleteOverlay();
    }

    // Escutar eventos do player
    eventBridge.on('player:interact', this.handleInteract, this);
    eventBridge.on('player:attack', this.handleAttack, this);
    eventBridge.on('player:dead', this.handlePlayerDead, this);
    eventBridge.on('game:pause', this.handlePause, this);

    // Iniciar HUD
    this.scene.launch('UIScene');

    // Mandar objetivo inicial para a HUD
    this.time.delayedCall(0, () => {
      eventBridge.emit('narrative:objective', { objective: getCurrentObjectiveText(this.narrativeState) });
    });

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
    this.drawIsometricGrid(MAP_CONFIG.gridWidth, MAP_CONFIG.gridHeight);
    this.drawVisualZones();

    // Depth sort
    this.depthSortAll();
  }

  private checkNarrativeTriggers(px: number, py: number) {
    const currentZone = checkZone(px, py);
    if (currentZone) {
      this.lastKnownZoneId = currentZone;
    }
    this.applyMissionProgress(progressNarrativeByZone(this.narrativeState, currentZone));
  }

  private drawVisualZones() {
    for (const zone of GAME_ZONES) {
      // Coletar os quatro cantos isométricos
      const s1 = toScreen({ x: zone.minX, y: zone.minY, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      const s2 = toScreen({ x: zone.maxX + 1, y: zone.minY, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      const s3 = toScreen({ x: zone.maxX + 1, y: zone.maxY + 1, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      const s4 = toScreen({ x: zone.minX, y: zone.maxY + 1, z: 0 }, TILE_WIDTH, TILE_HEIGHT);

      this.graphics.lineStyle(1, zone.color, 0.42);
      this.graphics.lineBetween(s1.x, s1.y, s2.x, s2.y);
      this.graphics.lineBetween(s2.x, s2.y, s3.x, s3.y);
      this.graphics.lineBetween(s3.x, s3.y, s4.x, s4.y);
      this.graphics.lineBetween(s4.x, s4.y, s1.x, s1.y);
    }
  }

  private createEnvironmentArt() {
    this.environmentSprites = [];

    for (const art of ENVIRONMENT_ART) {
      if (!this.textures.exists(art.key)) continue;

      const screen = toScreen({ x: art.x, y: art.y, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      if (art.footprintWidth && art.footprintHeight) {
        const footprint = this.add.polygon(
          screen.x,
          screen.y + (art.footprintOffsetY ?? 0),
          [
            0, -art.footprintHeight / 2,
            art.footprintWidth / 2, 0,
            0, art.footprintHeight / 2,
            -art.footprintWidth / 2, 0,
          ],
          0x020617,
          art.footprintAlpha ?? 0.2
        ).setDepth(art.depth - 1);

        this.environmentSprites.push(footprint);
      }

      const sprite = this.add.image(screen.x, screen.y, art.key)
        .setOrigin(0.5, art.originY ?? 0.75)
        .setScale(art.scale)
        .setAlpha(art.alpha ?? 1)
        .setDepth(art.depth);

      this.environmentSprites.push(sprite);
    }
  }

  private drawIsometricGrid(sizeX: number, sizeY: number) {
    this.graphics.lineStyle(1, 0x2d3748, 0.18);

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
        if (
          this.isMissionInteraction(sprite.interactableData.id) &&
          !canProgressNarrativeInteraction(this.narrativeState, sprite.interactableData.id)
        ) {
          eventBridge.emit('narrative:dialog', { text: "Rafael: 'Ainda preciso seguir o plano antes de mexer nisso.'" });
          break;
        }

        const collected = this.player.collectItem(sprite.interactableData.item);
        if (collected) {
          sprite.markCollected();

          if (this.isMissionInteraction(sprite.interactableData.id)) {
            this.applyMissionProgress(progressNarrativeByInteraction(
              this.narrativeState,
              sprite.interactableData.id
            ));
          } else {
            eventBridge.emit('narrative:dialog', { text: `Você coletou: ${sprite.interactableData.item.name}` });
            this.persistMissionProgress();
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

  private applyMissionProgress(result: MissionProgressResult) {
    if (!result.completedObjectiveId) return;

    this.narrativeState = result.state;
    this.persistMissionProgress();
    eventBridge.emit('narrative:objective', { objective: OBJECTIVES[this.narrativeState.currentObjectiveId] });

    const progressFeedback = result.phaseCompleted
      ? 'Fase concluída: o caminho até a Escola Municipal está aberto.'
      : `Objetivo atualizado: ${OBJECTIVES[this.narrativeState.currentObjectiveId]}`;
    eventBridge.emit('narrative:dialog', {
      text: result.message ? `${result.message}\n${progressFeedback}` : progressFeedback,
    });

    if (result.phaseCompleted) {
      this.showLevelCompleteOverlay();
    }
  }

  private isMissionInteraction(interactionId: string) {
    return interactionId === 'note-backpack' || interactionId === 'note-diary';
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
    this.lastKnownZoneId = checkZone(respawnPos.posX, respawnPos.posY);

    // Restaurar e reviver inimigos
    for (const enemy of this.enemies) {
      const spawn = ENEMY_SPAWNS[enemy.enemyState.id] || { posX: 15, posY: 15 };
      enemy.enemyState = {
        ...enemy.enemyState,
        health: enemy.enemyState.maxHealth,
        posX: spawn.posX,
        posY: spawn.posY,
        state: 'IDLE',
      };
      enemy.setVisible(true);
    }

    this.persistMissionProgress();
  }

  private handleResetFull() {
    deleteLocal(SAVE_SLOT);
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

  private getInitialPlayerPosition(): { posX: number; posY: number } {
    if (this.loadedSave?.mission.playerPosition) {
      return resolveSafeRestorePosition({
        savedPosition: {
          posX: this.loadedSave.mission.playerPosition.x,
          posY: this.loadedSave.mission.playerPosition.y,
        },
        activeCheckpointId: this.loadedSave.mission.activeCheckpointId,
        hazards: Object.values(ENEMY_SPAWNS),
      });
    }

    return getRespawnPosition(this.narrativeState);
  }

  private hydratePlayerFromSave() {
    if (!this.loadedSave) return;

    this.player.playerState = {
      ...this.player.playerState,
      health: Math.max(0, Math.min(this.loadedSave.playerState.health, this.player.playerState.maxHealth)),
      posX: this.player.playerState.posX,
      posY: this.player.playerState.posY,
    };
    this.player.staminaState = {
      ...this.player.staminaState,
      current: Math.max(0, Math.min(this.loadedSave.playerState.stamina, this.player.staminaState.max)),
    };
    this.player.inventoryState = {
      ...this.player.inventoryState,
      items: this.loadedSave.inventory.slice(0, this.player.inventoryState.maxSlots).map((itemId) => ({
        itemId,
        name: itemId,
        type: this.getSavedItemType(itemId),
        quantity: 1,
      })),
    };
  }

  private restoreCollectedInteractables(collectedInteractionIds: string[]) {
    const collected = new Set(collectedInteractionIds);

    for (const sprite of this.interactables) {
      if (collected.has(sprite.interactableData.id)) {
        sprite.markCollected();
      }
    }
  }

  private persistMissionProgress() {
    if (!this.player) return;

    const updatedAt = new Date().toISOString();
    const currentZone = checkZone(this.player.playerState.posX, this.player.playerState.posY);
    if (currentZone) {
      this.lastKnownZoneId = currentZone;
    }

    const payload: SavePayload = {
      slot: SAVE_SLOT,
      schemaVersion: 1,
      updatedAt,
      playerState: {
        health: this.player.playerState.health,
        stamina: this.player.staminaState.current,
        position: {
          x: this.player.playerState.posX,
          y: this.player.playerState.posY,
        },
      },
      inventory: this.player.inventoryState.items.map((item) => item.itemId),
      gameStats: {
        checkpointsReached: Array.from(
          { length: this.narrativeState.activeCheckpointId },
          (_, index) => `checkpoint-${index + 1}`
        ),
        evacuationRadioHeard: this.narrativeState.phaseCompleted,
      },
      mission: objectiveStateToMissionSave(this.narrativeState, {
        collectedInteractionIds: this.getCollectedInteractionIds(),
        playerPosition: {
          x: this.player.playerState.posX,
          y: this.player.playerState.posY,
        },
        lastKnownZoneId: this.lastKnownZoneId,
        updatedAt,
      }),
    };

    saveLocal(SAVE_SLOT, payload);
  }

  private getCollectedInteractionIds(): string[] {
    return this.interactables
      .filter((sprite) => sprite.interactableData.collected)
      .map((sprite) => sprite.interactableData.id);
  }

  private getSavedItemType(itemId: string): InteractableData['item']['type'] {
    if (itemId.startsWith('battery')) return 'battery';
    if (itemId.startsWith('heal')) return 'healing';
    if (itemId.startsWith('key')) return 'key';
    if (itemId.startsWith('ammo')) return 'ammo';
    return 'note';
  }

  private showLevelCompleteOverlay() {
    this.levelComplete = true;
    this.player.setVisible(false);
    this.levelCompleteText.setPosition(this.scale.width / 2, this.scale.height / 2);
    this.levelCompleteText.setText(
      "FASE CONCLUÍDA: PLANTÃO FINAL!\n\nO caminho até a Escola Municipal está aberto.\nRafael preservou as pistas de Luísa e chegou ao próximo ponto de evacuação.\n\nProgresso salvo. Pressione R para reiniciar a fase."
    );
    this.levelCompleteText.setVisible(true);
  }

  shutdown() {
    eventBridge.off('player:interact', this.handleInteract, this);
    eventBridge.off('player:attack', this.handleAttack, this);
    eventBridge.off('player:dead', this.handlePlayerDead, this);
    eventBridge.off('game:pause', this.handlePause, this);
  }
}
