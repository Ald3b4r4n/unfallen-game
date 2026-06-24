# Godot Import UID Policy V1

**Data da auditoria**: 2026-06-21  
**Branch**: `012-godot-import-uid-policy-v1`  
**Status**: politica documental criada; aguardando gate humano.  
**Escopo**: auditoria e recomendacao sobre arquivos `.import` e `.uid` do Godot.

Esta feature nao executa limpeza. Nenhum `.import` ou `.uid` foi movido, apagado, stageado, commitado ou enviado por push.

## Contexto

Depois do push seguro da feature `011-archive-walk-prototypes-v1`, permaneceram arquivos locais gerados pelo Godot, principalmente `.import` e `.uid`.

A decisao desta feature e definir uma politica antes de qualquer acao sobre esses arquivos. Os arquivos auditados podem estar ligados a assets oficiais, prototipos rejeitados, arquivos historicos ou sobras antigas.

## Comandos de Auditoria Executados

Somente comandos de leitura/auditoria foram utilizados:

```powershell
git status --short --untracked-files=all
git ls-files --others --exclude-standard
git ls-files '*.import'
git ls-files '*.uid'
git diff --name-only
git diff --stat
git log --oneline -10
Get-ChildItem -Recurse -Filter '*.import'
Get-ChildItem -Recurse -Filter '*.uid'
```

Nao foram executados `git add .`, `git add -A`, `git commit -am`, `git clean`, commit ou push.

## Estado Atual Encontrado

| Item | Quantidade | Observacao |
|---|---:|---|
| `.import` untracked | 109 | Arquivos gerados pelo Godot fora do Git |
| `.uid` untracked | 2 | UIDs de scripts do rig fora do Git |
| `.import` rastreados | 35 | O repositorio ja versiona alguns imports |
| `.uid` rastreados | 4 | O repositorio ja versiona UIDs de scripts oficiais |
| `.import` no filesystem | 144 | Soma de rastreados e untracked |
| `.uid` no filesystem | 6 | Soma de rastreados e untracked |

## `.import` Ja Rastreados

O repositorio ja rastreia 35 arquivos `.import`.

Exemplos:

- `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front.png.import`
- `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png.import`
- `assets/characters/antonio_rafael/source/official_round_01/antonio_rafael_idle_front_source.png.import`
- `assets/characters/antonio_rafael/references/ref_1.jpg.import`
- `icon.svg.import`

Leitura: a politica atual do repositorio nao e "nunca versionar `.import`". Ja existem imports versionados para idle aprovado, referencias e assets historicos. Por isso, a decisao futura deve ser seletiva e nao global.

## `.uid` Ja Rastreados

O repositorio ja rastreia 4 arquivos `.uid`.

Arquivos:

- `scripts/camera/camera_follow.gd.uid`
- `scripts/player/isometric_movement.gd.uid`
- `scripts/player/player_animation_controller.gd.uid`
- `scripts/player/player_controller.gd.uid`

Leitura: o repositorio ja aceita UIDs de scripts oficiais do runtime. UIDs novos ligados a scripts oficiais podem ser candidatos a `version_later`, mas somente com paths explicitos e revisao humana.

## `.gitignore`

`.gitignore` foi verificado em modo somente leitura.

Resultado:

- Nao menciona `.import`.
- Nao menciona `.uid`.
- Nao menciona `.godot/imported`.
- Nao menciona `.godot/uid_cache.bin`.
- Nao foi alterado nesta feature.

Politica implicita atual: mista e parcialmente ambigua. O projeto versiona alguns `.import` e `.uid`, mas ainda nao possui regra documentada para distinguir oficial, prototipo, stale ou local.

## Classificacao dos `.import` Untracked

| Grupo | Quantidade | Origem relacionada | Origem existe | Risco | Recomendacao | Decisao |
|---|---:|---|---|---|---|---|
| `official_asset_imports` | 32 | Rig tecnico validado e partes/refinamentos do rig | 32 sim / 0 nao | critical | needs_human_review | Pendente |
| `prototype_imports` | 77 | Walk candidates/prototypes e previews antigos | 0 sim / 77 nao | high | remove_later | Pendente em feature separada |
| `archive_imports` | 0 | Arquivo historico em `docs/archive/` | n/a | low | ignore_later | Sem itens |
| `stale_imports` | 0 | Sem origem reconhecida e fonte ausente | n/a | high | remove_later | Sem itens |
| `unknown_imports` | 0 | Origem nao inferida | n/a | high | needs_human_review | Sem itens |

### Exemplos de `official_asset_imports`

- `assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png.import`
- `assets/characters/antonio_rafael/rig/parts/front_right/backpack.png.import`
- `assets/characters/antonio_rafael/rig/parts/front_right/neck.png.import`
- `assets/characters/antonio_rafael/rig/parts/front_right/pelvis.png.import`
- `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png.import`

Esses arquivos estao ligados ao rig tecnico validado. Eles nao devem ser apagados nem ignorados em massa. A decisao correta e revisao humana para decidir se entram em commit futuro separado, junto de politica Godot.

### Exemplos de `prototype_imports`

- `assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/antonio_rafael_walk_manual_candidate_v1_complete_preview.png.import`
- `assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/antonio_rafael_walk_manual_candidate_v1_preview.png.import`
- `assets/characters/antonio_rafael/exports/walk_prototype_v5/antonio_rafael_walk_left_v5_preview.png.import`
- `assets/characters/antonio_rafael/source/antonio_rafael_walk_sheet_candidate_v1.png.import`
- `assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_01.png.import`

Os 77 itens deste grupo apontam para PNGs que nao existem mais nos caminhos originais, porque os prototipos foram tratados como arquivo historico na feature 011. Eles nao sao walk cycle oficial, nao sao animacao oficial e nao devem ser integrados ao Player.

## Classificacao dos `.uid` Untracked

| Grupo | Quantidade | Origem relacionada | Origem existe | Risco | Recomendacao | Decisao |
|---|---:|---|---|---|---|---|
| `official_uid_files` | 2 | Scripts oficiais do rig | 2 sim / 0 nao | critical | needs_human_review | Pendente |
| `prototype_uid_files` | 0 | Prototipos ou scripts temporarios | n/a | high | separate_feature | Sem itens |
| `stale_uid_files` | 0 | Fonte ausente | n/a | high | remove_later | Sem itens |
| `unknown_uid_files` | 0 | Origem nao inferida | n/a | high | needs_human_review | Sem itens |

Arquivos em `official_uid_files`:

- `scripts/rig/rig_export_notes.gd.uid` -> `scripts/rig/rig_export_notes.gd`
- `scripts/rig/rig_preview_controller.gd.uid` -> `scripts/rig/rig_preview_controller.gd`

Esses UIDs estao ligados a scripts do rig tecnico. Como `scripts/rig/` e area sensivel, eles exigem decisao humana especifica antes de qualquer commit.

## Relacao com Areas Oficiais

- Base Idle Oficial V1: os `.import` dos 8 idles ja estao rastreados.
- Rig tecnico validado: existem 32 `.import` untracked ligados a assets do rig.
- Scripts do rig: existem 2 `.uid` untracked ligados a scripts do rig.
- Player runtime: nao ha `.uid` untracked em `scripts/player/`; os UIDs do Player ja estao rastreados.
- Prototipos rejeitados: existem 77 `.import` untracked ligados a walk candidates/prototypes com fonte ausente.
- `docs/archive/`: nao foram encontrados `.import` untracked dentro de `docs/archive/walk-prototypes-v1/`.

## Politica Recomendada

1. Nao versionar `.import` em massa.
2. Versionar `.import` somente quando estiver ligado a asset oficial aprovado ou necessario para reprodutibilidade visual no Godot.
3. `.import` ligado a prototipo rejeitado, arquivo antigo, fonte ausente ou arquivo historico nao deve ser versionado.
4. `.import` de prototipos com fonte ausente deve ser candidato a `remove_later`, mas somente em feature propria com gate humano.
5. `.import` ligado ao rig tecnico validado deve receber revisao humana e, se aprovado, commit separado com paths explicitos.
6. Nao versionar `.uid` em massa.
7. `.uid` de scripts/cenas oficiais pode ser candidato a `version_later`, mas deve ser validado com Godot e commitado separadamente.
8. `.uid` de prototipos, recursos ausentes ou origem desconhecida deve ficar como `needs_human_review`, `remove_later` ou `separate_feature`.
9. Nao alterar `.gitignore` nesta feature.
10. Qualquer mudanca futura em `.gitignore` deve ser planejada em feature propria, evitando regra global cega que esconda UIDs/imports oficiais.
11. Nunca misturar `.import`/`.uid` com alteracoes de Player, cenas, scripts, assets oficiais ou gameplay no mesmo commit sem aprovacao explicita.

## Decisao Sugerida para `.gitignore`

Nao alterar agora.

Recomendacao para feature futura:

- Avaliar uma politica especifica para imports de prototipos/stale, sem ignorar automaticamente imports oficiais.
- Evitar ignorar `.uid` globalmente ate confirmar a politica desejada para Godot 4 no projeto.
- Se houver regra futura, documentar claramente excecoes para assets/scripts/cenas oficiais.

## Pendencias

- Decidir se os 32 `.import` ligados ao rig tecnico entram em commit futuro separado.
- Decidir se os 2 `.uid` de `scripts/rig/` entram em commit futuro separado.
- Criar feature separada para remover ou ignorar os 77 `.import` de prototipos com origem ausente.
- Manter specs antigas e manifest antigo fora desta decisao.
- Validar no Godot, se necessario, antes de alterar politica de `.uid`.

## Confirmacoes de Seguranca

- Nenhum `.import` foi apagado.
- Nenhum `.uid` foi apagado.
- Nenhum `.import` foi movido.
- Nenhum `.uid` foi movido.
- Nenhum `.import` foi stageado em massa.
- Nenhum `.uid` foi stageado em massa.
- `.gitignore` foi verificado e nao alterado.
- `Player.tscn` nao foi alterado.
- `AntonioRafaelRigLab.tscn` nao foi alterada.
- Scripts nao foram alterados.
- Sprites idle aprovados nao foram alterados.
- Assets oficiais do rig nao foram alterados.
- Nenhum gameplay foi criado.
- Nenhum walk cycle foi criado.
- Nenhuma animacao oficial foi criada.
- `git add .` nao foi usado.
- `git add -A` nao foi usado.
- `git commit -am` nao foi usado.
- `git clean` nao foi usado.
- Nao houve commit.
- Nao houve push.

## Recomendacao Final

Status recomendado: **APROVAR PARCIALMENTE** como politica documental.

Proxima etapa recomendada: criar uma feature separada para decidir a aplicacao da politica, começando por um commit controlado dos `.uid` de `scripts/rig/` e/ou dos `.import` oficiais do rig, ou por uma feature de remocao segura dos `.import` stale de prototipos. Nenhuma dessas acoes deve acontecer sem novo gate humano.

## Atualizacao 2026-06-21 - Feature 013 Remove Stale Prototype Imports V1

A feature `013-remove-stale-prototype-imports-v1` aplicou a politica definida aqui somente ao grupo `prototype_imports`.

Resultado:

| Grupo | Quantidade feature 012 | Quantidade avaliada feature 013 | Quantidade removida | Status |
|---|---:|---:|---:|---|
| `prototype_imports` | 77 | 77 | 77 | Removido como `.import` obsoleto de prototipo |
| `official_asset_imports` | 32 | 0 | 0 | Mantido para revisao humana futura |
| `official_uid_files` | 2 | 0 | 0 | Mantido para revisao humana futura |

Confirmacoes:

- Apenas `.import` de prototipos antigos/rejeitados foi removido.
- Nenhum `.uid` foi removido.
- Nenhum `.import` de asset oficial foi removido.
- `.import` dentro de `docs/archive/walk-prototypes-v1/files/` ficou fora desta remocao.
- Base Idle Oficial V1, rig validado, Player, cenas, scripts e `.gitignore` nao foram alterados.

Documentos da feature 013:

- `docs/technical/stale-prototype-imports-removal-v1.md`
- `docs/technical/stale-prototype-imports-removal-manifest-v1.md`

## Atualizacao 2026-06-23 - Feature 014 Review Official Rig Imports V1

A feature `014-review-official-rig-imports-v1` revisou documentalmente os `32 official_asset_imports` ligados ao rig tecnico validado do SGT Antonio Rafael.

Resultado:

| Grupo | Quantidade | Status | Recomendacao |
|---|---:|---|---|
| `official_asset_imports` | 32 | revisado | `version_later` com gate humano futuro |
| Candidato adicional de rig preview | 1 | fora do snapshot 012 | `separate_feature` / `needs_human_review` |
| `official_uid_files` | 2 | nao tratado | feature separada |

Confirmacoes:

- Nenhum `.import` foi removido, movido, editado, stageado ou versionado.
- Nenhum `.uid` foi removido, movido, editado, stageado ou versionado.
- `.gitignore` nao foi alterado.
- Player, cena de rig, scripts, sprites idle aprovados e assets oficiais nao foram alterados.
- Ainda nao existe caminhada articulada oficial no projeto.
- Nenhum walk cycle foi criado.
- Nenhuma animacao oficial foi criada.
- Nenhum gameplay foi criado.

Decisao sugerida para `.gitignore`: manter inalterado. Nao criar regra global para `.import`; qualquer versionamento futuro deve ser seletivo, com caminhos explicitos e novo gate humano.

Documentos da feature 014:

- `docs/technical/official-rig-imports-review-v1.md`
- `docs/technical/official-rig-imports-review-manifest-v1.md`

## Atualizacao 2026-06-23 - Feature 015 Review Rig Articulation Preview Import V1

A feature `015-review-rig-articulation-preview-import-v1` revisou documentalmente o candidato adicional registrado pela feature 014:

```txt
assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import
```

Resultado:

| Item | Resultado |
|---|---|
| Candidato adicional | 1 `.import` |
| PNG de origem | existe e e rastreado |
| Status | `articulation_preview_import_join_official_rig_imports` |
| Risco | critical |
| Recomendacao | `join_official_rig_imports` com gate humano futuro |

Confirmacoes:

- Nenhum `.import` foi removido, movido, editado, stageado ou versionado.
- Nenhum `.uid` foi removido, movido, editado, stageado ou versionado.
- `.gitignore` nao foi alterado.
- Player, cena de rig, scripts, sprites idle aprovados e assets oficiais nao foram alterados.
- O preview e evidencia visual de teste tecnico do rig, nao walk cycle oficial.
- Ainda nao existe caminhada articulada oficial no projeto.
- Nenhuma animacao oficial foi criada.
- Nenhum gameplay foi criado.

Decisao sugerida para `.gitignore`: manter inalterado. Nao criar regra global para `.import`; qualquer inclusao futura deste item deve usar path explicito e gate humano.

Documentos da feature 015:

- `docs/technical/rig-articulation-preview-import-review-v1.md`
- `docs/technical/rig-articulation-preview-import-review-manifest-v1.md`

## Atualizacao 2026-06-24 - Feature 016 Rig Imports Versioning and Articulated Walk Lab Prep V1

A feature `016-rig-imports-versioning-and-articulated-walk-lab-prep-v1` aplicou a politica seletiva de `.import` aos imports oficiais do rig tecnico validado.

Resultado:

| Grupo | Quantidade | Status | Decisao |
|---|---:|---|---|
| `official_asset_imports` | 32 | revalidado | stage explicito por path individual |
| `articulation_preview_import` | 1 | revalidado | stage explicito por path individual |
| `.uid` | 0 | fora do escopo | nao stageado |

Confirmacoes:

- Nenhum `.uid` foi versionado ou stageado.
- `.gitignore` nao foi alterado.
- Nenhum PNG/asset oficial foi alterado.
- Player, cenas e scripts nao foram alterados.
- Nao foi usado `git add .`, `git add -A`, `git commit -am` ou `git clean`.
- Ainda nao existe caminhada articulada oficial no projeto.
- A proxima etapa recomendada e `017-articulated-walk-lab-v1`.

Documentos da feature 016:

- `docs/technical/official-rig-imports-versioning-v1.md`
- `docs/technical/articulated-walk-lab-prep-v1.md`
