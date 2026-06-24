# Data Model: Rig Imports Versioning and Articulated Walk Lab Prep V1

## Entity: OfficialRigImport

Representa um `.import` associado ao rig tecnico validado e previamente revisado pela feature 014.

### Fields

- `import_path`: caminho literal do arquivo `.import`.
- `source_png_path`: caminho do PNG de origem esperado.
- `source_exists`: `yes` ou `no`.
- `source_status`: `tracked`, `official_documented`, `missing` ou `unknown`.
- `review_source`: documento ou manifesto que recomendou o item.
- `review_recommendation`: recomendacao registrada, esperado `version_later`.
- `rig_relationship`: `rig_part`, `rig_refinement_backup`, `rig_preview` ou `rig_assembly_output`.
- `risk`: esperado `critical`.
- `versioning_decision`: `approved_for_explicit_stage`, `excluded`, `pending` ou `blocked`.
- `notes`: observacao de validacao.

### Validation Rules

- `import_path` deve terminar em `.import`.
- `import_path` deve estar listado no manifesto da feature 014.
- `source_png_path` deve existir.
- `source_status` deve ser `tracked` ou `official_documented`.
- `review_recommendation` deve ser `version_later`.
- Nao pode pertencer a `docs/archive/walk-prototypes-v1`.
- Nao pode ser `.uid`.

## Entity: ArticulationPreviewImport

Representa o `.import` adicional ligado ao preview tecnico da Rig Articulation Test V1 e revisado pela feature 015.

### Fields

- `import_path`: caminho literal do `.import`.
- `source_png_path`: caminho do preview PNG.
- `source_exists`: `yes` ou `no`.
- `source_tracked`: `yes` ou `no`.
- `review_source`: `docs/technical/rig-articulation-preview-import-review-manifest-v1.md`.
- `review_recommendation`: esperado `join_official_rig_imports`.
- `status`: esperado `articulation_preview_import_join_official_rig_imports`.
- `risk`: esperado `critical`.
- `versioning_decision`: `approved_for_explicit_stage`, `excluded`, `pending` ou `blocked`.
- `notes`: observacao sobre ser preview tecnico, nao walk cycle oficial.

### Validation Rules

- Deve existir exatamente um item desta entidade.
- O PNG de origem deve existir e ser rastreado.
- O item nao pode ser usado para declarar caminhada articulada oficial.
- O item so pode entrar se o total final nao ultrapassar 33 `.import`.

## Entity: SourcePNG

Representa o asset de origem apontado por um `.import` candidato.

### Fields

- `path`: caminho do PNG.
- `exists`: `yes` ou `no`.
- `tracked_by_git`: `yes` ou `no`.
- `official_documented`: `yes` ou `no`.
- `sensitive_area`: `rig`, `idle`, `player`, `scripts`, `archive`, `unknown`.

### Validation Rules

- Deve existir para todo `.import` aprovado.
- Nao deve ser movido, editado, regenerado ou sobrescrito nesta feature.
- Se estiver em `docs/archive`, o `.import` relacionado nao pode ser classificado como oficial.

## Entity: VersioningDecision

Registra a decisao de cada `.import` candidato.

### Fields

- `candidate_path`: caminho do `.import`.
- `decision`: `approved_for_explicit_stage`, `excluded_from_feature`, `pending_human_review`, `blocked_by_validation`.
- `criteria_passed`: lista dos criterios cumpridos.
- `criteria_failed`: lista dos criterios falhos.
- `stage_allowed`: `yes` ou `no`.
- `stage_method`: esperado `explicit_path_only`.
- `human_gate_required`: esperado `yes`.

### Validation Rules

- Nenhuma decisao pode permitir glob ou stage de diretorio.
- Nenhuma decisao pode permitir `.uid`.
- Nenhuma decisao pode alterar `.gitignore`.
- Se algum criterio falhar, `stage_allowed` deve ser `no`.

## Entity: WalkLabPrep

Representa a preparacao documental para a futura feature `017-articulated-walk-lab-v1`.

### Fields

- `future_feature`: esperado `017-articulated-walk-lab-v1`.
- `current_rig_state`: resumo do rig tecnico validado.
- `allowed_future_basis`: cenas/docs/assets que podem ser lidos no futuro.
- `forbidden_future_scope`: arquivos e acoes que nao podem ser tocados sem nova aprovacao.
- `visual_criteria`: criterios visuais para caminhada experimental.
- `official_status_statement`: declaracao de que ainda nao existe caminhada articulada oficial.
- `human_validation_required`: esperado `yes`.

### Validation Rules

- Deve declarar que nao ha walk cycle oficial.
- Deve declarar que nao ha animacao oficial.
- Deve declarar que nao ha integracao ao Player.
- Deve conter criterios visuais, mas nao criar frames, cena ou animacao nesta feature.

## Entity: SafetyGate

Representa o gate humano final antes de commit/push.

### Fields

- `imports_evaluated_count`: numero total avaliado.
- `imports_approved_count`: numero total aprovado para stage explicito.
- `approved_paths`: lista literal dos caminhos aprovados.
- `uid_staged`: esperado `no`.
- `gitignore_changed`: esperado `no`.
- `runtime_changed`: esperado `no`.
- `official_walk_created`: esperado `no`.
- `commit_done`: esperado `no` ate aprovacao humana posterior.
- `push_done`: esperado `no`.

### Validation Rules

- Deve bloquear conclusao se `uid_staged`, `gitignore_changed`, `runtime_changed` ou `official_walk_created` forem `yes`.
- Deve listar divergencias antes de recomendar commit.
