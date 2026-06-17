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
    expect(PHASE_ONE_ENVIRONMENT_ART.length).toBeGreaterThanOrEqual(50);
    expect(PHASE_ONE_ENVIRONMENT_ART.every(isEnvironmentArtInsideMap)).toBe(true);
  });

  test('nao usa infectados como enfeite sem comportamento', () => {
    const decorativeInfected = PHASE_ONE_ENVIRONMENT_ART.filter((art) =>
      art.key.startsWith('enemy:')
    );

    expect(decorativeInfected).toHaveLength(0);
  });
});
