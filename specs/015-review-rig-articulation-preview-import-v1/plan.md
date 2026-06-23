# Implementation Plan: Review Rig Articulation Preview Import V1

**Branch**: `015-review-rig-articulation-preview-import-v1` | **Date**: 2026-06-23 | **Spec**: `specs/015-review-rig-articulation-preview-import-v1/spec.md`
**Input**: Feature specification from `/specs/015-review-rig-articulation-preview-import-v1/spec.md`

## Summary

Planejar uma revisao documental e nao destrutiva de um unico `.import` adicional relacionado ao preview da **Rig Articulation Test V1**:

```txt
assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import
```

Esta feature nao deve alterar, versionar, apagar ou mover esse arquivo. O objetivo e definir criterios para classificar o import como candidato a decisao humana futura, mantendo a separacao entre evidencia tecnica de laboratorio e assets oficiais/runtime.

Registro obrigatorio do escopo:

```txt
Ainda nao existe caminhada articulada oficial no projeto.
O rig atual e tecnico/laboratorial.
O preview da Rig Articulation Test V1 e evidencia visual de teste tecnico do rig, nao walk cycle oficial.
Esta feature nao valida walk cycle.
Esta feature nao cria walk cycle.
Esta feature nao integra walk cycle ao Player.
Esta feature nao transforma o rig em animacao oficial.
```

## Technical Context

**Language/Version**: N/A para codigo; projeto base em Godot 4.x Standard com GDScript  
**Primary Dependencies**: Git para auditoria somente leitura, documentacao tecnica das features 010-014, arquivos locais do projeto  
**Storage**: Artefatos de planejamento em `specs/015-review-rig-articulation-preview-import-v1/`; documentos tecnicos planejados para etapa futura em `docs/technical/`  
**Testing**: Validacao documental, auditoria Git somente leitura, verificacao de ausencia de diffs proibidos, revisao de escopo  
**Target Platform**: Projeto Godot desktop/local; sem alteracao de runtime nesta feature  
**Project Type**: Jogo 2D isometrico em Pixel Art HD no Godot  
**Performance Goals**: N/A; feature documental/auditoria  
**Constraints**: Revisar somente um `.import`; nao alterar `.import`, `.uid`, `.gitignore`, Player, cenas, scripts, sprites idle aprovados, rig oficial ou assets oficiais; nao criar walk cycle; nao criar animacao oficial; nao fazer commit; nao fazer push  
**Scale/Scope**: Um arquivo `.import` candidato e documentacao de decisao futura

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] Escopo limitado e verificavel: a feature trata exatamente um `.import` candidato.
- [x] Separacao entre planejamento e implementacao: esta etapa gera somente artefatos em `specs/015...`.
- [x] Nenhum runtime afetado: Player, cenas, scripts, sprites idle e rig oficial permanecem fora do escopo.
- [x] Sem promocao indevida de prototipo: o preview continua sendo evidencia tecnica, nao asset oficial de gameplay.
- [x] Sem comandos destrutivos planejados: `git clean`, remocao, movimentacao e stage em massa ficam proibidos.
- [x] Gate humano obrigatorio antes de qualquer decisao sobre versionamento, remocao, ignorar ou agrupar o import.

## Project Structure

### Documentation (this feature)

```txt
specs/015-review-rig-articulation-preview-import-v1/
|-- spec.md
|-- plan.md
|-- research.md
|-- data-model.md
|-- quickstart.md
`-- checklists/
    `-- requirements.md
```

### Future Documentation Planned

```txt
docs/technical/rig-articulation-preview-import-review-v1.md
docs/technical/rig-articulation-preview-import-review-manifest-v1.md
```

These future documents must only be created during implementation, after `tasks.md` is approved.

### Sensitive Paths Out Of Scope

```txt
.gitignore
.specify/feature.json
scenes/player/Player.tscn
scenes/rig/AntonioRafaelRigLab.tscn
scripts/player/
scripts/rig/
assets/
assets/characters/antonio_rafael/sprites/idle/
assets/characters/antonio_rafael/rig/
*.import
*.uid
```

The target `.import` may be read and classified in a future implementation, but must not be altered, staged, moved, removed, or committed by this planning step.

## Source Documents To Read

The implementation plan depends on these current project documents:

```txt
docs/technical/godot-import-uid-policy-v1.md
docs/technical/official-rig-imports-review-v1.md
docs/technical/official-rig-imports-review-manifest-v1.md
docs/technical/stale-prototype-imports-removal-v1.md
docs/technical/stale-prototype-imports-removal-manifest-v1.md
docs/technical/untracked-cleanup-audit-v1.md
docs/technical/untracked-cleanup-inventory-v1.md
docs/project/repository-hygiene.md
docs/technical/rig-articulation-test-v1.md
docs/technical/rig-refinement-v1.md
docs/technical/rig-assembly-v1.md
```

If any optional rig document is missing during implementation, the implementation must register the missing source and continue with the available policy/audit documents without inventing evidence.

## Planned Review Criteria

The future implementation must evaluate:

1. Exact path of the `.import` candidate.
2. Whether the `.import` is currently tracked or untracked.
3. Whether the source PNG exists.
4. Whether the source PNG is already tracked.
5. Whether the import references the expected source file.
6. Whether the file belongs to rig preview evidence, not runtime Player.
7. Whether it relates to Rig Articulation Test V1.
8. Whether it is separate from stale prototype imports removed by feature 013.
9. Whether it is separate from the 32 official rig imports reviewed by feature 014.
10. Whether it should remain `needs_human_review`.
11. Whether it may later join an official import group.
12. Whether it should remain local only.
13. Whether it should be ignored later by policy, without editing `.gitignore` in this feature.
14. Whether it must be handled by a separate feature.
15. Whether any action would risk confusing preview evidence with official animation.

## Planned Status Values

```txt
reviewed_preview_import
needs_human_review
candidate_for_version_later
candidate_for_group_with_official_rig_imports
keep_local
ignore_later
separate_feature
excluded_from_action
```

No status implies immediate versioning, removal, movement, official approval, or runtime integration.

## Planned Risk Levels

```txt
critical
high
medium
low
```

Initial risk expectation: `high`, because the file is related to validated rig preview evidence but remains a `.import` outside an approved versioning decision. It becomes `critical` only if the review finds any link to official runtime, Player, approved sprites, or tracked Godot import behavior requiring path-by-path human approval.

## Safe Commands Planned

Only read-only commands are planned:

```powershell
git status --short --untracked-files=all
git ls-files --others --exclude-standard
git ls-files -- assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import
git diff --name-only
git diff --stat
git diff --name-status -- "*.import"
git diff --name-status -- "*.uid"
```

PowerShell file existence checks may be used for the candidate `.import` and source `.png`, as long as they do not move, delete, stage, or modify files.

## Prohibited Commands

```txt
git add .
git add -A
git commit -am
git clean
Remove-Item
Move-Item
git rm
git restore
git checkout -- <path>
```

`git restore` may not be used in this feature because the goal is review, not cleanup.

## Future Implementation Strategy

1. Confirm current branch and working tree state.
2. Read policy and previous audit documents.
3. Locate the exact candidate `.import`.
4. Confirm source PNG relationship.
5. Classify the candidate against the policy from feature 012 and review outcomes from feature 014.
6. Create future implementation documents:
   - `docs/technical/rig-articulation-preview-import-review-v1.md`
   - `docs/technical/rig-articulation-preview-import-review-manifest-v1.md`
7. Update existing audit/inventory docs only during implementation, if authorized by `tasks.md`.
8. Validate that no runtime, assets, imports, UIDs, `.gitignore`, scenes, scripts, or sprites were altered.
9. Stop at human gate before any commit or push.

## Validation Plan

The future implementation must prove:

1. Only the one target `.import` was reviewed.
2. No `.import` was altered, removed, staged, or versioned.
3. No `.uid` was altered, removed, staged, or versioned.
4. `.gitignore` was not altered.
5. Player was not altered.
6. Rig scene was not altered.
7. Scripts were not altered.
8. Sprites idle approved were not altered.
9. Official rig assets were not altered.
10. No walk cycle was created.
11. No official animation was created.
12. No gameplay was created.
13. No commit happened.
14. No push happened.
15. Human review remains required for any future action.

## Complexity Tracking

No constitution violation or complexity exception is planned.

## Human Gate

Before any implementation that creates documentation, changes recommendations, stages files, commits, pushes, edits `.gitignore`, versions `.import/.uid`, or removes/moves files, the user must approve the generated `tasks.md`.

This plan does not implement, move, delete, stage, commit, push, validate a walk cycle, create an animation, or integrate anything into the Player.
