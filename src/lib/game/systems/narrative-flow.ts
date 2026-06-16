/**
 * Sistema de Fluxo Narrativo e Checkpoints puro — sem dependência do Phaser.
 */
import { checkZone as resolveZone, ZoneId } from '../config/zones';
import { CHECKPOINTS, getSpawnPoint, SpawnPoint } from './spawn-points';
import {
  MissionObjectiveId,
  MissionObjectiveState,
  MissionProgressResult,
  advanceMissionByInteraction,
  advanceMissionByZone,
  canCompleteMissionInteraction,
  createMissionObjectiveState,
  getMissionObjective,
  getMissionObjectiveText,
} from './mission-objectives';

export type NarrativeState = MissionObjectiveState;

export { CHECKPOINTS };
export type Checkpoint = SpawnPoint;

export const OBJECTIVES: Record<MissionObjectiveId, string> = {
  leave_police_base: getMissionObjective('leave_police_base').description,
  investigate_market: getMissionObjective('investigate_market').description,
  reach_residential_path: getMissionObjective('reach_residential_path').description,
  search_rafael_house: getMissionObjective('search_rafael_house').description,
  reach_school_gate: getMissionObjective('reach_school_gate').description,
};

export const OBJECTIVE_ORDER = [
  'leave_police_base',
  'investigate_market',
  'reach_residential_path',
  'search_rafael_house',
  'reach_school_gate',
] as const;

/**
 * Cria o estado inicial do fluxo narrativo.
 */
export function createNarrativeState(): NarrativeState {
  return createMissionObjectiveState();
}

/**
 * Avança o objetivo atual na ordem sequencial, se válido.
 */
export function completeObjective(state: NarrativeState, objectiveId: MissionObjectiveId): NarrativeState {
  if (state.currentObjectiveId !== objectiveId) return state;
  return advanceMissionByZone(state, getMissionObjective(objectiveId).targetZoneId).state;
}

/**
 * Ativa um novo checkpoint de maior ID (evita regressão).
 */
export function activateCheckpoint(state: NarrativeState, checkpointId: number): NarrativeState {
  if (!CHECKPOINTS[checkpointId]) return state; // Checkpoint inválido
  if (checkpointId <= state.activeCheckpointId) return state; // Evita regredir checkpoint

  return {
    ...state,
    activeCheckpointId: checkpointId,
  };
}

/**
 * Adiciona uma pista coletada.
 */
export function collectClue(state: NarrativeState, clueId: string): NarrativeState {
  if (state.collectedClues.includes(clueId)) return state;

  return {
    ...state,
    collectedClues: [...state.collectedClues, clueId],
  };
}

/**
 * Retorna as coordenadas do checkpoint ativo.
 */
export function getRespawnPosition(state: NarrativeState): { posX: number; posY: number } {
  const cp = getSpawnPoint(state.activeCheckpointId);
  return { posX: cp.posX, posY: cp.posY };
}

/**
 * Mapeia as zonas do grid 64x64 para as áreas da história.
 */
export function checkZone(posX: number, posY: number): ZoneId | null {
  return resolveZone(posX, posY);
}

export function getCurrentObjectiveText(state: NarrativeState): string {
  return getMissionObjectiveText(state);
}

export function progressNarrativeByZone(state: NarrativeState, zoneId: ZoneId | null): MissionProgressResult {
  return advanceMissionByZone(state, zoneId);
}

export function progressNarrativeByInteraction(
  state: NarrativeState,
  interactionId: string
): MissionProgressResult {
  return advanceMissionByInteraction(state, interactionId);
}

export function canProgressNarrativeInteraction(state: NarrativeState, interactionId: string): boolean {
  return canCompleteMissionInteraction(state, interactionId);
}
