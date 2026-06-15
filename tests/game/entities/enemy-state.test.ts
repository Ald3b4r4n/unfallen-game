import {
  createEnemyState,
  updateEnemyAI,
  moveEnemyTowardsPlayer,
  applyEnemyDamage,
  isEnemyDead,
} from '@/lib/game/entities/enemy-state';

describe('EnemyState (lógica pura)', () => {
  test('Cria inimigo com estado inicial IDLE', () => {
    const enemy = createEnemyState('zombie-1', 5, 5);
    expect(enemy.state).toBe('IDLE');
    expect(enemy.health).toBe(30);
  });

  test('Transiciona para CHASING quando player está dentro do alertRadius', () => {
    const enemy = createEnemyState('zombie-1', 5, 5, { alertRadius: 3 });
    const updated = updateEnemyAI(enemy, 6, 5); // distância = 1
    expect(updated.state).toBe('CHASING');
  });

  test('Permanece IDLE quando player está fora do alertRadius', () => {
    const enemy = createEnemyState('zombie-1', 5, 5, { alertRadius: 3 });
    const updated = updateEnemyAI(enemy, 20, 20); // muito longe
    expect(updated.state).toBe('IDLE');
  });

  test('Volta para IDLE quando player sai do alertRadius', () => {
    const enemy = createEnemyState('zombie-1', 5, 5, { alertRadius: 3 });
    const chasing = updateEnemyAI(enemy, 6, 5);
    expect(chasing.state).toBe('CHASING');

    const backToIdle = updateEnemyAI(chasing, 20, 20);
    expect(backToIdle.state).toBe('IDLE');
  });

  test('Move em direção ao player quando CHASING', () => {
    let enemy = createEnemyState('zombie-1', 0, 0, { moveSpeed: 1 });
    enemy = { ...enemy, state: 'CHASING' };
    const moved = moveEnemyTowardsPlayer(enemy, 10, 0, 1.0);
    expect(moved.posX).toBeGreaterThan(0);
    expect(moved.posY).toBeCloseTo(0);
  });

  test('Não move quando IDLE', () => {
    const enemy = createEnemyState('zombie-1', 5, 5);
    const moved = moveEnemyTowardsPlayer(enemy, 10, 10, 1.0);
    expect(moved.posX).toBe(5);
    expect(moved.posY).toBe(5);
  });

  test('Dano reduz vida do inimigo', () => {
    const enemy = createEnemyState('zombie-1', 0, 0);
    const damaged = applyEnemyDamage(enemy, 15);
    expect(damaged.health).toBe(15);
  });

  test('Vida do inimigo não fica negativa', () => {
    const enemy = createEnemyState('zombie-1', 0, 0);
    const damaged = applyEnemyDamage(enemy, 999);
    expect(damaged.health).toBe(0);
  });

  test('isEnemyDead retorna true quando vida é 0', () => {
    const enemy = applyEnemyDamage(createEnemyState('zombie-1', 0, 0), 30);
    expect(isEnemyDead(enemy)).toBe(true);
  });
});
