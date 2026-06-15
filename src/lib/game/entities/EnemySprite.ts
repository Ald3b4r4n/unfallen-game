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

export default class EnemySprite extends Phaser.GameObjects.Container {
  public enemyState: EnemyStateData;
  private bodyRect: Phaser.GameObjects.Rectangle;
  private stateLabel: Phaser.GameObjects.Text;
  private lastContactDamageTime = 0;

  constructor(
    scene: Phaser.Scene,
    id: string,
    startX: number,
    startY: number,
    overrides?: Partial<EnemyStateData>
  ) {
    super(scene, 0, 0);

    this.enemyState = createEnemyState(id, startX, startY, overrides);

    // Retângulo placeholder vermelho
    this.bodyRect = scene.add.rectangle(0, 0, 18, 24, 0xef4444);
    this.add(this.bodyRect);

    this.stateLabel = scene.add.text(0, -18, 'Z', {
      fontFamily: 'monospace',
      fontSize: '10px',
      color: '#fca5a5',
    }).setOrigin(0.5);
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
    this.bodyRect.setFillStyle(this.enemyState.state === 'CHASING' ? 0xdc2626 : 0xef4444);

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

  /** Recebe dano do player. Retorna true se morreu. */
  receiveDamage(amount: number): boolean {
    this.enemyState = applyEnemyDamage(this.enemyState, amount);
    return isEnemyDead(this.enemyState);
  }
}
