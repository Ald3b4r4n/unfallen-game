import { MAP_CONFIG } from '../config/map-config';

export interface StaticObstacle {
  id: string;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

export interface LogicalPosition {
  posX: number;
  posY: number;
}

export const PHASE_ONE_STATIC_OBSTACLES: StaticObstacle[] = [
  { id: 'police-base-barricade', minX: 7.5, maxX: 8.5, minY: 4.8, maxY: 5.6 },
  { id: 'street-debris-pile', minX: 11.0, maxX: 13.0, minY: 6.5, maxY: 8.5 },
  { id: 'market-barricade', minX: 22.0, maxX: 23.0, minY: 10.0, maxY: 11.0 },
  { id: 'residence-roadblock', minX: 20.5, maxX: 21.5, minY: 20.5, maxY: 21.5 },
  { id: 'rafael-house-wall', minX: 23.0, maxX: 24.0, minY: 16.5, maxY: 17.5 },
  { id: 'school-gate', minX: 26.0, maxX: 29.0, minY: 26.5, maxY: 28.0 },
  
  // Police Base Physical Walls
  { id: 'police-base-wall-nw', minX: 3.5, maxX: 7.0, minY: 3.4, maxY: 3.6 },
  { id: 'police-base-wall-ne', minX: 3.4, maxX: 3.6, minY: 3.5, maxY: 6.5 },
  { id: 'police-base-wall-se', minX: 3.5, maxX: 7.0, minY: 6.4, maxY: 6.6 },
  // Front SW Wall (with door at y=5.0)
  { id: 'police-base-wall-sw-1', minX: 6.9, maxX: 7.1, minY: 3.5, maxY: 4.8 },
  { id: 'police-base-wall-sw-2', minX: 6.9, maxX: 7.1, minY: 5.2, maxY: 6.5 },
  // Divider Wall (with door at x=5.0)
  { id: 'police-base-divider-1', minX: 3.5, maxX: 4.8, minY: 4.9, maxY: 5.1 },
  { id: 'police-base-divider-2', minX: 5.2, maxX: 7.0, minY: 4.9, maxY: 5.1 },
];

export function isPositionInsideMap(posX: number, posY: number): boolean {
  return posX >= MAP_CONFIG.minX &&
    posX <= MAP_CONFIG.maxX &&
    posY >= MAP_CONFIG.minY &&
    posY <= MAP_CONFIG.maxY;
}

export function isPositionBlockedByStaticObstacle(
  posX: number,
  posY: number,
  obstacles: StaticObstacle[] = PHASE_ONE_STATIC_OBSTACLES
): boolean {
  if (!isPositionInsideMap(posX, posY)) return true;

  return obstacles.some((obstacle) => (
    posX >= obstacle.minX &&
    posX <= obstacle.maxX &&
    posY >= obstacle.minY &&
    posY <= obstacle.maxY
  ));
}

export function resolveMovementAgainstStaticObstacles(
  current: LogicalPosition,
  next: LogicalPosition,
  obstacles: StaticObstacle[] = PHASE_ONE_STATIC_OBSTACLES
): LogicalPosition {
  if (!isPositionBlockedByStaticObstacle(next.posX, next.posY, obstacles)) {
    return next;
  }

  const xOnly = { posX: next.posX, posY: current.posY };
  if (!isPositionBlockedByStaticObstacle(xOnly.posX, xOnly.posY, obstacles)) {
    return xOnly;
  }

  const yOnly = { posX: current.posX, posY: next.posY };
  if (!isPositionBlockedByStaticObstacle(yOnly.posX, yOnly.posY, obstacles)) {
    return yOnly;
  }

  return current;
}
