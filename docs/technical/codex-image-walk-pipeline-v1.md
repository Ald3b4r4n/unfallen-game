# Codex Image Walk Pipeline V1

**Feature**: `017-codex-image-walk-lab-v1`  
**Data**: 2026-06-24  
**Status**: pipeline experimental criado; V1 reclassificada e V2 gerada para nova revisao humana.

## Observacao Obrigatoria

```txt
Ainda nao existe walk cycle oficial no projeto.
Esta feature nao cria caminhada oficial.
Esta feature nao integra nada ao Player.
Esta feature nao substitui a Base Idle Oficial V1.
Esta feature cria apenas um laboratorio experimental de geracao e validacao visual.
```

## Objetivo

Definir um pipeline proprio do Unfallen para testar geracao de spritesheet de caminhada via Codex `/image`, sem promover automaticamente qualquer resultado a asset oficial.

## Referencia Conceitual

Foi usado como referencia conceitual o repositorio:

```txt
https://github.com/chongdashu/ai-game-spritesheets
```

Adaptacao para o Unfallen:

- usar prompts extremamente controlados;
- travar identidade do personagem;
- trabalhar com anchor antes do walk;
- gerar spritesheet tecnica, nao arte solta;
- manter restricoes negativas fortes;
- validar visualmente antes de normalizar;
- normalizar somente se houver material valido;
- exigir gate humano antes de qualquer integracao.

Nenhum prompt externo foi copiado literalmente como produto final.

## Ordem Do Pipeline

```txt
01_unfallen_identity_reference
02_front_right_anchor
03_front_right_neutral_reset
04_front_right_walk_codex_image
05_front_right_walk_validation
06_normalization_notes
07_front_right_walk_codex_image_prompt_v2
```

## Estrutura De Pastas

```txt
res://assets/characters/antonio_rafael/walk_lab/
res://assets/characters/antonio_rafael/walk_lab/prompts/
res://assets/characters/antonio_rafael/walk_lab/source/
res://assets/characters/antonio_rafael/walk_lab/exports/
res://assets/characters/antonio_rafael/walk_lab/previews/
res://assets/characters/antonio_rafael/walk_lab/frames/
res://assets/characters/antonio_rafael/walk_lab/frames/front_right/
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/
```

`walk_lab` e uma area experimental ativa. Ela nao e:

- `sprites/idle/`;
- `sprites/walk/` oficial;
- `rig/` oficial;
- `docs/archive/`;
- Player runtime.

## Arquivos Criados

### Prompts

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

### Fonte gerada

```txt
res://assets/characters/antonio_rafael/walk_lab/source/front_right_anchor_codex_image_attempt_v1.png
res://assets/characters/antonio_rafael/walk_lab/source/front_right_walk_codex_image_attempt_v1.png
res://assets/characters/antonio_rafael/walk_lab/source/front_right_walk_codex_image_attempt_v2.png
res://assets/characters/antonio_rafael/walk_lab/source/walking_left_to_right_20f.png
res://assets/characters/antonio_rafael/walk_lab/source/walking_right_to_left_20f.png
```

### Preview

```txt
res://assets/characters/antonio_rafael/walk_lab/previews/front_right_walk_codex_image_attempt_v1_preview.png
res://assets/characters/antonio_rafael/walk_lab/previews/front_right_walk_codex_image_attempt_v2_preview.png
res://assets/characters/antonio_rafael/walk_lab/previews/walking_left_to_right_20f_contact_sheet.png
res://assets/characters/antonio_rafael/walk_lab/previews/walking_right_to_left_20f_contact_sheet.png
```

### Frames experimentais

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
res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_01.png ... frame_24.png
res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_01.png ... frame_24.png
```

## Nomeacao

Padrao usado:

```txt
front_right_anchor_codex_image_attempt_v1.png
front_right_walk_codex_image_attempt_v1.png
front_right_walk_codex_image_attempt_v1_preview.png
frame_01.png
frame_02.png
frame_03.png
frame_04.png
front_right_walk_codex_image_attempt_v2.png
front_right_walk_codex_image_attempt_v2_preview.png
frames/front_right_v2/frame_01.png ... frame_08.png
walking_left_to_right_20f.png
walking_right_to_left_20f.png
walking_right_20f_spriteframes.tres
walking_left_20f_spriteframes.tres
WalkSheet20FrameTest.tscn
WalkSheetLeft20FrameTest.tscn
```

## Diferenca Entre Experimental E Oficial

Experimental:

- pode ter fundo removivel;
- pode precisar normalizacao;
- pode servir para revisao humana;
- pode ser rejeitado;
- pode inspirar proxima rodada.

Oficial:

- exige aprovacao humana explicita;
- exige validacao de loop;
- exige dimensao final controlada;
- exige transparencia real;
- exige consistencia com Base Idle Oficial V1;
- exige integracao posterior separada no Player;
- ainda nao existe.

## Criterios Para Preservar Pixel Art HD

- silhueta clara;
- leitura boa em escala baixa;
- sem borramento excessivo;
- contraste adequado entre uniforme, colete e mochila;
- escala consistente entre frames;
- baseline dos pes coerente;
- ausencia de textos, labels e elementos externos;
- coerencia com o personagem aprovado.

## Normalizacao Feita Nesta Feature

Foi executado apenas corte simples da spritesheet clara em 4 celulas, remocao basica do chroma magenta e reamostragem para canvas `128x128` para avaliacao visual.

Essa normalizacao e considerada leve e experimental.

Depois da reprovacao da classificacao preliminar da V1, foi criada uma rodada V2 com 8 frames. A V2 tambem passou apenas por extracao leve de laboratorio: corte de celulas, remocao de chroma/margens e encaixe em canvas `128x128` para revisao humana.

Nem a V1 nem a V2 devem ser normalizadas para runtime ou promovidas a sprites oficiais nesta feature.

Nao foi feita:

- correcao manual de anatomia;
- redesenho;
- interpolacao;
- invencao de frames;
- integracao no Godot;
- promocao a asset oficial.

## Quando Usar Normalizacao Posterior

Planejar feature separada quando uma tentativa receber aprovacao humana para continuar.

Normalizacao futura deve:

1. separar frames com controle de bounding box;
2. remover fundo e validar alpha;
3. alinhar centro X;
4. alinhar baseline dos pes;
5. padronizar canvas `128x128`;
6. comparar com Base Idle Oficial V1;
7. gerar GIF de loop;
8. validar no Godot;
9. somente depois discutir integracao ao Player.

## Quando Rejeitar A Tentativa

Rejeitar se:

- parecer idle parado;
- tiver frames duplicados;
- mudar o personagem entre frames;
- trocar uniforme, colete ou mochila;
- gerar Policia Civil;
- gerar Sargento Silva;
- gerar texto ou labels;
- gerar cenario;
- deformar muito o corpo;
- nao parecer caminhada;
- fundir frames.

## Rodada V1 Reclassificada

Classificacao:

```txt
needs_new_prompt_round
```

A V1 deve permanecer apenas como referencia visual/anchor experimental. Ela nao e walk candidate, nao deve ser usada no Player, nao deve ser normalizada para runtime e nao deve ser promovida a sprite oficial.

## Rodada V2 Experimental

Classificacao tecnica:

```txt
candidate_for_human_review
```

A V2 melhora a progressao visual ao usar 8 frames e mostrar alternancia mais legivel de pernas e bracos. Ainda assim, ela permanece experimental ate validacao humana e nao cria walk cycle oficial.

## Confirmacoes De Escopo

- Player nao foi alterado.
- `AntonioRafaelRigLab.tscn` nao foi alterada.
- Scripts nao foram alterados.
- Sprites idle aprovados nao foram alterados.
- Rig oficial nao foi alterado.
- `.gitignore` nao foi alterado.
- `.uid` nao foi alterado.
- Nenhum walk cycle oficial foi criado.
- Nenhuma animacao oficial foi criada.
- Nenhum gameplay foi criado.
## Etapa 018 — Normalizacao lateral

A etapa 018 adiciona uma normalizacao lateral comparativa e nao destrutiva para os ciclos `right-facing` e `left-facing`. A etapa cria material experimental de laboratorio, previews e cena isolada, mas nao integra nada ao Player e nao cria animacao oficial.
