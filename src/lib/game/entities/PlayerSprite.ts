import Phaser from 'phaser';
import { toScreen } from '../isometric/iso-math';
import {
  PlayerStateData,
  createPlayerState,
  applyDamage,
  isDead,
  respawn,
} from '../entities/player-state';
import { StaminaData, createStamina, tryDash, regenerateStamina, resetStamina } from '../systems/stamina';
import { BatteryData, createBattery, toggleLantern, drainBattery } from '../systems/battery';
import { InventoryData, createInventory, addItem, ItemSlot } from '../systems/inventory';
import { eventBridge } from '../event-bridge';
import { GAME_ASSETS } from '../config/asset-keys';

const PLAYER_SPEED = 2.5;  // unidades lógicas por segundo
const DASH_SPEED_MULT = 3;
const DASH_DURATION_MS = 200;
const TILE_WIDTH = 64;
const TILE_HEIGHT = 32;
const PLAYER_SPRITE_SCALE = 0.08;

export default class PlayerSprite extends Phaser.GameObjects.Container {
  public playerState: PlayerStateData;
  public staminaState: StaminaData;
  public batteryState: BatteryData;
  public inventoryState: InventoryData;

  private keys!: {
    W: Phaser.Input.Keyboard.Key;
    A: Phaser.Input.Keyboard.Key;
    S: Phaser.Input.Keyboard.Key;
    D: Phaser.Input.Keyboard.Key;
    SPACE: Phaser.Input.Keyboard.Key;
    E: Phaser.Input.Keyboard.Key;
    F: Phaser.Input.Keyboard.Key;
    Q: Phaser.Input.Keyboard.Key;
    ESC: Phaser.Input.Keyboard.Key;
  };

  private bodyRect?: Phaser.GameObjects.Rectangle;
  private isDashing = false;
  private dashTimer = 0;

  constructor(scene: Phaser.Scene, startX: number, startY: number) {
    super(scene, 0, 0);

    this.playerState = createPlayerState();
    this.playerState.posX = startX;
    this.playerState.posY = startY;
    this.staminaState = createStamina();
    this.batteryState = createBattery();
    this.inventoryState = createInventory();

    if (scene.textures.exists(GAME_ASSETS.characters.antonioRafael.key)) {
      const sprite = scene.add.image(0, 0, GAME_ASSETS.characters.antonioRafael.key)
        .setOrigin(0.5, 0.94)
        .setScale(PLAYER_SPRITE_SCALE);
      this.add(sprite);
    } else {
      this.bodyRect = scene.add.rectangle(0, 0, 20, 30, 0x3b82f6);
      this.add(this.bodyRect);

      const label = scene.add.text(0, -22, 'P', {
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#93c5fd',
      }).setOrigin(0.5);
      this.add(label);
    }

    scene.add.existing(this);

    // Registrar teclas
    if (scene.input.keyboard) {
      this.keys = {
        W: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
        A: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
        S: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
        D: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
        SPACE: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
        E: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
        F: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F),
        Q: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
        ESC: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC),
      };
    }

    this.updateScreenPosition();
  }

  update(_time: number, delta: number) {
    if (isDead(this.playerState)) return;

    const dt = delta / 1000;

    this.handleMovement(dt);
    this.handleDash(dt);
    this.handleInputActions();
    this.handleBattery(dt);
    this.handleStaminaRegen(dt);
    this.updateScreenPosition();
    this.emitStateUpdate();
  }

  private handleMovement(dt: number) {
    if (!this.keys) return;

    let dx = 0;
    let dy = 0;

    if (this.keys.W.isDown) dy -= 1;
    if (this.keys.S.isDown) dy += 1;
    if (this.keys.A.isDown) dx -= 1;
    if (this.keys.D.isDown) dx += 1;

    // Normalizar diagonal
    if (dx !== 0 && dy !== 0) {
      const mag = Math.sqrt(dx * dx + dy * dy);
      dx /= mag;
      dy /= mag;
    }

    const speed = this.isDashing ? PLAYER_SPEED * DASH_SPEED_MULT : PLAYER_SPEED;
    this.playerState.posX += dx * speed * dt;
    this.playerState.posY += dy * speed * dt;
  }

  private handleDash(dt: number) {
    if (this.isDashing) {
      this.dashTimer -= dt * 1000;
      if (this.dashTimer <= 0) {
        this.isDashing = false;
      }
    }

    if (!this.keys) return;
    if (Phaser.Input.Keyboard.JustDown(this.keys.SPACE) && !this.isDashing) {
      const result = tryDash(this.staminaState);
      if (result.success) {
        this.staminaState = result.stamina;
        this.isDashing = true;
        this.dashTimer = DASH_DURATION_MS;
      }
    }
  }

  private handleInputActions() {
    if (!this.keys) return;

    if (Phaser.Input.Keyboard.JustDown(this.keys.F)) {
      this.batteryState = toggleLantern(this.batteryState);
    }

    if (Phaser.Input.Keyboard.JustDown(this.keys.E)) {
      eventBridge.emit('player:interact', {
        posX: this.playerState.posX,
        posY: this.playerState.posY,
      });
    }

    if (Phaser.Input.Keyboard.JustDown(this.keys.Q)) {
      eventBridge.emit('player:attack', {
        posX: this.playerState.posX,
        posY: this.playerState.posY,
      });
    }

    if (Phaser.Input.Keyboard.JustDown(this.keys.ESC)) {
      eventBridge.emit('game:pause');
    }
  }

  private handleBattery(dt: number) {
    this.batteryState = drainBattery(this.batteryState, dt);
  }

  private handleStaminaRegen(dt: number) {
    if (!this.isDashing) {
      this.staminaState = regenerateStamina(this.staminaState, dt);
    }
  }

  private updateScreenPosition() {
    const screen = toScreen(
      { x: this.playerState.posX, y: this.playerState.posY, z: 0 },
      TILE_WIDTH,
      TILE_HEIGHT
    );
    this.setPosition(screen.x, screen.y);
  }

  private emitStateUpdate() {
    eventBridge.emit('hud:update', {
      health: this.playerState.health,
      maxHealth: this.playerState.maxHealth,
      stamina: this.staminaState.current,
      maxStamina: this.staminaState.max,
      battery: this.batteryState.current,
      maxBattery: this.batteryState.max,
      lanternActive: this.batteryState.lanternActive,
      inventoryCount: this.inventoryState.items.length,
      inventoryMax: this.inventoryState.maxSlots,
      weapon: this.playerState.activeWeapon,
    });
  }

  /** Recebe dano externo (chamado pela GameScene). */
  takeDamage(amount: number) {
    this.playerState = applyDamage(this.playerState, amount);
    if (isDead(this.playerState)) {
      eventBridge.emit('player:dead');
    }
  }

  /** Coleta um item (chamado pela GameScene). */
  collectItem(item: ItemSlot): boolean {
    const result = addItem(this.inventoryState, item);
    if (result.success) {
      this.inventoryState = result.inventory;
    }
    return result.success;
  }

  /** Respawn do player. */
  doRespawn(spawnX?: number, spawnY?: number) {
    this.playerState = respawn(this.playerState, spawnX, spawnY);
    this.staminaState = resetStamina(this.staminaState);
    // Inventário é preservado no respawn
    this.updateScreenPosition();
  }
}
