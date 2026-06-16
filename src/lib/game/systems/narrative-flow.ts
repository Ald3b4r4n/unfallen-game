/**
 * Sistema de Fluxo Narrativo e Checkpoints puro — sem dependência do Phaser.
 */
import { checkZone as resolveZone, ZoneId } from '../config/zones';
import { CHECKPOINTS, getSpawnPoint, SpawnPoint } from './spawn-points';

export interface NarrativeState {
  currentObjectiveId: string;
  activeCheckpointId: number;
  completedObjectives: string[];
  collectedClues: string[];
}

export { CHECKPOINTS };
export type Checkpoint = SpawnPoint;

export const OBJECTIVES: Record<string, string> = {
  "saia_base": "Saia da base policial",
  "ir_mercado": "Investigue o Mercado Abandonado",
  "pista_mercado": "Encontre pistas sobre Luísa no Mercado",
  "ir_casa": "Siga para a residência de Rafael",
  "pista_casa": "Busque por pistas na casa de Rafael",
  "ir_escola": "Vá até o portão da Escola Municipal",
  "fim": "Fase concluída"
};

export const OBJECTIVE_ORDER = [
  "saia_base",
  "ir_mercado",
  "pista_mercado",
  "ir_casa",
  "pista_casa",
  "ir_escola",
  "fim"
];

/**
 * Cria o estado inicial do fluxo narrativo.
 */
export function createNarrativeState(): NarrativeState {
  return {
    currentObjectiveId: "saia_base",
    activeCheckpointId: 1,
    completedObjectives: [],
    collectedClues: [],
  };
}

/**
 * Avança o objetivo atual na ordem sequencial, se válido.
 */
export function completeObjective(state: NarrativeState, objectiveId: string): NarrativeState {
  if (!OBJECTIVES[objectiveId]) return state; // Objetivo inválido
  if (state.completedObjectives.includes(objectiveId)) return state; // Já completo

  const completed = [...state.completedObjectives, objectiveId];
  
  // Encontrar o próximo objetivo na ordem
  const currentIndex = OBJECTIVE_ORDER.indexOf(objectiveId);
  let nextObjectiveId = state.currentObjectiveId;
  
  if (currentIndex !== -1 && currentIndex < OBJECTIVE_ORDER.length - 1) {
    // Se completou o objetivo ativo ou anterior, o novo ativo é o próximo da fila
    if (state.currentObjectiveId === objectiveId) {
      nextObjectiveId = OBJECTIVE_ORDER[currentIndex + 1];
    }
  }

  return {
    ...state,
    completedObjectives: completed,
    currentObjectiveId: nextObjectiveId,
  };
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
