/**
 * Estado lógico puro do Player — sem dependência de Phaser, DOM ou window.
 */

export interface PlayerStateData {
  health: number;
  maxHealth: number;
  posX: number;
  posY: number;
  activeWeapon: 'unarmed' | 'baton' | 'pistol';
}

export const PLAYER_DEFAULTS = {
  maxHealth: 100,
  spawnX: 2.5,
  spawnY: 2.5,
  defaultWeapon: 'unarmed' as const,
};

export function createPlayerState(): PlayerStateData {
  return {
    health: PLAYER_DEFAULTS.maxHealth,
    maxHealth: PLAYER_DEFAULTS.maxHealth,
    posX: PLAYER_DEFAULTS.spawnX,
    posY: PLAYER_DEFAULTS.spawnY,
    activeWeapon: PLAYER_DEFAULTS.defaultWeapon,
  };
}

export function applyDamage(state: PlayerStateData, amount: number): PlayerStateData {
  return {
    ...state,
    health: Math.max(0, state.health - Math.abs(amount)),
  };
}

export function heal(state: PlayerStateData, amount: number): PlayerStateData {
  return {
    ...state,
    health: Math.min(state.maxHealth, state.health + Math.abs(amount)),
  };
}

export function isDead(state: PlayerStateData): boolean {
  return state.health <= 0;
}

export function respawn(state: PlayerStateData): PlayerStateData {
  return {
    ...state,
    health: state.maxHealth,
    posX: PLAYER_DEFAULTS.spawnX,
    posY: PLAYER_DEFAULTS.spawnY,
    // activeWeapon and inventory are intentionally preserved
  };
}
