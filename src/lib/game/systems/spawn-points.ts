export interface SpawnPoint {
  id: number;
  label: string;
  posX: number;
  posY: number;
}

export const CHECKPOINTS: Record<number, SpawnPoint> = {
  1: { id: 1, label: 'Base Policial', posX: 5, posY: 6 },
  2: { id: 2, label: 'Saída da Base', posX: 9, posY: 6 },
  3: { id: 3, label: 'Mercado Abandonado', posX: 20, posY: 7 },
  4: { id: 4, label: 'Caminho para Residência', posX: 17, posY: 17 },
  5: { id: 5, label: 'Pátio da Casa de Rafael', posX: 25, posY: 18 },
  6: { id: 6, label: 'Portão da Escola Municipal', posX: 27, posY: 27 },
};

export const INITIAL_SPAWN = CHECKPOINTS[1];

export function getSpawnPoint(checkpointId: number): SpawnPoint {
  return CHECKPOINTS[checkpointId] ?? INITIAL_SPAWN;
}
