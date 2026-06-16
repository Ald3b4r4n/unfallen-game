import { checkZone, GAME_ZONES, getZoneById } from '@/lib/game/config/zones';

describe('Game Zones 64x64', () => {
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

  test('mantém zonas dentro do mapa 64x64', () => {
    for (const zone of GAME_ZONES) {
      expect(zone.minX).toBeGreaterThanOrEqual(0);
      expect(zone.minY).toBeGreaterThanOrEqual(0);
      expect(zone.maxX).toBeLessThanOrEqual(63);
      expect(zone.maxY).toBeLessThanOrEqual(63);
      expect(zone.maxX).toBeGreaterThan(zone.minX);
      expect(zone.maxY).toBeGreaterThan(zone.minY);
    }
  });

  test('resolve zonas por coordenada e por id', () => {
    expect(checkZone(6, 6)).toBe('base');
    expect(checkZone(14, 8)).toBe('rua');
    expect(checkZone(32, 10)).toBe('mercado');
    expect(checkZone(32, 30)).toBe('caminho');
    expect(checkZone(48, 41)).toBe('casa');
    expect(checkZone(58, 56)).toBe('escola');
    expect(getZoneById('casa').name).toBe('Casa de Rafael');
  });
});
