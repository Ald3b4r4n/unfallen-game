export interface RainConfig {
  count: number;
  minLength: number;
  maxLength: number;
  minSpeed: number;
  maxSpeed: number;
  slant: number;
  alpha: number;
}

export interface RainStreak {
  x: number;
  y: number;
  length: number;
  speed: number;
  alpha: number;
  width: number;
  phase: number;
}

export const DEFAULT_RAIN_CONFIG: RainConfig = {
  count: 320,
  minLength: 12,
  maxLength: 32,
  minSpeed: 240,
  maxSpeed: 420,
  slant: -10,
  alpha: 0.32,
};

export function isRainConfigSafe(config: RainConfig = DEFAULT_RAIN_CONFIG): boolean {
  return config.count > 0 &&
    config.count <= 400 &&
    config.minLength > 0 &&
    config.maxLength >= config.minLength &&
    config.maxSpeed >= config.minSpeed &&
    config.alpha > 0 &&
    config.alpha <= 0.5;
}

export function createRainStreaks(
  viewportWidth: number,
  viewportHeight: number,
  config: RainConfig = DEFAULT_RAIN_CONFIG
): RainStreak[] {
  const width = Math.max(1, viewportWidth);
  const height = Math.max(1, viewportHeight);
  const lengthRange = config.maxLength - config.minLength;
  const speedRange = config.maxSpeed - config.minSpeed;

  return Array.from({ length: config.count }, (_, index) => {
    const seedA = pseudoRandom(index + 1);
    const seedB = pseudoRandom((index + 1) * 17);
    const seedC = pseudoRandom((index + 1) * 31);

    return {
      x: seedA * width,
      y: seedB * height,
      length: config.minLength + seedC * lengthRange,
      speed: config.minSpeed + seedB * speedRange,
      alpha: config.alpha * (0.5 + seedA * 0.5),
      width: seedC > 0.72 ? 2 : 1,
      phase: seedA * Math.PI * 2,
    };
  });
}

function pseudoRandom(seed: number): number {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}
