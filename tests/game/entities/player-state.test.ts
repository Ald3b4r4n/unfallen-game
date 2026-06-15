import {
  createPlayerState,
  applyDamage,
  heal,
  isDead,
  respawn,
} from '@/lib/game/entities/player-state';

describe('PlayerState (lógica pura)', () => {
  test('Cria player com vida máxima (100)', () => {
    const state = createPlayerState();
    expect(state.health).toBe(100);
    expect(state.maxHealth).toBe(100);
  });

  test('Dano reduz a vida do player', () => {
    const state = createPlayerState();
    const damaged = applyDamage(state, 30);
    expect(damaged.health).toBe(70);
  });

  test('Vida não fica negativa após dano excessivo', () => {
    const state = createPlayerState();
    const damaged = applyDamage(state, 999);
    expect(damaged.health).toBe(0);
  });

  test('isDead retorna true quando vida é 0', () => {
    const state = applyDamage(createPlayerState(), 100);
    expect(isDead(state)).toBe(true);
  });

  test('isDead retorna false quando vida é positiva', () => {
    const state = createPlayerState();
    expect(isDead(state)).toBe(false);
  });

  test('Cura restaura vida sem exceder o máximo', () => {
    const state = applyDamage(createPlayerState(), 50);
    const healed = heal(state, 30);
    expect(healed.health).toBe(80);

    const overHealed = heal(state, 200);
    expect(overHealed.health).toBe(100);
  });

  test('Respawn restaura vida ao máximo e reposiciona', () => {
    let state = createPlayerState();
    state = applyDamage(state, 80);
    state = { ...state, posX: 10, posY: 10 };

    const respawned = respawn(state);
    expect(respawned.health).toBe(100);
    expect(respawned.posX).toBe(2.5);
    expect(respawned.posY).toBe(2.5);
  });

  test('Respawn preserva arma ativa', () => {
    let state = createPlayerState();
    state = { ...state, activeWeapon: 'pistol' };
    const respawned = respawn(state);
    expect(respawned.activeWeapon).toBe('pistol');
  });
});
