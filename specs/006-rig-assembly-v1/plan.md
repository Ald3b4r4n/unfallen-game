# Implementation Plan: Rig Assembly V1 do SGT Antonio Rafael

**Branch**: `006-rig-assembly-v1` | **Date**: 2026-06-19 | **Spec**: [spec.md](file:///d:/Projetos/Unfallen/specs/006-rig-assembly-v1/spec.md)
**Input**: Feature specification from `/specs/006-rig-assembly-v1/spec.md`

## Summary

Planejar a montagem tecnica da primeira versao funcional do rig 2D do SGT Antonio Rafael usando a Rig Parts Separation V1 aprovada parcialmente. A feature deve atualizar apenas o laboratorio isolado, criar um manifesto de montagem, gerar um preview comparativo e documentar pivos, hierarquia, recomposicao e limitacoes. Ela nao cria walk cycle, nao cria animacao oficial, nao integra rig no Player e nao altera gameplay.

## Technical Context

**Language/Version**: GDScript / Godot 4.6 Standard  
**Primary Dependencies**: Godot 4.6 Standard, `Node2D`, `Sprite2D`, `Marker2D`, uso opcional de `Skeleton2D`/`Bone2D` apenas no laboratorio, PNG `RGBA`, `parts_manifest.json`, cena `AntonioRafaelRigLab.tscn`  
**Storage**: Manifesto de montagem em `res://assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`, preview em `res://assets/characters/antonio_rafael/rig/previews/`, documentacao em `docs/technical/` e `docs/art/`  
**Testing**: Validacao estatica de paths/manifestos/cena, validacao visual do preview, validacao de isolamento do Player, validacao de integridade dos idles e, se Godot estiver disponivel, abertura visual de `AntonioRafaelRigLab.tscn`  
**Target Platform**: Desktop (Windows/Linux/macOS)  
**Project Type**: Jogo 2D isometrico em Pixel Art HD  
**Performance Goals**: Sem impacto em runtime; laboratorio deve abrir de forma leve para revisao tecnica e visual  
**Constraints**: Base Idle Oficial V1 intacta; Rig Parts Separation V1 como entrada; montagem somente `front_right`; sem runtime por rig; sem walk cycle; sem animacao oficial; sem alteracao de `Player.tscn` ou scripts do Player; gate humano antes de qualquer animacao  
**Scale/Scope**: Montagem tecnica isolada do protagonista em laboratorio; sem expansao para mundo, combate, HUD, inventario, som, narrativa ou sistemas de gameplay

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Spec First, Implementacao Depois**: A especificacao existe em `specs/006-rig-assembly-v1/spec.md`; esta etapa e apenas planejamento.
- [x] **Gate Humano Obrigatorio**: O plano termina com gate humano antes de montar rig, alterar cena, gerar preview, criar manifesto, animar, commitar ou dar push.
- [x] **Character First**: O trabalho permanece focado no protagonista SGT Antonio Rafael e nao expande para mundo, combate, inimigos, inventario ou HUD.
- [x] **Pixel Art HD Consistente**: O plano preserva a Base Idle Oficial V1, partes PNG `RGBA`, escala `128x128`, transparencia e leitura visual do personagem.
- [x] **Engine e Tecnologia**: Godot 4.6 Standard e GDScript permanecem como base; `Skeleton2D`/`Bone2D` sao permitidos somente como ferramenta tecnica de laboratorio.

## Project Structure

### Documentation (this feature)

```text
specs/006-rig-assembly-v1/
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
│           │   └── idle/                         # Base Idle Oficial V1, somente leitura
│           └── rig/
│               ├── parts_manifest.json           # Entrada tecnica existente
│               ├── rig_assembly_manifest.json    # Criado nesta feature futura
│               ├── parts/
│               │   └── front_right/              # Partes aprovadas parcialmente
│               └── previews/
│                   ├── antonio_rafael_rig_parts_preview.png
│                   └── antonio_rafael_rig_assembly_v1_preview.png
├── scenes/
│   └── rig/
│       └── AntonioRafaelRigLab.tscn
└── docs/
    ├── art/
    │   ├── antonio-rafael.md
    │   └── asset-sources.md
    └── technical/
        ├── rig-assembly-v1.md
        ├── rig-pipeline.md
        ├── rig-parts-separation.md
        └── character-pipeline.md
```

**Structure Decision**: A feature usa `front_right` como unica direcao de montagem porque a separacao V1 foi criada nessa direcao e ja possui pivos sugeridos no manifesto. `AntonioRafaelRigLab.tscn` permanece como laboratorio isolado. `Player.tscn`, scripts do Player e idles aprovados ficam fora do escopo e devem ser protegidos por validacao de hash/status.

## Proposed Technical Design

### Entradas Obrigatorias

- Referencia mestre: `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`.
- Partes: `res://assets/characters/antonio_rafael/rig/parts/front_right/`.
- Manifesto de partes: `res://assets/characters/antonio_rafael/rig/parts_manifest.json`.
- Laboratorio: `res://scenes/rig/AntonioRafaelRigLab.tscn`.

### Partes Planejadas Para Montagem

Partes obrigatorias:

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

Partes opcionais viaveis:

- `glasses.png`
- `belt.png`
- `goias_patch.png`
- `sergeant_chevron.png`

Partes rejeitadas que permanecem fora da montagem:

- `radio`
- `holster`

### Hierarquia Planejada

A implementacao futura deve favorecer uma hierarquia clara e animavel:

```text
AntonioRafaelRigLab
├── Reference
│   └── IdleFrontRightReference
├── RigRoot
│   └── Pelvis
│       ├── TorsoBase
│       │   ├── Vest
│       │   ├── Backpack
│       │   ├── Neck
│       │   │   └── Head
│       │   │       └── Glasses
│       │   ├── UpperArmLeft
│       │   │   └── ForearmLeft
│       │   │       └── HandLeft
│       │   └── UpperArmRight
│       │       └── ForearmRight
│       │           └── HandRight
│       ├── ThighLeft
│       │   └── ShinLeft
│       │       └── BootLeft
│       └── ThighRight
│           └── ShinRight
│               └── BootRight
├── PivotMarkers
└── PreviewCamera
```

`Skeleton2D`/`Bone2D` pode existir como referencia tecnica se facilitar leitura de ossos e pivos, mas a montagem principal deve continuar compreensivel por nomes de nodes e sem virar runtime oficial.

### Estrategia de Posicionamento

- Usar o canvas registrado `128x128` das partes como base de alinhamento inicial.
- Converter pivos sugeridos de `parts_manifest.json` em markers/posicoes documentadas.
- Priorizar recomposicao aproximada da pose `front_right`, nao deformacao, nao animacao.
- Manter camadas opcionais pequenas como detalhes dependentes: `glasses` em `Head`, `belt` em `Pelvis`/`TorsoBase`, `goias_patch` em `UpperArmLeft`, `sergeant_chevron` em `UpperArmRight`.
- Registrar qualquer desalinhamento visual no manifesto e na documentacao.

### Pivos Planejados

| Parte | Ancora planejada |
|---|---|
| `head` | base do pescoco |
| `neck` | centro |
| `torso_base` | centro superior do torso |
| `vest` | centro do torso |
| `backpack` | ponto de fixacao nas costas |
| `upper_arm_left` | ombro esquerdo |
| `upper_arm_right` | ombro direito |
| `forearm_left` | cotovelo esquerdo |
| `forearm_right` | cotovelo direito |
| `hand_left` | punho esquerdo |
| `hand_right` | punho direito |
| `pelvis` | centro do quadril |
| `thigh_left` | quadril esquerdo |
| `thigh_right` | quadril direito |
| `shin_left` | joelho esquerdo |
| `shin_right` | joelho direito |
| `boot_left` | tornozelo esquerdo |
| `boot_right` | tornozelo direito |

### Manifesto de Montagem

Planejar `res://assets/characters/antonio_rafael/rig/rig_assembly_manifest.json` com status geral `pending_human_validation` e uma entrada por parte montada:

```json
{
  "name": "upper_arm_right",
  "asset_path": "res://assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_right.png",
  "scene_node": "RigRoot/Pelvis/TorsoBase/UpperArmRight",
  "local_position": { "x": 0, "y": 0 },
  "pivot": { "x": 80, "y": 45, "anchor": "ombro direito" },
  "rotation_degrees": 0,
  "scale": { "x": 1, "y": 1 },
  "status": "assembled",
  "refinement_note": "Uses pivot from parts_manifest.json; review shoulder overlap before animation."
}
```

Status permitidos:

- `assembled`
- `needs_position_refinement`
- `needs_pivot_refinement`
- `needs_art_refinement`
- `placeholder_only`
- `rejected`

### Preview Humano

Planejar `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png`.

O preview deve conter:

- referencia idle `front_right`;
- rig montado;
- comparacao visual entre referencia e recomposicao;
- pivos/markers;
- indicacao visual ou legenda externa das limitacoes.

Labels sao permitidos no preview, mas nao devem alterar os PNGs individuais das partes.

## Planned File Scope

Arquivos planejados para alteracao futura:

```text
res://scenes/rig/AntonioRafaelRigLab.tscn
res://assets/characters/antonio_rafael/rig/rig_assembly_manifest.json
res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png
res://docs/technical/rig-assembly-v1.md
res://docs/technical/rig-pipeline.md
res://docs/technical/rig-parts-separation.md
res://docs/technical/character-pipeline.md
res://docs/art/antonio-rafael.md
res://docs/art/asset-sources.md
specs/006-rig-assembly-v1/plan.md
specs/006-rig-assembly-v1/tasks.md
```

Arquivos explicitamente fora do escopo:

```text
res://scenes/player/Player.tscn
res://scripts/player/player_controller.gd
res://scripts/player/player_animation_controller.gd
res://assets/characters/antonio_rafael/sprites/idle/
```

Se a implementacao futura exigir qualquer outro arquivo, ela deve parar e pedir aprovacao humana antes de editar.

## Validation Plan

Validacoes obrigatorias para a implementacao futura:

1. Base Idle Oficial V1 continua intacta.
2. Nenhum sprite idle aprovado foi alterado.
3. Player oficial nao foi alterado.
4. Scripts do Player nao foram alterados.
5. As partes obrigatorias do rig existem.
6. `parts_manifest.json` existe e e parseavel.
7. `rig_assembly_manifest.json` existe e e parseavel.
8. `AntonioRafaelRigLab.tscn` permanece isolada.
9. Cena de rig referencia apenas assets do rig, scripts de laboratorio e referencia idle.
10. A recomposicao visual e possivel.
11. Pivos estao representados ou documentados.
12. Preview de montagem foi criado.
13. Limitacoes herdadas e novas foram registradas.
14. `radio` e `holster` permanecem rejeitados se nao houver nova decisao humana.
15. Nenhum walk cycle foi criado.
16. Nenhuma animacao oficial foi criada.
17. Nenhum sistema de gameplay foi alterado.
18. Se Godot 4.6 estiver disponivel, abrir `AntonioRafaelRigLab.tscn` para validacao visual; se nao estiver, registrar validacao estatica.

## Proibicoes Tecnicas

Nao planejar ou executar nesta feature:

- walk cycle final;
- 32 frames de caminhada;
- corrida;
- combate;
- arma funcional;
- zumbis;
- inventario;
- HUD;
- save/load;
- alteracao de movimento;
- integracao no Player;
- exportacao final para gameplay;
- animacao oficial;
- cenario definitivo;
- narrativa;
- som;
- musica;
- publicacao;
- push automatico.

## Complexity Tracking

Nenhuma violacao constitucional planejada. A feature altera apenas laboratorio e artefatos tecnicos de producao, preserva o Player oficial, preserva idles aprovados e inclui gate humano antes de qualquer animacao ou integracao.

## Phase 0 Output

Research decisions documented in [research.md](file:///d:/Projetos/Unfallen/specs/006-rig-assembly-v1/research.md).

## Phase 1 Output

Design artifacts:

- [data-model.md](file:///d:/Projetos/Unfallen/specs/006-rig-assembly-v1/data-model.md)
- [quickstart.md](file:///d:/Projetos/Unfallen/specs/006-rig-assembly-v1/quickstart.md)

No external contracts are required because this feature does not expose public APIs, endpoints, command interfaces, save data contracts, or gameplay-facing interfaces.

## Post-Design Constitution Check

- [x] **Spec First, Implementacao Depois**: Plano e artefatos de design foram gerados apos a spec.
- [x] **Gate Humano Obrigatorio**: Implementacao futura deve parar antes de montar rig como aprovado, animar, integrar no Player, commitar ou dar push.
- [x] **Character First**: O foco continua no protagonista e na preparacao tecnica para animacoes reais do personagem.
- [x] **Pixel Art HD Consistente**: Plano preserva PNG `RGBA`, escala `128x128`, paleta/escala da Base Idle Oficial V1 e preview humano.
- [x] **Engine e Tecnologia**: Godot 4.6 Standard/GDScript mantidos; rig e laboratorio sao ferramentas isoladas de producao.

## Gate Humano

Este plano nao autoriza implementacao. A feature deve parar apos `/speckit.plan` e aguardar aprovacao humana antes de:

- montar rig;
- alterar `AntonioRafaelRigLab.tscn`;
- criar `rig_assembly_manifest.json`;
- gerar preview;
- atualizar documentacao de execucao;
- executar `/speckit.tasks`;
- fazer commit;
- fazer push.
