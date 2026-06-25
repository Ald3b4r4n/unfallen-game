# Implementation Plan: Codex Image Walk Lab V1

**Branch**: `017-codex-image-walk-lab-v1` | **Date**: 2026-06-24 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `/specs/017-codex-image-walk-lab-v1/spec.md`

## Summary

Create a controlled experimental walk-lab for SGT Antonio Rafael using Codex `/image` as the first visual-generation route for a `front_right` walking spritesheet attempt. The feature will document a prompt pipeline, create a master prompt, prepare an isolated `walk_lab` structure, record one experimental attempt if image generation is available, create a preview/contact sheet when valid material exists, and stop at a human gate before any official animation, Player integration, or 8-direction expansion.

This is a production-learning feature, not an audit microfeature and not a final animation feature.

## Technical Context

**Language/Version**: Godot 4.x Standard project; no runtime code planned in this feature  
**Primary Dependencies**: Codex image generation route (`/image`) if available during implementation; local image tooling only for preview/contact sheet if generated material exists  
**Storage**: Markdown documentation and experimental image assets under the feature-approved `walk_lab` structure  
**Testing**: Manual visual validation, repository scope audit, file existence checks, image-dimension checks when generated files exist  
**Target Platform**: Development workstation and future Godot 4 validation, without runtime integration in this feature  
**Project Type**: 2D isometric Pixel Art HD Godot game  
**Performance Goals**: No runtime performance impact; generated or documented artifacts must remain outside Player runtime  
**Constraints**: Initial direction only `front_right`; experimental 4-frame walking-in-place attempt; target cells `128x128`; no official walk declaration; no Player, rig official, `.gitignore`, `.uid`, scripts, or approved idle changes  
**Scale/Scope**: One controlled image-generation experiment plus documentation and validation criteria, preparing future 8-direction work only after human review

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Spec First, Implementacao Depois**: Feature 017 has a dedicated spec before planning.
- [x] **Gate Humano Obrigatorio**: The plan stops before implementation and requires human approval before image generation outcomes become candidates.
- [x] **Character First**: The feature focuses only on SGT Antonio Rafael's movement pipeline.
- [x] **Pixel Art HD Consistente**: The plan preserves Pixel Art HD isometric direction, `128x128` target cells, scale consistency, and visual validation.
- [x] **Engine e Tecnologia**: The project remains Godot 4.x Standard. No runtime architecture change is planned.

## Project Structure

### Documentation (this feature)

```text
specs/017-codex-image-walk-lab-v1/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── checklists/
│   └── requirements.md
└── tasks.md              # Created later by /speckit.tasks
```

### Planned Implementation Artifacts

```text
assets/characters/antonio_rafael/walk_lab/
├── prompts/
│   └── front_right_walk_codex_image_prompt_v1.md
├── source/
│   └── front_right_walk_codex_image_attempt_v1.png        # only if generated
├── exports/
├── previews/
│   └── front_right_walk_codex_image_attempt_v1_preview.png # only if source/frames are valid
└── frames/
    └── front_right/
        ├── frame_01.png                                   # only if extraction/normalization is viable
        ├── frame_02.png
        ├── frame_03.png
        └── frame_04.png

docs/art/
└── codex-image-walk-lab-v1.md

docs/technical/
├── codex-image-walk-pipeline-v1.md
└── walk-lab-validation-v1.md
```

### Protected Areas

```text
.gitignore
.specify/feature.json             # local Spec Kit pointer; do not include in feature commits unless explicitly approved
scenes/player/Player.tscn
scenes/rig/AntonioRafaelRigLab.tscn
scripts/player/
scripts/rig/
assets/characters/antonio_rafael/sprites/idle/
assets/characters/antonio_rafael/rig/
*.uid
```

**Structure Decision**: Use a new isolated `walk_lab` tree under Antonio Rafael's character assets for experimental prompts and generated attempts. Do not place the result in active sprite folders and do not modify existing rig or Player scenes. Documentation lives in `docs/art/` and `docs/technical/`.

## Complexity Tracking

No constitution violations are planned.

## Phase 0: Research Decisions

Research is captured in [research.md](./research.md).

Key decisions:

1. Use direct Codex `/image` generation as the first route, not video extraction or procedural rig animation.
2. Start with `front_right` only.
3. Treat the referenced AI spritesheet repository as conceptual process inspiration, not a source of copied prompts or assets.
4. Keep all generated materials experimental until human validation.
5. Document transparency, frame separation, and normalization limitations honestly.

## Phase 1: Design Decisions

Design model is captured in [data-model.md](./data-model.md).

The feature manages these artifact classes:

- `WalkLabPrompt`
- `ExperimentalWalkAttempt`
- `PreviewContactSheet`
- `VisualValidationChecklist`
- `ScopeAudit`

No external API contracts are required because this feature does not expose a runtime interface, gameplay endpoint, or automation contract.

Quickstart and validation flow are captured in [quickstart.md](./quickstart.md).

## Implementation Strategy For Future /speckit.implement

1. Validate current branch and protected-path constraints.
2. Read the official character and rig context:
   - `docs/art/antonio-rafael.md`
   - `docs/technical/articulated-walk-lab-prep-v1.md`
   - `docs/technical/official-rig-imports-versioning-v1.md`
   - `docs/technical/rig-pipeline.md`
3. Create the `walk_lab` folders.
4. Create the master prompt file for `front_right`.
5. Create the required documentation files.
6. If image generation is available, generate one experimental attempt using the master prompt.
7. If generated material is valid, create a preview/contact sheet; if not, document the failure mode.
8. Apply visual validation criteria and classify the attempt as:
   - `candidate_to_continue`
   - `revise_prompt`
   - `reject_attempt`
   - `generation_unavailable`
9. Run scope audit:
   - Player unchanged
   - rig scene unchanged
   - scripts unchanged
   - idle sprites unchanged
   - official rig unchanged
   - `.gitignore` unchanged
   - `.uid` unchanged
10. Stop for human gate before any commit, push, Player integration, or official promotion.

## Planned Validation

Required validation during implementation:

- Prompt master exists.
- `walk_lab` structure exists.
- Required docs exist.
- Attempt is generated or impossibility is documented.
- Preview/contact sheet exists if valid image/frame material exists.
- Evaluation criteria are applied.
- Attempt is explicitly marked experimental.
- No official walk cycle is declared.
- No Player integration exists.
- No gameplay is created.
- No official idle sprite is modified.
- No official rig artifact is modified.
- No `.uid` or `.gitignore` change exists.
- No automatic commit or push occurs.

Suggested safe audit commands:

```powershell
git status --short --untracked-files=all
git diff --name-only
git diff --stat
git diff --name-status -- "*.uid"
git diff --name-status -- ".gitignore"
```

## Human Gate

Implementation must end by presenting:

1. master prompt path;
2. generated attempts, if any;
3. previews/contact sheets, if any;
4. visual evaluation and classification;
5. docs created/updated;
6. confirmation that Player was not altered;
7. confirmation that approved idles were not altered;
8. confirmation that official rig was not altered;
9. confirmation that no walk cycle official exists;
10. recommendation for the next feature;
11. confirmation that no automatic commit happened;
12. confirmation that no push happened.

## Post-Design Constitution Check

- [x] **Spec First, Implementacao Depois**: Planning artifacts now exist and implementation remains blocked until tasks and human approval.
- [x] **Gate Humano Obrigatorio**: Gate is explicit before image results become candidates or commits happen.
- [x] **Character First**: The feature advances Antonio Rafael only.
- [x] **Pixel Art HD Consistente**: The plan enforces Pixel Art HD, `128x128`, identity, negative constraints, and validation.
- [x] **Engine e Tecnologia**: No runtime engine or GDScript architecture change is introduced.
