# Guia de Pipeline Tecnico de Arte: Personagens

## Especificacoes Gerais

- **Estilo**: Pixel Art HD isometrica.
- **Proporcao base**: `128x128 px` por celula individual.
- **Formato final**: PNG lossless com alpha (`RGBA`).
- **Uso atual**: Base Idle Oficial V1 aprovada e validada visualmente no Godot 4.
- **Filtro recomendado no Godot**: `Nearest`, sem blur.

## Pipeline da Primeira Rodada Oficial

1. Abrir e confirmar as fotos reais em `res://assets/characters/antonio_rafael/references/`.
2. Gerar uma imagem fonte por direcao usando `image_gen`, sempre com as fotos reais como referencia visual e sem usar artes antigas rejeitadas.
3. Gerar cada fonte sobre fundo chroma-key verde plano.
4. Extrair o PNG retornado pelo gerador a partir do log local da sessao.
5. Remover o fundo por chroma-key, preservando detalhes internos como patch.
6. Recortar a silhueta, normalizar altura visual e baseline, centralizar em celula `128x128`.
7. Exportar arquivos finais em `res://assets/characters/antonio_rafael/sprites/idle/`.
8. Montar preview em `res://assets/characters/antonio_rafael/exports/`.
9. Pausar para aprovacao humana antes de qualquer importacao no Godot.
10. Apos aprovacao parcial, conectar os oito sprites idle ao `Player.tscn` e testar apenas a troca de idle por direcao.

## Nomenclatura Oficial de Idle

- `antonio_rafael_idle_front.png`
- `antonio_rafael_idle_back.png`
- `antonio_rafael_idle_left.png`
- `antonio_rafael_idle_right.png`
- `antonio_rafael_idle_front_left.png`
- `antonio_rafael_idle_front_right.png`
- `antonio_rafael_idle_back_left.png`
- `antonio_rafael_idle_back_right.png`

## Validacao Tecnica Aplicada

- Todos os arquivos finais devem existir.
- Todos devem ter exatamente `128x128 px`.
- Todos devem estar em `RGBA`.
- Os quatro cantos devem ter alpha `0`.
- O personagem deve estar inteiro, centralizado e com margem segura.
- O baseline deve ser consistente entre as direcoes.
- Nao pode haver labels externos, grid, texto de direcao ou character sheet nos sprites individuais.
- Direcoes opostas e diagonais devem ter imagens distintas.

## Estado Atual

**Rodada**: primeira rodada oficial valida de idle do SGT Antonio Rafael.  
**Status**: BASE IDLE OFICIAL V1 APROVADA.  
**Validacao humana**: personagem aparece corretamente na cena de teste, fundo verde nao aparece, escala visual esta aceitavel e a direcao idle troca conforme a ultima direcao de movimento.  
**Pendencia**: criar uma feature futura especifica para walk cycle.

Esta etapa altera apenas a cena `Player.tscn` e o controlador de animacao do Player para idle. Nao altera configuracoes globais, gameplay novo, walk cycle, combate, inventario, HUD ou mundo definitivo.

## Proxima Feature Recomendada

**Walk Cycle 8 direcoes do SGT Antonio Rafael**.

A futura feature deve:

- usar a Base Idle Oficial V1 como referencia visual obrigatoria;
- manter os mesmos criterios de escala, silhueta, uniforme, patch, divisa e identidade PMGO;
- passar por novo gate humano antes de implementacao.

Esta proxima feature foi apenas registrada e nao foi executada nesta etapa.
