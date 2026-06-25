# Codex Image Walk Lab V1

**Feature**: `017-codex-image-walk-lab-v1`  
**Data**: 2026-06-24  
**Status**: tentativa experimental V1 reclassificada; tentativa V2 criada para nova revisao humana.  
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

## Objetivo Artistico

Testar uma primeira rota real de geracao de caminhada experimental do SGT Antonio Rafael usando Codex `/image`, com prompt controlado e foco em uma unica direcao:

```txt
front_right
```

O objetivo desta rodada nao e aprovar animacao final, mas descobrir se a geracao por imagem consegue produzir uma spritesheet com identidade consistente e leitura real de caminhada melhor que as tentativas antigas reprovadas. A V1 tentou 4 frames; a V2 passou a testar 8 frames por decisao humana apos a comparacao visual.

Depois da validacao humana da tentativa V1, o criterio foi ajustado: a V1 ficou boa como referencia visual/anchor experimental, mas fraca como ciclo de caminhada. A rodada V2 usa 8 frames para buscar progressao mecanica mais clara.

## Referencia Conceitual

A feature adaptou de forma conceitual a logica do repositorio:

```txt
https://github.com/chongdashu/ai-game-spritesheets
```

O aprendizado usado foi apenas de processo:

- prompt controlado;
- identidade travada;
- anchor tecnico;
- neutral reset;
- spritesheet tecnica;
- revisao visual antes de integrar;
- normalizacao posterior apenas quando o resultado justificar.

Nenhum prompt de terceiro foi copiado literalmente como produto final do projeto.

## Ordem Adaptada De Prompts

```txt
01_unfallen_identity_reference
02_front_right_anchor
03_front_right_neutral_reset
04_front_right_walk_codex_image
05_front_right_walk_validation
06_normalization_notes
07_front_right_walk_codex_image_prompt_v2
```

Arquivos criados:

```txt
res://assets/characters/antonio_rafael/walk_lab/prompts/01_unfallen_identity_reference_prompt_v1.md
res://assets/characters/antonio_rafael/walk_lab/prompts/02_front_right_anchor_codex_image_prompt_v1.md
res://assets/characters/antonio_rafael/walk_lab/prompts/03_front_right_neutral_reset_prompt_v1.md
res://assets/characters/antonio_rafael/walk_lab/prompts/04_front_right_walk_codex_image_prompt_v1.md
res://assets/characters/antonio_rafael/walk_lab/prompts/05_front_right_walk_validation_prompt_v1.md
res://assets/characters/antonio_rafael/walk_lab/prompts/06_walk_normalization_notes_v1.md
res://assets/characters/antonio_rafael/walk_lab/prompts/07_front_right_walk_codex_image_prompt_v2.md
res://assets/characters/antonio_rafael/walk_lab/prompts/front_right_walk_codex_image_prompt_v1.md
```

## Identidade Visual Esperada

A tentativa deve preservar:

- SGT Antonio Rafael;
- Policial Militar de Goias;
- pele morena clara;
- cabelo escuro curto militar;
- oculos retangulares;
- rosto bem cuidado;
- fisico atletico realista;
- colete policial/tatico;
- mochila tatica;
- uniforme cinza, preto e grafite;
- patch de Goias quando visivel;
- divisa de sargento quando visivel;
- postura humana, preparada e nao heroica exagerada.

## Tentativas Geradas

### Anchor tecnico

```txt
res://assets/characters/antonio_rafael/walk_lab/source/front_right_anchor_codex_image_attempt_v1.png
```

Resultado observado:

- personagem reconhecivel como policial militar/tatico;
- oculos visiveis;
- colete, mochila e patch legiveis;
- direcao aproximada `front_right`;
- fundo magenta removivel, nao transparencia nativa;
- material util como referencia de laboratorio, nao como asset oficial.

### Spritesheet experimental front_right

```txt
res://assets/characters/antonio_rafael/walk_lab/source/front_right_walk_codex_image_attempt_v1.png
```

Resultado observado:

- spritesheet horizontal com 4 frames separados;
- direcao visual `front_right`;
- movimento de pernas perceptivel;
- balanco de bracos perceptivel;
- colete e mochila permanecem consistentes;
- oculos e rosto permanecem coerentes;
- fundo magenta removivel, nao transparencia nativa;
- escala dos frames e mais consistente que tentativas antigas de walk reprovadas;
- ainda precisa validacao humana antes de qualquer continuidade;
- depois da validacao humana, nao foi aprovada como walk candidate.

Classificacao corrigida:

```txt
needs_new_prompt_round
```

Motivo:

- frames V1 parecem variacoes de pose, nao ciclo mecanico forte;
- falta contato/passing/contato oposto com leitura clara;
- alternancia de bracos e pes ainda e fraca para gameplay;
- personagem ficou barbado demais para a ficha oficial;
- source veio com fundo magenta/chroma, nao transparencia real;
- nao deve ser normalizado para runtime nem promovido a sprite oficial.

Uso permitido:

```txt
referencia visual/anchor experimental
```

Uso proibido:

```txt
walk cycle candidate
walk oficial
integracao no Player
normalizacao para runtime
```

### Spritesheet experimental front_right V2

Prompt V2:

```txt
res://assets/characters/antonio_rafael/walk_lab/prompts/07_front_right_walk_codex_image_prompt_v2.md
```

Source V2:

```txt
res://assets/characters/antonio_rafael/walk_lab/source/front_right_walk_codex_image_attempt_v2.png
```

Resultado observado:

- spritesheet horizontal com 8 frames separados;
- direcao visual `front_right`;
- progressao de passada mais clara que a V1;
- pes mudam de posicao de forma mais legivel entre frames;
- bracos alternam melhor em relacao as pernas;
- colete, uniforme, mochila e patch permanecem coerentes;
- oculos permanecem visiveis;
- ainda ha barba mais marcada do que a ficha ideal e isso precisa validacao humana;
- source ainda usa fundo chroma/margens removiveis, nao alpha nativo;
- resultado continua experimental e nao oficial.

## Preview E Frames De Laboratorio

Preview/contact sheet:

```txt
res://assets/characters/antonio_rafael/walk_lab/previews/front_right_walk_codex_image_attempt_v1_preview.png
res://assets/characters/antonio_rafael/walk_lab/previews/front_right_walk_codex_image_attempt_v2_preview.png
```

Frames experimentais extraidos por corte simples e remocao basica do fundo magenta:

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

Esses frames sao apenas laboratorio. Eles nao sao sprites oficiais, nao estao integrados ao Godot Player e nao devem ser tratados como walk cycle aprovado.

## Avaliacao Visual V1 Corrigida

Pontos positivos da V1:

- identidade geral do Antonio Rafael reconhecivel;
- leitura de policial militar/tatico coerente;
- oculos, colete, mochila e patch aparecem;
- quatro frames separados;
- pernas alternam de forma visivel;
- bracos alternam de forma visivel;
- nao ha texto, labels, nomes aleatorios ou cenario misturado;
- nao ha Policia Civil ou Sargento Silva.

Limitacoes da V1:

- nao demonstrou progressao mecanica suficientemente forte;
- contato, passing e contato oposto nao ficaram claros;
- os frames ficaram parecidos demais para leitura de gameplay;
- a barba ficou mais cheia do que a ficha oficial pede;
- ainda precisa validacao humana ao vivo;
- fundo original veio em chroma magenta, nao alpha nativo;
- os frames extraidos sao normalizacao leve de laboratorio;
- o estilo gerado e mais ilustrado/HD que a Base Idle Oficial V1 e pode exigir ajuste de escala/linguagem;
- o ciclo ainda nao foi testado no Godot;
- nao ha garantia de loop perfeito;
- nao ha aprovacao como walk oficial.

## Avaliacao Visual V2

Pontos positivos:

- 8 frames em vez de 4, permitindo leitura melhor de progressao;
- separacao de frames mais clara;
- passada mais visivel;
- bracos e pernas alternam melhor;
- personagem permanece reconhecivel como Antonio Rafael;
- colete, uniforme, mochila, oculos e patch continuam legiveis;
- nao ha texto, labels, nomes aleatorios, Policia Civil ou Sargento Silva.

Limitacoes:

- ainda precisa validacao humana;
- ainda nao foi testada como loop animado no Godot;
- source V2 tambem veio com fundo chroma/margens removiveis, nao transparencia nativa;
- barba/rosto ainda podem precisar ajuste para ficar mais proximo da ficha oficial;
- frames V2 extraidos sao normalizacao leve de laboratorio;
- nao ha aprovacao como walk oficial.

## Teste Tecnico Externo 20F

Foi criado um teste tecnico isolado usando uma spritesheet externa fornecida pelo usuario:

```txt
C:\Users\Antonio Rafael\OneDrive\Desktop\spritesheets\walking left to right.png
```

Arquivo copiado:

```txt
res://assets/characters/antonio_rafael/walk_lab/source/walking_left_to_right_20f.png
```

O teste recortou 20 frames em direcao `left_to_right` / `right-facing`, preservando o fundo magenta, e criou uma cena experimental isolada:

```txt
res://scenes/test/WalkSheet20FrameTest.tscn
```

Esse material nao substitui a Base Idle Oficial V1, nao e walk cycle oficial e nao foi integrado ao Player. Ele serve apenas como comparacao tecnica de movimento porque a caminhada apresenta progressao mais clara que as tentativas V1/V2 geradas diretamente no Codex Image Walk Lab.

## Teste Tecnico Externo Left-Facing 24F

Foi criado um teste tecnico isolado usando uma spritesheet externa complementar:

```txt
C:\Users\Antonio Rafael\OneDrive\Desktop\spritesheets\walking right to left.png
```

Arquivo copiado:

```txt
res://assets/characters/antonio_rafael/walk_lab/source/walking_right_to_left_20f.png
```

A sheet foi detectada como uma grade `5x5` com uma celula vazia, totalizando 24 frames visiveis em direcao `right_to_left` / `left-facing`.

Cena experimental isolada:

```txt
res://scenes/test/WalkSheetLeft20FrameTest.tscn
```

Esse material complementa o teste `right-facing` anterior. Diferente do teste anterior, que fechou o loop com 20 frames extraidos mais 4 copias, este teste usa 24 frames reais da propria spritesheet.

Status:

```txt
technical_test_created
```

Uso proibido:

```txt
walk oficial
animacao oficial
Player runtime
gameplay
substituicao da Base Idle Oficial V1
```

## Decisao Humana

```txt
Status humano: pendente
Classificacao V1 corrigida: needs_new_prompt_round
Classificacao V2 tecnica: candidate_for_human_review
```

A recomendacao tecnica e revisar visualmente a V2 como nova tentativa experimental. Mesmo se a V2 for aceita para continuar, ela ainda nao deve ser integrada ao Player nem promovida a walk cycle oficial sem feature separada.

## Proximos Ajustes De Prompt

Sugestoes para proxima rodada:

1. pedir sprite mais proximo da proporcao da Base Idle Oficial V1;
2. reforcar "less illustrated, closer to existing approved game sprite";
3. reforcar que a mochila deve ficar menor e mais proxima da silhueta original;
4. pedir separacao de celulas mais regular;
5. testar se o fundo transparente nativo e possivel em outra rota;
6. validar o loop em GIF antes de pensar em Godot.

## Confirmacoes De Escopo

- Nenhum Player foi alterado.
- Nenhum sprite idle aprovado foi alterado.
- Nenhum arquivo do rig oficial foi alterado.
- Nenhuma cena de rig foi alterada.
- Nenhum script foi alterado.
- Nenhum `.uid` foi alterado.
- `.gitignore` nao foi alterado.
- Nenhum walk cycle oficial foi criado.
- Nenhuma animacao oficial foi criada.
- Nenhum gameplay foi criado.
## Feature 018 — Walk Cycle Lateral Normalization V1

A feature 018 normalizou, em pasta separada, os testes laterais `right_20f` e `left_20f` para comparacao tecnica. O resultado permanece experimental, nao e walk oficial e nao foi integrado ao Player.
