# Research: Walk Cycle Lateral Normalization V1

## Decision 1: Use non-destructive normalization

**Decision**: Write any normalized outputs only under `assets/characters/antonio_rafael/walk_lab/normalized/`.

**Rationale**: The current `right_20f` and `left_20f` folders are source lab evidence. Rewriting them would destroy traceability and make it harder to compare the original extraction against the normalized result.

**Alternatives considered**:

- Overwrite original frames: rejected because it damages auditability.
- Move original frames into archive: rejected because the current lab tests still need direct comparison.
- Normalize directly into official sprite folders: rejected because no walk cycle is official yet.

## Decision 2: Evaluate both sides with one shared metric set

**Decision**: Use the same checks for right-facing and left-facing: frame count, canvas, RGBA mode, magenta/transparency, visible bounding box, foot baseline, center X, scale/readability, loop continuity, and duplicate/bridge status.

**Rationale**: The two lateral cycles come from different source sheets. A shared metric set prevents one side from being treated more generously than the other.

**Alternatives considered**:

- Evaluate each side with bespoke criteria: rejected because it weakens the comparison.
- Use only visual review: rejected because baseline/canvas issues can be hard to see in motion.

## Decision 3: Treat right-facing bridge frames as intentional lab data

**Decision**: Preserve and document that `right_20f/frame_21.png` through `frame_24.png` are bridge copies of frames `06` through `09`.

**Rationale**: The bridge was added by human request to complete the perceived cycle after frame 20. It may help review, but it is technically different from a source sheet with 24 unique frames.

**Alternatives considered**:

- Remove bridge frames during normalization: rejected for this feature because the user approved the test as 24-frame experimental material.
- Hide the bridge detail: rejected because it would misrepresent the data.

## Decision 4: Preserve left-facing 24 real frames as a separate source profile

**Decision**: Document the left-facing set as 24 real frames from the source sheet, not as a mirrored or duplicated variant of the right-facing set.

**Rationale**: The left-facing sheet provides a useful contrast against the right-facing bridge model. It also avoids treating the two sides as symmetrical when their origins differ.

**Alternatives considered**:

- Mirror the right-facing frames to create left-facing output: rejected because it would discard the actual left-facing source.
- Force both sets into identical source semantics: rejected because the feature is a comparative normalization, not source homogenization.

## Decision 5: Make magenta removal conditional

**Decision**: Attempt magenta-to-alpha only if a conservative threshold can remove the background without damaging character pixels; otherwise preserve magenta and record the limitation.

**Rationale**: The magenta background is visually intrusive, but aggressive chroma removal can cut details from uniform, skin, shadow, or outline. The feature should prefer traceability and visual safety over pretending transparency is final.

**Alternatives considered**:

- Always remove magenta: rejected because it can damage sprites.
- Never remove magenta: rejected because a safe alpha pass would make future review much better.

## Decision 6: Prefer padding/anchor alignment over resampling

**Decision**: Normalize baseline, center, and canvas by padding/cropping around measured bounds whenever possible; avoid scaling/resampling unless explicitly documented as a last resort.

**Rationale**: Pixel Art HD should avoid blur and inconsistent filtering. The generated sheets are not official 128x128 runtime frames yet, so preserving source pixels is more important than forcing final dimensions prematurely.

**Alternatives considered**:

- Resize all frames to 128x128 immediately: rejected because it can blur or distort a lab source.
- Leave all mismatches untouched: rejected if it prevents fair comparison between the two sides.

## Decision 7: Use isolated Godot test resources only if they improve review

**Decision**: Create normalized SpriteFrames and one optional comparison test scene only if implementation finds that previews alone are not enough for human review.

**Rationale**: The project already has separate test scenes. A combined scene can help compare both sides, but it must remain lab-only and not become runtime integration.

**Alternatives considered**:

- Update Player animations: rejected as out of scope.
- Skip Godot resources entirely: acceptable if contact sheets/GIFs are enough, but less useful for live validation.

## Decision 8: No contracts directory is needed

**Decision**: Do not create `contracts/` for this feature.

**Rationale**: The feature has no public API, gameplay interface, CLI command contract, network service, or exported runtime schema. The relevant contracts are documentation and manifest tables.

**Alternatives considered**:

- Create an image-processing contract file: rejected as unnecessary overhead for this internal lab workflow.

## Decision 9: Human gate before integration readiness is acted on

**Decision**: The feature can document readiness for future integration evaluation, but cannot integrate or declare official status.

**Rationale**: The constitution and prior workflow require human approval before structural/runtime changes. This feature is diagnostic and preparatory.

**Alternatives considered**:

- Integrate into Player if normalized frames look good: rejected because it would skip the approved pipeline.
