# Tasks: Rig Articulation Test V1 do SGT Antonio Rafael

**Input**: Design documents from `/specs/008-rig-articulation-test-v1/`  
**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `quickstart.md`  
**Tests**: Sem TDD formal; esta feature exige validacoes tecnicas/visuais planejadas como tarefas auditaveis.  
**Organization**: Tarefas organizadas pelas fases obrigatorias do pedido, com labels `[US1]`, `[US2]` e `[US3]` quando mapeadas para historias da especificacao.

## Format: `[ID] [P?] [Story] Description`

- `[P]`: pode ser executada em paralelo por atuar em arquivos diferentes ou por ser validacao independente.
- `[US1]`: Validar articulacao controlada do rig.
- `[US2]`: Preservar escopo seguro e identidade visual.
- `[US3]`: Gerar evidencia para gate humano.

---

## Phase 1: Preparacao e Validacao da Base

**Purpose**: Confirmar que a feature 008 esta bem delimitada antes de qualquer alteracao futura.

- [X] T001 Ler constituicao do projeto; descricao: revisar principios e gates antes de qualquer tarefa; arquivos: `D:/Projetos/Unfallen/.specify/memory/constitution.md`; criterio: restricoes de Spec First, Gate Humano, Character First e Pixel Art HD compreendidas; dependencias: nenhuma.
- [X] T002 [P] Ler especificacao da feature 008; descricao: extrair user stories, requisitos e proibicoes; arquivos: `D:/Projetos/Unfallen/specs/008-rig-articulation-test-v1/spec.md`; criterio: escopo da articulacao tecnica registrado para execucao; dependencias: T001.
- [X] T003 [P] Ler plano tecnico da feature 008; descricao: confirmar decisao Node2D/Sprite2D, pivots/markers, AnimationPlayer tecnico e ausencia de Skeleton2D; arquivos: `D:/Projetos/Unfallen/specs/008-rig-articulation-test-v1/plan.md`; criterio: abordagem tecnica compreendida; dependencias: T001.
- [X] T004 [P] Ler pesquisa, modelo de dados e quickstart; descricao: mapear decisoes, entidades e validacoes planejadas; arquivos: `D:/Projetos/Unfallen/specs/008-rig-articulation-test-v1/research.md`, `D:/Projetos/Unfallen/specs/008-rig-articulation-test-v1/data-model.md`, `D:/Projetos/Unfallen/specs/008-rig-articulation-test-v1/quickstart.md`; criterio: documentos carregados antes da implementacao futura; dependencias: T001.
- [X] T005 [US2] Confirmar existencia da Base Idle Oficial V1; descricao: validar que a referencia mestre existe; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`; criterio: arquivo existe e sera tratado como somente leitura; dependencias: T002, T003.
- [X] T006 [US2] Validar metadados da referencia `front_right`; descricao: conferir 128x128, PNG RGBA e transparencia valida; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`; criterio: dimensao/formato/transparencia confirmados sem alterar o arquivo; dependencias: T005.
- [X] T007 [US2] Registrar restricao de escopo da feature; descricao: confirmar que a feature e somente teste tecnico de articulacao; arquivos: `D:/Projetos/Unfallen/specs/008-rig-articulation-test-v1/tasks.md`; criterio: nenhuma tarefa de walk cycle, animacao oficial, gameplay ou exportacao final foi adicionada; dependencias: T002, T003.
- [X] T008 [US2] Confirmar arquivos proibidos do Player; descricao: registrar que Player e scripts nao devem ser alterados; arquivos: `D:/Projetos/Unfallen/scenes/player/Player.tscn`, `D:/Projetos/Unfallen/scripts/player/player_controller.gd`, `D:/Projetos/Unfallen/scripts/player/player_animation_controller.gd`; criterio: arquivos marcados como proibidos para implementacao futura; dependencias: T007.
- [X] T009 [US2] Confirmar sprites idle aprovados como intocaveis; descricao: registrar que `sprites/idle/` nao pode ser movido, sobrescrito ou regenerado; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/sprites/idle/`; criterio: todos os idles permanecem fora do plano de edicao; dependencias: T007.

---

## Phase 2: Validacao do Laboratorio e Manifestos

**Purpose**: Garantir que a cena e os manifestos atuais sustentam os testes de articulacao.

- [X] T010 [US1] Validar existencia da cena de laboratorio; descricao: confirmar que `AntonioRafaelRigLab.tscn` existe; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: cena encontrada antes de qualquer ajuste; dependencias: T001-T009.
- [X] T011 [US2] Auditar isolamento da cena de rig; descricao: confirmar que a cena nao substitui nem instancia o Player oficial; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`, `D:/Projetos/Unfallen/scenes/player/Player.tscn`; criterio: nenhuma referencia indevida ao Player usada como runtime; dependencias: T010.
- [X] T012 [P] [US1] Validar parse do manifesto de partes; descricao: abrir e validar JSON de `parts_manifest.json`; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/parts_manifest.json`; criterio: JSON parseavel e contendo partes `front_right`; dependencias: T010.
- [X] T013 [P] [US1] Validar parse do manifesto de montagem; descricao: abrir e validar JSON de `rig_assembly_manifest.json`; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`; criterio: JSON parseavel e contendo scene nodes/pivots da montagem; dependencias: T010.
- [X] T014 [US1] Conferir pivots principais nos manifestos; descricao: confirmar anchors para pescoco, torso, ombros, cotovelos, quadril, joelhos e tornozelos; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/parts_manifest.json`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`; criterio: pivots necessarios identificados ou limitacoes registradas; dependencias: T012, T013.
- [X] T015 [P] [US1] Validar existencia das partes refinadas; descricao: conferir partes em `front_right/` usadas pela articulacao; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/parts/front_right/`; criterio: partes obrigatorias e opcionais usadas na montagem estao presentes; dependencias: T012.
- [X] T016 [P] [US2] Validar formato das partes refinadas; descricao: conferir PNG RGBA, transparencia e ausencia de fundo verde/labels nas partes; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/parts/front_right/`; criterio: partes aptas a teste tecnico sem alteracao; dependencias: T015.
- [X] T017 [US1] Validar pose neutra existente; descricao: comparar montagem atual com referencia e previews aprovados parcialmente; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png`; criterio: baseline neutro aceitavel para testar articulacao; dependencias: T010-T016.

---

## Phase 3: Preparacao dos Estados Tecnicos

**Purpose**: Preparar estados de laboratorio com nomes seguros, sem criar animacao oficial.

- [X] T018 [US1] Auditar hierarquia atual do rig; descricao: mapear `RigRoot`, partes e nodes articulaveis antes de criar estados; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: hierarquia compreendida e compatibilidade com testes confirmada; dependencias: T017.
- [X] T019 [US1] Decidir uso de `AnimationPlayer` tecnico; descricao: escolher entre poses estaticas ou clips `test_*` somente no laboratorio; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: decisao documentada na cena/manifesto sem usar nomes oficiais; dependencias: T018.
- [X] T020 [US1] Preparar estado `test_neutral`; descricao: registrar baseline sem rotacao/offset adicional; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: estado neutro reproduz montagem aprovada parcialmente; dependencias: T019.
- [X] T021 [US1] Preparar estado `test_head`; descricao: criar estado tecnico para teste de cabeca sem animacao facial; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: estado existe com nome seguro e sem integrar Player; dependencias: T020.
- [X] T022 [US1] Preparar estado `test_torso`; descricao: criar estado tecnico para inclinacao de tronco; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: estado existe com nome seguro e sem gameplay; dependencias: T020.
- [X] T023 [US1] Preparar estado `test_arms`; descricao: criar estado tecnico para swing simples dos bracos; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: estado existe com nome seguro e sem aparencia de ataque; dependencias: T020.
- [X] T024 [US1] Preparar estado `test_legs`; descricao: criar estado tecnico para flexao leve das pernas; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: estado existe com nome seguro e sem walk cycle; dependencias: T020.
- [X] T025 [US1] Preparar estado `test_combined_pose`; descricao: criar estado combinado simples com amplitude reduzida; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: estado existe como teste tecnico e nao como animacao oficial; dependencias: T021-T024.
- [X] T026 [US2] Validar nomenclatura dos estados tecnicos; descricao: garantir ausencia de `walk`, `run`, `attack`, `combat` e `gameplay`; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: todos os estados usam apenas nomes `test_*`; dependencias: T020-T025.

---

## Phase 4: Teste de Articulacao da Cabeca

**Purpose**: Validar cabeca, pescoco, rosto e oculos com movimento leve.

- [X] T027 [US1] Aplicar rotacao leve no teste de cabeca; descricao: mover `head` em amplitude conservadora no estado `test_head`; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: cabeca articula sem deslocamento agressivo; dependencias: T021.
- [X] T028 [US1] Confirmar retorno da cabeca ao neutro; descricao: validar que `test_neutral` restaura cabeca/pescoco; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: retorno neutro nao deixa offsets residuais; dependencias: T027.
- [X] T029 [US1] Validar encaixe cabeca/pescoco; descricao: checar abertura visual, tom de pele e conexao com `neck`; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/parts/front_right/neck.png`; criterio: limitacoes de encaixe registradas se houver; dependencias: T027.
- [X] T030 [US2] Validar rosto e oculos no teste de cabeca; descricao: garantir que face e `glasses` continuam reconheciveis; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/parts/front_right/glasses.png`; criterio: identidade facial preservada; dependencias: T027.

---

## Phase 5: Teste de Articulacao do Tronco

**Purpose**: Validar inclinacao leve do tronco, colete, mochila, quadril e pescoco.

- [X] T031 [US1] Aplicar inclinacao leve do tronco; descricao: ajustar `torso_base`/massa principal no estado `test_torso`; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: tronco inclina sem deformacao grave; dependencias: T022.
- [X] T032 [US1] Validar retorno do tronco ao eixo neutro; descricao: confirmar que `test_neutral` restaura torso/colete/mochila; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: retorno neutro sem offsets residuais; dependencias: T031.
- [X] T033 [US1] Validar encaixe de colete e mochila no tronco; descricao: checar `vest` e `backpack` durante inclinacao; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/parts/front_right/vest.png`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/parts/front_right/backpack.png`; criterio: mochila/colete aceitaveis ou limitacoes registradas; dependencias: T031.
- [X] T034 [US2] Validar silhueta no teste de tronco; descricao: confirmar que inclinacao nao descaracteriza corpo, colete, quadril ou pescoco; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: silhueta PMGO/sobrevivente preservada; dependencias: T031-T033.

---

## Phase 6: Teste de Articulacao dos Bracos

**Purpose**: Validar swing simples dos bracos sem criar ataque ou arma funcional.

- [X] T035 [US1] Aplicar swing simples do braco esquerdo; descricao: rotacionar `upper_arm_left` e ajustar `forearm_left` no estado `test_arms`; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: braco esquerdo move sem quebrar ombro/cotovelo; dependencias: T023.
- [X] T036 [US1] Aplicar swing simples do braco direito; descricao: rotacionar `upper_arm_right` e ajustar `forearm_right` no estado `test_arms`; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: braco direito move sem quebrar ombro/cotovelo; dependencias: T023.
- [X] T037 [US1] Validar preservacao das maos; descricao: checar `hand_left` e `hand_right` apos swing; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/parts/front_right/hand_left.png`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/parts/front_right/hand_right.png`; criterio: maos permanecem encaixadas e legiveis; dependencias: T035, T036.
- [X] T038 [US2] Validar patch e divisa durante swing; descricao: checar leitura de `goias_patch` e `sergeant_chevron` quando visiveis; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/parts/front_right/goias_patch.png`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/parts/front_right/sergeant_chevron.png`; criterio: detalhes simbolicos nao viram labels nem poluicao visual; dependencias: T035, T036.
- [X] T039 [US2] Validar ausencia de aparencia de ataque; descricao: confirmar que `test_arms` nao parece ataque, combate ou arma funcional; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: movimento classificado como swing tecnico de laboratorio; dependencias: T035-T038.

---

## Phase 7: Teste de Articulacao das Pernas

**Purpose**: Validar flexao leve das pernas sem criar walk cycle ou corrida.

- [X] T040 [US1] Aplicar flexao leve das coxas; descricao: ajustar `thigh_left` e `thigh_right` no estado `test_legs`; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: coxas flexionam sem deslocar quadril excessivamente; dependencias: T024.
- [X] T041 [US1] Aplicar flexao leve das canelas; descricao: ajustar `shin_left` e `shin_right` no estado `test_legs`; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: joelhos articulam sem deformacao grave; dependencias: T040.
- [X] T042 [US1] Validar posicionamento das botas; descricao: checar `boot_left` e `boot_right` apos flexao; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/parts/front_right/boot_left.png`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/parts/front_right/boot_right.png`; criterio: botas permanecem coerentes e sem tremor visual exagerado; dependencias: T041.
- [X] T043 [US1] Validar estabilidade do quadril; descricao: checar `pelvis` como centro do rig durante flexao; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/parts/front_right/pelvis.png`; criterio: quadril mantem ponte visual torso/pernas; dependencias: T040-T042.
- [X] T044 [US2] Validar ausencia de walk cycle; descricao: confirmar que `test_legs` nao alterna como ciclo completo de caminhada ou corrida; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: estado permanece flexao tecnica isolada; dependencias: T040-T043.

---

## Phase 8: Teste Combinado Simples

**Purpose**: Validar pose combinada sutil sem transformar o teste em animacao oficial.

- [X] T045 [US1] Combinar ajustes leves de cabeca e tronco; descricao: aplicar parte das transformacoes de `test_head` e `test_torso` em `test_combined_pose`; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: combinacao sutil preserva pescoco, colete e mochila; dependencias: T027-T034.
- [X] T046 [US1] Combinar ajustes leves de bracos e pernas; descricao: aplicar swing e flexao reduzidos em `test_combined_pose`; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: pose combinada nao vira caminhada, corrida ou ataque; dependencias: T035-T044.
- [X] T047 [US2] Validar silhueta da pose combinada; descricao: comparar `test_combined_pose` com `test_neutral` e referencia `front_right`; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`; criterio: personagem continua reconhecivel como SGT Antonio Rafael; dependencias: T045, T046.
- [X] T048 [US2] Registrar limitacoes do combinado; descricao: anotar pivots/partes que exigem refinamento antes de animacao real; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/rig_articulation_test_manifest.json`; criterio: limitacoes listadas para gate humano; dependencias: T047.

---

## Phase 9: Manifesto de Articulacao

**Purpose**: Criar evidencia tecnica parseavel dos testes.

- [X] T049 [US3] Criar estrutura base do manifesto de articulacao; descricao: gerar JSON com personagem, feature, fontes, cena e flags de escopo; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/rig_articulation_test_manifest.json`; criterio: arquivo existe, e JSON parseavel; dependencias: T020-T026.
- [X] T050 [P] [US3] Registrar entrada `test_neutral`; descricao: documentar partes, pivots, posicoes e resultado esperado do baseline; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/rig_articulation_test_manifest.json`; criterio: estado neutro registrado com status permitido; dependencias: T049.
- [X] T051 [P] [US3] Registrar entrada `test_head`; descricao: documentar rotacao, pivots e limitacoes da cabeca; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/rig_articulation_test_manifest.json`; criterio: teste de cabeca registrado com status permitido; dependencias: T049, T027-T030.
- [X] T052 [P] [US3] Registrar entrada `test_torso`; descricao: documentar inclinacao, partes e limitacoes de tronco/colete/mochila; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/rig_articulation_test_manifest.json`; criterio: teste de tronco registrado com status permitido; dependencias: T049, T031-T034.
- [X] T053 [P] [US3] Registrar entrada `test_arms`; descricao: documentar swing, partes, pivots e limitacoes dos bracos; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/rig_articulation_test_manifest.json`; criterio: teste de bracos registrado com status permitido; dependencias: T049, T035-T039.
- [X] T054 [P] [US3] Registrar entrada `test_legs`; descricao: documentar flexao, partes, pivots e limitacoes das pernas; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/rig_articulation_test_manifest.json`; criterio: teste de pernas registrado com status permitido; dependencias: T049, T040-T044.
- [X] T055 [US3] Registrar entrada `test_combined_pose`; descricao: documentar transformacoes combinadas, status e limitacoes; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/rig_articulation_test_manifest.json`; criterio: teste combinado registrado sem status oficial; dependencias: T049, T045-T048.
- [X] T056 [US3] Validar status e confirmacoes do manifesto; descricao: conferir status permitidos e `scope_confirmation` sem chaves tecnicas proibidas; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/rig_articulation_test_manifest.json`; criterio: manifesto consistente com escopo; dependencias: T050-T055.

---

## Phase 10: Preview de Validacao Humana

**Purpose**: Gerar evidencia visual para revisao humana, sem criar sprites finais.

- [X] T057 [US3] Planejar composicao do preview de articulacao; descricao: definir grade com neutral, head, torso, arms, legs e combined; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png`; criterio: layout definido antes da geracao; dependencias: T020-T026.
- [X] T058 [US3] Capturar ou compor pose neutra no preview; descricao: incluir `test_neutral` como baseline visual; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png`; criterio: pose neutra visivel no preview; dependencias: T057, T020.
- [X] T059 [US3] Capturar ou compor testes individuais no preview; descricao: incluir cabeca, tronco, bracos e pernas; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png`; criterio: quatro testes individuais visiveis; dependencias: T057, T027-T044.
- [X] T060 [US3] Capturar ou compor teste combinado no preview; descricao: incluir `test_combined_pose`; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png`; criterio: pose combinada visivel e rotulada como teste; dependencias: T057, T045-T048.
- [X] T061 [US3] Adicionar observacoes externas de limitacao ao preview; descricao: inserir labels externos permitidos apenas no preview; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png`; criterio: limitacoes legiveis sem contaminar PNGs das partes; dependencias: T058-T060.
- [X] T062 [US2] Validar que preview nao e spritesheet tecnico; descricao: confirmar documentacao visual como material de revisao humana, nao asset final; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png`; criterio: preview classificado corretamente; dependencias: T061.

---

## Phase 11: Validacao Tecnica

**Purpose**: Auditar escopo, identidade, nomes e ausencia de gameplay antes do gate.

- [X] T063 [US2] Validar Base Idle Oficial V1 intacta; descricao: comparar hash/metadados dos idles aprovados antes/depois; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/sprites/idle/`; criterio: nenhum sprite idle alterado; dependencias: T056, T062.
- [X] T064 [US2] Validar Player oficial intacto; descricao: auditar `Player.tscn` contra baseline/preexistencias; arquivos: `D:/Projetos/Unfallen/scenes/player/Player.tscn`; criterio: feature nao alterou Player; dependencias: T056, T062.
- [X] T065 [US2] Validar scripts do Player intactos; descricao: auditar scripts de Player contra baseline; arquivos: `D:/Projetos/Unfallen/scripts/player/player_controller.gd`, `D:/Projetos/Unfallen/scripts/player/player_animation_controller.gd`; criterio: scripts nao alterados; dependencias: T056, T062.
- [X] T066 [US2] Validar isolamento da cena de rig apos testes; descricao: garantir que testes existem apenas em `AntonioRafaelRigLab.tscn`; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: nenhum caminho de Player ou gameplay referenciado indevidamente; dependencias: T026, T056.
- [X] T067 [US2] Validar nomenclatura proibida; descricao: procurar `walk`, `run`, `attack`, `combat` e `gameplay` nos testes tecnicos; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/rig_articulation_test_manifest.json`; criterio: nenhuma nomenclatura proibida usada como estado de teste; dependencias: T026, T056.
- [X] T068 [US1] Validar coerencia visual da pose neutra; descricao: comparar `test_neutral` com referencia e preview de refinamento; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`; criterio: pose neutra continua coerente; dependencias: T020, T062.
- [X] T069 [US1] Validar resultados visuais dos testes individuais; descricao: revisar cabeca, tronco, bracos e pernas contra criterios da feature; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png`; criterio: testes parecem articulacao tecnica e limitacoes estao registradas; dependencias: T027-T044, T062.
- [X] T070 [US1] Validar teste combinado; descricao: confirmar que pose combinada nao vira walk cycle, corrida, ataque ou animacao oficial; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png`; criterio: combined permanece teste tecnico; dependencias: T045-T048, T062.
- [X] T071 [US3] Validar manifesto e preview criados; descricao: confirmar existencia, parse JSON e abertura do preview; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/rig_articulation_test_manifest.json`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png`; criterio: evidencia tecnica e visual pronta para revisao; dependencias: T056, T062.
- [X] T072 [US2] Validar ausencia de gameplay e animacao oficial; descricao: auditar que nenhum walk cycle, animacao oficial, sistema de gameplay ou export final foi criado; arquivos: `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/`, `D:/Projetos/Unfallen/scripts/rig/`; criterio: escopo proibido ausente; dependencias: T063-T071.

---

## Phase 12: Documentacao

**Purpose**: Registrar resultados e limitacoes para continuidade do pipeline.

- [X] T073 [US3] Criar documento tecnico do teste de articulacao; descricao: registrar objetivo, estados, partes, pivots e resultados; arquivos: `D:/Projetos/Unfallen/docs/technical/rig-articulation-test-v1.md`; criterio: documento criado com status pendente de validacao humana; dependencias: T056, T071.
- [X] T074 [P] [US3] Atualizar documento de refinamento do rig; descricao: registrar que Rig Refinement V1 foi usada como base do teste; arquivos: `D:/Projetos/Unfallen/docs/technical/rig-refinement-v1.md`; criterio: relacao com articulation test documentada; dependencias: T073.
- [X] T075 [P] [US3] Atualizar documento de montagem do rig; descricao: registrar uso do laboratorio e hierarquia nos testes; arquivos: `D:/Projetos/Unfallen/docs/technical/rig-assembly-v1.md`; criterio: montagem V1 vinculada ao articulation test; dependencias: T073.
- [X] T076 [P] [US3] Atualizar pipeline de rig; descricao: registrar etapa Rig Articulation Test V1 antes de qualquer walk cycle; arquivos: `D:/Projetos/Unfallen/docs/technical/rig-pipeline.md`; criterio: pipeline indica gate antes de animacao real; dependencias: T073.
- [X] T077 [P] [US3] Atualizar pipeline de personagem; descricao: registrar que Player e idles nao foram alterados e que rig segue laboratorio; arquivos: `D:/Projetos/Unfallen/docs/technical/character-pipeline.md`; criterio: pipeline tecnico coerente com escopo; dependencias: T073.
- [X] T078 [P] [US3] Atualizar documento artistico de Antonio Rafael; descricao: registrar validacao de identidade visual durante articulacao; arquivos: `D:/Projetos/Unfallen/docs/art/antonio-rafael.md`; criterio: identidade e limitacoes visuais registradas; dependencias: T073.
- [X] T079 [US3] Atualizar tarefas executadas e pendencias; descricao: marcar tarefas concluiveis somente durante implementacao futura e registrar limitacoes; arquivos: `D:/Projetos/Unfallen/specs/008-rig-articulation-test-v1/tasks.md`; criterio: tasks refletem status real ao final da implementacao; dependencias: T073-T078.

---

## Phase 13: Gate Humano Final

**Purpose**: Parar para decisao humana antes de qualquer animacao oficial ou walk cycle.

- [X] T080 [US3] Apresentar gate humano final; descricao: entregar preview, testes criados, partes articuladas, pivots testados, arquivos criados/alterados, limitacoes, confirmacoes de Player/idles/scripts, recomendacao de aprovar/aprovar parcialmente/reprovar e confirmacao de sem commit/push; arquivos: `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/rig_articulation_test_manifest.json`, `D:/Projetos/Unfallen/docs/technical/rig-articulation-test-v1.md`; criterio: validacao humana solicitada e feature pausada; dependencias: T001-T079.

### Registro de Aprovacao Humana Parcial

- [X] T081 [US3] Registrar aprovacao humana parcial; descricao: documentar que `Rig Articulation Test V1` foi aprovado parcialmente como teste tecnico de laboratorio, nao como animacao oficial ou walk cycle final; arquivos: `D:/Projetos/Unfallen/docs/technical/rig-articulation-test-v1.md`, `D:/Projetos/Unfallen/docs/technical/rig-refinement-v1.md`, `D:/Projetos/Unfallen/docs/technical/rig-assembly-v1.md`, `D:/Projetos/Unfallen/docs/technical/rig-pipeline.md`, `D:/Projetos/Unfallen/docs/technical/character-pipeline.md`, `D:/Projetos/Unfallen/docs/art/antonio-rafael.md`, `D:/Projetos/Unfallen/specs/008-rig-articulation-test-v1/tasks.md`; criterio: decisao humana, observacoes visuais, limitacoes e auditoria registrados; dependencias: T080.
- [X] T082 [US2] Registrar auditoria de escopo; descricao: confirmar que Player, scripts do Player e sprites idle aprovados nao foram alterados por esta aprovacao documental; arquivos: `D:/Projetos/Unfallen/scenes/player/Player.tscn`, `D:/Projetos/Unfallen/scripts/player/player_controller.gd`, `D:/Projetos/Unfallen/scripts/player/player_animation_controller.gd`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/sprites/idle/`; criterio: `Player.tscn` registrado como alteracao pre-existente no Git, sem referencia do rig e sem `walk_*` como animacao oficial; dependencias: T081.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1**: Sem dependencias; estabelece leitura, escopo e baseline.
- **Phase 2**: Depende da Phase 1; bloqueia qualquer criacao de estado tecnico.
- **Phase 3**: Depende da Phase 2; prepara estados `test_*`.
- **Phases 4-7**: Dependem da Phase 3; podem ser feitas de forma incremental por area corporal.
- **Phase 8**: Depende das Phases 4-7.
- **Phase 9**: Pode iniciar estrutura apos Phase 3, mas entradas completas dependem das Phases 4-8.
- **Phase 10**: Depende de estados tecnicos criados nas Phases 3-8.
- **Phase 11**: Depende de manifesto e preview.
- **Phase 12**: Depende das validacoes principais.
- **Phase 13**: Depende de todas as fases anteriores.

### User Story Dependencies

- **US1 (P1)**: Pode iniciar apos Phase 2 e entrega o MVP tecnico de articulacao.
- **US2 (P2)**: Roda como guardrail durante toda a execucao; bloqueia se Player, idles ou gameplay forem tocados.
- **US3 (P3)**: Consolida evidencia depois que os testes tecnicos existem.

### MVP Scope

MVP minimo: completar Phases 1-4, criar `test_neutral` e `test_head`, registrar manifesto parcial e validar que o Player/idles nao foram alterados. O MVP nao deve ser tratado como aprovacao da feature completa.

---

## Parallel Opportunities

- T002, T003 e T004 podem ser executadas em paralelo apos T001.
- T012 e T013 podem ser executadas em paralelo apos T010.
- T015 e T016 podem ser executadas em paralelo com a validacao de manifestos, desde que nenhum arquivo seja alterado.
- T051-T054 podem ser preparados em paralelo em rascunho, mas a consolidacao final do JSON deve evitar conflito de escrita em `rig_articulation_test_manifest.json`.
- T074-T078 podem ser executadas em paralelo apos T073 porque atualizam documentos diferentes.

## Parallel Example: User Story 1

```text
T027: Aplicar rotacao leve no teste de cabeca em scenes/rig/AntonioRafaelRigLab.tscn
T031: Aplicar inclinacao leve do tronco em scenes/rig/AntonioRafaelRigLab.tscn
```

Observacao: embora conceitualmente independentes, edicoes na mesma cena devem ser sequenciadas quando houver um unico executor para evitar conflito no arquivo `.tscn`.

## Parallel Example: User Story 3

```text
T074: Atualizar docs/technical/rig-refinement-v1.md
T075: Atualizar docs/technical/rig-assembly-v1.md
T076: Atualizar docs/technical/rig-pipeline.md
T077: Atualizar docs/technical/character-pipeline.md
T078: Atualizar docs/art/antonio-rafael.md
```

---

## Implementation Strategy

### MVP First

1. Completar Phase 1 e Phase 2.
2. Criar `test_neutral` e `test_head`.
3. Registrar manifesto parcial e validar escopo.
4. Parar para uma revisao curta se a cabeca/pescoco quebrar visualmente.

### Incremental Delivery

1. Neutral + head.
2. Torso/colete/mochila.
3. Bracos/patch/divisa.
4. Pernas/quadril/botas.
5. Combined pose.
6. Manifesto, preview, validacao e documentacao.
7. Gate humano.

### Guardrails

- Nao editar `Player.tscn`.
- Nao editar scripts do Player.
- Nao editar sprites idle aprovados.
- Nao criar walk cycle.
- Nao criar animacao oficial.
- Nao criar gameplay.
- Nao fazer commit.
- Nao fazer push.
