# Tasks: Rig Assembly V1 do SGT Antonio Rafael

**Input**: Design documents from `specs/006-rig-assembly-v1/`  
**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, `quickstart.md`, Base Idle Oficial V1, Rig Parts Separation V1  
**Scope**: Gerar lista acionavel para montar tecnicamente o rig `front_right` no laboratorio; nao implementar nesta etapa.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Pode rodar em paralelo quando usa arquivos diferentes e nao depende de tarefas incompletas.
- **[US1]**: Montar rig tecnico inicial.
- **[US2]**: Validar pivos e encaixes.
- **[US3]**: Registrar evidencias para gate humano.

## Phase 1: Preparacao e Validacao da Base

**Purpose**: Confirmar documentos, referencia visual, limites de escopo e arquivos protegidos antes de qualquer montagem.

- [x] T001 Ler constituicao do projeto; arquivos: `.specify/memory/constitution.md`; criterio: principios Spec First, Gate Humano, Character First, Pixel Art HD e Engine/Tecnologia registrados como restricoes ativas; deps: nenhuma.
- [x] T002 Ler especificacao da feature 006; arquivos: `specs/006-rig-assembly-v1/spec.md`; criterio: historias, requisitos, proibicoes e gate humano compreendidos; deps: T001.
- [x] T003 Ler plano tecnico da feature 006; arquivos: `specs/006-rig-assembly-v1/plan.md`; criterio: escopo, hierarquia planejada, arquivos permitidos e validacoes confirmados; deps: T002.
- [x] T004 [P] Ler decisoes de pesquisa; arquivos: `specs/006-rig-assembly-v1/research.md`; criterio: decisoes sobre `front_right`, laboratorio isolado, hierarquia, manifesto e preview confirmadas; deps: T003.
- [x] T005 [P] Ler modelo de dados; arquivos: `specs/006-rig-assembly-v1/data-model.md`; criterio: entidades `RigAssemblyV1`, `RigPartPlacement`, `PivotMarker`, `AssemblyPreview` e `HumanValidationGate` entendidas; deps: T003.
- [x] T006 [P] Ler quickstart; arquivos: `specs/006-rig-assembly-v1/quickstart.md`; criterio: validacoes de arquivos, montagem, pivos, manifesto, cena e escopo compreendidas; deps: T003.
- [x] T007 Confirmar existencia da Base Idle Oficial V1; arquivos: `assets/characters/antonio_rafael/sprites/idle/*.png`; criterio: os 8 sprites idle aprovados existem antes da montagem; deps: T004, T005, T006.
- [x] T008 Confirmar existencia da referencia mestre; arquivos: `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`; criterio: sprite `front_right` existe; deps: T007.
- [x] T009 Validar dimensao da referencia mestre; arquivos: `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`; criterio: imagem mede exatamente `128x128`; deps: T008.
- [x] T010 Validar formato da referencia mestre; arquivos: `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`; criterio: imagem e PNG `RGBA`; deps: T008.
- [x] T011 Validar transparencia da referencia mestre; arquivos: `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`; criterio: alpha valido e sem fundo verde opaco; deps: T008.
- [x] T012 Confirmar restricao de escopo da feature; arquivos: `specs/006-rig-assembly-v1/plan.md`; criterio: feature limitada a montagem de rig em laboratorio, sem animacao, walk cycle, Player ou gameplay; deps: T003.
- [x] T013 Capturar baseline do Player oficial; arquivos: `scenes/player/Player.tscn`; criterio: hash/status inicial registrado para provar que a feature nao alterou o Player; deps: T012.
- [x] T014 Capturar baseline dos scripts do Player; arquivos: `scripts/player/player_controller.gd`, `scripts/player/player_animation_controller.gd`; criterio: hashes/status iniciais registrados; deps: T012.
- [x] T015 Capturar baseline dos sprites idle aprovados; arquivos: `assets/characters/antonio_rafael/sprites/idle/*.png`; criterio: hashes/metadata iniciais registrados para validar integridade posterior; deps: T007.

## Phase 2: Validacao das Partes e Manifestos Existentes

**Purpose**: Confirmar que a entrada da Rig Parts Separation V1 esta completa e auditable antes da montagem.

- [x] T016 Verificar pasta das partes `front_right`; arquivos: `assets/characters/antonio_rafael/rig/parts/front_right/`; criterio: pasta existe e contem assets da Rig Parts Separation V1; deps: T015.
- [x] T017 Verificar manifesto de partes; arquivos: `assets/characters/antonio_rafael/rig/parts_manifest.json`; criterio: arquivo existe e e parseavel como JSON; deps: T016.
- [x] T018 Validar partes obrigatorias existem; arquivos: `assets/characters/antonio_rafael/rig/parts/front_right/head.png`, `neck.png`, `torso_base.png`, `vest.png`, `backpack.png`, `upper_arm_left.png`, `upper_arm_right.png`, `forearm_left.png`, `forearm_right.png`, `hand_left.png`, `hand_right.png`, `pelvis.png`, `thigh_left.png`, `thigh_right.png`, `shin_left.png`, `shin_right.png`, `boot_left.png`, `boot_right.png`; criterio: 18 partes obrigatorias existem; deps: T017.
- [x] T019 [P] Validar partes opcionais disponiveis; arquivos: `assets/characters/antonio_rafael/rig/parts/front_right/glasses.png`, `belt.png`, `goias_patch.png`, `sergeant_chevron.png`; criterio: opcionais viaveis existem ou ausencia justificada; deps: T017.
- [x] T020 [P] Registrar rejeicao de `radio` e `holster`; arquivos: `assets/characters/antonio_rafael/rig/parts_manifest.json`; criterio: `radio` e `holster` permanecem `rejected` se continuarem sem legibilidade suficiente; deps: T017.
- [x] T021 [P] Validar PNG/RGBA das partes; arquivos: `assets/characters/antonio_rafael/rig/parts/front_right/*.png`; criterio: todas as partes existentes sao PNG `RGBA`; deps: T018, T019.
- [x] T022 [P] Validar transparencia das partes; arquivos: `assets/characters/antonio_rafael/rig/parts/front_right/*.png`; criterio: todas as partes existentes possuem alpha transparente real; deps: T018, T019.
- [x] T023 [P] Validar ausencia de fundo verde; arquivos: `assets/characters/antonio_rafael/rig/parts/front_right/*.png`; criterio: zero partes com pixels verdes opacos de fundo; deps: T018, T019.
- [x] T024 [P] Validar ausencia de labels nas partes; arquivos: `assets/characters/antonio_rafael/rig/parts/front_right/*.png`; criterio: nenhum PNG individual contem label, texto externo, direcao escrita ou grid; deps: T018, T019.
- [x] T025 Validar status das partes no manifesto; arquivos: `assets/characters/antonio_rafael/rig/parts_manifest.json`; criterio: cada parte obrigatoria/opcional possui status auditavel e campos de pivo/uso; deps: T021, T022, T023, T024.
- [x] T026 Registrar limitacoes herdadas da separacao; arquivos: `assets/characters/antonio_rafael/rig/parts_manifest.json`, `specs/006-rig-assembly-v1/tasks.md`; criterio: `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron` identificados como limitados para montagem; deps: T025.

## Phase 3: Montagem da Hierarquia do Rig

**Goal**: Atualizar o laboratorio com uma hierarquia clara e isolada, sem animar e sem integrar ao Player.  
**Independent Test**: Abrir `AntonioRafaelRigLab.tscn` e verificar que a arvore de nodes mostra uma montagem tecnica clara de `front_right`, sem referencia ao Player.

- [x] T027 [US1] Inspecionar cena de laboratorio atual; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: estrutura existente entendida antes de qualquer edicao; deps: T026.
- [x] T028 [US1] Definir layout da hierarquia de montagem; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: hierarquia planejada com `Reference`, `RigRoot`, `Pelvis`, `TorsoBase`, membros, `PivotMarkers` e `PreviewCamera`; deps: T027.
- [x] T029 [US1] Atualizar camada de referencia; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: cena contem `Reference/IdleFrontRightReference` usando `antonio_rafael_idle_front_right.png`; deps: T028.
- [x] T030 [US1] Criar raiz isolada do rig; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `RigRoot` existe como laboratorio tecnico e nao instancia `Player.tscn`; deps: T028.
- [x] T031 [US1] Criar hierarquia central do corpo; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `RigRoot/Pelvis/TorsoBase` com `Vest`, `Backpack`, `Neck` e `Head` nomeados claramente; deps: T030.
- [x] T032 [US1] Criar hierarquia do braco esquerdo; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `UpperArmLeft/ForearmLeft/HandLeft` existe sob o torso; deps: T031.
- [x] T033 [US1] Criar hierarquia do braco direito; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `UpperArmRight/ForearmRight/HandRight` existe sob o torso; deps: T031.
- [x] T034 [US1] Criar hierarquia da perna esquerda; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `ThighLeft/ShinLeft/BootLeft` existe sob `Pelvis`; deps: T031.
- [x] T035 [US1] Criar hierarquia da perna direita; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `ThighRight/ShinRight/BootRight` existe sob `Pelvis`; deps: T031.
- [x] T036 [US1] Adicionar opcionais viaveis na hierarquia; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `Glasses`, `Belt`, `GoiasPatch` e `SergeantChevron` aparecem como dependentes das partes corretas quando usados; deps: T031, T032, T033.
- [x] T037 [US1] Preparar camera de laboratorio; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `PreviewCamera` ou camera equivalente permite visualizar referencia, rig e markers sem virar cena de gameplay; deps: T030.
- [x] T038 [US1] Validar isolamento estrutural da cena; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: cena nao instancia `scenes/player/Player.tscn`, nao referencia scripts do Player e nao cria animacoes finais; deps: T029, T036, T037.

## Phase 4: Posicionamento das Partes

**Goal**: Posicionar partes na cena para recompor aproximadamente a pose `front_right` original.  
**Independent Test**: A montagem do rig deve parecer o SGT Antonio Rafael em `front_right`, preservando escala, silhueta e identidade, sem editar PNGs.

- [x] T039 [US1] Posicionar referencia idle; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `IdleFrontRightReference` fica visivel para comparacao lado a lado; deps: T038.
- [x] T040 [US1] Posicionar pelvis/quadril; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `Pelvis` define base do rig e alinha quadril com a pose `front_right`; deps: T039.
- [x] T041 [US1] Posicionar torso, colete e mochila; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `TorsoBase`, `Vest` e `Backpack` recompõem volume central sem alterar PNGs; deps: T040.
- [x] T042 [US1] Posicionar pescoco, cabeca e oculos; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `Neck`, `Head` e `Glasses` preservam rosto, oculos, cabelo e escala; deps: T041.
- [x] T043 [US1] Posicionar braco esquerdo; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `UpperArmLeft`, `ForearmLeft` e `HandLeft` encaixam no torso sem buracos graves; deps: T041.
- [x] T044 [US1] Posicionar braco direito; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `UpperArmRight`, `ForearmRight` e `HandRight` encaixam no torso sem buracos graves; deps: T041.
- [x] T045 [US1] Posicionar perna esquerda; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `ThighLeft` e `ShinLeft` alinham quadril, joelho e baseline da pose; deps: T040.
- [x] T046 [US1] Posicionar perna direita; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `ThighRight` e `ShinRight` alinham quadril, joelho e baseline da pose; deps: T040.
- [x] T047 [US1] Posicionar botas; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `BootLeft` e `BootRight` alinham tornozelos e baseline da pose; deps: T045, T046.
- [x] T048 [US1] Posicionar partes opcionais de uniforme; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `Belt`, `GoiasPatch` e `SergeantChevron` ficam associados a partes corretas sem inventar detalhe novo; deps: T041, T043, T044.
- [x] T049 [US1] Validar recomposicao aproximada na cena; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: rig montado se compara visualmente ao idle `front_right` e limitacoes sao anotadas para manifesto; deps: T042, T047, T048.

## Phase 5: Representacao dos Pivos

**Goal**: Representar ou documentar pivos principais para futura articulacao, sem criar animacao.  
**Independent Test**: Cada parte articulavel obrigatoria possui marker ou registro de pivo coerente com sua ancora anatomica.

- [x] T050 [US2] Criar container de pivos; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: `PivotMarkers` existe na cena e fica isolado da montagem visual; deps: T049.
- [x] T051 [US2] Representar pivos de cabeca/pescoco/torso; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: markers para `head`, `neck`, `torso_base`, `vest` e `backpack` existem ou estao documentados; deps: T050.
- [x] T052 [US2] Representar pivos dos bracos; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: markers para ombros, cotovelos e punhos de ambos os bracos existem ou estao documentados; deps: T050.
- [x] T053 [US2] Representar pivos das pernas; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: markers para pelvis, quadris, joelhos e tornozelos existem ou estao documentados; deps: T050.
- [x] T054 [US2] Associar pivos a partes no planejamento de montagem; arquivos: `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`; criterio: cada parte obrigatoria tem pivo aplicado ou sugerido com ancora anatomica; deps: T051, T052, T053.
- [x] T055 [US2] Validar coerencia dos pivos contra manifesto de partes; arquivos: `assets/characters/antonio_rafael/rig/parts_manifest.json`, `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`; criterio: pivos herdados ou ajustados mantem relacao clara com `parts_manifest.json`; deps: T054.
- [x] T056 [US2] Registrar pivos que precisam refinamento; arquivos: `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`; criterio: partes com pivo duvidoso marcadas como `needs_pivot_refinement`; deps: T055.

## Phase 6: Manifesto de Montagem

**Goal**: Criar manifesto auditavel da montagem, com parte, asset, node, posicao, pivo, rotacao, escala, status e refinamento.

- [x] T057 [US3] Criar estrutura base do manifesto de montagem; arquivos: `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`; criterio: JSON contem personagem, feature, direcao, referencias, cena, preview planejado, status `pending_human_validation` e lista de placements; deps: T049.
- [x] T058 [US3] Registrar placements das partes centrais; arquivos: `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`; criterio: `pelvis`, `torso_base`, `vest`, `backpack`, `neck`, `head` possuem asset, node, posicao local, pivo, rotacao, escala, status e nota; deps: T057.
- [x] T059 [US3] Registrar placements dos bracos; arquivos: `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`; criterio: bracos, antebracos e maos possuem registros completos; deps: T057.
- [x] T060 [US3] Registrar placements das pernas e botas; arquivos: `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`; criterio: coxas, canelas e botas possuem registros completos; deps: T057.
- [x] T061 [US3] Registrar placements das partes opcionais; arquivos: `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`; criterio: `glasses`, `belt`, `goias_patch` e `sergeant_chevron` possuem registros completos quando usados; deps: T057.
- [x] T062 [US3] Registrar rejeicoes no manifesto de montagem; arquivos: `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`; criterio: `radio` e `holster` registrados como `rejected` sem uso na montagem; deps: T057.
- [x] T063 [US3] Registrar limitacoes de refinamento; arquivos: `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`; criterio: `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron` mantem notas de refinamento; deps: T058, T061.
- [x] T064 [US3] Validar schema do manifesto de montagem; arquivos: `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`; criterio: JSON parseavel e usa somente status permitidos `assembled`, `needs_position_refinement`, `needs_pivot_refinement`, `needs_art_refinement`, `placeholder_only`, `rejected`; deps: T058, T059, T060, T061, T062, T063.

## Phase 7: Preview de Validacao Humana

**Goal**: Gerar preview visual para avaliacao humana da montagem, comparando referencia, rig e pivos.

- [x] T065 [US3] Planejar layout do preview de montagem; arquivos: `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png`; criterio: layout inclui referencia idle, rig montado, comparacao visual, pivos/markers e observacao de limitacoes; deps: T049, T056, T064.
- [x] T066 [US3] Gerar preview da montagem; arquivos: `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png`; criterio: preview existe e mostra referencia, rig montado, pivos/markers e limitacoes; deps: T065.
- [x] T067 [US3] Validar que preview nao e asset final; arquivos: `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png`, `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`; criterio: preview documentado como revisao humana, nao spritesheet tecnico nem gameplay; deps: T066.

## Phase 8: Validacao Tecnica

**Purpose**: Verificar montagem, manifesto, preview, isolamento e limites de escopo antes de documentar.

- [x] T068 Validar integridade da Base Idle Oficial V1; arquivos: `assets/characters/antonio_rafael/sprites/idle/*.png`; criterio: hashes/status dos idles batem com baseline de T015; deps: T067.
- [x] T069 Validar ausencia de alteracao no Player oficial; arquivos: `scenes/player/Player.tscn`; criterio: hash/status bate com baseline de T013 ou alteracao pre-existente documentada sem relacao com rig; deps: T067.
- [x] T070 Validar ausencia de alteracao nos scripts do Player; arquivos: `scripts/player/player_controller.gd`, `scripts/player/player_animation_controller.gd`; criterio: hashes/status batem com baseline de T014; deps: T067.
- [x] T071 Validar existencia das partes do rig; arquivos: `assets/characters/antonio_rafael/rig/parts/front_right/*.png`; criterio: partes obrigatorias e opcionais usadas existem; deps: T067.
- [x] T072 Validar manifesto de partes; arquivos: `assets/characters/antonio_rafael/rig/parts_manifest.json`; criterio: manifesto existe, parseia e mantem status das partes; deps: T067.
- [x] T073 Validar manifesto de montagem; arquivos: `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`; criterio: manifesto existe, parseia, lista partes usadas e rejeitadas; deps: T064.
- [x] T074 Validar isolamento da cena de rig; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: cena referencia apenas assets do rig, scripts de laboratorio e referencia idle; nao instancia Player; deps: T067.
- [x] T075 Validar recomposicao visual possivel; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`, `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png`; criterio: referencia e rig montado podem ser comparados visualmente; deps: T074.
- [x] T076 Validar pivos representados ou documentados; arquivos: `scenes/rig/AntonioRafaelRigLab.tscn`, `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`; criterio: 100% das partes articulaveis obrigatorias possuem pivo/ancora; deps: T056, T073.
- [x] T077 Validar preview criado; arquivos: `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png`; criterio: arquivo existe e pode ser aberto para revisao humana; deps: T066.
- [x] T078 Validar limitacoes registradas; arquivos: `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`, `docs/technical/rig-assembly-v1.md`; criterio: limitacoes herdadas e novas estao listadas; deps: T063.
- [x] T079 Validar ausencia de walk cycle e animacao oficial; arquivos: `assets/characters/antonio_rafael/rig/`, `scenes/rig/AntonioRafaelRigLab.tscn`; criterio: nenhum frame final de caminhada, animacao oficial ou export gameplay criado; deps: T067.
- [x] T080 Validar ausencia de sistemas fora do escopo; arquivos: repositorio do projeto; criterio: nenhum combate, arma funcional, zumbi, inventario, HUD, save/load, movimento, som, musica, narrativa, publicacao ou gameplay criado/alterado; deps: T068, T069, T070, T079.

## Phase 9: Documentacao

**Purpose**: Registrar objetivo, direcao, partes, pivos, limitacoes, diferencas visuais, proximos passos e preservacao do Player/idles.

- [x] T081 [P] Criar documentacao dedicada da montagem; arquivos: `docs/technical/rig-assembly-v1.md`; criterio: documento registra objetivo, direcao `front_right`, partes usadas, hierarquia, pivos, preview, manifesto, limitacoes e gate humano; deps: T073, T077, T078.
- [x] T082 [P] Atualizar pipeline de rig; arquivos: `docs/technical/rig-pipeline.md`; criterio: documento registra Rig Assembly V1 como etapa apos separacao e antes de animacao/export final; deps: T073, T077.
- [x] T083 [P] Atualizar documentacao de separacao de partes; arquivos: `docs/technical/rig-parts-separation.md`; criterio: documento aponta que as partes aprovadas parcialmente foram usadas como entrada da montagem V1; deps: T073.
- [x] T084 [P] Atualizar pipeline de personagem; arquivos: `docs/technical/character-pipeline.md`; criterio: documento registra que a montagem e laboratorio tecnico e nao altera Player/gameplay; deps: T080.
- [x] T085 [P] Atualizar ficha artistica do personagem; arquivos: `docs/art/antonio-rafael.md`; criterio: documento registra montagem `front_right`, preservacao de identidade, limitacoes e status nao oficial; deps: T075, T078.
- [x] T086 [P] Atualizar rastreabilidade de assets; arquivos: `docs/art/asset-sources.md`; criterio: documento registra `rig_assembly_manifest.json`, preview de montagem, partes usadas e rejeitadas; deps: T073, T077.
- [x] T087 Atualizar evidencias de execucao nas tarefas; arquivos: `specs/006-rig-assembly-v1/tasks.md`; criterio: tarefas concluidas sao marcadas somente apos execucao real e limitacoes/validacoes ficam registradas; deps: T081, T082, T083, T084, T085, T086.

## Phase 10: Gate Humano Final

**Purpose**: Parar para decisao humana antes de qualquer animacao, walk cycle, integracao no Player, commit ou push.

- [x] T088 Apresentar gate humano final da Rig Assembly V1; arquivos: `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png`, `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`, `specs/006-rig-assembly-v1/tasks.md`; criterio: apresentar preview, partes usadas, arquivos criados, arquivos alterados, validacao tecnica, limitacoes, confirmacao de Player/idles intactos, recomendacao de aprovar/aprovar parcialmente/reprovar e confirmacao de que nao houve commit nem push; deps: T087.

## Dependencies & Execution Order

- Phase 1 deve terminar antes de validar partes ou montar qualquer node.
- Phase 2 depende da validacao da base e confirma a entrada da Rig Parts Separation V1.
- Phase 3 depende das partes/manifesto existentes e cria a hierarquia do laboratorio.
- Phase 4 depende da hierarquia e posiciona os grupos visuais.
- Phase 5 depende da recomposicao inicial e representa/documenta pivos.
- Phase 6 depende da cena montada e dos pivos para registrar o manifesto de montagem.
- Phase 7 depende da montagem, pivos e manifesto para gerar preview humano.
- Phase 8 depende de cena, manifesto e preview para validar escopo.
- Phase 9 depende das validacoes tecnicas.
- Phase 10 depende da documentacao e deve parar para decisao humana.

## User Story Dependencies

- **US1 (P1) Montar Rig Tecnico Inicial**: depende de Phase 1 e Phase 2; entrega MVP independente com cena de laboratorio recomposta.
- **US2 (P2) Validar Pivos e Encaixes**: depende da montagem US1; entrega markers/pivos auditaveis.
- **US3 (P3) Registrar Evidencia Para Gate Humano**: depende de US1 e US2; entrega manifesto, preview, documentacao e gate.

## Parallel Opportunities

- T004, T005 e T006 podem rodar em paralelo apos T003.
- T019, T020, T021, T022, T023 e T024 podem rodar em paralelo apos T018 quando usam leituras independentes.
- T043 e T044 podem rodar em paralelo apos T041 se editarem trechos coordenados da cena com cuidado.
- T045 e T046 podem rodar em paralelo apos T040 se editarem trechos coordenados da cena com cuidado.
- T051, T052 e T053 podem rodar em paralelo apos T050.
- T058, T059, T060, T061 e T062 podem rodar em paralelo apos T057 se houver controle de merge do JSON.
- T081 a T086 podem rodar em paralelo apos suas validacoes correspondentes.

## Parallel Example: US1

```text
Task: "T043 [US1] Posicionar braco esquerdo em scenes/rig/AntonioRafaelRigLab.tscn"
Task: "T044 [US1] Posicionar braco direito em scenes/rig/AntonioRafaelRigLab.tscn"
Task: "T045 [US1] Posicionar perna esquerda em scenes/rig/AntonioRafaelRigLab.tscn"
```

## Implementation Strategy

### MVP First (US1 Only)

1. Concluir Phase 1 e Phase 2.
2. Executar Phase 3 e Phase 4 para montar a hierarquia e recompor a pose `front_right`.
3. Parar e validar visualmente que a montagem ainda parece o SGT Antonio Rafael.
4. Nao criar animacao e nao tocar no Player.

### Incremental Delivery

1. US1: montagem visual inicial no laboratorio.
2. US2: pivos/markers representados ou documentados.
3. US3: manifesto, preview, documentacao e gate humano.
4. Phase 8 e Phase 9: validacao tecnica e documentacao.
5. Phase 10: decisao humana.

## Notes

- Nao implementar durante `/speckit.tasks`.
- Nao montar rig nesta etapa.
- Nao alterar `AntonioRafaelRigLab.tscn` nesta etapa.
- Nao gerar preview nesta etapa.
- Nao alterar `Player.tscn`.
- Nao alterar scripts do Player.
- Nao alterar sprites idle aprovados.
- Nao criar walk cycle final.
- Nao criar animacao oficial.
- Nao fazer commit.
- Nao fazer push.

## Execution Summary - 2026-06-19

- Feature executada na direcao primaria `front_right`.
- Base visual mestre usada: `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`.
- Entrada tecnica usada: `res://assets/characters/antonio_rafael/rig/parts_manifest.json`.
- Cena de laboratorio atualizada: `res://scenes/rig/AntonioRafaelRigLab.tscn`.
- Manifesto de montagem criado: `res://assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`.
- Preview humano criado: `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png`.
- 18 partes obrigatorias montadas: `head`, `neck`, `torso_base`, `vest`, `backpack`, `upper_arm_left`, `upper_arm_right`, `forearm_left`, `forearm_right`, `hand_left`, `hand_right`, `pelvis`, `thigh_left`, `thigh_right`, `shin_left`, `shin_right`, `boot_left`, `boot_right`.
- 4 partes opcionais usadas: `glasses`, `belt`, `goias_patch`, `sergeant_chevron`.
- 2 partes mantidas como rejeitadas: `radio`, `holster`.
- Hierarquia tecnica criada com `RigRoot`, `Pelvis`, `TorsoBase`, membros, opcionais, `PivotMarkers`, `SkeletonGuide` e `PreviewCamera`.
- Pivos foram representados na cena com `Marker2D` e registrados no manifesto de montagem.
- `rig_assembly_manifest.json` validado: JSON parseavel, 24 placements, status permitidos e pivos obrigatorios presentes.
- Preview validado como artefato humano de revisao, nao spritesheet tecnico e nao asset de gameplay.
- Documentacao criada/atualizada em `docs/technical/rig-assembly-v1.md`, `docs/technical/rig-pipeline.md`, `docs/technical/rig-parts-separation.md`, `docs/technical/character-pipeline.md`, `docs/art/antonio-rafael.md` e `docs/art/asset-sources.md`.
- Limitacoes registradas: `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron` precisam refinamento manual antes de animacao final.
- Base Idle Oficial V1 permaneceu intacta.
- Player oficial nao foi alterado por esta feature.
- Scripts do Player nao foram alterados.
- Nenhum walk cycle foi criado.
- Nenhuma animacao oficial foi criada.
- Nenhum sistema de gameplay foi alterado.
- Recomendacao: **aprovar parcialmente** como montagem tecnica de laboratorio, nao como arte final nem animacao oficial.
- Nao houve commit.
- Nao houve push.

## Human Approval Record - 2026-06-19

Decisao humana registrada: a feature **Rig Assembly V1** esta **APROVADA PARCIALMENTE** como montagem tecnica inicial de laboratorio.

Escopo autorizado:

- laboratorio tecnico de rig;
- prova inicial de montagem das partes;
- validacao de hierarquia;
- validacao de pivos;
- base para refinamento manual;
- preparacao para futura animacao controlada.

Escopo nao autorizado:

- arte final;
- animacao final;
- walk cycle oficial;
- asset final de gameplay;
- substituto do Player runtime;
- base definitiva sem refinamento.

Estado validado:

- criado: `res://assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`;
- criado: `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png`;
- criado: `res://docs/technical/rig-assembly-v1.md`;
- alterado: `res://scenes/rig/AntonioRafaelRigLab.tscn`;
- alterado: `res://docs/technical/rig-pipeline.md`;
- alterado: `res://docs/technical/rig-parts-separation.md`;
- alterado: `res://docs/technical/character-pipeline.md`;
- alterado: `res://docs/art/antonio-rafael.md`;
- alterado: `res://docs/art/asset-sources.md`;
- alterado: `res://specs/006-rig-assembly-v1/tasks.md`.

Partes usadas na montagem:

- obrigatorias: `head`, `neck`, `torso_base`, `vest`, `backpack`, `upper_arm_left`, `upper_arm_right`, `forearm_left`, `forearm_right`, `hand_left`, `hand_right`, `pelvis`, `thigh_left`, `thigh_right`, `shin_left`, `shin_right`, `boot_left`, `boot_right`;
- opcionais: `glasses`, `belt`, `goias_patch`, `sergeant_chevron`;
- rejeitadas: `radio`, `holster`.

Limitacoes obrigatorias:

- `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron` precisam refinamento manual antes de qualquer animacao final;
- a montagem e tecnica, nao arte final;
- o preview e material de validacao humana, nao asset final;
- a validacao foi estatica porque Godot nao estava no PATH;
- ainda falta validacao visual ao vivo no Godot;
- o rig ainda nao deve ser usado no Player;
- nenhuma animacao oficial foi criada;
- nenhum walk cycle foi criado.

Auditoria:

- `Player.tscn` nao foi alterado por esta feature;
- `Player.tscn` aparece modificado no Git por alteracao pre-existente;
- hash baseline informado: `5AAEF2...`;
- scripts do Player continuam com hashes inalterados;
- sprites idle aprovados continuam com hashes inalterados;
- a cena de rig referencia apenas assets do rig e o idle `front_right`;
- nao ha referencia do rig dentro do Player;
- nao ha referencia a `walk_*` no Player;
- nao houve alteracao de gameplay.

Confirmacoes:

- nenhum novo rig foi montado nesta rodada documental;
- nenhum posicionamento de parte foi alterado nesta rodada documental;
- nenhum preview foi gerado nesta rodada documental;
- nenhum PNG foi alterado nesta rodada documental;
- nao houve commit;
- nao houve push.
