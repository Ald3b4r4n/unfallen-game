# Quickstart: Rig Imports Versioning and Articulated Walk Lab Prep V1

Este quickstart orienta a futura implementacao da feature 016. Ele nao autoriza commit, push, stage em massa ou alteracao de runtime.

## 1. Confirmar branch e estado

```powershell
git branch --show-current
git status --short --untracked-files=all
git diff --name-only
git diff --stat
```

Esperado:

- branch `016-rig-imports-versioning-and-articulated-walk-lab-prep-v1`;
- `.specify/feature.json` pode aparecer como estado local do Spec Kit;
- `.import` e `.uid` untracked conhecidos podem aparecer;
- nenhum Player, cena, script, sprite idle, asset oficial ou `.gitignore` deve estar modificado.

## 2. Ler fontes de verdade

```powershell
Get-Content -Raw docs/technical/godot-import-uid-policy-v1.md
Get-Content -Raw docs/technical/official-rig-imports-review-manifest-v1.md
Get-Content -Raw docs/technical/rig-articulation-preview-import-review-manifest-v1.md
Get-Content -Raw docs/project/repository-hygiene.md
```

## 3. Auditar imports e UIDs em modo read-only

```powershell
git ls-files --others --exclude-standard
git ls-files "*.import"
git ls-files "*.uid"
Get-ChildItem -Recurse -Filter "*.import"
Get-ChildItem -Recurse -Filter "*.uid"
```

Nao usar:

```txt
git add .
git add -A
git commit -am
git clean
```

## 4. Revalidar criterios por `.import`

Para cada candidato, confirmar:

1. esta listado na revisao da feature 014 ou 015;
2. foi recomendado como `version_later` ou `join_official_rig_imports`;
3. esta ligado ao rig tecnico validado ou preview tecnico da Rig Articulation Test V1;
4. o PNG de origem existe;
5. o PNG de origem e rastreado pelo Git ou oficialmente documentado;
6. nao pertence a prototipo rejeitado;
7. nao pertence a `docs/archive/walk-prototypes-v1`;
8. nao e `.uid`;
9. nao exige alterar `.gitignore`;
10. sera adicionado somente por path explicito individual.

## 5. Criar documentacao planejada

Criar na implementacao:

```txt
docs/technical/official-rig-imports-versioning-v1.md
docs/technical/articulated-walk-lab-prep-v1.md
```

Atualizar, se necessario:

```txt
docs/technical/godot-import-uid-policy-v1.md
docs/technical/official-rig-imports-review-v1.md
docs/technical/rig-articulation-preview-import-review-v1.md
docs/technical/untracked-cleanup-audit-v1.md
docs/technical/untracked-cleanup-inventory-v1.md
docs/project/repository-hygiene.md
```

## 6. Preparar stage futuro apenas por paths explicitos

Formato permitido somente apos validacao e gate humano:

```powershell
git add assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/backpack.png.import `
  assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/goias_patch.png.import
```

Continuar a lista por caminhos literais. Nao usar glob, diretorio inteiro ou `git add .`.

## 7. Validar escopo seguro

Antes de finalizar a implementacao, validar:

```powershell
git diff --name-only
git diff --stat
git diff --name-status -- "*.import"
git diff --name-status -- "*.uid"
```

Confirmar:

- nenhum `.uid` stageado;
- `.gitignore` inalterado;
- Player inalterado;
- cena de rig existente inalterada;
- scripts inalterados;
- sprites idle aprovados inalterados;
- PNGs/assets oficiais inalterados;
- nenhuma caminhada articulada oficial criada;
- nenhum walk cycle oficial criado;
- nenhuma animacao oficial criada;
- nenhum gameplay criado.

## 8. Gate humano

Apresentar:

- total de `.import` avaliados;
- total de `.import` aprovados para stage explicito;
- lista dos caminhos aprovados;
- documentos criados/atualizados;
- confirmacao de que nenhum `.uid`, `.gitignore`, Player, cena, script ou asset oficial foi alterado;
- confirmacao de que ainda nao existe caminhada articulada oficial;
- recomendacao para commit;
- confirmacao de que nao houve commit;
- confirmacao de que nao houve push.
