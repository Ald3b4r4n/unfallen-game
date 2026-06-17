export interface SpawnPoint {
  id: number;
  label: string;
  posX: number;
  posY: number;
}

export const CHECKPOINTS: Record<number, SpawnPoint> = {
  1: { id: 1, label: 'Base Policial', posX: 7, posY: 8 },
  2: { id: 2, label: 'Saída da Base', posX: 13, posY: 7 },
  3: { id: 3, label: 'Mercado Abandonado', posX: 32, posY: 10 },
  4: { id: 4, label: 'Caminho para Residência', posX: 28, posY: 28 },
  5: { id: 5, label: 'Pátio da Casa de Rafael', posX: 46, posY: 39 },
  6: { id: 6, label: 'Portão da Escola Municipal', posX: 58, posY: 56 },
};

export const INITIAL_SPAWN = CHECKPOINTS[1];

export function getSpawnPoint(checkpointId: number): SpawnPoint {
  return CHECKPOINTS[checkpointId] ?? INITIAL_SPAWN;
}
