import { CHECKPOINTS, getSpawnPoint, INITIAL_SPAWN } from '@/lib/game/systems/spawn-points';

describe('Spawn Points 64x64', () => {
  test('define spawn inicial e checkpoints principais', () => {
    expect(INITIAL_SPAWN).toEqual({ id: 1, label: 'Base Policial', posX: 6, posY: 6 });
    expect(CHECKPOINTS[2]).toEqual({ id: 2, label: 'Saída da Base', posX: 13, posY: 7 });
    expect(CHECKPOINTS[3]).toEqual({ id: 3, label: 'Mercado Abandonado', posX: 32, posY: 10 });
    expect(CHECKPOINTS[4]).toEqual({ id: 4, label: 'Caminho para Residência', posX: 28, posY: 28 });
    expect(CHECKPOINTS[5]).toEqual({ id: 5, label: 'Pátio da Casa de Rafael', posX: 46, posY: 39 });
    expect(CHECKPOINTS[6]).toEqual({ id: 6, label: 'Portão da Escola Municipal', posX: 58, posY: 56 });
  });

  test('usa spawn inicial como fallback para checkpoint inválido', () => {
    expect(getSpawnPoint(99)).toBe(INITIAL_SPAWN);
  });
});
