/**
 * Sistema de Combate puro — sem dependência de Phaser.
 * Usa verificação de distância simples (raio) para ataques.
 */

export interface CombatTarget {
  posX: number;
  posY: number;
  health: number;
}

export const MELEE_RANGE = 1.5;   // raio lógico de ataque corpo a corpo
export const MELEE_DAMAGE = 15;

/**
 * Calcula a distância euclidiana entre dois pontos no plano lógico.
 */
export function getDistance(
  ax: number, ay: number,
  bx: number, by: number
): number {
  const dx = bx - ax;
  const dy = by - ay;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Verifica se o alvo está dentro do raio de ataque.
 */
export function isInMeleeRange(
  attackerX: number, attackerY: number,
  targetX: number, targetY: number,
  range: number = MELEE_RANGE
): boolean {
  return getDistance(attackerX, attackerY, targetX, targetY) <= range;
}

/**
 * Tenta um ataque corpo a corpo.
 * Retorna { hit, newTargetHealth }.
 */
export function attemptMeleeAttack(
  attackerX: number, attackerY: number,
  target: CombatTarget,
  damage: number = MELEE_DAMAGE,
  range: number = MELEE_RANGE
): { hit: boolean; newTargetHealth: number } {
  if (!isInMeleeRange(attackerX, attackerY, target.posX, target.posY, range)) {
    return { hit: false, newTargetHealth: target.health };
  }

  return {
    hit: true,
    newTargetHealth: Math.max(0, target.health - damage),
  };
}
