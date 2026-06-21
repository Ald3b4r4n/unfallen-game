# Inventário de Untracked Cleanup V1

**Data da auditoria**: 2026-06-21
**Branch**: `010-cleanup-untracked-prototypes`
**Total de untracked no snapshot inicial**: 211

Este inventário é documental. Nenhuma recomendação abaixo executa remoção, movimentação, stage, commit ou push.

## Resumo por Grupo

| Grupo | Quantidade | Risco | Recomendação | Observação |
|---|---:|---|---|---|
| active_feature_artifacts | 7 | low | keep_versioned_later | Artefatos da feature 010 atual. |
| godot_import_files | 109 | high | needs_human_review | Arquivos de importação gerados pelo Godot; política pendente. |
| godot_uid_files | 2 | high | needs_human_review | UIDs gerados pelo Godot; política pendente. |
| manifest_files | 1 | medium | needs_human_review | Manifests JSON de tentativas anteriores. |
| old_specs | 15 | medium | needs_human_review | Specs/checklists/designs antigos não rastreados. |
| preview_assets | 3 | high | archive_later | Previews/exports visuais de validação ou protótipo. |
| rig_assets | 0 | low | needs_human_review | Arquivos sob área de rig técnico; revisar com cuidado. |
| temporary_audit_files | 0 | low | needs_human_review | Arquivos temporários de auditoria. |
| unknown_origin | 0 | low | needs_human_review | Arquivos sem classificação automática segura. |
| walk_candidates | 66 | high | archive_later | Candidatos manuais/antigos de walk; não oficiais. |
| walk_prototypes | 8 | high | archive_later | Protótipos antigos de walk; não oficiais. |

## Exemplos por Grupo

### active_feature_artifacts

- Quantidade: 7
- Risco: `low`
- Recomendação: `keep_versioned_later`
- Observação: Artefatos da feature 010 atual.
- Exemplos:
  - `specs/010-cleanup-untracked-prototypes/checklists/requirements.md`
  - `specs/010-cleanup-untracked-prototypes/data-model.md`
  - `specs/010-cleanup-untracked-prototypes/plan.md`
  - `specs/010-cleanup-untracked-prototypes/quickstart.md`
  - `specs/010-cleanup-untracked-prototypes/research.md`

### godot_import_files

- Quantidade: 109
- Risco: `high`
- Recomendação: `needs_human_review`
- Observação: Arquivos de importação gerados pelo Godot; política pendente.
- Exemplos:
  - `assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/antonio_rafael_walk_manual_candidate_v1_complete_preview.png.import`
  - `assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/antonio_rafael_walk_manual_candidate_v1_preview.png.import`
  - `assets/characters/antonio_rafael/exports/walk_prototype_v5/antonio_rafael_walk_left_v5_preview.png.import`
  - `assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png.import`
  - `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/backpack.png.import`

### godot_uid_files

- Quantidade: 2
- Risco: `high`
- Recomendação: `needs_human_review`
- Observação: UIDs gerados pelo Godot; política pendente.
- Exemplos:
  - `scripts/rig/rig_export_notes.gd.uid`
  - `scripts/rig/rig_preview_controller.gd.uid`

### manifest_files

- Quantidade: 1
- Risco: `medium`
- Recomendação: `needs_human_review`
- Observação: Manifests JSON de tentativas anteriores.
- Exemplos:
  - `assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/walk_manual_candidate_v1_test_manifest.json`

### old_specs

- Quantidade: 15
- Risco: `medium`
- Recomendação: `needs_human_review`
- Observação: Specs/checklists/designs antigos não rastreados.
- Exemplos:
  - `specs/004-walk-cycle-8-directions/checklists/requirements.md`
  - `specs/004-walk-cycle-8-directions/data-model.md`
  - `specs/004-walk-cycle-8-directions/plan.md`
  - `specs/004-walk-cycle-8-directions/quickstart.md`
  - `specs/004-walk-cycle-8-directions/research.md`

### preview_assets

- Quantidade: 3
- Risco: `high`
- Recomendação: `archive_later`
- Observação: Previews/exports visuais de validação ou protótipo.
- Exemplos:
  - `assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/antonio_rafael_walk_manual_candidate_v1_complete_preview.png`
  - `assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/antonio_rafael_walk_manual_candidate_v1_preview.png`
  - `assets/characters/antonio_rafael/exports/walk_prototype_v5/antonio_rafael_walk_left_v5_preview.png`

### rig_assets

- Quantidade: 0
- Risco: `low`
- Recomendação: `needs_human_review`
- Observação: Arquivos sob área de rig técnico; revisar com cuidado.
- Exemplos: nenhum arquivo no snapshot atual.

### temporary_audit_files

- Quantidade: 0
- Risco: `low`
- Recomendação: `needs_human_review`
- Observação: Arquivos temporários de auditoria.
- Exemplos: nenhum arquivo no snapshot atual.

### unknown_origin

- Quantidade: 0
- Risco: `low`
- Recomendação: `needs_human_review`
- Observação: Arquivos sem classificação automática segura.
- Exemplos: nenhum arquivo no snapshot atual.

### walk_candidates

- Quantidade: 66
- Risco: `high`
- Recomendação: `archive_later`
- Observação: Candidatos manuais/antigos de walk; não oficiais.
- Exemplos:
  - `assets/characters/antonio_rafael/source/antonio_rafael_walk_sheet_candidate_v1.png`
  - `assets/characters/antonio_rafael/source/walk_sheet_manual_candidate_v1/antonio_rafael_walk_sheet_manual_candidate_v1.png`
  - `assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_01.png`
  - `assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_02.png`
  - `assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_03.png`

### walk_prototypes

- Quantidade: 8
- Risco: `high`
- Recomendação: `archive_later`
- Observação: Protótipos antigos de walk; não oficiais.
- Exemplos:
  - `assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_01.png`
  - `assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_02.png`
  - `assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_03.png`
  - `assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_04.png`
  - `assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_05.png`

## Inventário Detalhado

| Caminho | Grupo | Tipo | Risco | Recomendação | Observação | Decisão |
|---|---|---|---|---|---|---|
| specs/010-cleanup-untracked-prototypes/checklists/requirements.md | active_feature_artifacts | md | low | keep_versioned_later | Artefato da feature 010 atual; candidato a commit futuro após aprovação humana. | pendente |
| specs/010-cleanup-untracked-prototypes/data-model.md | active_feature_artifacts | md | low | keep_versioned_later | Artefato da feature 010 atual; candidato a commit futuro após aprovação humana. | pendente |
| specs/010-cleanup-untracked-prototypes/plan.md | active_feature_artifacts | md | low | keep_versioned_later | Artefato da feature 010 atual; candidato a commit futuro após aprovação humana. | pendente |
| specs/010-cleanup-untracked-prototypes/quickstart.md | active_feature_artifacts | md | low | keep_versioned_later | Artefato da feature 010 atual; candidato a commit futuro após aprovação humana. | pendente |
| specs/010-cleanup-untracked-prototypes/research.md | active_feature_artifacts | md | low | keep_versioned_later | Artefato da feature 010 atual; candidato a commit futuro após aprovação humana. | pendente |
| specs/010-cleanup-untracked-prototypes/spec.md | active_feature_artifacts | md | low | keep_versioned_later | Artefato da feature 010 atual; candidato a commit futuro após aprovação humana. | pendente |
| specs/010-cleanup-untracked-prototypes/tasks.md | active_feature_artifacts | md | low | keep_versioned_later | Artefato da feature 010 atual; candidato a commit futuro após aprovação humana. | pendente |
| assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/antonio_rafael_walk_manual_candidate_v1_complete_preview.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/antonio_rafael_walk_manual_candidate_v1_preview.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/exports/walk_prototype_v5/antonio_rafael_walk_left_v5_preview.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/backpack.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/goias_patch.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/neck.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/pelvis.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/sergeant_chevron.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/torso_base.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/backpack.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/belt.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/boot_left.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/boot_right.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/forearm_left.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/forearm_right.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/glasses.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/goias_patch.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/hand_left.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/hand_right.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/head.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/neck.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/pelvis.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/sergeant_chevron.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/shin_left.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/shin_right.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/thigh_left.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/thigh_right.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/torso_base.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_left.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_right.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/parts/front_right/vest.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png.import | godot_import_files | import | high | needs_human_review | Import gerado em área de rig; avaliar contra política Godot antes de versionar. | pendente |
| assets/characters/antonio_rafael/source/antonio_rafael_walk_sheet_candidate_v1.png.import | godot_import_files | import | high | needs_human_review | Arquivo de importação do Godot; não versionar em massa, especialmente se ligado a protótipos. | pendente |
| assets/characters/antonio_rafael/source/walk_sheet_manual_candidate_v1/antonio_rafael_walk_sheet_manual_candidate_v1.png.import | godot_import_files | import | high | needs_human_review | Arquivo de importação do Godot; não versionar em massa, especialmente se ligado a protótipos. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_01.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_02.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_03.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_04.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_05.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_06.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_07.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_08.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_left/antonio_rafael_walk_back_left_01.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_left/antonio_rafael_walk_back_left_02.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_left/antonio_rafael_walk_back_left_03.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_left/antonio_rafael_walk_back_left_04.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_left/antonio_rafael_walk_back_left_05.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_left/antonio_rafael_walk_back_left_06.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_left/antonio_rafael_walk_back_left_07.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_left/antonio_rafael_walk_back_left_08.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_right/antonio_rafael_walk_back_right_01.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_right/antonio_rafael_walk_back_right_02.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_right/antonio_rafael_walk_back_right_03.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_right/antonio_rafael_walk_back_right_04.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_right/antonio_rafael_walk_back_right_05.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_right/antonio_rafael_walk_back_right_06.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_right/antonio_rafael_walk_back_right_07.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_right/antonio_rafael_walk_back_right_08.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front/antonio_rafael_walk_front_01.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front/antonio_rafael_walk_front_02.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front/antonio_rafael_walk_front_03.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front/antonio_rafael_walk_front_04.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front/antonio_rafael_walk_front_05.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front/antonio_rafael_walk_front_06.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front/antonio_rafael_walk_front_07.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front/antonio_rafael_walk_front_08.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_left/antonio_rafael_walk_front_left_01.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_left/antonio_rafael_walk_front_left_02.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_left/antonio_rafael_walk_front_left_03.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_left/antonio_rafael_walk_front_left_04.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_left/antonio_rafael_walk_front_left_05.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_left/antonio_rafael_walk_front_left_06.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_left/antonio_rafael_walk_front_left_07.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_left/antonio_rafael_walk_front_left_08.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_right/antonio_rafael_walk_front_right_01.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_right/antonio_rafael_walk_front_right_02.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_right/antonio_rafael_walk_front_right_03.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_right/antonio_rafael_walk_front_right_04.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_right/antonio_rafael_walk_front_right_05.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_right/antonio_rafael_walk_front_right_06.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_right/antonio_rafael_walk_front_right_07.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_right/antonio_rafael_walk_front_right_08.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/left/antonio_rafael_walk_left_01.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/left/antonio_rafael_walk_left_02.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/left/antonio_rafael_walk_left_03.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/left/antonio_rafael_walk_left_04.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/left/antonio_rafael_walk_left_05.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/left/antonio_rafael_walk_left_06.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/left/antonio_rafael_walk_left_07.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/left/antonio_rafael_walk_left_08.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/right/antonio_rafael_walk_right_01.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/right/antonio_rafael_walk_right_02.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/right/antonio_rafael_walk_right_03.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/right/antonio_rafael_walk_right_04.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/right/antonio_rafael_walk_right_05.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/right/antonio_rafael_walk_right_06.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/right/antonio_rafael_walk_right_07.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/right/antonio_rafael_walk_right_08.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_01.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_02.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_03.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_04.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_05.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_06.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_07.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_08.png.import | godot_import_files | import | high | needs_human_review | Import gerado para candidato/protótipo de walk; não versionar em massa. | pendente |
| scripts/rig/rig_export_notes.gd.uid | godot_uid_files | uid | high | needs_human_review | UID gerado sob scripts/rig, área sensível; revisar antes de versionar. | pendente |
| scripts/rig/rig_preview_controller.gd.uid | godot_uid_files | uid | high | needs_human_review | UID gerado sob scripts/rig, área sensível; revisar antes de versionar. | pendente |
| assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/walk_manual_candidate_v1_test_manifest.json | manifest_files | json | medium | needs_human_review | Manifest JSON de tentativa anterior; revisar relação com feature antes de versionar. | pendente |
| specs/004-walk-cycle-8-directions/checklists/requirements.md | old_specs | md | medium | needs_human_review | Spec/checklist/design antigo não rastreado; revisar individualmente antes de versionar ou remover. | pendente |
| specs/004-walk-cycle-8-directions/data-model.md | old_specs | md | medium | needs_human_review | Spec/checklist/design antigo não rastreado; revisar individualmente antes de versionar ou remover. | pendente |
| specs/004-walk-cycle-8-directions/plan.md | old_specs | md | medium | needs_human_review | Spec/checklist/design antigo não rastreado; revisar individualmente antes de versionar ou remover. | pendente |
| specs/004-walk-cycle-8-directions/quickstart.md | old_specs | md | medium | needs_human_review | Spec/checklist/design antigo não rastreado; revisar individualmente antes de versionar ou remover. | pendente |
| specs/004-walk-cycle-8-directions/research.md | old_specs | md | medium | needs_human_review | Spec/checklist/design antigo não rastreado; revisar individualmente antes de versionar ou remover. | pendente |
| specs/004-walk-cycle-8-directions/spec.md | old_specs | md | medium | needs_human_review | Spec/checklist/design antigo não rastreado; revisar individualmente antes de versionar ou remover. | pendente |
| specs/005-rig-parts-separation/checklists/requirements.md | old_specs | md | medium | needs_human_review | Spec/checklist/design antigo não rastreado; revisar individualmente antes de versionar ou remover. | pendente |
| specs/006-rig-assembly-v1/checklists/requirements.md | old_specs | md | medium | needs_human_review | Spec/checklist/design antigo não rastreado; revisar individualmente antes de versionar ou remover. | pendente |
| specs/007-rig-refinement-v1/checklists/requirements.md | old_specs | md | medium | needs_human_review | Spec/checklist/design antigo não rastreado; revisar individualmente antes de versionar ou remover. | pendente |
| specs/008-rig-articulation-test-v1/checklists/requirements.md | old_specs | md | medium | needs_human_review | Spec/checklist/design antigo não rastreado; revisar individualmente antes de versionar ou remover. | pendente |
| specs/008-rig-articulation-test-v1/data-model.md | old_specs | md | medium | needs_human_review | Spec/checklist/design antigo não rastreado; revisar individualmente antes de versionar ou remover. | pendente |
| specs/008-rig-articulation-test-v1/plan.md | old_specs | md | medium | needs_human_review | Spec/checklist/design antigo não rastreado; revisar individualmente antes de versionar ou remover. | pendente |
| specs/008-rig-articulation-test-v1/quickstart.md | old_specs | md | medium | needs_human_review | Spec/checklist/design antigo não rastreado; revisar individualmente antes de versionar ou remover. | pendente |
| specs/008-rig-articulation-test-v1/research.md | old_specs | md | medium | needs_human_review | Spec/checklist/design antigo não rastreado; revisar individualmente antes de versionar ou remover. | pendente |
| specs/008-rig-articulation-test-v1/spec.md | old_specs | md | medium | needs_human_review | Spec/checklist/design antigo não rastreado; revisar individualmente antes de versionar ou remover. | pendente |
| assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/antonio_rafael_walk_manual_candidate_v1_complete_preview.png | preview_assets | png | high | archive_later | Preview de candidato/protótipo de walk; arquivar futuramente ou tratar em feature separada. | pendente |
| assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/antonio_rafael_walk_manual_candidate_v1_preview.png | preview_assets | png | high | archive_later | Preview de candidato/protótipo de walk; arquivar futuramente ou tratar em feature separada. | pendente |
| assets/characters/antonio_rafael/exports/walk_prototype_v5/antonio_rafael_walk_left_v5_preview.png | preview_assets | png | high | archive_later | Preview de candidato/protótipo de walk; arquivar futuramente ou tratar em feature separada. | pendente |
| assets/characters/antonio_rafael/source/antonio_rafael_walk_sheet_candidate_v1.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/source/walk_sheet_manual_candidate_v1/antonio_rafael_walk_sheet_manual_candidate_v1.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_01.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_02.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_03.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_04.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_05.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_06.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_07.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_08.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_left/antonio_rafael_walk_back_left_01.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_left/antonio_rafael_walk_back_left_02.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_left/antonio_rafael_walk_back_left_03.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_left/antonio_rafael_walk_back_left_04.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_left/antonio_rafael_walk_back_left_05.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_left/antonio_rafael_walk_back_left_06.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_left/antonio_rafael_walk_back_left_07.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_left/antonio_rafael_walk_back_left_08.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_right/antonio_rafael_walk_back_right_01.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_right/antonio_rafael_walk_back_right_02.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_right/antonio_rafael_walk_back_right_03.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_right/antonio_rafael_walk_back_right_04.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_right/antonio_rafael_walk_back_right_05.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_right/antonio_rafael_walk_back_right_06.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_right/antonio_rafael_walk_back_right_07.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_right/antonio_rafael_walk_back_right_08.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front/antonio_rafael_walk_front_01.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front/antonio_rafael_walk_front_02.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front/antonio_rafael_walk_front_03.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front/antonio_rafael_walk_front_04.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front/antonio_rafael_walk_front_05.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front/antonio_rafael_walk_front_06.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front/antonio_rafael_walk_front_07.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front/antonio_rafael_walk_front_08.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_left/antonio_rafael_walk_front_left_01.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_left/antonio_rafael_walk_front_left_02.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_left/antonio_rafael_walk_front_left_03.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_left/antonio_rafael_walk_front_left_04.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_left/antonio_rafael_walk_front_left_05.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_left/antonio_rafael_walk_front_left_06.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_left/antonio_rafael_walk_front_left_07.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_left/antonio_rafael_walk_front_left_08.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_right/antonio_rafael_walk_front_right_01.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_right/antonio_rafael_walk_front_right_02.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_right/antonio_rafael_walk_front_right_03.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_right/antonio_rafael_walk_front_right_04.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_right/antonio_rafael_walk_front_right_05.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_right/antonio_rafael_walk_front_right_06.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_right/antonio_rafael_walk_front_right_07.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_right/antonio_rafael_walk_front_right_08.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/left/antonio_rafael_walk_left_01.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/left/antonio_rafael_walk_left_02.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/left/antonio_rafael_walk_left_03.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/left/antonio_rafael_walk_left_04.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/left/antonio_rafael_walk_left_05.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/left/antonio_rafael_walk_left_06.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/left/antonio_rafael_walk_left_07.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/left/antonio_rafael_walk_left_08.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/right/antonio_rafael_walk_right_01.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/right/antonio_rafael_walk_right_02.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/right/antonio_rafael_walk_right_03.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/right/antonio_rafael_walk_right_04.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/right/antonio_rafael_walk_right_05.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/right/antonio_rafael_walk_right_06.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/right/antonio_rafael_walk_right_07.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/right/antonio_rafael_walk_right_08.png | walk_candidates | png | high | archive_later | Candidato de walk antigo; não é walk cycle oficial e não deve entrar em commit em massa. | pendente |
| assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_01.png | walk_prototypes | png | high | archive_later | Protótipo de walk antigo; não é asset oficial e deve ser arquivado/revisado em feature própria. | pendente |
| assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_02.png | walk_prototypes | png | high | archive_later | Protótipo de walk antigo; não é asset oficial e deve ser arquivado/revisado em feature própria. | pendente |
| assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_03.png | walk_prototypes | png | high | archive_later | Protótipo de walk antigo; não é asset oficial e deve ser arquivado/revisado em feature própria. | pendente |
| assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_04.png | walk_prototypes | png | high | archive_later | Protótipo de walk antigo; não é asset oficial e deve ser arquivado/revisado em feature própria. | pendente |
| assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_05.png | walk_prototypes | png | high | archive_later | Protótipo de walk antigo; não é asset oficial e deve ser arquivado/revisado em feature própria. | pendente |
| assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_06.png | walk_prototypes | png | high | archive_later | Protótipo de walk antigo; não é asset oficial e deve ser arquivado/revisado em feature própria. | pendente |
| assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_07.png | walk_prototypes | png | high | archive_later | Protótipo de walk antigo; não é asset oficial e deve ser arquivado/revisado em feature própria. | pendente |
| assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_08.png | walk_prototypes | png | high | archive_later | Protótipo de walk antigo; não é asset oficial e deve ser arquivado/revisado em feature própria. | pendente |
