import { IsometricPoint, ScreenPoint } from './iso-types';

/**
 * Converte coordenadas do grid lógico (x, y, z) para coordenadas de tela (x, y).
 * Projeção isométrica 2:1 clássica.
 */
export function toScreen(
  gridPt: IsometricPoint,
  tileWidth: number,
  tileHeight: number
): ScreenPoint {
  return {
    x: (gridPt.x - gridPt.y) * (tileWidth / 2),
    y: (gridPt.x + gridPt.y) * (tileHeight / 2) - gridPt.z
  };
}

/**
 * Converte coordenadas de tela (x, y) de volta para o plano lógico (z = 0) do grid.
 */
export function toGrid(
  screenPt: ScreenPoint,
  tileWidth: number,
  tileHeight: number
): IsometricPoint {
  const halfW = tileWidth / 2;
  const halfH = tileHeight / 2;
  
  const gridX = (screenPt.x / halfW + screenPt.y / halfH) / 2;
  const gridY = (screenPt.y / halfH - screenPt.x / halfW) / 2;
  
  return {
    x: gridX,
    y: gridY,
    z: 0
  };
}
