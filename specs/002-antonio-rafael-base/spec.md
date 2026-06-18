# Feature Specification: Protagonist Base Setup (Antônio Rafael)

**Feature Branch**: `002-antonio-rafael-base`  
**Created**: 2026-06-18  
**Status**: Draft  
**Input**: User description: "Quero construir a fundação inicial jogável do game Unfallen, começando pelo personagem principal Antônio Rafael em uma cena isolada de teste. O objetivo desta primeira especificação é criar uma base sólida para o protagonista antes de expandir o jogo para cenários, inimigos, combate, inventário ou narrativa complexa..."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Visual do Protagonista Antônio Rafael (Priority: P1)

Ao iniciar a cena de teste, o jogador deve visualizar o personagem Antônio Rafael posicionado de forma centralizada e nítida. O visual deve retratar as características oficiais definidas no documento constitucional, transmitindo a atmosfera tática de sobrevivência e o cansaço pós-plantão.

**Why this priority**: Estabelecer a identidade do personagem é o pilar criativo e estético ("Character First") do projeto Unfallen.

**Independent Test**: Executar a cena e verificar visualmente se as características físicas e de vestimenta do protagonista estão nítidas e seguem as especificações da direção de arte em Pixel Art HD.

**Acceptance Scenarios**:

1. **Given** a cena de teste é iniciada, **When** o jogo carrega, **Then** o personagem Antônio Rafael é renderizado sem distorção e com visual de idle.
2. **Given** o personagem está parado, **When** nenhuma entrada de movimento é fornecida, **Then** a animação de idle é executada continuamente.

---

### User Story 2 - Movimentação Isométrica e Animação de Caminhada (Priority: P1)

O jogador deve conseguir mover Antônio Rafael no plano isométrico utilizando os controles padrão de movimentação, com transição suave entre o estado parado (idle) e caminhada na direção correspondente do deslocamento.

**Why this priority**: A movimentação fluida e responsiva é essencial para a jogabilidade de sobrevivência isométrica.

**Independent Test**: Pressionar as teclas de direção e observar o deslocamento do personagem nos eixos isométricos corretos com a respectiva mudança de animação.

**Acceptance Scenarios**:

1. **Given** o personagem está em repouso, **When** uma tecla de direção é pressionada, **Then** o personagem se move e inicia a animação de caminhada na direção do movimento (limitado a 4 direções isométricas principais: Nordeste, Noroeste, Sudeste e Sudoeste).
2. **Given** o personagem está se movendo, **When** o jogador solta todas as teclas de movimento, **Then** o personagem cessa o deslocamento e retorna à animação de idle apontando para a última direção movimentada.

---

### User Story 3 - Câmera e Colisão com Obstáculos (Priority: P1)

Ao caminhar pela cena neutra de teste, a câmera deve acompanhar o personagem de forma suave para manter a legibilidade da ação. O personagem deve colidir com obstáculos sólidos posicionados na cena, sendo impedido de atravessá-los.

**Why this priority**: Evitar falhas de navegação e garantir que a colisão funcione corretamente é o fundamento de qualquer mecânica de mundo futuro.

**Independent Test**: Direcionar o personagem contra os limites ou obstáculos da cena de teste e verificar se a colisão física é acionada e impede a passagem.

**Acceptance Scenarios**:

1. **Given** o personagem se desloca, **When** a posição muda no espaço, **Then** a câmera acompanha o movimento de forma suave, sem oscilações visuais bruscas.
2. **Given** um obstáculo sólido presente na cena (representado por blocos de colisão simples de cores sólidas para depuração rápida), **When** o personagem tenta andar em direção a ele, **Then** a colisão impede que o personagem o atravesse.

### Edge Cases

- **Movimentação Diagonal**: O jogador pressiona duas teclas simultaneamente (ex: W + D). O sistema deve normalizar a velocidade para que o movimento diagonal não seja mais rápido do que o linear.
- **Transição Rápida de Direções**: Alterações rápidas e consecutivas de direção não devem quebrar a lógica de reprodução das animações correspondentes.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema MUST carregar uma cena isolada de teste com fundo neutro.
- **FR-002**: O sistema MUST exibir o sprite do protagonista de acordo com a ficha visual oficial.
- **FR-003**: O sistema MUST implementar a máquina de estados básica para gerenciar os estados de Idle e Walk do personagem.
- **FR-004**: O sistema MUST suportar inputs de teclado através das teclas WASD e setas direcionais.
- **FR-005**: O sistema MUST realizar o deslocamento isométrico normalizando a velocidade diagonal.
- **FR-006**: O sistema MUST implementar colisão física bidimensional (CharacterBody2D/CollisionShape2D) no jogador.
- **FR-007**: O sistema MUST ter pelo menos um StaticBody2D na cena de teste com colisão para validação de bloqueio de deslocamento.
- **FR-008**: O sistema MUST ter uma câmera acoplada que siga o jogador com amortecimento suave (smoothing).

### Key Entities

- **Protagonista (Player)**: Entidade móvel que processa os inputs, gerencia a máquina de estados física/animação e possui colisão.
- **Cena de Teste (TestScene)**: O nó raiz que comporta o jogador, a câmera e os elementos de colisão do ambiente.
- **Obstáculo de Teste (StaticObstacle)**: Entidade estática com corpo de colisão física de depuração.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Latência de entrada imperceptível para o início e parada da movimentação do protagonista.
- **SC-002**: A velocidade de movimentação diagonal normalizada mantém-se idêntica à velocidade linear máxima.
- **SC-003**: 100% de prevenção contra atravessamento de obstáculos na cena de teste.
- **SC-004**: Renderização nítida de pixel art em Godot 4.x Standard mantendo o filtro correspondente ativo.

## Assumptions

- **AS-001**: O projeto usará os inputs de teclado mapeados de forma padrão no Godot Project Settings.
- **AS-002**: Os spritesheets de animação iniciais serão integrados mantendo as proporções definidas na constituição.
- **AS-003**: A cena de teste não possui lógica de jogo definitiva, servindo apenas como laboratório.
