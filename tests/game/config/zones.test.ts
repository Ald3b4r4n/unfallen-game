import { checkZone, GAME_ZONES, getZoneById } from '@/lib/game/config/zones';

describe('Game Zones 32x32', () => {
  test('registra as seis zonas jogáveis da Fase 1', () => {
    expect(GAME_ZONES.map((zone) => zone.id)).toEqual([
      'base',
      'rua',
      'mercado',
      'caminho',
      'casa',
      'escola',
    ]);
  });

  test('mantém zonas dentro do mapa 32x32', () => {
    for (const zone of GAME_ZONES) {
      expect(zone.minX).toBeGreaterThanOrEqual(0);
      expect(zone.minY).toBeGreaterThanOrEqual(0);
      expect(zone.maxX).toBeLessThanOrEqual(31);
      expect(zone.maxY).toBeLessThanOrEqual(31);
      expect(zone.maxX).toBeGreaterThan(zone.minX);
      expect(zone.maxY).toBeGreaterThan(zone.minY);
    }
  });

  test('resolve zonas por coordenada e por id', () => {
    expect(checkZone(5, 5)).toBe('base');
    expect(checkZone(12, 6)).toBe('rua');
    expect(checkZone(20, 7)).toBe('mercado');
    expect(checkZone(17, 17)).toBe('caminho');
    expect(checkZone(26, 18)).toBe('casa');
    expect(checkZone(27, 27)).toBe('escola');
    expect(getZoneById('casa').name).toBe('Casa de Rafael');
  });
});
