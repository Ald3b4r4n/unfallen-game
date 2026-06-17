import {
  createNarrativeState,
  activateCheckpoint,
  collectClue,
  getRespawnPosition,
  checkZone,
  progressNarrativeByInteraction,
  progressNarrativeByZone,
} from '@/lib/game/systems/narrative-flow';

describe('Narrative Flow (lógica pura)', () => {
  test('Inicializa estado narrativo corretamente', () => {
    const state = createNarrativeState();
    expect(state.currentObjectiveId).toBe('leave_police_base');
    expect(state.activeCheckpointId).toBe(1);
    expect(state.completedObjectiveIds).toEqual([]);
    expect(state.collectedClues).toEqual([]);
  });

  test('Avança objetivo na ordem sequencial', () => {
    let state = createNarrativeState();
    state = progressNarrativeByZone(state, 'rua').state;
    expect(state.currentObjectiveId).toBe('investigate_market');
    expect(state.completedObjectiveIds).toContain('leave_police_base');

    state = progressNarrativeByInteraction(state, 'note-backpack').state;
    expect(state.currentObjectiveId).toBe('reach_residential_path');
    expect(state.completedObjectiveIds).toContain('investigate_market');
  });

  test('Não altera estado com objetivo inválido ou já completo', () => {
    let state = createNarrativeState();
    const before = { ...state };
    
    // Inválido
    state = progressNarrativeByInteraction(state, 'objetivo_inexistente').state;
    expect(state).toEqual(before);

    // Repetido
    state = progressNarrativeByZone(state, 'rua').state;
    const firstComplete = { ...state };
    state = progressNarrativeByZone(state, 'rua').state;
    expect(state).toEqual(firstComplete);
  });

  test('Ativa checkpoint e impede regressão de ID', () => {
    let state = createNarrativeState();
    expect(state.activeCheckpointId).toBe(1);

    // Ativa checkpoint 2
    state = activateCheckpoint(state, 2);
    expect(state.activeCheckpointId).toBe(2);

    // Tenta reativar o checkpoint 1 (não deve permitir regressão)
    state = activateCheckpoint(state, 1);
    expect(state.activeCheckpointId).toBe(2);

    // Ativa checkpoint 3
    state = activateCheckpoint(state, 3);
    expect(state.activeCheckpointId).toBe(3);

    // Tenta ativar checkpoint inválido
    state = activateCheckpoint(state, 99);
    expect(state.activeCheckpointId).toBe(3);
  });

  test('Adiciona pistas coletadas', () => {
    let state = createNarrativeState();
    state = collectClue(state, 'pista-1');
    expect(state.collectedClues).toContain('pista-1');

    // Não duplica pistas
    state = collectClue(state, 'pista-1');
    expect(state.collectedClues.length).toBe(1);
  });

  test('Calcula posição correta para respawn baseada no checkpoint', () => {
    let state = createNarrativeState();
    
    // Checkpoint 1
    let pos = getRespawnPosition(state);
    expect(pos).toEqual({ posX: 5, posY: 6 });

    // Checkpoint 2
    state = activateCheckpoint(state, 2);
    pos = getRespawnPosition(state);
    expect(pos).toEqual({ posX: 9, posY: 6 });

    // Checkpoint 3
    state = activateCheckpoint(state, 3);
    pos = getRespawnPosition(state);
    expect(pos).toEqual({ posX: 20, posY: 7 });
  });

  test('Mapeia coordenadas de zonas isométricas corretamente', () => {
    // Base: (2,2) a (8,8)
    expect(checkZone(6, 6)).toBe('base');
    expect(checkZone(3, 3)).toBe('base');
    expect(checkZone(8, 8)).toBe('base');

    // Rua: (8,3) a (16,10)
    expect(checkZone(10, 6)).toBe('rua');
    expect(checkZone(9, 3)).toBe('rua');
    expect(checkZone(16, 10)).toBe('rua');

    // Mercado: (16,3) a (24,12)
    expect(checkZone(20, 7)).toBe('mercado');

    // Caminho: (12,12) a (22,22)
    expect(checkZone(17, 17)).toBe('caminho');

    // Casa: (22,14) a (30,24)
    expect(checkZone(25, 18)).toBe('casa');

    // Escola: (24,24) a (30,30)
    expect(checkZone(27, 27)).toBe('escola');

    // Fora das zonas
    expect(checkZone(0, 0)).toBeNull();
    expect(checkZone(31, 31)).toBeNull();
  });
});
