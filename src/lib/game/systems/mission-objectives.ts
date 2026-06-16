import { ZoneId } from '../config/zones';

export type MissionObjectiveId =
  | 'leave_police_base'
  | 'investigate_market'
  | 'reach_residential_path'
  | 'search_rafael_house'
  | 'reach_school_gate';

export type MissionObjectiveStatus = 'locked' | 'active' | 'completed';

export interface MissionObjectiveDefinition {
  id: MissionObjectiveId;
  title: string;
  description: string;
  targetZoneId: ZoneId;
  requiredInteractionId?: string;
  clueId?: string;
  nextObjectiveId?: MissionObjectiveId;
  checkpointOnComplete: number;
  completionMessage: string;
  phaseComplete?: boolean;
}

export interface MissionObjectiveState {
  currentObjectiveId: MissionObjectiveId;
  activeCheckpointId: number;
  completedObjectiveIds: MissionObjectiveId[];
  collectedClues: string[];
  phaseCompleted: boolean;
}

export interface MissionProgressResult {
  state: MissionObjectiveState;
  completedObjectiveId?: MissionObjectiveId;
  checkpointActivated?: number;
  message?: string;
  phaseCompleted: boolean;
}

export const MISSION_OBJECTIVES: MissionObjectiveDefinition[] = [
  {
    id: 'leave_police_base',
    title: 'Saia da Base Policial',
    description: 'Saia da Base Policial e alcance a Rua Externa.',
    targetZoneId: 'rua',
    nextObjectiveId: 'investigate_market',
    checkpointOnComplete: 2,
    completionMessage: "Rafael: 'Consegui sair da base. A rua está bloqueada, mas o mercado pode ter pistas.'",
  },
  {
    id: 'investigate_market',
    title: 'Investigue o Mercado Abandonado',
    description: 'Investigue o Mercado Abandonado em busca de suprimentos e pistas.',
    targetZoneId: 'mercado',
    requiredInteractionId: 'note-backpack',
    clueId: 'backpack',
    nextObjectiveId: 'reach_residential_path',
    checkpointOnComplete: 3,
    completionMessage: "Rafael: 'A mochila da Luísa... Ela passou pelo mercado. Preciso seguir pelo caminho de casa.'",
  },
  {
    id: 'reach_residential_path',
    title: 'Siga pelo caminho residencial',
    description: 'Siga pelo caminho residencial até a casa de Rafael.',
    targetZoneId: 'caminho',
    nextObjectiveId: 'search_rafael_house',
    checkpointOnComplete: 4,
    completionMessage: "Rafael: 'Esse caminho leva para casa. Se Luísa voltou, vou encontrar algum sinal.'",
  },
  {
    id: 'search_rafael_house',
    title: 'Procure pistas na Casa de Rafael',
    description: 'Procure na casa de Rafael qualquer sinal sobre Luísa.',
    targetZoneId: 'casa',
    requiredInteractionId: 'note-diary',
    clueId: 'diary',
    nextObjectiveId: 'reach_school_gate',
    checkpointOnComplete: 5,
    completionMessage: "Rafael: 'O diário confirma: evacuação para a Escola Municipal. É para lá que eu vou.'",
  },
  {
    id: 'reach_school_gate',
    title: 'Vá ao Portão da Escola Municipal',
    description: 'Siga até o Portão da Escola Municipal.',
    targetZoneId: 'escola',
    checkpointOnComplete: 6,
    completionMessage: "Rafael: 'Cheguei ao portão. As marcas indicam que a fuga continuou para dentro da escola.'",
    phaseComplete: true,
  },
];

export function createMissionObjectiveState(): MissionObjectiveState {
  return {
    currentObjectiveId: 'leave_police_base',
    activeCheckpointId: 1,
    completedObjectiveIds: [],
    collectedClues: [],
    phaseCompleted: false,
  };
}

export function getMissionObjective(objectiveId: MissionObjectiveId): MissionObjectiveDefinition {
  const objective = MISSION_OBJECTIVES.find((candidate) => candidate.id === objectiveId);
  if (!objective) {
    throw new Error(`Objetivo desconhecido: ${objectiveId}`);
  }
  return objective;
}

export function getMissionObjectiveText(state: MissionObjectiveState): string {
  return getMissionObjective(state.currentObjectiveId).description;
}

export function getMissionStatuses(state: MissionObjectiveState): Record<MissionObjectiveId, MissionObjectiveStatus> {
  return MISSION_OBJECTIVES.reduce((statuses, objective) => {
    statuses[objective.id] = state.completedObjectiveIds.includes(objective.id)
      ? 'completed'
      : objective.id === state.currentObjectiveId
        ? 'active'
        : 'locked';
    return statuses;
  }, {} as Record<MissionObjectiveId, MissionObjectiveStatus>);
}

export function canCompleteMissionInteraction(state: MissionObjectiveState, interactionId: string): boolean {
  const objective = getMissionObjective(state.currentObjectiveId);
  return objective.requiredInteractionId === interactionId;
}

export function advanceMissionByZone(state: MissionObjectiveState, zoneId: ZoneId | null): MissionProgressResult {
  if (!zoneId || state.phaseCompleted) {
    return unchanged(state);
  }

  const objective = getMissionObjective(state.currentObjectiveId);
  if (objective.targetZoneId !== zoneId || objective.requiredInteractionId) {
    return unchanged(state);
  }

  return completeMissionObjective(state, objective);
}

export function advanceMissionByInteraction(
  state: MissionObjectiveState,
  interactionId: string
): MissionProgressResult {
  if (state.phaseCompleted || !canCompleteMissionInteraction(state, interactionId)) {
    return unchanged(state);
  }

  return completeMissionObjective(state, getMissionObjective(state.currentObjectiveId));
}

export function completeMissionObjective(
  state: MissionObjectiveState,
  objective: MissionObjectiveDefinition
): MissionProgressResult {
  if (state.completedObjectiveIds.includes(objective.id)) {
    return unchanged(state);
  }

  const completedObjectiveIds = [...state.completedObjectiveIds, objective.id];
  const collectedClues = objective.clueId && !state.collectedClues.includes(objective.clueId)
    ? [...state.collectedClues, objective.clueId]
    : state.collectedClues;
  const phaseCompleted = Boolean(objective.phaseComplete);

  const nextState: MissionObjectiveState = {
    ...state,
    currentObjectiveId: objective.nextObjectiveId ?? state.currentObjectiveId,
    activeCheckpointId: Math.max(state.activeCheckpointId, objective.checkpointOnComplete),
    completedObjectiveIds,
    collectedClues,
    phaseCompleted,
  };

  return {
    state: nextState,
    completedObjectiveId: objective.id,
    checkpointActivated: nextState.activeCheckpointId,
    message: objective.completionMessage,
    phaseCompleted,
  };
}

function unchanged(state: MissionObjectiveState): MissionProgressResult {
  return {
    state,
    phaseCompleted: state.phaseCompleted,
  };
}
