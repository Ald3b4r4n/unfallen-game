# Quickstart: Codex Image Walk Lab V1

This quickstart describes the intended implementation and validation flow for feature `017-codex-image-walk-lab-v1`.

## 1. Confirm Scope

Run read-only Git checks:

```powershell
git branch --show-current
git status --short --untracked-files=all
git diff --name-only
git diff --stat
```

Expected branch:

```txt
017-codex-image-walk-lab-v1
```

Protected files must not be changed:

```txt
.gitignore
scenes/player/Player.tscn
scenes/rig/AntonioRafaelRigLab.tscn
scripts/player/
scripts/rig/
assets/characters/antonio_rafael/sprites/idle/
assets/characters/antonio_rafael/rig/
*.uid
```

## 2. Read Required Context

Use these documents as source of truth:

```txt
docs/art/antonio-rafael.md
docs/technical/articulated-walk-lab-prep-v1.md
docs/technical/official-rig-imports-versioning-v1.md
docs/technical/rig-pipeline.md
```

Use the public AI spritesheet repository only as conceptual inspiration:

```txt
https://github.com/chongdashu/ai-game-spritesheets
```

Do not copy prompts or assets literally into the project output.

## 3. Create Walk Lab Structure

Planned folders:

```txt
assets/characters/antonio_rafael/walk_lab/
assets/characters/antonio_rafael/walk_lab/prompts/
assets/characters/antonio_rafael/walk_lab/source/
assets/characters/antonio_rafael/walk_lab/exports/
assets/characters/antonio_rafael/walk_lab/previews/
assets/characters/antonio_rafael/walk_lab/frames/
assets/characters/antonio_rafael/walk_lab/frames/front_right/
```

These folders are experimental. They do not contain official runtime assets.

## 4. Create Master Prompt

Create:

```txt
assets/characters/antonio_rafael/walk_lab/prompts/front_right_walk_codex_image_prompt_v1.md
```

The prompt must include:

- official SGT Antonio Rafael identity;
- Base Idle Oficial V1 as visual truth;
- Pixel Art HD isometric style;
- `front_right` direction;
- technical game spritesheet;
- 4 walking-in-place frames;
- `128x128` cells;
- contact, passing, opposite contact, opposite passing;
- transparent background request when possible;
- strong negative constraints.

## 5. Generate Experimental Attempt If Available

If the Codex image route is available during implementation, generate a single experimental attempt.

Planned output:

```txt
assets/characters/antonio_rafael/walk_lab/source/front_right_walk_codex_image_attempt_v1.png
```

If generation is unavailable, document the limitation instead of fabricating assets.

## 6. Create Preview If Valid

If the source image or extracted frames are valid enough for review, create:

```txt
assets/characters/antonio_rafael/walk_lab/previews/front_right_walk_codex_image_attempt_v1_preview.png
```

If 4 frames are cleanly extractable, optional experimental frames may be created:

```txt
assets/characters/antonio_rafael/walk_lab/frames/front_right/frame_01.png
assets/characters/antonio_rafael/walk_lab/frames/front_right/frame_02.png
assets/characters/antonio_rafael/walk_lab/frames/front_right/frame_03.png
assets/characters/antonio_rafael/walk_lab/frames/front_right/frame_04.png
```

The frames remain experimental and must not be integrated into Player.

## 7. Create Documentation

Create:

```txt
docs/art/codex-image-walk-lab-v1.md
docs/technical/codex-image-walk-pipeline-v1.md
docs/technical/walk-lab-validation-v1.md
```

Document:

- prompt strategy;
- attempt result or generation limitation;
- visual evaluation;
- rejection/continuation recommendation;
- confirmation that no official walk exists;
- confirmation that Player, idle and rig official assets were not altered.

## 8. Validate Attempt

Classify the attempt:

```txt
candidate_to_continue
revise_prompt
reject_attempt
generation_unavailable
```

Positive criteria:

- recognizable Antonio Rafael identity;
- PMGO/survivor reading;
- glasses/colete/backpack coherence;
- stable scale;
- visible leg alternation;
- visible arm alternation;
- no text, labels, scenery, Polícia Civil, Sargento Silva, or random names.

Rejection criteria:

- static idle-like frames;
- duplicated frames;
- identity drift;
- changed uniform;
- scenery mixed into sprite;
- merged unreadable frames;
- no walking read.

## 9. Final Scope Audit

Run:

```powershell
git diff --name-only
git diff --stat
git diff --name-status -- "*.uid"
git diff --name-status -- ".gitignore"
```

Confirm:

- Player unchanged;
- rig scene unchanged;
- scripts unchanged;
- approved idle sprites unchanged;
- official rig unchanged;
- `.gitignore` unchanged;
- `.uid` unchanged;
- no official walk cycle created;
- no gameplay created;
- no commit or push performed.

## 10. Human Gate

Present:

1. prompt master path;
2. generated attempt path if available;
3. preview/contact sheet path if available;
4. visual evaluation;
5. classification;
6. documentation created;
7. protected-file audit;
8. recommendation for next feature.

Stop for human validation.
