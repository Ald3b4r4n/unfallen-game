import { SortableEntity } from './iso-types';

/**
 * Calcula a profundidade lógica de renderização para uma entidade.
 * Entidades com maior soma de X + Y estão localizadas mais à frente (mais próximas da câmera/base da tela),
 * portanto devem ter uma profundidade maior. Z (elevação) afeta de forma secundária para garantir 
 * a ordem de renderização em sobreposição vertical.
 */
export function calculateDepth(entity: SortableEntity): number {
  // O peso do Z lógico na profundidade visual é pequeno para evitar que
  // um objeto elevado apareça indevidamente na frente de algo que está mais à frente em X e Y.
  return entity.x + entity.y + entity.z * 0.001;
}

/**
 * Ordena uma lista de entidades por profundidade do fundo para frente.
 * Utiliza o ID como critério de desempate determinístico caso a profundidade calculada seja idêntica.
 */
export function sortEntities<T extends SortableEntity>(entities: T[]): T[] {
  return [...entities].sort((a, b) => {
    const depthA = calculateDepth(a);
    const depthB = calculateDepth(b);
    
    // Usando uma margem de tolerância decimal pequena para considerar empates
    if (Math.abs(depthA - depthB) < 0.000001) {
      return a.id.localeCompare(b.id);
    }
    
    return depthA - depthB;
  });
}
