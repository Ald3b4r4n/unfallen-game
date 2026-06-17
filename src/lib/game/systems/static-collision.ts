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
  { id: 'police-base-barricade', minX: 10.4, maxX: 11.5, minY: 6.7, maxY: 7.6 },
  { id: 'street-debris-pile', minX: 16.2, maxX: 19.2, minY: 9.0, maxY: 11.9 },
  { id: 'market-barricade', minX: 34.1, maxX: 35.2, minY: 14.2, maxY: 15.2 },
  { id: 'residence-roadblock', minX: 40.7, maxX: 41.8, minY: 35.8, maxY: 36.8 },
  { id: 'rafael-house-wall', minX: 43.3, maxX: 44.4, minY: 37.8, maxY: 38.7 },
  { id: 'school-gate', minX: 57.0, maxX: 60.0, minY: 55.5, maxY: 57.9 },
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
