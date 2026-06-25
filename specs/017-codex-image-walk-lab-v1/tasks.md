# Tasks: Codex Image Walk Lab V1

**Input**: Design documents from `/specs/017-codex-image-walk-lab-v1/`  
**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `quickstart.md`, `checklists/requirements.md`  
**Tests**: No automated tests requested; validation is visual, documentary, and scope-audit based.  
**Organization**: Tasks follow the mandatory execution phases requested for this feature and preserve user-story traceability where applicable.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel when dependencies are complete and files do not conflict.
- **[US1]**: Controlled prompt pipeline.
- **[US2]**: Experimental attempt registration and visual evaluation.
- **[US3]**: Safe isolated walk-lab structure.
- Every task includes file paths, completion criteria, and dependencies in the description.

---

## Phase 1: Preparacao e Leitura da Feature

**Purpose**: Establish the approved scope and load the current feature context before any implementation work.

- [X] T001 Read feature spec in `specs/017-codex-image-walk-lab-v1/spec.md`; completion: scope, user stories, prohibitions, and acceptance criteria are understood; dependencies: none.
- [X] T002 Read technical plan in `specs/017-codex-image-walk-lab-v1/plan.md`; completion: implementation artifacts, protected paths, and gate rules are understood; dependencies: T001.
- [X] T003 [P] Read research decisions in `specs/017-codex-image-walk-lab-v1/research.md`; completion: `/image` route, `front_right` direction, and conceptual-use-only constraint are confirmed; dependencies: T001.
- [X] T004 [P] Read data model in `specs/017-codex-image-walk-lab-v1/data-model.md`; completion: `WalkLabPrompt`, `ExperimentalWalkAttempt`, `PreviewContactSheet`, `VisualValidationChecklist`, and `ScopeAudit` fields are mapped to implementation work; dependencies: T001.
- [X] T005 [P] Read quickstart in `specs/017-codex-image-walk-lab-v1/quickstart.md`; completion: implementation and validation flow are understood; dependencies: T001.
- [X] T006 [P] Read requirements checklist in `specs/017-codex-image-walk-lab-v1/checklists/requirements.md`; completion: checklist remains aligned with implementation scope; dependencies: T001.
- [X] T007 [P] Read previous walk-lab prep in `docs/technical/articulated-walk-lab-prep-v1.md`; completion: prior constraints and "no official walk" status are captured for documentation; dependencies: T001.
- [X] T008 [P] Read official import consolidation in `docs/technical/official-rig-imports-versioning-v1.md`; completion: official rig import status and protected official assets are understood; dependencies: T001.
- [X] T009 [P] Read repository hygiene rules in `docs/project/repository-hygiene.md`; completion: no mass staging, no `.gitignore`, no `.uid`, and safe Git rules are confirmed; dependencies: T001.
- [X] T010 [P] Read optional character and rig context in `docs/art/antonio-rafael.md`, `docs/art/asset-sources.md`, `docs/technical/character-pipeline.md`, `docs/technical/rig-articulation-test-v1.md`, `docs/technical/rig-refinement-v1.md`, and `docs/technical/rig-assembly-v1.md` when present; completion: missing files are listed as non-blocking context gaps or existing files are summarized for implementation; dependencies: T001.

---

## Phase 2: Levantamento de Referencias Oficiais do Personagem

**Purpose**: Confirm the visual truth sources without changing official assets.

- [X] T011 [P] Inventory approved idle references in `assets/characters/antonio_rafael/sprites/idle/`; completion: Base Idle Oficial V1 files are listed as read-only visual reference; dependencies: T001.
- [X] T012 [P] Inventory official rig references in `assets/characters/antonio_rafael/rig/`; completion: rig parts, previews, and manifests are listed as read-only reference material; dependencies: T001.
- [X] T013 [P] Inventory art documentation in `docs/art/`; completion: character identity, asset source, and visual constraints are available for prompt writing; dependencies: T010.
- [X] T014 [P] Inventory technical documentation in `docs/technical/`; completion: rig pipeline, walk-lab prep, import policy, and validation docs are available for prompt/pipeline writing; dependencies: T007, T008.
- [X] T015 [US1] Confirm Base Idle Oficial V1 as identity anchor in `docs/art/codex-image-walk-lab-v1.md`; completion: future documentation states generated output must preserve the approved idle identity and remains experimental; dependencies: T011, T013.
- [X] T016 [US3] Confirm official rig is reference-only in `docs/technical/codex-image-walk-pipeline-v1.md`; completion: future documentation states rig files may be read but not altered by this feature; dependencies: T012, T014.

---

## Phase 3: Criacao da Estrutura Experimental walk_lab

**Purpose**: Prepare isolated folders for prompts, source attempts, exports, previews, and optional frames.

- [X] T017 [US3] Create root walk lab folder `assets/characters/antonio_rafael/walk_lab/`; completion: folder exists and is documented as experimental only; dependencies: T011, T012.
- [X] T018 [P] [US3] Create prompts folder `assets/characters/antonio_rafael/walk_lab/prompts/`; completion: folder exists for versioned prompts; dependencies: T017.
- [X] T019 [P] [US3] Create source folder `assets/characters/antonio_rafael/walk_lab/source/`; completion: folder exists for generated attempt sources; dependencies: T017.
- [X] T020 [P] [US3] Create exports folder `assets/characters/antonio_rafael/walk_lab/exports/`; completion: folder exists for future normalized/exported experiment outputs; dependencies: T017.
- [X] T021 [P] [US3] Create previews folder `assets/characters/antonio_rafael/walk_lab/previews/`; completion: folder exists for human review previews/contact sheets; dependencies: T017.
- [X] T022 [P] [US3] Create frames folder `assets/characters/antonio_rafael/walk_lab/frames/`; completion: folder exists and is not treated as official sprite output; dependencies: T017.
- [X] T023 [US3] Create front-right frames folder `assets/characters/antonio_rafael/walk_lab/frames/front_right/`; completion: folder exists for optional extracted experimental frames only; dependencies: T022.
- [X] T024 [US3] Record walk_lab status in `docs/technical/codex-image-walk-pipeline-v1.md`; completion: documentation states `walk_lab` is experimental, not official, not Player runtime, and not a replacement for idle sprites; dependencies: T017-T023.

---

## Phase 4: Criacao do Prompt Mestre front_right

**Purpose**: Create the controlled prompt artifact for a single `front_right` image-generation attempt.

- [X] T025 [US1] Create prompt file `assets/characters/antonio_rafael/walk_lab/prompts/front_right_walk_codex_image_prompt_v1.md`; completion: file exists and contains a clear title, purpose, output target, and experimental status; dependencies: T018.
- [X] T026 [US1] Add official identity block to `assets/characters/antonio_rafael/walk_lab/prompts/front_right_walk_codex_image_prompt_v1.md`; completion: prompt includes Antonio Rafael's PMGO/survivor identity, age, skin tone, hair, glasses, face, athletic build, colete, mochila, palette, patch, and sergeant detail when visible; dependencies: T025.
- [X] T027 [US1] Add technical spritesheet block to `assets/characters/antonio_rafael/walk_lab/prompts/front_right_walk_codex_image_prompt_v1.md`; completion: prompt specifies Pixel Art HD isometric style, `front_right`, 4 frames, walking in-place, `128x128` cells, scale consistency, and transparent background request when possible; dependencies: T025.
- [X] T028 [US1] Add movement pose block to `assets/characters/antonio_rafael/walk_lab/prompts/front_right_walk_codex_image_prompt_v1.md`; completion: prompt requires contact, passing, opposite contact, opposite passing, visible leg alternation, visible arm alternation, and body-weight read; dependencies: T027.
- [X] T029 [US1] Add negative constraints block to `assets/characters/antonio_rafael/walk_lab/prompts/front_right_walk_codex_image_prompt_v1.md`; completion: prompt forbids Polícia Civil, Sargento Silva, random names, labels, text inside sprite, scenery, highlighted weapon, exaggerated hero pose, face/uniform drift, merged frames, and idle repetition; dependencies: T026, T027.
- [X] T030 [US1] Add output and review instructions to `assets/characters/antonio_rafael/walk_lab/prompts/front_right_walk_codex_image_prompt_v1.md`; completion: prompt states result is experimental and must not be integrated or declared official before human gate; dependencies: T028, T029.
- [X] T031 [US1] Validate prompt completeness in `assets/characters/antonio_rafael/walk_lab/prompts/front_right_walk_codex_image_prompt_v1.md`; completion: prompt has at least 10 positive identity/style constraints and 10 negative constraints; dependencies: T026-T030.

---

## Phase 5: Preparacao da Tentativa Experimental via /image

**Purpose**: Prepare a single controlled image-generation attempt without expanding to 8 directions.

- [X] T032 [US2] Prepare `/image` execution notes in `docs/art/codex-image-walk-lab-v1.md`; completion: documentation specifies use of the master prompt, direction `front_right`, one initial attempt, and no 8-direction generation; dependencies: T031.
- [X] T033 [US2] Prepare visual reference notes in `docs/art/codex-image-walk-lab-v1.md`; completion: documentation lists Base Idle Oficial V1 and rig preview files as reference-only visual context; dependencies: T011, T012, T032.
- [X] T034 [US2] Define expected source output path in `docs/technical/codex-image-walk-pipeline-v1.md`; completion: path `assets/characters/antonio_rafael/walk_lab/source/front_right_walk_codex_image_attempt_v1.png` is documented as experimental source if generation succeeds; dependencies: T019, T032.
- [X] T035 [US2] Define fallback behavior in `docs/technical/codex-image-walk-pipeline-v1.md`; completion: documentation states that if `/image` is unavailable or invalid, no asset is fabricated and the limitation is recorded; dependencies: T032.
- [X] T036 [US2] Confirm non-goals in `docs/technical/codex-image-walk-pipeline-v1.md`; completion: documentation states no attack, damage, death, gameplay, Player integration, official walk, or 8 directions in this feature; dependencies: T034, T035.

---

## Phase 6: Registro de Assets Gerados ou Impossibilidade

**Purpose**: Record the result of the single experiment honestly, whether image generation succeeds or not.

- [X] T037 [US2] If `/image` is available, generate one experimental source image at `assets/characters/antonio_rafael/walk_lab/source/front_right_walk_codex_image_attempt_v1.png`; completion: image exists or generation result is explicitly classified as unavailable/invalid; dependencies: T031, T034.
- [X] T038 [US2] Record generation metadata in `docs/art/codex-image-walk-lab-v1.md`; completion: prompt used, date, direction, source path or failure reason, and experimental status are documented; dependencies: T037.
- [X] T039 [US2] Record technical source assessment in `docs/technical/walk-lab-validation-v1.md`; completion: transparency, frame separation, scale, text/label presence, and initial walk-vs-idle read are documented; dependencies: T037.
- [X] T040 [US2] Conditional no-valid-image branch evaluated as N/A in `docs/art/codex-image-walk-lab-v1.md`; completion: doc states "tentativa nao gerada nesta rodada" or equivalent, reason, next action, no official asset, and no integration; dependencies: T037.
- [X] T041 [US2] If a valid image exists, mark source as experimental in `docs/art/codex-image-walk-lab-v1.md`; completion: doc states the source is not official, not runtime, and not approved as walk cycle; dependencies: T037.

---

## Phase 7: Preview/Contact Sheet e Organizacao de Frames

**Purpose**: Create human-review material only when generated material is valid enough.

- [X] T042 [US2] Evaluate whether source image supports preview generation in `docs/technical/walk-lab-validation-v1.md`; completion: document records whether source has readable cells/frames suitable for preview; dependencies: T039.
- [X] T043 [US2] If valid source material exists, create preview/contact sheet at `assets/characters/antonio_rafael/walk_lab/previews/front_right_walk_codex_image_attempt_v1_preview.png`; completion: preview exists and is marked for human review only; dependencies: T021, T042.
- [X] T044 [US2] Conditional preview-failure branch evaluated as N/A in `docs/technical/walk-lab-validation-v1.md`; completion: reason is documented and no preview is invented; dependencies: T042.
- [X] T045 [US2] Evaluate whether frames can be separated safely in `docs/technical/walk-lab-validation-v1.md`; completion: document states whether 4 frames can be extracted without inventing content or aggressive normalization; dependencies: T042.
- [X] T046 [US2] If frames are safely separable, create `assets/characters/antonio_rafael/walk_lab/frames/front_right/frame_01.png`; completion: frame exists, remains experimental, and is not integrated; dependencies: T023, T045.
- [X] T047 [US2] If frames are safely separable, create `assets/characters/antonio_rafael/walk_lab/frames/front_right/frame_02.png`; completion: frame exists, remains experimental, and is not integrated; dependencies: T023, T045.
- [X] T048 [US2] If frames are safely separable, create `assets/characters/antonio_rafael/walk_lab/frames/front_right/frame_03.png`; completion: frame exists, remains experimental, and is not integrated; dependencies: T023, T045.
- [X] T049 [US2] If frames are safely separable, create `assets/characters/antonio_rafael/walk_lab/frames/front_right/frame_04.png`; completion: frame exists, remains experimental, and is not integrated; dependencies: T023, T045.
- [X] T050 [US2] Conditional frame-extraction-failure branch evaluated as N/A in `docs/technical/walk-lab-validation-v1.md`; completion: document states frames were not created and why; dependencies: T045.

---

## Phase 8: Documentacao Artistica e Tecnica

**Purpose**: Create the required documentation for art intent, pipeline, and validation.

- [X] T051 [US1] Create art report `docs/art/codex-image-walk-lab-v1.md`; completion: document records objective, direction tested, identity expectations, prompt used, attempts, evaluation, failures/acertos, decision pending, and next prompt adjustments; dependencies: T032, T038.
- [X] T052 [US1] Create technical pipeline doc `docs/technical/codex-image-walk-pipeline-v1.md`; completion: document records `/image` pipeline, experimental-vs-official distinction, folder structure, naming, Pixel Art HD criteria, normalization guidance, and rejection rules; dependencies: T024, T034-T036.
- [X] T053 [US2] Create validation doc `docs/technical/walk-lab-validation-v1.md`; completion: document records visual checklist, partial-acceptance criteria, rejection criteria, and confirms no official walk or Player integration; dependencies: T039, T042-T050.
- [X] T054 [P] [US1] Record conceptual reference note in `docs/technical/codex-image-walk-pipeline-v1.md`; completion: doc references `https://github.com/chongdashu/ai-game-spritesheets` as conceptual inspiration only and states no third-party prompt/assets are copied literally; dependencies: T052.
- [X] T055 [P] [US3] Record safe-storage policy in `docs/technical/codex-image-walk-pipeline-v1.md`; completion: doc states `walk_lab` is active experimental lab and not `docs/archive`, active sprites, official rig, or Player runtime; dependencies: T052.
- [X] T056 [US2] Record preliminary decision in `docs/art/codex-image-walk-lab-v1.md`; completion: attempt is classified as `candidate_for_iteration`, `rejected`, `needs_new_prompt_round`, or `not_generated`; dependencies: T053.

---

## Phase 9: Validacao Visual

**Purpose**: Apply positive and rejection criteria to the generated or missing attempt.

- [X] T057 [US2] Apply positive identity checklist in `docs/technical/walk-lab-validation-v1.md`; completion: Antonio Rafael identity, PMGO reading, glasses, colete, mochila, palette, and scale stability are checked; dependencies: T053.
- [X] T058 [US2] Apply positive motion checklist in `docs/technical/walk-lab-validation-v1.md`; completion: leg movement, arm alternation, separated frames, and walk-vs-idle read are checked; dependencies: T053.
- [X] T059 [US2] Apply forbidden-content checklist in `docs/technical/walk-lab-validation-v1.md`; completion: text, labels, Polícia Civil, Sargento Silva, random names, scenery, highlighted weapon, and identity drift are checked; dependencies: T053.
- [X] T060 [US2] Apply rejection criteria in `docs/technical/walk-lab-validation-v1.md`; completion: idle-like output, duplicated frames, changed uniform, deformed body, merged frames, and no-walk read are checked; dependencies: T057-T059.
- [X] T061 [US2] Finalize visual classification in `docs/art/codex-image-walk-lab-v1.md`; completion: result is one of `candidate_for_iteration`, `rejected`, `needs_new_prompt_round`, or `not_generated` with rationale; dependencies: T056-T060.

---

## Phase 10: Validacao de Escopo Seguro

**Purpose**: Confirm the feature did not alter official runtime, official assets, or repository policy files.

- [X] T062 Run `git status --short --untracked-files=all` from repository root; completion: status is captured for final report without staging files; dependencies: T061.
- [X] T063 Run `git diff --name-only` and `git diff --stat` from repository root; completion: changed files are reviewed and limited to allowed feature implementation paths; dependencies: T062.
- [X] T064 Run `git diff --name-status -- ".gitignore"` from repository root; completion: `.gitignore` has no changes; dependencies: T063.
- [X] T065 Run `git diff --name-status -- "*.uid"` from repository root; completion: `.uid` files have no changes; dependencies: T063.
- [X] T066 Run `git diff --name-status -- "scenes/player/Player.tscn"` from repository root; completion: Player scene has no changes; dependencies: T063.
- [X] T067 Run `git diff --name-status -- "scenes/rig/AntonioRafaelRigLab.tscn"` from repository root; completion: existing rig lab scene has no changes; dependencies: T063.
- [X] T068 Run `git diff --name-status -- "scripts/player" "scripts/rig"` from repository root; completion: Player and rig scripts have no changes; dependencies: T063.
- [X] T069 Run `git diff --name-status -- "assets/characters/antonio_rafael/sprites/idle" "assets/characters/antonio_rafael/rig"` from repository root; completion: approved idles and official rig assets have no changes; dependencies: T063.
- [X] T070 Validate created implementation artifacts in `assets/characters/antonio_rafael/walk_lab/`, `docs/art/codex-image-walk-lab-v1.md`, `docs/technical/codex-image-walk-pipeline-v1.md`, and `docs/technical/walk-lab-validation-v1.md`; completion: required prompt, structure, docs, attempt/impossibility record, and preview condition are satisfied; dependencies: T062-T069.
- [X] T071 Record no official walk/no gameplay confirmation in `docs/technical/walk-lab-validation-v1.md`; completion: document states no walk cycle official, no official animation, no Player integration, and no gameplay; dependencies: T070.

---

## Phase 11: Gate Humano Final

**Purpose**: Present the experiment and stop for human validation before any commit, push, official promotion, or Player work.

- [X] T072 Prepare final gate report from `assets/characters/antonio_rafael/walk_lab/prompts/front_right_walk_codex_image_prompt_v1.md`, `assets/characters/antonio_rafael/walk_lab/source/`, `assets/characters/antonio_rafael/walk_lab/previews/`, `docs/art/codex-image-walk-lab-v1.md`, `docs/technical/codex-image-walk-pipeline-v1.md`, and `docs/technical/walk-lab-validation-v1.md`; completion: report includes prompt, structure, generated/impossible attempt, assets/previews, visual evaluation, classification, docs, protected-file audit, next-feature recommendation, no commit, and no push; dependencies: T071.

---

## Phase 12: Ajuste Pos-Gate Humano Da V1 E Rodada V2

**Purpose**: Apply the human correction that rejected the V1 classification and create a stricter V2 prompt/attempt without promoting anything to official runtime.

- [X] T073 Reclassify attempt V1 in `docs/art/codex-image-walk-lab-v1.md`, `docs/technical/walk-lab-validation-v1.md`, and `docs/technical/codex-image-walk-pipeline-v1.md`; completion: V1 is marked `needs_new_prompt_round`, not `candidate_for_iteration`; dependencies: T072.
- [X] T074 Record V1 limitations in `docs/art/codex-image-walk-lab-v1.md` and `docs/technical/walk-lab-validation-v1.md`; completion: docs mention weak walk mechanics, unclear contact/passing/opposite contact, insufficient arm/leg alternation, excessive beard, and chroma source; dependencies: T073.
- [X] T075 Create V2 prompt file `assets/characters/antonio_rafael/walk_lab/prompts/07_front_right_walk_codex_image_prompt_v2.md`; completion: prompt requests 8 frames, front_right, in-place walk, explicit frame-by-frame mechanics, no labels/text/scenery, no Policia Civil, no Sargento Silva, and no exaggerated full beard; dependencies: T074.
- [X] T076 Generate experimental V2 source at `assets/characters/antonio_rafael/walk_lab/source/front_right_walk_codex_image_attempt_v2.png`; completion: image exists or impossibility is documented; dependencies: T075.
- [X] T077 Create V2 preview at `assets/characters/antonio_rafael/walk_lab/previews/front_right_walk_codex_image_attempt_v2_preview.png`; completion: preview exists for human review only; dependencies: T076.
- [X] T078 Extract V2 frames into `assets/characters/antonio_rafael/walk_lab/frames/front_right_v2/frame_01.png` through `frame_08.png` only because the sheet allows clear separation; completion: eight `128x128` RGBA frames exist and remain experimental; dependencies: T076.
- [X] T079 Record comparative V1 x V2 evaluation in `docs/art/codex-image-walk-lab-v1.md` and `docs/technical/walk-lab-validation-v1.md`; completion: docs state V2 improves motion readability but remains pending human review; dependencies: T077, T078.
- [X] T080 Confirm scope after V2 update; completion: Player, rig scene, scripts, approved idles, official rig, `.gitignore`, and `.uid` remain unchanged; dependencies: T079.
- [X] T081 Prepare updated human gate report; completion: report includes corrected V1 classification, V2 prompt/source/preview/frames, comparative evaluation, recommendation, no commit, and no push; dependencies: T080.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1**: No dependencies; establishes context.
- **Phase 2**: Depends on Phase 1.
- **Phase 3**: Depends on official reference confirmation from Phase 2.
- **Phase 4**: Depends on `walk_lab/prompts/` and reference confirmation.
- **Phase 5**: Depends on master prompt completion.
- **Phase 6**: Depends on generation preparation.
- **Phase 7**: Depends on generated source or documented failure.
- **Phase 8**: Can begin after relevant docs and attempt data exist; final entries depend on Phase 7.
- **Phase 9**: Depends on validation document and attempt/limitation record.
- **Phase 10**: Depends on feature artifacts being complete.
- **Phase 11**: Depends on final validation.

### User Story Dependencies

- **US1 (P1)**: Requires Phase 1 and reference context; creates the prompt pipeline and can be validated independently by reading the prompt and pipeline docs.
- **US2 (P2)**: Requires US1 prompt; registers the generated attempt or impossibility and applies visual validation.
- **US3 (P3)**: Requires Phase 1 and reference context; creates/validates safe isolated storage and scope boundaries.

### MVP Scope

MVP is **US1 only**:

1. Read context.
2. Create `walk_lab/prompts/`.
3. Create `front_right_walk_codex_image_prompt_v1.md`.
4. Create pipeline documentation explaining experimental status and validation criteria.

This MVP is valuable even if image generation is unavailable because it creates the controlled prompt pipeline.

---

## Parallel Opportunities

- T003-T010 can run in parallel after T001.
- T011-T014 can run in parallel after Phase 1.
- T018-T022 can run in parallel after T017.
- T054 and T055 can run in parallel after T052.
- Scope checks T064-T069 can run in parallel after T063.
- If source material exists and frame extraction is safe, T046-T049 can run in parallel after T045.

## Parallel Example: Context Loading

```powershell
# These read-only tasks can be done together after T001:
T003 research.md
T004 data-model.md
T005 quickstart.md
T006 requirements.md
T007 articulated-walk-lab-prep-v1.md
T008 official-rig-imports-versioning-v1.md
T009 repository-hygiene.md
```

## Parallel Example: Safe Scope Audit

```powershell
# These checks can run independently after changed files are reviewed:
T064 .gitignore diff check
T065 *.uid diff check
T066 Player.tscn diff check
T067 AntonioRafaelRigLab.tscn diff check
T068 scripts diff check
T069 idle/rig official assets diff check
```

---

## Implementation Strategy

### MVP First

1. Complete Phases 1-2.
2. Complete Phase 3 for `walk_lab/prompts/` at minimum.
3. Complete Phase 4 prompt master.
4. Complete the pipeline documentation parts of Phase 8.
5. Stop and validate the prompt before image generation if desired.

### Full Feature Flow

1. Complete setup and references.
2. Create the isolated `walk_lab` tree.
3. Create the prompt master.
4. Attempt one `/image` generation for `front_right`.
5. Record generated source or honest impossibility.
6. Create preview/contact sheet only if valid material exists.
7. Apply visual validation.
8. Run scope audit.
9. Stop at human gate.

### Safety Rules

- Do not use `git add .`.
- Do not use `git add -A`.
- Do not use `git commit -am`.
- Do not use `git clean`.
- Do not stage by glob.
- Do not remove `.import` or `.uid`.
- Do not alter `.gitignore`.
- Do not alter Player, rig scene, scripts, approved idle sprites, or official rig assets.
- Do not integrate any generated material into Player.
- Do not declare any generated material as official walk cycle.
