/**
 * Sistema de Estamina puro — sem dependência de Phaser.
 */

export interface StaminaData {
  current: number;
  max: number;
  regenRate: number;    // unidades por segundo em repouso
  dashCost: number;     // custo fixo por dash
}

export const STAMINA_DEFAULTS = {
  max: 100,
  regenRate: 15,   // 15 unidades/s
  dashCost: 25,
};

export function createStamina(): StaminaData {
  return {
    current: STAMINA_DEFAULTS.max,
    max: STAMINA_DEFAULTS.max,
    regenRate: STAMINA_DEFAULTS.regenRate,
    dashCost: STAMINA_DEFAULTS.dashCost,
  };
}

/**
 * Tenta executar um dash. Retorna { success, stamina }.
 * Falha se estamina insuficiente.
 */
export function tryDash(stamina: StaminaData): { success: boolean; stamina: StaminaData } {
  if (stamina.current < stamina.dashCost) {
    return { success: false, stamina };
  }

  return {
    success: true,
    stamina: {
      ...stamina,
      current: Math.max(0, stamina.current - stamina.dashCost),
    },
  };
}

/**
 * Regenera estamina com base no tempo decorrido (deltaSeconds).
 */
export function regenerateStamina(stamina: StaminaData, deltaSeconds: number): StaminaData {
  if (stamina.current >= stamina.max) return stamina;

  return {
    ...stamina,
    current: Math.min(stamina.max, stamina.current + stamina.regenRate * deltaSeconds),
  };
}

/**
 * Reseta estamina ao máximo (usado no respawn).
 */
export function resetStamina(stamina: StaminaData): StaminaData {
  return { ...stamina, current: stamina.max };
}
