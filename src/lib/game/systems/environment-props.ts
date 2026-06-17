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
  interiorId?: string;
  isInterior?: boolean;
}

export const PHASE_ONE_ENVIRONMENT_ART: EnvironmentArtDefinition[] = [
  // =====================================================================
  // BUILDINGS — dominate the scene at 0.45-0.60 scale (was 0.12-0.15)
  // =====================================================================
  { key: GAME_ASSETS.buildings.policeBase.key, x: 5.0, y: 5.0, scale: 0.55, depth: -30, zoneId: 'base', alpha: 0.95, originY: 0.78, footprintWidth: 620, footprintHeight: 220, footprintOffsetY: 40, footprintAlpha: 0.35, interiorId: 'police-base' },
  { key: GAME_ASSETS.buildings.exteriorStreet.key, x: 12.0, y: 6.5, scale: 0.48, depth: -32, zoneId: 'rua', alpha: 0.82, originY: 0.58, footprintWidth: 680, footprintHeight: 240, footprintOffsetY: 24, footprintAlpha: 0.28 },
  { key: GAME_ASSETS.buildings.abandonedMarket.key, x: 20.0, y: 7.0, scale: 0.52, depth: -28, zoneId: 'mercado', alpha: 0.94, originY: 0.78, footprintWidth: 600, footprintHeight: 210, footprintOffsetY: 38, footprintAlpha: 0.34, interiorId: 'abandoned-market' },
  { key: GAME_ASSETS.buildings.residencePath.key, x: 17.0, y: 17.0, scale: 0.46, depth: -31, zoneId: 'caminho', alpha: 0.82, originY: 0.6, footprintWidth: 640, footprintHeight: 230, footprintOffsetY: 24, footprintAlpha: 0.26 },
  { key: GAME_ASSETS.buildings.rafaelHouse.key, x: 26.0, y: 18.5, scale: 0.52, depth: -27, zoneId: 'casa', alpha: 0.94, originY: 0.78, footprintWidth: 600, footprintHeight: 215, footprintOffsetY: 36, footprintAlpha: 0.34, interiorId: 'rafael-house' },
  { key: GAME_ASSETS.buildings.schoolGate.key, x: 27.0, y: 27.0, scale: 0.46, depth: -26, zoneId: 'escola', alpha: 0.94, originY: 0.78, footprintWidth: 560, footprintHeight: 200, footprintOffsetY: 32, footprintAlpha: 0.33 },

  // =====================================================================
  // GROUND TILES — isometric asphalt covering walkable paths
  // =====================================================================
  // Base area ground
  { key: GAME_ASSETS.purchased.asphaltCrackedIso.key, x: 3.0, y: 5.0, scale: 1.8, depth: -49, zoneId: 'base', alpha: 0.94, originY: 0.5 },
  { key: GAME_ASSETS.purchased.asphaltRoadLineIso.key, x: 6.0, y: 6.0, scale: 1.8, depth: -49, zoneId: 'base', alpha: 0.9, originY: 0.5 },
  { key: GAME_ASSETS.purchased.asphaltCrackedIso.key, x: 4.5, y: 7.5, scale: 1.8, depth: -49, zoneId: 'base', alpha: 0.92, originY: 0.5 },
  { key: GAME_ASSETS.purchased.asphaltCrackedIso.key, x: 7.0, y: 3.5, scale: 1.8, depth: -49, zoneId: 'base', alpha: 0.92, originY: 0.5 },
  // Street area ground
  { key: GAME_ASSETS.purchased.asphaltCrackedIso.key, x: 9.0, y: 5.5, scale: 1.8, depth: -49, zoneId: 'rua', alpha: 0.94, originY: 0.5 },
  { key: GAME_ASSETS.purchased.asphaltRoadLineIso.key, x: 11.0, y: 6.5, scale: 1.8, depth: -49, zoneId: 'rua', alpha: 0.9, originY: 0.5 },
  { key: GAME_ASSETS.purchased.asphaltCrosswalkIso.key, x: 13.5, y: 7.5, scale: 1.8, depth: -49, zoneId: 'rua', alpha: 0.88, originY: 0.5 },
  { key: GAME_ASSETS.purchased.asphaltCrackedIso.key, x: 15.0, y: 8.5, scale: 1.8, depth: -49, zoneId: 'rua', alpha: 0.92, originY: 0.5 },
  { key: GAME_ASSETS.purchased.asphaltRoadLineIso.key, x: 10.0, y: 9.0, scale: 1.8, depth: -49, zoneId: 'rua', alpha: 0.88, originY: 0.5 },
  // Market area ground
  { key: GAME_ASSETS.purchased.asphaltCrackedIso.key, x: 17.0, y: 6.0, scale: 1.8, depth: -49, zoneId: 'mercado', alpha: 0.94, originY: 0.5 },
  { key: GAME_ASSETS.purchased.asphaltRoadLineIso.key, x: 19.5, y: 8.0, scale: 1.8, depth: -49, zoneId: 'mercado', alpha: 0.88, originY: 0.5 },
  { key: GAME_ASSETS.purchased.asphaltCrackedIso.key, x: 22.0, y: 10.0, scale: 1.8, depth: -49, zoneId: 'mercado', alpha: 0.92, originY: 0.5 },
  { key: GAME_ASSETS.purchased.asphaltCrosswalkIso.key, x: 21.0, y: 5.0, scale: 1.8, depth: -49, zoneId: 'mercado', alpha: 0.86, originY: 0.5 },
  // Path area ground
  { key: GAME_ASSETS.purchased.asphaltCrackedIso.key, x: 14.0, y: 14.0, scale: 1.8, depth: -49, zoneId: 'caminho', alpha: 0.9, originY: 0.5 },
  { key: GAME_ASSETS.purchased.asphaltRoadLineIso.key, x: 17.0, y: 17.0, scale: 1.8, depth: -49, zoneId: 'caminho', alpha: 0.86, originY: 0.5 },
  { key: GAME_ASSETS.purchased.asphaltCrackedIso.key, x: 20.0, y: 20.0, scale: 1.8, depth: -49, zoneId: 'caminho', alpha: 0.88, originY: 0.5 },
  { key: GAME_ASSETS.purchased.asphaltCrosswalkIso.key, x: 15.5, y: 19.0, scale: 1.8, depth: -49, zoneId: 'caminho', alpha: 0.84, originY: 0.5 },
  // House area ground
  { key: GAME_ASSETS.purchased.asphaltCrackedIso.key, x: 23.5, y: 16.5, scale: 1.8, depth: -49, zoneId: 'casa', alpha: 0.88, originY: 0.5 },
  { key: GAME_ASSETS.purchased.asphaltRoadLineIso.key, x: 26.5, y: 20.0, scale: 1.8, depth: -49, zoneId: 'casa', alpha: 0.86, originY: 0.5 },
  { key: GAME_ASSETS.purchased.asphaltCrackedIso.key, x: 28.5, y: 22.0, scale: 1.8, depth: -49, zoneId: 'casa', alpha: 0.88, originY: 0.5 },
  // School area ground
  { key: GAME_ASSETS.purchased.asphaltCrackedIso.key, x: 25.5, y: 26.0, scale: 1.8, depth: -49, zoneId: 'escola', alpha: 0.9, originY: 0.5 },
  { key: GAME_ASSETS.purchased.asphaltCrosswalkIso.key, x: 28.0, y: 28.0, scale: 1.8, depth: -49, zoneId: 'escola', alpha: 0.86, originY: 0.5 },

  // =====================================================================
  // BUILDING INTERIORS — walls, furniture, lights (when player enters)
  // =====================================================================
  // Police base interior - Room A (Reception) & Room B (Armory/Cell)
  // Back Wall (NW Wall at y = 3.5)
  { key: GAME_ASSETS.purchased.wallDoorWindowA.key, x: 4.0, y: 3.5, scale: 0.38, depth: -23, zoneId: 'base', alpha: 0.86, originY: 0.88, interiorId: 'police-base', isInterior: true },
  { key: GAME_ASSETS.purchased.wallBrokenWideA.key, x: 5.5, y: 3.5, scale: 0.38, depth: -22, zoneId: 'base', alpha: 0.86, originY: 0.88, interiorId: 'police-base', isInterior: true },
  { key: GAME_ASSETS.purchased.wallDoorWindowA.key, x: 7.0, y: 3.5, scale: 0.38, depth: -23, zoneId: 'base', alpha: 0.86, originY: 0.88, interiorId: 'police-base', isInterior: true },
  
  // Side Wall (NE Wall at x = 3.5)
  { key: GAME_ASSETS.purchased.wallBrokenWideA.key, x: 3.5, y: 4.5, scale: 0.38, depth: -22, zoneId: 'base', alpha: 0.86, originY: 0.88, interiorId: 'police-base', isInterior: true },
  { key: GAME_ASSETS.purchased.wallDoorWindowA.key, x: 3.5, y: 6.0, scale: 0.38, depth: -23, zoneId: 'base', alpha: 0.86, originY: 0.88, interiorId: 'police-base', isInterior: true },

  // Front Wall (SE Wall at y = 6.5)
  { key: GAME_ASSETS.purchased.wallBrokenWideA.key, x: 4.0, y: 6.5, scale: 0.38, depth: -22, zoneId: 'base', alpha: 0.86, originY: 0.88, interiorId: 'police-base', isInterior: true },
  { key: GAME_ASSETS.purchased.wallBrokenWideA.key, x: 5.5, y: 6.5, scale: 0.38, depth: -22, zoneId: 'base', alpha: 0.86, originY: 0.88, interiorId: 'police-base', isInterior: true },
  { key: GAME_ASSETS.purchased.wallDoorWindowA.key, x: 7.0, y: 6.5, scale: 0.38, depth: -23, zoneId: 'base', alpha: 0.86, originY: 0.88, interiorId: 'police-base', isInterior: true },

  // Interior Divider Wall (y = 5.0)
  { key: GAME_ASSETS.purchased.wallBrokenWideA.key, x: 4.0, y: 5.0, scale: 0.38, depth: -22, zoneId: 'base', alpha: 0.86, originY: 0.88, interiorId: 'police-base', isInterior: true },
  { key: GAME_ASSETS.purchased.wallDoorWindowA.key, x: 6.0, y: 5.0, scale: 0.38, depth: -23, zoneId: 'base', alpha: 0.86, originY: 0.88, interiorId: 'police-base', isInterior: true },

  // Room A (Reception) furniture
  { key: GAME_ASSETS.purchased.interiorTableA.key, x: 5.8, y: 5.8, scale: 0.22, depth: -18, zoneId: 'base', alpha: 0.78, originY: 0.72, interiorId: 'police-base', isInterior: true },
  { key: GAME_ASSETS.purchased.interiorCabinetA.key, x: 6.5, y: 5.2, scale: 0.2, depth: -19, zoneId: 'base', alpha: 0.74, originY: 0.86, interiorId: 'police-base', isInterior: true },
  { key: GAME_ASSETS.props.trashBags.key, x: 6.8, y: 6.0, scale: 0.36, depth: -18, zoneId: 'base', alpha: 0.85, originY: 0.82, interiorId: 'police-base', isInterior: true },
  
  // Room B (Armory / Cell) furniture and debris
  { key: GAME_ASSETS.purchased.interiorCabinetA.key, x: 4.2, y: 4.0, scale: 0.2, depth: -19, zoneId: 'base', alpha: 0.74, originY: 0.86, interiorId: 'police-base', isInterior: true },
  { key: GAME_ASSETS.purchased.interiorTableA.key, x: 4.6, y: 4.4, scale: 0.22, depth: -18, zoneId: 'base', alpha: 0.78, originY: 0.72, interiorId: 'police-base', isInterior: true },
  { key: GAME_ASSETS.props.bloodPuddle.key, x: 4.4, y: 4.8, scale: 0.52, depth: -48, zoneId: 'base', alpha: 0.88, originY: 0.52, interiorId: 'police-base', isInterior: true },
  { key: GAME_ASSETS.props.dragMark.key, x: 4.8, y: 4.4, scale: 0.48, depth: -48, zoneId: 'base', alpha: 0.82, originY: 0.52, interiorId: 'police-base', isInterior: true },
  { key: GAME_ASSETS.props.brokenDoor.key, x: 3.8, y: 4.2, scale: 0.34, depth: -18, zoneId: 'base', alpha: 0.88, originY: 0.72, interiorId: 'police-base', isInterior: true },

  // Lights
  { key: GAME_ASSETS.purchased.emergencyLightA.key, x: 4.5, y: 3.6, scale: 0.16, depth: -18, zoneId: 'base', alpha: 0.78, originY: 0.75, interiorId: 'police-base', isInterior: true },
  { key: GAME_ASSETS.purchased.emergencyLightA.key, x: 6.2, y: 3.6, scale: 0.16, depth: -18, zoneId: 'base', alpha: 0.78, originY: 0.75, interiorId: 'police-base', isInterior: true },

  // Market interior
  { key: GAME_ASSETS.purchased.wallDoorWindowA.key, x: 19.2, y: 6.2, scale: 0.38, depth: -22, zoneId: 'mercado', alpha: 0.84, originY: 0.88, interiorId: 'abandoned-market', isInterior: true },
  { key: GAME_ASSETS.purchased.wallBrokenWideA.key, x: 21.5, y: 7.5, scale: 0.38, depth: -22, zoneId: 'mercado', alpha: 0.82, originY: 0.88, interiorId: 'abandoned-market', isInterior: true },
  { key: GAME_ASSETS.purchased.interiorTableA.key, x: 20.0, y: 7.0, scale: 0.2, depth: -18, zoneId: 'mercado', alpha: 0.72, originY: 0.72, interiorId: 'abandoned-market', isInterior: true },
  { key: GAME_ASSETS.purchased.interiorCabinetA.key, x: 21.0, y: 6.0, scale: 0.18, depth: -19, zoneId: 'mercado', alpha: 0.68, originY: 0.86, interiorId: 'abandoned-market', isInterior: true },

  // Rafael's house interior
  { key: GAME_ASSETS.purchased.wallDoorWindowA.key, x: 25.2, y: 17.5, scale: 0.38, depth: -22, zoneId: 'casa', alpha: 0.84, originY: 0.88, interiorId: 'rafael-house', isInterior: true },
  { key: GAME_ASSETS.purchased.interiorCabinetA.key, x: 26.5, y: 18.2, scale: 0.18, depth: -18, zoneId: 'casa', alpha: 0.72, originY: 0.86, interiorId: 'rafael-house', isInterior: true },
  { key: GAME_ASSETS.purchased.interiorTableA.key, x: 27.2, y: 19.0, scale: 0.2, depth: -18, zoneId: 'casa', alpha: 0.72, originY: 0.72, interiorId: 'rafael-house', isInterior: true },

  // =====================================================================
  // PURCHASED PROPS — large and visible (scale 0.30-0.55, was 0.16-0.22)
  // =====================================================================
  // Base zone — perimeter fences, lamps, trees
  { key: GAME_ASSETS.purchased.streetLampA.key, x: 6.5, y: 5.5, scale: 0.48, depth: -20, zoneId: 'base', alpha: 0.94, originY: 0.92 },
  { key: GAME_ASSETS.purchased.deadTreeA.key, x: 2.5, y: 7.2, scale: 0.52, depth: -20, zoneId: 'base', alpha: 0.9, originY: 0.92 },
  { key: GAME_ASSETS.purchased.treePineGreenA.key, x: 3.0, y: 3.0, scale: 0.72, depth: -20, zoneId: 'base', alpha: 0.82, originY: 0.92 },
  { key: GAME_ASSETS.purchased.treeDeadLargeA.key, x: 8.0, y: 8.5, scale: 0.68, depth: -20, zoneId: 'base', alpha: 0.78, originY: 0.92 },
  { key: GAME_ASSETS.purchased.streetFenceA.key, x: 2.8, y: 5.5, scale: 0.44, depth: -20, zoneId: 'base', alpha: 0.92, originY: 0.82 },
  { key: GAME_ASSETS.purchased.streetFenceA.key, x: 5.5, y: 2.8, scale: 0.44, depth: -20, zoneId: 'base', alpha: 0.9, originY: 0.82 },
  { key: GAME_ASSETS.purchased.streetBarricadeA.key, x: 7.0, y: 7.5, scale: 0.42, depth: -19, zoneId: 'base', alpha: 0.94, originY: 0.82 },
  { key: GAME_ASSETS.purchased.streetRoadClosedA.key, x: 8.5, y: 8.0, scale: 0.38, depth: -19, zoneId: 'base', alpha: 0.94, originY: 0.82 },
  { key: GAME_ASSETS.purchased.wallBrokenWideA.key, x: 2.8, y: 3.2, scale: 0.34, depth: -23, zoneId: 'base', alpha: 0.82, originY: 0.88 },
  { key: GAME_ASSETS.purchased.streetManholeA.key, x: 4.5, y: 6.8, scale: 0.42, depth: -48, zoneId: 'base', alpha: 0.76, originY: 0.52 },

  // Street zone — dense urban debris
  { key: GAME_ASSETS.purchased.streetRoadClosedA.key, x: 9.5, y: 5.5, scale: 0.38, depth: -19, zoneId: 'rua', alpha: 0.94, originY: 0.82 },
  { key: GAME_ASSETS.purchased.streetBarricadeA.key, x: 11.5, y: 8.5, scale: 0.42, depth: -19, zoneId: 'rua', alpha: 0.92, originY: 0.82 },
  { key: GAME_ASSETS.purchased.streetLampA.key, x: 13.0, y: 5.5, scale: 0.46, depth: -20, zoneId: 'rua', alpha: 0.92, originY: 0.92 },
  { key: GAME_ASSETS.purchased.streetManholeA.key, x: 12.0, y: 7.0, scale: 0.42, depth: -48, zoneId: 'rua', alpha: 0.76, originY: 0.52 },
  { key: GAME_ASSETS.purchased.treeStumpA.key, x: 10.0, y: 3.5, scale: 0.58, depth: -20, zoneId: 'rua', alpha: 0.78, originY: 0.82 },
  { key: GAME_ASSETS.purchased.treeBushGreenA.key, x: 14.2, y: 9.5, scale: 0.68, depth: -20, zoneId: 'rua', alpha: 0.78, originY: 0.78 },
  { key: GAME_ASSETS.purchased.streetFenceA.key, x: 9.5, y: 4.0, scale: 0.42, depth: -20, zoneId: 'rua', alpha: 0.9, originY: 0.82 },
  { key: GAME_ASSETS.purchased.streetFenceA.key, x: 12.5, y: 3.5, scale: 0.42, depth: -20, zoneId: 'rua', alpha: 0.88, originY: 0.82 },
  { key: GAME_ASSETS.purchased.wallBrokenWideA.key, x: 13.0, y: 4.8, scale: 0.32, depth: -23, zoneId: 'rua', alpha: 0.76, originY: 0.88 },
  { key: GAME_ASSETS.purchased.streetBarricadeA.key, x: 15.0, y: 10.0, scale: 0.42, depth: -19, zoneId: 'rua', alpha: 0.92, originY: 0.82 },
  { key: GAME_ASSETS.purchased.streetBenchA.key, x: 14.5, y: 4.5, scale: 0.38, depth: -19, zoneId: 'rua', alpha: 0.82, originY: 0.78 },

  // Market zone — abandoned commerce area
  { key: GAME_ASSETS.purchased.streetFenceA.key, x: 17.0, y: 5.0, scale: 0.42, depth: -20, zoneId: 'mercado', alpha: 0.88, originY: 0.82 },
  { key: GAME_ASSETS.purchased.streetBenchA.key, x: 18.5, y: 10.0, scale: 0.38, depth: -19, zoneId: 'mercado', alpha: 0.84, originY: 0.78 },
  { key: GAME_ASSETS.purchased.deadBushA.key, x: 23.5, y: 5.0, scale: 0.42, depth: -20, zoneId: 'mercado', alpha: 0.86, originY: 0.75 },
  { key: GAME_ASSETS.purchased.treeDeadLargeB.key, x: 24.0, y: 11.5, scale: 0.68, depth: -20, zoneId: 'mercado', alpha: 0.78, originY: 0.92 },
  { key: GAME_ASSETS.purchased.streetBarricadeA.key, x: 22.5, y: 9.5, scale: 0.42, depth: -19, zoneId: 'mercado', alpha: 0.92, originY: 0.82 },
  { key: GAME_ASSETS.purchased.streetFenceA.key, x: 22.0, y: 5.5, scale: 0.42, depth: -20, zoneId: 'mercado', alpha: 0.86, originY: 0.82 },
  { key: GAME_ASSETS.purchased.treePineGreenA.key, x: 24.5, y: 4.0, scale: 0.62, depth: -20, zoneId: 'mercado', alpha: 0.7, originY: 0.92 },
  { key: GAME_ASSETS.purchased.streetLampA.key, x: 18.0, y: 11.0, scale: 0.46, depth: -20, zoneId: 'mercado', alpha: 0.9, originY: 0.92 },
  { key: GAME_ASSETS.purchased.wallBrokenWideA.key, x: 17.5, y: 5.5, scale: 0.34, depth: -23, zoneId: 'mercado', alpha: 0.8, originY: 0.88 },

  // Path zone — transition road
  { key: GAME_ASSETS.purchased.deadTreeB.key, x: 14.0, y: 18.0, scale: 0.52, depth: -20, zoneId: 'caminho', alpha: 0.88, originY: 0.92 },
  { key: GAME_ASSETS.purchased.treePineGreenB.key, x: 16.0, y: 14.0, scale: 0.64, depth: -20, zoneId: 'caminho', alpha: 0.76, originY: 0.92 },
  { key: GAME_ASSETS.purchased.streetStopSignA.key, x: 20.5, y: 18.5, scale: 0.4, depth: -20, zoneId: 'caminho', alpha: 0.92, originY: 0.92 },
  { key: GAME_ASSETS.purchased.streetBarricadeA.key, x: 21.0, y: 21.0, scale: 0.4, depth: -19, zoneId: 'caminho', alpha: 0.9, originY: 0.82 },
  { key: GAME_ASSETS.purchased.streetFenceA.key, x: 16.5, y: 13.0, scale: 0.4, depth: -20, zoneId: 'caminho', alpha: 0.84, originY: 0.82 },
  { key: GAME_ASSETS.purchased.streetRoadClosedA.key, x: 18.5, y: 16.5, scale: 0.38, depth: -19, zoneId: 'caminho', alpha: 0.88, originY: 0.82 },
  { key: GAME_ASSETS.purchased.treeDeadLargeB.key, x: 21.0, y: 20.0, scale: 0.62, depth: -20, zoneId: 'caminho', alpha: 0.74, originY: 0.92 },
  { key: GAME_ASSETS.purchased.wallBrokenWideA.key, x: 14.5, y: 15.5, scale: 0.32, depth: -23, zoneId: 'caminho', alpha: 0.76, originY: 0.88 },

  // House zone — Rafael's neighborhood
  { key: GAME_ASSETS.purchased.deadBushA.key, x: 24.0, y: 22.0, scale: 0.42, depth: -20, zoneId: 'casa', alpha: 0.86, originY: 0.75 },
  { key: GAME_ASSETS.purchased.treeBushGreenA.key, x: 24.5, y: 16.0, scale: 0.7, depth: -20, zoneId: 'casa', alpha: 0.76, originY: 0.78 },
  { key: GAME_ASSETS.purchased.streetLampA.key, x: 28.0, y: 19.5, scale: 0.46, depth: -20, zoneId: 'casa', alpha: 0.9, originY: 0.92 },
  { key: GAME_ASSETS.purchased.streetFenceA.key, x: 24.0, y: 23.0, scale: 0.42, depth: -20, zoneId: 'casa', alpha: 0.88, originY: 0.82 },
  { key: GAME_ASSETS.purchased.streetFenceA.key, x: 28.5, y: 16.0, scale: 0.42, depth: -20, zoneId: 'casa', alpha: 0.88, originY: 0.82 },
  { key: GAME_ASSETS.purchased.streetBarricadeA.key, x: 29.5, y: 22.0, scale: 0.4, depth: -19, zoneId: 'casa', alpha: 0.88, originY: 0.82 },
  { key: GAME_ASSETS.purchased.wallBrokenWideA.key, x: 23.5, y: 17.0, scale: 0.32, depth: -23, zoneId: 'casa', alpha: 0.78, originY: 0.88 },
  { key: GAME_ASSETS.purchased.treeDeadLargeA.key, x: 29.5, y: 23.5, scale: 0.62, depth: -20, zoneId: 'casa', alpha: 0.74, originY: 0.92 },

  // School zone — ominous entrance
  { key: GAME_ASSETS.purchased.streetFenceA.key, x: 25.0, y: 25.0, scale: 0.44, depth: -20, zoneId: 'escola', alpha: 0.92, originY: 0.82 },
  { key: GAME_ASSETS.purchased.streetRoadClosedA.key, x: 27.0, y: 26.0, scale: 0.38, depth: -19, zoneId: 'escola', alpha: 0.9, originY: 0.82 },
  { key: GAME_ASSETS.purchased.treeDeadLargeA.key, x: 29.5, y: 29.0, scale: 0.62, depth: -20, zoneId: 'escola', alpha: 0.76, originY: 0.92 },
  { key: GAME_ASSETS.purchased.streetFenceA.key, x: 29.0, y: 26.0, scale: 0.44, depth: -20, zoneId: 'escola', alpha: 0.92, originY: 0.82 },
  { key: GAME_ASSETS.purchased.streetBarricadeA.key, x: 29.5, y: 29.5, scale: 0.4, depth: -19, zoneId: 'escola', alpha: 0.86, originY: 0.82 },
  { key: GAME_ASSETS.purchased.wallBrokenWideA.key, x: 25.5, y: 24.5, scale: 0.32, depth: -23, zoneId: 'escola', alpha: 0.78, originY: 0.88 },

  // =====================================================================
  // HAND-PLACED PROPS — environmental storytelling (scale 0.18-0.35)
  // =====================================================================
  // Base zone props
  { key: GAME_ASSETS.props.brokenStreetPole.key, x: 6.0, y: 6.0, scale: 0.28, depth: -22, zoneId: 'base', alpha: 0.84, originY: 0.92 },
  { key: GAME_ASSETS.props.barricade.key, x: 7.5, y: 5.0, scale: 0.3, depth: -21, zoneId: 'base', alpha: 0.88, originY: 0.76 },
  { key: GAME_ASSETS.props.trashBags.key, x: 5.0, y: 7.5, scale: 0.28, depth: -20, zoneId: 'base', alpha: 0.84, originY: 0.78 },
  { key: GAME_ASSETS.props.rainPuddle.key, x: 3.5, y: 5.8, scale: 0.3, depth: -25, zoneId: 'base', alpha: 0.45, originY: 0.5 },
  { key: GAME_ASSETS.props.brokenWall.key, x: 3.2, y: 4.8, scale: 0.24, depth: -21, zoneId: 'base', alpha: 0.78, originY: 0.82 },
  { key: GAME_ASSETS.props.streetSign.key, x: 6.5, y: 3.8, scale: 0.24, depth: -22, zoneId: 'base', alpha: 0.78, originY: 0.92 },
  { key: GAME_ASSETS.props.bloodPuddle.key, x: 5.5, y: 6.5, scale: 0.24, depth: -24, zoneId: 'base', alpha: 0.4, originY: 0.5 },
  { key: GAME_ASSETS.props.dragMark.key, x: 4.2, y: 7.0, scale: 0.22, depth: -24, zoneId: 'base', alpha: 0.38, originY: 0.5 },

  // Street zone props
  { key: GAME_ASSETS.props.brokenStreetPole.key, x: 9.5, y: 5.0, scale: 0.32, depth: -22, zoneId: 'rua', alpha: 0.88, originY: 0.92 },
  { key: GAME_ASSETS.props.streetSign.key, x: 13.5, y: 5.5, scale: 0.28, depth: -22, zoneId: 'rua', alpha: 0.88, originY: 0.92 },
  { key: GAME_ASSETS.props.barricade.key, x: 10.5, y: 7.5, scale: 0.32, depth: -21, zoneId: 'rua', alpha: 0.9, originY: 0.76 },
  { key: GAME_ASSETS.props.trashBags.key, x: 14.0, y: 8.0, scale: 0.32, depth: -20, zoneId: 'rua', alpha: 0.88, originY: 0.78 },
  { key: GAME_ASSETS.props.bloodPuddle.key, x: 12.5, y: 9.0, scale: 0.26, depth: -24, zoneId: 'rua', alpha: 0.42, originY: 0.5 },
  { key: GAME_ASSETS.props.rainPuddle.key, x: 15.0, y: 6.0, scale: 0.3, depth: -25, zoneId: 'rua', alpha: 0.48, originY: 0.5 },
  { key: GAME_ASSETS.props.brokenWall.key, x: 15.5, y: 9.5, scale: 0.26, depth: -21, zoneId: 'rua', alpha: 0.78, originY: 0.82 },
  { key: GAME_ASSETS.props.barricade.key, x: 11.0, y: 4.5, scale: 0.26, depth: -21, zoneId: 'rua', alpha: 0.82, originY: 0.76 },
  { key: GAME_ASSETS.props.dragMark.key, x: 9.0, y: 8.5, scale: 0.24, depth: -24, zoneId: 'rua', alpha: 0.38, originY: 0.5 },
  { key: GAME_ASSETS.props.rainPuddle.key, x: 13.0, y: 10.0, scale: 0.28, depth: -25, zoneId: 'rua', alpha: 0.44, originY: 0.5 },
  { key: GAME_ASSETS.props.trashBags.key, x: 9.0, y: 9.5, scale: 0.26, depth: -20, zoneId: 'rua', alpha: 0.78, originY: 0.78 },

  // Market zone props
  { key: GAME_ASSETS.props.marketCrates.key, x: 20.0, y: 8.5, scale: 0.3, depth: -20, zoneId: 'mercado', alpha: 0.9, originY: 0.78 },
  { key: GAME_ASSETS.props.trashBags.key, x: 18.5, y: 8.0, scale: 0.28, depth: -20, zoneId: 'mercado', alpha: 0.86, originY: 0.78 },
  { key: GAME_ASSETS.props.barricade.key, x: 22.0, y: 10.5, scale: 0.3, depth: -21, zoneId: 'mercado', alpha: 0.88, originY: 0.76 },
  { key: GAME_ASSETS.props.brokenWindow.key, x: 22.5, y: 6.5, scale: 0.22, depth: -20, zoneId: 'mercado', alpha: 0.82, originY: 0.82 },
  { key: GAME_ASSETS.props.rainPuddle.key, x: 23.5, y: 11.0, scale: 0.3, depth: -25, zoneId: 'mercado', alpha: 0.48, originY: 0.5 },
  { key: GAME_ASSETS.props.dragMark.key, x: 17.5, y: 9.5, scale: 0.24, depth: -24, zoneId: 'mercado', alpha: 0.42, originY: 0.5 },
  { key: GAME_ASSETS.props.brokenWall.key, x: 17.0, y: 6.0, scale: 0.24, depth: -21, zoneId: 'mercado', alpha: 0.78, originY: 0.82 },
  { key: GAME_ASSETS.props.bloodPuddle.key, x: 21.5, y: 9.0, scale: 0.22, depth: -24, zoneId: 'mercado', alpha: 0.38, originY: 0.5 },
  { key: GAME_ASSETS.props.trashBags.key, x: 24.0, y: 8.5, scale: 0.25, depth: -20, zoneId: 'mercado', alpha: 0.78, originY: 0.78 },
  { key: GAME_ASSETS.props.marketCrates.key, x: 19.0, y: 10.5, scale: 0.28, depth: -20, zoneId: 'mercado', alpha: 0.84, originY: 0.78 },

  // Path zone props
  { key: GAME_ASSETS.props.brokenWall.key, x: 13.5, y: 14.5, scale: 0.28, depth: -21, zoneId: 'caminho', alpha: 0.86, originY: 0.82 },
  { key: GAME_ASSETS.props.rainPuddle.key, x: 16.0, y: 18.0, scale: 0.34, depth: -25, zoneId: 'caminho', alpha: 0.52, originY: 0.5 },
  { key: GAME_ASSETS.props.bloodPuddle.key, x: 19.5, y: 20.5, scale: 0.3, depth: -24, zoneId: 'caminho', alpha: 0.52, originY: 0.5 },
  { key: GAME_ASSETS.props.trashBags.key, x: 17.0, y: 19.5, scale: 0.28, depth: -20, zoneId: 'caminho', alpha: 0.84, originY: 0.78 },
  { key: GAME_ASSETS.props.streetSign.key, x: 20.0, y: 16.0, scale: 0.24, depth: -22, zoneId: 'caminho', alpha: 0.84, originY: 0.92 },
  { key: GAME_ASSETS.props.barricade.key, x: 21.0, y: 21.0, scale: 0.28, depth: -21, zoneId: 'caminho', alpha: 0.86, originY: 0.76 },
  { key: GAME_ASSETS.props.brokenStreetPole.key, x: 14.5, y: 21.0, scale: 0.26, depth: -22, zoneId: 'caminho', alpha: 0.82, originY: 0.92 },
  { key: GAME_ASSETS.props.dragMark.key, x: 18.0, y: 21.5, scale: 0.24, depth: -24, zoneId: 'caminho', alpha: 0.38, originY: 0.5 },
  { key: GAME_ASSETS.props.trashBags.key, x: 21.5, y: 15.0, scale: 0.24, depth: -20, zoneId: 'caminho', alpha: 0.78, originY: 0.78 },
  { key: GAME_ASSETS.props.rainPuddle.key, x: 19.0, y: 15.0, scale: 0.28, depth: -25, zoneId: 'caminho', alpha: 0.45, originY: 0.5 },

  // House zone props
  { key: GAME_ASSETS.props.brokenDoor.key, x: 25.5, y: 18.0, scale: 0.26, depth: -20, zoneId: 'casa', alpha: 0.88, originY: 0.92 },
  { key: GAME_ASSETS.props.brokenWindow.key, x: 27.5, y: 20.0, scale: 0.28, depth: -20, zoneId: 'casa', alpha: 0.88, originY: 0.82 },
  { key: GAME_ASSETS.props.trashBags.key, x: 24.0, y: 21.5, scale: 0.28, depth: -20, zoneId: 'casa', alpha: 0.86, originY: 0.78 },
  { key: GAME_ASSETS.props.rainPuddle.key, x: 28.5, y: 17.0, scale: 0.3, depth: -25, zoneId: 'casa', alpha: 0.45, originY: 0.5 },
  { key: GAME_ASSETS.props.bloodPuddle.key, x: 25.0, y: 21.0, scale: 0.24, depth: -24, zoneId: 'casa', alpha: 0.38, originY: 0.5 },
  { key: GAME_ASSETS.props.barricade.key, x: 23.5, y: 16.5, scale: 0.26, depth: -21, zoneId: 'casa', alpha: 0.8, originY: 0.76 },
  { key: GAME_ASSETS.props.streetSign.key, x: 29.0, y: 21.5, scale: 0.22, depth: -22, zoneId: 'casa', alpha: 0.78, originY: 0.92 },

  // School zone props
  { key: GAME_ASSETS.props.dragMark.key, x: 26.0, y: 26.5, scale: 0.28, depth: -24, zoneId: 'escola', alpha: 0.48, originY: 0.5 },
  { key: GAME_ASSETS.props.barricade.key, x: 25.5, y: 25.5, scale: 0.26, depth: -21, zoneId: 'escola', alpha: 0.82, originY: 0.76 },
  { key: GAME_ASSETS.props.brokenWall.key, x: 29.0, y: 28.5, scale: 0.24, depth: -21, zoneId: 'escola', alpha: 0.78, originY: 0.82 },
  { key: GAME_ASSETS.props.rainPuddle.key, x: 28.0, y: 26.0, scale: 0.3, depth: -25, zoneId: 'escola', alpha: 0.45, originY: 0.5 },
  { key: GAME_ASSETS.props.streetSign.key, x: 26.0, y: 29.0, scale: 0.22, depth: -22, zoneId: 'escola', alpha: 0.76, originY: 0.92 },
  { key: GAME_ASSETS.props.bloodPuddle.key, x: 28.5, y: 27.0, scale: 0.22, depth: -24, zoneId: 'escola', alpha: 0.34, originY: 0.5 },
  { key: GAME_ASSETS.props.trashBags.key, x: 27.0, y: 29.5, scale: 0.26, depth: -20, zoneId: 'escola', alpha: 0.8, originY: 0.78 },

  // =====================================================================
  // MILITARY / DEFENSE PROPS — sandbags, barriers, crates
  // =====================================================================
  // Base perimeter defense
  { key: GAME_ASSETS.props.sandbagWallIso.key, x: 3.5, y: 3.0, scale: 0.88, depth: -18, zoneId: 'base', alpha: 0.92, originY: 0.8 },
  { key: GAME_ASSETS.props.sandbagWallIso.key, x: 6.0, y: 3.0, scale: 0.88, depth: -18, zoneId: 'base', alpha: 0.92, originY: 0.8 },
  { key: GAME_ASSETS.props.sandbagWallIso.key, x: 2.8, y: 6.0, scale: 0.82, depth: -18, zoneId: 'base', alpha: 0.9, originY: 0.8 },
  { key: GAME_ASSETS.props.sandbagWallIso.key, x: 7.0, y: 7.8, scale: 0.82, depth: -18, zoneId: 'base', alpha: 0.9, originY: 0.8 },
  { key: GAME_ASSETS.props.concreteBarrierIso.key, x: 8.2, y: 4.8, scale: 0.92, depth: -18, zoneId: 'base', alpha: 0.92, originY: 0.78 },
  { key: GAME_ASSETS.props.militaryCratesIso.key, x: 3.5, y: 7.5, scale: 0.78, depth: -18, zoneId: 'base', alpha: 0.88, originY: 0.83 },
  // Street defense
  { key: GAME_ASSETS.props.sandbagWallIso.key, x: 9.5, y: 5.5, scale: 0.78, depth: -18, zoneId: 'rua', alpha: 0.86, originY: 0.8 },
  { key: GAME_ASSETS.props.concreteBarrierIso.key, x: 11.5, y: 9.0, scale: 0.88, depth: -18, zoneId: 'rua', alpha: 0.88, originY: 0.78 },
  { key: GAME_ASSETS.props.militaryCratesIso.key, x: 13.5, y: 4.5, scale: 0.72, depth: -18, zoneId: 'rua', alpha: 0.84, originY: 0.83 },
  { key: GAME_ASSETS.props.concreteBarrierIso.key, x: 15.0, y: 9.5, scale: 0.88, depth: -18, zoneId: 'rua', alpha: 0.86, originY: 0.78 },
  // Market defense
  { key: GAME_ASSETS.props.sandbagWallIso.key, x: 18.0, y: 11.0, scale: 0.78, depth: -18, zoneId: 'mercado', alpha: 0.84, originY: 0.8 },
  { key: GAME_ASSETS.props.concreteBarrierIso.key, x: 23.0, y: 5.5, scale: 0.88, depth: -18, zoneId: 'mercado', alpha: 0.86, originY: 0.78 },
  { key: GAME_ASSETS.props.militaryCratesIso.key, x: 23.5, y: 10.0, scale: 0.72, depth: -18, zoneId: 'mercado', alpha: 0.84, originY: 0.83 },
  // Path defense
  { key: GAME_ASSETS.props.concreteBarrierIso.key, x: 16.0, y: 16.0, scale: 0.84, depth: -18, zoneId: 'caminho', alpha: 0.82, originY: 0.78 },
  { key: GAME_ASSETS.props.sandbagWallIso.key, x: 21.0, y: 20.5, scale: 0.74, depth: -18, zoneId: 'caminho', alpha: 0.82, originY: 0.8 },
  // House defense
  { key: GAME_ASSETS.props.militaryCratesIso.key, x: 23.0, y: 19.0, scale: 0.68, depth: -18, zoneId: 'casa', alpha: 0.8, originY: 0.83 },
  { key: GAME_ASSETS.props.concreteBarrierIso.key, x: 28.5, y: 21.5, scale: 0.82, depth: -18, zoneId: 'casa', alpha: 0.82, originY: 0.78 },
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
