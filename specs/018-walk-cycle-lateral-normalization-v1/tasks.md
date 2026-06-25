# Tasks: Walk Cycle Lateral Normalization V1

**Input**: Design documents from `specs/018-walk-cycle-lateral-normalization-v1/`  
**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `quickstart.md`

**Scope**: Normalizar e comparar tecnicamente os ciclos laterais experimentais `right-facing / walking_left_to_right_20f` e `left-facing / walking_right_to_left_20f`, mantendo tudo no laboratorio e sem integrar ao Player oficial.

**Tests**: Nao ha TDD automatizado solicitado. A validacao prevista e estatica, documental, visual e por cena isolada de laboratorio, quando criada.

**Important statement required in implementation docs**:

```text
Ainda nao existe walk cycle oficial no projeto.
Esta feature nao integra nada ao Player.
Esta feature nao substitui a Base Idle Oficial V1.
Esta feature nao altera o rig oficial.
Esta feature apenas normaliza e compara material experimental do walk_lab.
```

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Pode rodar em paralelo quando usa arquivos diferentes e nao depende de tarefa incompleta.
- **[Story]**: Usado nas tarefas ligadas diretamente a uma user story.
- Todas as tarefas incluem caminho, criterio de conclusao e dependencia na propria descricao.

---

## Phase 1: Preparacao e leitura da feature

**Purpose**: Confirmar contexto, limites e documentos antes de qualquer diagnostico ou normalizacao.

- [X] T001 Ler `specs/018-walk-cycle-lateral-normalization-v1/spec.md` e registrar o escopo da feature; criterio: requisitos FR-001 a FR-012 conhecidos; dependencias: nenhuma.
- [X] T002 Ler `specs/018-walk-cycle-lateral-normalization-v1/plan.md`; criterio: estrategia `walk_lab/normalized/` e areas protegidas compreendidas; dependencias: T001.
- [X] T003 [P] Ler `specs/018-walk-cycle-lateral-normalization-v1/research.md`; criterio: decisoes de normalizacao nao destrutiva e fundo magenta compreendidas; dependencias: T001.
- [X] T004 [P] Ler `specs/018-walk-cycle-lateral-normalization-v1/data-model.md`; criterio: entidades `LateralWalkSet`, `FrameAssessment`, `NormalizationDecision`, `NormalizedFrameSet`, `ComparativePreview`, `ExperimentalTestScene` e `IntegrationReadinessStatus` mapeadas; dependencias: T001.
- [X] T005 [P] Ler `specs/018-walk-cycle-lateral-normalization-v1/quickstart.md`; criterio: comandos seguros e gate humano conhecidos; dependencias: T001.
- [X] T006 [P] Ler `specs/018-walk-cycle-lateral-normalization-v1/checklists/requirements.md`; criterio: checklist de requisitos revisado ou ausencia registrada; dependencias: T001.
- [X] T007 [P] Ler `docs/art/codex-image-walk-lab-v1.md`; criterio: contexto visual do walk lab conhecido ou ausencia registrada para documentacao final; dependencias: T001.
- [X] T008 [P] Ler `docs/technical/codex-image-walk-pipeline-v1.md`; criterio: pipeline experimental conhecido ou ausencia registrada para documentacao final; dependencias: T001.
- [X] T009 [P] Ler `docs/technical/walk-lab-validation-v1.md`; criterio: classificacoes e limitacoes anteriores conhecidas ou ausencia registrada; dependencias: T001.
- [X] T010 [P] Ler `docs/technical/walk-sheet-20f-test-v1.md`; criterio: contexto `right_20f` e ponte 21-24 conhecido ou ausencia registrada; dependencias: T001.
- [X] T011 [P] Ler `docs/technical/walk-sheet-left-20f-test-v1.md`; criterio: contexto `left_20f` e 24 frames reais conhecido ou ausencia registrada; dependencias: T001.
- [X] T012 [P] Ler `docs/project/repository-hygiene.md`; criterio: politica de higiene e proibicoes de stage/commit conhecidas ou ausencia registrada; dependencias: T001.
- [X] T013 Executar auditoria Git somente leitura conforme `specs/018-walk-cycle-lateral-normalization-v1/quickstart.md`; criterio: status de `.gitignore`, `*.uid`, `*.import`, Player, rig e scripts oficiais registrado sem alterar arquivos; dependencias: T001-T012.

---

## Phase 2: Auditoria dos assets laterais existentes

**Purpose**: Confirmar que os insumos laterais existem antes de qualquer diagnostico por frame.

- [X] T014 Verificar existencia de `assets/characters/antonio_rafael/walk_lab/frames/right_20f/`; criterio: pasta encontrada e contagem inicial registrada; dependencias: T013.
- [X] T015 Verificar existencia de `assets/characters/antonio_rafael/walk_lab/frames/left_20f/`; criterio: pasta encontrada e contagem inicial registrada; dependencias: T013.
- [X] T016 [P] Verificar existencia de `assets/characters/antonio_rafael/walk_lab/source/walking_left_to_right_20f.png`; criterio: source right-facing encontrado ou pendencia registrada; dependencias: T013.
- [X] T017 [P] Verificar existencia de `assets/characters/antonio_rafael/walk_lab/source/walking_right_to_left_20f.png`; criterio: source left-facing encontrado ou pendencia registrada; dependencias: T013.
- [X] T018 [P] Verificar existencia de `assets/characters/antonio_rafael/walk_lab/animations/walking_right_20f_spriteframes.tres`; criterio: SpriteFrames right-facing encontrado ou pendencia registrada; dependencias: T013.
- [X] T019 [P] Verificar existencia de `assets/characters/antonio_rafael/walk_lab/animations/walking_left_20f_spriteframes.tres`; criterio: SpriteFrames left-facing encontrado ou pendencia registrada; dependencias: T013.
- [X] T020 [P] Verificar existencia de `assets/characters/antonio_rafael/walk_lab/previews/walking_left_to_right_20f_contact_sheet.png`; criterio: preview right-facing encontrado ou pendencia registrada; dependencias: T013.
- [X] T021 [P] Verificar existencia de `assets/characters/antonio_rafael/walk_lab/previews/walking_right_to_left_20f_contact_sheet.png`; criterio: preview left-facing encontrado ou pendencia registrada; dependencias: T013.
- [X] T022 [P] Verificar existencia de `scenes/test/WalkSheet20FrameTest.tscn` e `scripts/test/walk_sheet_20_frame_test_controller.gd`; criterio: cena/script right-facing encontrados ou pendencia registrada; dependencias: T013.
- [X] T023 [P] Verificar existencia de `scenes/test/WalkSheetLeft20FrameTest.tscn` e `scripts/test/walk_sheet_left_20_frame_test_controller.gd`; criterio: cena/script left-facing encontrados ou pendencia registrada; dependencias: T013.
- [X] T024 Consolidar pendencias de insumos em `docs/technical/walk-cycle-lateral-normalization-manifest-v1.md`; criterio: arquivos ausentes marcados sem criar substitutos silenciosos; dependencias: T014-T023.

---

## Phase 3: Diagnostico tecnico dos frames right-facing

**Goal [US1]**: Avaliar o conjunto `right_20f` com criterios tecnicos completos.

**Independent Test**: O relatorio deve permitir confirmar que os 24 frames foram avaliados com status de baseline, escala, enquadramento, canvas, leitura visual e loop.

- [X] T025 [US1] Contar os frames `frame_01.png` a `frame_24.png` em `assets/characters/antonio_rafael/walk_lab/frames/right_20f/`; criterio: total esperado 24 ou divergencia registrada; dependencias: T024.
- [X] T026 [US1] Medir largura, altura, modo de cor e alpha de todos os PNGs em `assets/characters/antonio_rafael/walk_lab/frames/right_20f/`; criterio: metadados registrados no manifesto; dependencias: T025.
- [X] T027 [US1] Detectar fundo magenta nos frames de `assets/characters/antonio_rafael/walk_lab/frames/right_20f/`; criterio: status de magenta por frame registrado; dependencias: T026.
- [X] T028 [US1] Calcular bounding box visivel dos personagens em `assets/characters/antonio_rafael/walk_lab/frames/right_20f/`; criterio: bounds por frame registrados; dependencias: T026.
- [X] T029 [US1] Estimar baseline dos pes em `assets/characters/antonio_rafael/walk_lab/frames/right_20f/`; criterio: baseline e variacao por frame registrados; dependencias: T028.
- [X] T030 [US1] Estimar centro horizontal e altura visivel em `assets/characters/antonio_rafael/walk_lab/frames/right_20f/`; criterio: centro X, altura e variacao de escala registrados; dependencias: T028.
- [X] T031 [US1] Marcar `frame_21.png` a `frame_24.png` em `assets/characters/antonio_rafael/walk_lab/frames/right_20f/` como ponte de loop baseada em `frame_06.png` a `frame_09.png`; criterio: duplicidade intencional registrada sem tratar como movimento unico; dependencias: T025.
- [X] T032 [US1] Avaliar leitura visual e loop do conjunto `assets/characters/antonio_rafael/walk_lab/frames/right_20f/`; criterio: pontos fortes, tremores e limitacoes registrados em `docs/art/walk-cycle-lateral-review-v1.md`; dependencias: T025-T031.

---

## Phase 4: Diagnostico tecnico dos frames left-facing

**Goal [US1]**: Avaliar o conjunto `left_20f` com os mesmos criterios usados no lado direito.

**Independent Test**: O relatorio deve mostrar que `left_20f` recebeu os mesmos checks e que sua origem como 24 frames reais foi registrada.

- [X] T033 [P] [US1] Contar os frames `frame_01.png` a `frame_24.png` em `assets/characters/antonio_rafael/walk_lab/frames/left_20f/`; criterio: total esperado 24 ou divergencia registrada; dependencias: T024.
- [X] T034 [US1] Medir largura, altura, modo de cor e alpha de todos os PNGs em `assets/characters/antonio_rafael/walk_lab/frames/left_20f/`; criterio: metadados registrados no manifesto; dependencias: T033.
- [X] T035 [US1] Detectar fundo magenta nos frames de `assets/characters/antonio_rafael/walk_lab/frames/left_20f/`; criterio: status de magenta por frame registrado; dependencias: T034.
- [X] T036 [US1] Calcular bounding box visivel dos personagens em `assets/characters/antonio_rafael/walk_lab/frames/left_20f/`; criterio: bounds por frame registrados; dependencias: T034.
- [X] T037 [US1] Estimar baseline dos pes em `assets/characters/antonio_rafael/walk_lab/frames/left_20f/`; criterio: baseline e variacao por frame registrados; dependencias: T036.
- [X] T038 [US1] Estimar centro horizontal e altura visivel em `assets/characters/antonio_rafael/walk_lab/frames/left_20f/`; criterio: centro X, altura e variacao de escala registrados; dependencias: T036.
- [X] T039 [US1] Registrar que `assets/characters/antonio_rafael/walk_lab/frames/left_20f/` usa 24 frames reais da spritesheet; criterio: diferenca contra right-facing documentada no manifesto; dependencias: T033.
- [X] T040 [US1] Avaliar leitura visual e loop do conjunto `assets/characters/antonio_rafael/walk_lab/frames/left_20f/`; criterio: pontos fortes, tremores e limitacoes registrados em `docs/art/walk-cycle-lateral-review-v1.md`; dependencias: T033-T039.

---

## Phase 5: Definicao de normalizacao nao destrutiva

**Goal [US2]**: Definir criterios tecnicos antes de criar qualquer frame normalizado.

**Independent Test**: A decisao de normalizacao deve explicar canvas, baseline, centro, fundo e escala sem sobrescrever os frames originais.

- [X] T041 [US2] Definir canvas alvo em `docs/technical/walk-cycle-lateral-normalization-v1.md`; criterio: tamanho final e motivo registrados; dependencias: T025-T040.
- [X] T042 [US2] Definir baseline alvo em `docs/technical/walk-cycle-lateral-normalization-v1.md`; criterio: baseline e tolerancia registrados; dependencias: T029,T037.
- [X] T043 [US2] Definir centro X alvo em `docs/technical/walk-cycle-lateral-normalization-v1.md`; criterio: metodo de centralizacao registrado; dependencias: T030,T038.
- [X] T044 [US2] Definir estrategia de fundo em `docs/technical/walk-cycle-lateral-normalization-v1.md`; criterio: `keep_magenta` ou `safe_magenta_to_alpha` documentado com justificativa; dependencias: T027,T035.
- [X] T045 [US2] Definir estrategia de preservacao de pixel art em `docs/technical/walk-cycle-lateral-normalization-v1.md`; criterio: padding/crop permitido e blur/redimensionamento destrutivo proibido; dependencias: T041-T044.
- [X] T046 [US2] Definir FPS recomendado em `docs/technical/walk-cycle-lateral-normalization-v1.md`; criterio: FPS proposto e relacao com os testes existentes registrados; dependencias: T032,T040.
- [X] T047 [US2] Criar a estrutura planejada `assets/characters/antonio_rafael/walk_lab/normalized/right/`, `assets/characters/antonio_rafael/walk_lab/normalized/left/` e `assets/characters/antonio_rafael/walk_lab/normalized/previews/`; criterio: pastas existem sem alterar originais; dependencias: T041-T046.

---

## Phase 6: Criacao de frames normalizados em pasta separada

**Goal [US2]**: Criar outputs normalizados mantendo rastreabilidade com os frames de entrada.

**Independent Test**: Os frames normalizados devem existir em `walk_lab/normalized/`, com ordem preservada e manifesto mapeando cada output para o input.

- [X] T048 [US2] Gerar `assets/characters/antonio_rafael/walk_lab/normalized/right/frame_01.png` a `frame_24.png`; criterio: 24 frames criados sem sobrescrever `frames/right_20f/`; dependencias: T047.
- [X] T049 [US2] Gerar `assets/characters/antonio_rafael/walk_lab/normalized/left/frame_01.png` a `frame_24.png`; criterio: 24 frames criados sem sobrescrever `frames/left_20f/`; dependencias: T047.
- [X] T050 [US2] Validar PNG/RGBA e dimensoes dos frames em `assets/characters/antonio_rafael/walk_lab/normalized/right/`; criterio: todos os frames passam ou falhas sao registradas; dependencias: T048.
- [X] T051 [US2] Validar PNG/RGBA e dimensoes dos frames em `assets/characters/antonio_rafael/walk_lab/normalized/left/`; criterio: todos os frames passam ou falhas sao registradas; dependencias: T049.
- [X] T052 [US2] Registrar rastreabilidade right-facing em `docs/technical/walk-cycle-lateral-normalization-manifest-v1.md`; criterio: cada frame normalizado aponta para seu input e frames 21-24 mantem nota de ponte; dependencias: T048,T050.
- [X] T053 [US2] Registrar rastreabilidade left-facing em `docs/technical/walk-cycle-lateral-normalization-manifest-v1.md`; criterio: cada frame normalizado aponta para seu input real; dependencias: T049,T051.
- [X] T054 [US2] Confirmar que `assets/characters/antonio_rafael/walk_lab/source/` e `assets/characters/antonio_rafael/walk_lab/frames/` nao foram sobrescritos; criterio: originais permanecem no local e com contagem esperada; dependencias: T048-T053.

---

## Phase 7: Criacao de previews/contact sheets/GIFs opcionais

**Goal [US3]**: Criar material visual comparavel para revisao humana.

**Independent Test**: O usuario deve conseguir comparar os dois lados usando previews gerados sem abrir o Player.

- [X] T055 [US3] Gerar `assets/characters/antonio_rafael/walk_lab/normalized/previews/right_24f_normalized_contact_sheet.png`; criterio: contact sheet mostra 24 frames right-facing normalizados; dependencias: T048,T050.
- [X] T056 [US3] Gerar `assets/characters/antonio_rafael/walk_lab/normalized/previews/left_24f_normalized_contact_sheet.png`; criterio: contact sheet mostra 24 frames left-facing normalizados; dependencias: T049,T051.
- [X] T057 [US3] Gerar `assets/characters/antonio_rafael/walk_lab/normalized/previews/lateral_walk_comparison_v1.png`; criterio: comparativo mostra right-facing e left-facing em condicoes equivalentes; dependencias: T055,T056.
- [X] T058 [P] [US3] Gerar `assets/characters/antonio_rafael/walk_lab/normalized/previews/right_24f_normalized_preview.gif` se houver ferramenta segura; criterio: GIF criado ou pendencia documentada sem falhar a feature; dependencias: T048,T050.
- [X] T059 [P] [US3] Gerar `assets/characters/antonio_rafael/walk_lab/normalized/previews/left_24f_normalized_preview.gif` se houver ferramenta segura; criterio: GIF criado ou pendencia documentada sem falhar a feature; dependencias: T049,T051.

---

## Phase 8: Atualizacao de SpriteFrames/cenas experimentais, se necessario

**Goal [US3]**: Permitir validacao isolada no Godot se os previews nao forem suficientes.

**Independent Test**: A cena experimental, se criada, abre separada do Player e permite revisar os dois lados sem gameplay.

- [X] T060 [US3] Decidir se `assets/characters/antonio_rafael/walk_lab/animations/walking_right_24f_normalized_spriteframes.tres` e necessario; criterio: decisao registrada em `docs/technical/walk-cycle-lateral-normalization-v1.md`; dependencias: T048,T055.
- [X] T061 [US3] Criar `assets/characters/antonio_rafael/walk_lab/animations/walking_right_24f_normalized_spriteframes.tres` somente se T060 aprovar; criterio: recurso experimental referencia 24 frames normalizados right-facing; dependencias: T060.
- [X] T062 [US3] Decidir se `assets/characters/antonio_rafael/walk_lab/animations/walking_left_24f_normalized_spriteframes.tres` e necessario; criterio: decisao registrada em `docs/technical/walk-cycle-lateral-normalization-v1.md`; dependencias: T049,T056.
- [X] T063 [US3] Criar `assets/characters/antonio_rafael/walk_lab/animations/walking_left_24f_normalized_spriteframes.tres` somente se T062 aprovar; criterio: recurso experimental referencia 24 frames normalizados left-facing; dependencias: T062.
- [X] T064 [US3] Decidir se `scenes/test/WalkLateralNormalizedTest.tscn` e `scripts/test/walk_lateral_normalized_test_controller.gd` sao necessarios; criterio: decisao registrada em `docs/technical/walk-cycle-lateral-normalization-v1.md`; dependencias: T057,T060,T062.
- [X] T065 [US3] Criar `scenes/test/WalkLateralNormalizedTest.tscn` e `scripts/test/walk_lateral_normalized_test_controller.gd` somente se T064 aprovar; criterio: cena isolada, manual, sem Player, sem colisao e sem gameplay; dependencias: T064.

---

## Phase 9: Documentacao tecnica e artistica

**Purpose**: Registrar diagnostico, normalizacao, manifestos e revisao visual.

- [X] T066 Criar `docs/technical/walk-cycle-lateral-normalization-v1.md`; criterio: objetivo, entradas, diagnosticos, canvas, baseline, escala, fundo, alpha, FPS, limitacoes e confirmacao de nao integracao registrados; dependencias: T041-T065.
- [X] T067 Criar `docs/technical/walk-cycle-lateral-normalization-manifest-v1.md`; criterio: lista de inputs, outputs, dimensoes, modo de cor, baseline, escala, transparencia e previews registrada; dependencias: T024-T065.
- [X] T068 Criar `docs/art/walk-cycle-lateral-review-v1.md`; criterio: avaliacao visual comparativa, pontos fortes, limitacoes e prontidao futura documentadas; dependencias: T032,T040,T057.
- [X] T069 [P] Atualizar `docs/art/codex-image-walk-lab-v1.md` se necessario; criterio: feature 018 registrada como normalizacao experimental sem walk oficial; dependencias: T066-T068.
- [X] T070 [P] Atualizar `docs/technical/walk-lab-validation-v1.md` se necessario; criterio: status dos dois lados e pendencias de validacao registradas; dependencias: T066-T068.
- [X] T071 [P] Atualizar `docs/technical/codex-image-walk-pipeline-v1.md` se necessario; criterio: etapa lateral normalization adicionada ao pipeline experimental; dependencias: T066-T068.
- [X] T072 [P] Atualizar `docs/technical/walk-sheet-20f-test-v1.md` se necessario; criterio: right-facing aponta para normalizacao e mantem nota de ponte 21-24; dependencias: T066-T068.
- [X] T073 [P] Atualizar `docs/technical/walk-sheet-left-20f-test-v1.md` se necessario; criterio: left-facing aponta para normalizacao e mantem nota de 24 frames reais; dependencias: T066-T068.
- [X] T074 Validar que todos os documentos criados/atualizados afirmam que nao existe walk oficial e que nada foi integrado ao Player; criterio: declaracoes obrigatorias presentes; dependencias: T066-T073.

---

## Phase 10: Validacao de escopo seguro

**Purpose**: Garantir que a feature nao contaminou runtime, Player, rig oficial ou arquivos de controle do repositorio.

- [X] T075 Validar leitura dos frames em `assets/characters/antonio_rafael/walk_lab/frames/right_20f/` e `assets/characters/antonio_rafael/walk_lab/frames/left_20f/`; criterio: ambos os lados lidos ou divergencia registrada; dependencias: T025,T033.
- [X] T076 Validar que nenhum frame original em `assets/characters/antonio_rafael/walk_lab/frames/right_20f/` ou `assets/characters/antonio_rafael/walk_lab/frames/left_20f/` foi destruido; criterio: originais preservados; dependencias: T054.
- [X] T077 Validar que os frames normalizados existem somente em `assets/characters/antonio_rafael/walk_lab/normalized/`; criterio: nenhum output foi criado em pasta oficial de sprites; dependencias: T048-T054.
- [X] T078 Validar que previews comparativos existem em `assets/characters/antonio_rafael/walk_lab/normalized/previews/`; criterio: contact sheets e comparativo criados ou pendencias registradas; dependencias: T055-T059.
- [X] T079 Validar SpriteFrames normalizados em `assets/characters/antonio_rafael/walk_lab/animations/` se criados; criterio: recursos experimentais referenciam apenas normalized frames; dependencias: T061,T063.
- [X] T080 Validar `scenes/test/WalkLateralNormalizedTest.tscn` no Godot se criada; criterio: cena abre como laboratorio isolado ou validacao ao vivo fica registrada como pendente; dependencias: T065.
- [X] T081 Executar `git diff --name-status -- "scenes/player/Player.tscn"`; criterio: sem alteracao rastreada no Player; dependencias: T066-T080.
- [X] T082 Executar `git diff --name-status -- "scenes/rig/AntonioRafaelRigLab.tscn"`; criterio: sem alteracao rastreada na cena de rig oficial; dependencias: T066-T080.
- [X] T083 Executar `git diff --name-status -- "scripts/player/*"` e `git diff --name-status -- "scripts/rig/*"`; criterio: sem alteracao rastreada em scripts oficiais; dependencias: T066-T080.
- [X] T084 Executar auditoria de `assets/characters/antonio_rafael/sprites/idle/` e `assets/characters/antonio_rafael/rig/`; criterio: idle oficial e rig oficial sem alteracoes da feature; dependencias: T066-T080.
- [X] T085 Executar `git diff --name-status -- ".gitignore"`; criterio: `.gitignore` sem alteracao; dependencias: T066-T080.
- [X] T086 Executar `git diff --name-status -- "*.uid"`; criterio: `*.uid` sem alteracao rastreada; dependencias: T066-T080.
- [X] T087 Executar `git diff --name-status -- "*.import"` e `git status --short --untracked-files=all`; criterio: `.import` automatico nao foi stageado e qualquer novo untracked ficou fora; dependencias: T066-T080.
- [X] T088 Validar que nao foi criado walk oficial, animacao oficial, gameplay, colisao, inimigo ou integracao no Player; criterio: confirmacao registrada em `docs/technical/walk-cycle-lateral-normalization-v1.md`; dependencias: T081-T087.
- [X] T089 Validar que nao houve commit automatico nem push automatico; criterio: `git log --oneline -3` e status final registrados no relatorio; dependencias: T081-T088.

---

## Phase 11: Gate humano final

**Purpose**: Parar para decisao humana antes de qualquer commit, push, integracao ou promocao de status.

- [X] T090 Apresentar diagnostico right-facing, diagnostico left-facing, frames normalizados, canvas, baseline, fundo/transparencia, previews, GIFs, SpriteFrames/cenas, avaliacao comparativa, docs, escopo seguro, confirmacao de Player/idle/rig intocados, confirmacao de que nao ha walk oficial, confirmacao de que nao houve commit/push, e recomendacao de proxima etapa; criterio: usuario recebe pacote completo para aprovar, aprovar parcialmente ou reprovar; dependencias: T075-T089.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1**: sem dependencias.
- **Phase 2**: depende da leitura e auditoria inicial da Phase 1.
- **Phase 3 e Phase 4**: dependem da auditoria dos assets da Phase 2 e podem ser executadas em paralelo por lados diferentes.
- **Phase 5**: depende dos diagnosticos right-facing e left-facing.
- **Phase 6**: depende da definicao de normalizacao.
- **Phase 7**: depende dos frames normalizados.
- **Phase 8**: depende dos previews e da decisao sobre necessidade de recursos Godot.
- **Phase 9**: depende dos diagnosticos, outputs e previews.
- **Phase 10**: depende dos artefatos e documentos gerados.
- **Phase 11**: depende da validacao de escopo seguro.

### User Story Dependencies

- **US1 (P1)**: pode iniciar depois da Phase 2; nao depende de US2/US3.
- **US2 (P2)**: depende do diagnostico da US1.
- **US3 (P3)**: depende dos outputs ou decisoes da US2.

### Parallel Opportunities

- T003-T012 podem ser paralelas depois de T001.
- T016-T023 podem ser paralelas depois de T013.
- Partes de diagnostico right-facing e left-facing podem ser paralelas entre Phase 3 e Phase 4.
- T058 e T059 podem ser paralelas se a ferramenta de GIF existir.
- T069-T073 podem ser paralelas depois dos documentos principais.

---

## Parallel Example: US1

```text
Task: "T026 medir metadados de right_20f"
Task: "T034 medir metadados de left_20f"
Task: "T031 marcar ponte de loop right-facing"
Task: "T039 registrar 24 frames reais left-facing"
```

---

## Parallel Example: US3

```text
Task: "T055 gerar contact sheet right normalized"
Task: "T056 gerar contact sheet left normalized"
Task: "T058 gerar GIF right se viavel"
Task: "T059 gerar GIF left se viavel"
```

---

## Implementation Strategy

### MVP First (US1 Only)

1. Complete Phase 1 and Phase 2.
2. Complete Phase 3 and Phase 4.
3. Stop and validate that both sides have equal diagnostic coverage.

### Incremental Delivery

1. US1: diagnostic comparison only.
2. US2: non-destructive normalized outputs.
3. US3: previews and optional Godot lab resources.
4. Final validation and human gate.

### Safety Rules

- Do not use `git add .`.
- Do not use `git add -A`.
- Do not use `git commit -am`.
- Do not use `git clean`.
- Do not stage by broad glob.
- Do not stage entire directories.
- Do not alter `scenes/player/Player.tscn`.
- Do not alter `scenes/rig/AntonioRafaelRigLab.tscn`.
- Do not alter `scripts/player/` or `scripts/rig/`.
- Do not alter `assets/characters/antonio_rafael/sprites/idle/`.
- Do not alter `assets/characters/antonio_rafael/rig/`.
- Do not alter `.gitignore`, `*.uid`, or automatic `.import` files.
- Do not declare an official walk cycle.
- Do not integrate anything into Player.

