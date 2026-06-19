# Feature Specification: Separacao de Partes do Rig Tecnico 2D do SGT Antonio Rafael

**Feature Branch**: `005-rig-parts-separation`  
**Created**: 2026-06-19  
**Status**: Draft  
**Input**: User description: "/speckit.specify Quero criar a feature Separacao de Partes do Rig Tecnico 2D do SGT Antonio Rafael para o projeto Unfallen."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Separar Partes Visuais Principais (Priority: P1)

Como diretor do personagem, quero que o SGT Antonio Rafael seja separado em partes visuais controlaveis para que futuras animacoes possam usar uma base fiel ao personagem aprovado.

**Why this priority**: Sem as partes principais separadas, a equipe continua presa a sprites completos e tende a repetir walk cycles estaticos ou descaracterizados.

**Independent Test**: Pode ser testado verificando o conjunto de partes isoladas, com transparencia, nomes claros e correspondencia visual com a Base Idle Oficial V1.

**Acceptance Scenarios**:

1. **Given** a Base Idle Oficial V1 aprovada, **When** a pessoa revisora abre o conjunto de partes separadas, **Then** encontra cabeca, pescoco, tronco, colete, mochila, bracos, antebracos, maos, quadril, coxas, pernas e botas como elementos individuais.
2. **Given** qualquer parte separada do personagem, **When** ela e vista isoladamente, **Then** o fundo e transparente e nao ha labels, cenarios, fundo verde ou texto externo dentro da propria parte.
3. **Given** as partes separadas em conjunto, **When** elas sao comparadas com a Base Idle Oficial V1, **Then** a identidade visual do SGT Antonio Rafael permanece reconhecivel.

---

### User Story 2 - Validar Fidelidade Visual da Base Oficial (Priority: P2)

Como aprovador visual, quero comparar as partes separadas com a Base Idle Oficial V1 para garantir que rosto, uniforme, colete, mochila e detalhes PMGO nao foram recriados como outro personagem.

**Why this priority**: A feature so tem valor se as partes preservarem a identidade aprovada; partes tecnicamente separadas mas descaracterizadas nao servem para o rig.

**Independent Test**: Pode ser testado por uma revisao visual lado a lado entre as partes recompostas e a Base Idle Oficial V1.

**Acceptance Scenarios**:

1. **Given** as partes separadas, **When** elas sao recompostas em uma pose neutra de referencia, **Then** o personagem resultante mantem rosto, oculos, cabelo, pele, uniforme, colete, mochila, paleta e proporcao da Base Idle Oficial V1.
2. **Given** partes que contenham manga, ombro ou costas visiveis, **When** a revisao visual procura detalhes de identidade, **Then** patch da bandeira de Goias e divisa de sargento aparecem quando a orientacao original permitir.
3. **Given** qualquer parte separada, **When** ela e revisada, **Then** nao ha Policia Civil, Sargento Silva, nomes aleatorios ou identidade visual fora da PMGO/sobrevivente aprovada.

---

### User Story 3 - Preparar Uso em Laboratorio de Rig (Priority: P3)

Como animador da feature, quero que as partes separadas possam ser montadas no laboratorio de rig tecnico para futura animacao sem alterar o Player oficial.

**Why this priority**: A separacao precisa ser util para animacao futura, mas o projeto exige que o Player oficial continue intacto ate nova aprovacao humana.

**Independent Test**: Pode ser testado montando ou simulando a montagem das partes no laboratorio tecnico e confirmando que nenhuma mudanca de gameplay ou Player oficial e necessaria para revisar as partes.

**Acceptance Scenarios**:

1. **Given** o conjunto de partes separado, **When** ele e usado em uma montagem tecnica de referencia, **Then** as partes possuem pontos de encaixe visual suficientes para cabeca, tronco, bracos, pernas, botas e mochila.
2. **Given** o Player oficial existente, **When** a feature e concluida, **Then** o Player permanece visualmente e funcionalmente intacto, sem receber nova animacao ou substituicao por rig.
3. **Given** a documentacao da feature, **When** uma pessoa revisora le as instrucoes, **Then** entende que as partes sao ferramentas de producao e que qualquer animacao futura exige novo gate humano.

### Edge Cases

- Se uma parte for pequena demais para conter um detalhe visual completo, ela deve preservar a leitura visual possivel sem inventar texto ou marca externa.
- Se uma parte ficar parcialmente oculta na Base Idle Oficial V1, ela deve ser separada apenas ate o limite em que a fonte aprovada permite fidelidade visual.
- Se uma parte separada gerar buracos visuais ou sobreposicao ruim quando recomposta, a feature deve registrar a limitacao para revisao humana.
- Se uma parte depender de outra para leitura correta, a documentacao deve indicar essa dependencia visual.
- Se a separacao comprometer a identidade do personagem, a parte deve ser marcada como pendente de revisao e nao usada como base aprovada para animacao.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The feature MUST produce separate visual parts for head, neck, torso, vest, backpack, left arm, right arm, left forearm, right forearm, left hand, right hand, hips, left thigh, right thigh, left leg, right leg, left boot, and right boot.
- **FR-002**: Each separated part MUST have a transparent background and must not include external labels, direction text, scenery, opaque green background, or unrelated visual elements.
- **FR-003**: Each separated part MUST preserve the visual identity of the Base Idle Oficial V1 wherever that part is visible in the approved reference.
- **FR-004**: The separated set MUST preserve the character's face, glasses, short dark hair, skin tone, gray/charcoal/black uniform palette, tactical vest, backpack, realistic athletic proportion, and PMGO/survivor identity.
- **FR-005**: Parts containing relevant visible uniform details MUST preserve the Goias flag patch and sergeant chevron when those details are present in the approved reference.
- **FR-006**: The feature MUST avoid creating a new character identity, generic body, exaggerated body type, civilian police identity, Sargento Silva identity, zombie elements, gore, weapons in focus, or combat pose.
- **FR-007**: The separated parts MUST be suitable for future rig assembly, with clear visual boundaries and enough overlap or edge tolerance to avoid obvious gaps during later posing.
- **FR-008**: The feature MUST include a human-reviewable recomposition or preview that shows the separated parts can visually return to a coherent SGT Antonio Rafael reference pose.
- **FR-009**: The feature MUST document how the parts should be used in the rig production workflow and state that they are not a final runtime replacement for the Player.
- **FR-010**: The feature MUST leave the official Player intact, with no gameplay, movement, camera, collision, inventory, HUD, combat, zombie, or final walk cycle changes.
- **FR-011**: The feature MUST stop for human validation before any animation, walk cycle integration, Player replacement, commit recommendation, or next gameplay system.

### Key Entities

- **Base Idle Oficial V1**: Approved visual reference for SGT Antonio Rafael, including identity, scale, palette, proportions, uniform, vest, backpack, patch, chevron, glasses, hair, and skin tone.
- **Rig Part**: One isolated visual component of the character, such as head, torso, backpack, arm, hand, thigh, leg, or boot, prepared for later assembly.
- **Rig Parts Set**: The complete group of separated parts required for the initial technical rig preparation.
- **Recomposition Preview**: A human-reviewable visual check that demonstrates whether the separated parts can form a coherent reference pose without losing identity.
- **Human Validation Gate**: Required approval point before the parts can be used for animation, Player integration, or official asset status.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of the 18 required part categories are present and identifiable during review.
- **SC-002**: 100% of separated parts have transparent backgrounds and no visible labels, text, opaque green background, scenery, zombie elements, gore, or unrelated objects.
- **SC-003**: In human review, the recomposed reference pose is recognized as the approved SGT Antonio Rafael identity without needing external explanation.
- **SC-004**: At least 90% of visually checkable identity traits from the Base Idle Oficial V1 are preserved across the separated set.
- **SC-005**: The official Player remains unchanged in behavior and is not replaced by the rig or any new animation during this feature.
- **SC-006**: Documentation allows a reviewer to understand the purpose, limitations, and next validation step for the separated parts in under 5 minutes.

## Assumptions

- The Base Idle Oficial V1 remains the authoritative visual reference for this feature.
- This feature prepares parts for future animation but does not create a walk cycle, run cycle, attack, damage, death, or any gameplay behavior.
- The initial part set may prioritize the most reliable approved idle reference and document limitations where hidden body areas cannot be faithfully inferred.
- The rig is a production tool only; official runtime use remains based on approved final sprites until a separate human approval changes that.
- Human validation is required before the separated parts become an approved production base for future animation.
