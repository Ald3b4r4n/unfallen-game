# Quickstart: Archive Walk Prototypes V1

Este quickstart descreve como validar e executar futuramente a feature depois de `tasks.md` aprovado. Nesta etapa de planejamento, nao mover, apagar, stagear, commitar ou fazer push.

## 1. Confirmar branch e estado

```powershell
git branch --show-current
git status --short --untracked-files=all
git diff --name-only
git diff --stat
```

Esperado:

- branch `011-archive-walk-prototypes-v1`;
- nenhum diff em `Player.tscn`, `AntonioRafaelRigLab.tscn`, scripts, sprites idle aprovados, rig oficial ou `.gitignore`;
- prototipos ainda como untracked antes da implementacao.

## 2. Confirmar contagens somente leitura

```powershell
$files = git ls-files --others --exclude-standard
$walkCandidates = $files | Where-Object { $_ -match '^assets/characters/antonio_rafael/(source/.*walk.*candidate.*\.png|sprites/walk_manual_candidate_v1/.+\.png)$' -and $_ -notmatch '\.import$' }
$walkPrototypes = $files | Where-Object { $_ -match '^assets/characters/antonio_rafael/sprites/walk_prototype_v5/.+\.png$' -and $_ -notmatch '\.import$' }
$previewAssets = $files | Where-Object { $_ -match '^assets/characters/antonio_rafael/exports/(walk_manual_candidate_v1/.+preview.*\.png|walk_prototype_v5/.+preview.*\.png)$' -and $_ -notmatch '\.import$' }
$walkCandidates.Count
$walkPrototypes.Count
$previewAssets.Count
```

Esperado:

- `walk_candidates`: 66
- `walk_prototypes`: 8
- `preview_assets`: 3

Se qualquer contagem divergir, registrar a divergencia e parar para gate humano.

## 3. Destino planejado

Destino aprovado pelo plano:

```text
docs/archive/walk-prototypes-v1/
docs/archive/walk-prototypes-v1/files/
docs/archive/walk-prototypes-v1/manifest.md
```

Regra de organizacao:

```text
docs/archive/walk-prototypes-v1/files/<caminho-original>
```

Exemplo:

```text
assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_01.png
```

vira:

```text
docs/archive/walk-prototypes-v1/files/assets/characters/antonio_rafael/sprites/walk_prototype_v5/left/antonio_rafael_walk_left_01.png
```

## 4. Arquivos que nao entram no arquivamento

Nao arquivar nesta feature:

- `.import`
- `.uid`
- specs antigas fora da feature 011
- manifests antigos sem aprovacao explicita
- assets oficiais do rig
- sprites idle aprovados
- Player
- cenas oficiais
- scripts
- `.gitignore`

## 5. Validacao documental esperada

A implementacao futura deve criar/atualizar:

```text
docs/technical/walk-prototypes-archive-v1.md
docs/technical/untracked-cleanup-audit-v1.md
docs/technical/untracked-cleanup-inventory-v1.md
docs/archive/walk-prototypes-v1/manifest.md
```

Esses documentos devem declarar explicitamente:

- os arquivos sao historicos/prototipos;
- nao sao walk cycle oficial;
- nao sao animacao oficial;
- nao sao assets finais;
- nao devem ser integrados ao Player;
- nao houve alteracao de gameplay.

## 6. Comandos proibidos

Nao usar:

```powershell
git add .
git add -A
git commit -am
git clean
```

Nao usar comandos de remocao definitiva sem feature e gate humano especificos.

## 7. Gate final

Antes de qualquer commit, apresentar:

1. contagem final dos 66/8/3;
2. lista resumida dos arquivos arquivados;
3. arquivos mantidos fora do Git;
4. arquivos que exigem revisao humana;
5. documentos criados/atualizados;
6. confirmacao de que Player, cenas, scripts, sprites idle, rig oficial e `.gitignore` nao foram alterados;
7. confirmacao de que nao houve walk cycle oficial, animacao oficial, commit ou push.
