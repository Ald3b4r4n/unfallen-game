import { FootCollider } from './iso-types';


export interface EntityWithFoot {
  id: string;
  x: number;
  y: number;
  collider: FootCollider;
}

export interface BoundingBox2D {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

/**
 * Obtém a caixa delimitadora (bounding box) bidirecional no plano do chão (Z=0) para a entidade.
 */
export function getFootBounds(entity: EntityWithFoot): BoundingBox2D {
  const minX = entity.x + entity.collider.offsetX;
  const minY = entity.y + entity.collider.offsetY;
  
  return {
    minX,
    maxX: minX + entity.collider.width,
    minY,
    maxY: minY + entity.collider.length
  };
}

/**
 * Verifica se duas caixas delimitadoras no plano de solo se sobrepõem.
 */
export function checkFootOverlap(a: BoundingBox2D, b: BoundingBox2D): boolean {
  return (
    a.minX < b.maxX &&
    a.maxX > b.minX &&
    a.minY < b.maxY &&
    a.maxY > b.minY
  );
}

/**
 * Resolve/corrige a colisão afastando a entidade móvel "entity" da entidade estática "staticEntity"
 * com base na menor penetração nos eixos X e Y lógicos.
 * Retorna a nova posição coordenada (x, y) sugerida.
 */
export function resolveFootCollision(
  entity: EntityWithFoot,
  staticEntity: EntityWithFoot
): { x: number; y: number } {
  const a = getFootBounds(entity);
  const b = getFootBounds(staticEntity);
  
  if (!checkFootOverlap(a, b)) {
    return { x: entity.x, y: entity.y };
  }
  
  // Calcular sobreposição em X
  const overlapX1 = a.maxX - b.minX;
  const overlapX2 = b.maxX - a.minX;
  const overlapX = overlapX1 < overlapX2 ? -overlapX1 : overlapX2;
  
  // Calcular sobreposição em Y
  const overlapY1 = a.maxY - b.minY;
  const overlapY2 = b.maxY - a.minY;
  const overlapY = overlapY1 < overlapY2 ? -overlapY1 : overlapY2;
  
  // Afastar no eixo que tiver menor sobreposição para resolver de forma mais suave
  if (Math.abs(overlapX) < Math.abs(overlapY)) {
    return { x: entity.x + overlapX, y: entity.y };
  } else {
    return { x: entity.x, y: entity.y + overlapY };
  }
}
