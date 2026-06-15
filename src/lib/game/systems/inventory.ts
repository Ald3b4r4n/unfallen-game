/**
 * Sistema de Inventário puro — sem dependência de Phaser.
 * Limite rígido de 12 slots conforme especificação MVP.
 */

export interface ItemSlot {
  itemId: string;
  name: string;
  type: 'ammo' | 'battery' | 'healing' | 'key' | 'note';
  quantity: number;
}

export const MAX_SLOTS = 12;

export interface InventoryData {
  items: ItemSlot[];
  maxSlots: number;
}

export function createInventory(): InventoryData {
  return {
    items: [],
    maxSlots: MAX_SLOTS,
  };
}

/**
 * Adiciona um item ao inventário.
 * Se o item já existe (mesmo itemId), incrementa a quantidade.
 * Se não existe e há espaço, cria novo slot.
 * Retorna { success, inventory }.
 */
export function addItem(
  inventory: InventoryData,
  item: ItemSlot
): { success: boolean; inventory: InventoryData } {
  // Tentar empilhar em slot existente
  const existingIndex = inventory.items.findIndex(s => s.itemId === item.itemId);
  if (existingIndex !== -1) {
    const updatedItems = [...inventory.items];
    updatedItems[existingIndex] = {
      ...updatedItems[existingIndex],
      quantity: updatedItems[existingIndex].quantity + item.quantity,
    };
    return { success: true, inventory: { ...inventory, items: updatedItems } };
  }

  // Verificar se há espaço para novo slot
  if (inventory.items.length >= inventory.maxSlots) {
    return { success: false, inventory };
  }

  return {
    success: true,
    inventory: { ...inventory, items: [...inventory.items, { ...item }] },
  };
}

/**
 * Remove quantidade de um item do inventário.
 * Se a quantidade chegar a 0, remove o slot.
 */
export function removeItem(
  inventory: InventoryData,
  itemId: string,
  qty: number
): { success: boolean; inventory: InventoryData } {
  const existingIndex = inventory.items.findIndex(s => s.itemId === itemId);
  if (existingIndex === -1) {
    return { success: false, inventory };
  }

  const slot = inventory.items[existingIndex];
  const newQty = slot.quantity - qty;

  const updatedItems = [...inventory.items];
  if (newQty <= 0) {
    updatedItems.splice(existingIndex, 1);
  } else {
    updatedItems[existingIndex] = { ...slot, quantity: newQty };
  }

  return { success: true, inventory: { ...inventory, items: updatedItems } };
}

export function isFull(inventory: InventoryData): boolean {
  return inventory.items.length >= inventory.maxSlots;
}

export function getItemCount(inventory: InventoryData): number {
  return inventory.items.length;
}
