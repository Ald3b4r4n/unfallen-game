# Quickstart: Review Rig Articulation Preview Import V1

This quickstart is for the future implementation step. It keeps the review read-only until documentation is explicitly created by approved tasks.

## 1. Confirm branch and status

```powershell
git branch --show-current
git status --short --untracked-files=all
git diff --name-only
git diff --stat
```

Expected branch:

```txt
015-review-rig-articulation-preview-import-v1
```

Do not stage, commit, push, clean, restore, move, or remove anything.

## 2. Locate the candidate

```powershell
git ls-files --others --exclude-standard
git ls-files -- assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import
```

Candidate under review:

```txt
assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import
```

Expected source PNG:

```txt
assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png
```

## 3. Confirm no tracked import or UID changes

```powershell
git diff --name-status -- "*.import"
git diff --name-status -- "*.uid"
```

Expected result for this feature: no tracked `.import` or `.uid` changes.

## 4. Read policy and evidence documents

Use these documents as source of truth:

```txt
docs/technical/godot-import-uid-policy-v1.md
docs/technical/official-rig-imports-review-v1.md
docs/technical/official-rig-imports-review-manifest-v1.md
docs/technical/untracked-cleanup-audit-v1.md
docs/technical/untracked-cleanup-inventory-v1.md
docs/project/repository-hygiene.md
docs/technical/rig-articulation-test-v1.md
```

If optional rig documents are missing, record that instead of inventing evidence.

## 5. Required interpretation

The review must preserve this interpretation:

```txt
Ainda nao existe caminhada articulada oficial no projeto.
O rig atual e tecnico/laboratorial.
O preview da Rig Articulation Test V1 e evidencia visual de teste tecnico do rig, nao walk cycle oficial.
Esta feature nao valida walk cycle.
Esta feature nao cria walk cycle.
Esta feature nao integra walk cycle ao Player.
Esta feature nao transforma o rig em animacao oficial.
```

## 6. Future documentation outputs

Implementation may create these files only after approved `tasks.md`:

```txt
docs/technical/rig-articulation-preview-import-review-v1.md
docs/technical/rig-articulation-preview-import-review-manifest-v1.md
```

Do not create them during planning.

## 7. Forbidden commands

```txt
git add .
git add -A
git commit -am
git clean
Remove-Item
Move-Item
git rm
```

## 8. Final human gate

Before any later commit or action, present:

1. Whether the candidate `.import` exists.
2. Whether its source PNG exists.
3. Whether the import is tracked or untracked.
4. Risk level.
5. Recommendation.
6. Confirmation that no `.import` or `.uid` was altered.
7. Confirmation that Player, scenes, scripts, sprites idle and official rig assets were not altered.
8. Confirmation that no walk cycle or official animation was created.
9. Confirmation that no commit or push occurred.
