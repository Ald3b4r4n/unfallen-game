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
  darknessAlpha: 0.12,
  vignetteAlpha: 0.2,
  fogAlpha: 0.06,
};

export const PHASE_ONE_AMBIENT_LIGHTS: AmbientLightDefinition[] = [
  // Base policial — blue/red police lights
  { zoneId: 'base', x: 5.0, y: 5.0, radiusX: 280, radiusY: 100, color: 0x3b82f6, alpha: 0.14 },
  { zoneId: 'base', x: 5.8, y: 4.5, radiusX: 180, radiusY: 70, color: 0xef4444, alpha: 0.12 },
  { zoneId: 'base', x: 6.5, y: 5.5, radiusX: 120, radiusY: 50, color: 0xfbbf24, alpha: 0.08 },
  // Rua — amber street lighting
  { zoneId: 'rua', x: 12.0, y: 6.5, radiusX: 260, radiusY: 90, color: 0xf59e0b, alpha: 0.1 },
  { zoneId: 'rua', x: 13.0, y: 5.5, radiusX: 140, radiusY: 60, color: 0xfbbf24, alpha: 0.07 },
  // Mercado — warm glow from inside
  { zoneId: 'mercado', x: 20.0, y: 7.0, radiusX: 300, radiusY: 100, color: 0xf59e0b, alpha: 0.13 },
  { zoneId: 'mercado', x: 18.0, y: 11.0, radiusX: 140, radiusY: 60, color: 0xfbbf24, alpha: 0.07 },
  // Caminho — dim moonlight
  { zoneId: 'caminho', x: 17.0, y: 17.0, radiusX: 340, radiusY: 110, color: 0x94a3b8, alpha: 0.08 },
  { zoneId: 'caminho', x: 18.8, y: 18.6, radiusX: 140, radiusY: 60, color: 0xcbd5e1, alpha: 0.05 },
  // Casa — warm home light
  { zoneId: 'casa', x: 26.0, y: 18.5, radiusX: 280, radiusY: 100, color: 0x10b981, alpha: 0.1 },
  { zoneId: 'casa', x: 28.0, y: 19.5, radiusX: 140, radiusY: 60, color: 0xfbbf24, alpha: 0.06 },
  // Escola — ominous red
  { zoneId: 'escola', x: 27.0, y: 27.0, radiusX: 260, radiusY: 90, color: 0xef4444, alpha: 0.1 },
  { zoneId: 'escola', x: 28.8, y: 26.4, radiusX: 140, radiusY: 60, color: 0xfbbf24, alpha: 0.06 },
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
