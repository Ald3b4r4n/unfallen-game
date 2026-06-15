import { toScreen, toGrid } from '@/lib/game/isometric/iso-math';

describe('Matemática Isométrica (iso-math)', () => {
  const TILE_WIDTH = 64;
  const TILE_HEIGHT = 32;

  test('Deve converter a origem lógica (0,0,0) para a origem de tela (0,0)', () => {
    const screenPt = toScreen({ x: 0, y: 0, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
    expect(screenPt.x).toBeCloseTo(0);
    expect(screenPt.y).toBeCloseTo(0);
  });

  test('Deve mover para a direita na tela ao mover em X lógico positivo', () => {
    const screenPt = toScreen({ x: 1, y: 0, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
    expect(screenPt.x).toBe(32); // (1 - 0) * 32
    expect(screenPt.y).toBe(16); // (1 + 0) * 16
  });

  test('Deve mover para a esquerda na tela ao mover em Y lógico positivo', () => {
    const screenPt = toScreen({ x: 0, y: 1, z: 0 }, TILE_WIDTH, TILE_HEIGHT);
    expect(screenPt.x).toBe(-32); // (0 - 1) * 32
    expect(screenPt.y).toBe(16);  // (0 + 1) * 16
  });

  test('Deve mover verticalmente para cima na tela ao elevar a coordenada Z lógica', () => {
    const screenPt = toScreen({ x: 0, y: 0, z: 10 }, TILE_WIDTH, TILE_HEIGHT);
    expect(screenPt.x).toBe(0);
    expect(screenPt.y).toBe(-10); // Subtrai a altura do eixo visual Y
  });

  test('Deve converter coordenada de tela de volta para coordenada do grid (com z=0)', () => {
    const screenPt = { x: 32, y: 16 };
    const gridPt = toGrid(screenPt, TILE_WIDTH, TILE_HEIGHT);
    expect(gridPt.x).toBeCloseTo(1);
    expect(gridPt.y).toBeCloseTo(0);
    expect(gridPt.z).toBe(0);
  });

  test('Deve ser simétrico na ida e volta de projeção no plano z=0', () => {
    const originalGrid = { x: 2.5, y: -1.5, z: 0 };
    const screenPt = toScreen(originalGrid, TILE_WIDTH, TILE_HEIGHT);
    const resolvedGrid = toGrid(screenPt, TILE_WIDTH, TILE_HEIGHT);
    
    expect(resolvedGrid.x).toBeCloseTo(originalGrid.x);
    expect(resolvedGrid.y).toBeCloseTo(originalGrid.y);
    expect(resolvedGrid.z).toBe(0);
  });
});
