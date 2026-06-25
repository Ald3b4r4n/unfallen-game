# Research: Codex Image Walk Lab V1

**Feature**: `017-codex-image-walk-lab-v1`  
**Date**: 2026-06-24  
**Status**: Planning research complete

## Decision 1: Use Codex `/image` as the primary route for this feature

**Decision**: The first experimental walk-lab attempt will use the Codex image route directly, with a tightly controlled prompt for a `front_right` 4-frame walking-in-place spritesheet.

**Rationale**: The project needs an evolutive visual step after audit-heavy features. Direct image generation is the fastest way to test whether prompt discipline can produce a useful visual candidate before investing in more procedural rig or video extraction workflows.

**Alternatives considered**:

- **Rig procedural animation first**: Rejected for this feature because the user explicitly wants to test `/image` first.
- **Image-to-video extraction**: Deferred. It may be useful later, but this feature should stay focused and not become a complex video pipeline.
- **Manual frame drawing**: Deferred. The current feature is about validating whether image generation can create a better candidate than previous procedural attempts.

## Decision 2: Start with `front_right` only

**Decision**: The first generated direction will be `front_right`.

**Rationale**: `front_right` is an important isometric direction and matches the direction already used heavily in rig parts, rig assembly, refinement, and articulation tests. It reduces scope while preserving meaningful visual risk.

**Alternatives considered**:

- **8 directions immediately**: Rejected because prior walk attempts failed and broad generation would multiply failure modes.
- **Left-only**: Rejected for this feature because the current rig and visual validation history are strongest in `front_right`.
- **Front-only**: Rejected because `front_right` better exercises the isometric identity, backpack/colete silhouette, and Goias/sergeant details.

## Decision 3: Treat `ai-game-spritesheets` as conceptual process inspiration only

**Decision**: The project will adapt the process discipline from the public `chongdashu/ai-game-spritesheets` repository: controlled prompts, anchors, reference discipline, review sheets, normalization awareness, and runtime caution. It will not copy prompts or assets as product output.

**Rationale**: The referenced repository emphasizes that image generation is only part of the pipeline and highlights anchors, consistent scale, frame normalization, contact sheets, and review before runtime use. Those ideas map well to Unfallen's need for a controlled lab. The character identity and prompt content must remain original to SGT Antonio Rafael and Unfallen.

**Source consulted**: <https://github.com/chongdashu/ai-game-spritesheets>

**Alternatives considered**:

- **Copy prompt templates literally**: Rejected to avoid importing third-party wording as project output and because Unfallen needs its own PMGO/survivor identity constraints.
- **Ignore the reference**: Rejected because its pipeline lessons are directly relevant to reducing spritesheet drift and bad frame normalization.

## Decision 4: Keep generated material experimental and isolated

**Decision**: Generated material will live only in `assets/characters/antonio_rafael/walk_lab/` and documentation. It will not enter active `sprites/idle`, `sprites/walk`, Player scenes, rig official folders, or runtime code.

**Rationale**: Previous attempts were rejected or archived. This feature must protect the approved idle and rig state while enabling real experimentation.

**Alternatives considered**:

- **Use active sprite folders for convenience**: Rejected because it risks accidental integration or Godot import confusion.
- **Store only under docs archive**: Rejected because this is an active experimental lab, not a historical archive.

## Decision 5: Use prompt-first validation before any normalization

**Decision**: The generated output will first be judged visually for identity, movement, frame separation, and absence of forbidden artifacts. Only if it passes basic visual checks should future normalization be considered.

**Rationale**: Normalization cannot save a generated sheet that changes the character, repeats idle, adds labels, or fails to show walking.

**Alternatives considered**:

- **Normalize every generated image automatically**: Rejected because it could give false legitimacy to bad output.
- **Skip normalization planning entirely**: Rejected because transparency and frame extraction are common image-generation limitations and should be documented.

## Decision 6: Use a strict rejection path

**Decision**: The result should be rejected as a candidate if it looks static, duplicates frames, changes identity, includes text/labels, creates Polícia Civil/Sargento Silva/random names, includes scenery, or fails to read as walking.

**Rationale**: The prior history shows that subtle movement and identity drift are the core risks. A strict rejection path keeps the project honest.

**Alternatives considered**:

- **Accept partial aesthetic improvement without motion**: Rejected because the feature goal is walk-cycle learning, not another idle-like artifact.
- **Accept identity drift if motion is good**: Rejected because the Base Idle Oficial V1 remains the character truth.
