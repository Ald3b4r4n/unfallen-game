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
  // Base policial - pátio e rua interna
  { id: 'base-yard', minX: 1, maxX: 9, minY: 1, maxY: 9, color: 0x12151a, alpha: 0.58, borderColor: 0x1d4ed8, borderAlpha: 0.06 },
  // Conexão base → rua
  { id: 'base-to-street-road', minX: 7, maxX: 17, minY: 3, maxY: 10, color: 0x111318, alpha: 0.56 },
  // Bloco da rua
  { id: 'street-block', minX: 8, maxX: 17, minY: 2, maxY: 11, color: 0x111318, alpha: 0.58, borderColor: 0x475569, borderAlpha: 0.06 },
  // Conexão rua → mercado
  { id: 'street-to-market-road', minX: 14, maxX: 25, minY: 3, maxY: 12, color: 0x131313, alpha: 0.57 },
  // Bloco do mercado
  { id: 'market-block', minX: 15, maxX: 25, minY: 2, maxY: 13, color: 0x15140f, alpha: 0.58, borderColor: 0xf59e0b, borderAlpha: 0.06 },
  // Conexão mercado → caminho residencial
  { id: 'market-to-residence-road', minX: 11, maxX: 23, minY: 10, maxY: 16, color: 0x111318, alpha: 0.56 },
  // Caminho residencial
  { id: 'residence-road', minX: 11, maxX: 23, minY: 11, maxY: 23, color: 0x131313, alpha: 0.57, borderColor: 0x78350f, borderAlpha: 0.06 },
  // Conexão caminho → casa
  { id: 'residence-to-house-road', minX: 20, maxX: 30, minY: 14, maxY: 25, color: 0x121a15, alpha: 0.56 },
  // Quintal da casa do Rafael
  { id: 'rafael-house-yard', minX: 21, maxX: 30, minY: 13, maxY: 25, color: 0x0f1a14, alpha: 0.56, borderColor: 0x10b981, borderAlpha: 0.06 },
  // Abordagem da escola
  { id: 'school-approach-road', minX: 23, maxX: 31, minY: 23, maxY: 31, color: 0x131313, alpha: 0.57 },
  // Bloco do portão da escola
  { id: 'school-gate-block', minX: 23, maxX: 31, minY: 23, maxY: 31, color: 0x180f0f, alpha: 0.56, borderColor: 0xef4444, borderAlpha: 0.06 },
];

export const PHASE_ONE_URBAN_DECORATIONS: UrbanDecoration[] = [
  // Base
  { id: 'base-tree-1', kind: 'tree', x: 3.2, y: 7.6, scale: 1.4, depth: -47, zoneId: 'base', color: 0x14532d, alpha: 0.92 },
  { id: 'base-tree-2', kind: 'tree', x: 2.4, y: 3.8, scale: 1.2, depth: -47, zoneId: 'base', color: 0x1a5c32, alpha: 0.88 },
  { id: 'base-pole-1', kind: 'pole', x: 6.8, y: 4.2, scale: 1.4, depth: -46, zoneId: 'base', color: 0xcbd5e1, alpha: 0.72 },
  { id: 'base-pole-2', kind: 'pole', x: 4.0, y: 8.6, scale: 1.2, depth: -46, zoneId: 'base', color: 0xb8c4d6, alpha: 0.66 },
  // Rua
  { id: 'street-tree-1', kind: 'tree', x: 10.2, y: 4.4, scale: 1.3, depth: -47, zoneId: 'rua', color: 0x1f5f2e, alpha: 0.9 },
  { id: 'street-tree-2', kind: 'tree', x: 14.8, y: 9.2, scale: 1.1, depth: -47, zoneId: 'rua', color: 0x1a5228, alpha: 0.86 },
  { id: 'street-pole-1', kind: 'pole', x: 12.6, y: 7.8, scale: 1.3, depth: -46, zoneId: 'rua', color: 0xb8c4d6, alpha: 0.68 },
  // Mercado
  { id: 'market-tree-1', kind: 'tree', x: 17.4, y: 5.2, scale: 1.3, depth: -47, zoneId: 'mercado', color: 0x166534, alpha: 0.88 },
  { id: 'market-tree-2', kind: 'tree', x: 23.6, y: 11.4, scale: 1.1, depth: -47, zoneId: 'mercado', color: 0x14532d, alpha: 0.84 },
  { id: 'market-pole-1', kind: 'pole', x: 22.8, y: 6.8, scale: 1.3, depth: -46, zoneId: 'mercado', color: 0xd1d5db, alpha: 0.68 },
  // Caminho
  { id: 'path-tree-1', kind: 'tree', x: 14.2, y: 16.4, scale: 1.3, depth: -47, zoneId: 'caminho', color: 0x14532d, alpha: 0.86 },
  { id: 'path-tree-2', kind: 'tree', x: 20.6, y: 20.8, scale: 1.1, depth: -47, zoneId: 'caminho', color: 0x1a5c32, alpha: 0.82 },
  { id: 'path-pole-1', kind: 'pole', x: 18.8, y: 18.6, scale: 1.3, depth: -46, zoneId: 'caminho', color: 0xcbd5e1, alpha: 0.66 },
  // Casa
  { id: 'house-tree-1', kind: 'tree', x: 24.2, y: 20.8, scale: 1.3, depth: -47, zoneId: 'casa', color: 0x166534, alpha: 0.84 },
  { id: 'house-tree-2', kind: 'tree', x: 28.8, y: 16.4, scale: 1.1, depth: -47, zoneId: 'casa', color: 0x14532d, alpha: 0.82 },
  { id: 'house-pole-1', kind: 'pole', x: 27.2, y: 18.8, scale: 1.3, depth: -46, zoneId: 'casa', color: 0xcbd5e1, alpha: 0.66 },
  // Escola
  { id: 'school-tree-1', kind: 'tree', x: 25.6, y: 27.8, scale: 1.2, depth: -47, zoneId: 'escola', color: 0x14532d, alpha: 0.82 },
  { id: 'school-pole-1', kind: 'pole', x: 28.8, y: 26.4, scale: 1.3, depth: -46, zoneId: 'escola', color: 0xd1d5db, alpha: 0.66 },
];

export const PHASE_ONE_ENTERABLE_BUILDINGS: EnterableBuilding[] = [
  { id: 'police-base', label: 'Base Policial', minX: 3.5, maxX: 7.0, minY: 3.5, maxY: 6.5 },
  { id: 'abandoned-market', label: 'Mercado Abandonado', minX: 18.0, maxX: 22.5, minY: 5.0, maxY: 9.0 },
  { id: 'rafael-house', label: 'Casa de Rafael', minX: 24.5, maxX: 28.5, minY: 16.5, maxY: 20.5 },
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
