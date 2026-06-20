# Tasks: Rig Refinement V1 do SGT Antonio Rafael

**Input**: Design documents from `specs/007-rig-refinement-v1/`
**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, `quickstart.md`
**Scope**: Refinamento manual nao destrutivo das partes criticas `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron`
**Out of Scope**: Walk cycle, animacao oficial, Player runtime, gameplay, scripts do Player, sprites idle aprovados, commit e push

## Format

Cada tarefa segue o formato:

```text
TASK_FORMAT: - [x] T001 [P?] [US?] Titulo curto - Descricao objetiva. Arquivos/Pastas: path. Criterio: resultado verificavel. Dependencias: Txxx.
```

## Phase 1: Preparacao e Validacao da Base

**Purpose**: Confirmar contexto, documentos, referencia visual e limites antes de qualquer backup ou refinamento.

- [x] T001 Ler constituicao do projeto - Ler `.specify/memory/constitution.md` e confirmar principios aplicaveis de spec-first, gate humano, Character First e Pixel Art HD. Arquivos/Pastas: `.specify/memory/constitution.md`. Criterio: limites constitucionais anotados para execucao. Dependencias: nenhuma.
- [x] T002 Ler spec 007 - Ler a especificacao da feature e extrair user stories, requisitos e proibicoes. Arquivos/Pastas: `specs/007-rig-refinement-v1/spec.md`. Criterio: escopo de refinamento das seis partes confirmado. Dependencias: T001.
- [x] T003 Ler plano tecnico 007 - Ler plano e confirmar arquivos permitidos, estrategia nao destrutiva e validacoes planejadas. Arquivos/Pastas: `specs/007-rig-refinement-v1/plan.md`. Criterio: lista de arquivos permitidos e proibidos confirmada. Dependencias: T002.
- [x] T004 [P] Ler research 007 - Ler decisoes sobre backup, nomes canonicos, detalhes simbolicos e manifestos. Arquivos/Pastas: `specs/007-rig-refinement-v1/research.md`. Criterio: decisoes tecnicas incorporadas ao checklist de execucao. Dependencias: T002.
- [x] T005 [P] Ler data model 007 - Ler entidades `CriticalRigPart`, `RefinementBackup`, `PartsManifestRefinementRecord`, `RigAssemblyRefinementRecord` e `RefinementPreview`. Arquivos/Pastas: `specs/007-rig-refinement-v1/data-model.md`. Criterio: campos obrigatorios dos registros identificados. Dependencias: T002.
- [x] T006 [P] Ler quickstart 007 - Ler validacoes planejadas para backup, PNGs, manifestos, preview, laboratorio e escopo. Arquivos/Pastas: `specs/007-rig-refinement-v1/quickstart.md`. Criterio: validacoes finais mapeadas para fases posteriores. Dependencias: T002.
- [x] T007 Validar referencia idle front_right - Confirmar que `antonio_rafael_idle_front_right.png` existe, tem 128x128, e PNG RGBA com transparencia valida. Arquivos/Pastas: `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`. Criterio: referencia mestre validada sem alteracao. Dependencias: T003.
- [x] T008 Validar restricoes de Player e idle - Registrar hashes/status iniciais de `Player.tscn`, scripts do Player e sprites idle para auditoria posterior. Arquivos/Pastas: `scenes/player/Player.tscn`, `scripts/player/player_controller.gd`, `scripts/player/player_animation_controller.gd`, `assets/characters/antonio_rafael/sprites/idle/`. Criterio: baseline de auditoria registrado sem alterar arquivos. Dependencias: T003.
- [x] T009 Validar partes e manifestos existentes - Confirmar que as seis partes criticas, `parts_manifest.json`, `rig_assembly_manifest.json` e `AntonioRafaelRigLab.tscn` existem. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts/front_right/`, `assets/characters/antonio_rafael/rig/parts_manifest.json`, `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`, `scenes/rig/AntonioRafaelRigLab.tscn`. Criterio: entradas obrigatorias encontradas antes do backup. Dependencias: T003.
- [x] T010 Confirmar proibicoes de escopo - Confirmar que a execucao nao criara walk cycle, animacao oficial, alteracao de movimento, integracao no Player, HUD, combate, inventario ou sistemas de gameplay. Arquivos/Pastas: `specs/007-rig-refinement-v1/tasks.md`. Criterio: escopo restrito registrado antes de iniciar trabalhos de asset. Dependencias: T001-T009.

## Phase 2: Backup Nao Destrutivo das Partes Criticas

**Purpose**: Preservar versoes anteriores antes de qualquer refinamento visual.

- [x] T011 Criar pasta de backup - Criar `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/` sem alterar PNGs originais. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/`. Criterio: pasta existe e esta pronta para receber copias. Dependencias: T010.
- [x] T012 [P] [US2] Preservar neck - Copiar `neck.png` para `_backup_v1/neck.png` sem alterar o original. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts/front_right/neck.png`, `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/neck.png`. Criterio: backup existe, e PNG RGBA com transparencia valida, e original permanece intacto. Dependencias: T011.
- [x] T013 [P] [US2] Preservar torso_base - Copiar `torso_base.png` para `_backup_v1/torso_base.png` sem alterar o original. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts/front_right/torso_base.png`, `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/torso_base.png`. Criterio: backup existe, e PNG RGBA com transparencia valida, e original permanece intacto. Dependencias: T011.
- [x] T014 [P] [US2] Preservar backpack - Copiar `backpack.png` para `_backup_v1/backpack.png` sem alterar o original. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts/front_right/backpack.png`, `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/backpack.png`. Criterio: backup existe, e PNG RGBA com transparencia valida, e original permanece intacto. Dependencias: T011.
- [x] T015 [P] [US2] Preservar pelvis - Copiar `pelvis.png` para `_backup_v1/pelvis.png` sem alterar o original. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts/front_right/pelvis.png`, `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/pelvis.png`. Criterio: backup existe, e PNG RGBA com transparencia valida, e original permanece intacto. Dependencias: T011.
- [x] T016 [P] [US2] Preservar goias_patch - Copiar `goias_patch.png` para `_backup_v1/goias_patch.png` sem alterar o original. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts/front_right/goias_patch.png`, `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/goias_patch.png`. Criterio: backup existe, e PNG RGBA com transparencia valida, e original permanece intacto. Dependencias: T011.
- [x] T017 [P] [US2] Preservar sergeant_chevron - Copiar `sergeant_chevron.png` para `_backup_v1/sergeant_chevron.png` sem alterar o original. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts/front_right/sergeant_chevron.png`, `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/sergeant_chevron.png`. Criterio: backup existe, e PNG RGBA com transparencia valida, e original permanece intacto. Dependencias: T011.
- [x] T018 [US2] Validar conjunto de backups - Validar que os seis backups existem, mantem transparencia, permitem comparacao antes/depois e nao substituem arquivos originais. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/`. Criterio: backups completos e rastreaveis. Dependencias: T012-T017.

## Phase 3: Refinamento Visual das Partes Criticas

**Purpose**: Melhorar as seis partes criticas mantendo identidade visual, transparencia e compatibilidade com rig `front_right`.

- [x] T019 [P] [US1] Refinar neck - Melhorar encaixe tronco/cabeca, tom de pele, leitura anatomica simples, reducao de ruido e compatibilidade com articulacao leve. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts/front_right/neck.png`. Criterio: parte refinada e PNG RGBA transparente, sem label, sem texto externo e coerente com Base Idle Oficial V1. Dependencias: T018.
- [x] T020 [P] [US1] Refinar torso_base - Melhorar encaixe com colete, pescoco, bracos e quadril, preservando volume corporal atletico e removendo pixels estranhos. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts/front_right/torso_base.png`. Criterio: parte refinada e PNG RGBA transparente, sem label, coerente com idle e pronta para oscilacao futura. Dependencias: T018.
- [x] T021 [P] [US1] Refinar backpack - Melhorar leitura como mochila tatica, encaixe nas costas/lateral, separacao visual de colete/sombra e volume coerente. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts/front_right/backpack.png`. Criterio: parte refinada e PNG RGBA transparente, sem label e util como peca de rig. Dependencias: T018.
- [x] T022 [P] [US1] Refinar pelvis - Melhorar conexao entre tronco e pernas, leitura como centro do rig, compatibilidade com futura caminhada e silhueta `front_right`. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts/front_right/pelvis.png`. Criterio: parte refinada e PNG RGBA transparente, sem label e coerente com pose aprovada. Dependencias: T018.
- [x] T023 [P] [US1] Refinar goias_patch - Melhorar representacao legivel ou simbolica de Goias/PMGO integrada ao uniforme, sem texto ilegivel e sem poluicao visual. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts/front_right/goias_patch.png`. Criterio: detalhe refinado ou marcado como simbolico, PNG RGBA transparente, sem label externo. Dependencias: T018.
- [x] T024 [P] [US1] Refinar sergeant_chevron - Melhorar leitura simbolica da divisa de sargento integrada ao uniforme, sem texto, label externo ou excesso de detalhe. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts/front_right/sergeant_chevron.png`. Criterio: marca simbolica simples, PNG RGBA transparente, coerente com Pixel Art HD. Dependencias: T018.
- [x] T025 [US1] Revisar consistencia visual conjunta - Comparar as seis partes refinadas com backups e referencia idle para confirmar preservacao de escala, paleta, proporcao, silhueta e identidade PMGO/sobrevivente. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts/front_right/`, `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/`, `assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`. Criterio: refinamento visual aprovado tecnicamente para recomposicao ou limitacoes registradas. Dependencias: T019-T024.

## Phase 4: Atualizacao da Cena de Laboratorio

**Purpose**: Garantir que a montagem de laboratorio reflita as partes refinadas sem virar runtime, fase ou animacao.

- [x] T026 [US1] Validar referencias da cena - Verificar se `AntonioRafaelRigLab.tscn` usa paths canonicos das partes refinadas e a referencia idle `front_right`. Arquivos/Pastas: `scenes/rig/AntonioRafaelRigLab.tscn`, `assets/characters/antonio_rafael/rig/parts/front_right/`. Criterio: cena referencia assets corretos sem usar Player. Dependencias: T025.
- [x] T027 [US1] Atualizar laboratorio se necessario - Ajustar apenas referencias/markers/posicoes do laboratorio se o refinamento exigir encaixe tecnico, preservando hierarquia da Rig Assembly V1. Arquivos/Pastas: `scenes/rig/AntonioRafaelRigLab.tscn`. Criterio: cena permanece isolada, sem animacao, sem walk cycle e sem alteracao de gameplay. Dependencias: T026.
- [x] T028 [US1] Validar isolamento da cena - Confirmar que `AntonioRafaelRigLab.tscn` nao instancia `Player.tscn`, nao substitui runtime e nao contem referencias a `walk_*`. Arquivos/Pastas: `scenes/rig/AntonioRafaelRigLab.tscn`, `scenes/player/Player.tscn`. Criterio: laboratorio isolado confirmado. Dependencias: T027.

## Phase 5: Atualizacao dos Manifestos

**Purpose**: Registrar refinamento, rastreabilidade, pivos, status e limitacoes restantes.

- [x] T029 [US2] Atualizar parts_manifest para backups - Registrar em `parts_manifest.json` o backup criado para cada uma das seis partes criticas. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts_manifest.json`, `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/`. Criterio: cada parte tem `previous_backup` ou campo equivalente rastreavel. Dependencias: T018.
- [x] T030 [US2] Atualizar parts_manifest para status - Registrar status anterior, status novo, nota de refinamento e limitacoes restantes para `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron`. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts_manifest.json`. Criterio: status pertence a `refined_for_rig_v1`, `needs_minor_adjustment`, `needs_art_refinement`, `symbolic_detail` ou `rejected`. Dependencias: T025, T029.
- [x] T031 [US2] Atualizar rig_assembly_manifest para pivos - Registrar pivo mantido, ajustado ou pendente para cada parte critica refinada. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`. Criterio: cada parte critica tem decisao de pivo e impacto na montagem. Dependencias: T027.
- [x] T032 [US2] Atualizar rig_assembly_manifest para encaixe - Registrar status de recomposicao, observacao de refinamento e limitacoes restantes na montagem. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`. Criterio: manifesto reflete estado refinado sem indicar Player integration ou animacao oficial. Dependencias: T031.
- [x] T033 [US2] Validar manifestos JSON - Validar parseabilidade e consistencia dos dois manifestos depois das atualizacoes. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts_manifest.json`, `assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`. Criterio: JSON valido e seis partes criticas rastreaveis. Dependencias: T030, T032.

## Phase 6: Preview de Validacao Humana

**Purpose**: Criar evidencia visual de antes/depois para decisao humana.

- [x] T034 [US3] Planejar composicao do preview - Definir layout do preview com referencia idle, estado anterior, estado refinado, destaques das seis partes e notas de limitacao. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png`. Criterio: layout cobre todos os elementos obrigatorios antes da geracao. Dependencias: T025, T033.
- [x] T035 [US3] Gerar preview de refinamento - Criar `antonio_rafael_rig_refinement_v1_preview.png` como imagem de revisao humana, com labels permitidos apenas no preview. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png`. Criterio: preview existe e mostra referencia, antes, depois, destaques e limitacoes. Dependencias: T034.
- [x] T036 [US3] Validar preview como nao tecnico - Confirmar que o preview nao substitui PNGs individuais, nao e spritesheet tecnico e nao e asset final de gameplay. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png`. Criterio: uso do preview documentado apenas para validacao humana. Dependencias: T035.

## Phase 7: Validacao Tecnica

**Purpose**: Confirmar qualidade tecnica, escopo e isolamento antes de documentar status.

- [x] T037 Validar integridade dos idles - Confirmar que a Base Idle Oficial V1 e todos os sprites idle aprovados nao foram alterados. Arquivos/Pastas: `assets/characters/antonio_rafael/sprites/idle/`. Criterio: hashes/status dos idles permanecem iguais ao baseline. Dependencias: T035.
- [x] T038 Validar integridade do Player - Confirmar que `Player.tscn` nao foi alterado por esta feature e que scripts do Player permanecem inalterados. Arquivos/Pastas: `scenes/player/Player.tscn`, `scripts/player/player_controller.gd`, `scripts/player/player_animation_controller.gd`. Criterio: nenhuma alteracao de Player, scripts, movimento, camera ou colisao causada pela feature. Dependencias: T035.
- [x] T039 Validar PNGs refinados - Conferir que as seis partes refinadas sao PNG RGBA, possuem transparencia, nao tem fundo verde, labels internos, texto externo ou nomes aleatorios. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts/front_right/neck.png`, `assets/characters/antonio_rafael/rig/parts/front_right/torso_base.png`, `assets/characters/antonio_rafael/rig/parts/front_right/backpack.png`, `assets/characters/antonio_rafael/rig/parts/front_right/pelvis.png`, `assets/characters/antonio_rafael/rig/parts/front_right/goias_patch.png`, `assets/characters/antonio_rafael/rig/parts/front_right/sergeant_chevron.png`. Criterio: todos os PNGs passam nas validacoes tecnicas. Dependencias: T025.
- [x] T040 Validar backups preservados - Confirmar que backups continuam existindo e nao foram sobrescritos apos o refinamento. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/`. Criterio: seis backups preservados e comparaveis. Dependencias: T018, T039.
- [x] T041 Validar recomposicao front_right - Confirmar que o rig recomposto continua coerente com pose `front_right`, identidade visual e silhueta do SGT Antonio Rafael. Arquivos/Pastas: `scenes/rig/AntonioRafaelRigLab.tscn`, `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png`. Criterio: recomposicao tecnicamente aceitavel ou limitacoes registradas. Dependencias: T028, T035.
- [x] T042 Validar ausencia de animacao e gameplay - Confirmar que nenhum walk cycle, animacao oficial, frame de caminhada, gameplay, movimento, HUD, combate, inventario ou sistema novo foi criado. Arquivos/Pastas: `scenes/rig/AntonioRafaelRigLab.tscn`, `scenes/player/Player.tscn`, `scripts/player/`, `assets/characters/antonio_rafael/rig/`, `assets/characters/antonio_rafael/sprites/`. Criterio: escopo proibido ausente. Dependencias: T037-T041.
- [x] T043 Validar Godot quando disponivel - Se Godot 4.6 estiver no PATH, abrir ou validar `AntonioRafaelRigLab.tscn`; caso contrario, registrar validacao estatica e pendencia de validacao ao vivo. Arquivos/Pastas: `scenes/rig/AntonioRafaelRigLab.tscn`, `docs/technical/rig-refinement-v1.md`. Criterio: resultado da validacao Godot ou justificativa estatica registrada. Dependencias: T041.

## Phase 8: Documentacao

**Purpose**: Registrar o refinamento, rastreabilidade, limitacoes e confirmacoes de escopo.

- [x] T044 [P] Documentar Rig Refinement V1 - Criar ou atualizar documento principal com objetivo, partes refinadas, backups, melhorias, limitacoes e status recomendado. Arquivos/Pastas: `docs/technical/rig-refinement-v1.md`. Criterio: documento cobre refinamento e gate humano. Dependencias: T033, T035, T042.
- [x] T045 [P] Atualizar rig assembly - Registrar impacto das partes refinadas na montagem, pivos, recomposicao e ausencia de animacao oficial. Arquivos/Pastas: `docs/technical/rig-assembly-v1.md`. Criterio: Rig Assembly V1 referencia Refinement V1 como etapa de melhoria tecnica, nao arte final. Dependencias: T033, T041.
- [x] T046 [P] Atualizar rig parts separation - Registrar que as seis partes de Rig Parts Separation V1 foram refinadas com backup e rastreabilidade. Arquivos/Pastas: `docs/technical/rig-parts-separation.md`. Criterio: separacao V1 permanece rastreavel e parcialmente aprovada como origem. Dependencias: T033, T040.
- [x] T047 [P] Atualizar pipeline de rig - Registrar que refinamento manual precede animacao, walk cycle e qualquer exportacao final. Arquivos/Pastas: `docs/technical/rig-pipeline.md`. Criterio: pipeline orienta rig tecnico primeiro, refinamento, validacao humana e so depois animacao. Dependencias: T042.
- [x] T048 [P] Atualizar pipeline de personagem - Registrar que o Player, idles e gameplay permanecem intactos durante o refinamento. Arquivos/Pastas: `docs/technical/character-pipeline.md`. Criterio: pipeline de personagem reflete Refinement V1 sem abrir escopo de gameplay. Dependencias: T037, T038, T042.
- [x] T049 [P] Atualizar documento artistico - Registrar melhorias visuais, preservacao de identidade, tratamento simbolico de Goias/divisa se aplicavel e limitacoes restantes. Arquivos/Pastas: `docs/art/antonio-rafael.md`. Criterio: arte do personagem documenta refinamento sem chamar de asset final. Dependencias: T025, T035.
- [x] T050 [P] Atualizar fontes de assets - Registrar origem dos refinamentos, backups, referencia mestre e preview de validacao. Arquivos/Pastas: `docs/art/asset-sources.md`. Criterio: asset sources aponta para Base Idle Oficial V1, backups e partes refinadas. Dependencias: T040, T035.
- [x] T051 Atualizar status das tarefas - Marcar tarefas executadas e registrar pendencias finais sem marcar gate humano como aprovado automaticamente. Arquivos/Pastas: `specs/007-rig-refinement-v1/tasks.md`. Criterio: tasks.md reflete execucao real e pendencias de validacao. Dependencias: T044-T050.

## Phase 9: Gate Humano Final

**Purpose**: Parar a feature para decisao humana antes de qualquer animacao, walk cycle ou integracao.

- [x] T052 [US3] Gate humano obrigatorio - Apresentar preview, partes refinadas, partes preservadas, arquivos criados, arquivos alterados, limitacoes restantes, validacoes tecnicas, resultado Godot ou justificativa estatica, confirmacao de Player intacto, idles intactos, ausencia de animacao, ausencia de walk cycle, recomendacao aprovar/aprovar parcialmente/reprovar, e confirmacao de que nao houve commit nem push. Arquivos/Pastas: `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png`, `docs/technical/rig-refinement-v1.md`, `specs/007-rig-refinement-v1/tasks.md`. Criterio: decisao humana solicitada e feature parada sem marcar Refinement V1 como oficial automaticamente. Dependencias: T037-T051.

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1**: Sem dependencias externas alem da existencia da spec/plan/design docs.
- **Phase 2**: Depende da conclusao da Phase 1.
- **Phase 3**: Depende dos backups completos da Phase 2.
- **Phase 4**: Depende do refinamento visual conjunto da Phase 3.
- **Phase 5**: Depende dos backups, refinamento e ajustes/validacao da cena.
- **Phase 6**: Depende das partes refinadas e manifestos atualizados.
- **Phase 7**: Depende do preview, manifestos e cena validada.
- **Phase 8**: Depende das validacoes tecnicas.
- **Phase 9**: Depende de todas as fases anteriores.

### User Story Dependencies

- **US1 Refinar Partes Criticas do Rig**: Depende de preparacao e backup; entrega PNGs refinados e recomposicao coerente.
- **US2 Preservar Rastreabilidade e Reversibilidade**: Comeca no backup e continua nos manifestos; bloqueia refinamento destrutivo.
- **US3 Validar Refinamento Para Futuro Movimento**: Depende de refinamento, manifestos e preview; fecha com gate humano.

### Parallel Opportunities

- T004-T006 podem ser executadas em paralelo apos T002.
- T012-T017 podem ser executadas em paralelo apos T011.
- T019-T024 podem ser executadas em paralelo apos T018.
- T044-T050 podem ser executadas em paralelo apos validacoes e artefatos correspondentes.

## Parallel Example: Phase 3

```text
Task: "T019 Refinar neck em assets/characters/antonio_rafael/rig/parts/front_right/neck.png"
Task: "T020 Refinar torso_base em assets/characters/antonio_rafael/rig/parts/front_right/torso_base.png"
Task: "T021 Refinar backpack em assets/characters/antonio_rafael/rig/parts/front_right/backpack.png"
Task: "T022 Refinar pelvis em assets/characters/antonio_rafael/rig/parts/front_right/pelvis.png"
Task: "T023 Refinar goias_patch em assets/characters/antonio_rafael/rig/parts/front_right/goias_patch.png"
Task: "T024 Refinar sergeant_chevron em assets/characters/antonio_rafael/rig/parts/front_right/sergeant_chevron.png"
```

## Implementation Strategy

### MVP First

1. Concluir Phase 1 para confirmar escopo e baselines.
2. Concluir Phase 2 para garantir backup nao destrutivo.
3. Concluir Phase 3 para refinar as seis partes criticas.
4. Parar e validar visualmente antes de mexer em manifestos/cena se qualquer parte descaracterizar o personagem.

### Incremental Delivery

1. Preparacao + backup completo.
2. Refinamento individual das seis partes.
3. Revalidacao de recomposicao no laboratorio.
4. Atualizacao de manifestos e preview.
5. Documentacao e gate humano.

### Stop Conditions

- Parar se qualquer arquivo fora do escopo precisar ser alterado.
- Parar se algum PNG refinado perder transparencia, identidade visual ou compatibilidade com `front_right`.
- Parar se Godot/cena exigir alterar Player ou scripts do Player.
- Parar antes de qualquer animacao, walk cycle, commit ou push.

## Registro de Aprovacao Humana Parcial

**Data**: 2026-06-19  
**Decisao**: Rig Refinement V1 APROVADA PARCIALMENTE como refinamento tecnico inicial de laboratorio.
**Marco visual**: Validacao Visual Godot - Rig Refinement V1.

Escopo aprovado parcialmente:

- refinamento tecnico das partes criticas;
- base melhorada para laboratorio de rig;
- preparacao para validacao visual ao vivo no Godot;
- etapa intermediaria antes de qualquer animacao controlada.

Escopo nao aprovado:

- arte final;
- animacao final;
- walk cycle oficial;
- asset final de gameplay;
- substituto do Player runtime;
- base definitiva sem validacao visual.

Auditoria:

- `Player.tscn` nao foi alterado por esta feature;
- `Player.tscn` aparece no Git por alteracao pre-existente;
- hash baseline do Player permanece `5AAEF2...`;
- scripts do Player seguem com hashes inalterados;
- sprites idle aprovados seguem com hashes inalterados;
- nao ha referencia do rig dentro do Player;
- nao ha referencia a `walk_*`;
- nao houve alteracao de gameplay;
- a cena `res://scenes/rig/AntonioRafaelRigLab.tscn` foi aberta e validada visualmente no Godot;
- a validacao visual e estatica de laboratorio, nao validacao de animacao;
- nao houve commit;
- nao houve push.
