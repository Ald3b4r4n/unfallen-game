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
import { clampToMapBounds, TILE_HEIGHT, TILE_WIDTH } from '../config/map-config';

const PLAYER_SPEED = 2.5;  // unidades lógicas por segundo
const DASH_SPEED_MULT = 3;
const DASH_DURATION_MS = 200;
const PLAYER_SPRITE_SCALE = 0.08;
const WEAPON_KEYS = ['unarmed', 'pistol', 'knife', 'machete', 'sword'] as const;

type MovementResolver = (
  current: { posX: number; posY: number },
  next: { posX: number; posY: number }
) => { posX: number; posY: number };

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
    ONE: Phaser.Input.Keyboard.Key;
    TWO: Phaser.Input.Keyboard.Key;
    THREE: Phaser.Input.Keyboard.Key;
    FOUR: Phaser.Input.Keyboard.Key;
    FIVE: Phaser.Input.Keyboard.Key;
  };

  private bodyRect?: Phaser.GameObjects.Rectangle;
  private visualBody?: Phaser.GameObjects.Image | Phaser.GameObjects.Rectangle;
  private weaponImage?: Phaser.GameObjects.Image;
  private weaponGraphics!: Phaser.GameObjects.Graphics;
  private attackGraphics!: Phaser.GameObjects.Graphics;
  private isDashing = false;
  private dashTimer = 0;
  private movementResolver?: MovementResolver;
  private facingX = 1;
  private facingY = 0;

  constructor(scene: Phaser.Scene, startX: number, startY: number) {
    super(scene, 0, 0);

    this.playerState = createPlayerState();
    this.playerState.posX = startX;
    this.playerState.posY = startY;
    this.staminaState = createStamina();
    this.batteryState = createBattery();
    this.inventoryState = createInventory();

    const shadow = scene.add.ellipse(0, 3, 24, 10, 0x000000, 0.36);
    this.add(shadow);

    if (scene.textures.exists(GAME_ASSETS.characters.antonioRafael.key)) {
      const sprite = scene.add.image(0, 0, GAME_ASSETS.characters.antonioRafael.key)
        .setOrigin(0.5, 0.94)
        .setScale(PLAYER_SPRITE_SCALE);
      this.add(sprite);
      this.visualBody = sprite;
    } else {
      this.bodyRect = scene.add.rectangle(0, 0, 20, 30, 0x3b82f6);
      this.add(this.bodyRect);
      this.visualBody = this.bodyRect;

      const label = scene.add.text(0, -22, 'P', {
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#93c5fd',
      }).setOrigin(0.5);
      this.add(label);
    }

    this.weaponGraphics = scene.add.graphics();
    this.attackGraphics = scene.add.graphics();
    if (scene.textures.exists(GAME_ASSETS.purchased.weaponPistolA.key)) {
      this.weaponImage = scene.add.image(0, 0, GAME_ASSETS.purchased.weaponPistolA.key)
        .setOrigin(0.16, 0.62)
        .setVisible(false);
      this.add(this.weaponImage);
    }
    this.add(this.weaponGraphics);
    this.add(this.attackGraphics);
    this.drawWeapon();

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
        ONE: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE),
        TWO: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO),
        THREE: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE),
        FOUR: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR),
        FIVE: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE),
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
    this.updateIdleMotion(_time);
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

    if (dx !== 0 || dy !== 0) {
      this.facingX = dx;
      this.facingY = dy;
      this.drawWeapon();
    }

    const speed = this.isDashing ? PLAYER_SPEED * DASH_SPEED_MULT : PLAYER_SPEED;
    const currentPos = {
      posX: this.playerState.posX,
      posY: this.playerState.posY,
    };
    const nextPos = clampToMapBounds(
      this.playerState.posX + dx * speed * dt,
      this.playerState.posY + dy * speed * dt
    );
    const resolvedPos = this.movementResolver
      ? this.movementResolver(currentPos, nextPos)
      : nextPos;

    this.playerState.posX = resolvedPos.posX;
    this.playerState.posY = resolvedPos.posY;
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

    this.handleWeaponSelection();

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
      this.playAttackAnimation();
      eventBridge.emit('player:attack', {
        posX: this.playerState.posX,
        posY: this.playerState.posY,
        weapon: this.playerState.activeWeapon,
        facingX: this.facingX,
        facingY: this.facingY,
      });
    }

    if (Phaser.Input.Keyboard.JustDown(this.keys.ESC)) {
      eventBridge.emit('game:pause');
    }
  }

  private handleWeaponSelection() {
    const bindings = [
      this.keys.ONE,
      this.keys.TWO,
      this.keys.THREE,
      this.keys.FOUR,
      this.keys.FIVE,
    ];

    for (let index = 0; index < bindings.length; index += 1) {
      if (Phaser.Input.Keyboard.JustDown(bindings[index])) {
        this.playerState = {
          ...this.playerState,
          activeWeapon: WEAPON_KEYS[index],
        };
        this.drawWeapon();
        this.emitStateUpdate();
      }
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

  private updateIdleMotion(time: number) {
    if (!this.visualBody) return;
    const idleOffset = Math.sin(time / 260) * 0.8;
    this.visualBody.y = idleOffset;
    this.weaponGraphics.y = idleOffset;
    if (this.weaponImage) {
      this.weaponImage.y += idleOffset - (this.weaponImage.getData('idleOffset') ?? 0);
      this.weaponImage.setData('idleOffset', idleOffset);
    }
  }

  setMovementResolver(resolver: MovementResolver) {
    this.movementResolver = resolver;
  }

  private drawWeapon() {
    if (!this.weaponGraphics) return;

    this.weaponGraphics.clear();
    this.weaponImage?.setVisible(false);
    const direction = this.facingX < -0.2 ? -1 : 1;
    const handX = 7 * direction;
    const handY = -10;
    const imageWeapon = this.getWeaponImageConfig(direction, handX, handY);

    if (imageWeapon && this.weaponImage && this.scene.textures.exists(imageWeapon.key)) {
      this.weaponImage
        .setTexture(imageWeapon.key)
        .setPosition(imageWeapon.x, imageWeapon.y)
        .setScale(imageWeapon.scale)
        .setFlipX(direction < 0)
        .setAngle(imageWeapon.angle)
        .setAlpha(0.95)
        .setVisible(true);
      this.weaponImage.setData('idleOffset', 0);
      return;
    }

    switch (this.playerState.activeWeapon) {
      case 'pistol':
        this.weaponGraphics.fillStyle(0x1f2937, 1);
        this.weaponGraphics.fillRect(handX, handY, 10 * direction, 3);
        this.weaponGraphics.fillStyle(0x94a3b8, 1);
        this.weaponGraphics.fillRect(handX + 2 * direction, handY + 3, 3 * direction, 5);
        break;
      case 'knife':
        this.weaponGraphics.lineStyle(2, 0xdbeafe, 1);
        this.weaponGraphics.lineBetween(handX, handY, handX + 10 * direction, handY - 3);
        break;
      case 'machete':
        this.weaponGraphics.lineStyle(3, 0xcbd5e1, 1);
        this.weaponGraphics.lineBetween(handX, handY, handX + 14 * direction, handY - 5);
        this.weaponGraphics.lineStyle(1, 0x334155, 1);
        this.weaponGraphics.lineBetween(handX + 2 * direction, handY + 1, handX + 15 * direction, handY - 4);
        break;
      case 'sword':
        this.weaponGraphics.lineStyle(2, 0xe5e7eb, 1);
        this.weaponGraphics.lineBetween(handX, handY, handX + 18 * direction, handY - 9);
        this.weaponGraphics.lineStyle(2, 0x64748b, 1);
        this.weaponGraphics.lineBetween(handX - 3 * direction, handY + 2, handX + 4 * direction, handY - 2);
        break;
      case 'unarmed':
      default:
        break;
    }
  }

  private getWeaponImageConfig(direction: number, handX: number, handY: number) {
    switch (this.playerState.activeWeapon) {
      case 'pistol':
        return {
          key: GAME_ASSETS.purchased.weaponPistolA.key,
          x: handX + 1 * direction,
          y: handY - 2,
          scale: 0.1,
          angle: direction < 0 ? -10 : 10,
        };
      case 'knife':
        return {
          key: GAME_ASSETS.purchased.weaponKnifeA.key,
          x: handX + 1 * direction,
          y: handY - 3,
          scale: 0.085,
          angle: direction < 0 ? -48 : 48,
        };
      case 'machete':
        return {
          key: GAME_ASSETS.purchased.weaponKnifeA.key,
          x: handX + 1 * direction,
          y: handY - 4,
          scale: 0.12,
          angle: direction < 0 ? -54 : 54,
        };
      case 'sword':
        return {
          key: GAME_ASSETS.purchased.weaponBatA.key,
          x: handX + 1 * direction,
          y: handY - 6,
          scale: 0.1,
          angle: direction < 0 ? -46 : 46,
        };
      case 'unarmed':
      default:
        return null;
    }
  }

  private playAttackAnimation() {
    if (!this.attackGraphics) return;

    const direction = this.facingX < -0.2 ? -1 : 1;
    this.attackGraphics.clear();

    if (this.playerState.activeWeapon === 'pistol') {
      this.attackGraphics.fillStyle(0xfbbf24, 0.95);
      this.attackGraphics.fillTriangle(12 * direction, -12, 30 * direction, -16, 30 * direction, -8);
      this.attackGraphics.lineStyle(1, 0xfef3c7, 0.45);
      this.attackGraphics.lineBetween(14 * direction, -12, 55 * direction, -20);
    } else {
      this.attackGraphics.lineStyle(3, 0xf8fafc, 0.65);
      this.attackGraphics.beginPath();
      this.attackGraphics.arc(6 * direction, -10, 18, -0.8, 0.7, false);
      this.attackGraphics.strokePath();
    }

    this.scene.time.delayedCall(110, () => {
      this.attackGraphics.clear();
    });
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
