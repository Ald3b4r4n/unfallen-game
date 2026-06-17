import Phaser from 'phaser';
import { toScreen } from '../isometric/iso-math';
import {
  EnemyStateData,
  createEnemyState,
  updateEnemyAI,
  moveEnemyTowardsPlayer,
  applyEnemyDamage,
  isEnemyDead,
} from '../entities/enemy-state';

const TILE_WIDTH = 64;
const TILE_HEIGHT = 32;
const CONTACT_DAMAGE_RADIUS = 0.8;
const CONTACT_DAMAGE_COOLDOWN_MS = 1000;
const ENEMY_SPRITE_SCALE = 0.06;

export default class EnemySprite extends Phaser.GameObjects.Container {
  public enemyState: EnemyStateData;
  private bodyRect?: Phaser.GameObjects.Rectangle;
  private visualBody?: Phaser.GameObjects.Image | Phaser.GameObjects.Rectangle;
  private stateLabel: Phaser.GameObjects.Text;
  private hasSpriteAsset = false;
  private lastContactDamageTime = 0;

  constructor(
    scene: Phaser.Scene,
    id: string,
    startX: number,
    startY: number,
    assetKeyOrOverrides?: string | Partial<EnemyStateData>,
    overrides?: Partial<EnemyStateData>
  ) {
    super(scene, 0, 0);

    const assetKey = typeof assetKeyOrOverrides === 'string' ? assetKeyOrOverrides : undefined;
    const enemyOverrides = typeof assetKeyOrOverrides === 'string' ? overrides : assetKeyOrOverrides;

    this.enemyState = createEnemyState(id, startX, startY, enemyOverrides);

    const shadow = scene.add.ellipse(0, 2, 20, 8, 0x000000, 0.32);
    this.add(shadow);

    if (assetKey && scene.textures.exists(assetKey)) {
      const sprite = scene.add.image(0, 0, assetKey)
        .setOrigin(0.5, 0.93)
        .setScale(ENEMY_SPRITE_SCALE);
      this.add(sprite);
      this.visualBody = sprite;
      this.hasSpriteAsset = true;
    } else {
      this.bodyRect = scene.add.rectangle(0, 0, 18, 24, 0xef4444);
      this.add(this.bodyRect);
      this.visualBody = this.bodyRect;
    }

    this.stateLabel = scene.add.text(0, -18, 'Z', {
      fontFamily: 'monospace',
      fontSize: '10px',
      color: '#fca5a5',
    }).setOrigin(0.5);
    this.stateLabel.setVisible(!this.hasSpriteAsset);
    this.add(this.stateLabel);

    scene.add.existing(this);
    this.updateScreenPosition();
  }

  update(time: number, delta: number, playerX: number, playerY: number) {
    if (isEnemyDead(this.enemyState)) {
      this.setVisible(false);
      return;
    }

    const dt = delta / 1000;

    // Atualizar IA
    this.enemyState = updateEnemyAI(this.enemyState, playerX, playerY);
    this.enemyState = moveEnemyTowardsPlayer(this.enemyState, playerX, playerY, dt);

    // Atualizar visual
    this.stateLabel.setText(this.enemyState.state === 'CHASING' ? '!' : 'Z');
    this.stateLabel.setVisible(!this.hasSpriteAsset || this.enemyState.state === 'CHASING');
    this.bodyRect?.setFillStyle(this.enemyState.state === 'CHASING' ? 0xdc2626 : 0xef4444);
    this.updateIdleMotion(time);

    this.updateScreenPosition();

    // Verificar contato para dano
    return this.checkContactDamage(time, playerX, playerY);
  }

  private checkContactDamage(time: number, playerX: number, playerY: number): number {
    if (this.enemyState.state !== 'CHASING') return 0;

    const dx = playerX - this.enemyState.posX;
    const dy = playerY - this.enemyState.posY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist <= CONTACT_DAMAGE_RADIUS && time - this.lastContactDamageTime > CONTACT_DAMAGE_COOLDOWN_MS) {
      this.lastContactDamageTime = time;
      return this.enemyState.attackDamage;
    }

    return 0;
  }

  private updateScreenPosition() {
    const screen = toScreen(
      { x: this.enemyState.posX, y: this.enemyState.posY, z: 0 },
      TILE_WIDTH,
      TILE_HEIGHT
    );
    this.setPosition(screen.x, screen.y);
  }

  private updateIdleMotion(time: number) {
    if (!this.visualBody) return;
    const urgency = this.enemyState.state === 'CHASING' ? 160 : 320;
    this.visualBody.y = Math.sin(time / urgency + this.enemyState.posX) * 0.9;
    this.visualBody.rotation = Math.sin(time / (urgency * 1.5) + this.enemyState.posY) * 0.015;
  }

  /** Recebe dano do player. Retorna true se morreu. */
  receiveDamage(amount: number): boolean {
    this.enemyState = applyEnemyDamage(this.enemyState, amount);
    return isEnemyDead(this.enemyState);
  }
}
