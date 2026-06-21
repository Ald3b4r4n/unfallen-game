# Feature Specification: README oficial do repositorio Unfallen

**Feature Branch**: `009-readme-oficial-unfallen`  
**Created**: 2026-06-20  
**Status**: Draft  
**Input**: User description: "/speckit.specify Quero criar a feature README oficial do repositorio Unfallen para o projeto Unfallen."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Apresentar o projeto real no repositorio (Priority: P1)

Como visitante do repositorio, quero encontrar uma pagina inicial clara e especifica do Unfallen para entender rapidamente o que o projeto e, qual seu estado atual e como ele deve ser interpretado antes de qualquer push publico.

**Why this priority**: O README e a primeira leitura publica do repositorio. Se ele estiver ausente, antigo ou pertencente a outro projeto, o GitHub pode comunicar uma identidade errada do Unfallen.

**Independent Test**: Pode ser testado abrindo o README na raiz do repositorio e verificando se o conteudo descreve especificamente Unfallen, Godot 4, Pixel Art HD isometrica, SGT Antonio Rafael e o estado real de desenvolvimento.

**Acceptance Scenarios**:

1. **Given** uma pessoa abre o repositorio do Unfallen, **When** ela le o README, **Then** entende que o projeto e um jogo isometrico em Pixel Art HD em desenvolvimento, com foco atual no personagem SGT Antonio Rafael.
2. **Given** existe risco de README antigo ou generico, **When** o README oficial e avaliado, **Then** nenhum conteudo de outro projeto aparece como apresentacao do Unfallen.
3. **Given** o projeto ainda nao tem gameplay completo, **When** o README descreve a visao do jogo, **Then** ele diferencia estado atual de aspiracoes futuras.

---

### User Story 2 - Registrar o status honesto do pipeline atual (Priority: P2)

Como mantenedor do projeto, quero que o README registre os marcos locais ja validados e as limitacoes atuais para evitar que leitores confundam laboratorio tecnico, rig, Player e animacoes finais.

**Why this priority**: O projeto ja possui marcos de arte, rig e validacao visual. O README precisa refletir esses marcos sem declarar que existe walk cycle final, gameplay completo ou build jogavel publica.

**Independent Test**: Pode ser testado comparando o README com os marcos documentados e confirmando que a Base Idle Oficial V1, rig tecnico, separacao/refinamento/montagem/articulacao e pendencias de walk cycle aparecem com status correto.

**Acceptance Scenarios**:

1. **Given** a Base Idle Oficial V1 ja foi aprovada, **When** o README lista o status atual, **Then** essa base aparece como marco validado do personagem.
2. **Given** o rig tecnico e ferramenta de producao, **When** o README explica o laboratorio, **Then** fica claro que o rig nao substitui o Player runtime.
3. **Given** o walk cycle final ainda nao foi aprovado, **When** o README descreve animacao, **Then** ele informa que nenhuma animacao oficial final foi aprovada.

---

### User Story 3 - Orientar abertura, validacao e governanca do projeto (Priority: P3)

Como colaborador ou revisor, quero que o README diga como abrir o projeto, qual cena validar, quais regras seguir e quais cuidados tomar para contribuir sem quebrar o pipeline aprovado.

**Why this priority**: O repositorio precisa estar pronto para push futuro com uma orientacao basica de uso, seguranca e governanca. Isso reduz risco de alteracoes fora de escopo em Player, rig, assets ou cenas.

**Independent Test**: Pode ser testado seguindo as instrucoes do README para abrir o projeto, identificar a cena de laboratorio atual, reconhecer o Player oficial separado e revisar as regras de contribuicao/seguranca.

**Acceptance Scenarios**:

1. **Given** uma pessoa quer abrir o projeto, **When** ela segue o README, **Then** encontra orientacao para abrir o projeto no Godot 4.
2. **Given** uma pessoa quer validar o estado tecnico atual, **When** ela consulta o README, **Then** encontra a cena `res://scenes/rig/AntonioRafaelRigLab.tscn`.
3. **Given** uma pessoa quer contribuir, **When** ela le as regras do README, **Then** entende que features seguem Spec Kit/SDD, gates humanos e ausencia de push automatico sem aprovacao.

### Edge Cases

- Se `README.md` ja existir e pertencer a projeto antigo, ele deve ser auditado e substituido por conteudo novo do Unfallen, sem reaproveitamento.
- Se nao existir `README.md`, a feature deve criar um README oficial novo na raiz do repositorio.
- Se houver marcos tecnicos locais ainda nao publicados, o README deve descreve-los como estado local/documentado, sem sugerir release publica.
- Se houver visao futura de exploracao, sobrevivencia, narrativa, combate, investigacao, progressao ou ambiente hostil, o README deve apresentar isso como visao de projeto, nao como implementacao atual.
- Se nao houver arquivo de licenca confirmado, o README nao deve declarar uma licenca aberta nem dizer que assets sao livres.
- Se existirem arquivos, cenas ou assets pendentes fora do escopo, a feature de README nao deve limpa-los, move-los ou altera-los.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A feature MUST create or replace the repository root README with a new official README specific to Unfallen.
- **FR-002**: The README MUST be written primarily in Brazilian Portuguese, with technical terms where useful.
- **FR-003**: The README MUST not reuse or preserve content from an unrelated previous project README.
- **FR-004**: The README MUST identify the project as `Unfallen`.
- **FR-005**: The README MUST state that Unfallen is a game project in development.
- **FR-006**: The README MUST mention Godot 4 as the current engine context.
- **FR-007**: The README MUST describe the visual direction as isometric Pixel Art HD.
- **FR-008**: The README MUST identify SGT Antonio Rafael as the current main character focus.
- **FR-009**: The README MUST explain that the current phase is character-first pipeline, technical rig, visual validation and laboratory articulation.
- **FR-010**: The README MUST describe the game vision as an isometric survival/zombie-collapse project without implying completed systems.
- **FR-011**: The README MUST clearly distinguish current validated status from future project vision.
- **FR-012**: The README MUST list current validated milestones, including Base Idle Oficial V1, validated main character, technical rig, separated rig parts, refined parts, partial visual validation and partial articulation test.
- **FR-013**: The README MUST state that the final walk cycle has not been created or approved.
- **FR-014**: The README MUST state that no final official animation has been approved.
- **FR-015**: The README MUST state that the technical rig is not integrated as the Player runtime.
- **FR-016**: The README MUST cite `res://scenes/rig/AntonioRafaelRigLab.tscn` as the current technical validation scene.
- **FR-017**: The README MUST cite `res://scenes/player/Player.tscn` as the separate official Player scene.
- **FR-018**: The README MUST explain that the rig laboratory is a production/animation tool and does not replace the Player.
- **FR-019**: The README MUST include sections covering project title, short description, project vision, current status, completed milestones, character pipeline, project structure, opening instructions, current validation scene, development conventions, contribution/security rules, short roadmap, asset/license notes and development status.
- **FR-020**: The README MUST include security and governance rules covering Spec Kit/SDD flow, specification-plan-tasks-gate discipline, no automatic push without approval, no secrets or `.env` files, no unlicensed third-party assets, and no Player/rig changes outside approved scope.
- **FR-021**: The README MUST not claim the game is complete, playable as a final release, publicly released, or ready for production release.
- **FR-022**: The README MUST not claim completed gameplay systems such as full combat, inventory, open world, save/load, final HUD or final walk cycle.
- **FR-023**: The README MUST not claim open licensing or free asset usage without confirmed license files.
- **FR-024**: The feature MUST not alter code, scenes, sprites, Player files, scripts, gameplay or assets.
- **FR-025**: The final delivery MUST report the README path, section summary, confirmation that old README content was not reused, scope confirmations, recommendation and no commit/push status.

### Key Entities

- **Official Repository README**: The root repository introduction that communicates project identity, current status, validation entry points and governance rules.
- **Project Status**: The honest summary of what is validated, what is partial and what remains future vision.
- **Validated Milestone**: A documented local achievement such as Base Idle Oficial V1, Rig Assembly V1, Rig Refinement V1 or Rig Articulation Test V1.
- **Character Pipeline**: The current character-first workflow for SGT Antonio Rafael, keeping rig laboratory and Player runtime separate.
- **Validation Scene**: The current laboratory scene used for technical rig review.
- **Governance Rule**: A project rule that prevents unsafe changes, unlicensed assets, secrets, automatic push or out-of-scope Player/rig edits.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A reviewer can identify the repository as Unfallen, not another project, within 30 seconds of opening the README.
- **SC-002**: The README contains all 14 mandatory section categories requested for the project.
- **SC-003**: 100% of current required status statements are present: Base Idle Oficial V1 approved, rig created, parts separated/refined, visual validation partial, articulation test partial, no final walk cycle, no final official animation and no rig-as-Player integration.
- **SC-004**: 0 claims state or imply that gameplay is complete, a public release exists, final combat/inventory/open-world systems exist, or final walk cycle is approved.
- **SC-005**: The README includes both required scene references: `res://scenes/rig/AntonioRafaelRigLab.tscn` and `res://scenes/player/Player.tscn`.
- **SC-006**: A new contributor can find how to open the project and what scene to validate in under 2 minutes using only the README.
- **SC-007**: A reviewer can verify that the README includes at least 5 governance/security rules relevant to the repository before push.
- **SC-008**: The feature completes with zero code, scene, sprite, Player, script, gameplay or asset modifications.
- **SC-009**: The final report confirms no commit and no push were performed during the README feature execution.

## Assumptions

- The README is intended for the repository root as `README.md`.
- The current README is absent or untrusted; any previous content should be audited and replaced rather than reused.
- The feature specification may record required README behavior, but actual README authoring occurs during implementation.
- The project remains pre-release and does not have a confirmed public playable build unless future files prove otherwise.
- License terms for the repository and assets are not assumed unless a license file or explicit decision exists.
- Spec Kit/SDD remains the project governance model for features, plans, tasks and human gates.
- The README feature is documentation-only and should not clean or normalize unrelated pending worktree files.
