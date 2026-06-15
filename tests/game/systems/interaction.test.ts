import {
  isInInteractionRange,
  findNearestInteractable,
  tryCollect,
  InteractableData,
} from '@/lib/game/systems/interaction';
import { createInventory, addItem, ItemSlot } from '@/lib/game/systems/inventory';

const makeInteractable = (
  id: string,
  posX: number,
  posY: number,
  type: ItemSlot['type'] = 'ammo'
): InteractableData => ({
  id,
  posX,
  posY,
  interactionRadius: 1.5,
  item: { itemId: id, name: `Item ${id}`, type, quantity: 1 },
  collected: false,
});

describe('Interaction (lógica pura)', () => {
  test('Detecta objeto dentro do raio de interação', () => {
    const obj = makeInteractable('battery-1', 1, 0);
    expect(isInInteractionRange(0, 0, obj)).toBe(true);
  });

  test('Não detecta objeto fora do raio de interação', () => {
    const obj = makeInteractable('battery-1', 10, 10);
    expect(isInInteractionRange(0, 0, obj)).toBe(false);
  });

  test('Não detecta objeto já coletado', () => {
    const obj = { ...makeInteractable('battery-1', 1, 0), collected: true };
    expect(isInInteractionRange(0, 0, obj)).toBe(false);
  });

  test('Encontra o objeto mais próximo dentro do raio', () => {
    const objects = [
      makeInteractable('far', 1.4, 0),
      makeInteractable('near', 0.5, 0),
    ];
    const nearest = findNearestInteractable(0, 0, objects);
    expect(nearest?.id).toBe('near');
  });

  test('Retorna null se nenhum objeto está no raio', () => {
    const objects = [makeInteractable('far', 20, 20)];
    const nearest = findNearestInteractable(0, 0, objects);
    expect(nearest).toBeNull();
  });

  test('Coleta adiciona item ao inventário', () => {
    const objects = [makeInteractable('ammo-1', 1, 0)];
    const inv = createInventory();
    const result = tryCollect(0, 0, objects, inv);
    expect(result.success).toBe(true);
    expect(result.inventory.items).toHaveLength(1);
    expect(result.collectedId).toBe('ammo-1');
  });

  test('Coleta falha se inventário está cheio', () => {
    const objects = [makeInteractable('ammo-1', 1, 0)];
    let inv = createInventory();
    // Encher o inventário com 12 itens distintos
    for (let i = 0; i < 12; i++) {
      inv = addItem(inv, {
        itemId: `filler-${i}`,
        name: `Filler ${i}`,
        type: 'note',
        quantity: 1,
      }).inventory;
    }
    const result = tryCollect(0, 0, objects, inv);
    expect(result.success).toBe(false);
    expect(result.collectedId).toBeNull();
  });

  test('Coleta falha se nenhum objeto está no raio', () => {
    const objects = [makeInteractable('far', 20, 20)];
    const inv = createInventory();
    const result = tryCollect(0, 0, objects, inv);
    expect(result.success).toBe(false);
  });
});
