# Tasks: Review Rig Articulation Preview Import V1

**Input**: Design documents from `specs/015-review-rig-articulation-preview-import-v1/`
**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, `quickstart.md`
**Scope**: Task list only. Do not implement review yet, do not remove `.import`, do not remove `.uid`, do not alter `.gitignore`, do not move files, do not stage files, do not commit, do not push.

**Target candidate**:

```txt
assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import
```

**Required interpretation for implementation docs**:

```txt
Ainda nao existe caminhada articulada oficial no projeto.
O rig atual e tecnico/laboratorial.
O preview da Rig Articulation Test V1 e evidencia visual de teste tecnico do rig, nao walk cycle oficial.
Esta feature nao valida walk cycle.
Esta feature nao cria walk cycle.
Esta feature nao integra walk cycle ao Player.
Esta feature nao transforma o rig em animacao oficial.
```

## Phase 1: Preparacao e leitura da feature

**Purpose**: Confirmar escopo, fontes e proibicoes antes de qualquer auditoria.

- [X] T001 Ler a especificacao da feature 015 em `specs/015-review-rig-articulation-preview-import-v1/spec.md`; criterio: objetivo, candidato unico e proibicoes identificados; dependencias: nenhuma.
- [X] T002 Ler o plano tecnico em `specs/015-review-rig-articulation-preview-import-v1/plan.md`; criterio: comandos seguros, paths sensiveis e gate humano compreendidos; dependencias: T001.
- [X] T003 [P] Ler decisoes de pesquisa em `specs/015-review-rig-articulation-preview-import-v1/research.md`; criterio: decisoes sobre revisao nao destrutiva e evidencia tecnica registradas; dependencias: T001.
- [X] T004 [P] Ler modelo de dados em `specs/015-review-rig-articulation-preview-import-v1/data-model.md`; criterio: entidades `ArticulationPreviewImportCandidate`, `ImportReviewManifestEntry` e `SafetyValidation` mapeadas; dependencias: T001.
- [X] T005 [P] Ler roteiro de validacao em `specs/015-review-rig-articulation-preview-import-v1/quickstart.md`; criterio: fluxo de auditoria somente leitura compreendido; dependencias: T001.
- [X] T006 [P] Ler politica Godot em `docs/technical/godot-import-uid-policy-v1.md`; criterio: regras de `.import`, `.uid` e `.gitignore` identificadas; dependencias: T001.
- [X] T007 [P] Ler revisao de imports oficiais em `docs/technical/official-rig-imports-review-v1.md` e `docs/technical/official-rig-imports-review-manifest-v1.md`; criterio: grupo dos 32 `.import` oficiais compreendido; dependencias: T001.
- [X] T008 [P] Ler limpeza de imports obsoletos em `docs/technical/stale-prototype-imports-removal-v1.md` e `docs/technical/stale-prototype-imports-removal-manifest-v1.md`; criterio: `prototype_imports` tratados na feature 013 diferenciados do candidato 015; dependencias: T001.
- [X] T009 [P] Ler auditoria e inventario em `docs/technical/untracked-cleanup-audit-v1.md` e `docs/technical/untracked-cleanup-inventory-v1.md`; criterio: classificacoes anteriores usadas como base; dependencias: T001.
- [X] T010 [P] Ler higiene do repositorio em `docs/project/repository-hygiene.md`; criterio: restricoes contra stage em massa, commit automatico e limpeza destrutiva confirmadas; dependencias: T001.
- [X] T011 [P] Consultar se existem `docs/technical/rig-articulation-test-v1.md`, `docs/technical/rig-refinement-v1.md` e `docs/technical/rig-assembly-v1.md`; criterio: documentos existentes lidos e documentos ausentes registrados como pendencia sem interromper; dependencias: T001.
- [X] T012 Confirmar escopo exclusivo da feature 015 em `specs/015-review-rig-articulation-preview-import-v1/tasks.md`; criterio: tarefas nao incluem remocao, movimentacao, staging, versionamento, `.gitignore`, Player, cenas, scripts, sprites idle ou assets oficiais; dependencias: T001-T011.

## Phase 2: Auditoria somente leitura do candidato

**Purpose**: Localizar e caracterizar o candidato sem alterar estado de arquivos.

- [X] T013 [US1] Executar auditoria inicial com `git status --short --untracked-files=all`; arquivos: repositorio Git; criterio: estado registrado sem stage, commit ou push; dependencias: T012.
- [X] T014 [US1] Listar untracked com `git ls-files --others --exclude-standard`; arquivos: repositorio Git; criterio: candidato `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import` localizado ou divergencia registrada; dependencias: T013.
- [X] T015 [P] [US1] Listar imports rastreados com `git ls-files "*.import"`; arquivos: repositorio Git; criterio: candidato comparado contra imports rastreados sem stagear nada; dependencias: T013.
- [X] T016 [P] [US1] Listar UIDs rastreados com `git ls-files "*.uid"`; arquivos: repositorio Git; criterio: confirmado que o candidato nao e `.uid`; dependencias: T013.
- [X] T017 [P] [US1] Verificar diffs com `git diff --name-only` e `git diff --stat`; arquivos: repositorio Git; criterio: diffs rastreados registrados sem alteracao de escopo; dependencias: T013.
- [X] T018 [P] [US1] Verificar diffs especificos com `git diff --name-status -- "*.import"` e `git diff --name-status -- "*.uid"`; arquivos: `.import` e `.uid`; criterio: nenhum `.import` ou `.uid` rastreado alterado pela feature; dependencias: T013.
- [X] T019 [P] [US1] Listar arquivos locais com `Get-ChildItem -Recurse -Filter "*.import"` e `Get-ChildItem -Recurse -Filter "*.uid"`; arquivos: workspace local; criterio: candidato localizado entre `.import` e excluido de `.uid`; dependencias: T013.
- [X] T020 [US1] Confirmar que o candidato continua untracked em `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import`; criterio: status `untracked` registrado ou divergencia parada para revisao humana; dependencias: T014-T019.
- [X] T021 [US1] Confirmar que o candidato nao pertence aos `prototype_imports` tratados pela feature 013; arquivos: `docs/technical/stale-prototype-imports-removal-manifest-v1.md`; criterio: candidato separado dos imports obsoletos removidos; dependencias: T008, T020.
- [X] T022 [US1] Confirmar que o candidato nao faz parte dos 32 `official_asset_imports` revisados na feature 014; arquivos: `docs/technical/official-rig-imports-review-manifest-v1.md`; criterio: candidato registrado como fora do grupo 014; dependencias: T007, T020.
- [X] T023 [US1] Confirmar que o candidato nao foi removido, editado ou stageado durante a auditoria; arquivos: `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import`; criterio: conteudo e status permanecem sem alteracao; dependencias: T013-T022.

## Phase 3: Verificacao de origem e vinculo com Rig Articulation Test V1

**Purpose**: Verificar o PNG de origem e a relacao tecnica do candidato.

- [X] T024 [US1] Verificar o caminho do PNG de origem `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png`; criterio: existencia do PNG registrada; dependencias: T020.
- [X] T025 [US1] Verificar se o PNG de origem e rastreado pelo Git; arquivos: `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png`; criterio: status tracked/untracked registrado; dependencias: T024.
- [X] T026 [US1] Inspecionar o candidato `.import` somente leitura para confirmar referencia ao PNG de origem; arquivos: `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import`; criterio: relacao com o PNG confirmada ou origem desconhecida registrada; dependencias: T024.
- [X] T027 [US1] Documentar relacao com Rig Articulation Test V1 usando `docs/technical/rig-articulation-test-v1.md`, se existir; criterio: vinculo tecnico registrado ou ausencia do documento marcada como pendencia; dependencias: T011, T026.
- [X] T028 [US1] Documentar relacao com rig tecnico validado usando `docs/technical/rig-refinement-v1.md` e `docs/technical/rig-assembly-v1.md`, se existirem; criterio: vinculo com laboratorio de rig registrado sem promover a asset oficial; dependencias: T011, T026.
- [X] T029 [US3] Registrar que o preview e material tecnico/laboratorial, nao asset runtime do Player; arquivos: futuros `docs/technical/rig-articulation-preview-import-review-v1.md`; criterio: interpretacao obrigatoria incluida; dependencias: T027-T028.
- [X] T030 [US3] Registrar explicitamente que ainda nao existe caminhada articulada oficial, walk cycle oficial ou animacao oficial; arquivos: futuros `docs/technical/rig-articulation-preview-import-review-v1.md`; criterio: bloco obrigatorio de observacao incluido; dependencias: T029.
- [X] T031 [US3] Confirmar que a revisao nao exige alteracao em `scenes/player/Player.tscn`, `scenes/rig/AntonioRafaelRigLab.tscn`, `scripts/player/`, `scripts/rig/` ou `assets/characters/antonio_rafael/rig/`; criterio: nenhuma alteracao runtime/asset oficial planejada; dependencias: T029.

## Phase 4: Avaliacao de risco e recomendacao

**Purpose**: Atribuir risco, status e recomendacao futura sem executar a recomendacao.

- [X] T032 [US2] Avaliar risco de ausencia do candidato `.import`; arquivos: `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import`; criterio: risco `low`, `medium`, `high` ou `critical` justificado; dependencias: T020, T024.
- [X] T033 [US2] Avaliar risco de versionar o candidato futuramente; arquivos: futuros `docs/technical/rig-articulation-preview-import-review-v1.md`; criterio: impacto em reprodutibilidade Godot e confusao de asset oficial descrito; dependencias: T032.
- [X] T034 [US2] Avaliar risco de confundir preview tecnico com walk cycle oficial; arquivos: futuros `docs/technical/rig-articulation-preview-import-review-v1.md`; criterio: risco e mitigacao registrados; dependencias: T030.
- [X] T035 [US2] Avaliar se o candidato deve ser agrupado futuramente com os 32 `.import` oficiais revisados na feature 014; arquivos: `docs/technical/official-rig-imports-review-manifest-v1.md`; criterio: recomendacao `join_official_rig_imports` aceita ou recusada com justificativa; dependencias: T022, T033.
- [X] T036 [US2] Avaliar alternativas `keep_local`, `version_later`, `ignore_later`, `needs_human_review` e `separate_feature`; arquivos: futuros `docs/technical/rig-articulation-preview-import-review-v1.md`; criterio: uma recomendacao futura principal e alternativas rejeitadas registradas; dependencias: T032-T035.
- [X] T037 [US2] Atribuir status permitido ao candidato; arquivos: futuros `docs/technical/rig-articulation-preview-import-review-manifest-v1.md`; criterio: um status entre `articulation_preview_import_reviewed_keep_local`, `articulation_preview_import_reviewed_version_later`, `articulation_preview_import_reviewed_ignore_later`, `articulation_preview_import_join_official_rig_imports`, `articulation_preview_import_needs_human_review` ou `articulation_preview_import_excluded_unknown_origin`; dependencias: T036.
- [X] T038 [US2] Registrar que nenhuma recomendacao sera executada nesta feature; arquivos: futuros `docs/technical/rig-articulation-preview-import-review-v1.md`; criterio: sem remocao, versionamento, ignore rule, staging, commit ou push; dependencias: T036-T037.

## Phase 5: Preparacao do manifesto de revisao

**Purpose**: Criar manifesto documental do unico candidato revisado na futura implementacao.

- [X] T039 [US2] Criar `docs/technical/rig-articulation-preview-import-review-manifest-v1.md` com cabecalho, escopo e aviso de nao oficialidade; criterio: manifesto existe e declara que o candidato nao e walk cycle oficial; dependencias: T037.
- [X] T040 [US2] Registrar no manifesto o caminho do `.import` e o caminho do PNG de origem; arquivos: `docs/technical/rig-articulation-preview-import-review-manifest-v1.md`; criterio: ambos os caminhos aparecem de forma literal; dependencias: T039.
- [X] T041 [US2] Registrar no manifesto existencia do PNG de origem, relacao com rig, tipo de asset e origem provavel; arquivos: `docs/technical/rig-articulation-preview-import-review-manifest-v1.md`; criterio: campos preenchidos com evidencias da auditoria; dependencias: T024-T028, T040.
- [X] T042 [US2] Registrar no manifesto risco, status, recomendacao e observacao; arquivos: `docs/technical/rig-articulation-preview-import-review-manifest-v1.md`; criterio: valores seguem listas permitidas e decisao humana permanece pendente; dependencias: T032-T038.
- [X] T043 [US2] Registrar no manifesto que `.import`, `.uid`, `.gitignore`, Player, cenas, scripts, sprites idle e assets oficiais nao foram alterados; arquivos: `docs/technical/rig-articulation-preview-import-review-manifest-v1.md`; criterio: confirmacoes de escopo incluidas; dependencias: T042.

## Phase 6: Documentacao tecnica

**Purpose**: Criar documento tecnico principal da revisao na futura implementacao.

- [X] T044 [US2] Criar `docs/technical/rig-articulation-preview-import-review-v1.md` com objetivo da revisao e relacao com a feature 015; criterio: documento existe e limita a revisao ao candidato unico; dependencias: T038.
- [X] T045 [US2] Registrar relacao com feature 012 e politica `.import/.uid`; arquivos: `docs/technical/rig-articulation-preview-import-review-v1.md`; criterio: politica usada sem alterar `.gitignore`; dependencias: T006, T044.
- [X] T046 [US2] Registrar relacao com feature 014 e diferenca em relacao aos 32 imports oficiais; arquivos: `docs/technical/rig-articulation-preview-import-review-v1.md`; criterio: motivo de feature separada documentado; dependencias: T007, T022, T044.
- [X] T047 [US2] Registrar relacao com feature 013 e diferenca em relacao aos stale prototype imports; arquivos: `docs/technical/rig-articulation-preview-import-review-v1.md`; criterio: candidato nao tratado como prototipo obsoleto; dependencias: T008, T021, T044.
- [X] T048 [US1] Registrar caminho do candidato, existencia do PNG de origem e vinculo com Rig Articulation Test V1; arquivos: `docs/technical/rig-articulation-preview-import-review-v1.md`; criterio: evidencias principais documentadas; dependencias: T024-T028, T044.
- [X] T049 [US3] Registrar o bloco obrigatorio sobre inexistencia de caminhada articulada oficial, walk cycle oficial, animacao oficial e integracao ao Player; arquivos: `docs/technical/rig-articulation-preview-import-review-v1.md`; criterio: texto obrigatorio presente; dependencias: T030, T044.
- [X] T050 [US2] Registrar risco, status, recomendacao futura e decisao sugerida para `.gitignore`; arquivos: `docs/technical/rig-articulation-preview-import-review-v1.md`; criterio: recomendacao e apenas documental, sem execucao; dependencias: T032-T038, T045.
- [X] T051 [US3] Registrar confirmacoes de seguranca: nenhum `.import` removido, nenhum `.uid` alterado, nenhum asset oficial alterado, Player/cenas/scripts intactos; arquivos: `docs/technical/rig-articulation-preview-import-review-v1.md`; criterio: confirmacoes incluidas com base em validacao; dependencias: T043.
- [X] T052 [US2] Registrar pendencias e necessidade de gate humano antes de versionar, ignorar, agrupar ou remover qualquer arquivo; arquivos: `docs/technical/rig-articulation-preview-import-review-v1.md`; criterio: proximos passos documentais definidos; dependencias: T050-T051.

## Phase 7: Atualizacao de documentos correlatos

**Purpose**: Atualizar apenas documentos de politica/auditoria, se necessario, na futura implementacao.

- [X] T053 [US2] Atualizar `docs/technical/godot-import-uid-policy-v1.md`, se necessario, para registrar que a feature 015 revisou um candidato adicional sem alterar `.gitignore`; criterio: atualizacao limitada ao resultado da revisao; dependencias: T050.
- [X] T054 [US2] Atualizar `docs/technical/official-rig-imports-review-v1.md` e `docs/technical/official-rig-imports-review-manifest-v1.md`, se necessario, para mencionar o candidato 015 como separado dos 32 imports oficiais; criterio: nenhum `.import` e adicionado ao grupo oficial sem gate humano; dependencias: T046.
- [X] T055 [US2] Atualizar `docs/technical/untracked-cleanup-audit-v1.md` e `docs/technical/untracked-cleanup-inventory-v1.md`, se necessario, para registrar resultado da revisao 015; criterio: inventario reflete status futuro sem executar recomendacao; dependencias: T050.
- [X] T056 [US2] Atualizar `docs/project/repository-hygiene.md`, se necessario, para reforcar regra de revisar `.import` isolado antes de versionar ou ignorar; criterio: politica documental nao altera `.gitignore`; dependencias: T045, T050.
- [X] T057 [US3] Confirmar que nenhuma atualizacao correlata sugere que existe caminhada articulada oficial, walk cycle oficial ou animacao oficial; arquivos: documentos de `docs/technical/` e `docs/project/repository-hygiene.md`; criterio: linguagem permanece tecnica/laboratorial; dependencias: T053-T056.

## Phase 8: Validacao de escopo seguro

**Purpose**: Provar que a revisao futura ficou dentro do limite autorizado.

- [X] T058 [US1] Validar que o candidato adicional foi auditado e o PNG de origem foi verificado; arquivos: `docs/technical/rig-articulation-preview-import-review-v1.md` e `docs/technical/rig-articulation-preview-import-review-manifest-v1.md`; criterio: candidato e origem aparecem nos dois documentos; dependencias: T039-T052.
- [X] T059 [US1] Validar que a relacao com Rig Articulation Test V1 e rig tecnico validado foi documentada; arquivos: `docs/technical/rig-articulation-preview-import-review-v1.md`; criterio: relacao tecnica descrita sem promocao a runtime; dependencias: T048.
- [X] T060 [US3] Validar que foi registrado que ainda nao existe caminhada articulada oficial e que o candidato nao e walk cycle oficial; arquivos: `docs/technical/rig-articulation-preview-import-review-v1.md`; criterio: bloco obrigatorio presente; dependencias: T049.
- [X] T061 [US3] Validar que nenhum `.import` foi removido, editado, stageado ou versionado; arquivos: `*.import`; criterio: `git diff --name-status -- "*.import"` sem alteracoes rastreadas e candidato ainda sem stage; dependencias: T043.
- [X] T062 [US3] Validar que nenhum `.uid` foi removido, editado, stageado ou versionado; arquivos: `*.uid`; criterio: `git diff --name-status -- "*.uid"` sem alteracoes; dependencias: T043.
- [X] T063 [US3] Validar que `.gitignore` nao foi alterado; arquivos: `.gitignore`; criterio: sem diff em `.gitignore`; dependencias: T053-T056.
- [X] T064 [US3] Validar que `scenes/player/Player.tscn`, `scenes/rig/AntonioRafaelRigLab.tscn`, `scripts/player/`, `scripts/rig/`, `assets/characters/antonio_rafael/sprites/idle/` e `assets/characters/antonio_rafael/rig/` nao foram alterados; criterio: sem diff nesses caminhos; dependencias: T031, T057.
- [X] T065 [US3] Validar que nenhum walk cycle, caminhada articulada oficial, animacao oficial ou gameplay foi criado; arquivos: documentos e status Git; criterio: apenas documentos autorizados aparecem em diff; dependencias: T057-T064.
- [X] T066 [US3] Validar que `git add .`, `git add -A`, `git clean`, remocao, movimentacao, commit e push nao foram usados; arquivos: gate final e status Git; criterio: nenhum arquivo stageado indevidamente, nenhum commit e nenhum push; dependencias: T061-T065.
- [X] T067 [US2] Validar que manifesto e documentacao tecnica foram criados e que documentos correlatos foram atualizados somente se necessario; arquivos: `docs/technical/rig-articulation-preview-import-review-v1.md`, `docs/technical/rig-articulation-preview-import-review-manifest-v1.md` e documentos correlatos; criterio: todos os diffs sao documentais e no escopo; dependencias: T039-T066.

## Phase 9: Gate humano final

**Purpose**: Parar para decisao humana antes de qualquer commit, push ou acao sobre imports.

- [X] T068 Gate humano final: apresentar caminho do candidato, existencia do PNG de origem, relacao com Rig Articulation Test V1, relacao com rig tecnico validado, risco identificado, recomendacao futura, decisao sobre agrupamento com os 32 `.import` oficiais, decisao sugerida para `.gitignore`, documentos criados/atualizados, confirmacao de que nenhum `.import` foi removido, nenhum `.uid` foi alterado, Player/cenas/scripts/assets oficiais nao foram alterados, ainda nao existe caminhada articulada oficial, nao houve commit e nao houve push; arquivos: relatorio final da execucao; criterio: usuario pode aprovar, aprovar parcialmente ou reprovar; dependencias: T058-T067.

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1**: Sem dependencias, prepara leitura e escopo.
- **Phase 2**: Depende da Phase 1, audita o candidato sem alterar arquivos.
- **Phase 3**: Depende da localizacao do candidato na Phase 2.
- **Phase 4**: Depende da verificacao de origem e vinculo da Phase 3.
- **Phase 5**: Depende da recomendacao e status da Phase 4.
- **Phase 6**: Depende da recomendacao da Phase 4 e das evidencias da Phase 3.
- **Phase 7**: Depende da documentacao principal da Phase 6.
- **Phase 8**: Depende das documentacoes e atualizacoes das Phases 5-7.
- **Phase 9**: Depende de toda a validacao da Phase 8.

### User Story Mapping

- **US1 - Auditar o import adicional**: T013-T031, T048, T058-T059.
- **US2 - Recomendar decisao futura segura**: T032-T057, T067.
- **US3 - Registrar que o runtime nao foi alterado**: T029-T031, T049, T051, T057, T060-T066.

### Parallel Opportunities

- T003-T011 podem ser executadas em paralelo apos T001.
- T015-T019 podem ser executadas em paralelo apos T013.
- T053-T056 podem ser executadas em paralelo apos T050, desde que cada documento seja atualizado isoladamente.
- T061-T064 podem ser executadas em paralelo apos T043.

## Implementation Strategy

### MVP First

1. Concluir Phase 1.
2. Concluir Phase 2 para provar se o candidato existe e continua untracked.
3. Concluir Phase 3 para provar origem e relacao tecnica.
4. Parar se houver divergencia de existencia, origem ou escopo.

### Incremental Delivery

1. Auditar o candidato unico.
2. Classificar risco e recomendacao.
3. Criar manifesto e documento tecnico.
4. Atualizar documentos correlatos somente se necessario.
5. Validar escopo seguro.
6. Parar no gate humano.

### Forbidden During Implementation

Do not remove `.import`, do not remove `.uid`, do not alter `.gitignore`, do not alter Player, do not alter rig scene, do not alter scripts, do not alter approved idle sprites, do not alter official rig assets, do not create walk cycle, do not create official animation, do not create gameplay, do not stage files, do not commit, and do not push.
