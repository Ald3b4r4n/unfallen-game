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
import { getCameraBounds, TILE_HEIGHT, TILE_WIDTH } from '../config/map-config';
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
import { buildMissionFeedbackEvents } from '../systems/mission-feedback';
import {
  getPhaseOneEndingSteps,
  getPhaseOneFinalState,
  shouldStartPhaseOneEndingSequence,
} from '../systems/phase-ending';
import { INITIAL_SPAWN } from '../systems/spawn-points';
import { PHASE_ONE_ENVIRONMENT_ART } from '../systems/environment-props';
import { DEFAULT_RAIN_CONFIG, RainStreak, createRainStreaks } from '../systems/weather-effects';
import {
  PHASE_ONE_AMBIENT_LIGHTS,
  PHASE_ONE_ATMOSPHERE,
} from '../systems/lighting-effects';
import { HazardPosition, resolveSafeRestorePosition } from '../systems/safe-restore';
import { resolveMovementAgainstStaticObstacles } from '../systems/static-collision';
import {
  PHASE_ONE_URBAN_DECORATIONS,
  PHASE_ONE_URBAN_SURFACES,
  getEnterableBuildingAtPosition,
} from '../systems/urban-layout';
import type { SavePayload } from '../../save/save-schema';
import { deleteLocal, loadLocal, saveLocal } from '../../save/local-save';

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

// Enemy spawns repositioned for compacted 32x32 grid
const ENEMY_SPAWNS: Record<string, HazardPosition> = {
  'zombie-1': { id: 'zombie-1', posX: 11, posY: 7 },
  'zombie-2': { id: 'zombie-2', posX: 18, posY: 18 },
  'zombie-3': { id: 'zombie-3', posX: 26, posY: 20 },
};

export default class GameScene extends Phaser.Scene {
  private graphics!: Phaser.GameObjects.Graphics;
  private groundGraphics!: Phaser.GameObjects.Graphics;
  private player!: PlayerSprite;
  private enemies: EnemySprite[] = [];
  private interactables: InteractableSprite[] = [];
  private gameOver = false;
  private levelComplete = false;
  private gameOverText!: Phaser.GameObjects.Text;
  private levelCompleteText!: Phaser.GameObjects.Text;
  private phaseEndingBg!: Phaser.GameObjects.Rectangle;
  private phaseEndingTitle!: Phaser.GameObjects.Text;
  private phaseEndingBody!: Phaser.GameObjects.Text;
  private phaseEndingFooter!: Phaser.GameObjects.Text;
  private restartKey!: Phaser.Input.Keyboard.Key;
  private environmentSprites: Phaser.GameObjects.GameObject[] = [];
  private buildingSprites: Array<{
    interiorId: string;
    sprite: Phaser.GameObjects.Image;
    defaultAlpha: number;
    isInterior: boolean;
  }> = [];
  private rainGraphics!: Phaser.GameObjects.Graphics;
  private rainStreaks: RainStreak[] = [];
  private rainElapsed = 0;

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
    this.graphics.setVisible(false);
    this.createUrbanGround();
    this.createEnvironmentArt();
    this.createAtmosphere();
    this.createWeatherEffects();

    // Inicializar o fluxo narrativo a partir do save local quando existir.
    this.loadedSave = loadLocal(SAVE_SLOT);
    this.narrativeState = this.loadedSave
      ? missionSaveToObjectiveState(this.loadedSave.mission)
      : createNarrativeState();
    const spawnPos = this.getInitialPlayerPosition();
    this.lastKnownZoneId = this.loadedSave?.mission.lastKnownZoneId ?? checkZone(spawnPos.posX, spawnPos.posY);

    // Criar player no spawn inicial
    this.player = new PlayerSprite(this, spawnPos.posX, spawnPos.posY);
    this.player.setMovementResolver(resolveMovementAgainstStaticObstacles);
    this.hydratePlayerFromSave();

    // Criar inimigos patrulheiros distribuídos nas zonas de transição
    this.enemies = [
      new EnemySprite(this, 'zombie-1', ENEMY_SPAWNS['zombie-1'].posX, ENEMY_SPAWNS['zombie-1'].posY, ENEMY_ASSET_KEYS[0]),                       // Rua externa
      new EnemySprite(this, 'zombie-2', ENEMY_SPAWNS['zombie-2'].posX, ENEMY_SPAWNS['zombie-2'].posY, ENEMY_ASSET_KEYS[4], { alertRadius: 5 }),   // Caminho intermediário
      new EnemySprite(this, 'zombie-3', ENEMY_SPAWNS['zombie-3'].posX, ENEMY_SPAWNS['zombie-3'].posY, ENEMY_ASSET_KEYS[8]),                       // Próximo à casa de Rafael
    ];

    // Criar itens e pistas da fase — positions adjusted for 32x32 grid
    const itemDefs: InteractableData[] = [
      // Pista 1: Mochila de Luísa no Mercado Abandonado
      {
        id: 'note-backpack', posX: 20, posY: 7, interactionRadius: 1.5,
        item: { itemId: 'note-backpack', name: 'Mochila de Luísa', type: 'note', quantity: 1 },
        collected: false,
      },
      // Pista 2: Diário de Luísa na Casa de Rafael
      {
        id: 'note-diary', posX: 26, posY: 19, interactionRadius: 1.5,
        item: { itemId: 'note-diary', name: 'Diário de Luísa', type: 'note', quantity: 1 },
        collected: false,
      },
      // Consumíveis de sobrevivência
      {
        id: 'battery-1', posX: 21, posY: 6, interactionRadius: 1.5,
        item: { itemId: 'battery-1', name: 'Bateria', type: 'battery', quantity: 1 },
        collected: false,
      },
      {
        id: 'heal-1', posX: 27, posY: 22, interactionRadius: 1.5,
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
    this.createPhaseEndingOverlay();

    if (this.input.keyboard) {
      this.restartKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }

    if (this.narrativeState.phaseCompleted) {
      this.showLevelCompleteOverlay(false);
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
    this.updateWeather(delta);

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
    this.updateBuildingTransparency(px, py);

    // Atualizar inimigos e verificar dano de contato
    for (const enemy of this.enemies) {
      const contactDamage = enemy.update(time, delta, px, py);
      if (contactDamage && contactDamage > 0) {
        this.player.takeDamage(contactDamage);
      }
    }

    // Depth sort
    this.depthSortAll();
  }

  private createUrbanGround() {
    this.groundGraphics = this.add.graphics().setDepth(-52);
    this.drawWorldBaseFloor();

    for (const surface of PHASE_ONE_URBAN_SURFACES) {
      const s1 = toScreen({ x: surface.minX, y: surface.minY, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      const s2 = toScreen({ x: surface.maxX + 1, y: surface.minY, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      const s3 = toScreen({ x: surface.maxX + 1, y: surface.maxY + 1, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      const s4 = toScreen({ x: surface.minX, y: surface.maxY + 1, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      const points = [s1, s2, s3, s4].map((point) =>
        new Phaser.Math.Vector2(point.x, point.y)
      );

      this.groundGraphics.fillStyle(surface.color, surface.alpha);
      this.groundGraphics.fillPoints(points, true);

      if (surface.borderColor) {
        this.groundGraphics.lineStyle(1, surface.borderColor, surface.borderAlpha ?? 0.18);
        this.groundGraphics.strokePoints(points, true);
      }
    }

    this.drawRoadMarkings();
    this.createPurchasedGroundTiles();
    this.drawUrbanDecorations();
  }

  private drawWorldBaseFloor() {
    const gridSize = 32;
    const corners = [
      toScreen({ x: 0, y: 0, z: 0 }, TILE_WIDTH, TILE_HEIGHT),
      toScreen({ x: gridSize, y: 0, z: 0 }, TILE_WIDTH, TILE_HEIGHT),
      toScreen({ x: gridSize, y: gridSize, z: 0 }, TILE_WIDTH, TILE_HEIGHT),
      toScreen({ x: 0, y: gridSize, z: 0 }, TILE_WIDTH, TILE_HEIGHT),
    ].map((point) => new Phaser.Math.Vector2(point.x, point.y));

    // Dense dark base — no visible grid
    this.groundGraphics.fillStyle(0x0a0c0e, 0.82);
    this.groundGraphics.fillPoints(corners, true);

    // Very faint structural lines — almost invisible
    this.groundGraphics.lineStyle(1, 0x1f2937, 0.03);
    for (let x = 0; x <= gridSize; x += 4) {
      const start = toScreen({ x, y: 0, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      const end = toScreen({ x, y: gridSize, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      this.groundGraphics.lineBetween(start.x, start.y, end.x, end.y);
    }
    for (let y = 0; y <= gridSize; y += 4) {
      const start = toScreen({ x: 0, y, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      const end = toScreen({ x: gridSize, y, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      this.groundGraphics.lineBetween(start.x, start.y, end.x, end.y);
    }

    // Dense ground stains and debris — way more than before
    for (let index = 0; index < 200; index += 1) {
      const x = (index * 13) % gridSize;
      const y = (index * 23 + 5) % gridSize;
      const screen = toScreen({ x, y, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      const w = 16 + (index % 6) * 8;
      const h = 4 + (index % 4) * 3;
      const color = index % 11 === 0 ? 0x4b1111 : index % 5 === 0 ? 0x1f2937 : 0x111827;
      const alpha = index % 11 === 0 ? 0.22 : 0.2;
      this.groundGraphics.fillStyle(color, alpha);
      this.groundGraphics.fillEllipse(screen.x, screen.y + 4, w, h);
    }
  }

  private createPurchasedGroundTiles() {
    const tileKeys = [
      GAME_ASSETS.purchased.asphaltCrackedIso.key,
      GAME_ASSETS.purchased.asphaltRoadLineIso.key,
      GAME_ASSETS.purchased.asphaltCrosswalkIso.key,
    ];

    if (!tileKeys.every((key) => this.textures.exists(key))) return;

    const filledCells = new Set<string>();
    for (const surface of PHASE_ONE_URBAN_SURFACES) {
      const isYard = surface.id.includes('yard');
      for (let x = Math.ceil(surface.minX); x <= Math.floor(surface.maxX); x += 1) {
        for (let y = Math.ceil(surface.minY); y <= Math.floor(surface.maxY); y += 1) {
          const cellId = `${x}:${y}`;
          if (filledCells.has(cellId)) continue;
          filledCells.add(cellId);

          const screen = toScreen({ x, y, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
          
          let key = tileKeys[0]; // Default: cracked asphalt

          if (!isYard) {
            // Organize Road Lines and Crosswalks dynamically
            
            // 1. Crosswalks (pedestrian crossings at key entry points/intersections)
            const isBaseCrosswalk = (x === 8 || x === 9) && (y >= 4 && y <= 6);
            const isMarketCrosswalk = (x === 17 || x === 18) && (y >= 5 && y <= 7);
            const isHouseCrosswalk = (x === 23 || x === 24) && (y >= 13 && y <= 15);
            const isSchoolCrosswalk = (x === 27 || x === 28) && (y >= 25 && y <= 27);

            if (isBaseCrosswalk || isMarketCrosswalk || isHouseCrosswalk || isSchoolCrosswalk) {
              key = tileKeys[2]; // asphaltCrosswalkIso
            } else {
              // 2. Continuous Road Centerlines (aligning with physical road flow)
              const isBaseStreetLine = (y === 6) && (x >= 7 && x <= 16);
              const isMarketStreetLine = (y === 8) && (x >= 14 && x <= 24);
              const isVerticalStreetLine = (x === 14) && (y >= 6 && y <= 12);
              const isDiagonalConnector = (y === x - 2) && (x >= 14 && x <= 22) && (y >= 10 && y <= 18);
              const isResidentialStreetLine = (y === 20) && (x >= 20 && x <= 30);
              const isSchoolStreetLine = (y === x - 2) && (x >= 25 && x <= 30) && (y >= 23 && y <= 28);

              if (isBaseStreetLine || isMarketStreetLine || isVerticalStreetLine || isDiagonalConnector || isResidentialStreetLine || isSchoolStreetLine) {
                key = tileKeys[1]; // asphaltRoadLineIso
              }
            }
          }

          const tile = this.add.image(screen.x, screen.y, key)
            .setOrigin(0.5, 0.5)
            .setScale((TILE_WIDTH / 64) * 1.04)
            .setAlpha(isYard ? 0.88 : 0.94)
            .setDepth(-48.8);

          this.environmentSprites.push(tile);
        }
      }
    }
  }

  private drawRoadMarkings() {
    const markings = [
      { x1: 7, y1: 6, x2: 16, y2: 6 },
      { x1: 14, y1: 8, x2: 24, y2: 8 },
      { x1: 14, y1: 12, x2: 22, y2: 18 },
      { x1: 22, y1: 18, x2: 30, y2: 20 },
      { x1: 25, y1: 23, x2: 30, y2: 28 },
    ];

    this.groundGraphics.lineStyle(1, 0x94a3b8, 0.22);
    for (const marking of markings) {
      const start = toScreen({ x: marking.x1, y: marking.y1, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      const end = toScreen({ x: marking.x2, y: marking.y2, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      this.groundGraphics.lineBetween(start.x, start.y, end.x, end.y);
    }
  }

  private drawUrbanDecorations() {
    for (const decoration of PHASE_ONE_URBAN_DECORATIONS) {
      const screen = toScreen({ x: decoration.x, y: decoration.y, z: 0 }, TILE_WIDTH, TILE_HEIGHT);

      if (decoration.kind === 'tree') {
        const tree = this.add.graphics()
          .setDepth(decoration.depth);
        // Thicker trunk
        tree.lineStyle(3, 0x5b4636, decoration.alpha);
        tree.lineBetween(screen.x, screen.y + 10 * decoration.scale, screen.x, screen.y - 18 * decoration.scale);
        // Branches
        tree.lineStyle(2, 0x7f6047, decoration.alpha * 0.82);
        tree.lineBetween(screen.x, screen.y - 7 * decoration.scale, screen.x - 14 * decoration.scale, screen.y - 22 * decoration.scale);
        tree.lineBetween(screen.x, screen.y - 10 * decoration.scale, screen.x + 12 * decoration.scale, screen.y - 24 * decoration.scale);
        tree.lineBetween(screen.x, screen.y - 14 * decoration.scale, screen.x - 8 * decoration.scale, screen.y - 28 * decoration.scale);
        tree.lineBetween(screen.x, screen.y - 5 * decoration.scale, screen.x + 10 * decoration.scale, screen.y - 18 * decoration.scale);
        // Shadow
        tree.fillStyle(0x1f2937, decoration.alpha * 0.4);
        tree.fillEllipse(screen.x, screen.y + 12 * decoration.scale, 22 * decoration.scale, 8 * decoration.scale);
        this.environmentSprites.push(tree);
      } else {
        const pole = this.add.rectangle(screen.x, screen.y - 4, 4, 28 * decoration.scale, decoration.color, decoration.alpha)
          .setDepth(decoration.depth);
        const lamp = this.add.ellipse(screen.x, screen.y - 20 * decoration.scale, 10, 10, 0xf8fafc, decoration.alpha * 0.9)
          .setDepth(decoration.depth + 1)
          .setBlendMode(Phaser.BlendModes.ADD);
        // Glow on ground
        const glow = this.add.ellipse(screen.x, screen.y + 8, 40, 16, 0xfbbf24, 0.06)
          .setDepth(decoration.depth - 1)
          .setBlendMode(Phaser.BlendModes.ADD);
        this.environmentSprites.push(pole, lamp, glow);
      }
    }
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

      this.graphics.lineStyle(1, zone.color, 0.25);
      this.graphics.lineBetween(s1.x, s1.y, s2.x, s2.y);
      this.graphics.lineBetween(s2.x, s2.y, s3.x, s3.y);
      this.graphics.lineBetween(s3.x, s3.y, s4.x, s4.y);
      this.graphics.lineBetween(s4.x, s4.y, s1.x, s1.y);
    }
  }

  private createEnvironmentArt() {
    this.environmentSprites = [];
    this.createAmbientLights();

    for (const art of PHASE_ONE_ENVIRONMENT_ART) {
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
      if (art.interiorId) {
        this.buildingSprites.push({
          interiorId: art.interiorId,
          sprite,
          defaultAlpha: art.alpha ?? 1,
          isInterior: !!art.isInterior,
        });

        // If it is an interior prop, hide it initially if player starts outside this building
        const activeInterior = getEnterableBuildingAtPosition(
          this.player ? this.player.playerState.posX : INITIAL_SPAWN.posX,
          this.player ? this.player.playerState.posY : INITIAL_SPAWN.posY
        );
        if (art.isInterior && activeInterior?.id !== art.interiorId) {
          sprite.setAlpha(0);
        }
      }
    }
  }

  private updateBuildingTransparency(posX: number, posY: number) {
    const activeInterior = getEnterableBuildingAtPosition(posX, posY);

    for (const building of this.buildingSprites) {
      let targetAlpha = building.defaultAlpha;

      if (building.isInterior) {
        // Interior element: fully visible only when the player is inside the building
        targetAlpha = activeInterior?.id === building.interiorId
          ? building.defaultAlpha
          : 0;
      } else {
        // Exterior element: fades to near-invisible when the player enters the building
        targetAlpha = activeInterior?.id === building.interiorId
          ? 0.05
          : building.defaultAlpha;
      }

      if (Math.abs(building.sprite.alpha - targetAlpha) > 0.01) {
        building.sprite.setAlpha(targetAlpha);
      }
    }
  }

  private createAmbientLights() {
    for (const light of PHASE_ONE_AMBIENT_LIGHTS) {
      const screen = toScreen({ x: light.x, y: light.y, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
      const glow = this.add.ellipse(
        screen.x,
        screen.y + 8,
        light.radiusX,
        light.radiusY,
        light.color,
        light.alpha
      )
        .setDepth(-18)
        .setBlendMode(Phaser.BlendModes.ADD);

      this.environmentSprites.push(glow);
    }
  }

  private createAtmosphere() {
    const { width, height } = this.scale;

    const darkness = this.add.rectangle(
      width / 2,
      height / 2,
      width,
      height,
      0x020617,
      PHASE_ONE_ATMOSPHERE.darknessAlpha
    )
      .setScrollFactor(0)
      .setDepth(55);

    const fog = this.add.rectangle(
      width / 2,
      height * 0.58,
      width,
      height * 0.62,
      0x64748b,
      PHASE_ONE_ATMOSPHERE.fogAlpha
    )
      .setScrollFactor(0)
      .setDepth(56);

    const vignetteTop = this.add.rectangle(
      width / 2,
      height * 0.08,
      width,
      height * 0.16,
      0x000000,
      PHASE_ONE_ATMOSPHERE.vignetteAlpha
    )
      .setScrollFactor(0)
      .setDepth(57);

    const vignetteBottom = this.add.rectangle(
      width / 2,
      height * 0.92,
      width,
      height * 0.16,
      0x000000,
      PHASE_ONE_ATMOSPHERE.vignetteAlpha
    )
      .setScrollFactor(0)
      .setDepth(57);

    this.createPurchasedWeatherOverlays(width, height);
    this.environmentSprites.push(darkness, fog, vignetteTop, vignetteBottom);
  }

  private createPurchasedWeatherOverlays(width: number, height: number) {
    const overlays = [
      {
        key: GAME_ASSETS.purchased.weatherStormOverlayA.key,
        x: width * 0.5,
        y: height * 0.48,
        scaleX: 5.9,
        scaleY: 4.7,
        alpha: 0.14,
        depth: 58,
      },
      {
        key: GAME_ASSETS.purchased.weatherRainCurtainA.key,
        x: width * 0.32,
        y: height * 0.48,
        scaleX: 4.6,
        scaleY: 4.8,
        alpha: 0.16,
        depth: 70,
      },
      {
        key: GAME_ASSETS.purchased.weatherMistyHazeA.key,
        x: width * 0.55,
        y: height * 0.62,
        scaleX: 4.5,
        scaleY: 2.8,
        alpha: 0.12,
        depth: 59,
      },
      {
        key: GAME_ASSETS.purchased.fogGroundLowA.key,
        x: width * 0.42,
        y: height * 0.72,
        scaleX: 2.8,
        scaleY: 1.8,
        alpha: 0.16,
        depth: 60,
      },
      {
        key: GAME_ASSETS.purchased.fogWhiteLowA.key,
        x: width * 0.68,
        y: height * 0.78,
        scaleX: 2.7,
        scaleY: 1.7,
        alpha: 0.1,
        depth: 60,
      },
    ];

    for (const overlay of overlays) {
      if (!this.textures.exists(overlay.key)) continue;

      const sprite = this.add.image(overlay.x, overlay.y, overlay.key)
        .setOrigin(0.5)
        .setScale(overlay.scaleX, overlay.scaleY)
        .setAlpha(overlay.alpha)
        .setScrollFactor(0)
        .setDepth(overlay.depth)
        .setBlendMode(Phaser.BlendModes.ADD);

      this.environmentSprites.push(sprite);
    }
  }

  private createWeatherEffects() {
    this.rainStreaks = createRainStreaks(this.scale.width, this.scale.height);
    this.rainGraphics = this.add.graphics()
      .setScrollFactor(0)
      .setDepth(72);
  }

  private updateWeather(delta: number) {
    if (!this.rainGraphics) return;

    const { width, height } = this.scale;
    this.rainElapsed += delta / 1000;
    this.rainGraphics.clear();

    for (const streak of this.rainStreaks) {
      const sway = Math.sin(this.rainElapsed * 2 + streak.phase) * 2;
      const y = (streak.y + this.rainElapsed * streak.speed) % (height + 80) - 40;
      const wind = (this.rainElapsed * DEFAULT_RAIN_CONFIG.slant * 2.2 + sway) % 80;
      const x = (streak.x + wind + width + 40) % (width + 80) - 40;

      this.rainGraphics.lineStyle(streak.width, 0x93c5fd, streak.alpha);
      this.rainGraphics.lineBetween(
        x,
        y,
        x + DEFAULT_RAIN_CONFIG.slant,
        y + streak.length
      );

      // Splash at bottom
      if (streak.width > 1 && y > height * 0.75) {
        this.rainGraphics.lineStyle(1, 0xbfdbfe, streak.alpha * 0.6);
        this.rainGraphics.lineBetween(x - 4, y + streak.length, x + 4, y + streak.length + 2);
      }
    }
  }

  private drawIsometricGrid(sizeX: number, sizeY: number) {
    this.graphics.lineStyle(1, 0x1e293b, 0.09);

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
    for (const feedback of buildMissionFeedbackEvents(result, OBJECTIVES[this.narrativeState.currentObjectiveId])) {
      eventBridge.emit('narrative:toast', feedback);
    }

    if (shouldStartPhaseOneEndingSequence(result)) {
      this.showLevelCompleteOverlay(true);
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
      const spawn = ENEMY_SPAWNS[enemy.enemyState.id] || { posX: 11, posY: 7 };
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
    this.hidePhaseEndingOverlay();
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

  private createPhaseEndingOverlay() {
    const centerX = this.scale.width / 2;
    const centerY = this.scale.height / 2;

    this.phaseEndingBg = this.add.rectangle(centerX, centerY, this.scale.width, this.scale.height, 0x020617, 0.86)
      .setScrollFactor(0)
      .setDepth(98)
      .setVisible(false);

    this.phaseEndingTitle = this.add.text(centerX, centerY - 110, '', {
      fontFamily: 'monospace',
      fontSize: '18px',
      color: '#fbbf24',
      align: 'center',
      wordWrap: { width: this.scale.width - 120 },
    }).setOrigin(0.5).setScrollFactor(0).setDepth(101).setVisible(false);

    this.phaseEndingBody = this.add.text(centerX, centerY - 14, '', {
      fontFamily: 'monospace',
      fontSize: '14px',
      color: '#f8fafc',
      align: 'center',
      lineSpacing: 8,
      wordWrap: { width: this.scale.width - 140 },
    }).setOrigin(0.5).setScrollFactor(0).setDepth(101).setVisible(false);

    this.phaseEndingFooter = this.add.text(centerX, centerY + 118, '', {
      fontFamily: 'monospace',
      fontSize: '11px',
      color: '#94a3b8',
      align: 'center',
      wordWrap: { width: this.scale.width - 160 },
    }).setOrigin(0.5).setScrollFactor(0).setDepth(101).setVisible(false);
  }

  private showLevelCompleteOverlay(playSequence: boolean) {
    this.levelComplete = true;
    this.player.setVisible(false);
    this.phaseEndingBg.setVisible(true);

    if (playSequence) {
      this.playPhaseEndingSequence();
      return;
    }

    this.showPhaseEndingFinalState();
  }

  private playPhaseEndingSequence() {
    const steps = getPhaseOneEndingSteps();
    let elapsed = 0;

    for (const step of steps) {
      this.time.delayedCall(elapsed, () => {
        this.levelCompleteText.setVisible(false);
        this.phaseEndingTitle.setText(step.title ?? '').setVisible(Boolean(step.title));
        this.phaseEndingBody.setText(step.text).setVisible(true);
        this.phaseEndingFooter.setText('').setVisible(false);
      });
      elapsed += step.durationMs;
    }

    this.time.delayedCall(elapsed, () => {
      this.showPhaseEndingFinalState();
    });
  }

  private showPhaseEndingFinalState() {
    const finalState = getPhaseOneFinalState();
    this.phaseEndingBg.setVisible(true);
    this.phaseEndingTitle.setText(finalState.title).setVisible(true);
    this.phaseEndingBody.setText(finalState.subtitle).setVisible(true);
    this.phaseEndingFooter
      .setText(`${finalState.footer}\n\nPressione R para reiniciar a fase.`)
      .setVisible(true);
    this.levelCompleteText.setVisible(false);
  }

  private hidePhaseEndingOverlay() {
    this.phaseEndingBg.setVisible(false);
    this.phaseEndingTitle.setVisible(false);
    this.phaseEndingBody.setVisible(false);
    this.phaseEndingFooter.setVisible(false);
  }

  shutdown() {
    eventBridge.off('player:interact', this.handleInteract, this);
    eventBridge.off('player:attack', this.handleAttack, this);
    eventBridge.off('player:dead', this.handlePlayerDead, this);
    eventBridge.off('game:pause', this.handlePause, this);
  }
}
