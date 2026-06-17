import { MAP_CONFIG } from '../config/map-config';
import type { ZoneId } from '../config/zones';

export interface AtmosphereConfig {
  darknessAlpha: number;
  vignetteAlpha: number;
  fogAlpha: number;
}

export interface AmbientLightDefinition {
  zoneId: ZoneId;
  x: number;
  y: number;
  radiusX: number;
  radiusY: number;
  color: number;
  alpha: number;
}

export const PHASE_ONE_ATMOSPHERE: AtmosphereConfig = {
  darknessAlpha: 0.16,
  vignetteAlpha: 0.18,
  fogAlpha: 0.08,
};

export const PHASE_ONE_AMBIENT_LIGHTS: AmbientLightDefinition[] = [
  { zoneId: 'base', x: 6.4, y: 6.6, radiusX: 170, radiusY: 58, color: 0x3b82f6, alpha: 0.12 },
  { zoneId: 'base', x: 7.8, y: 6.0, radiusX: 112, radiusY: 40, color: 0xef4444, alpha: 0.1 },
  { zoneId: 'rua', x: 17.6, y: 10.2, radiusX: 160, radiusY: 48, color: 0xf59e0b, alpha: 0.08 },
  { zoneId: 'mercado', x: 31.8, y: 10.6, radiusX: 190, radiusY: 58, color: 0xf59e0b, alpha: 0.11 },
  { zoneId: 'caminho', x: 32.6, y: 29.6, radiusX: 210, radiusY: 64, color: 0x94a3b8, alpha: 0.07 },
  { zoneId: 'casa', x: 49.4, y: 41.6, radiusX: 170, radiusY: 56, color: 0x10b981, alpha: 0.08 },
  { zoneId: 'escola', x: 58.4, y: 56.6, radiusX: 160, radiusY: 52, color: 0xef4444, alpha: 0.08 },
];

export function isAtmosphereConfigSafe(config: AtmosphereConfig = PHASE_ONE_ATMOSPHERE): boolean {
  return config.darknessAlpha >= 0 &&
    config.darknessAlpha <= 0.35 &&
    config.vignetteAlpha >= 0 &&
    config.vignetteAlpha <= 0.35 &&
    config.fogAlpha >= 0 &&
    config.fogAlpha <= 0.18;
}

export function isAmbientLightInsideMap(light: AmbientLightDefinition): boolean {
  return light.x >= MAP_CONFIG.minX &&
    light.x <= MAP_CONFIG.maxX &&
    light.y >= MAP_CONFIG.minY &&
    light.y <= MAP_CONFIG.maxY &&
    light.radiusX > 0 &&
    light.radiusY > 0 &&
    light.alpha > 0 &&
    light.alpha <= 0.25;
}
