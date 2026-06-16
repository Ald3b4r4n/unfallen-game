import {
  createNarrativeState,
  completeObjective,
  activateCheckpoint,
  collectClue,
  getRespawnPosition,
  checkZone,
} from '@/lib/game/systems/narrative-flow';

describe('Narrative Flow (lógica pura)', () => {
  test('Inicializa estado narrativo corretamente', () => {
    const state = createNarrativeState();
    expect(state.currentObjectiveId).toBe('saia_base');
    expect(state.activeCheckpointId).toBe(1);
    expect(state.completedObjectives).toEqual([]);
    expect(state.collectedClues).toEqual([]);
  });

  test('Avança objetivo na ordem sequencial', () => {
    let state = createNarrativeState();
    state = completeObjective(state, 'saia_base');
    expect(state.currentObjectiveId).toBe('ir_mercado');
    expect(state.completedObjectives).toContain('saia_base');

    state = completeObjective(state, 'ir_mercado');
    expect(state.currentObjectiveId).toBe('pista_mercado');
    expect(state.completedObjectives).toContain('ir_mercado');
  });

  test('Não altera estado com objetivo inválido ou já completo', () => {
    let state = createNarrativeState();
    const before = { ...state };
    
    // Inválido
    state = completeObjective(state, 'objetivo_inexistente');
    expect(state).toEqual(before);

    // Repetido
    state = completeObjective(state, 'saia_base');
    const firstComplete = { ...state };
    state = completeObjective(state, 'saia_base');
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
    expect(pos).toEqual({ posX: 4, posY: 4 });

    // Checkpoint 2
    state = activateCheckpoint(state, 2);
    pos = getRespawnPosition(state);
    expect(pos).toEqual({ posX: 8, posY: 5 });

    // Checkpoint 3
    state = activateCheckpoint(state, 3);
    pos = getRespawnPosition(state);
    expect(pos).toEqual({ posX: 22, posY: 18 });
  });

  test('Mapeia coordenadas de zonas isométricas corretamente', () => {
    // Base: (2,2) a (6,6)
    expect(checkZone(4, 4)).toBe('base');
    expect(checkZone(2, 2)).toBe('base');
    expect(checkZone(6, 6)).toBe('base');

    // Rua: (7,2) a (15,10)
    expect(checkZone(8, 5)).toBe('rua');
    expect(checkZone(7, 2)).toBe('rua');
    expect(checkZone(15, 10)).toBe('rua');

    // Mercado: (16,2) a (22,8)
    expect(checkZone(18, 5)).toBe('mercado');

    // Casa: (21,15) a (28,24)
    expect(checkZone(22, 18)).toBe('casa');

    // Escola: (29,25) a (31,29)
    expect(checkZone(30, 27)).toBe('escola');

    // Fora das zonas
    expect(checkZone(0, 0)).toBeNull();
    expect(checkZone(31, 0)).toBeNull();
  });
});
