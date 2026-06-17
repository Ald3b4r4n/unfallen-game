import { toScreen } from '../isometric/iso-math';

export const TILE_WIDTH = 128;
export const TILE_HEIGHT = 64;

export const MAP_CONFIG = {
  gridWidth: 32,
  gridHeight: 32,
  minX: 0,
  minY: 0,
  maxX: 31,
  maxY: 31,
  cameraPadding: 420,
} as const;

export function clampToMapBounds(posX: number, posY: number): { posX: number; posY: number } {
  return {
    posX: Math.max(MAP_CONFIG.minX, Math.min(MAP_CONFIG.maxX, posX)),
    posY: Math.max(MAP_CONFIG.minY, Math.min(MAP_CONFIG.maxY, posY)),
  };
}

export function getCameraBounds() {
  const corners = [
    toScreen({ x: MAP_CONFIG.minX, y: MAP_CONFIG.minY, z: 0 }, TILE_WIDTH, TILE_HEIGHT),
    toScreen({ x: MAP_CONFIG.maxX + 1, y: MAP_CONFIG.minY, z: 0 }, TILE_WIDTH, TILE_HEIGHT),
    toScreen({ x: MAP_CONFIG.minX, y: MAP_CONFIG.maxY + 1, z: 0 }, TILE_WIDTH, TILE_HEIGHT),
    toScreen({ x: MAP_CONFIG.maxX + 1, y: MAP_CONFIG.maxY + 1, z: 0 }, TILE_WIDTH, TILE_HEIGHT),
  ];

  const xs = corners.map((corner) => corner.x);
  const ys = corners.map((corner) => corner.y);
  const minX = Math.min(...xs) - MAP_CONFIG.cameraPadding;
  const minY = Math.min(...ys) - MAP_CONFIG.cameraPadding;
  const maxX = Math.max(...xs) + MAP_CONFIG.cameraPadding;
  const maxY = Math.max(...ys) + MAP_CONFIG.cameraPadding;

  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY,
  };
}
