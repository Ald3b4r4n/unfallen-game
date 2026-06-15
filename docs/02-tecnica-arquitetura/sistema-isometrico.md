# Sistema Isométrico 2.5D — Unfallen

Este documento detalha o sistema de visualização isométrica 2.5D, depth sorting e física implementados em *Unfallen* utilizando o Phaser 3.

## Matemática da Visualização

O jogo utiliza uma projeção isométrica padrão do tipo $2:1$, onde o deslocamento no grid lógico cartesiano $(X, Y)$ é convertido para coordenadas de renderização na tela $(X_s, Y_s)$ através das fórmulas:

- $X_s = X - Y$
- $Y_s = \frac{X + Y}{2}$

Isso permite criar a sensação de tridimensionalidade mantendo a leveza de um motor 2D convencional.

## Ordenação Dinâmica (Depth Sorting)

Para evitar conflitos visuais onde o personagem aparece sob elementos que deveriam estar por trás dele:
- Implementamos uma ordenação dinâmica baseada no eixo Y no ciclo `update` do Phaser.
- A profundidade (`depth`) de Antônio Rafael, infectados e objetos interativos é atualizada continuamente baseada no rodapé (eixo Y de contato com o solo) de cada sprite.

Para detalhes matemáticos exatos e fórmulas de conversão reversa para cliques do mouse, consulte a especificação [isometric-system.md](file:///d:/Projetos/Unfallen/.sdd-master/specs/isometric-system.md).
