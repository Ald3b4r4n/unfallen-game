# Data Model: Cleanup Untracked Prototypes V1

## Entity: UntrackedFile

Represents one file currently present in the workspace and not tracked by Git.

### Fields

- `path`: Project-relative path.
- `extension`: File extension or file type marker.
- `group`: Audit group assigned during classification.
- `probable_origin`: Human-readable origin estimate.
- `risk`: Risk classification.
- `recommended_destination`: Proposed future action.
- `observation`: Short note explaining the classification.
- `decision_status`: Current decision state.

### Validation Rules

- `path` must be unique within the inventory.
- `group` must be one of the planned audit groups or a documented additional group.
- `recommended_destination` must not execute an action; it is only a proposal.
- Unknown or ambiguous files must use `unknown_origin` or `needs_human_review`.

## Entity: AuditGroup

Represents a category of untracked files with shared origin or risk.

### Fields

- `name`: Group identifier.
- `description`: What the group contains.
- `file_count`: Number of files in the group.
- `risk`: Default group risk.
- `recommended_destination`: Default recommendation.
- `review_required`: Whether human approval is required before any future action.

### Required Groups

- `walk_candidates`
- `walk_prototypes`
- `godot_import_files`
- `godot_uid_files`
- `old_specs`
- `rig_assets`
- `preview_assets`
- `manifest_files`
- `temporary_audit_files`
- `unknown_origin`

### Validation Rules

- Every `UntrackedFile` must belong to exactly one primary group.
- Groups may include sub-notes for overlapping concerns, such as `.import` files under a walk prototype path.
- Additional groups must be documented in the audit report.

## Entity: RiskClassification

Represents the risk level of acting on a file or group.

### Values

- `low`: Safe to keep or document; no direct runtime impact.
- `medium`: Requires review before versioning or ignoring.
- `high`: Could affect official assets, project history or editor behavior.
- `critical`: Must not be changed in this feature.

### Validation Rules

- Files related to Player runtime, sprites idle approved or official rig assets must be `high` or `critical` unless clearly generated and isolated.
- Files with unknown origin must not be below `medium`.
- Destructive recommendations require human approval and cannot be executed in this feature.

## Entity: RecommendedDestination

Represents a future action proposal, not an executed operation.

### Values

- `keep_versioned_later`: Candidate for future commit after review.
- `archive_later`: Candidate for historical archive in a later approved feature.
- `keep_local`: Keep outside Git.
- `ignore_later`: Candidate for future ignore policy.
- `remove_later`: Candidate for future removal after human approval.
- `separate_feature`: Needs its own feature scope.
- `needs_human_review`: Cannot be decided automatically.

### Validation Rules

- No recommendation authorizes automatic deletion.
- `keep_versioned_later` must include a reason and likely commit boundary.
- `.import` and `.uid` files should default to `needs_human_review` unless policy is already documented.

## Entity: AuditDocument

Represents the future report at `docs/technical/untracked-cleanup-audit-v1.md`.

### Required Sections

- Audit date.
- Branch.
- Context after safe push.
- Total untracked count.
- Group summary.
- Sensitive files and areas.
- Files not recommended for automatic commit.
- Candidates for future commit.
- Candidates for archive.
- Candidates for local-only retention.
- Candidates for future ignore policy.
- Candidates for future removal.
- Pending decisions.
- Final recommendation.
- Safety confirmations.

## Entity: InventoryDocument

Represents the future inventory at `docs/technical/untracked-cleanup-inventory-v1.md`.

### Required Columns

- `path`
- `group`
- `type`
- `risk`
- `recommended_destination`
- `observation`
- `decision_status`

### Validation Rules

- Must list or explicitly account for 100% of untracked files found during implementation.
- Must not include temporary collection files as final project artifacts unless intentionally documented.
- Must not imply approval for commit, deletion or movement.
