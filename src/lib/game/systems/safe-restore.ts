import { clampToMapBounds } from '../config/map-config';
import { getSpawnPoint, INITIAL_SPAWN } from './spawn-points';

export const SAFE_RESTORE_MIN_DISTANCE_FROM_ENEMY = 4;

export interface RestorePosition {
  posX: number;
  posY: number;
}

export interface HazardPosition {
  id: string;
  posX: number;
  posY: number;
}

export function isRestorePositionSafe(
  position: RestorePosition,
  hazards: HazardPosition[],
  minDistance = SAFE_RESTORE_MIN_DISTANCE_FROM_ENEMY
): boolean {
  if (!isInsideMapBounds(position)) {
    return false;
  }

  return hazards.every((hazard) => distance(position, hazard) >= minDistance);
}

export function resolveSafeRestorePosition(options: {
  savedPosition?: RestorePosition | null;
  activeCheckpointId: number;
  hazards: HazardPosition[];
  minDistance?: number;
}): RestorePosition {
  const minDistance = options.minDistance ?? SAFE_RESTORE_MIN_DISTANCE_FROM_ENEMY;

  if (
    options.savedPosition &&
    isRestorePositionSafe(options.savedPosition, options.hazards, minDistance)
  ) {
    return options.savedPosition;
  }

  const checkpoint = getSpawnPoint(options.activeCheckpointId);
  const checkpointPosition = { posX: checkpoint.posX, posY: checkpoint.posY };
  if (isRestorePositionSafe(checkpointPosition, options.hazards, minDistance)) {
    return checkpointPosition;
  }

  return {
    posX: INITIAL_SPAWN.posX,
    posY: INITIAL_SPAWN.posY,
  };
}

function isInsideMapBounds(position: RestorePosition): boolean {
  if (!Number.isFinite(position.posX) || !Number.isFinite(position.posY)) {
    return false;
  }

  const clamped = clampToMapBounds(position.posX, position.posY);
  return clamped.posX === position.posX && clamped.posY === position.posY;
}

function distance(position: RestorePosition, hazard: HazardPosition): number {
  const dx = position.posX - hazard.posX;
  const dy = position.posY - hazard.posY;
  return Math.sqrt(dx * dx + dy * dy);
}
