import {
  createInventory,
  addItem,
  removeItem,
  isFull,
  getItemCount,
  MAX_SLOTS,
  ItemSlot,
} from '@/lib/game/systems/inventory';

const makeItem = (id: string, type: ItemSlot['type'] = 'ammo', qty = 1): ItemSlot => ({
  itemId: id,
  name: `Item ${id}`,
  type,
  quantity: qty,
});

describe('Inventory (lógica pura)', () => {
  test('Cria inventário vazio', () => {
    const inv = createInventory();
    expect(inv.items).toHaveLength(0);
    expect(inv.maxSlots).toBe(MAX_SLOTS);
  });

  test('Adiciona item em inventário vazio com sucesso', () => {
    const inv = createInventory();
    const result = addItem(inv, makeItem('ammo-1'));
    expect(result.success).toBe(true);
    expect(result.inventory.items).toHaveLength(1);
  });

  test('Adiciona 12 itens distintos até encher', () => {
    let inv = createInventory();
    for (let i = 1; i <= 12; i++) {
      const result = addItem(inv, makeItem(`item-${i}`));
      expect(result.success).toBe(true);
      inv = result.inventory;
    }
    expect(getItemCount(inv)).toBe(12);
    expect(isFull(inv)).toBe(true);
  });

  test('Rejeita o 13º item quando inventário está cheio', () => {
    let inv = createInventory();
    for (let i = 1; i <= 12; i++) {
      const result = addItem(inv, makeItem(`item-${i}`));
      inv = result.inventory;
    }
    const result = addItem(inv, makeItem('item-13'));
    expect(result.success).toBe(false);
    expect(getItemCount(result.inventory)).toBe(12);
  });

  test('Item empilhável incrementa quantidade no slot existente', () => {
    const inv = createInventory();
    const r1 = addItem(inv, makeItem('ammo-9mm', 'ammo', 5));
    const r2 = addItem(r1.inventory, makeItem('ammo-9mm', 'ammo', 3));
    expect(r2.success).toBe(true);
    expect(r2.inventory.items).toHaveLength(1);
    expect(r2.inventory.items[0].quantity).toBe(8);
  });

  test('Remove item existente decrementa quantidade', () => {
    const inv = createInventory();
    const r1 = addItem(inv, makeItem('ammo-9mm', 'ammo', 10));
    const r2 = removeItem(r1.inventory, 'ammo-9mm', 3);
    expect(r2.success).toBe(true);
    expect(r2.inventory.items[0].quantity).toBe(7);
  });

  test('Remove item completamente quando quantidade chega a 0', () => {
    const inv = createInventory();
    const r1 = addItem(inv, makeItem('key-1', 'key', 1));
    const r2 = removeItem(r1.inventory, 'key-1', 1);
    expect(r2.success).toBe(true);
    expect(r2.inventory.items).toHaveLength(0);
  });

  test('Remove item inexistente retorna false', () => {
    const inv = createInventory();
    const result = removeItem(inv, 'nao-existe', 1);
    expect(result.success).toBe(false);
  });

  test('isFull retorna false quando há espaço', () => {
    const inv = createInventory();
    expect(isFull(inv)).toBe(false);
  });
});
