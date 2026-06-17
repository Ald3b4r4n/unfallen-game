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
    expect(pos).toEqual({ posX: 7, posY: 8 });

    // Checkpoint 2
    state = activateCheckpoint(state, 2);
    pos = getRespawnPosition(state);
    expect(pos).toEqual({ posX: 13, posY: 7 });

    // Checkpoint 3
    state = activateCheckpoint(state, 3);
    pos = getRespawnPosition(state);
    expect(pos).toEqual({ posX: 32, posY: 10 });
  });

  test('Mapeia coordenadas de zonas isométricas corretamente', () => {
    // Base: (3,3) a (10,10)
    expect(checkZone(6, 6)).toBe('base');
    expect(checkZone(3, 3)).toBe('base');
    expect(checkZone(10, 10)).toBe('base');

    // Rua: (11,4) a (24,15)
    expect(checkZone(14, 8)).toBe('rua');
    expect(checkZone(11, 4)).toBe('rua');
    expect(checkZone(24, 15)).toBe('rua');

    // Mercado: (26,5) a (38,17)
    expect(checkZone(32, 10)).toBe('mercado');

    // Caminho: (22,22) a (43,38)
    expect(checkZone(32, 30)).toBe('caminho');

    // Casa: (43,34) a (55,49)
    expect(checkZone(48, 41)).toBe('casa');

    // Escola: (55,52) a (62,61)
    expect(checkZone(58, 56)).toBe('escola');

    // Fora das zonas
    expect(checkZone(0, 0)).toBeNull();
    expect(checkZone(63, 0)).toBeNull();
  });
});
