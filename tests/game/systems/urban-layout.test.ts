import {
  PHASE_ONE_ENTERABLE_BUILDINGS,
  PHASE_ONE_URBAN_DECORATIONS,
  PHASE_ONE_URBAN_SURFACES,
  getEnterableBuildingAtPosition,
  isUrbanDecorationInsideMap,
  isUrbanSurfaceInsideMap,
} from '@/lib/game/systems/urban-layout';

describe('Urban Layout', () => {
  test('preenche a rota jogavel da fase 1 com superficies urbanas', () => {
    expect(PHASE_ONE_URBAN_SURFACES.length).toBeGreaterThanOrEqual(10);
    expect(PHASE_ONE_URBAN_SURFACES.every(isUrbanSurfaceInsideMap)).toBe(true);
  });

  test('define predios principais como entraveis', () => {
    expect(PHASE_ONE_ENTERABLE_BUILDINGS.map((building) => building.id)).toEqual([
      'police-base',
      'abandoned-market',
      'rafael-house',
    ]);
  });

  test('espalha arvores e postes ao longo das ruas', () => {
    expect(PHASE_ONE_URBAN_DECORATIONS.length).toBeGreaterThanOrEqual(12);
    expect(PHASE_ONE_URBAN_DECORATIONS.every(isUrbanDecorationInsideMap)).toBe(true);
    expect(PHASE_ONE_URBAN_DECORATIONS.some((decor) => decor.kind === 'tree')).toBe(true);
    expect(PHASE_ONE_URBAN_DECORATIONS.some((decor) => decor.kind === 'pole')).toBe(true);
  });

  test('detecta entrada do personagem em predio para transparencia', () => {
    expect(getEnterableBuildingAtPosition(5, 5)?.id).toBe('police-base');
    expect(getEnterableBuildingAtPosition(20, 7)?.id).toBe('abandoned-market');
    expect(getEnterableBuildingAtPosition(26, 19)?.id).toBe('rafael-house');
    expect(getEnterableBuildingAtPosition(12, 12)).toBeNull();
  });
});
