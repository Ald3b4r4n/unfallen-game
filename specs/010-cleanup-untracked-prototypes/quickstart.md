# Quickstart: Cleanup Untracked Prototypes V1

This quickstart describes the intended implementation workflow for the future `/speckit.implement` step. It is not an authorization to implement cleanup during planning.

## 1. Confirm Scope

Before implementation, confirm:

- Current branch is `010-cleanup-untracked-prototypes`.
- Active feature directory is `specs/010-cleanup-untracked-prototypes`.
- No `git add .`, `git add -A` or `git commit -am` will be used.
- No push will be performed.
- No files will be moved, removed, renamed or overwritten.

## 2. Read Required Inputs

Read:

```text
specs/010-cleanup-untracked-prototypes/spec.md
specs/010-cleanup-untracked-prototypes/plan.md
specs/010-cleanup-untracked-prototypes/research.md
specs/010-cleanup-untracked-prototypes/data-model.md
```

## 3. Collect Read-Only Git State

Use only safe read commands:

```powershell
git status --short --untracked-files=all
git ls-files --others --exclude-standard
git diff --name-only
git diff --stat
git branch --show-current
git log --oneline -10
```

Do not use:

```powershell
git add .
git add -A
git commit -am
git clean
git push
```

## 4. Build Inventory

Create:

```text
docs/technical/untracked-cleanup-inventory-v1.md
```

The inventory should list or account for every untracked file found during implementation. Use these fields:

```text
path
group
type
risk
recommended_destination
observation
decision_status
```

## 5. Build Audit Report

Create:

```text
docs/technical/untracked-cleanup-audit-v1.md
```

The report should summarize:

- total untracked count;
- groups found;
- high-risk files or areas;
- files not safe for automatic commit;
- candidates for future commit;
- candidates for archive;
- candidates for local-only retention;
- candidates for future ignore policy;
- candidates for future removal;
- files needing human review.

## 6. Optional Repository Hygiene Notes

Create this only if recurring policy decisions are useful:

```text
docs/project/repository-hygiene.md
```

Do not use this optional file to silently approve `.import`, `.uid`, prototype or cleanup policy. It should document pending or approved policy clearly.

## 7. Validate Safety

Before final response, confirm:

- Nothing was deleted.
- Nothing was moved.
- Nothing was renamed.
- Nothing was staged in mass.
- No commit was created.
- No push was performed.
- `Player.tscn` was not altered.
- Sprites idle approved were not altered.
- Scenes, scripts and official assets were not altered.
- `.specify/feature.json` was not automatically included in any commit.

## 8. Human Gate

Present:

- total untracked count;
- groups classified;
- critical files;
- recommendations by group;
- candidates for future commit;
- candidates for archive;
- candidates for local-only retention;
- candidates for ignore policy;
- candidates for future removal;
- confirmation that nothing was deleted;
- confirmation that nothing was committed;
- confirmation that no push occurred.

Stop and wait for human validation.
