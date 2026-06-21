# Tasks: Godot Import UID Policy V1

**Input**: Design artifacts from `specs/012-godot-import-uid-policy-v1/`
**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, `quickstart.md`
**Scope**: Audit and document policy for Godot `.import` and `.uid` files only

**Strict Prohibitions**: Do not implement cleanup, do not alter `.gitignore`, do not move/delete `.import` or `.uid`, do not stage files, do not commit, do not push, do not alter Player, rig scene, scripts, idle sprites, or official rig assets.

## Phase 1: Preparacao e leitura da feature

- [X] T001 Ler a constituicao do projeto e a regra atual do AGENTS
  - Description: Confirm the active Spec Kit context and the current plan pointer before any audit work.
  - Files/Folders: `AGENTS.md`, `.specify/memory/constitution.md`
  - Completion Criterion: Current feature context is understood and no implementation action has been taken.
  - Dependencies: None

- [X] T002 Ler a especificacao da feature 012
  - Description: Review the approved scope, forbidden actions, sensitive files, and expected outcomes for Godot Import UID Policy V1.
  - Files/Folders: `specs/012-godot-import-uid-policy-v1/spec.md`
  - Completion Criterion: Feature is confirmed as policy/audit only, not cleanup or versioning.
  - Dependencies: T001

- [X] T003 Ler o plano tecnico da feature 012
  - Description: Review the technical strategy, policy decisions, data model, and validation plan.
  - Files/Folders: `specs/012-godot-import-uid-policy-v1/plan.md`
  - Completion Criterion: Planned artifact set and scope boundaries are confirmed.
  - Dependencies: T001

- [X] T004 [P] Ler o research da feature 012
  - Description: Extract the rationale for treating `.import` and `.uid` separately and avoiding mass versioning.
  - Files/Folders: `specs/012-godot-import-uid-policy-v1/research.md`
  - Completion Criterion: Research decisions are available for the implementation audit.
  - Dependencies: T002

- [X] T005 [P] Ler o data model da feature 012
  - Description: Confirm the entities and fields required for classifying imports, UIDs, policy groups, and recommendations.
  - Files/Folders: `specs/012-godot-import-uid-policy-v1/data-model.md`
  - Completion Criterion: Required classification fields are known before inventory work.
  - Dependencies: T002

- [X] T006 [P] Ler o quickstart da feature 012
  - Description: Review the dry-run validation flow and expected commands for policy-only implementation.
  - Files/Folders: `specs/012-godot-import-uid-policy-v1/quickstart.md`
  - Completion Criterion: Read-only audit steps and final validation expectations are clear.
  - Dependencies: T002

- [X] T007 Confirmar proibicoes e arquivos sensiveis
  - Description: Explicitly confirm that `.gitignore`, Player, rig scene, scripts, idle sprites, official rig assets, `.import`, and `.uid` must not be changed in this stage.
  - Files/Folders: `.gitignore`, `scenes/player/Player.tscn`, `scenes/rig/AntonioRafaelRigLab.tscn`, `scripts/player/`, `scripts/rig/`, `assets/characters/antonio_rafael/sprites/idle/`, `assets/characters/antonio_rafael/rig/`
  - Completion Criterion: Sensitive paths are listed in the working notes for validation and no forbidden edits are made.
  - Dependencies: T002, T003

## Phase 2: Auditoria Git somente leitura

- [X] T008 Executar status Git completo somente leitura
  - Description: Run `git status --short --untracked-files=all` to capture tracked changes and all untracked files.
  - Files/Folders: repository root
  - Completion Criterion: Status output is captured for documentation without staging or modifying files.
  - Dependencies: T007

- [X] T009 Listar untracked com Git somente leitura
  - Description: Run `git ls-files --others --exclude-standard` to get the raw untracked inventory source.
  - Files/Folders: repository root
  - Completion Criterion: Full untracked list is available for classification.
  - Dependencies: T007

- [X] T010 Verificar diffs rastreados sem alterar estado
  - Description: Run `git diff --name-only` and `git diff --stat` to confirm the tracked diff scope before documentation.
  - Files/Folders: repository root
  - Completion Criterion: Tracked diff scope is known and contains no forbidden modifications.
  - Dependencies: T008

- [X] T011 Listar commits recentes para contexto
  - Description: Run `git log --oneline -10` to record the current history context after feature 011.
  - Files/Folders: repository root
  - Completion Criterion: Recent commits are available for audit documentation.
  - Dependencies: T008

- [X] T012 Registrar comandos proibidos como nao utilizados
  - Description: Confirm that `git add .`, `git add -A`, `git commit -am`, `git clean`, destructive deletes, and file moves are not part of this implementation.
  - Files/Folders: repository root
  - Completion Criterion: Audit notes explicitly state the forbidden commands were not used.
  - Dependencies: T008, T009

## Phase 3: Auditoria dos arquivos `.import`

- [X] T013 Filtrar arquivos `.import` nao rastreados
  - Description: From the raw untracked list, identify every path ending in `.import`.
  - Files/Folders: untracked inventory from `git ls-files --others --exclude-standard`
  - Completion Criterion: Total count of untracked `.import` files is recorded.
  - Dependencies: T009

- [X] T014 Listar exemplos representativos de `.import`
  - Description: Record sample paths from each detected `.import` origin area without moving or staging them.
  - Files/Folders: untracked `.import` paths
  - Completion Criterion: Examples are available for documentation and human review.
  - Dependencies: T013

- [X] T015 Associar `.import` ao arquivo de origem
  - Description: For each `.import`, infer the likely source asset by removing the `.import` suffix and checking whether the source asset exists.
  - Files/Folders: untracked `.import` paths and corresponding source asset paths
  - Completion Criterion: Each `.import` is marked as source_exists, source_missing, or source_unknown.
  - Dependencies: T013

- [X] T016 Classificar `.import` de assets oficiais
  - Description: Identify `.import` files that appear related to approved idle sprites, official rig assets, or currently validated project assets.
  - Files/Folders: `assets/characters/antonio_rafael/sprites/idle/`, `assets/characters/antonio_rafael/rig/`, untracked `.import` paths
  - Completion Criterion: Candidate `official_asset_imports` are identified for human review, with no files moved or staged.
  - Dependencies: T015

- [X] T017 Classificar `.import` de prototipos e arquivo historico
  - Description: Identify `.import` files related to rejected walk candidates, old prototypes, archived previews, or docs archive assets.
  - Files/Folders: `docs/archive/walk-prototypes-v1/`, untracked `.import` paths
  - Completion Criterion: Candidate `prototype_imports` and `archive_imports` are identified.
  - Dependencies: T015

- [X] T018 Classificar `.import` stale e unknown
  - Description: Separate `.import` files whose source assets are missing or unclear.
  - Files/Folders: untracked `.import` paths
  - Completion Criterion: Candidate `stale_imports` and `unknown_imports` are identified.
  - Dependencies: T015

## Phase 4: Auditoria dos arquivos `.uid`

- [X] T019 Filtrar arquivos `.uid` nao rastreados
  - Description: From the raw untracked list, identify every path ending in `.uid`.
  - Files/Folders: untracked inventory from `git ls-files --others --exclude-standard`
  - Completion Criterion: Total count of untracked `.uid` files is recorded.
  - Dependencies: T009

- [X] T020 Listar exemplos representativos de `.uid`
  - Description: Record sample paths from each detected `.uid` origin area without moving or staging them.
  - Files/Folders: untracked `.uid` paths
  - Completion Criterion: Examples are available for documentation and human review.
  - Dependencies: T019

- [X] T021 Associar `.uid` ao recurso de origem
  - Description: Infer the corresponding Godot resource for each `.uid` and check whether that resource exists.
  - Files/Folders: untracked `.uid` paths and corresponding resource paths
  - Completion Criterion: Each `.uid` is marked as source_exists, source_missing, or source_unknown.
  - Dependencies: T019

- [X] T022 Classificar `.uid` de arquivos oficiais
  - Description: Identify `.uid` files related to official scenes, scripts, approved sprites, or official rig assets.
  - Files/Folders: `scenes/`, `scripts/`, `assets/characters/antonio_rafael/sprites/idle/`, `assets/characters/antonio_rafael/rig/`, untracked `.uid` paths
  - Completion Criterion: Candidate `official_uid_files` are identified for human review, with no files moved or staged.
  - Dependencies: T021

- [X] T023 Classificar `.uid` de prototipos, stale e unknown
  - Description: Identify `.uid` files related to prototypes, missing resources, or unclear origins.
  - Files/Folders: untracked `.uid` paths
  - Completion Criterion: Candidate `prototype_uid_files`, `stale_uid_files`, and `unknown_uid_files` are identified.
  - Dependencies: T021

## Phase 5: Verificacao de arquivos ja rastreados

- [X] T024 Verificar `.import` ja rastreados
  - Description: Run a read-only tracked file query for existing tracked `.import` files.
  - Files/Folders: repository root
  - Completion Criterion: Current tracked `.import` policy evidence is recorded.
  - Dependencies: T008

- [X] T025 Verificar `.uid` ja rastreados
  - Description: Run a read-only tracked file query for existing tracked `.uid` files.
  - Files/Folders: repository root
  - Completion Criterion: Current tracked `.uid` policy evidence is recorded.
  - Dependencies: T008

- [X] T026 Inspecionar `.gitignore` sem editar
  - Description: Read `.gitignore` only to see whether `.import` or `.uid` rules already exist.
  - Files/Folders: `.gitignore`
  - Completion Criterion: Existing ignore policy is documented and `.gitignore` remains unchanged.
  - Dependencies: T024, T025

- [X] T027 Inferir politica atual do repositorio
  - Description: Compare tracked and untracked evidence to infer the current practical policy for Godot imports and UIDs.
  - Files/Folders: tracked `.import` query, tracked `.uid` query, `.gitignore`, untracked inventory
  - Completion Criterion: Current policy is summarized as explicit, implicit, mixed, or undefined.
  - Dependencies: T024, T025, T026

## Phase 6: Classificacao por origem e risco

- [X] T028 Classificar todos os `.import` por grupo obrigatorio
  - Description: Assign each untracked `.import` to `official_asset_imports`, `prototype_imports`, `archive_imports`, `stale_imports`, or `unknown_imports`.
  - Files/Folders: untracked `.import` inventory
  - Completion Criterion: Every audited `.import` is grouped or explicitly marked unresolved.
  - Dependencies: T016, T017, T018

- [X] T029 Classificar todos os `.uid` por grupo obrigatorio
  - Description: Assign each untracked `.uid` to `official_uid_files`, `prototype_uid_files`, `stale_uid_files`, or `unknown_uid_files`.
  - Files/Folders: untracked `.uid` inventory
  - Completion Criterion: Every audited `.uid` is grouped or explicitly marked unresolved.
  - Dependencies: T022, T023

- [X] T030 Atribuir risco para grupos de `.import`
  - Description: Assign `low`, `medium`, `high`, or `critical` risk to each `.import` group based on official asset impact, stale source risk, and prototype confusion.
  - Files/Folders: classified `.import` groups
  - Completion Criterion: Each `.import` group has a documented risk level and rationale.
  - Dependencies: T028

- [X] T031 Atribuir risco para grupos de `.uid`
  - Description: Assign `low`, `medium`, `high`, or `critical` risk to each `.uid` group based on Godot identity stability and official resource impact.
  - Files/Folders: classified `.uid` groups
  - Completion Criterion: Each `.uid` group has a documented risk level and rationale.
  - Dependencies: T029

- [X] T032 Atribuir recomendacao para cada grupo
  - Description: Assign one of `version_later`, `ignore_later`, `keep_local`, `remove_later`, `needs_human_review`, or `separate_feature` to every group.
  - Files/Folders: classified `.import` and `.uid` groups
  - Completion Criterion: Every group has a recommendation and no recommendation is executed.
  - Dependencies: T030, T031

## Phase 7: Definicao da politica recomendada

- [X] T033 Formular politica recomendada para `.import`
  - Description: Draft the rule for when `.import` files should be versioned, ignored, kept local, reviewed, or removed later.
  - Files/Folders: future `docs/technical/godot-import-uid-policy-v1.md`
  - Completion Criterion: Recommended `.import` policy is ready for documentation and human review.
  - Dependencies: T032

- [X] T034 Formular politica recomendada para `.uid`
  - Description: Draft the rule for when `.uid` files should be versioned, kept local, reviewed, or removed later.
  - Files/Folders: future `docs/technical/godot-import-uid-policy-v1.md`
  - Completion Criterion: Recommended `.uid` policy is ready for documentation and human review.
  - Dependencies: T032

- [X] T035 Definir recomendacao futura para `.gitignore`
  - Description: Propose whether `.gitignore` should be changed in a future feature, without editing it now.
  - Files/Folders: `.gitignore`, future `docs/technical/godot-import-uid-policy-v1.md`
  - Completion Criterion: `.gitignore` recommendation is documented as pending human approval.
  - Dependencies: T033, T034

- [X] T036 Definir politica de commits futuros
  - Description: Specify that future commits must use explicit paths and separate official imports, UID decisions, prototype cleanup, and ignore-policy changes.
  - Files/Folders: future `docs/technical/godot-import-uid-policy-v1.md`, `docs/project/repository-hygiene.md`
  - Completion Criterion: Commit-scope policy is documented for human review.
  - Dependencies: T033, T034

## Phase 8: Documentacao tecnica

- [X] T037 Criar documento tecnico da politica
  - Description: Create `docs/technical/godot-import-uid-policy-v1.md` with audit results, classifications, risks, recommendations, and pending decisions.
  - Files/Folders: `docs/technical/godot-import-uid-policy-v1.md`
  - Completion Criterion: Policy document exists and states that no cleanup, staging, commit, or push was executed.
  - Dependencies: T033, T034, T035, T036

- [X] T038 Registrar inventario resumido no documento tecnico
  - Description: Add counts and representative paths for every `.import` and `.uid` group without listing unrelated non-target untracked files in full.
  - Files/Folders: `docs/technical/godot-import-uid-policy-v1.md`
  - Completion Criterion: Document contains group counts, examples, risk, recommendation, and pending decision per group.
  - Dependencies: T037

- [X] T039 Registrar arquivos sensiveis e limites de seguranca
  - Description: Document that Player, rig scene, scripts, idle sprites, official rig assets, and `.gitignore` were not changed.
  - Files/Folders: `docs/technical/godot-import-uid-policy-v1.md`
  - Completion Criterion: Sensitive-path audit is explicitly recorded.
  - Dependencies: T037

## Phase 9: Atualizacao de documentos correlatos

- [X] T040 Atualizar politica de higiene do repositorio
  - Description: Update repository hygiene notes with the new Godot `.import` and `.uid` policy, preserving the existing warning against mass staging.
  - Files/Folders: `docs/project/repository-hygiene.md`
  - Completion Criterion: Hygiene document references the policy without changing `.gitignore`.
  - Dependencies: T037

- [X] T041 Atualizar auditoria de untracked da feature 010
  - Description: Record that `.import` and `.uid` were reviewed by feature 012, while execution decisions remain pending.
  - Files/Folders: `docs/technical/untracked-cleanup-audit-v1.md`
  - Completion Criterion: Audit document reflects feature 012 policy status without claiming cleanup was performed.
  - Dependencies: T037

- [X] T042 Atualizar inventario de untracked da feature 010
  - Description: Update inventory notes so `.import` and `.uid` groups point to the feature 012 policy document and remain pending approval.
  - Files/Folders: `docs/technical/untracked-cleanup-inventory-v1.md`
  - Completion Criterion: Inventory document links `.import` and `.uid` decisions to feature 012.
  - Dependencies: T037

- [X] T043 Atualizar tasks da feature 012
  - Description: Mark completed implementation tasks and leave the human gate task pending until review.
  - Files/Folders: `specs/012-godot-import-uid-policy-v1/tasks.md`
  - Completion Criterion: Task status reflects actual implementation progress.
  - Dependencies: T037, T040, T041, T042

## Phase 10: Validacao de escopo seguro

- [X] T044 Validar que nenhum arquivo foi movido ou apagado
  - Description: Compare status and expected paths to confirm `.import`, `.uid`, assets, scripts, scenes, and docs outside scope were not moved or deleted.
  - Files/Folders: repository root
  - Completion Criterion: Validation result states no files were moved or permanently deleted.
  - Dependencies: T040, T041, T042, T043

- [X] T045 Validar que nada foi stageado em massa
  - Description: Confirm no `git add .`, `git add -A`, or bulk staging was used and that no commit was created.
  - Files/Folders: repository root
  - Completion Criterion: Validation result states no mass staging and no commit occurred.
  - Dependencies: T044

- [X] T046 Validar caminhos sensiveis sem diff proibido
  - Description: Confirm no diff exists for Player, rig scene, scripts, idle sprites, official rig assets, or `.gitignore`.
  - Files/Folders: `.gitignore`, `scenes/player/Player.tscn`, `scenes/rig/AntonioRafaelRigLab.tscn`, `scripts/player/`, `scripts/rig/`, `assets/characters/antonio_rafael/sprites/idle/`, `assets/characters/antonio_rafael/rig/`
  - Completion Criterion: Sensitive-path validation passes or failures are reported without modification.
  - Dependencies: T044

- [X] T047 Validar que nenhuma feature de gameplay foi criada
  - Description: Confirm no walk cycle, animation officialization, Player integration, scene change, gameplay, script, or asset officialization happened.
  - Files/Folders: repository root
  - Completion Criterion: Validation result states no gameplay/animação/walk cycle work was created.
  - Dependencies: T046

- [X] T048 Validar documentos finais da feature 012
  - Description: Confirm the policy document and correlated updates exist, contain the required confirmations, and do not falsely claim cleanup execution.
  - Files/Folders: `docs/technical/godot-import-uid-policy-v1.md`, `docs/project/repository-hygiene.md`, `docs/technical/untracked-cleanup-audit-v1.md`, `docs/technical/untracked-cleanup-inventory-v1.md`, `specs/012-godot-import-uid-policy-v1/tasks.md`
  - Completion Criterion: Documentation validation passes or gaps are reported for human review.
  - Dependencies: T040, T041, T042, T043

## Phase 11: Gate humano final

- [ ] T049 Gate humano da Godot Import UID Policy V1
  - Description: Present the policy result for human review before any `.gitignore` change, `.import` or `.uid` cleanup, staging, commit, or push.
  - Files/Folders: `docs/technical/godot-import-uid-policy-v1.md`, `docs/project/repository-hygiene.md`, `docs/technical/untracked-cleanup-audit-v1.md`, `docs/technical/untracked-cleanup-inventory-v1.md`
  - Completion Criterion: Report includes total `.import`, total `.uid`, classified groups, risks, recommendations, files that should stay local, files that may be versioned later, files that may be removed later, files needing review, confirmation no files were moved/deleted/staged/committed/pushed, and recommendation for next feature.
  - Dependencies: T044, T045, T046, T047, T048
