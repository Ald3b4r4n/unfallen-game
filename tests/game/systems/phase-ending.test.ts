import {
  getPhaseOneEndingSteps,
  getPhaseOneFinalState,
  shouldStartPhaseOneEndingSequence,
} from '@/lib/game/systems/phase-ending';
import {
  advanceMissionByInteraction,
  advanceMissionByZone,
  createMissionObjectiveState,
} from '@/lib/game/systems/mission-objectives';

function completePhaseOne() {
  let state = createMissionObjectiveState();
  state = advanceMissionByZone(state, 'rua').state;
  state = advanceMissionByInteraction(state, 'note-backpack').state;
  state = advanceMissionByZone(state, 'caminho').state;
  state = advanceMissionByInteraction(state, 'note-diary').state;

  return advanceMissionByZone(state, 'escola');
}

describe('Phase Ending', () => {
  test('retorna narrativa final curta da fase 1', () => {
    const steps = getPhaseOneEndingSteps();

    expect(steps).toHaveLength(4);
    expect(steps[0]).toMatchObject({
      title: 'FASE CONCLUÍDA',
      text: 'O caminho até a Escola Municipal está aberto.',
    });
    expect(steps.map((step) => step.text).join('\n')).toContain('Luísa passou por ali.');
    expect(steps.map((step) => step.text).join('\n')).toContain('A busca continua.');
  });

  test('retorna estado final sem iniciar nova fase', () => {
    const finalState = getPhaseOneFinalState();

    expect(finalState.title).toBe('FIM DA FASE 1 - PLANTÃO FINAL');
    expect(finalState.subtitle).toBe('Progresso salvo.');
    expect(finalState.footer).toContain('A próxima fase ainda não foi iniciada.');
  });

  test('dispara encerramento apenas na conclusão nova do portao da escola', () => {
    const result = completePhaseOne();

    expect(result.phaseCompleted).toBe(true);
    expect(result.state.phaseCompleted).toBe(true);
    expect(result.completedObjectiveId).toBe('reach_school_gate');
    expect(shouldStartPhaseOneEndingSequence(result)).toBe(true);
  });

  test('nao dispara encerramento quando nao houve progresso real', () => {
    const state = createMissionObjectiveState();
    const result = advanceMissionByZone(state, 'mercado');

    expect(shouldStartPhaseOneEndingSequence(result)).toBe(false);
  });

  test('nao dispara encerramento duplicado para estado ja concluido apos reload', () => {
    const completed = completePhaseOne().state;
    const result = advanceMissionByZone(completed, 'escola');

    expect(result.phaseCompleted).toBe(true);
    expect(result.completedObjectiveId).toBeUndefined();
    expect(shouldStartPhaseOneEndingSequence(result)).toBe(false);
  });
});
