# Quickstart: Walk Cycle Lateral Normalization V1

This quickstart is for the future `/speckit.implement` step. It does not authorize implementation by itself.

## 1. Confirm Scope

Run read-only Git checks:

```powershell
git branch --show-current
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

Expected branch:

```text
018-walk-cycle-lateral-normalization-v1
```

Do not use:

```text
git add .
git add -A
git commit -am
git clean
```

## 2. Validate Inputs

Confirm the required input paths exist:

```text
assets/characters/antonio_rafael/walk_lab/frames/right_20f/
assets/characters/antonio_rafael/walk_lab/frames/left_20f/
assets/characters/antonio_rafael/walk_lab/source/walking_left_to_right_20f.png
assets/characters/antonio_rafael/walk_lab/source/walking_right_to_left_20f.png
assets/characters/antonio_rafael/walk_lab/animations/walking_right_20f_spriteframes.tres
assets/characters/antonio_rafael/walk_lab/animations/walking_left_20f_spriteframes.tres
assets/characters/antonio_rafael/walk_lab/previews/walking_left_to_right_20f_contact_sheet.png
assets/characters/antonio_rafael/walk_lab/previews/walking_right_to_left_20f_contact_sheet.png
scenes/test/WalkSheet20FrameTest.tscn
scenes/test/WalkSheetLeft20FrameTest.tscn
scripts/test/walk_sheet_20_frame_test_controller.gd
scripts/test/walk_sheet_left_20_frame_test_controller.gd
```

Expected frame counts:

```text
right_20f: 24 frames
left_20f: 24 frames
```

Important context:

```text
right_20f frames 21-24 are bridge copies of frames 06-09.
left_20f uses 24 real frames from its source sheet.
```

## 3. Measure Before Writing

For each frame, measure:

```text
width
height
color mode
alpha presence
magenta background presence
visible bounding box
foot baseline
center X
visible character height
duplicate/bridge status
```

Record these measurements before creating normalized files.

## 4. Normalize Non-Destructively

If normalization is required, write only to:

```text
assets/characters/antonio_rafael/walk_lab/normalized/right/
assets/characters/antonio_rafael/walk_lab/normalized/left/
assets/characters/antonio_rafael/walk_lab/normalized/previews/
```

Rules:

- preserve original frame order;
- preserve original folders untouched;
- avoid blur, filtering, and destructive resizing;
- prefer padding/canvas alignment over resampling;
- remove magenta only if safe;
- document any retained magenta background;
- keep all output experimental.

## 5. Generate Review Material

Required previews:

```text
assets/characters/antonio_rafael/walk_lab/normalized/previews/right_24f_normalized_contact_sheet.png
assets/characters/antonio_rafael/walk_lab/normalized/previews/left_24f_normalized_contact_sheet.png
assets/characters/antonio_rafael/walk_lab/normalized/previews/lateral_walk_comparison_v1.png
```

Optional GIF previews:

```text
assets/characters/antonio_rafael/walk_lab/normalized/previews/right_24f_normalized_preview.gif
assets/characters/antonio_rafael/walk_lab/normalized/previews/left_24f_normalized_preview.gif
```

Optional Godot lab resources:

```text
assets/characters/antonio_rafael/walk_lab/animations/walking_right_24f_normalized_spriteframes.tres
assets/characters/antonio_rafael/walk_lab/animations/walking_left_24f_normalized_spriteframes.tres
scenes/test/WalkLateralNormalizedTest.tscn
scripts/test/walk_lateral_normalized_test_controller.gd
```

Create optional Godot resources only if they improve human review.

## 6. Update Documentation

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

Every document must preserve these statements:

```text
No official walk cycle exists.
No official animation exists.
Nothing was integrated into Player.
All lateral walk material remains experimental until explicit human approval.
```

## 7. Validate Protected Scope

Before final report:

- verify Player unchanged;
- verify official rig scene unchanged;
- verify `scripts/player/` unchanged;
- verify `scripts/rig/` unchanged;
- verify approved idle sprites unchanged;
- verify official rig assets unchanged;
- verify `.gitignore` unchanged;
- verify `.uid` unchanged;
- verify automatic `.import` files were not staged;
- verify no gameplay, official animation, or official walk cycle was created.

## 8. Human Gate

Stop and present:

1. right-facing diagnosis;
2. left-facing diagnosis;
3. normalized outputs, if created;
4. previews generated;
5. magenta/transparency decision;
6. baseline/canvas/scale findings;
7. future integration readiness status;
8. protected-path confirmation;
9. no commit confirmation;
10. no push confirmation.

Do not commit, push, integrate into Player, or declare official status without explicit human approval.
