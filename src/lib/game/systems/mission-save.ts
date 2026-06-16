import { ZoneId, GAME_ZONES } from '../config/zones';
import { clampToMapBounds } from '../config/map-config';
import {
  MissionObjectiveId,
  MissionObjectiveState,
  MISSION_OBJECTIVES,
  createMissionObjectiveState,
} from './mission-objectives';
import { CHECKPOINTS, getSpawnPoint } from './spawn-points';

export interface MissionPlayerPosition {
  x: number;
  y: number;
}

export interface MissionSaveState {
  currentObjectiveId: MissionObjectiveId;
  completedObjectiveIds: MissionObjectiveId[];
  collectedInteractionIds: string[];
  activeCheckpointId: number;
  playerPosition: MissionPlayerPosition;
  phaseComplete: boolean;
  lastKnownZoneId?: ZoneId;
  updatedAt: string;
}

const OBJECTIVE_IDS = MISSION_OBJECTIVES.map((objective) => objective.id);
const VALID_INTERACTION_IDS = MISSION_OBJECTIVES
  .map((objective) => objective.requiredInteractionId)
  .filter((interactionId): interactionId is string => Boolean(interactionId));

export function createInitialMissionSaveState(updatedAt = new Date().toISOString()): MissionSaveState {
  const initialState = createMissionObjectiveState();
  const spawn = getSpawnPoint(initialState.activeCheckpointId);

  return objectiveStateToMissionSave(initialState, {
    collectedInteractionIds: [],
    playerPosition: { x: spawn.posX, y: spawn.posY },
    updatedAt,
  });
}

export function objectiveStateToMissionSave(
  state: MissionObjectiveState,
  options: {
    collectedInteractionIds?: string[];
    playerPosition: MissionPlayerPosition;
    lastKnownZoneId?: ZoneId | null;
    updatedAt?: string;
  }
): MissionSaveState {
  const updatedAt = isValidIsoDate(options.updatedAt) ? options.updatedAt : new Date().toISOString();
  const normalized = normalizeMissionSaveState({
    currentObjectiveId: state.currentObjectiveId,
    completedObjectiveIds: state.completedObjectiveIds,
    collectedInteractionIds: options.collectedInteractionIds ?? [],
    activeCheckpointId: state.activeCheckpointId,
    playerPosition: options.playerPosition,
    phaseComplete: state.phaseCompleted,
    lastKnownZoneId: options.lastKnownZoneId ?? undefined,
    updatedAt,
  }, updatedAt);

  return normalized;
}

export function missionSaveToObjectiveState(raw: unknown): MissionObjectiveState {
  const save = normalizeMissionSaveState(raw);
  const completedObjectives = save.completedObjectiveIds;
  const collectedClues = MISSION_OBJECTIVES
    .filter((objective) => completedObjectives.includes(objective.id) && objective.clueId)
    .map((objective) => objective.clueId as string);

  return {
    currentObjectiveId: save.currentObjectiveId,
    activeCheckpointId: save.activeCheckpointId,
    completedObjectiveIds: completedObjectives,
    collectedClues,
    phaseCompleted: save.phaseComplete,
  };
}

export function normalizeMissionSaveState(raw: unknown, fallbackUpdatedAt?: string): MissionSaveState {
  const source = isRecord(raw) ? raw : {};
  const fallback = createMissionObjectiveState();
  const completedObjectiveIds = normalizeCompletedObjectiveIds(source.completedObjectiveIds);
  const phaseComplete = Boolean(source.phaseComplete) && completedObjectiveIds.length === OBJECTIVE_IDS.length;
  const currentObjectiveId = normalizeCurrentObjectiveId(source.currentObjectiveId, completedObjectiveIds, phaseComplete);
  const collectedInteractionIds = normalizeCollectedInteractionIds(source.collectedInteractionIds, completedObjectiveIds);
  const activeCheckpointId = normalizeCheckpointId(source.activeCheckpointId, completedObjectiveIds, phaseComplete);
  const playerPosition = normalizePlayerPosition(source.playerPosition, activeCheckpointId);
  const lastKnownZoneId = normalizeZoneId(source.lastKnownZoneId);
  const updatedAt = isValidIsoDate(source.updatedAt)
    ? String(source.updatedAt)
    : isValidIsoDate(fallbackUpdatedAt)
      ? String(fallbackUpdatedAt)
      : new Date().toISOString();

  return {
    currentObjectiveId: currentObjectiveId ?? fallback.currentObjectiveId,
    completedObjectiveIds,
    collectedInteractionIds,
    activeCheckpointId,
    playerPosition,
    phaseComplete,
    ...(lastKnownZoneId ? { lastKnownZoneId } : {}),
    updatedAt,
  };
}

function normalizeCompletedObjectiveIds(raw: unknown): MissionObjectiveId[] {
  if (!Array.isArray(raw)) return [];

  const requested = new Set(raw.filter(isMissionObjectiveId));
  const completed: MissionObjectiveId[] = [];

  for (const objective of MISSION_OBJECTIVES) {
    if (!requested.has(objective.id)) break;
    completed.push(objective.id);
  }

  return completed;
}

function normalizeCurrentObjectiveId(
  raw: unknown,
  completedObjectiveIds: MissionObjectiveId[],
  phaseComplete: boolean
): MissionObjectiveId {
  if (phaseComplete) {
    return OBJECTIVE_IDS[OBJECTIVE_IDS.length - 1];
  }

  const firstIncomplete = MISSION_OBJECTIVES.find((objective) => !completedObjectiveIds.includes(objective.id));
  const safeCurrent = firstIncomplete?.id ?? OBJECTIVE_IDS[OBJECTIVE_IDS.length - 1];

  return isMissionObjectiveId(raw) && raw === safeCurrent ? raw : safeCurrent;
}

function normalizeCollectedInteractionIds(raw: unknown, completedObjectiveIds: MissionObjectiveId[]): string[] {
  const collected = new Set<string>();

  if (Array.isArray(raw)) {
    for (const interactionId of raw) {
      const objective = MISSION_OBJECTIVES.find((candidate) => candidate.requiredInteractionId === interactionId);
      if (
        typeof interactionId === 'string' &&
        VALID_INTERACTION_IDS.includes(interactionId) &&
        objective &&
        completedObjectiveIds.includes(objective.id)
      ) {
        collected.add(interactionId);
      }
    }
  }

  for (const objective of MISSION_OBJECTIVES) {
    if (completedObjectiveIds.includes(objective.id) && objective.requiredInteractionId) {
      collected.add(objective.requiredInteractionId);
    }
  }

  return Array.from(collected);
}

function normalizeCheckpointId(
  raw: unknown,
  completedObjectiveIds: MissionObjectiveId[],
  phaseComplete: boolean
): number {
  const maxAllowedCheckpoint = phaseComplete
    ? MISSION_OBJECTIVES[MISSION_OBJECTIVES.length - 1].checkpointOnComplete
    : completedObjectiveIds.reduce((maxCheckpoint, objectiveId) => {
      const objective = MISSION_OBJECTIVES.find((candidate) => candidate.id === objectiveId);
      return Math.max(maxCheckpoint, objective?.checkpointOnComplete ?? 1);
    }, 1);

  const rawCheckpoint = typeof raw === 'number' && Number.isInteger(raw) && CHECKPOINTS[raw] ? raw : 1;
  return Math.min(Math.max(rawCheckpoint, 1), maxAllowedCheckpoint);
}

function normalizePlayerPosition(raw: unknown, activeCheckpointId: number): MissionPlayerPosition {
  if (
    isRecord(raw) &&
    typeof raw.x === 'number' &&
    Number.isFinite(raw.x) &&
    typeof raw.y === 'number' &&
    Number.isFinite(raw.y)
  ) {
    const clamped = clampToMapBounds(raw.x, raw.y);
    return { x: clamped.posX, y: clamped.posY };
  }

  const spawn = getSpawnPoint(activeCheckpointId);
  return { x: spawn.posX, y: spawn.posY };
}

function normalizeZoneId(raw: unknown): ZoneId | undefined {
  if (typeof raw !== 'string') return undefined;
  return GAME_ZONES.some((zone) => zone.id === raw) ? raw as ZoneId : undefined;
}

function isMissionObjectiveId(raw: unknown): raw is MissionObjectiveId {
  return typeof raw === 'string' && OBJECTIVE_IDS.includes(raw as MissionObjectiveId);
}

function isValidIsoDate(raw: unknown): boolean {
  return typeof raw === 'string' && !Number.isNaN(Date.parse(raw));
}

function isRecord(raw: unknown): raw is Record<string, unknown> {
  return typeof raw === 'object' && raw !== null;
}
