import {
  missionSaveToObjectiveState,
  normalizeMissionSaveState,
  objectiveStateToMissionSave,
} from '@/lib/game/systems/mission-save';
import {
  advanceMissionByInteraction,
  advanceMissionByZone,
  createMissionObjectiveState,
} from '@/lib/game/systems/mission-objectives';
import { getRespawnPosition } from '@/lib/game/systems/narrative-flow';

describe('Mission Save State', () => {
  test('serializa missão inicial com posição e checkpoint', () => {
    const state = createMissionObjectiveState();
    const save = objectiveStateToMissionSave(state, {
      collectedInteractionIds: [],
      playerPosition: { x: 6, y: 6 },
      lastKnownZoneId: 'base',
      updatedAt: '2026-06-16T10:00:00.000Z',
    });

    expect(save.currentObjectiveId).toBe('leave_police_base');
    expect(save.activeCheckpointId).toBe(1);
    expect(save.playerPosition).toEqual({ x: 6, y: 6 });
    expect(save.lastKnownZoneId).toBe('base');
  });

  test('serializa save após objetivo concluído na Rua Externa', () => {
    const state = advanceMissionByZone(createMissionObjectiveState(), 'rua').state;
    const save = objectiveStateToMissionSave(state, {
      playerPosition: { x: 14, y: 8 },
      lastKnownZoneId: 'rua',
    });

    expect(save.currentObjectiveId).toBe('investigate_market');
    expect(save.completedObjectiveIds).toEqual(['leave_police_base']);
    expect(save.activeCheckpointId).toBe(2);
  });

  test('serializa interação note-backpack e restaura objetivo seguinte', () => {
    let state = advanceMissionByZone(createMissionObjectiveState(), 'rua').state;
    state = advanceMissionByInteraction(state, 'note-backpack').state;

    const save = objectiveStateToMissionSave(state, {
      collectedInteractionIds: ['note-backpack'],
      playerPosition: { x: 20, y: 7 },
      lastKnownZoneId: 'mercado',
    });
    const restored = missionSaveToObjectiveState(save);

    expect(save.collectedInteractionIds).toContain('note-backpack');
    expect(restored.currentObjectiveId).toBe('reach_residential_path');
    expect(restored.collectedClues).toContain('backpack');
    expect(restored.activeCheckpointId).toBe(3);
  });

  test('serializa interação note-diary e restaura checkpoint da casa', () => {
    let state = createMissionObjectiveState();
    state = advanceMissionByZone(state, 'rua').state;
    state = advanceMissionByInteraction(state, 'note-backpack').state;
    state = advanceMissionByZone(state, 'caminho').state;
    state = advanceMissionByInteraction(state, 'note-diary').state;

    const save = objectiveStateToMissionSave(state, {
      collectedInteractionIds: ['note-backpack', 'note-diary'],
      playerPosition: { x: 25, y: 18 },
      lastKnownZoneId: 'casa',
    });
    const restored = missionSaveToObjectiveState(save);

    expect(save.collectedInteractionIds).toEqual(['note-backpack', 'note-diary']);
    expect(restored.currentObjectiveId).toBe('reach_school_gate');
    expect(restored.collectedClues).toEqual(['backpack', 'diary']);
    expect(getRespawnPosition(restored)).toEqual({ posX: 25, posY: 18 });
  });

  test('restaura respawn usando checkpoint salvo', () => {
    const restored = missionSaveToObjectiveState({
      currentObjectiveId: 'reach_residential_path',
      completedObjectiveIds: ['leave_police_base', 'investigate_market'],
      collectedInteractionIds: ['note-backpack'],
      activeCheckpointId: 3,
      playerPosition: { x: 21, y: 8 },
      phaseComplete: false,
      updatedAt: '2026-06-16T10:00:00.000Z',
    });

    expect(getRespawnPosition(restored)).toEqual({ posX: 20, posY: 7 });
  });

  test('normaliza save corrompido sem pular etapas', () => {
    const normalized = normalizeMissionSaveState({
      currentObjectiveId: 'reach_school_gate',
      completedObjectiveIds: ['leave_police_base', 'reach_school_gate'],
      collectedInteractionIds: ['note-diary'],
      activeCheckpointId: 6,
      playerPosition: { x: 27, y: 27 },
      phaseComplete: true,
      updatedAt: '2026-06-16T10:00:00.000Z',
    });

    expect(normalized.currentObjectiveId).toBe('investigate_market');
    expect(normalized.completedObjectiveIds).toEqual(['leave_police_base']);
    expect(normalized.collectedInteractionIds).toEqual([]);
    expect(normalized.activeCheckpointId).toBe(2);
    expect(normalized.phaseComplete).toBe(false);
  });

  test('persiste phaseComplete somente com fluxo completo', () => {
    let state = createMissionObjectiveState();
    state = advanceMissionByZone(state, 'rua').state;
    state = advanceMissionByInteraction(state, 'note-backpack').state;
    state = advanceMissionByZone(state, 'caminho').state;
    state = advanceMissionByInteraction(state, 'note-diary').state;
    state = advanceMissionByZone(state, 'escola').state;

    const save = objectiveStateToMissionSave(state, {
      collectedInteractionIds: ['note-backpack', 'note-diary'],
      playerPosition: { x: 27, y: 27 },
      lastKnownZoneId: 'escola',
    });
    const restored = missionSaveToObjectiveState(save);

    expect(save.phaseComplete).toBe(true);
    expect(restored.phaseCompleted).toBe(true);
    expect(restored.activeCheckpointId).toBe(6);
  });
});
