import { GAME_ASSETS } from '../config/asset-keys';
import { MAP_CONFIG } from '../config/map-config';
import type { ZoneId } from '../config/zones';

export interface EnvironmentArtDefinition {
  key: string;
  x: number;
  y: number;
  scale: number;
  depth: number;
  zoneId?: ZoneId;
  alpha?: number;
  originY?: number;
  footprintWidth?: number;
  footprintHeight?: number;
  footprintOffsetY?: number;
  footprintAlpha?: number;
}

export const PHASE_ONE_ENVIRONMENT_ART: EnvironmentArtDefinition[] = [
  { key: GAME_ASSETS.buildings.policeBase.key, x: 6.4, y: 6.6, scale: 0.125, depth: -30, zoneId: 'base', alpha: 0.9, originY: 0.78, footprintWidth: 260, footprintHeight: 92, footprintOffsetY: 18, footprintAlpha: 0.36 },
  { key: GAME_ASSETS.buildings.exteriorStreet.key, x: 17.6, y: 10.2, scale: 0.108, depth: -32, zoneId: 'rua', alpha: 0.66, originY: 0.58, footprintWidth: 310, footprintHeight: 112, footprintOffsetY: 11, footprintAlpha: 0.26 },
  { key: GAME_ASSETS.buildings.abandonedMarket.key, x: 31.8, y: 10.6, scale: 0.116, depth: -28, zoneId: 'mercado', alpha: 0.88, originY: 0.78, footprintWidth: 250, footprintHeight: 88, footprintOffsetY: 17, footprintAlpha: 0.34 },
  { key: GAME_ASSETS.buildings.residencePath.key, x: 32.6, y: 29.6, scale: 0.108, depth: -31, zoneId: 'caminho', alpha: 0.66, originY: 0.6, footprintWidth: 300, footprintHeight: 104, footprintOffsetY: 11, footprintAlpha: 0.25 },
  { key: GAME_ASSETS.buildings.rafaelHouse.key, x: 49.4, y: 41.6, scale: 0.12, depth: -27, zoneId: 'casa', alpha: 0.88, originY: 0.78, footprintWidth: 250, footprintHeight: 90, footprintOffsetY: 16, footprintAlpha: 0.35 },
  { key: GAME_ASSETS.buildings.schoolGate.key, x: 58.4, y: 56.6, scale: 0.1, depth: -26, zoneId: 'escola', alpha: 0.88, originY: 0.78, footprintWidth: 240, footprintHeight: 84, footprintOffsetY: 15, footprintAlpha: 0.34 },

  { key: GAME_ASSETS.props.brokenStreetPole.key, x: 8.8, y: 8.6, scale: 0.095, depth: -22, zoneId: 'base', alpha: 0.78, originY: 0.92 },
  { key: GAME_ASSETS.props.barricade.key, x: 10.9, y: 7.1, scale: 0.108, depth: -21, zoneId: 'base', alpha: 0.84, originY: 0.76 },
  { key: GAME_ASSETS.props.trashBags.key, x: 7.6, y: 10.8, scale: 0.102, depth: -20, zoneId: 'base', alpha: 0.78, originY: 0.78 },
  { key: GAME_ASSETS.props.rainPuddle.key, x: 5.2, y: 8.8, scale: 0.115, depth: -25, zoneId: 'base', alpha: 0.42, originY: 0.5 },

  { key: GAME_ASSETS.props.brokenStreetPole.key, x: 13.2, y: 7.4, scale: 0.115, depth: -22, zoneId: 'rua', alpha: 0.86, originY: 0.92 },
  { key: GAME_ASSETS.props.streetSign.key, x: 19.4, y: 7.8, scale: 0.1, depth: -22, zoneId: 'rua', alpha: 0.86, originY: 0.92 },
  { key: GAME_ASSETS.props.barricade.key, x: 14.8, y: 11.0, scale: 0.12, depth: -21, zoneId: 'rua', alpha: 0.88, originY: 0.76 },
  { key: GAME_ASSETS.props.trashBags.key, x: 21.0, y: 12.2, scale: 0.12, depth: -20, zoneId: 'rua', alpha: 0.84, originY: 0.78 },
  { key: GAME_ASSETS.props.bloodPuddle.key, x: 18.4, y: 13.6, scale: 0.095, depth: -24, zoneId: 'rua', alpha: 0.38, originY: 0.5 },
  { key: GAME_ASSETS.props.rainPuddle.key, x: 22.6, y: 8.9, scale: 0.11, depth: -25, zoneId: 'rua', alpha: 0.44, originY: 0.5 },
  { key: GAME_ASSETS.props.brokenWall.key, x: 24.2, y: 14.4, scale: 0.09, depth: -21, zoneId: 'rua', alpha: 0.72, originY: 0.82 },

  { key: GAME_ASSETS.props.marketCrates.key, x: 31.4, y: 12.4, scale: 0.11, depth: -20, zoneId: 'mercado', alpha: 0.86, originY: 0.78 },
  { key: GAME_ASSETS.props.trashBags.key, x: 29.2, y: 11.7, scale: 0.105, depth: -20, zoneId: 'mercado', alpha: 0.82, originY: 0.78 },
  { key: GAME_ASSETS.props.barricade.key, x: 34.6, y: 14.7, scale: 0.105, depth: -21, zoneId: 'mercado', alpha: 0.84, originY: 0.76 },
  { key: GAME_ASSETS.props.brokenWindow.key, x: 35.4, y: 9.3, scale: 0.078, depth: -20, zoneId: 'mercado', alpha: 0.76, originY: 0.82 },
  { key: GAME_ASSETS.props.rainPuddle.key, x: 36.8, y: 15.2, scale: 0.115, depth: -25, zoneId: 'mercado', alpha: 0.44, originY: 0.5 },
  { key: GAME_ASSETS.props.dragMark.key, x: 27.8, y: 13.6, scale: 0.09, depth: -24, zoneId: 'mercado', alpha: 0.38, originY: 0.5 },

  { key: GAME_ASSETS.props.brokenWall.key, x: 23.6, y: 22.8, scale: 0.105, depth: -21, zoneId: 'caminho', alpha: 0.82, originY: 0.82 },
  { key: GAME_ASSETS.props.rainPuddle.key, x: 27.2, y: 28.9, scale: 0.13, depth: -25, zoneId: 'caminho', alpha: 0.5, originY: 0.5 },
  { key: GAME_ASSETS.props.bloodPuddle.key, x: 37.4, y: 35.2, scale: 0.12, depth: -24, zoneId: 'caminho', alpha: 0.5, originY: 0.5 },
  { key: GAME_ASSETS.props.trashBags.key, x: 30.4, y: 31.6, scale: 0.104, depth: -20, zoneId: 'caminho', alpha: 0.8, originY: 0.78 },
  { key: GAME_ASSETS.props.streetSign.key, x: 39.2, y: 27.4, scale: 0.088, depth: -22, zoneId: 'caminho', alpha: 0.8, originY: 0.92 },
  { key: GAME_ASSETS.props.barricade.key, x: 41.2, y: 36.3, scale: 0.105, depth: -21, zoneId: 'caminho', alpha: 0.82, originY: 0.76 },
  { key: GAME_ASSETS.props.rainPuddle.key, x: 34.4, y: 24.8, scale: 0.11, depth: -25, zoneId: 'caminho', alpha: 0.42, originY: 0.5 },

  { key: GAME_ASSETS.props.brokenDoor.key, x: 49.4, y: 40.0, scale: 0.095, depth: -20, zoneId: 'casa', alpha: 0.84, originY: 0.92 },
  { key: GAME_ASSETS.props.brokenWindow.key, x: 51.2, y: 43.2, scale: 0.1, depth: -20, zoneId: 'casa', alpha: 0.84, originY: 0.82 },
  { key: GAME_ASSETS.props.trashBags.key, x: 45.2, y: 45.6, scale: 0.102, depth: -20, zoneId: 'casa', alpha: 0.82, originY: 0.78 },
  { key: GAME_ASSETS.props.rainPuddle.key, x: 53.4, y: 39.2, scale: 0.11, depth: -25, zoneId: 'casa', alpha: 0.42, originY: 0.5 },
  { key: GAME_ASSETS.props.bloodPuddle.key, x: 48.2, y: 44.9, scale: 0.088, depth: -24, zoneId: 'casa', alpha: 0.34, originY: 0.5 },

  { key: GAME_ASSETS.props.dragMark.key, x: 57.2, y: 55.0, scale: 0.11, depth: -24, zoneId: 'escola', alpha: 0.45, originY: 0.5 },
  { key: GAME_ASSETS.props.barricade.key, x: 55.8, y: 53.8, scale: 0.095, depth: -21, zoneId: 'escola', alpha: 0.78, originY: 0.76 },
  { key: GAME_ASSETS.props.brokenWall.key, x: 61.2, y: 58.4, scale: 0.088, depth: -21, zoneId: 'escola', alpha: 0.72, originY: 0.82 },
  { key: GAME_ASSETS.props.rainPuddle.key, x: 59.6, y: 54.4, scale: 0.11, depth: -25, zoneId: 'escola', alpha: 0.42, originY: 0.5 },

  { key: GAME_ASSETS.enemies.infectedStreetVendor.key, x: 15.6, y: 14.2, scale: 0.052, depth: -19, zoneId: 'rua', alpha: 0.5, originY: 0.93 },
  { key: GAME_ASSETS.enemies.infectedUrbanSurvivor.key, x: 35.8, y: 33.2, scale: 0.05, depth: -19, zoneId: 'caminho', alpha: 0.42, originY: 0.93 },
  { key: GAME_ASSETS.enemies.infectedTeacher.key, x: 56.4, y: 58.8, scale: 0.048, depth: -19, zoneId: 'escola', alpha: 0.38, originY: 0.93 },
];

export function getEnvironmentArtByZone(zoneId: ZoneId): EnvironmentArtDefinition[] {
  return PHASE_ONE_ENVIRONMENT_ART.filter((art) => art.zoneId === zoneId);
}

export function isEnvironmentArtInsideMap(art: EnvironmentArtDefinition): boolean {
  return art.x >= MAP_CONFIG.minX &&
    art.x <= MAP_CONFIG.maxX &&
    art.y >= MAP_CONFIG.minY &&
    art.y <= MAP_CONFIG.maxY;
}
