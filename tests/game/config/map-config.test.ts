import { clampToMapBounds, getCameraBounds, MAP_CONFIG } from '@/lib/game/config/map-config';

describe('Map Config 64x64', () => {
  test('define mapa lógico 64x64', () => {
    expect(MAP_CONFIG.gridWidth).toBe(64);
    expect(MAP_CONFIG.gridHeight).toBe(64);
    expect(MAP_CONFIG.maxX).toBe(63);
    expect(MAP_CONFIG.maxY).toBe(63);
  });

  test('clampa navegação aos bounds do mapa', () => {
    expect(clampToMapBounds(-10, -3)).toEqual({ posX: 0, posY: 0 });
    expect(clampToMapBounds(99, 70)).toEqual({ posX: 63, posY: 63 });
    expect(clampToMapBounds(32, 40)).toEqual({ posX: 32, posY: 40 });
  });

  test('calcula bounds de câmera maiores que a área visível do mapa', () => {
    const bounds = getCameraBounds();
    expect(bounds.x).toBeLessThan(0);
    expect(bounds.y).toBeLessThan(0);
    expect(bounds.width).toBeGreaterThan(4096);
    expect(bounds.height).toBeGreaterThan(2048);
  });
});
