# Data Model: Review Rig Articulation Preview Import V1

## Entity: ArticulationPreviewImportCandidate

Represents the single `.import` file under review.

| Field | Type | Required | Description |
|---|---|---:|---|
| `import_path` | string | yes | Exact path of the `.import` candidate. |
| `source_asset_path` | string | yes | Expected source PNG path. |
| `import_exists` | boolean | yes | Whether the candidate exists locally at audit time. |
| `import_tracked` | boolean | yes | Whether Git tracks the candidate. |
| `source_asset_exists` | boolean | yes | Whether the source PNG exists locally. |
| `source_asset_tracked` | boolean | yes | Whether Git tracks the source PNG. |
| `relationship_to_articulation_test` | string | yes | Evidence linking the file to Rig Articulation Test V1. |
| `relationship_to_official_rig_imports` | string | yes | Whether it should be compared with the 32 official rig imports reviewed in feature 014. |
| `not_walk_cycle_confirmation` | boolean | yes | Must confirm it is not a walk cycle. |
| `not_animation_official_confirmation` | boolean | yes | Must confirm it is not an official animation. |
| `not_player_runtime_confirmation` | boolean | yes | Must confirm it is not Player runtime content. |
| `risk_level` | enum | yes | `critical`, `high`, `medium`, or `low`. |
| `status` | enum | yes | Candidate review status. |
| `recommendation` | enum | yes | Future decision recommendation. |
| `human_review_required` | boolean | yes | Must remain true unless a later feature explicitly approves action. |
| `notes` | string | no | Short explanation and caveats. |

## Entity: ImportReviewManifestEntry

Represents the row that future implementation should place in the review manifest.

| Field | Type | Required | Description |
|---|---|---:|---|
| `path` | string | yes | Candidate `.import` path. |
| `source_png` | string | yes | Source PNG path. |
| `group` | string | yes | `rig_articulation_preview_import`. |
| `type` | string | yes | `godot_import_metadata`. |
| `status` | enum | yes | Review status. |
| `risk` | enum | yes | Risk level. |
| `recommendation` | enum | yes | Future recommendation. |
| `decision` | string | yes | Human decision state, initially pending. |
| `observation` | string | yes | Why this file is reviewed separately. |

## Entity: SafetyValidation

Captures final evidence that the feature stayed in scope.

| Field | Type | Required | Description |
|---|---|---:|---|
| `no_import_modified` | boolean | yes | No `.import` was altered, removed, staged, or committed. |
| `no_uid_modified` | boolean | yes | No `.uid` was altered, removed, staged, or committed. |
| `gitignore_unchanged` | boolean | yes | `.gitignore` remains untouched. |
| `player_unchanged` | boolean | yes | `Player.tscn` remains untouched. |
| `rig_scene_unchanged` | boolean | yes | `AntonioRafaelRigLab.tscn` remains untouched. |
| `scripts_unchanged` | boolean | yes | Player and rig scripts remain untouched. |
| `sprites_idle_unchanged` | boolean | yes | Approved idle sprites remain untouched. |
| `official_assets_unchanged` | boolean | yes | Official rig assets remain untouched. |
| `no_walk_cycle_created` | boolean | yes | No walk cycle was created. |
| `no_official_animation_created` | boolean | yes | No official animation was created. |
| `no_commit` | boolean | yes | No commit occurred in implementation. |
| `no_push` | boolean | yes | No push occurred in implementation. |

## Status Values

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

## Recommendation Values

```txt
version_later
group_with_official_rig_imports_later
keep_local
ignore_later
separate_feature
needs_human_review
no_action
```

## State Transitions

```txt
detected
  -> source_checked
  -> relationship_classified
  -> risk_assessed
  -> recommendation_documented
  -> human_gate_pending
```

No transition performs deletion, movement, staging, commit, push, official approval, Player integration, or `.gitignore` updates.

## Validation Rules

1. `import_path` must equal `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import`.
2. `source_asset_path` must equal `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png`.
3. The candidate must be documented separately from stale prototype imports.
4. The candidate must be documented separately from official rig import group decisions until human approval.
5. `.uid` files cannot be included in this feature.
6. `.gitignore` cannot be changed in this feature.
7. Runtime files cannot be changed in this feature.
8. The result cannot mark the preview as official walk cycle or official animation.
