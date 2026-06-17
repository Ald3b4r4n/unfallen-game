import {
  DEFAULT_RAIN_CONFIG,
  createRainStreaks,
  isRainConfigSafe,
} from '@/lib/game/systems/weather-effects';

describe('Weather Effects', () => {
  test('mantem configuracao padrao de chuva dentro de limites seguros', () => {
    expect(isRainConfigSafe(DEFAULT_RAIN_CONFIG)).toBe(true);
    expect(DEFAULT_RAIN_CONFIG.count).toBe(220);
    expect(DEFAULT_RAIN_CONFIG.alpha).toBeGreaterThanOrEqual(0.3);
  });

  test('gera filetes de chuva deterministas dentro do viewport', () => {
    const streaks = createRainStreaks(800, 600);

    expect(streaks).toHaveLength(DEFAULT_RAIN_CONFIG.count);
    expect(streaks.every((streak) => streak.x >= 0 && streak.x <= 800)).toBe(true);
    expect(streaks.every((streak) => streak.y >= 0 && streak.y <= 600)).toBe(true);
    expect(streaks.every((streak) => streak.length >= DEFAULT_RAIN_CONFIG.minLength)).toBe(true);
    expect(streaks.every((streak) => streak.length <= DEFAULT_RAIN_CONFIG.maxLength)).toBe(true);
    expect(streaks.every((streak) => streak.speed >= DEFAULT_RAIN_CONFIG.minSpeed)).toBe(true);
    expect(streaks.every((streak) => streak.speed <= DEFAULT_RAIN_CONFIG.maxSpeed)).toBe(true);
    expect(streaks.some((streak) => streak.width === 2)).toBe(true);
  });

  test('rejeita chuva excessiva para evitar custo visual desnecessario', () => {
    expect(isRainConfigSafe({ ...DEFAULT_RAIN_CONFIG, count: 260 })).toBe(false);
  });
});
