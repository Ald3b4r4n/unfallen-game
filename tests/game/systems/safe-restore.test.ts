import {
  SAFE_RESTORE_MIN_DISTANCE_FROM_ENEMY,
  isRestorePositionSafe,
  resolveSafeRestorePosition,
} from '@/lib/game/systems/safe-restore';
import { CHECKPOINTS, INITIAL_SPAWN } from '@/lib/game/systems/spawn-points';

const hazards = [
  { id: 'zombie-1', posX: 17, posY: 10 },
  { id: 'zombie-2', posX: 32, posY: 30 },
  { id: 'zombie-3', posX: 49, posY: 42 },
];

describe('Safe Restore', () => {
  test('mantem posição salva quando ela é segura', () => {
    const restored = resolveSafeRestorePosition({
      savedPosition: { posX: 44, posY: 39 },
      activeCheckpointId: 5,
      hazards,
    });

    expect(restored).toEqual({ posX: 44, posY: 39 });
  });

  test('cai para checkpoint quando posição salva está perto demais de infectado', () => {
    const restored = resolveSafeRestorePosition({
      savedPosition: { posX: 49.3, posY: 41.1 },
      activeCheckpointId: 5,
      hazards,
    });

    expect(restored).toEqual({ posX: CHECKPOINTS[5].posX, posY: CHECKPOINTS[5].posY });
  });

  test('checkpoints avançados ficam seguros contra os infectados próximos', () => {
    for (const checkpointId of [2, 4, 5]) {
      expect(isRestorePositionSafe(
        { posX: CHECKPOINTS[checkpointId].posX, posY: CHECKPOINTS[checkpointId].posY },
        hazards
      )).toBe(true);
    }
  });

  test('cai para checkpoint quando posição salva está fora do mapa', () => {
    const restored = resolveSafeRestorePosition({
      savedPosition: { posX: 999, posY: 999 },
      activeCheckpointId: 4,
      hazards,
    });

    expect(restored).toEqual({ posX: CHECKPOINTS[4].posX, posY: CHECKPOINTS[4].posY });
  });

  test('usa Base Policial quando checkpoint ativo é inválido', () => {
    const restored = resolveSafeRestorePosition({
      savedPosition: { posX: 49, posY: 42 },
      activeCheckpointId: 999,
      hazards,
    });

    expect(restored).toEqual({ posX: INITIAL_SPAWN.posX, posY: INITIAL_SPAWN.posY });
  });

  test('expõe distância mínima de restore para teste e tuning', () => {
    expect(SAFE_RESTORE_MIN_DISTANCE_FROM_ENEMY).toBe(4);
  });
});
