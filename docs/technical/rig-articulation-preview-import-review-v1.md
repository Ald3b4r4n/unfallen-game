# Rig Articulation Preview Import Review V1

**Feature**: `015-review-rig-articulation-preview-import-v1`  
**Data da auditoria**: 2026-06-23  
**Branch**: `015-review-rig-articulation-preview-import-v1`  
**Status**: revisao documental concluida; aguardando gate humano.  
**Escopo**: auditar, revisar e documentar exclusivamente o `.import` adicional do preview da Rig Articulation Test V1.

## Observacao Obrigatoria

```txt
Ainda nao existe caminhada articulada oficial no projeto.
O rig atual e tecnico/laboratorial.
O preview da Rig Articulation Test V1 e evidencia visual de teste tecnico do rig, nao walk cycle oficial.
Esta feature nao valida walk cycle.
Esta feature nao cria walk cycle.
Esta feature nao integra walk cycle ao Player.
Esta feature nao transforma o rig em animacao oficial.
```

## Objetivo

Revisar o candidato adicional:

```txt
assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import
```

Esse arquivo foi observado pela feature `014-review-official-rig-imports-v1` fora do snapshot dos `32 official_asset_imports` definidos pela politica da feature 012. A revisao atual decide somente uma recomendacao futura, sem executar versionamento, remocao, ignore rule, stage, commit ou push.

## Fontes Usadas

- `docs/technical/godot-import-uid-policy-v1.md`
- `docs/technical/official-rig-imports-review-v1.md`
- `docs/technical/official-rig-imports-review-manifest-v1.md`
- `docs/technical/stale-prototype-imports-removal-v1.md`
- `docs/technical/stale-prototype-imports-removal-manifest-v1.md`
- `docs/technical/untracked-cleanup-audit-v1.md`
- `docs/technical/untracked-cleanup-inventory-v1.md`
- `docs/project/repository-hygiene.md`
- `docs/technical/rig-articulation-test-v1.md`
- `docs/technical/rig-refinement-v1.md`
- `docs/technical/rig-assembly-v1.md`
- `specs/015-review-rig-articulation-preview-import-v1/spec.md`
- `specs/015-review-rig-articulation-preview-import-v1/plan.md`
- `specs/015-review-rig-articulation-preview-import-v1/research.md`
- `specs/015-review-rig-articulation-preview-import-v1/data-model.md`
- `specs/015-review-rig-articulation-preview-import-v1/quickstart.md`
- `specs/015-review-rig-articulation-preview-import-v1/tasks.md`

## Comandos De Auditoria Executados

Somente comandos de leitura/auditoria foram usados:

```powershell
git status --short --untracked-files=all
git ls-files --others --exclude-standard
git ls-files "*.import"
git ls-files "*.uid"
git diff --name-only
git diff --stat
git diff --name-status -- "*.import"
git diff --name-status -- "*.uid"
Get-ChildItem -Recurse -Filter "*.import"
Get-ChildItem -Recurse -Filter "*.uid"
```

Nao foram usados `git add .`, `git add -A`, `git commit -am`, `git clean`, commit ou push.

## Resultado Da Auditoria

| Item | Resultado |
|---|---|
| Candidato `.import` existe | yes |
| Candidato `.import` rastreado pelo Git | no, untracked |
| PNG de origem existe | yes |
| PNG de origem rastreado pelo Git | yes |
| `.import` aponta para o PNG esperado | yes |
| `.import` alterado nesta feature | no |
| `.uid` alterado nesta feature | no |
| `.gitignore` alterado nesta feature | no |

Arquivo de origem relacionado:

```txt
assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png
```

Trecho relevante do `.import`:

```txt
source_file="res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png"
```

## Relacao Com Feature 012

A feature `012-godot-import-uid-policy-v1` classificou os imports oficiais do rig em grupo `official_asset_imports`, mas o candidato de articulacao nao fazia parte do snapshot inicial de 32 itens. A politica da feature 012 continua valida:

- nao versionar `.import` em massa;
- nao ignorar `.import` globalmente;
- revisar imports oficiais por caminhos explicitos;
- manter gate humano antes de qualquer commit.

## Relacao Com Feature 014

A feature `014-review-official-rig-imports-v1` revisou 32 official rig imports e registrou este candidato como item adicional:

```txt
assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import
```

Naquele momento, ele ficou marcado como `separate_feature` / `needs_human_review`. A revisao atual conclui que o arquivo deve ser tratado como candidato a agrupamento futuro com os official rig imports, porque:

- o PNG de origem existe;
- o PNG de origem ja e rastreado;
- o import aponta para o PNG esperado;
- o preview pertence ao marco Rig Articulation Test V1;
- o preview e evidencia tecnica validada, nao prototipo de walk rejeitado.

## Relacao Com Feature 013

O candidato nao pertence aos `prototype_imports` tratados pela feature `013-remove-stale-prototype-imports-v1`.

Motivo:

- os stale prototype imports tinham fonte original ausente;
- este candidato tem fonte PNG existente;
- este candidato esta em `assets/characters/antonio_rafael/rig/previews/`;
- a origem esta ligada a rig tecnico validado, nao a walk candidate rejeitado.

## Relacao Com Rig Articulation Test V1

O PNG de origem:

```txt
assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png
```

e o preview de validacao humana da **Rig Articulation Test V1**, aprovada parcialmente como teste tecnico de laboratorio.

Essa relacao nao transforma o preview em animacao oficial. Os estados `test_neutral`, `test_head`, `test_torso`, `test_arms`, `test_legs` e `test_combined_pose` continuam sendo testes tecnicos de articulacao, nao movimento final de jogo.

## Relacao Com Rig Tecnico Validado

O candidato esta associado ao laboratorio tecnico do rig do SGT Antonio Rafael, que inclui:

- Rig Parts Separation V1;
- Rig Assembly V1;
- Rig Refinement V1;
- Rig Articulation Test V1.

O rig continua sendo ferramenta de producao/laboratorio. Ele nao substitui o Player runtime e nao autoriza assets finais.

## Risco

Risco identificado: `critical`.

Justificativa:

- o arquivo se relaciona a preview tecnico validado do rig;
- a fonte PNG existe e e rastreada;
- decisao incorreta pode prejudicar reprodutibilidade visual do preview no Godot;
- decisao incorreta tambem pode confundir evidencia de teste tecnico com walk cycle oficial.

Mitigacao:

- nao executar nenhuma acao nesta feature;
- manter `.gitignore` inalterado;
- recomendar futuro agrupamento com official rig imports somente com gate humano e paths explicitos;
- manter declaracao clara de que nao existe caminhada articulada oficial.

## Status E Recomendacao

Status atribuido:

```txt
articulation_preview_import_join_official_rig_imports
```

Recomendacao futura:

```txt
join_official_rig_imports
```

Leitura: o candidato deve ser considerado, em feature ou gate futuro, como complemento aos official rig imports. Ele nao deve ser removido como stale prototype import e nao deve ser ignorado automaticamente.

Esta recomendacao nao foi executada.

## Decisao Sugerida Para `.gitignore`

Nao alterar `.gitignore`.

Nao criar regra global para `.import`, porque o repositorio ja versiona imports oficiais e o projeto usa politica seletiva. Se uma regra futura for criada, ela deve preservar excecoes para imports oficiais aprovados e previews tecnicos validados.

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
- `assets/characters/antonio_rafael/rig/` foi somente lido/auditado; nenhum asset oficial foi alterado.
- Nenhuma caminhada articulada oficial foi criada.
- Nenhum walk cycle foi criado.
- Nenhuma animacao oficial foi criada.
- Nenhum gameplay foi criado.
- Nao houve commit.
- Nao houve push.

## Pendencias

- Gate humano para aprovar, aprovar parcialmente ou reprovar a recomendacao `join_official_rig_imports`.
- Se aprovado futuramente, tratar o `.import` com path explicito em commit separado, sem `git add .`.
- Revisar em feature separada os 2 `.uid` oficiais de `scripts/rig/`.
- Manter imports em `docs/archive/` fora desta decisao.

## Recomendacao Final

Status recomendado: **APROVAR PARCIALMENTE** como revisao documental do import adicional de preview de articulacao.

Proxima acao recomendada: commit controlado apenas dos documentos da feature 015 e artefatos Spec Kit, se aprovado humanamente. Qualquer versionamento futuro do `.import` deve ocorrer em etapa separada ou gate explicito, com path literal.

## Atualizacao 2026-06-24 - Feature 016

A feature `016-rig-imports-versioning-and-articulated-walk-lab-prep-v1` revalidou o candidato:

```txt
assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import
```

Resultado:

- PNG de origem existe.
- PNG de origem e rastreado.
- O `.import` aponta para o PNG esperado.
- O item permanece evidencia tecnica de laboratorio, nao walk cycle oficial.
- O item foi consolidado junto aos imports oficiais do rig para stage explicito por path individual.
- Nenhum `.uid`, `.gitignore`, Player, cena, script, sprite idle ou PNG/asset oficial foi alterado.

Ainda nao existe caminhada articulada oficial no projeto.
