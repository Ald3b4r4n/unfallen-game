# Official Rig Imports Review V1

**Feature**: `014-review-official-rig-imports-v1`  
**Data da auditoria**: 2026-06-23  
**Branch**: `014-review-official-rig-imports-v1`  
**Status**: revisao documental concluida; aguardando gate humano.  
**Escopo**: revisar os `32 official_asset_imports` ligados ao rig tecnico validado do SGT Antonio Rafael, sem remover, mover, stagear, versionar ou alterar arquivos `.import` ou `.uid`.

## Observacao Obrigatoria

```txt
Ainda nao existe caminhada articulada oficial no projeto.
O rig atual e tecnico/laboratorial.
Esta feature nao valida walk cycle.
Esta feature nao cria walk cycle.
Esta feature nao integra walk cycle ao Player.
Esta feature nao transforma o rig em animacao oficial.
```

Esta revisao considera somente reprodutibilidade futura do rig tecnico, das partes do rig e dos previews tecnicos no Godot. Os `.import` revisados nao sao prova de caminhada final, animacao oficial ou asset runtime.

## Fontes Usadas

- `docs/technical/godot-import-uid-policy-v1.md`
- `docs/technical/stale-prototype-imports-removal-v1.md`
- `docs/technical/stale-prototype-imports-removal-manifest-v1.md`
- `docs/technical/untracked-cleanup-audit-v1.md`
- `docs/technical/untracked-cleanup-inventory-v1.md`
- `docs/project/repository-hygiene.md`
- `docs/technical/rig-parts-separation.md`
- `docs/technical/rig-assembly-v1.md`
- `docs/technical/rig-refinement-v1.md`
- `docs/technical/rig-articulation-test-v1.md`
- `specs/014-review-official-rig-imports-v1/spec.md`
- `specs/014-review-official-rig-imports-v1/plan.md`
- `specs/014-review-official-rig-imports-v1/research.md`
- `specs/014-review-official-rig-imports-v1/data-model.md`
- `specs/014-review-official-rig-imports-v1/quickstart.md`
- `specs/014-review-official-rig-imports-v1/tasks.md`

## Comandos De Auditoria Executados

Somente comandos de leitura/auditoria foram usados:

```powershell
git status --short --untracked-files=all
git diff --name-only
git diff --stat
git diff --name-status -- "*.import"
git diff --name-status -- "*.uid"
git ls-files --others --exclude-standard
git ls-files "*.import"
git ls-files "*.uid"
Get-ChildItem -Recurse -Filter "*.import"
Get-ChildItem -Recurse -Filter "*.uid"
```

Nao foram usados `git add .`, `git add -A`, `git commit -am`, `git clean`, commit ou push.

## Estado Encontrado

| Item | Quantidade | Observacao |
|---|---:|---|
| Untracked total | 135 | Inclui specs antigas, arquivo historico, imports, uids e artefatos da feature 014 |
| `.import` untracked | 110 | 32 oficiais do rig, 1 candidato adicional de rig e 77 imports em `docs/archive/` |
| `.uid` untracked | 2 | `scripts/rig/rig_export_notes.gd.uid` e `scripts/rig/rig_preview_controller.gd.uid`; fora do escopo |
| `.import` rastreados | 35 | Ja existem imports versionados no repositorio |
| `.uid` rastreados | 4 | Ja existem UIDs versionados para scripts oficiais |
| `.import` no filesystem | 145 | Soma de rastreados e untracked |
| `.uid` no filesystem | 6 | Soma de rastreados e untracked |

Diff rastreado no inicio da auditoria:

```txt
.specify/feature.json
AGENTS.md
```

Essas alteracoes pertencem ao estado local do Spec Kit/planejamento. Nenhum arquivo sensivel do runtime apareceu no diff rastreado.

## Resultado Da Revisao

| Metrica | Total |
|---|---:|
| `official_asset_imports` esperados pela feature 012 | 32 |
| `official_asset_imports` avaliados nesta feature | 32 |
| PNGs de origem existentes entre os 32 | 32 |
| PNGs de origem ausentes entre os 32 | 0 |
| Itens recomendados para manter local | 0 |
| Itens recomendados para versionar futuramente | 32 |
| Itens recomendados para ignorar futuramente | 0 |
| Itens pendentes de revisao humana dentro dos 32 | 0 |
| Candidato adicional fora do snapshot 012 | 1 |

Observacao: qualquer acao futura sobre os 32 imports continua dependendo de gate humano. A recomendacao `version_later` nao executa stage, commit ou versionamento nesta feature.

## Grupos Avaliados

| Grupo | Quantidade | Risco | Recomendacao |
|---|---:|---|---|
| `rig_part_import` | 22 | critical | `version_later` |
| `rig_backup_related_import` | 6 | critical | `version_later` |
| `rig_preview_import` | 3 | critical | `version_later` |
| `rig_manifest_related_import` | 1 | critical | `version_later` |

### Candidato adicional fora da contagem oficial

Foi encontrado um `.import` adicional sob `assets/characters/antonio_rafael/rig/`:

```txt
assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import
```

O PNG de origem existe e o arquivo se relaciona ao preview da `Rig Articulation Test V1`, mas ele nao fazia parte do snapshot de `32 official_asset_imports` registrado pela feature 012. Portanto, ele foi mantido fora da contagem oficial desta feature e marcado para `separate_feature`/`needs_human_review`.

## Riscos Identificados

- `critical`: os 32 imports pertencem a partes, backups, previews ou recomposicao do rig tecnico validado. Uma decisao errada pode afetar reprodutibilidade visual no Godot ou confundir assets oficiais com residuos.
- `high`: imports em `docs/archive/walk-prototypes-v1/files/` continuam fora do escopo desta feature; eles sao residuos de arquivo historico/prototipo e nao devem ser misturados com rig oficial.
- `medium`: `.uid` oficiais de `scripts/rig/` continuam pendentes de feature propria.
- `low`: documentacao e inventario atualizados por esta feature.

## Politica Recomendada

1. Nao alterar `.gitignore` nesta feature.
2. Nao criar regra global para ignorar `.import`, porque o repositorio ja versiona imports oficiais.
3. Tratar os 32 official rig imports em commit futuro separado, se aprovado humanamente, usando caminhos explicitos.
4. Manter `.uid` fora desta decisao; revisar os 2 official UID files em feature separada.
5. Manter imports de prototipos/arquivo historico fora do escopo do rig oficial.
6. Nao misturar imports oficiais com Player, cenas, scripts, gameplay, sprites idle ou assets oficiais em alteracao de runtime.

## Decisao Sugerida Para `.gitignore`

Nao alterar `.gitignore` agora.

Recomendacao futura: se o projeto decidir criar politica de ignore para imports gerados, ela deve ser seletiva e documentada, sem esconder imports oficiais do rig, sprites aprovados ou assets validados.

## Confirmacoes De Seguranca

- Nenhum `.import` foi removido.
- Nenhum `.import` foi movido.
- Nenhum `.import` foi editado.
- Nenhum `.import` foi stageado.
- Nenhum `.import` foi versionado.
- Nenhum `.uid` foi removido.
- Nenhum `.uid` foi movido.
- Nenhum `.uid` foi editado.
- Nenhum `.uid` foi stageado.
- Nenhum `.uid` foi versionado.
- `.gitignore` nao foi alterado.
- `scenes/player/Player.tscn` nao foi alterado.
- `scenes/rig/AntonioRafaelRigLab.tscn` nao foi alterado.
- `scripts/player/` nao foi alterado.
- `scripts/rig/` nao foi alterado.
- `assets/characters/antonio_rafael/sprites/idle/` nao foi alterado.
- `assets/characters/antonio_rafael/rig/` foi apenas lido para auditoria; nenhum asset oficial foi alterado.
- Nenhuma caminhada articulada oficial existe ou foi criada.
- Nenhum walk cycle foi criado.
- Nenhuma animacao oficial foi criada.
- Nenhum gameplay foi criado.
- `git add .` nao foi usado.
- `git add -A` nao foi usado.
- `git commit -am` nao foi usado.
- `git clean` nao foi usado.
- Nao houve commit.
- Nao houve push.

## Pendencias

- Gate humano para decidir se os 32 official rig `.import` devem entrar em commit futuro separado.
- Feature separada para revisar o import adicional `antonio_rafael_rig_articulation_test_v1_preview.png.import`.
- Feature separada para revisar os 2 `.uid` oficiais de `scripts/rig/`.
- Validacao no Godot, se a equipe quiser confirmar impacto real de versionar ou nao versionar imports do rig.

## Recomendacao Final

Status recomendado: **APROVAR PARCIALMENTE** como revisao documental dos official rig imports.

Proxima etapa recomendada: apos validacao humana, preparar um commit controlado apenas com documentos da feature 014 e artefatos Spec Kit. Qualquer commit futuro dos 32 `.import` deve ser uma feature separada ou gate explicito, com caminhos exatos e sem `git add .`.

## Atualizacao 2026-06-23 - Feature 015 Review Rig Articulation Preview Import V1

A feature `015-review-rig-articulation-preview-import-v1` revisou o candidato adicional que havia ficado fora do snapshot dos 32 official rig imports:

```txt
assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import
```

Resultado da revisao:

| Campo | Valor |
|---|---|
| PNG de origem | `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png` |
| PNG de origem existe | yes |
| PNG de origem rastreado | yes |
| `.import` rastreado | no, untracked |
| Relacao | preview tecnico da Rig Articulation Test V1 |
| Risco | critical |
| Status | `articulation_preview_import_join_official_rig_imports` |
| Recomendacao | `join_official_rig_imports` com gate humano futuro |

Esta atualizacao nao altera a contagem historica de 32 itens avaliados pela feature 014. Ela apenas registra que o candidato adicional agora possui revisao propria e pode ser considerado complemento futuro dos official rig imports, mediante aprovacao humana e path explicito.

Confirmacoes preservadas:

- O item nao foi stageado, versionado, movido, removido ou editado.
- `.gitignore` permanece inalterado.
- Nenhum `.uid` foi alterado.
- Player, cena de rig, scripts, sprites idle aprovados e assets oficiais nao foram alterados.
- O preview nao e walk cycle oficial.
- Ainda nao existe caminhada articulada oficial no projeto.

## Atualizacao 2026-06-24 - Feature 016

A feature `016-rig-imports-versioning-and-articulated-walk-lab-prep-v1` consolidou a recomendacao `version_later` dos 32 imports oficiais revisados por esta feature.

Resultado:

- 32 official rig imports revalidados.
- 32 official rig imports aprovados para stage explicito por paths individuais.
- O import adicional do preview de articulacao, revisado na feature 015, foi tratado como complemento separado dentro da contagem total de 33.
- Nenhum `.uid` foi stageado.
- `.gitignore` permaneceu inalterado.
- Player, cenas, scripts, sprites idle e PNGs/assets oficiais nao foram alterados.

Esta atualizacao nao transforma os imports em walk cycle oficial, animacao oficial ou gameplay.
