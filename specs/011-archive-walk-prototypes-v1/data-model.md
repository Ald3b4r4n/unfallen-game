# Data Model: Archive Walk Prototypes V1

## ArchiveTarget

Representa um arquivo local avaliado para arquivamento historico.

**Fields**:

- `original_path`: caminho original no repositorio.
- `target_path`: caminho planejado em `docs/archive/walk-prototypes-v1/files/`, quando aplicavel.
- `group`: grupo original da auditoria 010.
- `category`: categoria de decisao da feature 011.
- `file_type`: extensao/tipo, esperado `png` para arquivos arquivaveis.
- `risk`: `low`, `medium`, `high` ou `critical`.
- `status`: estado no manifesto.
- `probable_origin`: origem inferida.
- `archive_reason`: motivo do arquivamento.
- `human_decision`: decisao humana registrada.
- `notes`: observacoes de rastreabilidade.

**Validation Rules**:

- `original_path` deve existir no momento da implementacao ou ser registrado como ausente.
- `target_path` deve preservar a arvore relativa original sob `docs/archive/walk-prototypes-v1/files/`.
- `file_type` arquivavel nesta feature deve ser `png`.
- Itens `.import` e `.uid` nao podem receber categoria de arquivamento automatico.
- Arquivos em areas sensiveis devem receber `do_not_archive` ou `needs_human_review`.

## ArchiveGroup

Agrupa os arquivos por origem/funcao.

**Fields**:

- `name`: nome do grupo.
- `expected_count`: quantidade esperada a partir da auditoria 010.
- `actual_count`: quantidade encontrada na implementacao.
- `risk`: risco do grupo.
- `recommendation`: recomendacao geral.
- `examples`: caminhos representativos.
- `decision`: decisao humana.

**Groups**:

- `walk_candidates`: 66 esperados.
- `walk_prototypes`: 8 esperados.
- `preview_assets`: 3 esperados.
- `keep_local`: quantidade variavel.
- `needs_human_review`: quantidade variavel.
- `do_not_archive`: quantidade variavel.

## ArchiveCategory

Classificacao aplicada a cada `ArchiveTarget`.

**Allowed Values**:

- `archive_walk_candidates`
- `archive_walk_prototypes`
- `archive_preview_assets`
- `keep_local`
- `needs_human_review`
- `do_not_archive`

**Validation Rules**:

- `archive_walk_candidates` so pode ser usado para arquivos historicos do grupo `walk_candidates`.
- `archive_walk_prototypes` so pode ser usado para arquivos historicos do grupo `walk_prototypes`.
- `archive_preview_assets` so pode ser usado para previews historicos relacionados.
- `do_not_archive` deve ser usado para arquivos sensiveis ou fora do escopo.

## ArchiveManifestEntry

Entrada planejada no `docs/archive/walk-prototypes-v1/manifest.md`.

**Fields**:

- `original_path`
- `destination_path`
- `group`
- `type`
- `probable_origin`
- `status`
- `archive_reason`
- `risk`
- `note`
- `human_decision`

**Allowed Status**:

- `archived_candidate`
- `archived_prototype`
- `archived_preview`
- `kept_local`
- `needs_review`
- `excluded_from_archive`

**Validation Rules**:

- Todo arquivo movido deve ter entrada no manifesto.
- Nenhuma entrada pode descrever o arquivo como oficial, aprovado ou pronto para gameplay.
- Entradas `archived_*` devem ter caminho de destino preenchido.

## ArchiveDestination

Define o local historico aprovado.

**Fields**:

- `root`: `docs/archive/walk-prototypes-v1/`
- `files_root`: `docs/archive/walk-prototypes-v1/files/`
- `manifest_path`: `docs/archive/walk-prototypes-v1/manifest.md`
- `rationale`: justificativa da escolha.

**Validation Rules**:

- O destino nao pode ficar em `res://assets` nesta versao sem nova aprovacao humana.
- O destino nao pode substituir assets oficiais.
- O destino nao pode conter `.import` ou `.uid` gerados em massa.

## SensitiveArea

Area protegida que nao deve ser alterada.

**Fields**:

- `path`
- `reason`
- `allowed_action`

**Protected Paths**:

- `scenes/player/Player.tscn`
- `scenes/rig/AntonioRafaelRigLab.tscn`
- `scripts/player/`
- `scripts/rig/`
- `assets/characters/antonio_rafael/sprites/idle/`
- `assets/characters/antonio_rafael/rig/`
- `.gitignore`
- `.specify/feature.json` para commit automatico

## State Transitions

```text
untracked_detected
  -> classified
  -> planned_for_archive
  -> human_approved
  -> archived_with_manifest
  -> pending_commit_gate
```

Alternativas:

```text
classified -> needs_human_review
classified -> do_not_archive
classified -> keep_local
```

Nenhuma transicao deve executar push automatico.
