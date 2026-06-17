import {
  buildMissionFeedbackEvents,
  createCheckpointSavedFeedback,
  createObjectiveUpdatedFeedback,
  createPhaseCompleteFeedback,
  getClueFeedbackForObjective,
} from '@/lib/game/systems/mission-feedback';
import {
  advanceMissionByInteraction,
  advanceMissionByZone,
  createMissionObjectiveState,
} from '@/lib/game/systems/mission-objectives';

describe('Mission Feedback', () => {
  test('cria feedback de objetivo atualizado', () => {
    expect(createObjectiveUpdatedFeedback('Investigue o Mercado Abandonado.')).toEqual({
      title: 'OBJETIVO ATUALIZADO',
      message: 'Investigue o Mercado Abandonado.',
      tone: 'objective',
      dedupeKey: 'objective:Investigue o Mercado Abandonado.',
    });
  });

  test('cria feedback de pista encontrada para mochila e diario', () => {
    expect(getClueFeedbackForObjective('investigate_market')).toMatchObject({
      title: 'PISTA ENCONTRADA',
      message: 'Mochila com sinais de passagem recente.',
      tone: 'clue',
    });
    expect(getClueFeedbackForObjective('search_rafael_house')).toMatchObject({
      title: 'PISTA ENCONTRADA',
      message: 'Diário encontrado na casa de Rafael.',
      tone: 'clue',
    });
  });

  test('cria feedback de checkpoint salvo', () => {
    expect(createCheckpointSavedFeedback(3)).toEqual({
      title: 'CHECKPOINT SALVO',
      message: 'Progresso seguro.',
      tone: 'checkpoint',
      dedupeKey: 'checkpoint:3',
    });
  });

  test('cria feedback de fase concluida', () => {
    expect(createPhaseCompleteFeedback()).toEqual({
      title: 'FASE CONCLUÍDA',
      message: 'O caminho até a Escola Municipal está aberto.\nProgresso salvo.',
      tone: 'phase',
      dedupeKey: 'phase:complete',
    });
  });

  test('gera objetivo e checkpoint ao avancar por zona', () => {
    const result = advanceMissionByZone(createMissionObjectiveState(), 'rua');
    const feedback = buildMissionFeedbackEvents(result, 'Investigue o Mercado Abandonado.');

    expect(feedback.map((event) => event.title)).toEqual([
      'CHECKPOINT SALVO',
      'OBJETIVO ATUALIZADO',
    ]);
  });

  test('gera pista, checkpoint e objetivo ao coletar mochila', () => {
    const state = advanceMissionByZone(createMissionObjectiveState(), 'rua').state;
    const result = advanceMissionByInteraction(state, 'note-backpack');
    const feedback = buildMissionFeedbackEvents(result, 'Siga pelo caminho residencial até a casa de Rafael.');

    expect(feedback.map((event) => event.title)).toEqual([
      'PISTA ENCONTRADA',
      'CHECKPOINT SALVO',
      'OBJETIVO ATUALIZADO',
    ]);
    expect(feedback[0].dedupeKey).toBe('clue:note-backpack');
  });

  test('gera checkpoint e fase concluida ao finalizar a fase', () => {
    let state = createMissionObjectiveState();
    state = advanceMissionByZone(state, 'rua').state;
    state = advanceMissionByInteraction(state, 'note-backpack').state;
    state = advanceMissionByZone(state, 'caminho').state;
    state = advanceMissionByInteraction(state, 'note-diary').state;

    const result = advanceMissionByZone(state, 'escola');
    const feedback = buildMissionFeedbackEvents(result, 'Siga até o Portão da Escola Municipal.');

    expect(feedback.map((event) => event.title)).toEqual([
      'CHECKPOINT SALVO',
      'FASE CONCLUÍDA',
    ]);
  });

  test('nao gera feedback quando nao houve progresso real', () => {
    const state = createMissionObjectiveState();
    const result = advanceMissionByZone(state, 'mercado');

    expect(buildMissionFeedbackEvents(result, 'Saia da Base Policial e alcance a Rua Externa.')).toEqual([]);
  });
});
