# Implementation Plan: Walk Cycle Lateral Normalization V1

**Branch**: `018-walk-cycle-lateral-normalization-v1` | **Date**: 2026-06-25 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `/specs/018-walk-cycle-lateral-normalization-v1/spec.md`

## Summary

Plan a controlled technical normalization pass for the two experimental lateral walk tests already present in `walk_lab`:

- `right-facing` / `walking_left_to_right_20f`
- `left-facing` / `walking_right_to_left_20f`

The feature will compare both sets with the same criteria, normalize only into a separate lab folder if needed, generate comparative previews, update experimental SpriteFrames/scenes only when useful for review, and document whether each side is ready for future integration evaluation. It must not create an official walk cycle, alter the Player, alter the official rig, or promote any experimental asset to runtime use.

## Technical Context

**Language/Version**: Godot 4.x Standard project; GDScript only if isolated test-scene updates are needed  
**Primary Dependencies**: Godot 4.x Standard; local image analysis/processing tooling for PNG inspection and non-destructive normalization  
**Storage**: PNG lab assets, `.tres` SpriteFrames resources, isolated test scenes/scripts, and Markdown documentation  
**Testing**: Static image checks, file existence/count checks, manual Godot validation through isolated test scenes, protected-path Git audit  
**Target Platform**: Development workstation and Godot editor validation; no runtime/platform release target in this feature  
**Project Type**: 2D isometric Pixel Art HD Godot game  
**Performance Goals**: No Player/runtime performance impact; normalized previews and test scenes remain laboratory-only  
**Constraints**: Preserve original frames; use separate `walk_lab/normalized/`; keep magenta removal conservative; no blur/filtering/destructive scaling; do not stage `.import` or alter `.uid`; do not touch Player, official rig, approved idles, `.gitignore`, gameplay, or official animations  
**Scale/Scope**: Two lateral 24-step experimental cycles, comparative normalization, previews, docs, and gate humano final

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Spec First, Implementacao Depois**: Feature 018 has a dedicated spec before planning and no implementation is authorized in this step.
- [x] **Gate Humano Obrigatorio**: The plan ends with an explicit human gate before normalization implementation, commit, push, or Player integration.
- [x] **Character First**: The feature focuses only on SGT Antonio Rafael's character movement pipeline.
- [x] **Pixel Art HD Consistente**: The plan requires baseline, scale, canvas, pixel-preserving processing, no blur, and visual comparison before future integration.
- [x] **Engine e Tecnologia**: The project remains Godot 4.x Standard. Any code remains isolated to `scenes/test/` and `scripts/test/`.

## Project Structure

### Documentation (this feature)

```text
specs/018-walk-cycle-lateral-normalization-v1/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── checklists/
│   └── requirements.md
└── tasks.md              # Created later by /speckit.tasks
```

### Planned Lab Artifacts

```text
assets/characters/antonio_rafael/walk_lab/
├── frames/
│   ├── right_20f/
│   └── left_20f/
├── normalized/
│   ├── right/
│   │   └── frame_01.png ... frame_24.png
│   ├── left/
│   │   └── frame_01.png ... frame_24.png
│   └── previews/
│       ├── right_24f_normalized_contact_sheet.png
│       ├── left_24f_normalized_contact_sheet.png
│       ├── lateral_walk_comparison_v1.png
│       ├── right_24f_normalized_preview.gif   # optional
│       └── left_24f_normalized_preview.gif    # optional
├── animations/
│   ├── walking_right_24f_normalized_spriteframes.tres # if useful
│   └── walking_left_24f_normalized_spriteframes.tres  # if useful
└── previews/
    ├── walking_left_to_right_20f_contact_sheet.png
    └── walking_right_to_left_20f_contact_sheet.png

scenes/test/
└── WalkLateralNormalizedTest.tscn              # if useful

scripts/test/
└── walk_lateral_normalized_test_controller.gd  # if useful

docs/technical/
├── walk-cycle-lateral-normalization-v1.md
├── walk-cycle-lateral-normalization-manifest-v1.md
├── walk-lab-validation-v1.md                   # update if useful
├── codex-image-walk-pipeline-v1.md             # update if useful
├── walk-sheet-20f-test-v1.md                   # update if useful
└── walk-sheet-left-20f-test-v1.md              # update if useful

docs/art/
├── walk-cycle-lateral-review-v1.md
└── codex-image-walk-lab-v1.md                  # update if useful
```

### Protected Areas

```text
.specify/feature.json
.gitignore
scenes/player/Player.tscn
scenes/rig/AntonioRafaelRigLab.tscn
scripts/player/
scripts/rig/
assets/characters/antonio_rafael/sprites/idle/
assets/characters/antonio_rafael/rig/
*.uid
automatic *.import files unless explicitly approved later
```

**Structure Decision**: Use `walk_lab/normalized/` for all future normalized outputs so the original lab frames stay untouched. Keep every result marked as experimental. Use `docs/art/` for visual review notes and `docs/technical/` for measurement, normalization, manifest, and validation details.

## Complexity Tracking

No constitution violations are planned. The only notable risk is image normalization touching experimental PNGs; that is handled by writing to a separate `normalized/` tree and preserving original frames.

## Phase 0: Research Decisions

Research is captured in [research.md](./research.md).

Key decisions:

1. Normalize non-destructively into `walk_lab/normalized/`.
2. Compare both cycles with shared metrics before any output is promoted for future integration evaluation.
3. Treat magenta background removal as conditional, not automatic.
4. Preserve the right-facing loop bridge context: frames 21-24 are copied from frames 06-09.
5. Keep left-facing context explicit: 24 real frames extracted from a larger sheet.
6. Use isolated test scenes only; do not touch `Player.tscn`.

## Phase 1: Design Decisions

Design model is captured in [data-model.md](./data-model.md).

The feature manages these artifact classes:

- `LateralWalkSet`
- `FrameAssessment`
- `NormalizationDecision`
- `NormalizedFrameSet`
- `ComparativePreview`
- `ExperimentalTestScene`
- `IntegrationReadinessStatus`

No external API contracts are required because this feature does not expose runtime APIs, gameplay interfaces, or external service contracts.

Quickstart and validation flow are captured in [quickstart.md](./quickstart.md).

## Current Input Audit For Planning

Planning-time checks found the expected lab inputs:

```text
right_20f frames: 24
left_20f frames: 24
walking_left_to_right_20f.png: exists
walking_right_to_left_20f.png: exists
walking_right_20f_spriteframes.tres: exists
walking_left_20f_spriteframes.tres: exists
walking_left_to_right_20f_contact_sheet.png: exists
walking_right_to_left_20f_contact_sheet.png: exists
WalkSheet20FrameTest.tscn: exists
WalkSheetLeft20FrameTest.tscn: exists
walk_sheet_20_frame_test_controller.gd: exists
walk_sheet_left_20_frame_test_controller.gd: exists
```

These findings do not approve the assets. They only confirm that implementation can start from the expected lab material.

## Planned Normalization Strategy

Implementation should:

1. Read both source frame folders.
2. Measure every frame without modifying it.
3. Detect visible character bounds using non-magenta/non-transparent pixels.
4. Estimate foot baseline from the lower visible pixel region.
5. Estimate center X from visible bounding boxes.
6. Compare canvas sizes and scale across the two sides.
7. Decide whether each set needs normalization.
8. If normalization is needed, write new PNGs only under:

```text
assets/characters/antonio_rafael/walk_lab/normalized/right/
assets/characters/antonio_rafael/walk_lab/normalized/left/
```

9. Preserve frame order and document right-facing bridge frames.
10. Avoid destructive resizing. If a canvas decision is needed, prefer padding/cropping around the measured character bounds over resampling.
11. Remove magenta only if the pixel threshold is safe and does not damage character details. If unsafe, preserve magenta and document the limitation.
12. Generate contact sheets and a side-by-side comparison preview for human review.
13. Optionally generate GIF previews if local tooling supports safe export.
14. Optionally create normalized SpriteFrames and one isolated test scene if it improves review.

## Planned Documentation

Create:

```text
docs/technical/walk-cycle-lateral-normalization-v1.md
docs/technical/walk-cycle-lateral-normalization-manifest-v1.md
docs/art/walk-cycle-lateral-review-v1.md
```

Update if useful:

```text
docs/art/codex-image-walk-lab-v1.md
docs/technical/walk-lab-validation-v1.md
docs/technical/codex-image-walk-pipeline-v1.md
docs/technical/walk-sheet-20f-test-v1.md
docs/technical/walk-sheet-left-20f-test-v1.md
```

Required documentation statements:

- No official walk cycle exists.
- No official animation exists.
- No Player integration happened.
- Right-facing and left-facing are experimental lab materials.
- Any future integration requires a separate feature and explicit human approval.

## Planned Validation

Required validation during implementation:

- Right-facing input frames are counted and measured.
- Left-facing input frames are counted and measured.
- Original frames are unchanged.
- Normalized frames, if created, are written only to `walk_lab/normalized/`.
- Every normalized frame preserves PNG/RGBA format.
- Baseline, center, scale, canvas, loop, and readability status are recorded.
- Magenta/transparency decision is recorded.
- Contact sheets and comparison preview are created.
- Optional GIFs are either created or explicitly marked unavailable.
- Optional SpriteFrames/test scene are isolated and experimental.
- `Player.tscn` unchanged.
- `AntonioRafaelRigLab.tscn` unchanged.
- `scripts/player/` unchanged.
- `scripts/rig/` unchanged.
- approved idle sprites unchanged.
- official rig assets unchanged.
- `.gitignore` unchanged.
- `.uid` unchanged.
- automatic `.import` files not staged.
- no gameplay, official walk, or official animation created.
- no automatic commit or push.

Suggested safe audit commands:

```powershell
git status --short --untracked-files=all
git diff --name-only
git diff --stat
git diff --name-status -- ".gitignore"
git diff --name-status -- "*.uid"
git diff --name-status -- "*.import"
git diff --name-status -- "scenes/player/Player.tscn"
git diff --name-status -- "scenes/rig/AntonioRafaelRigLab.tscn"
git diff --name-status -- "scripts/player/*"
git diff --name-status -- "scripts/rig/*"
```

## Implementation Strategy For Future /speckit.implement

1. Confirm branch and protected-path scope.
2. Re-read the feature 018 spec, this plan, and walk-lab docs.
3. Run static audit of frame counts and image metadata.
4. Generate a manifest of input frame measurements.
5. Decide normalization criteria and record them before writing normalized frames.
6. Write normalized outputs only under `walk_lab/normalized/`.
7. Build contact sheets and side-by-side comparison preview.
8. Create normalized SpriteFrames/test scene only if needed for review.
9. Update docs and manifest.
10. Run protected-path audit.
11. Stop for human gate before commit, push, Player integration, or official promotion.

## Human Gate

The implementation must stop and present:

1. right-facing frame count and diagnosis;
2. left-facing frame count and diagnosis;
3. normalization criteria used;
4. whether magenta background was kept or removed;
5. previews generated;
6. files created/updated;
7. limitations and remaining visual risks;
8. status for future integration evaluation;
9. confirmation that no official walk cycle was created;
10. confirmation that no official animation was created;
11. confirmation that the Player was not altered;
12. confirmation that approved idles and official rig were not altered;
13. confirmation that no automatic commit happened;
14. confirmation that no push happened.

No commit, push, Player integration, or official walk declaration is allowed before explicit human approval.

## Post-Design Constitution Check

- [x] **Spec First, Implementacao Depois**: Plan, research, data model, and quickstart define the work before tasks/implementation.
- [x] **Gate Humano Obrigatorio**: The plan explicitly stops at human validation before irreversible decisions.
- [x] **Character First**: The scope remains only SGT Antonio Rafael's walk-lab pipeline.
- [x] **Pixel Art HD Consistente**: The design protects scale, canvas, baseline, and pixel-preserving normalization.
- [x] **Engine e Tecnologia**: Godot 4.x Standard remains the target; any test code stays isolated.
