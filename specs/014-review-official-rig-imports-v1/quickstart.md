# Quickstart: Review Official Rig Imports V1

Este quickstart descreve como validar futuramente a implementacao da feature 014 depois de `tasks.md` aprovado. Nesta etapa de planejamento, nao remover arquivos, nao alterar `.gitignore`, nao mover, nao stagear, nao commitar e nao fazer push.

## 1. Confirmar branch e estado

```powershell
git branch --show-current
git status --short --untracked-files=all
git diff --name-only
git diff --stat
```

Esperado:

- branch `014-review-official-rig-imports-v1`;
- diff rastreado limitado a estado local do Spec Kit e artefatos da feature atual;
- nenhum diff em `.gitignore`, Player, cena de rig, scripts, sprites idle aprovados ou rig oficial.

## 2. Listar `.import` e `.uid` untracked

```powershell
$untracked = @(git ls-files --others --exclude-standard)
$untrackedImports = @($untracked | Where-Object { $_ -like '*.import' })
$untrackedUids = @($untracked | Where-Object { $_ -like '*.uid' })
$untrackedImports.Count
$untrackedUids.Count
```

Registrar totais separados. `.uid` fica fora da revisao dos imports oficiais.

## 3. Filtrar candidatos `official_asset_imports`

Regra planejada:

- incluir somente `.import` sob `assets/characters/antonio_rafael/rig/`;
- excluir qualquer `.uid`;
- excluir qualquer caminho fora do rig;
- parar se a contagem nao for 32.

## 4. Verificar origem relacionada

Para cada candidato:

```text
assets/characters/antonio_rafael/rig/example.png.import
-> assets/characters/antonio_rafael/rig/example.png
```

Critério:

- se o PNG existe e pertence ao rig validado, continuar revisao;
- se o PNG nao existe, marcar como `official_import_excluded_unknown_origin` ou `official_import_needs_human_review`;
- se a origem nao for rig, marcar como `official_import_excluded_not_rig`.

## 5. Classificar relacao com rig

Classificar cada item em:

- `rig_part`;
- `rig_refinement_backup`;
- `rig_preview`;
- `rig_assembly_output`;
- `unknown_rig_relation`.

## 6. Manifesto obrigatorio futuro

Criar na implementacao:

```text
docs/technical/official-rig-imports-review-manifest-v1.md
```

O manifesto deve listar cada `.import` revisado, inclusive os que exigirem revisao humana.

## 7. Documento tecnico obrigatorio futuro

Criar na implementacao:

```text
docs/technical/official-rig-imports-review-v1.md
```

Registrar:

1. total avaliado;
2. total recomendado para manter local;
3. total recomendado para versionar futuramente;
4. total recomendado para ignorar futuramente;
5. total pendente para revisao humana;
6. riscos;
7. decisao sugerida para `.gitignore`;
8. confirmacao de que `.import` nao foi removido ou stageado;
9. confirmacao de que `.uid` nao foi alterado;
10. confirmacao de que Player, cenas, scripts, sprites idle e rig oficial nao foram alterados;
11. confirmacao de que nao houve commit ou push.

## 8. Comandos proibidos

Nao usar:

```powershell
git add .
git add -A
git commit -am
git clean
```

Nao remover `.import`. Nao remover `.uid`. Nao alterar `.gitignore`. Nao stagear arquivos oficiais.

## 9. Gate final esperado

Apresentar:

1. total de `official_asset_imports` avaliados;
2. total recomendado para manter local;
3. total recomendado para versionar futuramente;
4. total recomendado para ignorar futuramente;
5. total pendente para revisao humana;
6. lista/resumo dos arquivos revisados;
7. riscos identificados;
8. decisao sugerida para `.gitignore`;
9. confirmacao de que nenhum `.import` foi removido;
10. confirmacao de que nenhum `.uid` foi alterado;
11. confirmacao de que Player/cenas/scripts/assets oficiais nao foram alterados;
12. documentos criados/atualizados;
13. recomendacao para commit ou proxima feature;
14. confirmacao de que nao houve commit;
15. confirmacao de que nao houve push.
