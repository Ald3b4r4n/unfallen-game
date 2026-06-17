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

  test('usa assets comprados licenciados para preencher ruas e props urbanos', () => {
    const purchasedArt = PHASE_ONE_ENVIRONMENT_ART.filter((art) =>
      art.key.startsWith('purchased:')
    );
    const purchasedFloorArt = purchasedArt.filter((art) => art.depth <= -48);
    const purchasedInteriorArt = purchasedArt.filter((art) => art.interiorId);

    expect(purchasedArt.length).toBeGreaterThanOrEqual(60);
    expect(purchasedFloorArt.length).toBeGreaterThanOrEqual(10);
    expect(purchasedInteriorArt.length).toBeGreaterThanOrEqual(6);
  });

  test('usa tiles isometricos derivados para evitar blocos top-down no chao', () => {
    const purchasedFloorArt = PHASE_ONE_ENVIRONMENT_ART.filter((art) =>
      art.depth <= -48 && art.key.includes('-iso')
    );

    expect(purchasedFloorArt.length).toBeGreaterThanOrEqual(10);
  });
});
