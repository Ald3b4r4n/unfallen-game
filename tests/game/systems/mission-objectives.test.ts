import {
  advanceMissionByInteraction,
  advanceMissionByZone,
  canCompleteMissionInteraction,
  createMissionObjectiveState,
  getMissionObjectiveText,
  getMissionStatuses,
} from '@/lib/game/systems/mission-objectives';

describe('Mission Objectives (Plantao Final)', () => {
  test('inicia com o objetivo de sair da Base Policial ativo', () => {
    const state = createMissionObjectiveState();

    expect(state.currentObjectiveId).toBe('leave_police_base');
    expect(state.activeCheckpointId).toBe(1);
    expect(state.phaseCompleted).toBe(false);
    expect(getMissionObjectiveText(state)).toBe('Saia da Base Policial e alcance a Rua Externa.');
    expect(getMissionStatuses(state).leave_police_base).toBe('active');
  });

  test('avanca ao entrar na zona correta sem pular etapas', () => {
    let state = createMissionObjectiveState();

    expect(advanceMissionByZone(state, 'mercado').state.currentObjectiveId).toBe('leave_police_base');

    const result = advanceMissionByZone(state, 'rua');
    state = result.state;

    expect(result.completedObjectiveId).toBe('leave_police_base');
    expect(state.currentObjectiveId).toBe('investigate_market');
    expect(state.activeCheckpointId).toBe(2);
  });

  test('objetivo com interacao obrigatoria nao conclui apenas por entrada na zona', () => {
    let state = createMissionObjectiveState();
    state = advanceMissionByZone(state, 'rua').state;

    const result = advanceMissionByZone(state, 'mercado');

    expect(result.completedObjectiveId).toBeUndefined();
    expect(result.state.currentObjectiveId).toBe('investigate_market');
    expect(result.state.activeCheckpointId).toBe(2);
  });

  test('conclui mercado apenas com a pista correta e atualiza checkpoint', () => {
    let state = createMissionObjectiveState();
    state = advanceMissionByZone(state, 'rua').state;

    expect(canCompleteMissionInteraction(state, 'note-diary')).toBe(false);
    expect(canCompleteMissionInteraction(state, 'note-backpack')).toBe(true);

    const result = advanceMissionByInteraction(state, 'note-backpack');

    expect(result.completedObjectiveId).toBe('investigate_market');
    expect(result.state.currentObjectiveId).toBe('reach_residential_path');
    expect(result.state.activeCheckpointId).toBe(3);
    expect(result.state.collectedClues).toContain('backpack');
  });

  test('fluxo completo conclui fase no Portao da Escola', () => {
    let state = createMissionObjectiveState();

    state = advanceMissionByZone(state, 'rua').state;
    state = advanceMissionByInteraction(state, 'note-backpack').state;
    state = advanceMissionByZone(state, 'caminho').state;
    state = advanceMissionByInteraction(state, 'note-diary').state;
    const result = advanceMissionByZone(state, 'escola');

    expect(result.completedObjectiveId).toBe('reach_school_gate');
    expect(result.phaseCompleted).toBe(true);
    expect(result.state.phaseCompleted).toBe(true);
    expect(result.state.activeCheckpointId).toBe(6);
  });

  test('fallback seguro ignora zona nula e interacao invalida', () => {
    const state = createMissionObjectiveState();

    expect(advanceMissionByZone(state, null).state).toBe(state);
    expect(advanceMissionByInteraction(state, 'unknown').state).toBe(state);
  });
});
