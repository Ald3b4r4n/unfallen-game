# Implementation Plan: Rig Refinement V1 do SGT Antonio Rafael

**Branch**: `007-rig-refinement-v1` | **Date**: 2026-06-19 | **Spec**: [spec.md](file:///d:/Projetos/Unfallen/specs/007-rig-refinement-v1/spec.md)
**Input**: Feature specification from `/specs/007-rig-refinement-v1/spec.md`

## Summary

Planejar o refinamento manual e nao destrutivo das partes criticas do rig tecnico 2D do SGT Antonio Rafael antes de qualquer tentativa de animacao, walk cycle ou integracao no Player. A feature deve preservar a Base Idle Oficial V1, criar rastreabilidade das partes atuais, refinar `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron`, atualizar manifestos, planejar preview comparativo e documentar limitacoes restantes. Ela nao cria walk cycle, nao cria animacao oficial, nao altera Player, nao altera sprites idle aprovados e nao altera gameplay.

## Technical Context

**Language/Version**: GDScript / Godot 4.6 Standard  
**Primary Dependencies**: Godot 4.6 Standard, PNG `RGBA`, Base Idle Oficial V1, partes `front_right`, `parts_manifest.json`, `rig_assembly_manifest.json`, cena `AntonioRafaelRigLab.tscn`  
**Storage**: Backups em `res://assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/`, partes refinadas nos PNGs criticos existentes, manifestos JSON em `res://assets/characters/antonio_rafael/rig/`, preview em `res://assets/characters/antonio_rafael/rig/previews/`, documentacao em `docs/technical/` e `docs/art/`  
**Testing**: Validacao estatica de paths, PNG/RGBA/transparencia, manifestos, escopo de git, isolamento do Player, preview comparativo e, se Godot estiver disponivel, abertura visual de `AntonioRafaelRigLab.tscn`  
**Target Platform**: Desktop (Windows/Linux/macOS)  
**Project Type**: Jogo 2D isometrico em Pixel Art HD  
**Performance Goals**: Sem impacto em runtime; refinamento e artefato de producao/laboratorio  
**Constraints**: Base Idle Oficial V1 intacta; Player e scripts do Player intocados; sem walk cycle; sem animacao oficial; sem alteracao de gameplay; refinamento apenas de seis partes criticas em `front_right`; preservacao de versoes anteriores antes de alterar PNGs; gate humano antes de qualquer animacao ou integracao  
**Scale/Scope**: Refinamento visual/tecnico de seis partes do rig do protagonista, mantendo compatibilidade com a montagem de laboratorio e sem expandir para sistemas de jogo

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Spec First, Implementacao Depois**: A especificacao existe em `specs/007-rig-refinement-v1/spec.md`; esta etapa e apenas planejamento.
- [x] **Gate Humano Obrigatorio**: O plano termina com gate humano antes de refinar PNGs, gerar preview, alterar cena, criar animacao, commitar ou dar push.
- [x] **Character First**: O trabalho permanece focado no protagonista SGT Antonio Rafael e nao expande para mundo, combate, inimigos, inventario ou HUD.
- [x] **Pixel Art HD Consistente**: O plano preserva PNG `RGBA`, transparencia, escala `128x128`, paleta cinza/chumbo/preto e identidade da Base Idle Oficial V1.
- [x] **Engine e Tecnologia**: Godot 4.6 Standard/GDScript continuam como base; o rig permanece ferramenta isolada de producao.

## Project Structure

### Documentation (this feature)

```text
specs/007-rig-refinement-v1/
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
│               ├── parts_manifest.json           # Atualizar status/refinamento das partes
│               ├── rig_assembly_manifest.json    # Atualizar encaixe/pivos/limitacoes
│               ├── parts/
│               │   └── front_right/
│               │       ├── _backup_v1/           # Copias das seis partes antes do refinamento
│               │       ├── neck.png
│               │       ├── torso_base.png
│               │       ├── backpack.png
│               │       ├── pelvis.png
│               │       ├── goias_patch.png
│               │       └── sergeant_chevron.png
│               └── previews/
│                   └── antonio_rafael_rig_refinement_v1_preview.png
├── scenes/
│   └── rig/
│       └── AntonioRafaelRigLab.tscn              # Validar/atualizar apenas como laboratorio
└── docs/
    ├── art/
    │   ├── antonio-rafael.md
    │   └── asset-sources.md
    └── technical/
        ├── rig-refinement-v1.md
        ├── rig-assembly-v1.md
        ├── rig-parts-separation.md
        ├── rig-pipeline.md
        └── character-pipeline.md
```

**Structure Decision**: A feature refina somente as partes criticas da direcao `front_right`, pois essa e a direcao aprovada parcialmente nas features Rig Parts Separation V1 e Rig Assembly V1. O backup local `_backup_v1/` preserva rastreabilidade visual antes/depois. O laboratorio `AntonioRafaelRigLab.tscn` pode refletir as partes refinadas apenas para validacao tecnica, mas permanece isolado do Player.

## Proposed Technical Design

### Entradas Obrigatorias

- Referencia mestre: `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`.
- Partes atuais: `res://assets/characters/antonio_rafael/rig/parts/front_right/`.
- Manifesto de partes: `res://assets/characters/antonio_rafael/rig/parts_manifest.json`.
- Manifesto de montagem: `res://assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`.
- Laboratorio: `res://scenes/rig/AntonioRafaelRigLab.tscn`.

### Partes Criticas Planejadas Para Refinamento

| Parte | Objetivo de refinamento |
|---|---|
| `neck` | Melhorar encaixe entre tronco e cabeca, leitura anatomica, tom de pele, readiness para leve articulacao e reduzir ruido visual. |
| `torso_base` | Melhorar encaixe com colete, pescoco, bracos e quadril; reforcar volume do tronco sob o colete; remover pixels estranhos; preparar oscilacao futura. |
| `backpack` | Melhorar leitura como mochila tatica, encaixe nas costas/lateral, separacao de colete/sombra e volume coerente com a referencia. |
| `pelvis` | Melhorar conexao torso/pernas, leitura como centro do rig e compatibilidade com futura caminhada mantendo pose `front_right`. |
| `goias_patch` | Melhorar como detalhe simbolico de Goias/PMGO sem texto ilegivel, label externo ou poluicao visual. |
| `sergeant_chevron` | Melhorar leitura simbolica da divisa de sargento sem texto, label externo ou excesso de detalhe. |

### Estrategia Nao Destrutiva

1. Antes de qualquer refinamento futuro, copiar as seis partes atuais para `res://assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/`.
2. Registrar em manifesto o caminho original preservado, status anterior, status planejado e observacao de refinamento.
3. Editar apenas os seis PNGs autorizados, mantendo nome e caminho para preservar a montagem existente.
4. Gerar preview comparativo com referencia idle, estado anterior quando disponivel, estado refinado e destaques das seis partes.
5. Parar para validacao humana antes de classificar o refinamento como aprovado ou de iniciar animacao.

### Regras dos PNGs Refinados

- Permanecer PNG `RGBA`.
- Manter fundo transparente.
- Nao conter fundo verde opaco.
- Nao conter labels, texto externo, nomes aleatorios ou texto de direcao.
- Permanecer na direcao `front_right`.
- Preservar escala/proporcao da Base Idle Oficial V1.
- Preservar identidade PMGO/sobrevivente, paleta cinza/chumbo/preto, uniforme, colete, mochila, pele e silhueta geral.
- Usar simbolos simplificados para `goias_patch` e `sergeant_chevron` se detalhe literal prejudicar leitura em `128x128`.

### Manifestos Planejados

Atualizar `parts_manifest.json` para registrar refinamento das seis partes:

```json
{
  "name": "neck",
  "path": "res://assets/characters/antonio_rafael/rig/parts/front_right/neck.png",
  "previous_backup": "res://assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/neck.png",
  "previous_status": "needs_art_refinement",
  "status": "refined_for_rig_v1",
  "refinement_note": "Improved head-to-torso transition and skin-tone continuity.",
  "remaining_limitations": []
}
```

Atualizar `rig_assembly_manifest.json` para refletir impacto na montagem:

```json
{
  "name": "pelvis",
  "asset_path": "res://assets/characters/antonio_rafael/rig/parts/front_right/pelvis.png",
  "scene_node": "RigRoot/Pelvis",
  "pivot": { "anchor": "centro do quadril" },
  "pivot_change": "maintained",
  "status": "needs_minor_adjustment",
  "refinement_note": "Refined silhouette improves torso/legs bridge; validate live in Godot before animation."
}
```

Status permitidos nesta feature:

- `refined_for_rig_v1`
- `needs_minor_adjustment`
- `needs_art_refinement`
- `symbolic_detail`
- `rejected`

### Cena de Laboratorio

Planejar validacao ou atualizacao restrita de `res://scenes/rig/AntonioRafaelRigLab.tscn`:

- Deve continuar sendo laboratorio isolado.
- Pode refletir as partes refinadas por manter os mesmos paths dos PNGs.
- Pode ajustar apenas markers/observacoes se o refinamento exigir pequena revisao de pivo.
- Nao pode instanciar ou substituir `Player.tscn`.
- Nao pode criar animacao, walk cycle, gameplay ou fase.
- Deve continuar usando a referencia `front_right`.

### Preview Humano

Planejar `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png`.

O preview deve conter:

- referencia idle original `front_right`;
- estado anterior da montagem ou partes de `_backup_v1/`, se disponivel;
- estado refinado;
- destaques visuais das seis partes refinadas;
- observacoes externas sobre limitacoes restantes.

Labels sao permitidos no preview para revisao humana. Labels nao sao permitidos nos PNGs individuais.

## Planned File Scope

Arquivos/pastas planejados para criacao ou alteracao futura:

```text
res://assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/
res://assets/characters/antonio_rafael/rig/parts/front_right/neck.png
res://assets/characters/antonio_rafael/rig/parts/front_right/torso_base.png
res://assets/characters/antonio_rafael/rig/parts/front_right/backpack.png
res://assets/characters/antonio_rafael/rig/parts/front_right/pelvis.png
res://assets/characters/antonio_rafael/rig/parts/front_right/goias_patch.png
res://assets/characters/antonio_rafael/rig/parts/front_right/sergeant_chevron.png
res://assets/characters/antonio_rafael/rig/parts_manifest.json
res://assets/characters/antonio_rafael/rig/rig_assembly_manifest.json
res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png
res://scenes/rig/AntonioRafaelRigLab.tscn
res://docs/technical/rig-refinement-v1.md
res://docs/technical/rig-assembly-v1.md
res://docs/technical/rig-parts-separation.md
res://docs/technical/rig-pipeline.md
res://docs/technical/character-pipeline.md
res://docs/art/antonio-rafael.md
res://docs/art/asset-sources.md
specs/007-rig-refinement-v1/plan.md
specs/007-rig-refinement-v1/tasks.md
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
5. Versoes anteriores das seis partes criticas foram preservadas em `_backup_v1/` ou registradas com rastreabilidade equivalente.
6. As seis partes criticas refinadas existem.
7. Partes refinadas sao PNG `RGBA`.
8. Partes refinadas possuem transparencia valida.
9. Partes refinadas nao possuem fundo verde opaco.
10. Partes refinadas nao possuem labels internos.
11. Partes refinadas nao possuem texto externo.
12. Rig recomposto continua coerente com `front_right`.
13. `parts_manifest.json` foi atualizado e permanece parseavel.
14. `rig_assembly_manifest.json` foi atualizado e permanece parseavel.
15. Preview de refinamento foi criado.
16. Limitacoes restantes foram registradas.
17. `goias_patch` e `sergeant_chevron` foram tratados como detalhes simbolicos se a escala nao permitir leitura literal.
18. Nenhum walk cycle foi criado.
19. Nenhuma animacao oficial foi criada.
20. Nenhum sistema de gameplay foi alterado.
21. Se Godot 4.6 estiver disponivel, abrir `AntonioRafaelRigLab.tscn` para validacao visual; se nao estiver, registrar validacao estatica.

## Proibicoes Tecnicas

Nao planejar ou executar nesta feature:

- walk cycle final;
- 32 frames de caminhada;
- animacao oficial;
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
- cenario definitivo;
- narrativa;
- som;
- musica;
- publicacao;
- multiplayer;
- mobile;
- push automatico.

## Complexity Tracking

Nenhuma violacao constitucional planejada. A feature altera apenas artefatos tecnicos de producao, preserva idles aprovados, preserva Player e scripts do Player, registra backup antes de qualquer alteracao visual e inclui gate humano antes de qualquer animacao ou integracao.

## Phase 0 Output

Research decisions documented in [research.md](file:///d:/Projetos/Unfallen/specs/007-rig-refinement-v1/research.md).

## Phase 1 Output

Design artifacts:

- [data-model.md](file:///d:/Projetos/Unfallen/specs/007-rig-refinement-v1/data-model.md)
- [quickstart.md](file:///d:/Projetos/Unfallen/specs/007-rig-refinement-v1/quickstart.md)

No external contracts are required because this feature does not expose public APIs, endpoints, command interfaces, save data contracts, or gameplay-facing interfaces.

## Post-Design Constitution Check

- [x] **Spec First, Implementacao Depois**: Plano e artefatos de design foram gerados apos a spec.
- [x] **Gate Humano Obrigatorio**: Implementacao futura deve parar antes de refinar PNGs, gerar preview, alterar cena, criar animacao, integrar no Player, commitar ou dar push.
- [x] **Character First**: O foco continua no protagonista e na preparacao tecnica para animacoes reais do personagem.
- [x] **Pixel Art HD Consistente**: Plano preserva PNG `RGBA`, transparencia, escala `128x128`, paleta/escala da Base Idle Oficial V1 e preview humano.
- [x] **Engine e Tecnologia**: Godot 4.6 Standard/GDScript mantidos; rig e refinamento sao ferramentas isoladas de producao.

## Gate Humano

Este plano nao autoriza implementacao. A feature deve parar apos `/speckit.plan` e aguardar aprovacao humana antes de:

- copiar backups;
- refinar PNGs;
- atualizar manifestos;
- alterar `AntonioRafaelRigLab.tscn`;
- gerar preview;
- atualizar documentacao de execucao;
- executar `/speckit.tasks`;
- criar animacao;
- criar walk cycle;
- fazer commit;
- fazer push.
