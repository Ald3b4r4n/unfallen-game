import { calculateDepth, sortEntities } from '@/lib/game/isometric/depth-sort';
import { SortableEntity } from '@/lib/game/isometric/iso-types';

describe('Ordenação de Profundidade Isométrica (depth-sort)', () => {
  test('Deve calcular a profundidade lógica com base nas coordenadas X e Y', () => {
    const entityA: SortableEntity = { id: 'A', x: 2, y: 3, z: 0, width: 1, length: 1, height: 1 };
    const entityB: SortableEntity = { id: 'B', x: 3, y: 2, z: 0, width: 1, length: 1, height: 1 };
    
    // Devem ter a mesma profundidade no plano 2D
    expect(calculateDepth(entityA)).toBeCloseTo(calculateDepth(entityB));
  });

  test('Deve ordenar entidades corretamente de trás para frente (Y e X crescentes para a frente)', () => {
    const e1: SortableEntity = { id: 'e1', x: 1, y: 1, z: 0, width: 1, length: 1, height: 1 }; // depth: 2
    const e2: SortableEntity = { id: 'e2', x: 2, y: 2, z: 0, width: 1, length: 1, height: 1 }; // depth: 4
    const e3: SortableEntity = { id: 'e3', x: 0, y: 1, z: 0, width: 1, length: 1, height: 1 }; // depth: 1

    const sorted = sortEntities([e1, e2, e3]);
    expect(sorted.map(e => e.id)).toEqual(['e3', 'e1', 'e2']);
  });

  test('Deve usar o ID como critério de desempate estável em caso de profundidades idênticas', () => {
    const eA: SortableEntity = { id: 'entity-A', x: 2, y: 2, z: 0, width: 1, length: 1, height: 1 };
    const eB: SortableEntity = { id: 'entity-B', x: 3, y: 1, z: 0, width: 1, length: 1, height: 1 };
    
    const sorted1 = sortEntities([eB, eA]);
    const sorted2 = sortEntities([eA, eB]);
    
    expect(sorted1.map(e => e.id)).toEqual(['entity-A', 'entity-B']);
    expect(sorted2.map(e => e.id)).toEqual(['entity-A', 'entity-B']);
  });

  test('Deve considerar a altura Z levemente no cálculo da profundidade para sobreposições verticais', () => {
    const ground: SortableEntity = { id: 'ground', x: 1, y: 1, z: 0, width: 1, length: 1, height: 1 };
    const elevated: SortableEntity = { id: 'elevated', x: 1, y: 1, z: 10, width: 1, length: 1, height: 1 };
    
    // O objeto elevado tem maior Z, logo deve ser ordenado após (desenhado na frente)
    const sorted = sortEntities([elevated, ground]);
    expect(sorted.map(e => e.id)).toEqual(['ground', 'elevated']);
  });
});
