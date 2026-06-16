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
  { id: 'base', name: 'Base Policial', minX: 3, maxX: 10, minY: 3, maxY: 10, color: 0x3b82f6 },
  { id: 'rua', name: 'Rua Externa', minX: 11, maxX: 24, minY: 4, maxY: 15, color: 0x64748b },
  { id: 'mercado', name: 'Mercado Abandonado', minX: 26, maxX: 38, minY: 5, maxY: 17, color: 0xf59e0b },
  { id: 'caminho', name: 'Caminho para Residência', minX: 22, maxX: 43, minY: 22, maxY: 38, color: 0x78350f },
  { id: 'casa', name: 'Casa de Rafael', minX: 43, maxX: 55, minY: 34, maxY: 49, color: 0x10b981 },
  { id: 'escola', name: 'Escola Municipal (Portão)', minX: 55, maxX: 62, minY: 52, maxY: 61, color: 0xef4444 },
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
