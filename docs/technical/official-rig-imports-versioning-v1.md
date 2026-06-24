# Official Rig Imports Versioning V1

**Feature**: `016-rig-imports-versioning-and-articulated-walk-lab-prep-v1`  
**Data da consolidacao**: 2026-06-24  
**Branch**: `016-rig-imports-versioning-and-articulated-walk-lab-prep-v1`  
**Status**: consolidacao tecnica concluida; aguardando gate humano para commit.  
**Escopo**: versionamento explicito dos `.import` oficiais do rig tecnico validado do SGT Antonio Rafael.

## Observacao Obrigatoria

```txt
Ainda nao existe caminhada articulada oficial no projeto.
Esta feature nao cria walk cycle oficial.
Esta feature nao cria animacao oficial.
Esta feature nao integra caminhada ao Player.
Esta feature apenas consolida imports oficiais do rig e prepara a proxima feature de laboratorio.
```

## Objetivo

Consolidar e stagear explicitamente os `.import` oficiais aprovados do rig tecnico, sem versionar `.uid`, sem alterar `.gitignore`, sem alterar PNGs/assets oficiais e sem alterar Player, cenas ou scripts.

Esta feature transforma as recomendacoes documentais das features 014 e 015 em um staged set controlado, usando somente caminhos individuais.

## Relacao Com Features Anteriores

- `012-godot-import-uid-policy-v1`: definiu politica seletiva para `.import` e manteve `.uid` em decisao separada.
- `014-review-official-rig-imports-v1`: revisou 32 official rig imports e recomendou `version_later`.
- `015-review-rig-articulation-preview-import-v1`: revisou 1 import adicional de preview tecnico e recomendou `join_official_rig_imports`.
- `016-rig-imports-versioning-and-articulated-walk-lab-prep-v1`: consolida os 33 imports aprovados para stage explicito.

## Resultado Da Revalidacao

| Metrica | Total |
|---|---:|
| `.import` avaliados | 33 |
| official rig imports revalidados | 32 |
| articulation preview import revalidado | 1 |
| `.import` aprovados para stage explicito | 33 |
| `.import` pendentes ou excluidos | 0 |
| `.uid` stageados | 0 |
| alteracoes em `.gitignore` | 0 |
| PNGs/assets oficiais alterados | 0 |
| Player/cenas/scripts alterados | 0 |

## Criterios Usados

Cada `.import` aprovado cumpriu todos os criterios:

1. esta listado na revisao da feature 014 ou 015;
2. foi recomendado como `version_later` ou `join_official_rig_imports`;
3. esta ligado ao rig tecnico validado ou preview tecnico da Rig Articulation Test V1;
4. o PNG de origem existe;
5. o PNG de origem e rastreado pelo Git ou oficialmente documentado;
6. nao pertence a prototipo rejeitado;
7. nao pertence a `docs/archive/walk-prototypes-v1`;
8. nao e `.uid`;
9. nao exige alteracao de `.gitignore`;
10. foi adicionado por path explicito individual.

## Imports Stageados

### official_rig_imports

| # | Import path | Source PNG | Origem documental | Status | Decisao |
|---:|---|---|---|---|---|
| 1 | `assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png.import` | `assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 2 | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/backpack.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/backpack.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 3 | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/goias_patch.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/goias_patch.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 4 | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/neck.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/neck.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 5 | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/pelvis.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/pelvis.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 6 | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/sergeant_chevron.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/sergeant_chevron.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 7 | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/torso_base.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/torso_base.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 8 | `assets/characters/antonio_rafael/rig/parts/front_right/backpack.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/backpack.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 9 | `assets/characters/antonio_rafael/rig/parts/front_right/belt.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/belt.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 10 | `assets/characters/antonio_rafael/rig/parts/front_right/boot_left.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/boot_left.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 11 | `assets/characters/antonio_rafael/rig/parts/front_right/boot_right.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/boot_right.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 12 | `assets/characters/antonio_rafael/rig/parts/front_right/forearm_left.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/forearm_left.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 13 | `assets/characters/antonio_rafael/rig/parts/front_right/forearm_right.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/forearm_right.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 14 | `assets/characters/antonio_rafael/rig/parts/front_right/glasses.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/glasses.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 15 | `assets/characters/antonio_rafael/rig/parts/front_right/goias_patch.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/goias_patch.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 16 | `assets/characters/antonio_rafael/rig/parts/front_right/hand_left.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/hand_left.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 17 | `assets/characters/antonio_rafael/rig/parts/front_right/hand_right.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/hand_right.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 18 | `assets/characters/antonio_rafael/rig/parts/front_right/head.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/head.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 19 | `assets/characters/antonio_rafael/rig/parts/front_right/neck.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/neck.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 20 | `assets/characters/antonio_rafael/rig/parts/front_right/pelvis.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/pelvis.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 21 | `assets/characters/antonio_rafael/rig/parts/front_right/sergeant_chevron.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/sergeant_chevron.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 22 | `assets/characters/antonio_rafael/rig/parts/front_right/shin_left.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/shin_left.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 23 | `assets/characters/antonio_rafael/rig/parts/front_right/shin_right.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/shin_right.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 24 | `assets/characters/antonio_rafael/rig/parts/front_right/thigh_left.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/thigh_left.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 25 | `assets/characters/antonio_rafael/rig/parts/front_right/thigh_right.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/thigh_right.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 26 | `assets/characters/antonio_rafael/rig/parts/front_right/torso_base.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/torso_base.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 27 | `assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_left.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_left.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 28 | `assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_right.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_right.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 29 | `assets/characters/antonio_rafael/rig/parts/front_right/vest.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/vest.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 30 | `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png.import` | `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 31 | `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png.import` | `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |
| 32 | `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png.import` | `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png` | feature 014 | `version_later_revalidated` | `stage_explicit_path` |

### articulation_preview_import

| # | Import path | Source PNG | Origem documental | Status | Decisao |
|---:|---|---|---|---|---|
| 33 | `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import` | `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png` | feature 015 | `join_official_rig_imports_revalidated` | `stage_explicit_path` |

### excluded_or_pending_imports

Nenhum `.import` candidato ficou pendente ou excluido dentro do conjunto aprovado das features 014 e 015.

Continuam fora do escopo:

- `.import` em `docs/archive/walk-prototypes-v1/files/`;
- `.uid` em `scripts/rig/`;
- specs antigas nao rastreadas;
- manifest antigo fora do escopo;
- assets, cenas, scripts e PNGs oficiais que nao sao os `.import` aprovados.

## Comando De Stage Usado

O stage foi feito por caminhos explicitos individuais, sem glob e sem diretorio inteiro:

```powershell
git add assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/backpack.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/goias_patch.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/neck.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/pelvis.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/sergeant_chevron.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/torso_base.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/backpack.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/belt.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/boot_left.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/boot_right.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/forearm_left.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/forearm_right.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/glasses.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/goias_patch.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/hand_left.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/hand_right.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/head.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/neck.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/pelvis.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/sergeant_chevron.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/shin_left.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/shin_right.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/thigh_left.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/thigh_right.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/torso_base.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_left.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_right.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/vest.png.import `
  assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png.import `
  assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png.import `
  assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png.import `
  assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import
```

## Confirmacoes De Escopo

- Nenhum `.uid` foi stageado.
- `.gitignore` nao foi alterado.
- PNGs/assets oficiais nao foram alterados.
- `scenes/player/Player.tscn` nao foi alterado.
- `scenes/rig/AntonioRafaelRigLab.tscn` nao foi alterado.
- `scripts/player/` nao foi alterado.
- `scripts/rig/` nao foi alterado.
- `assets/characters/antonio_rafael/sprites/idle/` nao foi alterado.
- Nenhum `.import` fora da lista de 33 foi stageado.
- Nenhum `.import` de `docs/archive/walk-prototypes-v1` foi stageado.
- Nenhum walk cycle oficial foi criado.
- Nenhuma caminhada articulada oficial foi criada.
- Nenhuma animacao oficial foi criada.
- Nenhum gameplay foi criado.
- `git add .` nao foi usado.
- `git add -A` nao foi usado.
- `git commit -am` nao foi usado.
- `git clean` nao foi usado.
- Nao houve commit.
- Nao houve push.

## Riscos Remanescentes

- Os 2 `.uid` de `scripts/rig/` continuam pendentes de decisao propria.
- Imports historicos em `docs/archive/walk-prototypes-v1/files/` continuam fora desta feature.
- Specs antigas nao rastreadas e manifest antigo fora do escopo continuam pendentes de limpeza separada.
- A futura caminhada articulada ainda precisa de laboratorio experimental, validacao visual no Godot e aprovacao humana antes de qualquer integracao ao Player.

## Pendencias

- Gate humano para aprovar, aprovar parcialmente ou reprovar o staged set da feature 016.
- Commit futuro controlado, se aprovado, incluindo somente imports oficiais, documentos e artefatos autorizados.
- Feature futura `017-articulated-walk-lab-v1` para criar laboratorio experimental.
