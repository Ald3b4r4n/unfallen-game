# Data Model: Codex Image Walk Lab V1

**Feature**: `017-codex-image-walk-lab-v1`  
**Date**: 2026-06-24

## Entity: WalkLabPrompt

Represents a versioned prompt used to request an experimental walking spritesheet.

**Fields**

- `id`: Stable prompt identifier, e.g. `front_right_walk_codex_image_prompt_v1`.
- `direction`: Initial value `front_right`.
- `character_identity`: Required Antonio Rafael identity constraints.
- `style_constraints`: Pixel Art HD isometric, technical spritesheet, `128x128` cells, transparent background when possible.
- `motion_constraints`: 4 frames, walking in-place, contact/passing/opposite contact/opposite passing.
- `negative_constraints`: Forbidden visual outcomes, text, labels, scenery, identity drift, Polícia Civil, random names, static idle repetition.
- `reference_context`: Notes that Base Idle Oficial V1 is the visual truth.
- `status`: `draft`, `ready_for_generation`, `used`, `needs_revision`.

**Validation Rules**

- Must include at least 10 positive identity/style constraints.
- Must include at least 10 negative constraints.
- Must not declare the output official.
- Must target only one direction in this feature: `front_right`.

## Entity: ExperimentalWalkAttempt

Represents a generated or documented image attempt for the walk lab.

**Fields**

- `id`: Attempt identifier, e.g. `front_right_walk_codex_image_attempt_v1`.
- `prompt_id`: Link to `WalkLabPrompt`.
- `source_path`: Generated image path if available.
- `direction`: `front_right`.
- `frame_count_expected`: `4`.
- `frame_count_detected`: Number of readable frames after review, if applicable.
- `transparency_status`: `transparent`, `opaque`, `unknown`, `requires_cleanup`.
- `identity_status`: `preserved`, `partially_preserved`, `failed`.
- `motion_status`: `clear_walk`, `partial_walk`, `idle_like`, `failed`.
- `official_status`: Always `experimental` in this feature.
- `decision`: `candidate_to_continue`, `revise_prompt`, `reject_attempt`, `generation_unavailable`.

**Validation Rules**

- Must not be stored in active runtime sprite folders.
- Must not be referenced by Player.
- Must be marked experimental.
- Must be rejected if it contains labels, text, scenery, Polícia Civil, Sargento Silva, random names, or severe identity drift.

## Entity: PreviewContactSheet

Represents a human-review preview derived from a generated spritesheet or frames.

**Fields**

- `id`: Preview identifier.
- `attempt_id`: Link to `ExperimentalWalkAttempt`.
- `preview_path`: Path under `walk_lab/previews/`.
- `layout`: Contact sheet or frame comparison layout.
- `contains_labels`: Whether labels exist in the preview only. Individual generated frames must not contain labels.
- `review_purpose`: Human validation.
- `runtime_usage`: Always `not_for_runtime`.

**Validation Rules**

- Must be created only if there is valid source/frame material.
- May include review labels, but labels must not appear inside generated sprite frames.
- Must not be used as a runtime spritesheet.

## Entity: VisualValidationChecklist

Represents the criteria used to judge the attempt.

**Fields**

- `identity_checks`: Face, glasses, hair, skin tone, PMGO/survivor reading, colete, backpack, uniform palette.
- `motion_checks`: Leg alternation, arm alternation, body weight, non-static frames.
- `technical_checks`: Frame separation, scale stability, no labels/text/scenery, transparency status.
- `scope_checks`: Player unchanged, official idles unchanged, rig official unchanged, no official walk claim.
- `result`: `candidate_to_continue`, `revise_prompt`, `reject_attempt`, `generation_unavailable`.

**Validation Rules**

- Must be applied before any recommendation.
- Must separate visual promise from official approval.
- Must require human validation for any candidate continuation.

## Entity: ScopeAudit

Represents the final safety audit for this feature.

**Fields**

- `player_changed`: Must be `false`.
- `rig_scene_changed`: Must be `false`.
- `scripts_changed`: Must be `false`.
- `idle_sprites_changed`: Must be `false`.
- `official_rig_changed`: Must be `false`.
- `gitignore_changed`: Must be `false`.
- `uid_changed`: Must be `false`.
- `official_walk_declared`: Must be `false`.
- `commit_performed`: Must be `false` unless separately approved after the feature.
- `push_performed`: Must be `false`.

**Validation Rules**

- Any `true` value in protected fields blocks approval and must be reported.

## State Transitions

```text
WalkLabPrompt
draft -> ready_for_generation -> used -> needs_revision

ExperimentalWalkAttempt
not_created -> generated -> reviewed -> candidate_to_continue
not_created -> generation_unavailable
generated -> reviewed -> revise_prompt
generated -> reviewed -> reject_attempt

PreviewContactSheet
not_needed -> created_for_review
not_needed -> skipped_no_valid_material
```
