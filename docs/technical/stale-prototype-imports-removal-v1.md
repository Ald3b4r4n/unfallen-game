# Stale Prototype Imports Removal V1

**Feature**: 013-remove-stale-prototype-imports-v1  
**Date**: 
2026-06-23
  
**Branch**: 
013-remove-stale-prototype-imports-v1
  
**Status**: implementation completed, pending human validation.

## Objective

Remove only stale Godot .import files connected to old rejected walk prototypes, after the PNG sources were archived historically by feature 011-archive-walk-prototypes-v1.

This feature does not approve, create, integrate or revive any walk cycle. The archived prototype PNGs remain historical material only.

## Relationship With Previous Features

- Feature 011 archived the rejected walk prototype PNGs under docs/archive/walk-prototypes-v1/files/.
- Feature 012 classified 77 untracked .import files as prototype_imports with recommendation remove_later.
- Feature 013 removed only those 77 stale prototype .import files after explicit validation.

## Totals

| Metric | Count |
|---|---:|
| Prototype imports evaluated | 77 |
| Prototype imports removed | 77 |
| Prototype imports kept for review | 0 |
| .uid files removed | 0 |
| Official asset imports removed | 0 |
| .import archive copies removed | 0 |

## Removed By Group

| Group | Count | Status | Decision |
|---|---:|---|---|
| exports_walk_manual_candidate_v1 | 2 | removed_stale_prototype_import | removed |
| exports_walk_prototype_v5 | 1 | removed_stale_prototype_import | removed |
| source_walk_sheet_candidate_v1 | 1 | removed_stale_prototype_import | removed |
| source_walk_sheet_manual_candidate_v1 | 1 | removed_stale_prototype_import | removed |
| sprites_walk_manual_candidate_v1 | 64 | removed_stale_prototype_import | removed |
| sprites_walk_prototype_v5 | 8 | removed_stale_prototype_import | removed |

See docs/technical/stale-prototype-imports-removal-manifest-v1.md for the complete per-file manifest.

## Files Kept Out Of Scope

The following groups were intentionally not removed by this feature:

- .uid files: remain pending human review.
- official_asset_imports: remain pending human review.
- .import files inside docs/archive/walk-prototypes-v1/files/: retained as local Godot import residue for historical archive copies, not touched here.
- Official rig imports: retained and not changed.
- Base Idle Oficial V1 assets: retained and not changed.
- Old specs and manifest files outside this feature: still pending separate review.

## Safety Confirmations

- .uid files were not removed or altered.
- official_asset_imports were not removed or altered.
- .gitignore was not altered.
- scenes/player/Player.tscn was not altered.
- scenes/rig/AntonioRafaelRigLab.tscn was not altered.
- scripts/player/ and scripts/rig/ were not altered.
- Base Idle Oficial V1 sprites were not altered.
- Official rig assets were not altered.
- No gameplay was created.
- No official walk cycle was created.
- No official animation was created.
- git add . was not used.
- git add -A was not used.
- git commit -am was not used.
- git clean was not used.
- No commit was made.
- No push was made.

## Recommendation

Status recommended: **approve partially** as safe cleanup of stale prototype .import files.

Next recommended action: commit this feature only with explicit paths after human validation, then handle remaining .uid, official rig .import files, old specs and unrelated manifests in separate features.
