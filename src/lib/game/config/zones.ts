export type ZoneId = 'base' | 'rua' | 'mercado' | 'caminho' | 'casa' | 'escola';

export interface ZoneDefinition {
  id: ZoneId;
  name: string;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  color: number;
}

export const GAME_ZONES: ZoneDefinition[] = [
  { id: 'base', name: 'Base Policial', minX: 2, maxX: 8, minY: 2, maxY: 8, color: 0x3b82f6 },
  { id: 'rua', name: 'Rua Externa', minX: 8, maxX: 16, minY: 3, maxY: 10, color: 0x64748b },
  { id: 'mercado', name: 'Mercado Abandonado', minX: 16, maxX: 24, minY: 3, maxY: 12, color: 0xf59e0b },
  { id: 'caminho', name: 'Caminho para Residência', minX: 12, maxX: 22, minY: 12, maxY: 22, color: 0x78350f },
  { id: 'casa', name: 'Casa de Rafael', minX: 22, maxX: 30, minY: 14, maxY: 24, color: 0x10b981 },
  { id: 'escola', name: 'Escola Municipal (Portão)', minX: 24, maxX: 30, minY: 24, maxY: 30, color: 0xef4444 },
];

export function getZoneById(zoneId: ZoneId): ZoneDefinition {
  const zone = GAME_ZONES.find((candidate) => candidate.id === zoneId);
  if (!zone) {
    throw new Error(`Zona desconhecida: ${zoneId}`);
  }
  return zone;
}

export function checkZone(posX: number, posY: number): ZoneId | null {
  const zone = GAME_ZONES.find((candidate) => (
    posX >= candidate.minX &&
    posX <= candidate.maxX &&
    posY >= candidate.minY &&
    posY <= candidate.maxY
  ));

  return zone?.id ?? null;
}
