import {
  getDistance,
  isInMeleeRange,
  attemptMeleeAttack,
  MELEE_RANGE,
  MELEE_DAMAGE,
} from '@/lib/game/systems/combat';

describe('Combat (lógica pura)', () => {
  test('Calcula distância euclidiana corretamente', () => {
    expect(getDistance(0, 0, 3, 4)).toBeCloseTo(5);
    expect(getDistance(1, 1, 1, 1)).toBe(0);
  });

  test('Detecta alvo dentro do raio de ataque', () => {
    expect(isInMeleeRange(0, 0, 1, 0, MELEE_RANGE)).toBe(true);
  });

  test('Rejeita alvo fora do raio de ataque', () => {
    expect(isInMeleeRange(0, 0, 10, 10, MELEE_RANGE)).toBe(false);
  });

  test('Ataque no raio válido aplica dano', () => {
    const target = { posX: 1, posY: 0, health: 30 };
    const result = attemptMeleeAttack(0, 0, target, MELEE_DAMAGE, MELEE_RANGE);
    expect(result.hit).toBe(true);
    expect(result.newTargetHealth).toBe(15); // 30 - 15
  });

  test('Ataque fora do raio não aplica dano', () => {
    const target = { posX: 20, posY: 20, health: 30 };
    const result = attemptMeleeAttack(0, 0, target, MELEE_DAMAGE, MELEE_RANGE);
    expect(result.hit).toBe(false);
    expect(result.newTargetHealth).toBe(30);
  });

  test('Dano não torna vida negativa (clampa em 0)', () => {
    const target = { posX: 0.5, posY: 0, health: 5 };
    const result = attemptMeleeAttack(0, 0, target, 999, MELEE_RANGE);
    expect(result.hit).toBe(true);
    expect(result.newTargetHealth).toBe(0);
  });
});
