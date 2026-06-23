# Data Model: Remove Stale Prototype Imports V1

## PrototypeImportCandidate

Representa um `.import` candidato à remoção por pertencer aos `prototype_imports`.

**Fields**:

- `import_path`: caminho do arquivo `.import`.
- `related_source_png`: caminho esperado do PNG original.
- `related_source_exists`: booleano indicando se o PNG ainda existe no local original.
- `archived_source_path`: caminho correspondente em `docs/archive/walk-prototypes-v1/`, quando inferível.
- `archived_source_exists`: booleano indicando se há cópia histórica arquivada.
- `classification_group`: deve ser `prototype_imports`.
- `is_uid`: deve ser `false`.
- `is_official_asset_import`: deve ser `false`.
- `is_official_uid_file`: deve ser `false`.
- `decision`: decisão final para o candidato.
- `status`: status documental.
- `reason`: motivo da remoção ou manutenção.

**Validation Rules**:

- `import_path` deve terminar em `.import`.
- `classification_group` deve ser `prototype_imports`.
- Arquivos `.uid` não podem ser representados como candidatos removíveis.
- Caminhos dentro de `assets/characters/antonio_rafael/rig/` ou `assets/characters/antonio_rafael/sprites/idle/` devem ser excluídos.
- Se `related_source_exists` for `true`, o item deve ser `kept_for_review`.
- Se a origem for desconhecida, o item deve ser `excluded_unknown_origin`.

## RemovalDecision

Representa a decisão aplicada a um candidato.

**Allowed Values**:

- `remove`
- `keep_for_review`
- `exclude_official`
- `exclude_uid`
- `exclude_unknown_origin`

**Validation Rules**:

- `remove` só é permitido se todos os critérios de remoção forem verdadeiros.
- `exclude_uid` é obrigatório para qualquer arquivo `.uid`.
- `exclude_official` é obrigatório para imports ligados a assets oficiais, Base Idle V1 ou rig validado.
- `keep_for_review` é obrigatório quando houver divergência de contagem, origem existente ou dúvida de classificação.

## RemovalManifestEntry

Representa uma linha do manifesto de remoção.

**Fields**:

- `original_path`
- `group`
- `probable_origin`
- `related_source_path`
- `related_source_exists`
- `archived_source_path`
- `archived_source_exists`
- `removal_reason`
- `status`
- `decision`

**Allowed Statuses**:

- `removed_stale_prototype_import`
- `kept_for_review`
- `excluded_official_import`
- `excluded_uid`
- `excluded_unknown_origin`

**Validation Rules**:

- Todo arquivo avaliado deve ter uma entrada no manifesto.
- Todo arquivo removido deve ter status `removed_stale_prototype_import`.
- Arquivos mantidos para revisão devem explicar qual critério falhou.

## SafetyValidation

Representa o resultado das validações finais.

**Fields**:

- `evaluated_count`
- `removed_count`
- `kept_for_review_count`
- `uid_removed_count`
- `official_import_removed_count`
- `gitignore_changed`
- `player_changed`
- `rig_scene_changed`
- `scripts_changed`
- `idle_sprites_changed`
- `official_rig_assets_changed`
- `commit_created`
- `push_created`

**Validation Rules**:

- `uid_removed_count` deve ser `0`.
- `official_import_removed_count` deve ser `0`.
- Todos os campos `*_changed` proibidos devem ser `false`.
- `commit_created` e `push_created` devem ser `false` durante a implementação antes de aprovação humana.

## State Transitions

```text
detected
  -> classified_as_prototype_import
  -> source_checked
  -> archive_checked
  -> criteria_evaluated
  -> decision_documented
  -> removed_or_kept
  -> final_validation
  -> human_gate_pending
```

Transições futuras fora do planejamento:

```text
human_gate_pending -> committed_after_approval
human_gate_pending -> revised_after_review
```
