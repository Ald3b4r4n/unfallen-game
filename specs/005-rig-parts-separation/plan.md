# Implementation Plan: Separacao de Partes do Rig Tecnico 2D do SGT Antonio Rafael

**Branch**: `005-rig-parts-separation` | **Date**: 2026-06-19 | **Spec**: [spec.md](file:///d:/Projetos/Unfallen/specs/005-rig-parts-separation/spec.md)
**Input**: Feature specification from `/specs/005-rig-parts-separation/spec.md`

## Summary

Planejar a separacao do SGT Antonio Rafael em partes visuais controlaveis para uso futuro no rig tecnico 2D. A feature usa a **Base Idle Oficial V1** como referencia visual mestre, prioriza uma primeira direcao principal (`front_right`) para validar fidelidade e encaixe, cria um manifesto tecnico de partes e um preview humano de recomposicao. Esta etapa nao cria animacao final, nao gera walk cycle, nao integra nada ao Player e nao altera gameplay.

## Technical Context

**Language/Version**: GDScript / Godot 4.6 Standard  
**Primary Dependencies**: Godot 4.6 Standard, PNG `RGBA`, pipeline local de edicao/validacao de imagem, cena tecnica `AntonioRafaelRigLab.tscn`  
**Storage**: PNGs de partes em `res://assets/characters/antonio_rafael/rig/parts/`, manifesto `parts_manifest.json`, previews em `rig/previews/`, documentacao em `docs/technical/` e `docs/art/`  
**Testing**: Validacao tecnica de arquivos PNG/alpha, revisao visual de preview, validacao estatica da cena de laboratorio e confirmacao de que o Player oficial nao foi alterado  
**Target Platform**: Desktop (Windows/Linux/macOS)  
**Project Type**: Jogo 2D isometrico em Pixel Art HD  
**Performance Goals**: Sem impacto em runtime; assets de producao devem permitir revisao visual rapida e futura exportacao consistente de sprites `128x128`  
**Constraints**: Base Idle Oficial V1 intacta; partes PNG `RGBA` com transparencia real; sem labels nos PNGs individuais; sem fundo verde; sem Player runtime por rig; sem walk cycle final; gate humano antes de animacao  
**Scale/Scope**: Preparacao de partes visuais para rig tecnico isolado do protagonista; sem sistemas de gameplay e sem expansao para mundo, combate, HUD ou inventario

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Spec First, Implementacao Depois**: A especificacao existe em `specs/005-rig-parts-separation/spec.md`; esta etapa e apenas planejamento.
- [x] **Gate Humano Obrigatorio**: O plano termina com gate humano antes de gerar partes, alterar cena, integrar animacao, commit ou push.
- [x] **Character First**: O trabalho permanece focado no protagonista SGT Antonio Rafael e nao expande para mundo, combate, inimigos ou HUD.
- [x] **Pixel Art HD Consistente**: O plano exige PNG `RGBA`, transparencia real, escala/paleta da Base Idle Oficial V1 e validacao de preview.
- [x] **Engine e Tecnologia**: Godot 4.6 Standard e GDScript permanecem como base tecnica; o Player final continua com sprites finais, nao rig em runtime.

## Project Structure

### Documentation (this feature)

```text
specs/005-rig-parts-separation/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── checklists/
│   └── requirements.md
└── tasks.md                 # Criado somente por /speckit-tasks
```

### Planned Asset/Source Layout

```text
res://
├── assets/
│   └── characters/
│       └── antonio_rafael/
│           ├── sprites/
│           │   └── idle/                         # Base Idle Oficial V1 aprovada, somente leitura
│           └── rig/
│               ├── parts_manifest.json
│               ├── parts/
│               │   ├── front_right/              # Direcao primaria desta feature
│               │   │   ├── head.png
│               │   │   ├── neck.png
│               │   │   ├── torso_base.png
│               │   │   ├── vest.png
│               │   │   ├── backpack.png
│               │   │   ├── upper_arm_left.png
│               │   │   ├── upper_arm_right.png
│               │   │   ├── forearm_left.png
│               │   │   ├── forearm_right.png
│               │   │   ├── hand_left.png
│               │   │   ├── hand_right.png
│               │   │   ├── pelvis.png
│               │   │   ├── thigh_left.png
│               │   │   ├── thigh_right.png
│               │   │   ├── shin_left.png
│               │   │   ├── shin_right.png
│               │   │   ├── boot_left.png
│               │   │   └── boot_right.png
│               │   └── front/                    # Preparada somente se a implementacao precisar comparar/recompor frente
│               ├── assembled/
│               ├── exports/
│               └── previews/
│                   └── antonio_rafael_rig_parts_preview.png
├── scenes/
│   └── rig/
│       └── AntonioRafaelRigLab.tscn
└── docs/
    ├── art/
    │   ├── antonio-rafael.md
    │   └── asset-sources.md
    └── technical/
        ├── rig-pipeline.md
        ├── rig-parts-separation.md
        └── character-pipeline.md
```

**Structure Decision**: Usar `front_right` como direcao primaria da primeira separacao porque preserva rosto/oculos e oferece leitura lateral suficiente para colete, mochila e membros. `front` pode ser preparado como apoio visual, mas a feature nao promete separacao perfeita das 8 direcoes. O Player oficial em `res://scenes/player/Player.tscn` fica fora do escopo.

## Proposed Technical Design

### Direcao Primaria

- Direcao principal planejada: `front_right`.
- Referencia principal: `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`.
- Referencias auxiliares permitidas: os demais 7 idles aprovados, apenas para entender detalhes ocultos, preservar identidade e documentar limitacoes.

### Partes Planejadas

Criar partes obrigatorias quando visiveis/recuperaveis com fidelidade:

- `head.png`
- `neck.png`
- `torso_base.png`
- `vest.png`
- `backpack.png`
- `upper_arm_left.png`
- `upper_arm_right.png`
- `forearm_left.png`
- `forearm_right.png`
- `hand_left.png`
- `hand_right.png`
- `pelvis.png`
- `thigh_left.png`
- `thigh_right.png`
- `shin_left.png`
- `shin_right.png`
- `boot_left.png`
- `boot_right.png`

Partes opcionais, separadas apenas se melhorarem a leitura sem fragilizar o rig:

- `glasses.png`
- `radio.png`
- `belt.png`
- `holster.png`
- `goias_patch.png`
- `sergeant_chevron.png`

### Manifesto Tecnico

Planejar `res://assets/characters/antonio_rafael/rig/parts_manifest.json` com um item por parte:

```json
{
  "name": "upper_arm_right",
  "path": "res://assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_right.png",
  "source_direction": "front_right",
  "source_reference": "res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png",
  "size": { "width": 0, "height": 0 },
  "pivot": { "x": 0, "y": 0, "anchor": "shoulder" },
  "usage_note": "Upper arm rotates from shoulder and overlaps torso/vest.",
  "visual_dependency": ["vest", "forearm_right"],
  "status": "draft"
}
```

O manifesto tambem deve registrar:

- direcao primaria;
- data da separacao;
- status geral (`draft`, `pending_human_validation`, `approved`, `rejected`);
- lista de referencias idle usadas;
- limitacoes visuais conhecidas.

### Estrategia de Pivos

Registrar pivos sugeridos no manifesto e na documentacao:

- cabeca: base do pescoco;
- pescoco: centro inferior;
- tronco/colete: centro superior do torso;
- mochila: centro de fixacao nas costas;
- braco superior: ombro;
- antebraco: cotovelo;
- mao: punho;
- quadril/pelvis: centro do quadril;
- coxa: quadril;
- canela/perna: joelho;
- bota: tornozelo.

Os pivos devem ser documentados como coordenadas relativas ao canvas de cada parte para evitar ambiguidade na futura montagem.

### Preview Humano

Planejar `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png`.

O preview deve conter:

- grade das partes separadas;
- recomposicao aproximada da pose original;
- referencia visual da Base Idle Oficial V1;
- labels apenas no preview, nunca dentro dos PNGs individuais.

### Laboratorio de Rig

Planejar atualizar ou usar `res://scenes/rig/AntonioRafaelRigLab.tscn` apenas como laboratorio isolado para:

- exibir referencia da Base Idle Oficial V1;
- posicionar partes separadas;
- visualizar pivos;
- testar recomposicao idle;
- manter espaco futuro para `Skeleton2D`/`Bone2D`.

Essa cena nao substitui `res://scenes/player/Player.tscn`.

## Planned File Scope

Arquivos planejados para alteracao futura:

```text
res://scenes/rig/AntonioRafaelRigLab.tscn
res://docs/technical/rig-pipeline.md
res://docs/technical/rig-parts-separation.md
res://docs/technical/character-pipeline.md
res://docs/art/antonio-rafael.md
res://docs/art/asset-sources.md
specs/005-rig-parts-separation/plan.md
specs/005-rig-parts-separation/tasks.md
```

Arquivos planejados para criacao futura:

```text
res://assets/characters/antonio_rafael/rig/parts_manifest.json
res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png
res://assets/characters/antonio_rafael/rig/parts/front_right/*.png
res://assets/characters/antonio_rafael/rig/assembled/
```

Arquivos explicitamente fora do escopo:

```text
res://scenes/player/Player.tscn
res://scripts/player/player_controller.gd
res://scripts/player/player_animation_controller.gd
res://assets/characters/antonio_rafael/sprites/idle/*.png
```

## Validation Plan

Validacoes obrigatorias para a implementacao futura:

1. Base Idle Oficial V1 continua intacta.
2. Nenhum sprite idle aprovado foi alterado.
3. As partes obrigatorias existem ou possuem limitacao registrada quando a fonte aprovada nao permite separacao fiel.
4. Todas as partes criadas sao PNG `RGBA`.
5. Todas as partes possuem transparencia real.
6. Nenhuma parte possui fundo verde opaco.
7. Nenhuma parte individual possui label, texto externo, direcao escrita ou grid.
8. As partes preservam identidade visual do SGT Antonio Rafael.
9. Rosto, oculos, cabelo, pele, uniforme, colete, mochila, paleta e proporcao permanecem coerentes com a Base Idle Oficial V1.
10. Patch de Goias e divisa de sargento sao preservados quando visiveis e quando a separacao nao prejudicar fidelidade.
11. A recomposicao aproximada da pose original e possivel.
12. Preview humano foi criado.
13. `parts_manifest.json` foi criado.
14. Pivos foram documentados para cada parte.
15. `AntonioRafaelRigLab.tscn` permanece isolada.
16. `Player.tscn` nao foi alterado.
17. Scripts do Player nao foram alterados.
18. Nenhum sistema de gameplay foi criado ou alterado.

## Proibicoes Tecnicas

Nao planejar nesta feature:

- walk cycle final;
- 32 frames de caminhada;
- integracao no Player;
- alteracao de gameplay;
- alteracao de movimento;
- combate;
- armas funcionais;
- zumbis;
- inventario;
- HUD;
- save/load;
- mundo aberto;
- cenario definitivo;
- cutscene;
- narrativa;
- som;
- musica;
- publicacao;
- exportacao final.

## Complexity Tracking

Nenhuma violacao constitucional planejada. A feature cria assets tecnicos de producao do protagonista, preserva o Player oficial e inclui gate humano antes de qualquer animacao ou integracao.

## Phase 0 Output

Research decisions documented in [research.md](file:///d:/Projetos/Unfallen/specs/005-rig-parts-separation/research.md).

## Phase 1 Output

Design artifacts:

- [data-model.md](file:///d:/Projetos/Unfallen/specs/005-rig-parts-separation/data-model.md)
- [quickstart.md](file:///d:/Projetos/Unfallen/specs/005-rig-parts-separation/quickstart.md)

No external contracts are required because this feature does not expose public APIs, endpoints, command interfaces, or save data contracts.

## Post-Design Constitution Check

- [x] **Spec First, Implementacao Depois**: Plano e artefatos de design foram gerados apos a spec.
- [x] **Gate Humano Obrigatorio**: Implementacao futura deve parar antes de gerar/validar partes como aprovadas e antes de qualquer commit/push.
- [x] **Character First**: O foco continua no protagonista e na preparacao do rig do personagem.
- [x] **Pixel Art HD Consistente**: Plano fixa PNG `RGBA`, transparencia, paleta/escala da Base Idle Oficial V1 e preview humano.
- [x] **Engine e Tecnologia**: Godot 4.6 Standard/GDScript mantidos; rig e laboratorio sao ferramentas isoladas de producao.

## Gate Humano

Este plano nao autoriza implementacao. A feature deve parar apos `/speckit.plan` e aguardar aprovacao humana antes de:

- gerar partes PNG;
- alterar `AntonioRafaelRigLab.tscn`;
- criar `parts_manifest.json`;
- criar previews;
- executar `/speckit.tasks`;
- fazer commit;
- fazer push.
