# Feature Specification: Rig Assembly V1 do SGT Antonio Rafael

**Feature Branch**: `006-rig-assembly-v1`  
**Created**: 2026-06-19  
**Status**: Draft  
**Input**: User description: "/speckit.specify Quero criar a feature Rig Assembly V1 do SGT Antonio Rafael para o projeto Unfallen."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Montar Rig Tecnico Inicial (Priority: P1)

Como diretor tecnico do personagem, quero ver as partes separadas do SGT Antonio Rafael montadas em uma pose coerente de laboratorio para confirmar se a separacao anterior serve como base real de rig.

**Why this priority**: Sem uma montagem inicial verificavel, as partes separadas continuam sendo apenas recortes isolados e nao provam que podem recompor o personagem com fidelidade.

**Independent Test**: Pode ser testado abrindo o laboratorio de rig e verificando se a montagem recompõe aproximadamente a pose `front_right` da Base Idle Oficial V1, sem depender de animacao ou integracao no Player.

**Acceptance Scenarios**:

1. **Given** a Base Idle Oficial V1 e a Rig Parts Separation V1, **When** a pessoa revisora abre o laboratorio de rig, **Then** encontra cabeca, pescoco, tronco, colete, mochila, bracos, antebracos, maos, quadril, coxas, canelas e botas posicionados em uma recomposicao coerente.
2. **Given** a referencia idle `front_right`, **When** a montagem e comparada com a referencia, **Then** o personagem continua reconhecivel como SGT Antonio Rafael e preserva proporcao, escala, silhueta, paleta e identidade PMGO/sobrevivente.
3. **Given** as partes montadas, **When** a pessoa revisora procura sinais de runtime oficial, **Then** nao encontra substituicao do Player, animacao final, walk cycle ou alteracao de gameplay.

---

### User Story 2 - Validar Pivos e Encaixes (Priority: P2)

Como animador tecnico, quero visualizar ou consultar os pivos principais das partes para saber se ha base suficiente para futura articulacao de cabeca, tronco, bracos, pernas, botas, colete e mochila.

**Why this priority**: A proxima tentativa de caminhada depende de pivos claros; sem validar encaixes e pontos de rotacao, a animacao futura tende a repetir movimentos rigidos ou quebrados.

**Independent Test**: Pode ser testado verificando se cada parte principal possui pivo representado ou documentado e se a montagem nao apresenta buracos graves, sobreposicoes incoerentes ou perda de leitura visual.

**Acceptance Scenarios**:

1. **Given** a montagem do rig, **When** a pessoa revisora avalia os pivos, **Then** encontra representacao ou registro para cabeca, pescoco, tronco/colete, mochila, bracos, antebracos, maos, quadril, coxas, canelas e botas.
2. **Given** uma parte articulavel, **When** seu pivo e consultado, **Then** o pivo corresponde ao ponto anatomico esperado, como ombro, cotovelo, punho, quadril, joelho ou tornozelo.
3. **Given** partes com limitacao visual da Rig Parts Separation V1, **When** a montagem e revisada, **Then** as limitacoes continuam registradas e nao sao tratadas como arte final.

---

### User Story 3 - Registrar Evidencia Para Gate Humano (Priority: P3)

Como aprovador visual, quero receber preview, manifesto de montagem e lista de limitacoes para decidir se a Rig Assembly V1 pode seguir para refinamento ou precisa ser reprovada.

**Why this priority**: A feature deve parar antes de qualquer animacao; o material de decisao precisa ser completo o bastante para uma aprovacao, aprovacao parcial ou reprovacao humana.

**Independent Test**: Pode ser testado verificando se existe um preview comparativo, um manifesto de montagem e documentacao que expliquem partes usadas, pivos, status e limitacoes.

**Acceptance Scenarios**:

1. **Given** a montagem do rig, **When** a pessoa revisora abre o preview de validacao, **Then** ve a referencia idle original, a montagem do rig, os pivos ou marcadores e uma comparacao visual clara.
2. **Given** o manifesto de montagem, **When** uma parte e consultada, **Then** o manifesto registra parte usada, caminho do asset, posicao local, pivo aplicado ou sugerido, no correspondente, status e observacao de refinamento.
3. **Given** a entrega final da feature, **When** a decisao humana e solicitada, **Then** o agente apresenta preview, partes usadas, arquivos criados/alterados, limitacoes e confirmacoes de que Player e idles aprovados permanecem intactos.

### Edge Cases

- Se uma parte da Rig Parts Separation V1 estiver parcialmente oculta ou marcada para refinamento, a montagem deve usar a melhor leitura tecnica disponivel e manter a limitacao registrada.
- Se uma parte opcional aprovada parcialmente for pequena demais para articulacao independente, ela pode ser posicionada como detalhe visual dependente de outra parte.
- Se `radio` ou `holster` forem esperados por revisao visual, a feature deve manter a decisao anterior: ambos continuam rejeitados por baixa legibilidade em `front_right`.
- Se a recomposicao divergir perceptivelmente do idle original, a divergencia deve ser registrada como limitacao e nao como resultado aprovado.
- Se o laboratorio de rig nao puder ser validado visualmente ao vivo, a entrega deve registrar validacao estatica e pendencia de validacao no ambiente visual.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The feature MUST assemble the partially approved Rig Parts Separation V1 into an initial technical rig assembly for SGT Antonio Rafael.
- **FR-002**: The assembly MUST use the Base Idle Oficial V1 as the visual authority, with `front_right` as the primary reference pose.
- **FR-003**: The assembly MUST include the required body and equipment parts: head, neck, torso base, vest, backpack, left and right upper arms, left and right forearms, left and right hands, pelvis, left and right thighs, left and right shins, and left and right boots.
- **FR-004**: The assembly MUST preserve the character identity, including face, glasses, hair, skin tone, uniform, vest, backpack, gray/charcoal/black palette, scale, proportion, silhouette, and PMGO/survivor identity.
- **FR-005**: Visible identity details such as the Goias flag patch and sergeant chevron MUST remain preserved when they are usable from the approved part set.
- **FR-006**: The assembly MUST reconstruct an approximate `front_right` pose that can be compared against the approved idle reference.
- **FR-007**: The feature MUST represent or document pivots for head, neck, torso/vest, backpack, upper arms, forearms, hands, pelvis, thighs, shins, and boots.
- **FR-008**: Pivot records MUST identify the intended anatomical anchor for each articulable part, such as neck base, shoulder, elbow, wrist, hip, knee, or ankle.
- **FR-009**: The feature MUST produce a human-reviewable preview showing the original idle reference, the assembled rig, pivot or marker information, and visual comparison between original and recomposition.
- **FR-010**: The feature MUST produce a rig assembly manifest that records each used part, asset path, local placement, pivot applied or suggested, corresponding scene node, status, and refinement note.
- **FR-011**: The feature MUST document all limitations inherited from Rig Parts Separation V1, especially `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch`, and `sergeant_chevron`.
- **FR-012**: The feature MUST keep rejected optional parts `radio` and `holster` out of the approved assembly unless a future human decision changes their status.
- **FR-013**: The feature MUST keep the rig assembly as a production/laboratory artifact only, not as final gameplay art.
- **FR-014**: The feature MUST NOT create a final walk cycle, 32 walking frames, run cycle, combat, weapon functionality, zombies, inventory, HUD, save/load, movement changes, sounds, music, publication, or final gameplay export.
- **FR-015**: The feature MUST NOT alter the official Player, Player scripts, approved idle sprites, gameplay behavior, camera, collision, or movement.
- **FR-016**: The feature MUST stop for human validation before any animation, Player integration, official asset status, commit recommendation, or next gameplay system.

### Key Entities *(include if feature involves data)*

- **Base Idle Oficial V1**: Approved visual authority for SGT Antonio Rafael, including the `front_right` idle pose and the full identity constraints of the character.
- **Rig Parts Separation V1**: Partially approved set of separated parts used as the input for assembly and refinement.
- **Rig Assembly V1**: Initial mounted arrangement of the separated parts, intended to validate recomposition, hierarchy clarity, pivots, and future animation readiness.
- **Rig Part Placement**: Record describing a part used in the assembly, its visual role, placement, pivot, corresponding node, status, and refinement needs.
- **Assembly Preview**: Human-reviewable visual evidence comparing original idle, assembled rig, and pivots/markers.
- **Rig Assembly Manifest**: Audit record listing the mounted parts, placements, pivots, statuses, limitations, and relationship to the laboratory scene.
- **Human Validation Gate**: Required decision point where the assembly can be approved, approved partially, or rejected before any animation work begins.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of the 18 required parts are present in the assembly or explicitly documented as unavailable with a human-reviewable limitation.
- **SC-002**: 100% of required articulable parts have a represented or documented pivot and anatomical anchor.
- **SC-003**: A reviewer can identify the recomposed character as SGT Antonio Rafael from the preview without relying on external explanation.
- **SC-004**: At least 90% of visually checkable identity traits from the Base Idle Oficial V1 remain recognizable in the assembled preview.
- **SC-005**: The preview allows side-by-side comparison of original reference, assembled rig, and pivots/markers in a single review artifact.
- **SC-006**: The manifest allows a reviewer to trace every mounted part to its source asset, placement, pivot, corresponding node, status, and refinement note.
- **SC-007**: The official Player, Player scripts, approved idle sprites, gameplay behavior, movement, camera, and collision remain unchanged by the feature.
- **SC-008**: The feature produces zero final walking frames and zero official gameplay animations.
- **SC-009**: A reviewer can understand purpose, limitations, and next recommended decision for Rig Assembly V1 in under 5 minutes from the preview, manifest, and documentation.

## Assumptions

- Rig Parts Separation V1 remains the approved partial input for this feature.
- The initial assembly focuses on the `front_right` direction only.
- The rig assembly is a production/laboratory artifact and is not intended to run as the official playable character.
- Existing limitations in separated parts remain valid until a future manual refinement feature changes them.
- The preview and manifest are sufficient for this specification stage; detailed scene/node structure will be planned in the technical plan.
- Human validation is required before any animation, walk cycle, export for gameplay, Player integration, commit recommendation, or next gameplay system.
