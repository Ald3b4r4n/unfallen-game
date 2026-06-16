import { CHECKPOINTS, getSpawnPoint, INITIAL_SPAWN } from '@/lib/game/systems/spawn-points';

describe('Spawn Points 64x64', () => {
  test('define spawn inicial e checkpoints principais', () => {
    expect(INITIAL_SPAWN).toEqual({ id: 1, label: 'Base Policial', posX: 6, posY: 6 });
    expect(CHECKPOINTS[2]).toEqual({ id: 2, label: 'Saída da Base', posX: 14, posY: 8 });
    expect(CHECKPOINTS[3]).toEqual({ id: 3, label: 'Pátio da Casa de Rafael', posX: 48, posY: 41 });
  });

  test('usa spawn inicial como fallback para checkpoint inválido', () => {
    expect(getSpawnPoint(99)).toBe(INITIAL_SPAWN);
  });
});
