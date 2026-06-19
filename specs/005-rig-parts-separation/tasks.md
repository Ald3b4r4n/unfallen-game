# Tasks: Separacao de Partes do Rig Tecnico 2D do SGT Antonio Rafael

**Input**: Design documents from `specs/005-rig-parts-separation/`  
**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, `quickstart.md`, Base Idle Oficial V1 aprovada  
**Scope**: Gerar lista acionavel para separar partes visuais do rig tecnico 2D na direcao `front_right`; nao implementar nesta etapa.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Pode rodar em paralelo quando usa arquivos diferentes e nao depende de tarefas incompletas.
- **[US1]**: Separar partes visuais principais.
- **[US2]**: Validar fidelidade visual da Base Idle Oficial V1.
- **[US3]**: Preparar uso no laboratorio de rig.

## Phase 1: Preparacao e Validacao da Base

**Purpose**: Confirmar documentos, referencia visual, limites de escopo e estado seguro antes de qualquer criacao de partes.

- [x] T001 Ler constituicao do projeto em `.specify/memory/constitution.md`; criterio: principios Spec First, Gate Humano, Character First, Pixel Art HD e Engine/Tecnologia registrados como restricoes ativas; deps: nenhuma.
- [x] T002 Ler especificacao da feature 005 em `specs/005-rig-parts-separation/spec.md`; criterio: historias, requisitos e proibicoes da separacao de partes compreendidos; deps: T001.
- [x] T003 Ler plano tecnico em `specs/005-rig-parts-separation/plan.md`; criterio: direcao primaria `front_right`, escopo de arquivos e gate humano confirmados; deps: T002.
- [x] T004 [P] Ler decisoes de pesquisa em `specs/005-rig-parts-separation/research.md`; criterio: decisoes sobre `front_right`, PNGs individuais, manifesto e Player fora de escopo confirmadas; deps: T003.
- [x] T005 [P] Ler modelo de dados em `specs/005-rig-parts-separation/data-model.md`; criterio: entidades `RigPart`, `PartsManifest`, `RecompositionPreview` e `HumanValidationGate` entendidas; deps: T003.
- [x] T006 [P] Ler quickstart em `specs/005-rig-parts-separation/quickstart.md`; criterio: validacoes de arquivos, identidade, manifesto, laboratorio e escopo compreendidas; deps: T003.
- [x] T007 Confirmar existencia dos 8 idles aprovados em `assets/characters/antonio_rafael/sprites/idle/`; criterio: todos os caminhos da Base Idle Oficial V1 existem; deps: T004, T005, T006.
- [x] T008 Confirmar referencia mestre `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`; criterio: arquivo existe antes de qualquer separacao; deps: T007.
- [x] T009 Validar dimensao do sprite base `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`; criterio: imagem mede exatamente `128x128`; deps: T008.
- [x] T010 Validar formato do sprite base `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`; criterio: imagem e PNG `RGBA`; deps: T008.
- [x] T011 Validar transparencia do sprite base `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`; criterio: alpha valido e sem fundo verde opaco; deps: T008.
- [x] T012 Confirmar restricao de escopo em `specs/005-rig-parts-separation/plan.md`; criterio: feature limitada a separacao de partes para rig, sem walk cycle, gameplay, Player ou scripts do Player; deps: T003.
- [x] T013 Capturar estado inicial de `scenes/player/Player.tscn`; criterio: arquivo identificado como fora do escopo e protegido contra alteracao; deps: T012.
- [x] T014 Capturar hashes/metadata dos idles em `assets/characters/antonio_rafael/sprites/idle/*.png`; criterio: baseline registrado para validar que idles aprovados nao foram alterados; deps: T007.

## Phase 2: Estrutura de Pastas do Rig

**Purpose**: Preparar a estrutura de pastas de forma nao destrutiva, sem mover idles e sem reorganizar material existente.

- [x] T015 Criar ou verificar pasta raiz `assets/characters/antonio_rafael/rig/`; criterio: pasta existe sem remover ou reorganizar conteudo anterior; deps: T014.
- [x] T016 Criar ou verificar pasta `assets/characters/antonio_rafael/rig/parts/`; criterio: pasta existe para partes do rig; deps: T015.
- [x] T017 Criar ou verificar pasta `assets/characters/antonio_rafael/rig/parts/front_right/`; criterio: pasta existe para partes da direcao primaria; deps: T016.
- [x] T018 [P] Criar ou verificar pasta `assets/characters/antonio_rafael/rig/assembled/`; criterio: pasta existe para recomposicoes tecnicas; deps: T015.
- [x] T019 [P] Criar ou verificar pasta `assets/characters/antonio_rafael/rig/exports/`; criterio: pasta existe para exports/intermediarios futuros; deps: T015.
- [x] T020 [P] Criar ou verificar pasta `assets/characters/antonio_rafael/rig/previews/`; criterio: pasta existe para previews humanos; deps: T015.
- [x] T021 [P] Verificar pasta `scenes/rig/`; criterio: pasta existe e preserva `AntonioRafaelRigLab.tscn`; deps: T015.
- [x] T022 [P] Verificar pasta `scripts/rig/`; criterio: pasta existe para scripts tecnicos isolados se necessarios, sem tocar scripts do Player; deps: T015.

## Phase 3: Separacao das Partes Visuais

**Goal**: Produzir as partes visuais obrigatorias da direcao `front_right` com transparencia real e fidelidade a Base Idle Oficial V1.  
**Independent Test**: Abrir a pasta `assets/characters/antonio_rafael/rig/parts/front_right/` e verificar que as partes obrigatorias existem, sao PNG `RGBA`, sem labels/fundo verde e visualmente compatíveis com `antonio_rafael_idle_front_right.png`.

- [x] T023 [US1] Definir mapa de cortes e sobreposicoes para `assets/characters/antonio_rafael/rig/parts/front_right/`; criterio: estrategia de separacao evita buracos visuais e preserva margens para articulacao; deps: T017.
- [x] T024 [P] [US1] Criar parte `head.png` em `assets/characters/antonio_rafael/rig/parts/front_right/head.png`; criterio: PNG `RGBA`, transparente, sem label, preserva rosto, cabelo e oculos quando nao separados; deps: T023.
- [x] T025 [P] [US1] Criar parte `neck.png` em `assets/characters/antonio_rafael/rig/parts/front_right/neck.png`; criterio: PNG `RGBA`, transparente, sem label, encaixa entre cabeca e tronco; deps: T023.
- [x] T026 [P] [US1] Criar parte `torso_base.png` em `assets/characters/antonio_rafael/rig/parts/front_right/torso_base.png`; criterio: PNG `RGBA`, transparente, sem label, preserva volume do tronco sob o colete; deps: T023.
- [x] T027 [P] [US1] Criar parte `vest.png` em `assets/characters/antonio_rafael/rig/parts/front_right/vest.png`; criterio: PNG `RGBA`, transparente, sem label, preserva colete tatico e paleta chumbo/preto; deps: T023.
- [x] T028 [P] [US1] Criar parte `backpack.png` em `assets/characters/antonio_rafael/rig/parts/front_right/backpack.png`; criterio: PNG `RGBA`, transparente, sem label, preserva mochila quando visivel na direcao; deps: T023.
- [x] T029 [P] [US1] Criar parte `upper_arm_left.png` em `assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_left.png`; criterio: PNG `RGBA`, transparente, sem label, com margem para rotacao no ombro; deps: T023.
- [x] T030 [P] [US1] Criar parte `upper_arm_right.png` em `assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_right.png`; criterio: PNG `RGBA`, transparente, sem label, com margem para rotacao no ombro; deps: T023.
- [x] T031 [P] [US1] Criar parte `forearm_left.png` em `assets/characters/antonio_rafael/rig/parts/front_right/forearm_left.png`; criterio: PNG `RGBA`, transparente, sem label, com margem para rotacao no cotovelo; deps: T023.
- [x] T032 [P] [US1] Criar parte `forearm_right.png` em `assets/characters/antonio_rafael/rig/parts/front_right/forearm_right.png`; criterio: PNG `RGBA`, transparente, sem label, com margem para rotacao no cotovelo; deps: T023.
- [x] T033 [P] [US1] Criar parte `hand_left.png` em `assets/characters/antonio_rafael/rig/parts/front_right/hand_left.png`; criterio: PNG `RGBA`, transparente, sem label, preserva tom de pele e encaixe no punho; deps: T023.
- [x] T034 [P] [US1] Criar parte `hand_right.png` em `assets/characters/antonio_rafael/rig/parts/front_right/hand_right.png`; criterio: PNG `RGBA`, transparente, sem label, preserva tom de pele e encaixe no punho; deps: T023.
- [x] T035 [P] [US1] Criar parte `pelvis.png` em `assets/characters/antonio_rafael/rig/parts/front_right/pelvis.png`; criterio: PNG `RGBA`, transparente, sem label, encaixa tronco e coxas; deps: T023.
- [x] T036 [P] [US1] Criar parte `thigh_left.png` em `assets/characters/antonio_rafael/rig/parts/front_right/thigh_left.png`; criterio: PNG `RGBA`, transparente, sem label, com margem para articulacao no quadril; deps: T023.
- [x] T037 [P] [US1] Criar parte `thigh_right.png` em `assets/characters/antonio_rafael/rig/parts/front_right/thigh_right.png`; criterio: PNG `RGBA`, transparente, sem label, com margem para articulacao no quadril; deps: T023.
- [x] T038 [P] [US1] Criar parte `shin_left.png` em `assets/characters/antonio_rafael/rig/parts/front_right/shin_left.png`; criterio: PNG `RGBA`, transparente, sem label, com margem para articulacao no joelho; deps: T023.
- [x] T039 [P] [US1] Criar parte `shin_right.png` em `assets/characters/antonio_rafael/rig/parts/front_right/shin_right.png`; criterio: PNG `RGBA`, transparente, sem label, com margem para articulacao no joelho; deps: T023.
- [x] T040 [P] [US1] Criar parte `boot_left.png` em `assets/characters/antonio_rafael/rig/parts/front_right/boot_left.png`; criterio: PNG `RGBA`, transparente, sem label, preserva bota preta e encaixe no tornozelo; deps: T023.
- [x] T041 [P] [US1] Criar parte `boot_right.png` em `assets/characters/antonio_rafael/rig/parts/front_right/boot_right.png`; criterio: PNG `RGBA`, transparente, sem label, preserva bota preta e encaixe no tornozelo; deps: T023.
- [x] T042 [US1] Avaliar partes opcionais em `assets/characters/antonio_rafael/rig/parts/front_right/`; criterio: decidir e registrar se `glasses`, `radio`, `belt`, `holster`, `goias_patch` e `sergeant_chevron` ajudam sem fragilizar a arte; deps: T024, T027, T028, T029, T030.
- [x] T043 [P] [US1] Criar parte opcional `glasses.png` em `assets/characters/antonio_rafael/rig/parts/front_right/glasses.png` se viavel; criterio: PNG `RGBA`, transparente, sem label, ou limitacao registrada se nao viavel; deps: T042.
- [x] T044 [P] [US1] Criar parte opcional `radio.png` em `assets/characters/antonio_rafael/rig/parts/front_right/radio.png` se viavel; criterio: PNG `RGBA`, transparente, sem label, ou limitacao registrada se nao viavel; deps: T042.
- [x] T045 [P] [US1] Criar parte opcional `belt.png` em `assets/characters/antonio_rafael/rig/parts/front_right/belt.png` se viavel; criterio: PNG `RGBA`, transparente, sem label, ou limitacao registrada se nao viavel; deps: T042.
- [x] T046 [P] [US1] Criar parte opcional `holster.png` em `assets/characters/antonio_rafael/rig/parts/front_right/holster.png` se viavel; criterio: PNG `RGBA`, transparente, sem label, sem arma funcional/em destaque, ou limitacao registrada se nao viavel; deps: T042.
- [x] T047 [P] [US1] Criar parte opcional `goias_patch.png` em `assets/characters/antonio_rafael/rig/parts/front_right/goias_patch.png` se viavel; criterio: PNG `RGBA`, transparente, sem label, preserva patch quando visivel, ou limitacao registrada se nao viavel; deps: T042.
- [x] T048 [P] [US1] Criar parte opcional `sergeant_chevron.png` em `assets/characters/antonio_rafael/rig/parts/front_right/sergeant_chevron.png` se viavel; criterio: PNG `RGBA`, transparente, sem label, preserva divisa quando visivel, ou limitacao registrada se nao viavel; deps: T042.

## Phase 4: Manifesto Tecnico das Partes

**Goal**: Registrar rastreabilidade, pivos, dependencias e status de cada parte para montagem futura do rig.

- [x] T049 [US3] Criar estrutura inicial do manifesto em `assets/characters/antonio_rafael/rig/parts_manifest.json`; criterio: JSON contem personagem, feature, direcao primaria `front_right`, referencias base, status e lista de partes; deps: T024-T041.
- [x] T050 [US3] Registrar metadados das partes obrigatorias em `assets/characters/antonio_rafael/rig/parts_manifest.json`; criterio: cada uma das 18 partes possui nome, caminho, direcao de origem, tamanho, observacao, dependencia visual e status; deps: T049.
- [x] T051 [US3] Registrar pivos das partes obrigatorias em `assets/characters/antonio_rafael/rig/parts_manifest.json`; criterio: pivos seguem cabeca/base do pescoco, braco/ombro, antebraco/cotovelo, mao/punho, coxa/quadril, canela/joelho, bota/tornozelo; deps: T050.
- [x] T052 [US3] Registrar partes opcionais e limitacoes em `assets/characters/antonio_rafael/rig/parts_manifest.json`; criterio: opcionais criadas ou rejeitadas possuem justificativa e status auditavel; deps: T043, T044, T045, T046, T047, T048.
- [x] T053 [US3] Validar sintaxe e completude do manifesto `assets/characters/antonio_rafael/rig/parts_manifest.json`; criterio: JSON parseavel e todos os campos obrigatorios do plano existem; deps: T051, T052.

## Phase 5: Preview de Validacao Humana

**Goal**: Gerar material visual para avaliar partes separadas, recomposicao e comparacao com a Base Idle Oficial V1.

- [x] T054 [US2] Planejar layout do preview em `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png`; criterio: layout inclui referencia idle, grade de partes e recomposicao aproximada; deps: T053.
- [x] T055 [US2] Gerar recomposicao aproximada em `assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png`; criterio: partes obrigatorias recompostas em pose aproximada da referencia `front_right`; deps: T024-T041.
- [x] T056 [US2] Gerar preview humano em `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png`; criterio: preview mostra partes, recomposicao e comparacao com Base Idle Oficial V1; deps: T054, T055.
- [x] T057 [US2] Confirmar que labels existem apenas no preview `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png`; criterio: nenhum PNG individual em `rig/parts/front_right/` contem label/texto; deps: T056.

## Phase 6: Laboratorio de Rig

**Goal**: Preparar a cena tecnica isolada para visualizar referencias, partes, pivos e recomposicao sem substituir o Player oficial.

- [x] T058 [US3] Inspecionar cena de laboratorio `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: estrutura atual entendida antes de qualquer edicao; deps: T053.
- [x] T059 [US3] Atualizar referencia visual `front_right` em `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: cena mostra `antonio_rafael_idle_front_right.png` como referencia mestre; deps: T058.
- [x] T060 [US3] Adicionar partes separadas em `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: cena instancia/posiciona partes de `rig/parts/front_right/` sem instanciar `Player.tscn`; deps: T024-T041, T059.
- [x] T061 [US3] Adicionar marcadores/placeholders de pivo em `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: pivos do manifesto podem ser visualizados como guia tecnico; deps: T051, T060.
- [x] T062 [US3] Adicionar recomposicao aproximada em `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: cena permite comparar recomposicao com idle `front_right`; deps: T055, T060.
- [x] T063 [US3] Validar isolamento da cena `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: cena nao instancia `scenes/player/Player.tscn` e nao altera scripts do Player; deps: T062.

## Phase 7: Validacao Tecnica

**Purpose**: Verificar qualidade dos assets, manifesto, preview, cena e limites de escopo antes de documentar.

- [x] T064 Validar existencia das partes obrigatorias em `assets/characters/antonio_rafael/rig/parts/front_right/`; criterio: 18 partes obrigatorias existem ou possuem limitacao justificada no manifesto; deps: T053.
- [x] T065 [P] Validar PNG/RGBA das partes em `assets/characters/antonio_rafael/rig/parts/front_right/*.png`; criterio: todos os arquivos de parte sao PNG `RGBA`; deps: T064.
- [x] T066 [P] Validar transparencia das partes em `assets/characters/antonio_rafael/rig/parts/front_right/*.png`; criterio: todos possuem alpha transparente real; deps: T064.
- [x] T067 [P] Validar ausencia de fundo verde em `assets/characters/antonio_rafael/rig/parts/front_right/*.png`; criterio: zero partes com fundo verde opaco; deps: T064.
- [x] T068 [P] Validar ausencia de labels/textos nas partes em `assets/characters/antonio_rafael/rig/parts/front_right/*.png`; criterio: zero partes com label, texto externo, direcao escrita ou grid; deps: T064.
- [x] T069 [US2] Validar identidade visual das partes em `assets/characters/antonio_rafael/rig/parts/front_right/`; criterio: partes preservam rosto, oculos, cabelo, pele, uniforme, colete, mochila, paleta, proporcao e identidade PMGO/sobrevivente; deps: T065, T066, T067, T068.
- [x] T070 [US2] Validar recomposicao aproximada em `assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png`; criterio: pose recomposta se parece com o SGT Antonio Rafael e nao gera buracos visuais graves; deps: T055, T069.
- [x] T071 [US3] Validar manifesto `assets/characters/antonio_rafael/rig/parts_manifest.json`; criterio: manifesto existe, e cada parte possui nome, caminho, origem, tamanho, pivo, observacao, dependencia e status; deps: T053.
- [x] T072 [US2] Validar preview `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png`; criterio: preview existe e mostra partes, recomposicao e comparacao com a Base Idle Oficial V1; deps: T056.
- [x] T073 [US3] Validar laboratorio `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: cena e isolada, mostra referencia/partes/pivos e nao substitui Player; deps: T063.
- [x] T074 Validar integridade dos idles em `assets/characters/antonio_rafael/sprites/idle/*.png`; criterio: hashes/metadata batem com baseline de T014; deps: T065, T066, T067, T068.
- [x] T075 Validar ausencia de alteracao no Player em `scenes/player/Player.tscn`; criterio: arquivo permanece igual ao baseline de T013; deps: T073.
- [x] T076 Validar ausencia de alteracao nos scripts do Player em `scripts/player/player_controller.gd` e `scripts/player/player_animation_controller.gd`; criterio: nenhum script do Player foi alterado; deps: T073.
- [x] T077 Validar ausencia de sistemas fora do escopo no repositorio; criterio: nao foram criados walk cycle final, gameplay, combate, armas, zumbis, inventario, HUD, save/load, mundo, som ou exportacao final; deps: T074, T075, T076.

## Phase 8: Documentacao

**Purpose**: Registrar origem, direcao, partes, pivos, limitacoes, uso no laboratorio e escopo preservado.

- [x] T078 [P] Atualizar documentacao tecnica em `docs/technical/rig-parts-separation.md`; criterio: documento registra direcao `front_right`, partes criadas, pivos, manifesto, preview, limitacoes e gate humano; deps: T071, T072.
- [x] T079 [P] Atualizar pipeline de rig em `docs/technical/rig-pipeline.md`; criterio: documento aponta a separacao de partes como etapa anterior a animacoes reais; deps: T071.
- [x] T080 [P] Atualizar pipeline de personagem em `docs/technical/character-pipeline.md`; criterio: documento registra que a separacao prepara rig tecnico sem alterar Player ou gameplay; deps: T077.
- [x] T081 [P] Atualizar ficha artistica em `docs/art/antonio-rafael.md`; criterio: documento registra Base Idle Oficial V1 como referencia mestre e partes `front_right` como material tecnico nao oficial ate validacao; deps: T069, T072.
- [x] T082 [P] Atualizar rastreabilidade em `docs/art/asset-sources.md`; criterio: documento registra origem das partes, manifesto, preview, recomposicao e status pendente de validacao humana; deps: T071, T072.
- [x] T083 Atualizar evidencias de execucao em `specs/005-rig-parts-separation/tasks.md`; criterio: tarefas concluidas sao marcadas apenas apos execucao real e limitacoes/validacoes ficam registradas; deps: T078, T079, T080, T081, T082.

## Phase 9: Gate Humano Final

**Purpose**: Parar para decisao humana antes de aprovar partes, animar, integrar no Player, commitar ou iniciar proxima mecanica.

- [x] T084 Apresentar gate humano final da separacao de partes com `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png`, `assets/characters/antonio_rafael/rig/parts_manifest.json`, lista de partes criadas, arquivos criados/alterados, validacoes, limitacoes, confirmacao de Player/idles intactos, recomendacao de aprovar/aprovar parcialmente/reprovar e confirmacao de que nao houve commit nem push; deps: T083.

## Dependencies & Execution Order

- Phase 1 deve terminar antes de qualquer criacao de pastas ou partes.
- Phase 2 depende da validacao da base e prepara a estrutura nao destrutiva.
- Phase 3 depende da estrutura `rig/parts/front_right/` e entrega o MVP da feature: partes obrigatorias.
- Phase 4 depende das partes criadas para registrar manifesto e pivos.
- Phase 5 depende das partes e manifesto para gerar recomposicao e preview.
- Phase 6 depende das partes, manifesto e preview/recomposicao para atualizar laboratorio.
- Phase 7 depende dos outputs de partes, manifesto, preview e laboratorio.
- Phase 8 depende das validacoes tecnicas.
- Phase 9 depende da documentacao e deve parar para decisao humana.

## User Story Dependencies

- **US1 (P1) Separar Partes Visuais Principais**: depende de Phase 1 e Phase 2; entrega MVP independente com partes PNG em `rig/parts/front_right/`.
- **US2 (P2) Validar Fidelidade Visual da Base Oficial**: depende das partes US1; entrega preview/recomposicao e validacao visual.
- **US3 (P3) Preparar Uso em Laboratorio de Rig**: depende das partes US1 e manifesto; entrega laboratorio isolado com pivos/recomposicao.

## Parallel Opportunities

- T004, T005 e T006 podem rodar em paralelo apos T003.
- T018, T019, T020, T021 e T022 podem rodar em paralelo apos T015.
- T024 a T041 podem rodar em paralelo apos T023, desde que cada tarefa escreva somente sua parte.
- T043 a T048 podem rodar em paralelo apos T042, desde que cada opcional escreva somente seu arquivo ou registre sua propria limitacao.
- T065 a T068 podem rodar em paralelo apos T064.
- T078 a T082 podem rodar em paralelo apos suas validacoes correspondentes.

## Parallel Example: US1

```text
Task: "T024 [US1] Criar head.png em assets/characters/antonio_rafael/rig/parts/front_right/head.png"
Task: "T027 [US1] Criar vest.png em assets/characters/antonio_rafael/rig/parts/front_right/vest.png"
Task: "T040 [US1] Criar boot_left.png em assets/characters/antonio_rafael/rig/parts/front_right/boot_left.png"
```

## Implementation Strategy

### MVP First (US1 Only)

1. Concluir Phase 1 e Phase 2.
2. Executar Phase 3 apenas para as 18 partes obrigatorias.
3. Parar e validar existencia, transparencia e fidelidade minima das partes.
4. Nao criar animacao e nao tocar no Player.

### Incremental Delivery

1. US1: partes obrigatorias em `front_right`.
2. US2: recomposicao e preview de fidelidade.
3. US3: manifesto finalizado e laboratorio isolado com pivos/partes.
4. Phase 7 e Phase 8: validacao e documentacao.
5. Phase 9: gate humano.

## Notes

- Nao implementar durante `/speckit.tasks`.
- Nao gerar partes PNG nesta etapa.
- Nao alterar cenas nesta etapa.
- Nao alterar scripts nesta etapa.
- Nao alterar `Player.tscn`.
- Nao alterar sprites idle aprovados.
- Nao criar walk cycle final.
- Nao fazer commit.
- Nao fazer push.

## Execution Summary - 2026-06-19

- Feature executada na direcao primaria `front_right`.
- Base visual mestre usada: `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`.
- Pastas do rig criadas/validadas de forma nao destrutiva.
- 18 partes obrigatorias criadas em `assets/characters/antonio_rafael/rig/parts/front_right/`.
- Partes obrigatorias criadas: `head.png`, `neck.png`, `torso_base.png`, `vest.png`, `backpack.png`, `upper_arm_left.png`, `upper_arm_right.png`, `forearm_left.png`, `forearm_right.png`, `hand_left.png`, `hand_right.png`, `pelvis.png`, `thigh_left.png`, `thigh_right.png`, `shin_left.png`, `shin_right.png`, `boot_left.png`, `boot_right.png`.
- 4 partes opcionais criadas: `glasses.png`, `belt.png`, `goias_patch.png`, `sergeant_chevron.png`.
- 2 partes opcionais rejeitadas no manifesto: `radio` e `holster`, por baixa legibilidade na referencia `front_right`.
- Manifesto criado em `assets/characters/antonio_rafael/rig/parts_manifest.json`.
- Recomposicao criada em `assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png`.
- Preview humano criado em `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png`.
- Cena de laboratorio atualizada em `scenes/rig/AntonioRafaelRigLab.tscn`, permanecendo isolada e sem referencia ao Player.
- Documentacao criada/atualizada em `docs/technical/rig-parts-separation.md`, `docs/technical/rig-pipeline.md`, `docs/technical/character-pipeline.md`, `docs/art/antonio-rafael.md` e `docs/art/asset-sources.md`.
- Validacao tecnica passou: partes obrigatorias existem, sao PNG `RGBA`, possuem transparencia real, nao possuem fundo verde opaco e o manifesto possui campos obrigatorios.
- Validacao estatica da cena passou: 25 recursos referenciados existem e a cena nao instancia `Player.tscn` nem scripts do Player.
- Validacao ao vivo no Godot nao foi executada porque o executavel Godot nao foi encontrado no PATH desta sessao.
- Base Idle Oficial V1 permaneceu intacta; hashes dos 8 idles conferem com o baseline capturado no inicio da execucao.
- `Player.tscn` ja estava modificado antes desta execucao, mas seu hash permaneceu igual ao baseline capturado no inicio; esta feature nao alterou o Player.
- `player_controller.gd` e `player_animation_controller.gd` permaneceram com os mesmos hashes do baseline desta execucao.
- Limitacoes: `torso_base`, `neck`, `pelvis`, `backpack`, `goias_patch` e `sergeant_chevron` precisam revisao/refinamento manual antes de animacao final.
- Recomendacao: **aprovar parcialmente** como base tecnica de laboratorio, nao como arte final animada.
- Nao houve commit.
- Nao houve push.

## Human Approval Record - 2026-06-19

Decisao humana registrada: a separacao de partes do rig tecnico 2D do SGT Antonio Rafael esta **APROVADA PARCIALMENTE** como `Rig Parts Separation V1`.

Escopo autorizado:

- base tecnica inicial para laboratorio de rig;
- estudo de separacao de partes;
- preparacao para futura montagem de esqueleto/armacao;
- referencia para refinamento manual das partes;
- etapa intermediaria do pipeline "rig tecnico primeiro, sprites finais depois".

Escopo nao autorizado:

- arte final;
- animacao final;
- walk cycle oficial;
- asset final de gameplay;
- substituto do Player runtime;
- base definitiva sem refinamento.

Partes aprovadas parcialmente em `res://assets/characters/antonio_rafael/rig/parts/front_right/`:

- obrigatorias: `head.png`, `neck.png`, `torso_base.png`, `vest.png`, `backpack.png`, `upper_arm_left.png`, `upper_arm_right.png`, `forearm_left.png`, `forearm_right.png`, `hand_left.png`, `hand_right.png`, `pelvis.png`, `thigh_left.png`, `thigh_right.png`, `shin_left.png`, `shin_right.png`, `boot_left.png`, `boot_right.png`;
- opcionais criadas: `glasses.png`, `belt.png`, `goias_patch.png`, `sergeant_chevron.png`;
- opcionais rejeitadas: `radio` e `holster`, por baixa legibilidade na pose `front_right`.

Limitacoes registradas:

- `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron` precisam refinamento manual antes de virar base final de animacao;
- validacao estatica, pois Godot nao estava disponivel no PATH;
- ainda falta validacao visual ao vivo no Godot;
- recomposicao tecnica, nao arte final;
- rig ainda nao animado;
- Player oficial nao deve usar essas partes em runtime.

Auditoria do `Player.tscn`:

- `scenes/player/Player.tscn` aparece modificado no `git status`;
- hash atual: `5AAEF2F318A139F3902D13F7FD91D5AD00317B5554744438D4A0733EB9C06876`, igual ao baseline registrado antes desta rodada documental;
- diff atual contra HEAD mostra apenas reordenacao das entradas `idle_*` em `AnimationLibrary_idle`;
- o arquivo referencia somente os 8 sprites idle aprovados;
- nao ha referencia a rig, partes, manifesto, laboratorio, recomposicao ou `walk_*`;
- nenhuma reversao foi aplicada porque a alteracao e pre-existente e nao integra o rig ao Player.

Confirmacoes:

- nenhum PNG novo foi gerado nesta rodada;
- nenhuma parte criada foi alterada nesta rodada;
- sprites idle aprovados nao foram alterados;
- gameplay, animacao, walk cycle e Player runtime nao foram alterados;
- nao houve commit;
- nao houve push.
