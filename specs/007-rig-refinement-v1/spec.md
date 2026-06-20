# Feature Specification: Rig Refinement V1 do SGT Antonio Rafael

**Feature Branch**: `007-rig-refinement-v1`  
**Created**: 2026-06-19  
**Status**: Draft  
**Input**: User description: "/speckit.specify Quero criar a feature Rig Refinement V1 do SGT Antonio Rafael para o projeto Unfallen."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Refinar Partes Criticas do Rig (Priority: P1)

Como diretor visual do personagem, quero que as partes criticas da montagem tecnica do SGT Antonio Rafael sejam refinadas para que o rig deixe de depender de recortes limitados e fique mais coerente para uma futura articulacao.

**Why this priority**: A Rig Assembly V1 foi aprovada parcialmente, mas partes como pescoco, tronco, mochila, quadril, patch e divisa ainda limitam qualquer tentativa de animacao real. Sem esse refinamento, a proxima etapa tende a manter deformacoes, ruido visual ou encaixes fracos.

**Independent Test**: Pode ser testado comparando as partes refinadas com suas versoes anteriores, com a Base Idle Oficial V1 e com a recomposicao do rig, confirmando melhora visual sem alterar Player, idles aprovados ou gameplay.

**Acceptance Scenarios**:

1. **Given** a Rig Assembly V1 aprovada parcialmente, **When** a pessoa revisora avalia `neck`, `torso_base`, `backpack` e `pelvis` refinados, **Then** as partes parecem mais coerentes, encaixam melhor e continuam fieis ao personagem.
2. **Given** os detalhes `goias_patch` e `sergeant_chevron`, **When** a pessoa revisora avalia sua leitura em escala, **Then** eles aparecem como detalhes legiveis ou sao registrados como simbolicos sem forcar texto ou desenho complexo.
3. **Given** as partes refinadas, **When** elas sao recombinadas no laboratorio, **Then** o personagem ainda preserva proporcao, silhueta, paleta e identidade PMGO/sobrevivente da Base Idle Oficial V1.

---

### User Story 2 - Preservar Rastreabilidade e Reversibilidade (Priority: P2)

Como responsavel pelo pipeline visual, quero que as versoes anteriores das partes criticas sejam preservadas ou rastreadas para que qualquer refinamento possa ser auditado e revertido se for reprovado.

**Why this priority**: O refinamento altera partes tecnicas ja aprovadas parcialmente. Sem rastreabilidade, o projeto perde a referencia da Rig Parts Separation V1 e dificulta comparar antes/depois.

**Independent Test**: Pode ser testado verificando se as versoes anteriores permanecem preservadas ou registradas, e se os manifestos indicam status anterior, status novo, pivots, melhorias e limitacoes restantes.

**Acceptance Scenarios**:

1. **Given** uma parte critica refinada, **When** a pessoa revisora procura a versao anterior, **Then** encontra backup, referencia preservada ou registro claro de rastreabilidade.
2. **Given** os manifestos do rig, **When** a pessoa revisora consulta uma parte refinada, **Then** encontra status anterior, status novo, observacao de refinamento, pivo mantido ou ajustado e limitacoes restantes.
3. **Given** uma parte refinada que nao melhorou o suficiente, **When** ela e revisada, **Then** a parte pode ser marcada como ainda pendente sem perder historico.

---

### User Story 3 - Validar Refinamento Para Futuro Movimento (Priority: P3)

Como animador tecnico, quero um preview comparativo do refinamento para decidir se o rig esta pronto para uma proxima etapa de animacao controlada ou se ainda precisa de ajustes manuais.

**Why this priority**: O refinamento so tem valor se melhorar a montagem e preparar a futura articulacao. O gate humano precisa enxergar antes/depois, partes alteradas e limitacoes restantes.

**Independent Test**: Pode ser testado abrindo o preview de refinamento e verificando referencia original, rig antes, rig depois, destaques das partes refinadas e observacoes de limitacao.

**Acceptance Scenarios**:

1. **Given** o refinamento concluido, **When** a pessoa revisora abre o preview, **Then** ve referencia idle, comparacao antes/depois e destaque das partes refinadas.
2. **Given** a entrega final da feature, **When** a decisao humana e solicitada, **Then** o agente apresenta partes refinadas, partes preservadas, arquivos criados/alterados, limitacoes restantes e confirmacoes de escopo.
3. **Given** a feature finalizada, **When** o repositorio e auditado, **Then** nao ha walk cycle, animacao oficial, alteracao de Player, scripts do Player, idles aprovados ou gameplay.

### Edge Cases

- Se um detalhe for pequeno demais em `128x128`, ele deve ser registrado como detalhe simbolico em vez de virar texto ilegivel ou label externo.
- Se uma parte critica nao puder ser melhorada sem inventar informacao visual, ela deve manter rastreabilidade e ser marcada como ainda necessitando refinamento.
- Se o refinamento melhorar a arte mas piorar o encaixe do rig, a parte deve permanecer pendente para ajuste.
- Se a comparacao antes/depois nao mostrar melhora clara, a feature nao deve ser recomendada como aprovada.
- Se o ambiente nao permitir validacao visual ao vivo no Godot, a entrega deve registrar validacao estatica e pendencia de validacao no editor.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The feature MUST refine the critical parts `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch`, and `sergeant_chevron`.
- **FR-002**: The refined parts MUST preserve the visual identity of the approved SGT Antonio Rafael reference, including face context, glasses context, hair context, skin tone, uniform, vest, backpack, gray/charcoal/black palette, scale, proportion, silhouette, PMGO/survivor identity, and Pixel Art HD isometric style.
- **FR-003**: The refined `neck` MUST improve the visual transition between head and torso while preserving coherent skin tone and head articulation readiness.
- **FR-004**: The refined `torso_base` MUST better support vest, neck, arms, and pelvis without strange pixel leakage or loss of athletic body volume.
- **FR-005**: The refined `backpack` MUST read more clearly as a tactical backpack and remain compatible with the character back/side silhouette.
- **FR-006**: The refined `pelvis` MUST better connect torso and legs and remain useful as the center of future rig movement.
- **FR-007**: The refined `goias_patch` MUST be legible as a visual identity detail when possible, or be explicitly marked as a symbolic detail if full legibility is not viable at scale.
- **FR-008**: The refined `sergeant_chevron` MUST be legible as a symbolic rank detail when possible, without becoming text, external label, or visual clutter.
- **FR-009**: Refined PNG parts MUST remain PNG, RGBA, transparent, free of opaque green background, free of labels, free of external text, and compatible with the existing `front_right` rig assembly.
- **FR-010**: The feature MUST preserve or clearly track the previous versions of all refined parts before changing them.
- **FR-011**: The feature MUST update the relevant rig manifests with refined parts, previous status, new status, refinement notes, pivots retained or adjusted, and remaining limitations.
- **FR-012**: The feature MUST use only the approved Base Idle Oficial V1, current rig parts, current manifests, and current rig laboratory as its source context.
- **FR-013**: The feature MUST produce a human-reviewable refinement preview showing the original reference, prior rig state when available, refined rig state, highlighted refined parts, and remaining limitations.
- **FR-014**: The feature MUST document objective, refined parts, preserved parts, previous limitations, improvements, remaining limitations, symbolic detail decisions, and scope confirmations.
- **FR-015**: The feature MUST NOT alter the official Player, Player scripts, approved idle sprites, gameplay behavior, movement, camera, collision, inventory, HUD, combat, save/load, sounds, music, publication, multiplayer, or mobile scope.
- **FR-016**: The feature MUST NOT create final walk cycle frames, official animation, run cycle, combat pose, gameplay export, or Player integration.
- **FR-017**: The feature MUST stop for human validation before any animation, walk cycle, Player integration, official asset status, commit recommendation, or next gameplay system.

### Key Entities *(include if feature involves data)*

- **Base Idle Oficial V1**: Approved visual reference that must remain intact and remains the source of identity, scale, palette, and silhouette constraints.
- **Rig Parts Separation V1**: Partially approved source part set containing the critical parts to refine.
- **Rig Assembly V1**: Partially approved laboratory assembly used to validate whether refined parts improve rig recomposition.
- **Critical Rig Part**: One of `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch`, or `sergeant_chevron`, requiring refinement before animation.
- **Refinement Record**: Manifest entry describing previous status, new status, refinement notes, pivot changes, and remaining limitations.
- **Refinement Preview**: Human-reviewable visual comparison of reference, before state, after state, highlighted refined parts, and limitations.
- **Human Validation Gate**: Required decision point where the refinement can be approved, approved partially, or rejected before animation work begins.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of the six critical parts are either refined or explicitly justified as symbolic/remaining-refinement items.
- **SC-002**: 100% of refined parts preserve PNG/RGBA transparency requirements and contain no labels, external text, opaque green background, or unrelated visual elements.
- **SC-003**: 100% of refined parts have previous versions preserved or traceable through backup or manifest records.
- **SC-004**: A reviewer can compare before and after states for all six critical parts from the preview or documentation.
- **SC-005**: A reviewer can identify the refined recomposition as SGT Antonio Rafael without relying on external explanation.
- **SC-006**: At least 90% of visually checkable identity traits from the Base Idle Oficial V1 remain recognizable after refinement.
- **SC-007**: The manifests allow a reviewer to identify previous status, new status, refinement note, pivot decision, and remaining limitation for every critical part.
- **SC-008**: The official Player, Player scripts, approved idle sprites, gameplay behavior, movement, camera, and collision remain unchanged by the feature.
- **SC-009**: The feature produces zero official animation frames and zero final walk cycle frames.
- **SC-010**: A reviewer can understand the refinement result, limitations, and next recommended decision in under 5 minutes from the preview, manifests, and documentation.

## Assumptions

- Rig Parts Separation V1 and Rig Assembly V1 remain the approved partial inputs for this feature.
- The refinement focuses only on `front_right` parts listed as critical.
- Symbolic treatment is acceptable for tiny uniform details when full detail would harm readability at `128x128`.
- Previous versions may be preserved either as backup files or through clear non-destructive traceability records.
- The rig remains a production/laboratory artifact and is not intended to run as the official playable character.
- Human validation is required before any animation, walk cycle, export for gameplay, Player integration, commit recommendation, or next gameplay system.
