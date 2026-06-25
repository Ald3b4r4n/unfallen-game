# Walk Sheet Left 20F Test V1

**Data**: 2026-06-24  
**Status**: teste tecnico isolado criado; aguardando validacao humana no Godot.  
**Uso autorizado**: validacao visual experimental de caminhada `right_to_left` / `left-facing`.  
**Uso nao autorizado**: walk cycle oficial, animacao oficial, Player runtime, gameplay ou substituicao da Base Idle Oficial V1.

## Origem

Caminho informado no pedido:

```txt
C:\Users\Antonio Rafael\OneDrive\Desktop\spritesheets walking right to left.png
```

Esse caminho sem a subpasta nao existia no disco. Caminho real localizado:

```txt
C:\Users\Antonio Rafael\OneDrive\Desktop\spritesheets\walking right to left.png
```

Arquivo copiado para o projeto:

```txt
res://assets/characters/antonio_rafael/walk_lab/source/walking_right_to_left_20f.png
```

## Grade E Frames

Tamanho da spritesheet original:

```txt
2496x2630 px
```

Grade detectada:

```txt
5 colunas x 5 linhas, com a ultima celula vazia
```

Quantidade de frames visiveis:

```txt
24
```

Ordem usada:

```txt
esquerda para direita, linha superior para linha inferior
```

Frames extraidos:

```txt
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_01.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_02.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_03.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_04.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_05.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_06.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_07.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_08.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_09.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_10.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_11.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_12.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_13.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_14.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_15.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_16.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_17.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_18.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_19.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_20.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_21.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_22.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_23.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_24.png
```

Tamanho dos frames extraidos:

```txt
500x526 px
```

Formato:

```txt
PNG RGBA
```

O conteudo nao foi redimensionado de forma destrutiva. Os frames foram recortados da grade, com substituicao das bordas brancas conectadas a borda da celula por magenta, e acolchoados em canvas uniforme.

## Loop

Nao foram criados frames extras por copia.

A sheet ja continha 24 frames visiveis. Por isso, a animacao experimental usa 24 frames originais em ordem.

## Fundo

O fundo magenta foi preservado.

Nao houve remocao de fundo nesta etapa. A normalizacao de transparencia fica para feature futura, caso o teste seja aprovado para continuar.

## Preview

Contact sheet criado:

```txt
res://assets/characters/antonio_rafael/walk_lab/previews/walking_right_to_left_20f_contact_sheet.png
```

O preview e apenas material de revisao humana.

## Recurso De Animacao

Recurso `SpriteFrames` criado:

```txt
res://assets/characters/antonio_rafael/walk_lab/animations/walking_left_20f_spriteframes.tres
```

Animacao:

```txt
walk_left_20f
```

Configuracao:

```txt
FPS: 12
Loop: true
Frames: 24 em ordem
```

## Cena De Teste

Cena experimental isolada criada:

```txt
res://scenes/test/WalkSheetLeft20FrameTest.tscn
```

Configuracao:

- raiz `Node2D`;
- um `AnimatedSprite2D`;
- script de contador `res://scripts/test/walk_sheet_left_20_frame_test_controller.gd`;
- painel de thumbnails com os 24 frames;
- contador de frame atual;
- animacao `walk_left_20f`;
- autoplay desabilitado;
- controle manual de playback pelo script;
- contador `Frame 01/24`;
- `texture_filter = 1` para preservar leitura pixel art/nearest;
- escala visual de teste `0.42`;
- sem Player oficial;
- input apenas para controle visual do laboratorio;
- sem colisao;
- sem inimigos;
- sem mundo;
- sem gameplay.

Controles do laboratorio:

```txt
Tab: alterna entre inspecao de frames e teste de movimento
Space: play/pause
Left/Right ou A/D: voltar/avancar frame no modo inspecao
Left/Right ou A/D: mover o personagem no modo movimento
Home/End: primeiro/ultimo frame
Up/Down ou W/S: ajustar velocidade do playback
R: resetar posicao e voltar ao frame 01
```

## Avaliacao Visual Estatica

O contact sheet mostra uma caminhada `right_to_left` / `left-facing` mais completa do que uma sequencia de 20 frames com ponte copiada, porque os 24 frames sao frames reais do arquivo fonte.

Pontos positivos:

- 24 frames reais oferecem progressao longa;
- pernas alternam de forma perceptivel;
- bracos acompanham o ciclo;
- o personagem permanece visivel e legivel;
- a direcao `right_to_left` / `left-facing` esta clara;
- o resultado complementa o teste right-facing anterior.

Limitacoes:

- ainda nao foi validado ao vivo no editor Godot nesta execucao;
- fundo magenta permanece visivel;
- a arte externa nao esta aprovada como identidade final do Antonio Rafael;
- escala e linguagem visual ainda precisam comparacao humana com a Base Idle Oficial V1;
- o teste nao autoriza integracao no Player.

## Comparacao Com O Teste Right-Facing Anterior

O teste `walking_left_to_right_20f` anterior usou 20 frames extraidos e uma ponte de loop com 4 copias, totalizando 24 passos no laboratorio.

Este teste `walking_right_to_left_20f` usa 24 frames reais detectados na sheet. Portanto, ele e mais adequado para avaliar uma passada longa sem depender de repeticao artificial.

Ambos continuam experimentais e nenhum deles e walk cycle oficial.

## Validacao Godot

Godot nao estava disponivel no PATH desta execucao.

Por isso, a validacao ao vivo de abertura da cena e autoplay ficou pendente para o usuario no editor.

Validacao estatica concluida:

- a cena `WalkSheetLeft20FrameTest.tscn` existe;
- a cena referencia o `SpriteFrames` experimental;
- o `SpriteFrames` referencia os 24 frames;
- a animacao `walk_left_20f` contem os 24 frames em ordem;
- o `AnimatedSprite2D` inicia pausado;
- a cena possui controle manual de frame;
- a cena possui painel de thumbnails para visualizar todos os 24 frames;
- o contador inicial indica `Frame 01/24`.

## Confirmacoes De Escopo

- `Player.tscn` nao foi alterado.
- `scripts/player/` nao foi alterado.
- sprites idle aprovados nao foram alterados.
- rig oficial nao foi alterado.
- cena de rig oficial nao foi alterada.
- `.gitignore` nao foi alterado.
- `.uid` nao foi alterado.
- nenhum gameplay foi criado.
- nenhum walk cycle oficial foi criado.
- nenhuma animacao oficial foi criada.
- nao houve commit.
- nao houve push.

## Status

```txt
technical_test_created
```

Recomendacao:

```txt
validar visualmente no Godot e, se aprovado parcialmente, usar como referencia tecnica para a futura normalizacao left/right.
```
## Continuidade pela Feature 018

Este teste left-facing foi normalizado em `res://assets/characters/antonio_rafael/walk_lab/normalized/left/`. A origem como 24 frames reais da spritesheet foi preservada no manifesto. O uso segue experimental.
