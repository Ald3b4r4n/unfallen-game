# Research: Review Rig Articulation Preview Import V1

## Decision 1: Review exactly one `.import` candidate

**Decision**: The feature reviews only:

```txt
assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import
```

**Rationale**: Previous import policy work isolated this file as an additional candidate outside the 32 official rig imports. Treating it separately prevents accidental mass-versioning of `.import` files.

**Alternatives considered**:

- Group with all rig imports immediately: rejected because it would skip the requested human review.
- Remove it with stale prototype imports: rejected because it is related to a validated rig articulation preview, not a stale walk prototype.
- Ignore it without documentation: rejected because the project is using explicit audit trails for repository hygiene.

## Decision 2: Keep planning non-destructive

**Decision**: Planning must not alter the candidate `.import`, any `.uid`, `.gitignore`, runtime scenes, scripts, sprites, or assets.

**Rationale**: The feature is a review/policy decision point, not a cleanup step.

**Alternatives considered**:

- Delete the import now: rejected because the target may be a legitimate Godot metadata candidate.
- Stage it now: rejected because human approval has not decided whether it should be versioned.
- Edit `.gitignore`: rejected because this feature does not authorize repository ignore policy changes.

## Decision 3: Treat the preview as technical evidence only

**Decision**: The preview import must be documented as related to technical rig validation, not as a gameplay asset, walk cycle, or final animation.

**Rationale**: The project has explicitly approved rig articulation only as a partial laboratory milestone. There is no approved articulated walk cycle.

**Required statement**:

```txt
Ainda nao existe caminhada articulada oficial no projeto.
O rig atual e tecnico/laboratorial.
O preview da Rig Articulation Test V1 e evidencia visual de teste tecnico do rig, nao walk cycle oficial.
Esta feature nao valida walk cycle.
Esta feature nao cria walk cycle.
Esta feature nao integra walk cycle ao Player.
Esta feature nao transforma o rig em animacao oficial.
```

## Decision 4: Require source PNG relationship check

**Decision**: Implementation must verify whether the source PNG exists and whether the `.import` corresponds to it.

**Rationale**: A `.import` without a matching source may be stale; a `.import` with a tracked and validated source may be a candidate for later versioning.

**Alternatives considered**:

- Classify by filename only: rejected because Godot import files need source relationship validation.
- Assume source exists: rejected because prior cleanup found stale imports.

## Decision 5: Use documentation, not runtime changes

**Decision**: Future implementation creates only review documents and updates existing audit/inventory documents if authorized by tasks.

**Rationale**: This keeps the feature aligned with repository hygiene and avoids accidental gameplay or asset changes.

**Alternatives considered**:

- Update Godot scene/resource references: rejected as out of scope.
- Create import policy changes in `.gitignore`: rejected as out of scope.

## Decision 6: Human gate remains mandatory

**Decision**: The feature must end with `needs_human_review` unless the user explicitly approves a later action.

**Rationale**: The target is a `.import` tied to validated rig evidence and should not be silently versioned or removed.

**Alternatives considered**:

- Auto-classify as official: rejected because no policy has approved this specific file.
- Auto-classify as local-only: rejected because the preview may be useful as reproducible evidence.

## Open Questions For Implementation

No clarification is required for planning. The implementation must answer these by audit:

1. Is the candidate `.import` still present?
2. Is it tracked or untracked?
3. Does the source PNG exist?
4. Is the source PNG tracked?
5. Does the import metadata point to the expected source?
6. Should the recommendation be `candidate_for_version_later`, `keep_local`, `ignore_later`, or `separate_feature`?
