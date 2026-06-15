/**
 * Sistema de Interação/Coleta puro — sem dependência de Phaser.
 */

import { InventoryData, addItem, ItemSlot } from './inventory';

export interface InteractableData {
  id: string;
  posX: number;
  posY: number;
  interactionRadius: number;
  item: ItemSlot;
  collected: boolean;
}

export const DEFAULT_INTERACTION_RADIUS = 1.5;

/**
 * Verifica se o player está dentro do raio de interação de um objeto.
 */
export function isInInteractionRange(
  playerX: number, playerY: number,
  obj: InteractableData
): boolean {
  if (obj.collected) return false;
  const dx = playerX - obj.posX;
  const dy = playerY - obj.posY;
  return Math.sqrt(dx * dx + dy * dy) <= obj.interactionRadius;
}

/**
 * Encontra o objeto interativo mais próximo dentro do raio.
 */
export function findNearestInteractable(
  playerX: number, playerY: number,
  objects: InteractableData[]
): InteractableData | null {
  let nearest: InteractableData | null = null;
  let nearestDist = Infinity;

  for (const obj of objects) {
    if (obj.collected) continue;
    const dx = playerX - obj.posX;
    const dy = playerY - obj.posY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist <= obj.interactionRadius && dist < nearestDist) {
      nearest = obj;
      nearestDist = dist;
    }
  }

  return nearest;
}

/**
 * Tenta coletar o item mais próximo.
 * Retorna { success, inventory, collectedId }.
 */
export function tryCollect(
  playerX: number, playerY: number,
  objects: InteractableData[],
  inventory: InventoryData
): { success: boolean; inventory: InventoryData; collectedId: string | null } {
  const nearest = findNearestInteractable(playerX, playerY, objects);
  if (!nearest) {
    return { success: false, inventory, collectedId: null };
  }

  const result = addItem(inventory, nearest.item);
  if (!result.success) {
    return { success: false, inventory, collectedId: null };
  }

  return {
    success: true,
    inventory: result.inventory,
    collectedId: nearest.id,
  };
}
