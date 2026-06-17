import type { MissionProgressResult } from './mission-objectives';

export interface PhaseEndingStep {
  title?: string;
  text: string;
  durationMs: number;
}

export interface PhaseEndingState {
  title: string;
  subtitle: string;
  footer: string;
}

export const PHASE_ONE_ENDING_STEPS: PhaseEndingStep[] = [
  {
    title: 'FASE CONCLUÍDA',
    text: 'O caminho até a Escola Municipal está aberto.',
    durationMs: 2200,
  },
  {
    text: 'O portão range com o vento.\n\nA escola está silenciosa demais.',
    durationMs: 3200,
  },
  {
    text: 'Entre marcas de evacuação e rastros recentes, Rafael encontra apenas uma certeza:\n\nLuísa passou por ali.',
    durationMs: 4200,
  },
  {
    text: 'A busca continua.',
    durationMs: 2400,
  },
];

export const PHASE_ONE_FINAL_STATE: PhaseEndingState = {
  title: 'FIM DA FASE 1 - PLANTÃO FINAL',
  subtitle: 'Progresso salvo.',
  footer: 'A Escola Municipal permanece fechada. A próxima fase ainda não foi iniciada.',
};

export function shouldStartPhaseOneEndingSequence(result: MissionProgressResult): boolean {
  return result.phaseCompleted && result.completedObjectiveId === 'reach_school_gate';
}

export function getPhaseOneEndingSteps(): PhaseEndingStep[] {
  return PHASE_ONE_ENDING_STEPS.map((step) => ({ ...step }));
}

export function getPhaseOneFinalState(): PhaseEndingState {
  return { ...PHASE_ONE_FINAL_STATE };
}
