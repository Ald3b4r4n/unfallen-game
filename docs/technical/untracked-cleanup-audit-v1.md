# Auditoria de Limpeza de Untracked V1

**Data da auditoria**: 2026-06-21
**Branch atual**: `010-cleanup-untracked-prototypes`
**Status**: auditoria documental concluída; aguardando gate humano.

## Contexto

A branch `009-readme-oficial-unfallen` foi enviada ao GitHub com segurança. Os commits principais já enviados incluem:

- `27554c2 feat(animation): add Antonio Rafael rig articulation lab`
- `a6af7f1 docs(project): add official Unfallen README`
- `7db411c docs(animation): record Antonio Rafael rig articulation validation`
- `068a261 docs(animation): record Antonio Rafael rig visual validation`
- `7e48801 feat(animation): refine Antonio Rafael rig parts v1`
- `314b5e0 feat(animation): add Antonio Rafael rig assembly v1`
- `c9edd2f feat(animation): add Antonio Rafael rig parts separation v1`
- `9610c6e feat(animation): add Antonio Rafael technical rig pipeline`

Os arquivos não rastreados antigos não foram enviados no push anterior e não foram stageados nesta auditoria.

## Comandos Executados

Somente comandos de leitura/auditoria foram executados:

```powershell
git status --short --untracked-files=all
git ls-files --others --exclude-standard
git diff --name-only
git diff --stat
git log --oneline -10
git branch --show-current
```

Não foram executados `git add .`, `git add -A`, `git commit -am`, `git clean`, commit ou push.

## Estado Git Rastreado

Arquivos rastreados modificados no momento da auditoria:

- `.specify/feature.json`
- `AGENTS.md`

Resumo do diff rastreado:

```text
 .specify/feature.json | 2 +-
 AGENTS.md             | 2 +-
 2 files changed, 2 insertions(+), 2 deletions(-)
```

## Total de Untracked

- Total de untracked no snapshot inicial: **211**
- O snapshot inclui os artefatos ainda não versionados da própria feature 010 em `active_feature_artifacts`.
- Os documentos criados por esta implementação são saídas novas e não representam os protótipos antigos auditados.

## Grupos Encontrados

| Grupo | Quantidade | Risco | Recomendação |
|---|---:|---|---|
| active_feature_artifacts | 7 | low | keep_versioned_later |
| godot_import_files | 109 | high | needs_human_review |
| godot_uid_files | 2 | high | needs_human_review |
| manifest_files | 1 | medium | needs_human_review |
| old_specs | 15 | medium | needs_human_review |
| preview_assets | 3 | high | archive_later |
| rig_assets | 0 | low | needs_human_review |
| temporary_audit_files | 0 | low | needs_human_review |
| unknown_origin | 0 | low | needs_human_review |
| walk_candidates | 66 | high | archive_later |
| walk_prototypes | 8 | high | archive_later |

## Arquivos Sensíveis

- `.specify/feature.json`: modificado por estado local do Spec Kit; não incluir automaticamente em commit.
- `AGENTS.md`: modificado em etapa anterior para apontar ao plano 010; não é untracked antigo.
- `scenes/player/Player.tscn`: sem diff rastreado nesta auditoria.
- `scenes/rig/AntonioRafaelRigLab.tscn`: sem diff rastreado nesta auditoria.
- `assets/characters/antonio_rafael/sprites/idle/`: não alterado nesta auditoria.
- `assets/characters/antonio_rafael/rig/`: contém `.import` untracked e deve ser revisado com cuidado antes de qualquer versionamento.
- `scripts/player/` e `scripts/rig/`: não foram alterados; há `.uid` untracked em `scripts/rig/` exigindo revisão humana.
- `.gitignore`: não foi alterado.

## Recomendações por Grupo

### active_feature_artifacts

- Quantidade: 7
- Risco: `low`
- Recomendação: `keep_versioned_later`
- Observação: Artefatos da feature 010 atual.

### godot_import_files

- Quantidade: 109
- Risco: `high`
- Recomendação: `needs_human_review`
- Observação: Arquivos de importação gerados pelo Godot; política pendente.

### godot_uid_files

- Quantidade: 2
- Risco: `high`
- Recomendação: `needs_human_review`
- Observação: UIDs gerados pelo Godot; política pendente.

### manifest_files

- Quantidade: 1
- Risco: `medium`
- Recomendação: `needs_human_review`
- Observação: Manifests JSON de tentativas anteriores.

### old_specs

- Quantidade: 15
- Risco: `medium`
- Recomendação: `needs_human_review`
- Observação: Specs/checklists/designs antigos não rastreados.

### preview_assets

- Quantidade: 3
- Risco: `high`
- Recomendação: `archive_later`
- Observação: Previews/exports visuais de validação ou protótipo.

### rig_assets

- Quantidade: 0
- Risco: `low`
- Recomendação: `needs_human_review`
- Observação: Arquivos sob área de rig técnico; revisar com cuidado.

### temporary_audit_files

- Quantidade: 0
- Risco: `low`
- Recomendação: `needs_human_review`
- Observação: Arquivos temporários de auditoria.

### unknown_origin

- Quantidade: 0
- Risco: `low`
- Recomendação: `needs_human_review`
- Observação: Arquivos sem classificação automática segura.

### walk_candidates

- Quantidade: 66
- Risco: `high`
- Recomendação: `archive_later`
- Observação: Candidatos manuais/antigos de walk; não oficiais.

### walk_prototypes

- Quantidade: 8
- Risco: `high`
- Recomendação: `archive_later`
- Observação: Protótipos antigos de walk; não oficiais.

## Pendências

- Definir política do projeto para `.import` e `.uid`.
- Decidir se walk candidates/prototypes serão arquivados em feature própria ou mantidos localmente.
- Revisar specs antigas individualmente antes de commit ou remoção.
- Separar qualquer commit futuro por escopo aprovado, sem uso de `git add .` ou `git add -A`.
- Decidir o destino dos arquivos de origem incerta após revisão humana.

## Confirmações de Segurança

- Nada foi apagado.
- Nada foi movido.
- Nada foi renomeado.
- Nada foi stageado em massa.
- `git add .` não foi usado.
- `git add -A` não foi usado.
- `git commit -am` não foi usado.
- `git clean` não foi usado.
- `Player.tscn` não foi alterado.
- A cena de rig oficial não foi alterada.
- Scripts não foram alterados.
- Sprites idle aprovados não foram alterados.
- Assets oficiais não foram alterados.
- `.gitignore` não foi alterado.
- Não houve commit.
- Não houve push.

## Recomendação Final

Não realizar limpeza automática. Próxima etapa recomendada: gate humano para decidir, por grupo, quais arquivos serão mantidos localmente, arquivados em feature própria, ignorados futuramente, removidos futuramente ou versionados em commits pequenos e explícitos.

## Atualizacao 2026-06-21 - Feature 011 Archive Walk Prototypes V1

A feature `011-archive-walk-prototypes-v1` tratou os grupos anteriormente classificados como `archive_later`:

| Grupo | Quantidade feature 010 | Quantidade encontrada feature 011 | Quantidade arquivada | Destino | Status |
|---|---:|---:|---:|---|---|
| `walk_candidates` | 66 | 66 | 66 | `docs/archive/walk-prototypes-v1/files/` | Arquivado como historico |
| `walk_prototypes` | 8 | 8 | 8 | `docs/archive/walk-prototypes-v1/files/` | Arquivado como historico |
| `preview_assets` | 3 | 3 | 3 | `docs/archive/walk-prototypes-v1/files/` | Arquivado como historico |

Confirmacoes da feature 011:

- Os arquivos arquivados sao prototipos historicos/rejeitados.
- Os arquivos arquivados nao sao walk cycle oficial.
- Os arquivos arquivados nao sao animacao oficial.
- Os arquivos arquivados nao sao assets finais.
- Os arquivos arquivados nao devem ser integrados ao Player.
- `.import` continua fora do arquivamento.
- `.uid` continua fora do arquivamento.
- `old_specs` continuam pendentes.
- `manifest_files` fora do escopo continuam pendentes.
- Player, rig oficial, scripts, sprites idle aprovados e `.gitignore` nao foram alterados.

Documentos criados pela feature 011:

- `docs/archive/walk-prototypes-v1/README.md`
- `docs/archive/walk-prototypes-v1/manifest.md`
- `docs/technical/walk-prototypes-archive-v1.md`

## Atualizacao 2026-06-21 - Feature 012 Godot Import UID Policy V1

A feature `012-godot-import-uid-policy-v1` tratou documentalmente os grupos pendentes de arquivos Godot gerados:

| Grupo anterior | Quantidade feature 010 | Resultado feature 012 | Status |
|---|---:|---|---|
| `godot_import_files` | 109 | Reclassificado em grupos de politica `.import` | Decisao pendente |
| `godot_uid_files` | 2 | Reclassificado em grupos de politica `.uid` | Decisao pendente |

Classificacao encontrada na feature 012:

| Grupo | Quantidade | Risco | Recomendacao |
|---|---:|---|---|
| `official_asset_imports` | 32 | critical | needs_human_review |
| `prototype_imports` | 77 | high | remove_later em feature separada |
| `archive_imports` | 0 | low | ignore_later |
| `stale_imports` | 0 | high | remove_later |
| `unknown_imports` | 0 | high | needs_human_review |
| `official_uid_files` | 2 | critical | needs_human_review |
| `prototype_uid_files` | 0 | high | separate_feature |
| `stale_uid_files` | 0 | high | remove_later |
| `unknown_uid_files` | 0 | high | needs_human_review |

Confirmacoes da feature 012:

- `.import` e `.uid` foram auditados e documentados, nao limpos.
- `.gitignore` foi verificado e nao alterado.
- Nenhum `.import` foi apagado, movido ou stageado.
- Nenhum `.uid` foi apagado, movido ou stageado.
- Player, cena de rig, scripts, sprites idle aprovados e assets oficiais nao foram alterados.
- Nao houve gameplay, walk cycle ou animacao oficial.
- Nao houve commit.
- Nao houve push.

Documento criado pela feature 012:

- `docs/technical/godot-import-uid-policy-v1.md`

## Atualizacao 2026-06-21 - Feature 013 Remove Stale Prototype Imports V1

A feature `013-remove-stale-prototype-imports-v1` tratou somente o grupo `prototype_imports` identificado pela feature 012.

| Grupo | Quantidade anterior | Resultado feature 013 | Status |
|---|---:|---|---|
| `prototype_imports` | 77 | 77 `.import` removidos por lista explicita | Tratado |
| `official_asset_imports` | 32 | Nenhuma alteracao | Pendente |
| `official_uid_files` | 2 | Nenhuma alteracao | Pendente |
| `archive_imports` | 0 na feature 012 | Copias geradas localmente pelo Godot em `docs/archive/` ficaram fora | Fora do escopo |
| `old_specs` | Pendente | Nenhuma alteracao | Pendente |
| `manifest_files` | Pendente | Nenhuma alteracao | Pendente |

Confirmacoes da feature 013:

- A remocao foi limitada a `.import` obsoleto ligado a prototipos de walk rejeitados.
- Nenhum `.uid` foi removido.
- Nenhum asset oficial foi removido.
- Player, cena de rig, scripts, sprites idle aprovados, rig oficial e `.gitignore` nao foram alterados.
- Nao houve gameplay, walk cycle oficial ou animacao oficial.
- Nao houve commit.
- Nao houve push.

Documentos criados pela feature 013:

- `docs/technical/stale-prototype-imports-removal-v1.md`
- `docs/technical/stale-prototype-imports-removal-manifest-v1.md`

## Atualizacao 2026-06-23 - Feature 014 Review Official Rig Imports V1

A feature `014-review-official-rig-imports-v1` tratou documentalmente o grupo `official_asset_imports` identificado pela feature 012.

| Grupo 012 | Quantidade antes | Acao feature 014 | Status |
|---|---:|---|---|
| `official_asset_imports` | 32 | Revisao documental por arquivo | Recomendado `version_later` com gate humano futuro |
| Candidato adicional de rig preview | 1 | Registrado fora do snapshot 012 | `separate_feature` / `needs_human_review` |
| `official_uid_files` | 2 | Nenhuma alteracao | Pendente |
| `.import` em `docs/archive/` | 77 | Nenhuma alteracao | Fora do escopo |

Confirmacoes da feature 014:

- Nenhum `.import` foi apagado, movido, editado, stageado ou versionado.
- Nenhum `.uid` foi apagado, movido, editado, stageado ou versionado.
- `.gitignore` nao foi alterado.
- Player, cena de rig, scripts, sprites idle aprovados e assets oficiais nao foram alterados.
- Ainda nao existe caminhada articulada oficial no projeto.
- Nenhum walk cycle, animacao oficial ou gameplay foi criado.

Documentos criados pela feature 014:

- `docs/technical/official-rig-imports-review-v1.md`
- `docs/technical/official-rig-imports-review-manifest-v1.md`
