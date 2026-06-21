# Quickstart: Godot Import UID Policy V1

Este quickstart descreve como validar e executar futuramente a auditoria da feature 012 depois de `tasks.md` aprovado. Nesta etapa de planejamento, nao alterar `.gitignore`, nao mover, nao apagar, nao stagear, nao commitar e nao fazer push.

## 1. Confirmar branch e estado

```powershell
git branch --show-current
git status --short --untracked-files=all
git diff --name-only
git diff --stat
```

Esperado:

- branch `012-godot-import-uid-policy-v1`;
- nenhum diff em Player, cenas, scripts, sprites idle aprovados, rig oficial ou `.gitignore`;
- `.import` e `.uid` ainda fora de staging antes da implementacao.

## 2. Listar untracked `.import` e `.uid`

```powershell
$untracked = git ls-files --others --exclude-standard
$untrackedImports = @($untracked | Where-Object { $_ -like '*.import' })
$untrackedUids = @($untracked | Where-Object { $_ -like '*.uid' })
$untrackedImports.Count
$untrackedUids.Count
```

Registrar totais separados.

## 3. Listar `.import` e `.uid` ja rastreados

```powershell
$trackedImports = @(git ls-files '*.import')
$trackedUids = @(git ls-files '*.uid')
$trackedImports.Count
$trackedUids.Count
```

Registrar se o repositorio ja versiona esses tipos.

## 4. Inferir arquivo relacionado

Regra planejada:

- Para `.import`, remover o sufixo `.import` e verificar se o asset relacionado existe.
- Para `.uid`, remover o sufixo `.uid` e verificar se o recurso relacionado existe.

Exemplo:

```text
assets/characters/example.png.import
-> assets/characters/example.png

scripts/player/example.gd.uid
-> scripts/player/example.gd
```

## 5. Classificar por grupo

Classificar `.import` em:

```text
official_asset_imports
prototype_imports
archive_imports
stale_imports
unknown_imports
```

Classificar `.uid` em:

```text
official_uid_files
prototype_uid_files
stale_uid_files
unknown_uid_files
```

## 6. Avaliar `.gitignore`

Somente leitura:

```powershell
Select-String -Path .gitignore -Pattern '\\.import|\\.uid' -SimpleMatch
```

Nao alterar `.gitignore` nesta feature sem aprovacao posterior.

## 7. Documentos planejados para implementacao

Criar/atualizar somente na implementacao:

```text
docs/technical/godot-import-uid-policy-v1.md
docs/project/repository-hygiene.md
docs/technical/untracked-cleanup-audit-v1.md
docs/technical/untracked-cleanup-inventory-v1.md
```

## 8. Comandos proibidos

Nao usar:

```powershell
git add .
git add -A
git commit -am
git clean
Remove-Item
```

Nao mover ou apagar `.import`/`.uid`.

## 9. Gate final esperado

Apresentar:

1. total de `.import` untracked;
2. total de `.uid` untracked;
3. total de `.import` rastreados;
4. total de `.uid` rastreados;
5. grupos classificados;
6. arquivos relacionados a assets oficiais;
7. arquivos relacionados a prototipos;
8. arquivos possivelmente obsoletos;
9. politica recomendada;
10. decisao sugerida para `.gitignore`;
11. confirmacao de que nada foi apagado, stageado em massa, commitado ou enviado por push.
