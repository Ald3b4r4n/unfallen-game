import type { MissionObjectiveId, MissionProgressResult } from './mission-objectives';

export type MissionFeedbackTone = 'objective' | 'clue' | 'checkpoint' | 'phase';

export interface MissionFeedbackEvent {
  title: string;
  message: string;
  tone: MissionFeedbackTone;
  dedupeKey: string;
}

const CLUE_FEEDBACK_BY_OBJECTIVE: Partial<Record<MissionObjectiveId, MissionFeedbackEvent>> = {
  investigate_market: {
    title: 'PISTA ENCONTRADA',
    message: 'Mochila com sinais de passagem recente.',
    tone: 'clue',
    dedupeKey: 'clue:note-backpack',
  },
  search_rafael_house: {
    title: 'PISTA ENCONTRADA',
    message: 'Diário encontrado na casa de Rafael.',
    tone: 'clue',
    dedupeKey: 'clue:note-diary',
  },
};

export function createObjectiveUpdatedFeedback(objectiveText: string): MissionFeedbackEvent {
  return {
    title: 'OBJETIVO ATUALIZADO',
    message: objectiveText,
    tone: 'objective',
    dedupeKey: `objective:${objectiveText}`,
  };
}

export function createCheckpointSavedFeedback(checkpointId: number): MissionFeedbackEvent {
  return {
    title: 'CHECKPOINT SALVO',
    message: 'Progresso seguro.',
    tone: 'checkpoint',
    dedupeKey: `checkpoint:${checkpointId}`,
  };
}

export function createPhaseCompleteFeedback(): MissionFeedbackEvent {
  return {
    title: 'FASE CONCLUÍDA',
    message: 'O caminho até a Escola Municipal está aberto.\nProgresso salvo.',
    tone: 'phase',
    dedupeKey: 'phase:complete',
  };
}

export function getClueFeedbackForObjective(objectiveId: MissionObjectiveId): MissionFeedbackEvent | null {
  return CLUE_FEEDBACK_BY_OBJECTIVE[objectiveId] ?? null;
}

export function buildMissionFeedbackEvents(
  result: MissionProgressResult,
  currentObjectiveText: string
): MissionFeedbackEvent[] {
  if (!result.completedObjectiveId) {
    return [];
  }

  const events: MissionFeedbackEvent[] = [];
  const clueFeedback = getClueFeedbackForObjective(result.completedObjectiveId);

  if (clueFeedback) {
    events.push(clueFeedback);
  }

  if (result.checkpointActivated) {
    events.push(createCheckpointSavedFeedback(result.checkpointActivated));
  }

  events.push(
    result.phaseCompleted
      ? createPhaseCompleteFeedback()
      : createObjectiveUpdatedFeedback(currentObjectiveText)
  );

  return events;
}
