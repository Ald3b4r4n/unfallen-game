# Feature Specification: Codex Image Walk Lab V1

**Feature Branch**: `017-codex-image-walk-lab-v1`  
**Created**: 2026-06-24  
**Status**: Draft  
**Input**: User description: "Criar a feature Codex Image Walk Lab V1 para o projeto Unfallen, testando uma abordagem prática para criação de walk cycle experimental por `/image` do Codex, com foco inicial em `front_right`, documentação de pipeline, prompt mestre, estrutura de laboratório, critérios de validação, tentativa experimental se possível, preview/contact sheet e gate humano, sem integração ao Player e sem declarar walk cycle oficial."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Definir um pipeline controlado de prompt visual (Priority: P1)

Como responsável pela direção visual do Unfallen, quero uma base documentada de prompt para tentar gerar uma caminhada experimental do SGT Antonio Rafael sem descaracterizar o personagem, para que novas tentativas de imagem tenham identidade travada, restrições negativas claras e critérios de avaliação antes de qualquer uso no jogo.

**Why this priority**: Sem um prompt mestre e critérios visuais explícitos, qualquer imagem gerada tende a repetir falhas anteriores: personagem inconsistente, movimento imperceptível, texto dentro do sprite, troca de uniforme ou falsa aprovação como walk cycle oficial.

**Independent Test**: Pode ser testado verificando se existe um prompt mestre para `front_right`, se ele descreve a identidade oficial do personagem, se contém restrições negativas e se está acompanhado de critérios de avaliação visual.

**Acceptance Scenarios**:

1. **Given** a feature de laboratório de caminhada por imagem, **When** o prompt mestre for revisado, **Then** ele deve especificar identidade, direção `front_right`, 4 frames, caminhada in-place, células preparadas para 128x128, consistência visual e proibições de texto, labels, cenário, Polícia Civil e nomes aleatórios.
2. **Given** uma futura tentativa de geração, **When** o prompt for usado como referência, **Then** a tentativa deve ser avaliável contra requisitos de identidade, escala, alternância de braços/pernas e status experimental.

---

### User Story 2 - Registrar uma tentativa experimental sem oficializar o resultado (Priority: P2)

Como validador humano do projeto, quero que a primeira tentativa experimental por imagem seja registrada com preview e limitações, para decidir se ela pode continuar como candidata de laboratório ou se deve ser rejeitada sem contaminar os assets oficiais.

**Why this priority**: A feature precisa gerar aprendizado visual real, mas o resultado não pode ser confundido com walk cycle aprovado, animação oficial, asset final ou conteúdo de gameplay.

**Independent Test**: Pode ser testado conferindo se uma tentativa experimental existe ou se a impossibilidade de geração foi documentada, e se qualquer preview produzido está claramente marcado como material de validação humana.

**Acceptance Scenarios**:

1. **Given** que a geração de imagem esteja disponível, **When** uma tentativa `front_right` for produzida, **Then** ela deve ser registrada como experimental, acompanhada de preview/contact sheet quando houver imagem ou frames válidos.
2. **Given** que a geração de imagem não esteja disponível ou produza resultado inválido, **When** a feature for finalizada, **Then** a limitação deve ser documentada com próximos ajustes sugeridos, sem fingir que um asset válido foi criado.
3. **Given** qualquer tentativa gerada, **When** ela for revisada, **Then** deve ficar claro que ela ainda não é walk cycle oficial, animação oficial nem asset de Player runtime.

---

### User Story 3 - Preparar um laboratório seguro para iterações futuras (Priority: P3)

Como mantenedor do repositório, quero uma estrutura experimental separada dos assets oficiais para armazenar prompts, fontes, exports, previews e frames do walk lab, para que novas tentativas possam evoluir sem alterar Player, sprites idle aprovados, rig oficial, `.gitignore` ou `.uid`.

**Why this priority**: O projeto saiu de micro-auditorias e entrou em uma etapa evolutiva; a separação física e documental evita que protótipos virem runtime acidentalmente.

**Independent Test**: Pode ser testado verificando se a estrutura de laboratório existe, se está marcada como experimental, e se nenhum arquivo sensível ou oficial foi alterado.

**Acceptance Scenarios**:

1. **Given** a estrutura experimental da feature, **When** os diretórios do walk lab forem revisados, **Then** eles devem separar prompts, source, exports, previews e frames.
2. **Given** a validação final da feature, **When** o estado do repositório for auditado, **Then** Player, cena de rig, scripts, sprites idle aprovados, rig oficial, `.gitignore` e `.uid` devem permanecer fora das alterações da feature.

### Edge Cases

- A geração por imagem pode não produzir fundo transparente real; nesse caso, a feature deve registrar a limitação e preparar normalização futura, sem integrar nada ao Player.
- A imagem pode gerar frames visualmente bonitos, mas com personagem inconsistente; nesse caso, a tentativa deve ser rejeitada como candidata de caminhada.
- A imagem pode repetir idle parado ou frames quase iguais; nesse caso, a tentativa deve ser documentada como falha de movimento.
- A imagem pode incluir texto, label, cenário, nomes aleatórios ou referência incorreta como Polícia Civil; nesse caso, a tentativa deve ser rejeitada.
- A tentativa pode produzir uma spritesheet útil apenas como referência visual; nesse caso, ela deve permanecer experimental até gate humano específico.
- Arquivos do rig oficial podem ser lidos como referência, mas não podem ser alterados por esta feature.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The feature MUST define a controlled visual-prompt pipeline for generating an experimental walk-cycle attempt for SGT Antonio Rafael.
- **FR-002**: The feature MUST create a master prompt for the initial `front_right` walking direction.
- **FR-003**: The master prompt MUST preserve the official character identity: light-brown skin, short dark military haircut, rectangular glasses, well-groomed face, athletic realistic body, tactical police vest, tactical backpack, gray/black/graphite uniform, and Goias/sergeant visual cues when visible.
- **FR-004**: The master prompt MUST require a technical game spritesheet approach with 4 walking-in-place frames, separated readable poses, consistent scale, no scenery, no labels, no text, and no highlighted weapon.
- **FR-005**: The feature MUST include strong visual prohibitions against Polícia Civil, "Sargento Silva", random names, labels, external text, background scenes, exaggerated heroic poses, uniform changes, face changes, merged frames, and idle repetition.
- **FR-006**: The feature MUST create or validate a clearly experimental walk-lab structure for prompts, source material, exports, previews, and frames.
- **FR-007**: The feature MUST document the conceptual inspiration from AI spritesheet prompt workflows while adapting the approach to Unfallen and avoiding literal copying beyond minimal reference.
- **FR-008**: The feature MUST attempt a first experimental image-based walk-cycle generation if the image-generation route is available in the execution environment.
- **FR-009**: If a generated attempt contains valid image or frame material, the feature MUST produce a preview or contact sheet for human visual validation.
- **FR-010**: If image generation is unavailable or the generated attempt is unusable, the feature MUST document the limitation honestly and describe the next adjustment path.
- **FR-011**: The feature MUST document visual evaluation criteria for accepting, partially accepting, or rejecting the experimental attempt as a future candidate.
- **FR-012**: The feature MUST state that the attempt is not a walk cycle official, not an official animation, not a final asset, and not part of Player runtime.
- **FR-013**: The feature MUST confirm that no integration into `Player.tscn` occurs.
- **FR-014**: The feature MUST confirm that approved idle sprites remain unchanged.
- **FR-015**: The feature MUST confirm that official rig PNGs and rig scenes remain unchanged.
- **FR-016**: The feature MUST avoid changes to `.gitignore`, `.uid` files, Player scripts, rig scripts, gameplay systems, combat, zombies, inventory, and final animation systems.
- **FR-017**: The feature MUST end with a human validation gate that presents prompt, generated attempts if any, previews if any, visual evaluation, changed artifacts, limitations, and a recommendation for the next feature.

### Key Entities *(include if feature involves data)*

- **Walk Lab Prompt**: A controlled text artifact describing the desired experimental image output, identity constraints, frame requirements, negative constraints, and evaluation intent.
- **Experimental Walk Attempt**: A generated or documented attempt to create `front_right` walking material for SGT Antonio Rafael; always experimental until human approval.
- **Preview Contact Sheet**: A validation artifact that lets a human compare frames or spritesheet output without treating it as a technical spritesheet for runtime.
- **Visual Validation Checklist**: A set of acceptance and rejection criteria covering identity, movement clarity, frame separation, text absence, consistency, and official-status restrictions.
- **Sensitive Official Asset**: Existing approved Player, idle, rig, import, or project-control artifact that may be read for context but must not be altered by this feature.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A reviewer can identify the purpose, scope, and non-official status of the walk lab in under 5 minutes by reading the created documentation.
- **SC-002**: The master `front_right` prompt includes at least 10 positive identity/style constraints and at least 10 negative constraints preventing known failure modes.
- **SC-003**: The validation checklist allows a reviewer to classify a generated attempt as continue, revise, or reject using observable visual criteria without needing runtime integration.
- **SC-004**: 100% of generated or documented attempts are labeled as experimental and not official.
- **SC-005**: 0 Player, official idle, official rig, script, `.gitignore`, or `.uid` files are changed by this feature.
- **SC-006**: If image generation succeeds, at least 1 preview/contact sheet is available for human review; if it fails or is unavailable, the limitation and next action are documented.
- **SC-007**: The final report gives a clear recommendation for the next feature, including whether the image-based approach should continue, be revised, or be rejected.

## Assumptions

- The initial visual direction is `front_right` because it aligns with the current rig work and reduces risk before attempting 8 directions.
- The first attempt is a laboratory experiment, not an official asset candidate unless a future human gate explicitly promotes it.
- The image-generation route may or may not support transparent PNG output reliably; non-transparent output can be documented for future normalization rather than forced into runtime.
- Existing approved idle sprites and rig artifacts remain the source of visual truth and are not modified.
- The AI spritesheet repository is used only as conceptual inspiration for prompt discipline and validation workflow, not as a source of copied assets.
- Future 8-direction expansion, Player integration, and official walk-cycle approval are separate features.
