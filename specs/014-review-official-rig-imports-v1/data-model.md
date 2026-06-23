# Data Model: Review Official Rig Imports V1

## OfficialRigImport

Representa um `.import` candidato a revisao por pertencer ao grupo `official_asset_imports`.

**Fields**:

- `import_path`: caminho do arquivo `.import`.
- `source_asset_path`: caminho do PNG de origem esperado.
- `source_asset_exists`: booleano indicando se a origem existe.
- `classification_group`: deve ser `official_asset_imports`.
- `rig_relationship`: relacao com o rig tecnico validado.
- `asset_type`: tipo do asset relacionado.
- `risk_level`: risco atribuido ao item.
- `status`: status documental da revisao.
- `recommendation`: decisao futura recomendada.
- `human_review_required`: indica se a decisao final precisa de gate humano.
- `notes`: observacao livre para limitar interpretacoes.

**Validation Rules**:

- `import_path` deve terminar em `.import`.
- `import_path` deve estar sob `assets/characters/antonio_rafael/rig/`.
- `source_asset_path` deve ser inferido removendo `.import`.
- Arquivos `.uid` nao podem ser representados por esta entidade.
- Se `source_asset_exists` for `false`, o status deve indicar revisao humana ou origem desconhecida.
- Nenhum item pode mudar de estado para removido ou versionado nesta feature.

## RigRelationship

Classifica como o import se relaciona com o rig tecnico.

**Allowed Values**:

- `rig_part`
- `rig_refinement_backup`
- `rig_preview`
- `rig_assembly_output`
- `unknown_rig_relation`

**Validation Rules**:

- Caminhos em `rig/parts/front_right/` tendem a `rig_part`.
- Caminhos em `rig/parts/front_right/_backup_v1/` tendem a `rig_refinement_backup`.
- Caminhos em `rig/previews/` tendem a `rig_preview`.
- Caminhos em `rig/assembled/` tendem a `rig_assembly_output`.
- Qualquer classificacao incerta deve usar `unknown_rig_relation` e exigir revisao humana.

## ReviewDecision

Representa a decisao documental por arquivo.

**Allowed Statuses**:

- `official_import_reviewed_keep_local`
- `official_import_reviewed_version_later`
- `official_import_reviewed_ignore_later`
- `official_import_needs_human_review`
- `official_import_excluded_not_rig`
- `official_import_excluded_unknown_origin`

**Allowed Recommendations**:

- `keep_local`
- `version_later`
- `ignore_later`
- `separate_feature`
- `needs_human_review`

**Validation Rules**:

- `version_later` nao pode stagear ou commitar o arquivo nesta feature.
- `ignore_later` nao pode alterar `.gitignore` nesta feature.
- `keep_local` nao pode remover ou mover o arquivo.
- `needs_human_review` deve explicar a pendencia.

## SafetyValidation

Representa o resultado final esperado da revisao.

**Fields**:

- `evaluated_count`
- `expected_count`
- `count_matches_expected`
- `import_removed_count`
- `import_staged_count`
- `uid_changed_count`
- `gitignore_changed`
- `player_changed`
- `rig_scene_changed`
- `scripts_changed`
- `idle_sprites_changed`
- `official_rig_assets_changed`
- `commit_created`
- `push_created`

**Validation Rules**:

- `expected_count` deve ser `32`.
- `import_removed_count` deve ser `0`.
- `import_staged_count` deve ser `0`.
- `uid_changed_count` deve ser `0`.
- Todos os campos `*_changed` proibidos devem ser `false`.
- `commit_created` e `push_created` devem ser `false` durante a implementacao antes de aprovacao humana.

## State Transitions

```text
detected
  -> classified_as_official_asset_import
  -> source_checked
  -> rig_relationship_classified
  -> risk_assessed
  -> recommendation_documented
  -> human_gate_pending
```

Transicoes futuras fora desta feature:

```text
human_gate_pending -> versioned_after_approval
human_gate_pending -> kept_local_after_approval
human_gate_pending -> ignored_after_separate_policy
human_gate_pending -> revised_in_separate_feature
```
