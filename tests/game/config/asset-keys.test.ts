import { GAME_ASSETS, PRELOAD_GAME_ASSETS } from '@/lib/game/config/asset-keys';

describe('Asset Keys', () => {
  test('precarrega tiles de asfalto isometricos derivados do pack comprado', () => {
    const preloadKeys = PRELOAD_GAME_ASSETS.map((asset) => asset.key);

    expect(preloadKeys).toContain(GAME_ASSETS.purchased.asphaltCrackedIso.key);
    expect(preloadKeys).toContain(GAME_ASSETS.purchased.asphaltRoadLineIso.key);
    expect(preloadKeys).toContain(GAME_ASSETS.purchased.asphaltCrosswalkIso.key);
  });
});
