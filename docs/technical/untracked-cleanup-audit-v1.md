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
