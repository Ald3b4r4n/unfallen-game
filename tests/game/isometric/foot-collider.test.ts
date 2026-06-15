import {
  getFootBounds,
  checkFootOverlap,
  resolveFootCollision,
  EntityWithFoot
} from '@/lib/game/isometric/foot-collider';

describe('Colisor de Pé Isométrico (foot-collider)', () => {
  test('Deve obter os limites corretos da caixa de pé baseados em offset e dimensão', () => {
    const entity: EntityWithFoot = {
      id: 'player',
      x: 10,
      y: 10,
      collider: {
        offsetX: -0.5,
        offsetY: -0.5,
        width: 1.0,
        length: 1.0
      }
    };
    
    const bounds = getFootBounds(entity);
    expect(bounds.minX).toBe(9.5);
    expect(bounds.maxX).toBe(10.5);
    expect(bounds.minY).toBe(9.5);
    expect(bounds.maxY).toBe(10.5);
  });

  test('Deve detectar sobreposição (colisão) quando os limites dos pés se cruzam', () => {
    const entityA: EntityWithFoot = {
      id: 'A',
      x: 0,
      y: 0,
      collider: { offsetX: 0, offsetY: 0, width: 2, length: 2 }
    };
    
    const entityB: EntityWithFoot = {
      id: 'B',
      x: 1.5,
      y: 1.5,
      collider: { offsetX: 0, offsetY: 0, width: 2, length: 2 }
    };
    
    const boundsA = getFootBounds(entityA);
    const boundsB = getFootBounds(entityB);
    
    expect(checkFootOverlap(boundsA, boundsB)).toBe(true);
  });

  test('Não deve detectar sobreposição quando as caixas estão distantes', () => {
    const entityA: EntityWithFoot = {
      id: 'A',
      x: 0,
      y: 0,
      collider: { offsetX: 0, offsetY: 0, width: 1, length: 1 }
    };
    
    const entityB: EntityWithFoot = {
      id: 'B',
      x: 5,
      y: 5,
      collider: { offsetX: 0, offsetY: 0, width: 1, length: 1 }
    };
    
    const boundsA = getFootBounds(entityA);
    const boundsB = getFootBounds(entityB);
    
    expect(checkFootOverlap(boundsA, boundsB)).toBe(false);
  });

  test('Deve resolver colisão afastando o objeto móvel na menor penetração', () => {
    // Entidade estática na posição lógica (0,0) com tamanho (2,2)
    const staticEnt: EntityWithFoot = {
      id: 'wall',
      x: 0,
      y: 0,
      collider: { offsetX: 0, offsetY: 0, width: 2, length: 2 }
    };

    // Entidade móvel que penetra levemente no eixo X pela direita (penetração de 0.5 em X, e de 1.5 em Y)
    const activeEnt: EntityWithFoot = {
      id: 'hero',
      x: 1.5,
      y: 0.5,
      collider: { offsetX: 0, offsetY: 0, width: 1, length: 1 }
    };

    const resolved = resolveFootCollision(activeEnt, staticEnt);
    
    // Deve afastar no eixo X, movendo X de volta para 2.0 (afastamento de +0.5)
    expect(resolved.x).toBeCloseTo(2.0);
    expect(resolved.y).toBe(0.5); // O eixo Y deve permanecer inalterado
  });
});
