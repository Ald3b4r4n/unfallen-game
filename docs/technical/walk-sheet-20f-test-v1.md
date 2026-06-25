# Walk Sheet 20F Test V1

**Data**: 2026-06-24  
**Status**: teste tecnico isolado criado; aguardando validacao humana no Godot.  
**Uso autorizado**: validacao visual experimental de uma caminhada `left_to_right` / `right-facing`.  
**Uso nao autorizado**: walk cycle oficial, animacao oficial, Player runtime, gameplay ou substituicao da Base Idle Oficial V1.

## Origem

Arquivo externo fornecido:

```txt
C:\Users\Antonio Rafael\OneDrive\Desktop\spritesheets\walking left to right.png
```

Arquivo copiado para o projeto:

```txt
res://assets/characters/antonio_rafael/walk_lab/source/walking_left_to_right_20f.png
```

## Grade E Frames

Grade identificada:

```txt
5 colunas x 4 linhas
```

Quantidade de frames extraidos do sheet:

```txt
20
```

Quantidade de frames usados no loop de laboratorio:

```txt
24
```

Os frames `21` a `24` repetem os quatro primeiros frames da segunda fileira do spritesheet, correspondendo aos frames extraidos `06` a `09`. Essa repeticao foi adicionada para testar uma caminhada mais completa ao fechar o ciclo depois do frame `20`.

Ordem usada:

```txt
esquerda para direita, linha superior para linha inferior
```

Frames extraidos:

```txt
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_01.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_02.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_03.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_04.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_05.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_06.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_07.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_08.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_09.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_10.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_11.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_12.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_13.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_14.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_15.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_16.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_17.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_18.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_19.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_20.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_21.png  # repeticao de frame_06
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_22.png  # repeticao de frame_07
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_23.png  # repeticao de frame_08
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_24.png  # repeticao de frame_09
```

Tamanho dos frames extraidos:

```txt
509x525 px
```

Formato:

```txt
PNG RGBA
```

O conteudo nao foi redimensionado de forma destrutiva. Os frames foram recortados da grade, limpos de molduras pretas/brancas conectadas a borda e acolchoados em canvas uniforme para reduzir tremor visual no teste.

## Fundo

O fundo magenta foi preservado.

Nao houve remocao de fundo nesta etapa, exceto substituicao de bordas externas preto/branco do sheet por magenta para nao poluir o teste visual.

## Preview

Contact sheet criado:

```txt
res://assets/characters/antonio_rafael/walk_lab/previews/walking_left_to_right_20f_contact_sheet.png
```

O preview e apenas material de revisao humana.

## Recurso De Animacao

Recurso `SpriteFrames` criado:

```txt
res://assets/characters/antonio_rafael/walk_lab/animations/walking_right_20f_spriteframes.tres
```

Animacao:

```txt
walk_right_20f
```

Configuracao:

```txt
FPS: 12
Loop: true
Frames: 24 em ordem
Observacao: frames 21-24 repetem frames 06-09 para ponte de loop.
```

## Cena De Teste

Cena experimental isolada criada:

```txt
res://scenes/test/WalkSheet20FrameTest.tscn
```

Configuracao:

- raiz `Node2D`;
- um `AnimatedSprite2D`;
- script de controle experimental `res://scripts/test/walk_sheet_20_frame_test_controller.gd`;
- painel de thumbnails com os 20 frames;
- contador de frame atual;
- animacao `walk_right_20f`;
- autoplay desabilitado;
- `playing = false` por padrao;
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

Observacao: o teste foi alterado para permitir inspecao manual. Ele nao deve ser tratado como animacao oficial nem como comportamento de gameplay.

## Avaliacao Visual Estatica

O contact sheet mostra uma caminhada `right-facing` mais clara do que as tentativas V1/V2 anteriores do Codex Image Walk Lab.

Pontos positivos:

- 20 frames oferecem progressao mais longa;
- pernas alternam de forma perceptivel;
- bracos acompanham melhor o ciclo;
- o personagem permanece visivel e legivel;
- a direcao `left_to_right` / `right-facing` esta clara;
- o teste parece mais caminhada real do que as tentativas V1/V2 anteriores.

Limitacoes:

- ainda nao foi validado ao vivo no editor Godot nesta execucao;
- fundo magenta permanece visivel;
- a arte externa nao esta aprovada como identidade final do Antonio Rafael;
- escala e linguagem visual ainda precisam comparacao humana com a Base Idle Oficial V1;
- o teste nao autoriza integracao no Player.

## Validacao Godot

Godot nao estava disponivel no PATH desta execucao.

Por isso, a validacao ao vivo de abertura da cena e autoplay ficou pendente para o usuario no editor.

Validacao estatica concluida:

- a cena `WalkSheet20FrameTest.tscn` existe;
- a cena referencia o `SpriteFrames` experimental;
- o `SpriteFrames` referencia os 24 frames do loop de laboratorio;
- a animacao `walk_right_20f` contem os 20 frames originais e a ponte 21-24;
- o `AnimatedSprite2D` inicia pausado;
- a cena possui controle manual de frame;
- a cena possui painel de thumbnails para visualizar todos os 24 frames.

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
validar visualmente no Godot e, se aprovado parcialmente, usar como referencia tecnica de movimento para uma futura feature de laboratorio controlado.
```
