# Data Model: Godot Import UID Policy V1

## GodotGeneratedFile

Representa um arquivo `.import` ou `.uid` auditado.

**Fields**:

- `path`: caminho do arquivo.
- `extension`: `.import` ou `.uid`.
- `tracked_state`: `tracked` ou `untracked`.
- `related_source_path`: caminho do asset/script/cena relacionado, quando inferivel.
- `related_source_exists`: booleano.
- `group`: grupo de classificacao.
- `risk`: `low`, `medium`, `high` ou `critical`.
- `recommendation`: recomendacao planejada.
- `decision_status`: decisao pendente ou aprovada.
- `notes`: observacoes.

**Validation Rules**:

- `extension` deve ser `.import` ou `.uid`.
- `related_source_path` pode ficar vazio somente quando origem nao puder ser inferida.
- Arquivos em areas sensiveis devem receber risco `critical` ou `medium` e `needs_human_review`.
- Nenhum item deve ser movido, apagado ou stageado durante planejamento.

## ImportClassification

Classificacao especifica para `.import`.

**Allowed Groups**:

- `official_asset_imports`
- `prototype_imports`
- `archive_imports`
- `stale_imports`
- `unknown_imports`

**Validation Rules**:

- `official_asset_imports` exige relacao com asset oficial, sprite idle aprovado ou rig validado.
- `prototype_imports` cobre walk candidates/prototypes e material rejeitado.
- `archive_imports` cobre imports relacionados a arquivos arquivados historicamente.
- `stale_imports` exige ausencia do asset relacionado.
- `unknown_imports` e fallback quando origem nao e inferivel.

## UIDClassification

Classificacao especifica para `.uid`.

**Allowed Groups**:

- `official_uid_files`
- `prototype_uid_files`
- `stale_uid_files`
- `unknown_uid_files`

**Validation Rules**:

- `official_uid_files` exige relacao com script/cena/recurso oficial.
- `prototype_uid_files` cobre scripts/cenas temporarios ou material experimental.
- `stale_uid_files` exige ausencia do arquivo relacionado.
- `unknown_uid_files` e fallback quando origem nao e inferivel.

## PolicyRecommendation

Recomendacao documental para um grupo ou arquivo.

**Allowed Values**:

- `version_later`
- `ignore_later`
- `keep_local`
- `remove_later`
- `needs_human_review`
- `separate_feature`

**Validation Rules**:

- `version_later` nao executa commit nesta feature.
- `ignore_later` nao altera `.gitignore` nesta feature.
- `remove_later` nao remove arquivos nesta feature.
- `needs_human_review` exige decisao humana antes de acao futura.
- `separate_feature` indica escopo posterior.

## PolicyGroupSummary

Resumo por grupo de classificacao.

**Fields**:

- `group_name`
- `file_type`
- `count`
- `examples`
- `related_source_examples`
- `risk`
- `recommendation`
- `pending_decision`

## GitIgnorePolicyObservation

Registro da situacao de `.gitignore`.

**Fields**:

- `mentions_import`
- `mentions_uid`
- `current_rule_summary`
- `recommended_future_change`
- `requires_human_approval`

**Validation Rules**:

- A observacao nao pode alterar `.gitignore`.
- Qualquer mudanca recomendada deve ser para feature futura ou gate humano explicito.

## State Transitions

```text
detected
  -> related_source_inferred
  -> classified
  -> risk_assigned
  -> recommendation_assigned
  -> documented
  -> human_gate_pending
```

Transicoes futuras, fora desta etapa:

```text
human_gate_pending -> versioned_later
human_gate_pending -> ignored_later
human_gate_pending -> kept_local
human_gate_pending -> removed_later
human_gate_pending -> separate_feature
```
