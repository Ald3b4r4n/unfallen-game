# Data Model: Walk Cycle Lateral Normalization V1

## Entity: LateralWalkSet

Represents one experimental lateral walk set in the lab.

### Fields

- `id`: stable identifier, e.g. `right_20f` or `left_20f`
- `facing`: `right-facing` or `left-facing`
- `source_sheet_path`: original lab source PNG path
- `frame_dir`: input frame directory
- `spriteframes_path`: existing SpriteFrames resource path, if present
- `test_scene_path`: existing test scene path, if present
- `frame_count_expected`: expected number of frames
- `frame_count_actual`: measured number of frames
- `source_profile`: `20_real_plus_4_bridge`, `24_real`, or `unknown`
- `status`: `ready_for_assessment`, `missing_inputs`, `needs_human_review`
- `notes`: free-text audit notes

### Validation Rules

- `frame_count_actual` must be recorded before normalization.
- Missing files must not be silently repaired during planning or implementation.
- `source_profile` must clearly distinguish copied bridge frames from real source frames.

## Entity: FrameAssessment

Represents the technical measurement of one frame.

### Fields

- `walk_set_id`: parent `LateralWalkSet`
- `frame_number`: 1-based frame number
- `input_path`: original frame path
- `width`: measured frame width
- `height`: measured frame height
- `color_mode`: expected `RGBA`
- `has_alpha`: boolean
- `has_magenta_background`: boolean
- `visible_bounds`: measured bounding box for visible character pixels
- `foot_baseline_y`: estimated foot baseline
- `center_x`: estimated horizontal character center
- `visible_height`: height of visible character bounds
- `duplicate_or_bridge_of`: frame number if the frame is intentionally copied
- `assessment_status`: `pass`, `warning`, `fail`, or `not_measured`
- `notes`: measurement caveats

### Validation Rules

- Every available frame must have an assessment row.
- Bridge frames must be marked rather than treated as unique motion.
- Magenta and transparency must be reported separately.

## Entity: NormalizationDecision

Represents the decision for one `LateralWalkSet`.

### Fields

- `walk_set_id`: parent `LateralWalkSet`
- `decision`: `normalize`, `keep_original_for_review`, `pending_adjustment`, or `blocked`
- `canvas_strategy`: `preserve_source`, `pad_to_shared_canvas`, `crop_to_bounds`, or `not_applicable`
- `background_strategy`: `keep_magenta`, `safe_magenta_to_alpha`, or `not_applicable`
- `baseline_strategy`: `align_to_shared_baseline`, `preserve_original`, or `not_applicable`
- `scale_strategy`: `preserve_pixels`, `document_scale_difference`, or `manual_review_required`
- `reason`: explanation of the decision
- `human_review_required`: boolean

### Validation Rules

- A decision cannot promote a set to official walk status.
- A destructive strategy is invalid for this feature.
- `human_review_required` must be true for any future integration evaluation.

## Entity: NormalizedFrameSet

Represents any generated normalized output.

### Fields

- `walk_set_id`: parent `LateralWalkSet`
- `normalized_dir`: output directory under `walk_lab/normalized/`
- `frame_count`: generated frame count
- `canvas_width`: output width
- `canvas_height`: output height
- `background_result`: `magenta_preserved`, `alpha_created`, or `mixed`
- `source_traceability`: mapping from normalized frame to input frame
- `status`: `created`, `not_created`, `blocked`, or `pending_human_review`

### Validation Rules

- Output directory must be separate from original frame directories.
- Output count must match the intended set count, or the mismatch must be documented.
- No output may be written to official sprite folders.

## Entity: ComparativePreview

Represents visual review material.

### Fields

- `id`: preview identifier
- `path`: output preview path
- `preview_type`: `contact_sheet`, `comparison_sheet`, or `gif`
- `includes_right`: boolean
- `includes_left`: boolean
- `shows_normalized`: boolean
- `shows_original`: boolean
- `status`: `created`, `optional_skipped`, or `blocked`
- `notes`: limitations or tooling notes

### Validation Rules

- Required contact sheets and comparison preview must be generated or blocked with reason during implementation.
- GIFs are optional and may be skipped if tooling is unsafe/unavailable.

## Entity: ExperimentalTestScene

Represents an isolated Godot scene for visual validation.

### Fields

- `scene_path`: path under `scenes/test/`
- `script_path`: path under `scripts/test/`
- `uses_right_set`: boolean
- `uses_left_set`: boolean
- `uses_normalized_frames`: boolean
- `has_manual_controls`: boolean
- `status`: `existing`, `created`, `updated`, or `not_needed`

### Validation Rules

- Must not depend on `scenes/player/Player.tscn`.
- Must not create gameplay, collision, enemies, or runtime integration.
- Must start as a lab review tool, not autoplay-only if manual inspection is needed.

## Entity: IntegrationReadinessStatus

Represents the final documentation-only readiness classification.

### Fields

- `walk_set_id`: parent `LateralWalkSet`
- `normalization_status`: `approved_for_normalization`, `normalized_for_review`, `pending_adjustment`, or `blocked`
- `future_integration_status`: `ready_for_future_evaluation`, `not_ready`, or `needs_human_review`
- `official_status`: always `not_official`
- `limitations`: list of known issues
- `next_step`: recommended follow-up

### Validation Rules

- `official_status` must remain `not_official`.
- `future_integration_status` cannot imply Player integration in this feature.
- Limitations must include magenta/transparency status and any loop asymmetry between sides.
