# Official Rig Imports Review Manifest V1

**Feature**: `014-review-official-rig-imports-v1`  
**Data da auditoria**: 2026-06-23  
**Branch**: `014-review-official-rig-imports-v1`  
**Escopo**: manifesto dos 32 `official_asset_imports` ligados ao rig tecnico validado do SGT Antonio Rafael.

Este manifesto nao aprova walk cycle, nao aprova animacao oficial, nao integra nada ao Player e nao versiona `.import`.

## Resumo

| Categoria | Quantidade | Status | Recomendacao |
|---|---:|---|---|
| `rig_part_import` | 22 | `official_import_reviewed_version_later` | `version_later` |
| `rig_backup_related_import` | 6 | `official_import_reviewed_version_later` | `version_later` |
| `rig_preview_import` | 3 | `official_import_reviewed_version_later` | `version_later` |
| `rig_manifest_related_import` | 1 | `official_import_reviewed_version_later` | `version_later` |
| Candidato adicional fora do snapshot 012 | 1 | `official_import_needs_human_review` | `separate_feature` |

## Itens Avaliados

| # | Import path | Source PNG | Source exists | Rig relationship | Asset type | Risk | Status | Recommendation | Notes |
|---:|---|---|---|---|---|---|---|---|---|
| 1 | `assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png.import` | `assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png` | yes | `rig_assembly_output` | `rig_manifest_related_import` | critical | `official_import_reviewed_version_later` | `version_later` | Technical recomposition output; source exists. |
| 2 | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/backpack.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/backpack.png` | yes | `rig_refinement_backup` | `rig_backup_related_import` | critical | `official_import_reviewed_version_later` | `version_later` | Backup validated from Rig Refinement V1; source preserved. |
| 3 | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/goias_patch.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/goias_patch.png` | yes | `rig_refinement_backup` | `rig_backup_related_import` | critical | `official_import_reviewed_version_later` | `version_later` | Backup validated from Rig Refinement V1; source preserved. |
| 4 | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/neck.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/neck.png` | yes | `rig_refinement_backup` | `rig_backup_related_import` | critical | `official_import_reviewed_version_later` | `version_later` | Backup validated from Rig Refinement V1; source preserved. |
| 5 | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/pelvis.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/pelvis.png` | yes | `rig_refinement_backup` | `rig_backup_related_import` | critical | `official_import_reviewed_version_later` | `version_later` | Backup validated from Rig Refinement V1; source preserved. |
| 6 | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/sergeant_chevron.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/sergeant_chevron.png` | yes | `rig_refinement_backup` | `rig_backup_related_import` | critical | `official_import_reviewed_version_later` | `version_later` | Backup validated from Rig Refinement V1; source preserved. |
| 7 | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/torso_base.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/torso_base.png` | yes | `rig_refinement_backup` | `rig_backup_related_import` | critical | `official_import_reviewed_version_later` | `version_later` | Backup validated from Rig Refinement V1; source preserved. |
| 8 | `assets/characters/antonio_rafael/rig/parts/front_right/backpack.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/backpack.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 9 | `assets/characters/antonio_rafael/rig/parts/front_right/belt.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/belt.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 10 | `assets/characters/antonio_rafael/rig/parts/front_right/boot_left.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/boot_left.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 11 | `assets/characters/antonio_rafael/rig/parts/front_right/boot_right.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/boot_right.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 12 | `assets/characters/antonio_rafael/rig/parts/front_right/forearm_left.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/forearm_left.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 13 | `assets/characters/antonio_rafael/rig/parts/front_right/forearm_right.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/forearm_right.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 14 | `assets/characters/antonio_rafael/rig/parts/front_right/glasses.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/glasses.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 15 | `assets/characters/antonio_rafael/rig/parts/front_right/goias_patch.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/goias_patch.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 16 | `assets/characters/antonio_rafael/rig/parts/front_right/hand_left.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/hand_left.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 17 | `assets/characters/antonio_rafael/rig/parts/front_right/hand_right.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/hand_right.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 18 | `assets/characters/antonio_rafael/rig/parts/front_right/head.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/head.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 19 | `assets/characters/antonio_rafael/rig/parts/front_right/neck.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/neck.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 20 | `assets/characters/antonio_rafael/rig/parts/front_right/pelvis.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/pelvis.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 21 | `assets/characters/antonio_rafael/rig/parts/front_right/sergeant_chevron.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/sergeant_chevron.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 22 | `assets/characters/antonio_rafael/rig/parts/front_right/shin_left.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/shin_left.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 23 | `assets/characters/antonio_rafael/rig/parts/front_right/shin_right.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/shin_right.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 24 | `assets/characters/antonio_rafael/rig/parts/front_right/thigh_left.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/thigh_left.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 25 | `assets/characters/antonio_rafael/rig/parts/front_right/thigh_right.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/thigh_right.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 26 | `assets/characters/antonio_rafael/rig/parts/front_right/torso_base.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/torso_base.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 27 | `assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_left.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_left.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 28 | `assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_right.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_right.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 29 | `assets/characters/antonio_rafael/rig/parts/front_right/vest.png.import` | `assets/characters/antonio_rafael/rig/parts/front_right/vest.png` | yes | `rig_part` | `rig_part_import` | critical | `official_import_reviewed_version_later` | `version_later` | Validated/partially approved front_right rig part; source exists. |
| 30 | `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png.import` | `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png` | yes | `rig_preview` | `rig_preview_import` | critical | `official_import_reviewed_version_later` | `version_later` | Technical rig preview; source exists. |
| 31 | `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png.import` | `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png` | yes | `rig_preview` | `rig_preview_import` | critical | `official_import_reviewed_version_later` | `version_later` | Technical rig preview; source exists. |
| 32 | `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png.import` | `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png` | yes | `rig_preview` | `rig_preview_import` | critical | `official_import_reviewed_version_later` | `version_later` | Technical rig preview; source exists. |

## Item adicional fora do snapshot de 32

| Import path | Source PNG | Source exists | Rig relationship | Risk | Status | Recommendation | Notes |
|---|---|---|---|---|---|---|---|
| `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import` | `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png` | yes | `rig_preview` | medium | `official_import_needs_human_review` | `separate_feature` | Import gerado para preview da Rig Articulation Test V1; fora do snapshot de 32 official_asset_imports da feature 012. |

## Exclusoes explicitas

- `.uid`: 2 arquivos em `scripts/rig/`, fora desta feature.
- `.import` em `docs/archive/walk-prototypes-v1/files/`: 77 imports historicos/prototipos, fora desta feature.
- `.import` de prototipos removidos pela feature 013: ja tratados como obsoletos.
- `old_specs`: fora desta feature.
- `assets/characters/antonio_rafael/sprites/idle/`: nao avaliado nem alterado.
- `scenes/player/Player.tscn`: nao avaliado nem alterado.
- `scenes/rig/AntonioRafaelRigLab.tscn`: nao avaliado nem alterado.
- `scripts/player/` e `scripts/rig/`: nao alterados.

## Gate

Todos os 32 imports revisados receberam recomendacao documental `version_later`, mas nenhum foi stageado, versionado, movido, removido ou alterado. A decisao final permanece pendente de validacao humana.
