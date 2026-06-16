export interface SpawnPoint {
  id: number;
  label: string;
  posX: number;
  posY: number;
}

export const CHECKPOINTS: Record<number, SpawnPoint> = {
  1: { id: 1, label: 'Base Policial', posX: 6, posY: 6 },
  2: { id: 2, label: 'Saída da Base', posX: 14, posY: 8 },
  3: { id: 3, label: 'Pátio da Casa de Rafael', posX: 48, posY: 41 },
};

export const INITIAL_SPAWN = CHECKPOINTS[1];

export function getSpawnPoint(checkpointId: number): SpawnPoint {
  return CHECKPOINTS[checkpointId] ?? INITIAL_SPAWN;
}
