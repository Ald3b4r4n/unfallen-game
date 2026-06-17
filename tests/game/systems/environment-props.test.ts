import { GAME_ZONES } from '@/lib/game/config/zones';
import {
  PHASE_ONE_ENVIRONMENT_ART,
  getEnvironmentArtByZone,
  isEnvironmentArtInsideMap,
} from '@/lib/game/systems/environment-props';

describe('Environment Props', () => {
  test('preenche todas as zonas principais da fase 1', () => {
    for (const zone of GAME_ZONES) {
      expect(getEnvironmentArtByZone(zone.id).length).toBeGreaterThanOrEqual(4);
    }
  });

  test('mantem todos os elementos visuais dentro do mapa 64x64', () => {
    expect(PHASE_ONE_ENVIRONMENT_ART.length).toBeGreaterThanOrEqual(40);
    expect(PHASE_ONE_ENVIRONMENT_ART.every(isEnvironmentArtInsideMap)).toBe(true);
  });

  test('usa infectados ambientais apenas como silhuetas visuais', () => {
    const infectedSilhouettes = PHASE_ONE_ENVIRONMENT_ART.filter((art) =>
      art.key.startsWith('enemy:')
    );

    expect(infectedSilhouettes.length).toBe(3);
    expect(infectedSilhouettes.every((art) => art.depth < 0)).toBe(true);
    expect(infectedSilhouettes.every((art) => (art.alpha ?? 1) < 0.8)).toBe(true);
  });
});
