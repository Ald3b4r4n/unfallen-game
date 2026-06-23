# Quickstart: Remove Stale Prototype Imports V1

Este quickstart descreve como validar e executar futuramente a implementação da feature 013 depois de `tasks.md` aprovado. Nesta etapa de planejamento, não remover arquivos, não alterar `.gitignore`, não mover, não stagear, não commitar e não fazer push.

## 1. Confirmar branch e estado

```powershell
git branch --show-current
git status --short --untracked-files=all
git diff --name-only
git diff --stat
```

Esperado:

- branch `013-remove-stale-prototype-imports-v1`;
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

Registrar totais separados. `.uid` fica fora da remoção.

## 3. Filtrar candidatos `prototype_imports`

Regra planejada:

- incluir somente `.import` ligado a `walk_manual_candidate_v1`, `walk_prototype_v5`, `walk_sheet_manual_candidate_v1`, `antonio_rafael_walk_sheet_candidate_v1` ou previews antigos de walk;
- excluir qualquer caminho em `assets/characters/antonio_rafael/rig/`;
- excluir qualquer caminho em `assets/characters/antonio_rafael/sprites/idle/`;
- excluir qualquer `.uid`;
- parar se a contagem não for 77.

## 4. Verificar origem relacionada

Para cada candidato:

```text
assets/characters/example.png.import
-> assets/characters/example.png
```

Critério:

- se o PNG original ainda existe, manter para revisão;
- se o PNG original não existe e está relacionado a protótipo arquivado/rejeitado, pode seguir para decisão de remoção;
- se a origem for incerta, manter para revisão.

## 5. Verificar arquivo histórico

Comparar com:

```text
docs/archive/walk-prototypes-v1/
docs/archive/walk-prototypes-v1/manifest.md
```

O arquivo histórico ajuda a comprovar que o PNG original foi arquivado antes da remoção do `.import` stale.

## 6. Manifesto obrigatório

Criar na implementação:

```text
docs/technical/stale-prototype-imports-removal-manifest-v1.md
```

O manifesto deve registrar cada candidato avaliado, inclusive os mantidos para revisão.

## 7. Documento técnico obrigatório

Criar na implementação:

```text
docs/technical/stale-prototype-imports-removal-v1.md
```

Registrar:

1. total avaliado;
2. total removido;
3. total mantido;
4. critérios usados;
5. confirmação de que `.uid` não foi alterado;
6. confirmação de que imports oficiais não foram alterados;
7. confirmação de que `.gitignore`, Player, cenas, scripts, sprites idle e rig oficial não foram alterados;
8. confirmação de que não houve commit ou push.

## 8. Comandos proibidos

Não usar:

```powershell
git add .
git add -A
git commit -am
git clean
```

Não remover diretórios inteiros. Não remover `.uid`. Não remover imports oficiais.

## 9. Gate final esperado

Apresentar:

1. total de `prototype_imports` avaliados;
2. total removido;
3. total mantido para revisão;
4. lista/resumo dos removidos;
5. lista/resumo dos mantidos;
6. confirmação de que `.uid` não foi alterado;
7. confirmação de que `official_asset_imports` não foram alterados;
8. confirmação de que Player/cenas/scripts/assets oficiais não foram alterados;
9. confirmação de que `.gitignore` não foi alterado;
10. documentos criados/atualizados;
11. recomendação para commit ou revisão;
12. confirmação de que não houve commit;
13. confirmação de que não houve push.
