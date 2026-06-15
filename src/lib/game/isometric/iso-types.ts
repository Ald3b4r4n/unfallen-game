export interface IsometricPoint {
  x: number; // Coordenada lógica X no grid
  y: number; // Coordenada lógica Y no grid
  z: number; // Coordenada lógica Z (altura/elevação)
}

export interface ScreenPoint {
  x: number; // Posição pixel X na tela
  y: number; // Posição pixel Y na tela
}

export interface SortableEntity {
  id: string;
  x: number;
  y: number;
  z: number;
  width: number;  // Tamanho lógico no eixo X
  length: number; // Tamanho lógico no eixo Y
  height: number; // Altura lógica no eixo Z
}

export interface FootCollider {
  offsetX: number; // Deslocamento X relativo ao centro/âncora da entidade
  offsetY: number; // Deslocamento Y relativo ao centro/âncora da entidade
  width: number;   // Largura da base no plano de solo lógico
  length: number;  // Comprimento da base no plano de solo lógico
}
