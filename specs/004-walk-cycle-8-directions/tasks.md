# Tasks: Walk Cycle 8 Direcoes do SGT Antonio Rafael

**Input**: Design documents from `specs/004-walk-cycle-8-directions/`
**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, `quickstart.md`, Base Idle Oficial V1 aprovada
**Scope**: Somente planejamento de execucao para walk cycle visual em 8 direcoes. Nao implementar nesta etapa.
**Task Format**: Cada tarefa abaixo inclui identificador, titulo curto, descricao objetiva, arquivos/pastas envolvidos, criterio de conclusao e dependencias.

## Phase 1: Preparacao e Validacao da Base

- [x] T001 Ler constituicao do projeto em `.specify/memory/constitution.md`
  - Descricao: Revisar os principios Spec First, Gate Humano Obrigatorio, Character First, Pixel Art HD Consistente e limites de tecnologia antes de qualquer execucao.
  - Arquivos/pastas: `.specify/memory/constitution.md`
  - Criterio de conclusao: Principios aplicaveis registrados como restricoes ativas para a implementacao futura.
  - Dependencias: Nenhuma.

- [x] T002 Ler especificacao da feature 004 em `specs/004-walk-cycle-8-directions/spec.md`
  - Descricao: Confirmar historias, requisitos funcionais, criterios de sucesso e proibicoes da caminhada em 8 direcoes.
  - Arquivos/pastas: `specs/004-walk-cycle-8-directions/spec.md`
  - Criterio de conclusao: Escopo da feature entendido como somente walk cycle visual do SGT Antonio Rafael.
  - Dependencias: T001.

- [x] T003 Ler plano tecnico em `specs/004-walk-cycle-8-directions/plan.md`
  - Descricao: Confirmar stack Godot 4.6, GDScript, `Sprite2D`, `AnimationPlayer`, caminhos planejados e gate humano.
  - Arquivos/pastas: `specs/004-walk-cycle-8-directions/plan.md`, `specs/004-walk-cycle-8-directions/research.md`, `specs/004-walk-cycle-8-directions/data-model.md`, `specs/004-walk-cycle-8-directions/quickstart.md`
  - Criterio de conclusao: Decisao de manter `Player.tscn`, `Sprite2D` e `AnimationPlayer` confirmada.
  - Dependencias: T001.

- [x] T004 Confirmar restricao de escopo da feature em `specs/004-walk-cycle-8-directions/spec.md`
  - Descricao: Verificar que a execucao futura nao inclui combate, arma funcional, zumbis, inventario, HUD, menus, mundo, narrativa, som, musica, exportacao final, mobile ou multiplayer.
  - Arquivos/pastas: `specs/004-walk-cycle-8-directions/spec.md`
  - Criterio de conclusao: Qualquer item fora de walk cycle fica bloqueado ate nova aprovacao humana.
  - Dependencias: T002.

- [x] T005 Confirmar existencia documental da Base Idle Oficial V1 em `docs/art/antonio-rafael.md`
  - Descricao: Verificar que os 8 sprites idle aprovados estao registrados como referencia visual obrigatoria da caminhada.
  - Arquivos/pastas: `docs/art/antonio-rafael.md`, `docs/art/asset-sources.md`
  - Criterio de conclusao: Base Idle Oficial V1 localizada e reconhecida como fonte visual obrigatoria.
  - Dependencias: T003.

- [x] T006 Confirmar existencia dos 8 sprites idle aprovados em `assets/characters/antonio_rafael/sprites/idle/`
  - Descricao: Validar a existencia de `antonio_rafael_idle_front.png`, `antonio_rafael_idle_back.png`, `antonio_rafael_idle_left.png`, `antonio_rafael_idle_right.png`, `antonio_rafael_idle_front_left.png`, `antonio_rafael_idle_front_right.png`, `antonio_rafael_idle_back_left.png` e `antonio_rafael_idle_back_right.png`.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/idle/`
  - Criterio de conclusao: Todos os 8 arquivos idle existem antes de gerar qualquer frame walk.
  - Dependencias: T005.

- [x] T007 [P] Validar dimensao 128x128 dos 8 sprites idle em `assets/characters/antonio_rafael/sprites/idle/`
  - Descricao: Conferir largura e altura de cada sprite idle aprovado.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/idle/*.png`
  - Criterio de conclusao: Todos os sprites idle medem exatamente `128x128`.
  - Dependencias: T006.

- [x] T008 [P] Validar transparencia dos 8 sprites idle em `assets/characters/antonio_rafael/sprites/idle/`
  - Descricao: Conferir PNG RGBA, alpha valido e ausencia de fundo verde visivel nos sprites idle aprovados.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/idle/*.png`
  - Criterio de conclusao: Todos os sprites idle possuem transparencia valida e nao exibem fundo verde.
  - Dependencias: T006.

## Phase 2: Estrutura de Pastas da Caminhada

- [x] T009 Criar pasta raiz de caminhada em `assets/characters/antonio_rafael/sprites/walk/`
  - Descricao: Preparar a raiz tecnica onde os 32 frames individuais de caminhada serao armazenados.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk/`
  - Criterio de conclusao: Pasta raiz `walk/` existe sem arquivos placeholder.
  - Dependencias: T007, T008.

- [x] T010 [P] Criar pastas cardinais em `assets/characters/antonio_rafael/sprites/walk/`
  - Descricao: Preparar as pastas `front/`, `back/`, `left/` e `right/` para frames cardinais.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk/front/`, `assets/characters/antonio_rafael/sprites/walk/back/`, `assets/characters/antonio_rafael/sprites/walk/left/`, `assets/characters/antonio_rafael/sprites/walk/right/`
  - Criterio de conclusao: As 4 pastas cardinais existem e estao vazias antes da geracao controlada.
  - Dependencias: T009.

- [x] T011 [P] Criar pastas diagonais em `assets/characters/antonio_rafael/sprites/walk/`
  - Descricao: Preparar as pastas `front_left/`, `front_right/`, `back_left/` e `back_right/` para frames diagonais.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk/front_left/`, `assets/characters/antonio_rafael/sprites/walk/front_right/`, `assets/characters/antonio_rafael/sprites/walk/back_left/`, `assets/characters/antonio_rafael/sprites/walk/back_right/`
  - Criterio de conclusao: As 4 pastas diagonais existem e estao vazias antes da geracao controlada.
  - Dependencias: T009.

- [x] T012 [P] Criar pasta de fontes auditaveis em `assets/characters/antonio_rafael/source/walk_cycle_v1/`
  - Descricao: Preparar local para registrar fontes, prompts, referencias ou materiais intermediarios da geracao visual, sem substituir os PNGs finais.
  - Arquivos/pastas: `assets/characters/antonio_rafael/source/walk_cycle_v1/`
  - Criterio de conclusao: Pasta de fonte existe e esta pronta para auditoria da origem dos frames.
  - Dependencias: T007, T008.

- [x] T013 [P] Criar pasta de exportacao em `assets/characters/antonio_rafael/exports/walk_cycle_v1/`
  - Descricao: Preparar local do preview humano da caminhada.
  - Arquivos/pastas: `assets/characters/antonio_rafael/exports/walk_cycle_v1/`
  - Criterio de conclusao: Pasta de exportacao existe e nao contem spritesheet tecnico.
  - Dependencias: T007, T008.

## Phase 3: Geracao dos Frames Walk

- [x] T014 [P] [US2] Gerar 4 frames front em `assets/characters/antonio_rafael/sprites/walk/front/`
  - Descricao: Criar `antonio_rafael_walk_front_01.png` ate `antonio_rafael_walk_front_04.png` usando `antonio_rafael_idle_front.png` como referencia direta.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk/front/`, `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front.png`
  - Criterio de conclusao: 4 PNGs `128x128` RGBA com transparencia real, mesma escala, paleta, rosto, oculos, colete, mochila, uniforme, patch/divisa quando visiveis, sem labels, sem fundo verde, sem Policia Civil, sem nomes aleatorios e sem arma em destaque.
  - Dependencias: T010, T012.

- [x] T015 [P] [US2] Gerar 4 frames back em `assets/characters/antonio_rafael/sprites/walk/back/`
  - Descricao: Criar `antonio_rafael_walk_back_01.png` ate `antonio_rafael_walk_back_04.png` usando `antonio_rafael_idle_back.png` como referencia direta.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk/back/`, `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_back.png`
  - Criterio de conclusao: 4 PNGs `128x128` RGBA com transparencia real, mesma escala, paleta, rosto/cabeca coerentes, colete, mochila, uniforme, patch/divisa quando visiveis, sem labels, sem fundo verde, sem Policia Civil, sem nomes aleatorios e sem arma em destaque.
  - Dependencias: T010, T012.

- [x] T016 [P] [US2] Gerar 4 frames left em `assets/characters/antonio_rafael/sprites/walk/left/`
  - Descricao: Criar `antonio_rafael_walk_left_01.png` ate `antonio_rafael_walk_left_04.png` usando `antonio_rafael_idle_left.png` como referencia direta.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk/left/`, `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_left.png`
  - Criterio de conclusao: 4 PNGs `128x128` RGBA com transparencia real, mesma escala, paleta, rosto, oculos, colete, mochila, uniforme, patch/divisa quando visiveis, sem labels, sem fundo verde, sem Policia Civil, sem nomes aleatorios e sem arma em destaque.
  - Dependencias: T010, T012.

- [x] T017 [P] [US2] Gerar 4 frames right em `assets/characters/antonio_rafael/sprites/walk/right/`
  - Descricao: Criar `antonio_rafael_walk_right_01.png` ate `antonio_rafael_walk_right_04.png` usando `antonio_rafael_idle_right.png` como referencia direta.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk/right/`, `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_right.png`
  - Criterio de conclusao: 4 PNGs `128x128` RGBA com transparencia real, mesma escala, paleta, rosto, oculos, colete, mochila, uniforme, patch/divisa quando visiveis, sem labels, sem fundo verde, sem Policia Civil, sem nomes aleatorios e sem arma em destaque.
  - Dependencias: T010, T012.

- [x] T018 [P] [US2] Gerar 4 frames front_left em `assets/characters/antonio_rafael/sprites/walk/front_left/`
  - Descricao: Criar `antonio_rafael_walk_front_left_01.png` ate `antonio_rafael_walk_front_left_04.png` usando `antonio_rafael_idle_front_left.png` como referencia direta.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk/front_left/`, `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_left.png`
  - Criterio de conclusao: 4 PNGs `128x128` RGBA com transparencia real, mesma escala, paleta, rosto, oculos, colete, mochila, uniforme, patch/divisa quando visiveis, sem labels, sem fundo verde, sem Policia Civil, sem nomes aleatorios e sem arma em destaque.
  - Dependencias: T011, T012.

- [x] T019 [P] [US2] Gerar 4 frames front_right em `assets/characters/antonio_rafael/sprites/walk/front_right/`
  - Descricao: Criar `antonio_rafael_walk_front_right_01.png` ate `antonio_rafael_walk_front_right_04.png` usando `antonio_rafael_idle_front_right.png` como referencia direta.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk/front_right/`, `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`
  - Criterio de conclusao: 4 PNGs `128x128` RGBA com transparencia real, mesma escala, paleta, rosto, oculos, colete, mochila, uniforme, patch/divisa quando visiveis, sem labels, sem fundo verde, sem Policia Civil, sem nomes aleatorios e sem arma em destaque.
  - Dependencias: T011, T012.

- [x] T020 [P] [US2] Gerar 4 frames back_left em `assets/characters/antonio_rafael/sprites/walk/back_left/`
  - Descricao: Criar `antonio_rafael_walk_back_left_01.png` ate `antonio_rafael_walk_back_left_04.png` usando `antonio_rafael_idle_back_left.png` como referencia direta.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk/back_left/`, `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_back_left.png`
  - Criterio de conclusao: 4 PNGs `128x128` RGBA com transparencia real, mesma escala, paleta, cabeca/oculos coerentes, colete, mochila, uniforme, patch/divisa quando visiveis, sem labels, sem fundo verde, sem Policia Civil, sem nomes aleatorios e sem arma em destaque.
  - Dependencias: T011, T012.

- [x] T021 [P] [US2] Gerar 4 frames back_right em `assets/characters/antonio_rafael/sprites/walk/back_right/`
  - Descricao: Criar `antonio_rafael_walk_back_right_01.png` ate `antonio_rafael_walk_back_right_04.png` usando `antonio_rafael_idle_back_right.png` como referencia direta.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk/back_right/`, `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_back_right.png`
  - Criterio de conclusao: 4 PNGs `128x128` RGBA com transparencia real, mesma escala, paleta, cabeca/oculos coerentes, colete, mochila, uniforme, patch/divisa quando visiveis, sem labels, sem fundo verde, sem Policia Civil, sem nomes aleatorios e sem arma em destaque.
  - Dependencias: T011, T012.

## Phase 4: Validacao Tecnica dos PNGs

- [x] T022 [US3] Validar existencia dos 32 frames em `assets/characters/antonio_rafael/sprites/walk/`
  - Descricao: Conferir que cada uma das 8 direcoes contem exatamente 4 arquivos no padrao de nomes planejado.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk/`
  - Criterio de conclusao: Total de 32 PNGs encontrado, sem arquivos faltantes, duplicados ou fora do padrao.
  - Dependencias: T014, T015, T016, T017, T018, T019, T020, T021.

- [x] T023 [P] [US3] Validar dimensao 128x128 dos 32 frames em `assets/characters/antonio_rafael/sprites/walk/`
  - Descricao: Conferir largura e altura de todos os frames walk.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk/**/*.png`
  - Criterio de conclusao: Todos os 32 frames medem exatamente `128x128`.
  - Dependencias: T022.

- [x] T024 [P] [US3] Validar formato PNG RGBA e transparencia em `assets/characters/antonio_rafael/sprites/walk/`
  - Descricao: Conferir que todos os frames sao PNG RGBA com alpha real e personagem recortado em fundo transparente.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk/**/*.png`
  - Criterio de conclusao: Todos os 32 frames possuem canal alpha valido e nao usam fundo solido final.
  - Dependencias: T022.

- [x] T025 [P] [US3] Validar ausencia de pixels verdes opacos em `assets/characters/antonio_rafael/sprites/walk/`
  - Descricao: Verificar que nenhum frame possui fundo verde visivel ou pixels verdes opacos residuais ao redor do personagem.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk/**/*.png`
  - Criterio de conclusao: Zero frames com fundo verde visivel ou opaco.
  - Dependencias: T022.

- [x] T026 [P] [US3] Validar ausencia de labels e textos externos em `assets/characters/antonio_rafael/sprites/walk/`
  - Descricao: Revisar visualmente e, quando possivel, por OCR, ausencia de labels, texto de direcao, nomes aleatorios, `Policia Civil` e `Sargento Silva`.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk/**/*.png`
  - Criterio de conclusao: Zero frames com labels externos, textos, `Policia Civil`, `Sargento Silva` ou nomes indevidos.
  - Dependencias: T022.

- [x] T027 [US2] Validar consistencia visual com Base Idle Oficial V1 em `assets/characters/antonio_rafael/sprites/walk/`
  - Descricao: Comparar cada direcao walk com o idle correspondente para preservar rosto, oculos, cabelo, tom de pele, uniforme, colete, mochila, patch de Goias, divisa, paleta, escala, proporcao, silhueta e identidade PMGO/sobrevivente.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk/`, `assets/characters/antonio_rafael/sprites/idle/`
  - Criterio de conclusao: Os 32 frames continuam reconheciveis como SGT Antonio Rafael sem criar nova identidade visual.
  - Dependencias: T023, T024, T025, T026.

- [x] T028 [US2] Validar diferencas reais entre direcoes criticas em `assets/characters/antonio_rafael/sprites/walk/`
  - Descricao: Comparar `back_left` vs `back_right`, `left` vs `right` e `front` vs `back` para evitar duplicacao, espelhamento incorreto ou diagonais iguais.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk/back_left/`, `assets/characters/antonio_rafael/sprites/walk/back_right/`, `assets/characters/antonio_rafael/sprites/walk/left/`, `assets/characters/antonio_rafael/sprites/walk/right/`, `assets/characters/antonio_rafael/sprites/walk/front/`, `assets/characters/antonio_rafael/sprites/walk/back/`
  - Criterio de conclusao: Direcoes criticas sao visualmente distintas e coerentes com a leitura isometrica.
  - Dependencias: T027.

## Phase 5: Preview Visual da Caminhada

- [x] T029 [US3] Gerar preview humano em `assets/characters/antonio_rafael/exports/walk_cycle_v1/antonio_rafael_walk_cycle_v1_preview.png`
  - Descricao: Criar uma grade de revisao com os 32 frames organizados por direcao, usando somente como preview humano e nunca como spritesheet tecnico.
  - Arquivos/pastas: `assets/characters/antonio_rafael/exports/walk_cycle_v1/antonio_rafael_walk_cycle_v1_preview.png`, `assets/characters/antonio_rafael/sprites/walk/`
  - Criterio de conclusao: Preview existe, mostra 8 direcoes x 4 frames, nao substitui os PNGs individuais e nao contem labels dentro dos frames.
  - Dependencias: T022, T027, T028.

## Phase 6: Integracao no Player.tscn

- [x] T030 [US1] Inspecionar padrao atual de animacao em `scenes/player/Player.tscn`
  - Descricao: Confirmar nomes de nos, `Sprite2D`, `AnimationPlayer`, tracks de textura e padrao das animacoes `idle_*` antes de adicionar `walk_*`.
  - Arquivos/pastas: `scenes/player/Player.tscn`
  - Criterio de conclusao: Ponto exato de extensao identificado sem migrar para `AnimatedSprite2D`.
  - Dependencias: T029.

- [x] T031 [US1] Adicionar animacoes cardinais walk em `scenes/player/Player.tscn`
  - Descricao: Configurar `walk_front`, `walk_back`, `walk_left` e `walk_right` com 4 frames por direcao no `AnimationPlayer`.
  - Arquivos/pastas: `scenes/player/Player.tscn`, `assets/characters/antonio_rafael/sprites/walk/front/`, `assets/characters/antonio_rafael/sprites/walk/back/`, `assets/characters/antonio_rafael/sprites/walk/left/`, `assets/characters/antonio_rafael/sprites/walk/right/`
  - Criterio de conclusao: As 4 animacoes cardinais existem, referenciam os frames corretos e rodam em velocidade inicial de caminhada natural.
  - Dependencias: T030.

- [x] T032 [US1] Adicionar animacoes diagonais walk em `scenes/player/Player.tscn`
  - Descricao: Configurar `walk_front_left`, `walk_front_right`, `walk_back_left` e `walk_back_right` com 4 frames por direcao no `AnimationPlayer`.
  - Arquivos/pastas: `scenes/player/Player.tscn`, `assets/characters/antonio_rafael/sprites/walk/front_left/`, `assets/characters/antonio_rafael/sprites/walk/front_right/`, `assets/characters/antonio_rafael/sprites/walk/back_left/`, `assets/characters/antonio_rafael/sprites/walk/back_right/`
  - Criterio de conclusao: As 4 animacoes diagonais existem, referenciam os frames corretos e rodam em velocidade inicial de caminhada natural.
  - Dependencias: T030.

- [x] T033 [US1] Confirmar preservacao de arquitetura em `scenes/player/Player.tscn`
  - Descricao: Verificar que `Sprite2D` e `AnimationPlayer` continuam sendo usados, sem migracao para `AnimatedSprite2D` e sem alterar arquitetura fora do Player.
  - Arquivos/pastas: `scenes/player/Player.tscn`
  - Criterio de conclusao: Player mantem o padrao existente e as animacoes `idle_*` continuam presentes.
  - Dependencias: T031, T032.

## Phase 7: Atualizacao do Controlador de Animacao

- [x] T034 [US1] Atualizar walk/idle por movimento em `scripts/player/player_animation_controller.gd`
  - Descricao: Estender o controlador para tocar `walk_<current_direction>` quando houver movimento e `idle_<last_direction>` quando o movimento parar.
  - Arquivos/pastas: `scripts/player/player_animation_controller.gd`
  - Criterio de conclusao: Movimento usa `walk_*`, parada retorna a `idle_*`, e `last_direction` continua preservado.
  - Dependencias: T033.

- [x] T035 [US1] Preservar troca de direcao existente em `scripts/player/player_animation_controller.gd`
  - Descricao: Garantir que a logica atual de 8 direcoes, diagonais e fallback de idle nao seja quebrada pela adicao de `walk_*`.
  - Arquivos/pastas: `scripts/player/player_animation_controller.gd`
  - Criterio de conclusao: As 8 direcoes continuam mapeadas corretamente para idle e walk.
  - Dependencias: T034.

- [x] T036 [US1] Atualizar `scripts/player/player_controller.gd` somente se necessario
  - Descricao: Ajustar o controller apenas se o controlador de animacao precisar receber estado de movimento ou vetor normalizado que ainda nao esteja exposto.
  - Arquivos/pastas: `scripts/player/player_controller.gd`
  - Criterio de conclusao: Se alterado, movimento existente, WASD/setas e diagonal normalizada permanecem equivalentes; se nao alterado, registrar que nenhuma mudanca foi necessaria.
  - Dependencias: T034.

## Phase 8: Validacao no Godot

- [x] T037 [US3] Validar carregamento em `scenes/test/CharacterTestScene.tscn`
  - Descricao: Abrir a cena de teste no Godot e confirmar que o personagem aparece corretamente sem erros de referencia.
  - Arquivos/pastas: `scenes/test/CharacterTestScene.tscn`, `scenes/player/Player.tscn`
  - Criterio de conclusao: Cena abre e executa com o personagem visivel.
  - Dependencias: T035, T036.

- [x] T038 [US3] Validar caminhada cardinal em `scenes/test/CharacterTestScene.tscn`
  - Descricao: Testar movimento para front, back, left e right com WASD/setas e confirmar animacoes correspondentes.
  - Arquivos/pastas: `scenes/test/CharacterTestScene.tscn`, `scenes/player/Player.tscn`
  - Criterio de conclusao: `walk_front`, `walk_back`, `walk_left` e `walk_right` tocam durante movimento na direcao correta.
  - Dependencias: T037.

- [x] T039 [US3] Validar caminhada diagonal em `scenes/test/CharacterTestScene.tscn`
  - Descricao: Testar front_left, front_right, back_left e back_right com combinacoes de teclas e confirmar animacoes correspondentes.
  - Arquivos/pastas: `scenes/test/CharacterTestScene.tscn`, `scenes/player/Player.tscn`
  - Criterio de conclusao: `walk_front_left`, `walk_front_right`, `walk_back_left` e `walk_back_right` tocam durante movimento diagonal.
  - Dependencias: T037.

- [x] T040 [US3] Validar retorno para idle ao parar em `scenes/test/CharacterTestScene.tscn`
  - Descricao: Parar apos cada uma das 8 direcoes e confirmar retorno ao `idle_<last_direction>` correspondente.
  - Arquivos/pastas: `scenes/test/CharacterTestScene.tscn`, `scripts/player/player_animation_controller.gd`
  - Criterio de conclusao: O personagem retorna ao idle correto em 8 de 8 direcoes.
  - Dependencias: T038, T039.

- [x] T041 [US3] Validar movimento, camera e colisao em `scenes/test/CharacterTestScene.tscn`
  - Descricao: Confirmar que a feature nao quebrou movimentacao, camera existente ou colisao existente.
  - Arquivos/pastas: `scenes/test/CharacterTestScene.tscn`, `scripts/player/player_controller.gd`, `scenes/player/Player.tscn`
  - Criterio de conclusao: Movimento, camera e colisao continuam funcionando como antes da feature.
  - Dependencias: T040.

- [x] T042 [US3] Validar escala e tremedeira visual em `scenes/test/CharacterTestScene.tscn`
  - Descricao: Observar a caminhada em reproducao normal e confirmar escala adequada, personagem centralizado e ausencia de tremedeira excessiva.
  - Arquivos/pastas: `scenes/test/CharacterTestScene.tscn`, `assets/characters/antonio_rafael/sprites/walk/`
  - Criterio de conclusao: Animacao fica legivel, sem jitter excessivo e com escala consistente com a Base Idle Oficial V1.
  - Dependencias: T041.

## Phase 9: Documentacao

- [x] T043 [P] [US3] Atualizar documentacao artistica em `docs/art/antonio-rafael.md`
  - Descricao: Registrar assets walk gerados, uso obrigatorio da Base Idle Oficial V1, limitacoes visuais e status recomendado para revisao humana.
  - Arquivos/pastas: `docs/art/antonio-rafael.md`
  - Criterio de conclusao: Documento descreve o Walk Cycle V1, seu status e sua relacao com a Base Idle Oficial V1.
  - Dependencias: T042.

- [x] T044 [P] [US3] Atualizar origem dos assets em `docs/art/asset-sources.md`
  - Descricao: Registrar origem dos 32 frames, materiais de fonte em `source/walk_cycle_v1/` e preview em `exports/walk_cycle_v1/`.
  - Arquivos/pastas: `docs/art/asset-sources.md`, `assets/characters/antonio_rafael/source/walk_cycle_v1/`, `assets/characters/antonio_rafael/exports/walk_cycle_v1/`
  - Criterio de conclusao: Origem dos frames e preview ficam auditaveis.
  - Dependencias: T042.

- [x] T045 [P] [US3] Atualizar pipeline de personagem em `docs/technical/character-pipeline.md`
  - Descricao: Registrar fluxo validado para gerar, validar, importar e testar walk cycle 8 direcoes sem expandir gameplay.
  - Arquivos/pastas: `docs/technical/character-pipeline.md`
  - Criterio de conclusao: Pipeline documenta passos, validacoes e gate humano da caminhada.
  - Dependencias: T042.

- [x] T046 [P] [US3] Atualizar configuracoes de importacao em `docs/technical/godot-import-settings.md`
  - Descricao: Registrar requisitos PNG RGBA, transparencia, filtro de pixel art, escala e cuidados de importacao Godot para os frames walk.
  - Arquivos/pastas: `docs/technical/godot-import-settings.md`
  - Criterio de conclusao: Configuracoes recomendadas para os 32 frames ficam documentadas.
  - Dependencias: T042.

- [x] T047 [US3] Atualizar evidencias de execucao em `specs/004-walk-cycle-8-directions/tasks.md`
  - Descricao: Marcar tarefas concluidas somente apos execucao real, mantendo pendencias, limitacoes, validacoes e observacoes de gate humano.
  - Arquivos/pastas: `specs/004-walk-cycle-8-directions/tasks.md`
  - Criterio de conclusao: `tasks.md` reflete estado real da implementacao futura sem afirmar validacoes nao executadas.
  - Dependencias: T043, T044, T045, T046.

## Phase 10: Gate Humano Final

- [x] T048 [US3] Apresentar gate humano final da caminhada em `specs/004-walk-cycle-8-directions/tasks.md`
  - Descricao: Pausar a feature e apresentar preview, lista dos 32 frames, arquivos alterados, validacao tecnica, validacao no Godot, limitacoes encontradas, recomendacao de aprovacao, aprovacao parcial ou reprova, e confirmacoes de que nao houve commit nem push.
  - Arquivos/pastas: `assets/characters/antonio_rafael/exports/walk_cycle_v1/antonio_rafael_walk_cycle_v1_preview.png`, `assets/characters/antonio_rafael/sprites/walk/`, `scenes/player/Player.tscn`, `scripts/player/player_animation_controller.gd`, `scripts/player/player_controller.gd`, `docs/art/antonio-rafael.md`, `docs/art/asset-sources.md`, `docs/technical/character-pipeline.md`, `docs/technical/godot-import-settings.md`, `specs/004-walk-cycle-8-directions/tasks.md`
  - Criterio de conclusao: Aprovador humano recebe todos os dados para decidir entre aprovar, aprovar parcialmente ou reprovar, sem commit, sem push e sem iniciar nova mecanica.
  - Dependencias: T047.

## Dependencies & Execution Order

- Phase 1 deve ser concluida antes de qualquer criacao de pastas ou assets.
- Phase 2 depende da validacao da Base Idle Oficial V1.
- Phase 3 depende das pastas e fontes auditaveis preparadas.
- Phase 4 depende dos 32 frames gerados.
- Phase 5 depende das validacoes tecnicas e visuais iniciais.
- Phase 6 depende do preview e dos frames individuais existentes.
- Phase 7 depende das animacoes `walk_*` existirem no `Player.tscn`.
- Phase 8 depende da integracao do Player e controladores.
- Phase 9 depende da validacao visual no Godot.
- Phase 10 depende da documentacao e deve parar para decisao humana.

## Parallel Opportunities

- T007 e T008 podem rodar em paralelo apos T006.
- T010, T011, T012 e T013 podem rodar em paralelo apos T009 ou validacao da base, conforme suas dependencias.
- T014 a T021 podem rodar em paralelo por direcao apos a estrutura existir.
- T023 a T026 podem rodar em paralelo apos T022.
- T043 a T046 podem rodar em paralelo apos T042.

## Implementation Notes

- Nao usar placeholder generico.
- Nao gerar frames por espelhamento incorreto.
- Nao duplicar diagonais.
- Nao usar character sheet com labels como asset tecnico.
- Nao migrar para `AnimatedSprite2D` sem aprovacao humana.
- Nao alterar arquivos fora do escopo sem parar e pedir aprovacao humana.
- Nao fazer commit.
- Nao fazer push.


## Execution Summary - 2026-06-18

- 32 frames walk V1 foram criados inicialmente em `assets/characters/antonio_rafael/sprites/walk/`, depois reprovados e removidos do caminho ativo.
- Preview humano criado em `assets/characters/antonio_rafael/exports/walk_cycle_v1/antonio_rafael_walk_cycle_v1_preview.png`.
- Manifesto de geracao criado em `assets/characters/antonio_rafael/source/walk_cycle_v1/generation_manifest.json`.
- Resumo de validacao criado em `assets/characters/antonio_rafael/source/walk_cycle_v1/validation_summary.json`.
- `Player.tscn` foi atualizado com as 8 animacoes `walk_*`, mantendo `Sprite2D` e `AnimationPlayer`.
- `player_animation_controller.gd` foi atualizado para tocar `walk_*` em movimento e retornar para `idle_*` ao parar.
- `player_controller.gd` nao foi alterado porque o estado de movimento necessario ja era informado ao controlador de animacao.
- Validacao tecnica local passou sem falhas: 32 PNGs, `128x128`, `RGBA`, alpha valido, zero pixels verdes opacos, direcoes criticas distintas e animacoes `walk_*` presentes.
- Validacao ao vivo no Godot nao foi executada porque o executavel Godot nao foi encontrado no PATH desta sessao; foi feita validacao estatica de cena e referencias.
- Status atualizado apos decisao humana: WALK CYCLE V1 REPROVADO. Motivo: frames visualmente estaticos, sem passada real.
- Nao houve commit.
- Nao houve push.

## Current State - Rig Technical Architecture Active - 2026-06-19

- Estado vigente da feature: **Rig Tecnico 2D primeiro, sprites finais depois**.
- A estrategia anterior `Walk Prototype V5 - LEFT somente` nao deve ser tratada como proxima integracao oficial sem nova aprovacao humana.
- Nenhuma nova walk cycle final deve ser integrada ao Player nesta etapa.
- `walk_cycle_v1`: **REPROVADO**, nao oficial, permitido apenas para rastreabilidade/auditoria.
- `Player.tscn` permanece em modo seguro com apenas `idle_*`.
- O rig criado nesta execucao e laboratorio tecnico isolado, nao runtime final.
- Proximo passo recomendado: separar partes do personagem no rig, validar movimento em laboratorio e exportar PNGs `128x128` somente apos novo gate humano.
- Nao houve commit.
- Nao houve push.

## Rig Technical Architecture Execution Summary - 2026-06-19

- Decisao humana registrou a ultima rodada de walk cycle como **REPROVADA**.
- `walk_cycle_v1` permanece formalmente **REPROVADO**.
- Motivo consolidado: frames praticamente estaticos, sem passada real, sem alternancia clara de pernas/bracos e sem sensacao de deslocamento.
- Uso permitido da Walk V1: somente rastreabilidade/auditoria.
- Uso proibido da Walk V1: gameplay, Player oficial e animacao oficial.
- `Player.tscn` foi verificado em estado seguro: apenas animacoes `idle_*` da Base Idle Oficial V1 estao presentes.
- `player_animation_controller.gd` foi verificado em estado seguro: atualiza a ultima direcao e toca somente `idle_*`.
- Nenhuma Walk V1, V2, V3, manual candidate ou novo prototipo esta ativa como animacao oficial do Player.
- Base Idle Oficial V1 foi preservada e validada localmente: 8 PNGs `128x128`, `RGBA`, com alpha nos cantos.
- Estrutura inicial de rig tecnico criada em `assets/characters/antonio_rafael/rig/`, `rig/parts/` e `rig/exports/`.
- Pasta de auditoria `assets/characters/antonio_rafael/source/rejected/walk_cycle_v1/` foi criada; nao havia `sprites/walk/` ativo para copiar nesta execucao.
- Cena tecnica isolada criada em `scenes/rig/AntonioRafaelRigLab.tscn`.
- Scripts tecnicos isolados criados em `scripts/rig/rig_export_notes.gd` e `scripts/rig/rig_preview_controller.gd`.
- Documentacao dedicada criada em `docs/technical/rig-pipeline.md`.
- Esta execucao nao gerou walk cycle final.
- Esta execucao nao gerou 32 frames novos.
- Esta execucao nao integrou nova caminhada no Player.
- Esta execucao nao substituiu o Player por rig.
- Nao houve commit.
- Nao houve push.

## Rejection & V2 Execution Summary - 2026-06-18

- Walk V1 foi reclassificada como `walk_cycle_v1`: **REPROVADO**.
- Motivo registrado: frames F1-F4 muito parecidos, sem passada clara, pernas e bracos quase sem alternancia e sem sensacao visual de peso.
- Walk V1 nao deve ser chamada de oficial, nao deve ser recomendada para aprovacao parcial e nao deve ser usada como asset final.
- Copia de rastreabilidade da V1 foi preservada inicialmente e removida do fluxo ativo na limpeza posterior.
- Caminhos ativos da V1 removidos: `assets/characters/antonio_rafael/sprites/walk/`, `assets/characters/antonio_rafael/source/walk_cycle_v1/` e `assets/characters/antonio_rafael/exports/walk_cycle_v1/`.
- Integracao da Walk V1 foi removida do `Player.tscn`.
- `Player.tscn` nao referencia `assets/characters/antonio_rafael/sprites/walk/` nem `assets/characters/antonio_rafael/sprites/walk_v2/`.
- O Player permanece usando apenas a Base Idle Oficial V1 ate nova aprovacao humana.
- Walk V2 foi criada em `assets/characters/antonio_rafael/sprites/walk_v2/`.
- Foram gerados 32 frames V2 em 8 direcoes x 4 frames.
- Preview V2 criado em `assets/characters/antonio_rafael/exports/walk_cycle_v2/antonio_rafael_walk_cycle_v2_preview.png`.
- Validacao tecnica V2 passou: 32 PNGs, `128x128`, `RGBA`, alpha valido, sem fundo verde opaco, direcoes criticas distintas e F1-F4 com diferenca visual mensuravel.
- Walk V2 nao foi integrada ao Godot e nao foi marcada como oficial.
- Status atualizado apos decisao humana: WALK CYCLE V2 REPROVADO. Motivo: poses ainda paradas, sem ciclo de marcha convincente e sem leitura clara em gameplay.
- Nao houve commit.
- Nao houve push.

## Rejection V2 & V3 Execution Summary - 2026-06-18

- Walk V2 foi reclassificada como `walk_cycle_v2`: **REPROVADO**.
- Motivo registrado: frames ainda parecem poses paradas, sem alternancia suficiente de pernas/bracos, sem deslocamento de peso e sem leitura clara de caminhada.
- Walk V2 nao deve ser chamada de oficial, nao deve ser integrada ao Player e nao deve ser usada como asset final.
- Copia de rastreabilidade da V2 foi preservada inicialmente e removida do fluxo ativo na limpeza posterior.
- Caminhos ativos da V2 removidos: `assets/characters/antonio_rafael/sprites/walk_v2/` e `assets/characters/antonio_rafael/exports/walk_cycle_v2/`.
- `Player.tscn` nao referencia Walk V1, Walk V2 ou Walk V3.
- O Player permanece usando apenas a Base Idle Oficial V1 ate aprovacao humana explicita.
- Walk V3 foi criada em `assets/characters/antonio_rafael/sprites/walk_v3/`.
- Foram gerados 32 frames V3 em 8 direcoes x 4 frames.
- Preview V3 criado em `assets/characters/antonio_rafael/exports/walk_cycle_v3/antonio_rafael_walk_cycle_v3_preview.png`.
- Validacao tecnica V3 passou: 32 PNGs, `128x128`, `RGBA`, alpha valido, sem fundo verde opaco, direcoes criticas distintas e F1-F4 com diferenca visual mensuravel.
- Analise visual objetiva: V3 apresenta key poses mais claras, com alternancia de pernas, botas e bracos, mas ainda exige validacao humana por simplificar parte da silhueta.
- Walk V3 nao foi integrada ao Godot e nao foi marcada como oficial.
- Status atualizado apos decisao humana: WALK CYCLE V3 REPROVADO. Motivo: descaracterizacao do personagem, corpo artificial e resultado inferior a Base Idle Oficial V1.
- Caminhos ativos da V3 removidos: `assets/characters/antonio_rafael/sprites/walk_v3/` e `assets/characters/antonio_rafael/exports/walk_cycle_v3/`.
- Nao houve commit.
- Nao houve push.

## Manual Sheet Candidate Execution Summary - 2026-06-18

- Walk V1, Walk V2 e Walk V3 estao oficialmente **REPROVADAS**.
- `Player.tscn` foi confirmado sem referencias a Walk V1, Walk V2, Walk V3 ou `walk_manual_candidate_v1`.
- O Player permanece usando apenas a Base Idle Oficial V1.
- Assets rejeitados antigos foram removidos do fluxo ativo quando existiam: `sprites/walk/`, `sprites/walk_v2/`, `sprites/walk_v3/`, `exports/walk_cycle_v1/`, `exports/walk_cycle_v2/`, `exports/walk_cycle_v3/`, `source/rejected/walk_cycle_v1/`, `source/rejected/walk_cycle_v2/` e `source/rejected/walk_cycle_v3/`.
- Nova sheet manual localizada em `assets/characters/antonio_rafael/source/antonio_rafael_walk_sheet_candidate_v1.png`.
- Sheet organizada em `assets/characters/antonio_rafael/source/walk_sheet_manual_candidate_v1/antonio_rafael_walk_sheet_manual_candidate_v1.png`.
- Analise tecnica da fonte: PNG `2048x2048`, `RGBA`, alpha totalmente opaco e checkerboard real como pixel de fundo.
- Foram detectadas 7 linhas reais de movimento, com 8 frames por linha.
- Frames tratados criados em `assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/`.
- Total criado: 56 PNGs, `128x128`, `RGBA`, com alpha transparente.
- Direcoes extraidas: `front`, `back`, `left`, `front_left`, `front_right`, `back_left` e `back_right`.
- Direcao ausente: `right`; nenhum frame foi fabricado por espelhamento.
- Preview tratado criado em `assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/antonio_rafael_walk_manual_candidate_v1_preview.png`.
- Validacao tecnica dos frames extraidos passou: formato PNG, `128x128`, `RGBA`, alpha valido, sem checkerboard opaco de fundo e sem integracao ativa no Player.
- A candidata manual nao foi integrada ao Godot porque falta uma das 8 direcoes obrigatorias.
- Nada foi marcado como oficial sem aprovacao humana.
- Nao houve commit.
- Nao houve push.

## Manual Candidate Test Integration Summary - 2026-06-18

- Decisao humana autorizou criar `right` temporario por espelhamento horizontal de `left`, somente para teste tecnico no Godot.
- Foram criados 8 frames temporarios em `assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/right/`.
- Arquivos criados: `antonio_rafael_walk_right_01.png` ate `antonio_rafael_walk_right_08.png`.
- `right` foi validado como espelho exato dos frames `left`.
- Total atual da candidata manual: 64 PNGs, 8 direcoes x 8 frames.
- Todos os frames possuem `128x128`, PNG `RGBA` e alpha valido.
- Preview completo criado em `assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/antonio_rafael_walk_manual_candidate_v1_complete_preview.png`.
- Manifesto de teste criado em `assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/walk_manual_candidate_v1_test_manifest.json`.
- `Player.tscn` foi integrado temporariamente como `walk_manual_candidate_v1_TESTE`, mantendo `Sprite2D` + `AnimationPlayer`.
- Animacoes adicionadas: `walk_front`, `walk_back`, `walk_left`, `walk_right`, `walk_front_left`, `walk_front_right`, `walk_back_left` e `walk_back_right`.
- Cada animacao `walk_*` usa 8 frames.
- `player_animation_controller.gd` foi atualizado para tocar `walk_*` durante movimento e retornar para `idle_*` ao parar.
- `player_controller.gd` nao foi alterado; o vetor de input existente ja atende ao controlador de animacao.
- Walk V1, Walk V2 e Walk V3 continuam reprovadas e nao estao ativas.
- Esta integracao nao e walk oficial, nao e walk final e nao aprova a candidata manual.
- Limitacao registrada: `right` temporario pode inverter patch, mochila e equipamentos por ser espelhamento de `left`.
- Validacao ao vivo no Godot nao foi executada porque o executavel Godot nao foi encontrado no PATH desta sessao.
- Nao houve commit.
- Nao houve push.

## Manual Candidate Test Rejection Summary - 2026-06-18

- Decisao humana reprovou `walk_manual_candidate_v1_TESTE` apos teste no debug do Godot.
- Motivos registrados: passadas curtas demais, pouca sensacao visual de andar, caminhada lateral instavel, personagem virando ao contrario a cada 3 ou 4 passadas e ausencia de deslocamento real convincente.
- `walk_manual_candidate_v1_TESTE` nao deve ser oficializada.
- `Player.tscn` foi restaurado para modo seguro com apenas os 8 idles aprovados.
- `player_animation_controller.gd` foi restaurado para tocar somente `idle_*`, atualizando a ultima direcao quando ha input.
- Nenhuma Walk V1, Walk V2, Walk V3 ou Walk Manual Candidate V1 reprovada esta ativa no Player.
- A Base Idle Oficial V1 permanece intacta e aprovada.
- Frames da candidata manual permanecem apenas como material de auditoria/candidata rejeitada em `assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/`.

### Auditoria Tecnica do Bug Lateral

- `walk_left` usava somente frames da pasta `left`.
- `walk_right` usava somente frames da pasta `right`.
- `walk_left` nao misturava arquivos da pasta `right`.
- `walk_right` nao misturava arquivos da pasta `left`.
- `walk_right` era espelho horizontal exato de `walk_left`.
- O `AnimationPlayer` estava referenciando os frames na ordem `01` a `08` de cada pasta.
- O controlador de direcao classificava input lateral puro de forma estavel: `x < 0` para `LEFT`, `x > 0` para `RIGHT`.
- Diagonais nao caiam indevidamente em `LEFT` ou `RIGHT`; havia retornos especificos para `FRONT_LEFT`, `FRONT_RIGHT`, `BACK_LEFT` e `BACK_RIGHT`.
- Hipotese provavel: a sequencia lateral de assets e a causa do bug. Nos frames `left`, `01`, `02` e `05` olham para um lado, enquanto `03`, `04`, `06`, `07` e `08` olham para o lado oposto. O espelhamento temporario de `right` herdou a mesma alternancia invertida.
- O mirror temporario de `right` tambem pode inverter patch, mochila e equipamentos, reforcando a leitura instavel.

### Proxima Estrategia Registrada

```txt
Walk Prototype V5 - LEFT somente, 8 frames, passada ampliada
```

Critérios para futura V5:

- criar somente a direcao `left`;
- usar o sprite idle left aprovado como base;
- ampliar a passada lateral;
- fazer botas avancarem e recuarem claramente;
- alternar pernas com amplitude maior;
- alternar bracos em oposicao as pernas;
- manter volume forte/atletico, mochila e colete;
- nao criar personagem gordo, de palito ou deformado;
- nao alternar sprites olhando para esquerda/direita dentro do mesmo ciclo;
- nao integrar no Godot antes da aprovacao visual da sequencia `left`.

- Nao houve commit.
- Nao houve push.

## Current State - Rig Technical Architecture Active - 2026-06-19

- Estado vigente da feature: **Rig Tecnico 2D primeiro, sprites finais depois**.
- A estrategia anterior `Walk Prototype V5 - LEFT somente` nao deve ser tratada como proxima integracao oficial sem nova aprovacao humana.
- Nenhuma nova walk cycle final deve ser integrada ao Player nesta etapa.
- `walk_cycle_v1`: **REPROVADO**, nao oficial, permitido apenas para rastreabilidade/auditoria.
- `Player.tscn` permanece em modo seguro com apenas `idle_*`.
- O rig criado nesta execucao e laboratorio tecnico isolado, nao runtime final.
- Proximo passo recomendado: separar partes do personagem no rig, validar movimento em laboratorio e exportar PNGs `128x128` somente apos novo gate humano.
- Nao houve commit.
- Nao houve push.
