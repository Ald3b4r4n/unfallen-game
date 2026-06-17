import { clampToMapBounds, getCameraBounds, MAP_CONFIG } from '@/lib/game/config/map-config';

describe('Map Config 32x32', () => {
  test('define mapa lógico 32x32', () => {
    expect(MAP_CONFIG.gridWidth).toBe(32);
    expect(MAP_CONFIG.gridHeight).toBe(32);
    expect(MAP_CONFIG.maxX).toBe(31);
    expect(MAP_CONFIG.maxY).toBe(31);
  });

  test('clampa navegação aos bounds do mapa', () => {
    expect(clampToMapBounds(-10, -3)).toEqual({ posX: 0, posY: 0 });
    expect(clampToMapBounds(99, 70)).toEqual({ posX: 31, posY: 31 });
    expect(clampToMapBounds(16, 20)).toEqual({ posX: 16, posY: 20 });
  });

  test('calcula bounds de câmera maiores que a área visível do mapa', () => {
    const bounds = getCameraBounds();
    expect(bounds.x).toBeLessThan(0);
    expect(bounds.y).toBeLessThan(0);
    expect(bounds.width).toBeGreaterThan(2048);
    expect(bounds.height).toBeGreaterThan(1024);
  });
});
