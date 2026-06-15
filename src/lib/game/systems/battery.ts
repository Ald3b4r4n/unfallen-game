/**
 * Sistema de Bateria/Lanterna puro — sem dependência de Phaser.
 */

export interface BatteryData {
  current: number;
  max: number;
  drainRate: number;    // unidades por segundo enquanto lanterna ativa
  lanternActive: boolean;
}

export const BATTERY_DEFAULTS = {
  max: 100,
  drainRate: 5,  // 5 unidades/s = ~20 segundos de lanterna contínua
};

export function createBattery(): BatteryData {
  return {
    current: BATTERY_DEFAULTS.max,
    max: BATTERY_DEFAULTS.max,
    drainRate: BATTERY_DEFAULTS.drainRate,
    lanternActive: false,
  };
}

/**
 * Alterna o estado da lanterna.
 * Só liga se há bateria disponível.
 */
export function toggleLantern(battery: BatteryData): BatteryData {
  if (!battery.lanternActive && battery.current <= 0) {
    return battery; // Não pode ligar sem bateria
  }

  return { ...battery, lanternActive: !battery.lanternActive };
}

/**
 * Consome bateria ao longo do tempo quando ativa.
 */
export function drainBattery(battery: BatteryData, deltaSeconds: number): BatteryData {
  if (!battery.lanternActive) return battery;

  const newCurrent = Math.max(0, battery.current - battery.drainRate * deltaSeconds);
  const shouldTurnOff = newCurrent <= 0;

  return {
    ...battery,
    current: newCurrent,
    lanternActive: shouldTurnOff ? false : battery.lanternActive,
  };
}

/**
 * Recarrega a bateria com um item de recarga.
 */
export function rechargeBattery(battery: BatteryData, amount: number): BatteryData {
  return {
    ...battery,
    current: Math.min(battery.max, battery.current + Math.abs(amount)),
  };
}
