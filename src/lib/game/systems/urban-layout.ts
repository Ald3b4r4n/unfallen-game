import { MAP_CONFIG } from '../config/map-config';

export interface UrbanSurface {
  id: string;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  color: number;
  alpha: number;
  borderColor?: number;
  borderAlpha?: number;
}

export interface UrbanDecoration {
  id: string;
  kind: 'tree' | 'pole' | 'lamp';
  x: number;
  y: number;
  scale: number;
  depth: number;
  zoneId: string;
  color: number;
  alpha: number;
}

export interface EnterableBuilding {
  id: string;
  label: string;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

export const PHASE_ONE_URBAN_SURFACES: UrbanSurface[] = [
  { id: 'base-yard', minX: 2, maxX: 12, minY: 2, maxY: 12, color: 0x101820, alpha: 0.92, borderColor: 0x1d4ed8, borderAlpha: 0.28 },
  { id: 'base-to-street-road', minX: 9, maxX: 25, minY: 6, maxY: 13, color: 0x111827, alpha: 0.94 },
  { id: 'street-block', minX: 11, maxX: 25, minY: 4, maxY: 16, color: 0x111827, alpha: 0.96, borderColor: 0x475569, borderAlpha: 0.22 },
  { id: 'street-to-market-road', minX: 22, maxX: 39, minY: 6, maxY: 16, color: 0x151515, alpha: 0.96 },
  { id: 'market-block', minX: 26, maxX: 39, minY: 4, maxY: 18, color: 0x171717, alpha: 0.96, borderColor: 0xf59e0b, borderAlpha: 0.24 },
  { id: 'market-to-residence-road', minX: 24, maxX: 43, minY: 16, maxY: 26, color: 0x111827, alpha: 0.94 },
  { id: 'residence-road', minX: 21, maxX: 44, minY: 22, maxY: 39, color: 0x141414, alpha: 0.96, borderColor: 0x78350f, borderAlpha: 0.22 },
  { id: 'residence-to-house-road', minX: 39, maxX: 56, minY: 34, maxY: 48, color: 0x101820, alpha: 0.94 },
  { id: 'rafael-house-yard', minX: 42, maxX: 56, minY: 33, maxY: 50, color: 0x10201a, alpha: 0.95, borderColor: 0x10b981, borderAlpha: 0.24 },
  { id: 'school-approach-road', minX: 51, maxX: 63, minY: 47, maxY: 62, color: 0x161616, alpha: 0.96 },
  { id: 'school-gate-block', minX: 54, maxX: 63, minY: 51, maxY: 63, color: 0x1a1111, alpha: 0.95, borderColor: 0xef4444, borderAlpha: 0.24 },
];

export const PHASE_ONE_URBAN_DECORATIONS: UrbanDecoration[] = [
  { id: 'base-tree-1', kind: 'tree', x: 3.9, y: 9.4, scale: 1, depth: -47, zoneId: 'base', color: 0x14532d, alpha: 0.9 },
  { id: 'base-pole-1', kind: 'pole', x: 10.6, y: 5.9, scale: 1, depth: -46, zoneId: 'base', color: 0xcbd5e1, alpha: 0.62 },
  { id: 'street-tree-1', kind: 'tree', x: 14.6, y: 6.8, scale: 1, depth: -47, zoneId: 'rua', color: 0x1f5f2e, alpha: 0.88 },
  { id: 'street-pole-1', kind: 'pole', x: 18.6, y: 12.8, scale: 1, depth: -46, zoneId: 'rua', color: 0xb8c4d6, alpha: 0.58 },
  { id: 'market-tree-1', kind: 'tree', x: 27.2, y: 7.6, scale: 1, depth: -47, zoneId: 'mercado', color: 0x166534, alpha: 0.86 },
  { id: 'market-pole-1', kind: 'pole', x: 37.8, y: 9.8, scale: 1, depth: -46, zoneId: 'mercado', color: 0xd1d5db, alpha: 0.58 },
  { id: 'path-tree-1', kind: 'tree', x: 25.5, y: 27.6, scale: 1, depth: -47, zoneId: 'caminho', color: 0x14532d, alpha: 0.82 },
  { id: 'path-pole-1', kind: 'pole', x: 39.8, y: 31.8, scale: 1, depth: -46, zoneId: 'caminho', color: 0xcbd5e1, alpha: 0.58 },
  { id: 'house-tree-1', kind: 'tree', x: 44.0, y: 44.2, scale: 1, depth: -47, zoneId: 'casa', color: 0x166534, alpha: 0.8 },
  { id: 'house-pole-1', kind: 'pole', x: 52.8, y: 42.0, scale: 1, depth: -46, zoneId: 'casa', color: 0xcbd5e1, alpha: 0.58 },
  { id: 'school-tree-1', kind: 'tree', x: 56.2, y: 54.0, scale: 1, depth: -47, zoneId: 'escola', color: 0x14532d, alpha: 0.78 },
  { id: 'school-pole-1', kind: 'pole', x: 60.8, y: 57.4, scale: 1, depth: -46, zoneId: 'escola', color: 0xd1d5db, alpha: 0.58 },
];

export const PHASE_ONE_ENTERABLE_BUILDINGS: EnterableBuilding[] = [
  { id: 'police-base', label: 'Base Policial', minX: 5.0, maxX: 8.4, minY: 4.4, maxY: 7.4 },
  { id: 'abandoned-market', label: 'Mercado Abandonado', minX: 30.0, maxX: 34.7, minY: 8.1, maxY: 11.6 },
  { id: 'rafael-house', label: 'Casa de Rafael', minX: 47.4, maxX: 51.8, minY: 38.8, maxY: 42.6 },
];

export function getEnterableBuildingAtPosition(
  posX: number,
  posY: number,
  buildings: EnterableBuilding[] = PHASE_ONE_ENTERABLE_BUILDINGS
): EnterableBuilding | null {
  return buildings.find((building) => (
    posX >= building.minX &&
    posX <= building.maxX &&
    posY >= building.minY &&
    posY <= building.maxY
  )) ?? null;
}

export function isUrbanSurfaceInsideMap(surface: UrbanSurface): boolean {
  return surface.minX >= MAP_CONFIG.minX &&
    surface.maxX <= MAP_CONFIG.maxX &&
    surface.minY >= MAP_CONFIG.minY &&
    surface.maxY <= MAP_CONFIG.maxY;
}

export function isUrbanDecorationInsideMap(decoration: UrbanDecoration): boolean {
  return decoration.x >= MAP_CONFIG.minX &&
    decoration.x <= MAP_CONFIG.maxX &&
    decoration.y >= MAP_CONFIG.minY &&
    decoration.y <= MAP_CONFIG.maxY;
}
