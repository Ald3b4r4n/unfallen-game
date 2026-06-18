# Tasks: Protagonist Base Setup (Antônio Rafael)

**Input**: Design documents from `/specs/002-antonio-rafael-base/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Tests**: Tests are OPTIONAL - only include them if explicitly requested in the feature specification. None requested.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Paths assume res:// at repository root

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project folders layout under res:// per implementation plan
- [ ] T002 Create empty scripts player_controller.gd, player_animation_controller.gd, isometric_movement.gd, and camera_follow.gd
- [ ] T003 Configure input actions move_up, move_down, move_left, move_right in project.godot

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T004 Implement 2:1 isometric vector translation math in scripts/player/isometric_movement.gd
- [ ] T005 Implement target LERP follow math in scripts/camera/camera_follow.gd

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Visual do Protagonista Antônio Rafael (Priority: P1) 🎯 MVP

**Goal**: Establish the physical representation and visual presence of Antônio Rafael on screen in idle state.

**Independent Test**: Load the character in the scene and see his idle animation play correctly.

### Implementation for User Story 1

- [ ] T006 [US1] Create character visual description and pipeline documentation in docs/art/antonio-rafael.md and docs/technical/character-pipeline.md
- [ ] T007 [P] [US1] Import protagonist spritesheets under assets/characters/antonio_rafael/sprites/ and set to Nearest/Lossless
- [ ] T008 [US1] Create Player.tscn scene containing CharacterBody2D, Sprite2D, CollisionShape2D, and AnimationPlayer
- [ ] T009 [US1] Configure 4-direction idle animations and state checks in player_animation_controller.gd

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Movimentação Isométrica e Animação de Caminhada (Priority: P1)

**Goal**: Enable control of the protagonist along isometric vectors, transitioning smoothly between walk and idle animations.

**Independent Test**: Move the character using WASD/arrows and verify transition between walk/idle in 4 directions.

### Implementation for User Story 2

- [ ] T010 [US2] Implement player input processing and movement execution in scripts/player/player_controller.gd
- [ ] T011 [US2] Implement 4-direction walk animations and transition logic in scripts/player/player_animation_controller.gd

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Câmera e Colisão com Obstáculos (Priority: P1)

**Goal**: Implement the follow camera rig and solid boundary collisions in a test level.

**Independent Test**: Verify camera follows character smoothly and character cannot pass through solid debugging blocks.

### Implementation for User Story 3

- [ ] T012 [US3] Create CameraRig.tscn containing Camera2D with camera_follow.gd script attached
- [ ] T013 [US3] Create static debugging obstacle blocks in scenes/test/CharacterTestScene.tscn
- [ ] T014 [US3] Assemble CharacterTestScene.tscn with player instance, camera follow target, and static obstacles

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T015 Verify snap 2D transform rendering settings in project.godot to avoid sub-pixel jitter
- [ ] T016 Verify diagonal movement speed normalisation during gameplay in CharacterTestScene.tscn
- [ ] T017 Document assets source tracking in docs/art/asset-sources.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User Story 1 (P1) must start before User Story 2 (P2)
  - User Story 2 (P2) must start before User Story 3 (P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (US1)**: Can start after Foundational (Phase 2)
- **User Story 2 (US2)**: Depends on US1 setup (needs Player.tscn animation controller)
- **User Story 3 (US3)**: Depends on US2 setup (needs player movement scripts complete)

---

## Parallel Example: User Story 1

```bash
# Import assets and write pipeline docs in parallel:
Task: "Create character visual description and pipeline documentation in docs/art/antonio-rafael.md and docs/technical/character-pipeline.md"
Task: "Import protagonist spritesheets under assets/characters/antonio_rafael/sprites/ and set to Nearest/Lossless"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently (MVP!)
3. Add User Story 2 → Test movement and walk animations
4. Add User Story 3 → Test camera follow and solid blocks collision
