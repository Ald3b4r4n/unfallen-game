# Feature Specification: Walk Cycle Lateral Normalization V1

**Feature Branch**: `018-walk-cycle-lateral-normalization-v1`  
**Created**: 2026-06-25  
**Status**: Draft  
**Input**: User description: "Normalizar tecnicamente os dois testes experimentais de caminhada lateral do SGT Antonio Rafael: right-facing (`walking_left_to_right_20f`) e left-facing (`walking_right_to_left_20f`), mantendo tudo no laboratorio e sem integrar ao Player oficial."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Avaliar os dois ciclos laterais (Priority: P1)

Como diretor do pipeline de personagem, quero comparar os dois testes laterais de caminhada do SGT Antonio Rafael para saber se eles estao tecnicamente consistentes entre si antes de qualquer decisao de integracao futura.

**Why this priority**: Sem uma avaliacao comparativa dos dois lados, a equipe pode promover um lado mais maduro que o outro e criar uma caminhada inconsistente.

**Independent Test**: Pode ser testado revisando o relatorio comparativo e confirmando que os dois conjuntos laterais foram avaliados com os mesmos criterios.

**Acceptance Scenarios**:

1. **Given** os testes right-facing e left-facing existentes no laboratorio, **When** a avaliacao for concluida, **Then** cada lado deve ter status documentado para baseline, escala, enquadramento, canvas, leitura visual e loop.
2. **Given** diferencas entre os dois conjuntos, **When** a comparacao for registrada, **Then** as diferencas devem ser explicadas sem promover nenhum conjunto a walk oficial.

---

### User Story 2 - Normalizar material lateral de laboratorio (Priority: P2)

Como responsavel pelo pipeline tecnico, quero que os frames laterais sejam organizados e normalizados quando necessario para que uma futura etapa consiga avaliar integracao sem refazer a auditoria basica.

**Why this priority**: A normalizacao reduz incerteza tecnica, mas so deve acontecer depois que a avaliacao confirmar onde ha desalinhamento.

**Independent Test**: Pode ser testado verificando se os frames resultantes, ou a decisao de nao normalizar, mantem rastreabilidade com os frames originais e usam criterios equivalentes nos dois lados.

**Acceptance Scenarios**:

1. **Given** frames com canvas, baseline ou escala inconsistentes, **When** a normalizacao for necessaria, **Then** o resultado deve preservar rastreabilidade, indicar o criterio aplicado e permanecer marcado como experimental.
2. **Given** frames que ja atendem aos criterios tecnicos, **When** a revisao for feita, **Then** a documentacao deve registrar que nenhuma alteracao destrutiva foi necessaria.

---

### User Story 3 - Preparar material de revisao humana (Priority: P3)

Como validador humano, quero ver previews comparativos e cenas de teste atualizadas para revisar os dois lados da caminhada lateral com clareza.

**Why this priority**: A decisao humana precisa de material visual legivel e comparavel, nao apenas listas de arquivos.

**Independent Test**: Pode ser testado abrindo os previews e cenas isoladas do laboratorio e confirmando que os dois lados podem ser avaliados sem depender do Player oficial.

**Acceptance Scenarios**:

1. **Given** os dois conjuntos laterais normalizados ou auditados, **When** o material de revisao for aberto, **Then** o usuario deve conseguir comparar right-facing e left-facing em previews claros.
2. **Given** as cenas experimentais de teste, **When** a validacao visual for feita, **Then** elas devem permanecer isoladas do Player oficial e nao criar gameplay.

### Edge Cases

- A contagem de frames de um lado diverge dos 24 frames esperados.
- Um lado usa frames reais enquanto o outro usa frames de ponte copiados para fechar o loop.
- O fundo magenta atrapalha a leitura visual mas ainda nao ha transparencia real aprovada.
- O baseline dos pes varia entre frames e cria tremor visual.
- O canvas ou a escala diverge entre right-facing e left-facing.
- O loop parece correto em contact sheet mas falha em cena animada.
- O editor Godot nao esta disponivel no ambiente automatizado e a validacao ao vivo precisa ficar pendente para o usuario.
- Arquivos `.import` ou `.uid` sao gerados automaticamente pelo editor e nao devem ser tratados como parte da feature sem aprovacao explicita.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A feature MUST avaliar o conjunto right-facing `walking_left_to_right_20f` e registrar sua contagem de frames, origem, status de loop e limitacoes.
- **FR-002**: A feature MUST avaliar o conjunto left-facing `walking_right_to_left_20f` e registrar sua contagem de frames, origem, status de loop e limitacoes.
- **FR-003**: A feature MUST usar os mesmos criterios para os dois lados: baseline dos pes, escala, enquadramento, canvas, leitura visual e consistencia de loop.
- **FR-004**: A feature MUST documentar se cada lado esta aprovado para normalizacao, aprovado para futura avaliacao de integracao, ou pendente de ajustes.
- **FR-005**: A feature MUST preservar rastreabilidade entre os frames atuais do laboratorio e qualquer frame normalizado ou decisao de normalizacao.
- **FR-006**: A feature MUST criar ou atualizar previews comparativos para revisao humana dos dois lados.
- **FR-007**: A feature MAY atualizar cenas experimentais em `scenes/test/` somente para melhorar a avaliacao visual isolada dos ciclos laterais.
- **FR-008**: A feature MUST manter todos os resultados como experimentais e nao oficiais ate nova aprovacao humana explicita.
- **FR-009**: A feature MUST NOT alterar o Player oficial, scripts oficiais do Player, cena oficial do rig, sprites idle aprovados, assets oficiais do rig, `.gitignore`, `.uid` ou `.specify/feature.json`.
- **FR-010**: A feature MUST NOT criar gameplay, colisao, inimigos, mundo, integracao no Player, walk cycle oficial, commit automatico ou push automatico.
- **FR-011**: A feature MUST registrar claramente qualquer validacao que nao puder ser executada ao vivo no Godot.
- **FR-012**: A feature MUST registrar a diferenca entre material de laboratorio, material normalizado e qualquer futura candidatura a integracao.

### Key Entities

- **Lateral Walk Set**: Um conjunto experimental de frames laterais, com direcao, origem, quantidade de frames, tamanho de canvas, status de fundo, status de loop e observacoes.
- **Frame Assessment**: Resultado por conjunto ou por frame sobre baseline, escala, enquadramento, canvas, leitura visual e eventuais problemas.
- **Normalization Decision**: Decisao que indica se o conjunto foi normalizado, nao precisou de normalizacao, ou ficou pendente de ajuste.
- **Comparative Preview**: Material visual para revisar os dois lados em condicoes equivalentes.
- **Integration Readiness Status**: Classificacao documental que indica se o material esta pronto para uma futura avaliacao de integracao, sem integrar agora.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% dos frames dos dois conjuntos laterais existentes sao avaliados ou explicitamente marcados como indisponiveis.
- **SC-002**: Os dois conjuntos laterais possuem status documentado para baseline, escala, enquadramento, canvas, leitura visual e loop.
- **SC-003**: Um revisor humano consegue identificar em ate 15 minutos, usando a documentacao e previews, se cada lado esta pronto para futura avaliacao de integracao ou ainda pendente.
- **SC-004**: Nenhum arquivo protegido ou runtime oficial apresenta alteracao rastreada ao final da feature.
- **SC-005**: Todos os materiais gerados ou atualizados permanecem marcados como laboratorio experimental e nao walk oficial.
- **SC-006**: A comparacao visual final mostra os dois lados em condicoes equivalentes de leitura, permitindo decisao humana sobre a proxima etapa.

## Assumptions

- O conjunto right-facing atual tem 24 passos no laboratorio: 20 frames extraidos e 4 frames de ponte copiados para suavizar o loop.
- O conjunto left-facing atual tem 24 frames reais detectados na spritesheet externa.
- A normalizacao deve ser nao destrutiva sempre que possivel e deve preservar rastreabilidade dos frames do laboratorio.
- A validacao ao vivo no Godot pode depender do ambiente do usuario se o executavel Godot nao estiver disponivel no PATH.
- A feature prepara decisao futura; ela nao transforma os ciclos laterais em walk oficial nem integra nada ao Player.
