# Feature Specification: Arte Oficial do Protagonista (Antônio Rafael)

**Feature Branch**: `003-antonio-rafael-art`  
**Created**: 2026-06-18  
**Status**: Draft  
**Input**: Arte visual do personagem em Pixel Art HD isométrica.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Validação da Ficha Visual e Conceito (Priority: P1)

Como diretor de arte, quero validar a ficha visual e a imagem conceitual gerada (baseada nas referências fornecidas) para garantir que Antônio Rafael represente a essência de um sobrevivente humano e vulnerável.

**Why this priority**: Estabelece o estilo primário, a paleta de cores e o design base do protagonista antes do trabalho nos spritesheets, evitando refação e desperdício de esforço.

**Independent Test**: A validação ocorre inspecionando o documento de design e a arte conceitual de proporções do personagem.

**Acceptance Scenarios**:

1. **Given** as fotos de referência do usuário, **When** a arte conceitual for entregue, **Then** as referências não devem estar literalmente copiadas, mas sim adaptadas ao estilo Pixel Art HD original.
2. **Given** a ficha descritiva, **When** a arte conceitual é analisada, **Then** o personagem deve explicitamente usar óculos, colete, mochila tática, aparentar cerca de 35 anos, ser moreno claro e ter barba feita.

---

### User Story 2 - Aprovação do Sprite Base Idle Isométrico (Priority: P2)

Como animador/desenvolvedor, quero visualizar o sprite base parado (idle) em proporção 128x128 na perspectiva isométrica, para garantir que o tamanho e o posicionamento grid-like sejam lidos perfeitamente no jogo.

**Why this priority**: A perspectiva isométrica (geralmente 2:1) deforma volumes e contornos. O base sprite é o fundamento de todo ciclo de animação posterior.

**Independent Test**: Inspeção do sprite sheet inicial com as 4 direções base desenhadas (Frente, Costas, Lat Esq, Lat Dir) e opcionalmente as diagonais.

**Acceptance Scenarios**:

1. **Given** o modelo conceitual aprovado, **When** o sprite base isométrico for desenhado, **Then** deve oferecer variações claras das direções frontais e laterais exigidas.
2. **Given** as limitações de resolução, **When** a imagem for visualizada em zoom 100%, **Then** ela deve ter legibilidade dos traços principais (óculos, postura) nas proporções de 128x128 pixels.

---

### User Story 3 - Planejamento Visual de Caminhada (Walk) (Priority: P3)

Como diretor de projeto, quero receber um planejamento estruturado visual para a futura animação de caminhada, para garantir que o volume de acessórios do personagem não vai causar clipagem ou poluição visual na animação.

**Why this priority**: É o último passo descritivo antes da efetiva produção dos frames e garante coerência no fluxo e transição das posições de pernas/braços isométricos.

**Independent Test**: Revisão do documento descritivo de keyframes necessários para a ação.

**Acceptance Scenarios**:

1. **Given** os sprites base isométricos aprovados, **When** o planejamento de animação for fornecido, **Then** ele descreve com exatidão a contagem de frames necessária.

### Edge Cases

- O uso de óculos em resoluções pixelizadas baixas pode causar impressão de olhos sem rosto se não houver alto contraste.
- O excesso de equipamento tático (mochila e colete combinados) em 128x128 pixels isométricos pode comprometer a silhueta, tornando a direção da caminhada difícil de ler para o jogador.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O projeto MUST conter uma ficha técnica descritiva do visual do personagem.
- **FR-002**: O time MUST entregar uma versão original inicial da arte em estilo Pixel Art HD e proporção 128x128.
- **FR-003**: O spritesheet ou grid base MUST conter as posições: frente, costas, lateral esquerda, lateral direita, e (se viável graficamente) diagonais principais.
- **FR-004**: O time MUST apresentar um sprite base na pose "parado" (idle) antes de iniciar qualquer animação.
- **FR-005**: O projeto MUST separar conceitualmente e em pastas "imagem conceitual de referência", "sprite base" e "sprites de animação futuros".
- **FR-006**: O fluxo de trabalho MUST pausar para aprovação visual humana logo após a entrega do modelo base inicial.
- **FR-007**: Nenhuma arte importada MUST ser cópia literal de fotografias (photobashing). Fotografias fornecidas MUST ser apenas material de referência.

### Key Entities

- **Arte Conceitual**: Interpretação visual livre baseada nas referências reais, convertida em proporções de pixel art.
- **Sprite Base Isométrico**: Conjunto de sprites limitados a 128x128 formatados estritamente na grade isométrica do cenário.
- **Documentação de Arte**: Documentos de referência e planejamento das animações (Textos).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A silhueta final e detalhes faciais (óculos, barba curta) são distinguíveis visualmente de forma nítida na resolução restrita de 128x128, sem depender de redimensionamento na engine.
- **SC-002**: 100% dos visuais fornecidos são arte digital nova original, sem sobreposição opaca de fotos reais.
- **SC-003**: Nenhuma mecânica de jogo (câmera, script GDScript, colisão ou inimigos) é abordada ou alterada, garantindo total isolamento da feature no departamento de arte.
- **SC-004**: O feedback do cliente ou diretor aprova o design baseado em sua coerência de representar vulnerabilidade e prontidão (humano vs herói excessivo).

## Assumptions

- O usuário tem a capacidade de fornecer as fotos de referência necessárias para alicerçar o formato do rosto e pele.
- O Godot 4 processará perfeitamente arquivos em formato `.png` lossless, garantindo que o estilo não sofra desvio de cor futuramente, mas as especificações atuais de arquivo não dependem da engine para serem avaliadas.
- O estilo isométrico assumido é o de projeção 2:1 padrão (achatamento do eixo Y em 50%).
