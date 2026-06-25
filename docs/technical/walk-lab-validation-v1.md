# Walk Lab Validation V1

**Feature**: `017-codex-image-walk-lab-v1`  
**Data**: 2026-06-24  
**Status**: validacao humana aplicada a V1; tentativa V2 criada para nova revisao.  
**Classificacao V1**: `needs_new_prompt_round`  
**Classificacao V2**: `candidate_for_human_review`

## Observacao Obrigatoria

```txt
Ainda nao existe walk cycle oficial no projeto.
Esta feature nao cria caminhada oficial.
Esta feature nao integra nada ao Player.
Esta feature nao substitui a Base Idle Oficial V1.
Esta feature cria apenas um laboratorio experimental de geracao e validacao visual.
```

## Arquivos Avaliados

Fonte anchor:

```txt
res://assets/characters/antonio_rafael/walk_lab/source/front_right_anchor_codex_image_attempt_v1.png
```

Fonte walk:

```txt
res://assets/characters/antonio_rafael/walk_lab/source/front_right_walk_codex_image_attempt_v1.png
```

Preview:

```txt
res://assets/characters/antonio_rafael/walk_lab/previews/front_right_walk_codex_image_attempt_v1_preview.png
res://assets/characters/antonio_rafael/walk_lab/previews/front_right_walk_codex_image_attempt_v2_preview.png
```

Frames experimentais:

```txt
res://assets/characters/antonio_rafael/walk_lab/frames/front_right/frame_01.png
res://assets/characters/antonio_rafael/walk_lab/frames/front_right/frame_02.png
res://assets/characters/antonio_rafael/walk_lab/frames/front_right/frame_03.png
res://assets/characters/antonio_rafael/walk_lab/frames/front_right/frame_04.png
res://assets/characters/antonio_rafael/walk_lab/frames/front_right_v2/frame_01.png
res://assets/characters/antonio_rafael/walk_lab/frames/front_right_v2/frame_02.png
res://assets/characters/antonio_rafael/walk_lab/frames/front_right_v2/frame_03.png
res://assets/characters/antonio_rafael/walk_lab/frames/front_right_v2/frame_04.png
res://assets/characters/antonio_rafael/walk_lab/frames/front_right_v2/frame_05.png
res://assets/characters/antonio_rafael/walk_lab/frames/front_right_v2/frame_06.png
res://assets/characters/antonio_rafael/walk_lab/frames/front_right_v2/frame_07.png
res://assets/characters/antonio_rafael/walk_lab/frames/front_right_v2/frame_08.png
```

## Validacao Tecnica Dos Frames Extraidos

Os quatro frames foram gerados por corte simples da spritesheet, remocao basica do fundo magenta e encaixe em canvas `128x128`.

Resultado tecnico:

```txt
frame_01.png: 128x128, RGBA, cantos transparentes
frame_02.png: 128x128, RGBA, cantos transparentes
frame_03.png: 128x128, RGBA, cantos transparentes
frame_04.png: 128x128, RGBA, cantos transparentes
```

O fundo original nao veio com alpha nativo. Foi usado fundo chroma magenta como etapa de laboratorio.

## Validacao Tecnica Dos Frames V2 Extraidos

Os oito frames V2 foram gerados por corte simples da spritesheet, remocao do fundo chroma/margens por processo local e encaixe em canvas `128x128`.

Resultado tecnico:

```txt
frame_01.png: 128x128, RGBA, cantos transparentes
frame_02.png: 128x128, RGBA, cantos transparentes
frame_03.png: 128x128, RGBA, cantos transparentes
frame_04.png: 128x128, RGBA, cantos transparentes
frame_05.png: 128x128, RGBA, cantos transparentes
frame_06.png: 128x128, RGBA, cantos transparentes
frame_07.png: 128x128, RGBA, cantos transparentes
frame_08.png: 128x128, RGBA, cantos transparentes
```

O source V2 tambem nao veio com alpha nativo. A extracao e apenas material de laboratorio para revisao humana.

## Checklist De Aceitacao Parcial V1 Antes Da Revisao Humana

| Criterio | Resultado |
|---|---|
| Identidade reconhecivel do Antonio Rafael | PASS |
| Leitura de Policial Militar de Goias | PASS |
| Oculos visiveis ou coerentes | PASS |
| Colete consistente | PASS |
| Mochila consistente | PASS |
| Escala relativamente estavel | PASS |
| Tentativa clara de movimento de pernas | PASS |
| Tentativa clara de alternancia de bracos | PASS |
| Frames separados | PASS |
| Sem texto/labels no sprite | PASS |
| Sem Policia Civil | PASS |
| Sem Sargento Silva | PASS |
| Sem nomes aleatorios | PASS |
| Sem cenario misturado | PASS |

## Checklist De Rejeicao V1 Corrigido Pela Validacao Humana

| Criterio de rejeicao | Resultado |
|---|---|
| Parece idle parado | NAO OBSERVADO |
| Frames duplicados | NAO OBSERVADO |
| Muda personagem entre frames | NAO OBSERVADO |
| Troca uniforme/patente/identidade | NAO OBSERVADO |
| Gera Policia Civil | NAO OBSERVADO |
| Gera texto no sprite | NAO OBSERVADO |
| Gera cenario misturado | NAO OBSERVADO |
| Deforma muito o corpo | NAO OBSERVADO |
| Nao parece caminhada suficiente para gameplay | OBSERVADO PARCIALMENTE |
| Funde frames sem leitura de spritesheet | NAO OBSERVADO |

## Limitacoes Visuais

- A arte gerada esta mais ilustrada/HD do que a Base Idle Oficial V1.
- O fundo original e chroma magenta, nao transparencia nativa.
- A mochila e o colete estao legiveis, mas podem precisar aproximacao com a silhueta oficial.
- O patch e a divisa aparecem como leitura simbolica, nao detalhe final.
- O ciclo ainda nao foi validado como animacao em GIF ou Godot.
- A extracao para 128x128 e de laboratorio e pode exigir normalizacao futura.

## Revisao Humana Da V1

Resultado:

```txt
needs_new_prompt_round
```

Motivo:

- a V1 tem boa identidade visual geral, mas nao demonstra caminhada suficientemente clara;
- os frames parecem poses semelhantes em deslocamento;
- falta neutral/contact, passing, opposite contact e opposite passing com leitura forte;
- falta alternancia convincente dos pes;
- falta alternancia convincente dos bracos;
- o corpo/torso quase nao muda;
- a passada nao parece fechar em loop natural;
- o personagem ficou barbado demais para a ficha oficial;
- o fundo source veio magenta/chroma, nao transparencia real.

Uso permitido da V1:

```txt
referencia visual/anchor experimental
```

Uso proibido da V1:

```txt
walk cycle candidate
walk oficial
integracao no Player
normalizacao para runtime
sprites oficiais
```

## Validacao Visual Tecnica V2

| Criterio | Resultado |
|---|---|
| 8 frames separados | PASS |
| Direcao front_right | PASS |
| Personagem reconhecivel como Antonio Rafael | PASS |
| Oculos visiveis | PASS |
| Colete/uniforme/mochila consistentes | PASS |
| Patch/insignias como detalhe simbolico | PASS |
| Progressao de pernas mais clara que V1 | PASS |
| Alternancia de bracos mais clara que V1 | PASS |
| Loop oficial validado | PENDENTE |
| Validacao no Godot | PENDENTE |
| Proximidade final com Base Idle Oficial V1 | PENDENTE |
| Transparencia nativa no source | FAIL |
| Sem labels/textos/cenario | PASS |
| Sem Policia Civil/Sargento Silva | PASS |

Classificacao tecnica V2:

```txt
candidate_for_human_review
```

Essa classificacao nao equivale a walk candidate oficial. Ela significa apenas que a V2 merece revisao humana por apresentar progressao de caminhada melhor que a V1.

## Teste Tecnico Externo 20F

Foi criado um teste isolado com spritesheet externa `left_to_right` / `right-facing`:

```txt
res://assets/characters/antonio_rafael/walk_lab/source/walking_left_to_right_20f.png
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_01.png ... frame_20.png
res://assets/characters/antonio_rafael/walk_lab/previews/walking_left_to_right_20f_contact_sheet.png
res://assets/characters/antonio_rafael/walk_lab/animations/walking_right_20f_spriteframes.tres
res://scenes/test/WalkSheet20FrameTest.tscn
```

Resultado tecnico:

```txt
20 frames
509x525 px
PNG RGBA
5 colunas x 4 linhas
animacao walk_right_20f
12 FPS
loop true
```

Avaliacao estatica:

- a caminhada e mais legivel que as tentativas V1/V2 anteriores;
- a alternancia de pernas e bracos e mais clara;
- o fundo magenta foi preservado;
- a cena de teste e isolada e nao depende do Player;
- ainda falta validacao visual ao vivo no Godot.

Status:

```txt
technical_test_created
```

## Classificacao Atual

```txt
V1: needs_new_prompt_round
V2: candidate_for_human_review
```

Motivo:

- a V1 foi reprovada como candidata por falta de mecanica forte de caminhada;
- a V2 tem 8 frames e apresenta progressao visual melhor;
- nenhuma tentativa foi aprovada como walk cycle oficial;
- nenhuma tentativa foi integrada ao Player;
- qualquer continuidade ainda exige gate humano.

## Confirmacoes De Escopo Seguro

- Player nao foi alterado.
- Cena de rig existente nao foi alterada.
- Scripts nao foram alterados.
- Sprites idle aprovados nao foram alterados.
- Rig oficial nao foi alterado.
- `.gitignore` nao foi alterado.
- `.uid` nao foi alterado.
- Nenhum walk cycle oficial foi criado.
- Nenhuma animacao oficial foi criada.
- Nenhum gameplay foi criado.

## Gate Humano

Esta validacao e preliminar e tecnica. O proximo passo e validacao humana do preview e dos frames experimentais.

Opcoes recomendadas:

```txt
avaliar V2 como candidate_for_human_review
pedir nova rodada de prompt V3
reprovar a V2
```
