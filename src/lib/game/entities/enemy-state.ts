/**
 * Estado lógico puro do Inimigo/Infectado — sem dependência de Phaser.
 */

export type EnemyAIState = 'IDLE' | 'CHASING';

export interface EnemyStateData {
  id: string;
  health: number;
  maxHealth: number;
  posX: number;
  posY: number;
  state: EnemyAIState;
  alertRadius: number;
  attackDamage: number;
  moveSpeed: number;
}

export function createEnemyState(
  id: string,
  posX: number,
  posY: number,
  overrides?: Partial<EnemyStateData>
): EnemyStateData {
  return {
    id,
    health: 30,
    maxHealth: 30,
    posX,
    posY,
    state: 'IDLE',
    alertRadius: 3.0,
    attackDamage: 10,
    moveSpeed: 0.8,
    ...overrides,
  };
}

export function updateEnemyAI(
  enemy: EnemyStateData,
  playerX: number,
  playerY: number
): EnemyStateData {
  const dx = playerX - enemy.posX;
  const dy = playerY - enemy.posY;
  const dist = Math.sqrt(dx * dx + dy * dy);

  const newState: EnemyAIState = dist <= enemy.alertRadius ? 'CHASING' : 'IDLE';

  return { ...enemy, state: newState };
}

export function moveEnemyTowardsPlayer(
  enemy: EnemyStateData,
  playerX: number,
  playerY: number,
  deltaSeconds: number
): EnemyStateData {
  if (enemy.state !== 'CHASING') return enemy;

  const dx = playerX - enemy.posX;
  const dy = playerY - enemy.posY;
  const dist = Math.sqrt(dx * dx + dy * dy);

  if (dist < 0.1) return enemy;

  const nx = dx / dist;
  const ny = dy / dist;

  return {
    ...enemy,
    posX: enemy.posX + nx * enemy.moveSpeed * deltaSeconds,
    posY: enemy.posY + ny * enemy.moveSpeed * deltaSeconds,
  };
}

export function applyEnemyDamage(enemy: EnemyStateData, amount: number): EnemyStateData {
  return {
    ...enemy,
    health: Math.max(0, enemy.health - Math.abs(amount)),
  };
}

export function isEnemyDead(enemy: EnemyStateData): boolean {
  return enemy.health <= 0;
}
