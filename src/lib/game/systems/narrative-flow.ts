/**
 * Sistema de Fluxo Narrativo e Checkpoints puro — sem dependência do Phaser.
 */

export interface NarrativeState {
  currentObjectiveId: string;
  activeCheckpointId: number;
  completedObjectives: string[];
  collectedClues: string[];
}

export interface Checkpoint {
  id: number;
  posX: number;
  posY: number;
}

export const CHECKPOINTS: Record<number, Checkpoint> = {
  1: { id: 1, posX: 4, posY: 4 },       // Spawn Inicial (Base Policial)
  2: { id: 2, posX: 8, posY: 5 },       // Saída da Base / Rua Externa
  3: { id: 3, posX: 22, posY: 18 },     // Pátio da Casa de Rafael
};

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
  const cp = CHECKPOINTS[state.activeCheckpointId] || CHECKPOINTS[1];
  return { posX: cp.posX, posY: cp.posY };
}

/**
 * Mapeia as zonas do grid 32x32 para as áreas da história.
 */
export function checkZone(posX: number, posY: number): string | null {
  // Base Policial: x 2 a 6, y 2 a 6
  if (posX >= 2 && posX <= 6 && posY >= 2 && posY <= 6) return "base";
  
  // Mercado: x 16 a 22, y 2 a 8
  if (posX >= 16 && posX <= 22 && posY >= 2 && posY <= 8) return "mercado";
  
  // Casa de Rafael: x 21 a 28, y 15 a 24
  if (posX >= 21 && posX <= 28 && posY >= 15 && posY <= 24) return "casa";
  
  // Acesso à Escola Municipal: x 29 a 31, y 25 a 29
  if (posX >= 29 && posX <= 31 && posY >= 25 && posY <= 29) return "escola";
  
  // Rua Externa: x 7 a 15, y 2 a 10
  if (posX >= 7 && posX <= 15 && posY >= 2 && posY <= 10) return "rua";

  return null;
}
