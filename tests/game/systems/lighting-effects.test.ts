import { GAME_ZONES } from '@/lib/game/config/zones';
import {
  PHASE_ONE_AMBIENT_LIGHTS,
  PHASE_ONE_ATMOSPHERE,
  isAmbientLightInsideMap,
  isAtmosphereConfigSafe,
} from '@/lib/game/systems/lighting-effects';

describe('Lighting Effects', () => {
  test('mantem atmosfera escura sem bloquear a leitura da HUD e do mapa', () => {
    expect(isAtmosphereConfigSafe(PHASE_ONE_ATMOSPHERE)).toBe(true);
  });

  test('mantem luzes ambientais dentro do mapa', () => {
    expect(PHASE_ONE_AMBIENT_LIGHTS.every(isAmbientLightInsideMap)).toBe(true);
  });

  test('cobre cada zona principal com ao menos uma luz contextual', () => {
    const litZones = new Set(PHASE_ONE_AMBIENT_LIGHTS.map((light) => light.zoneId));

    for (const zone of GAME_ZONES) {
      expect(litZones.has(zone.id)).toBe(true);
    }
  });
});
