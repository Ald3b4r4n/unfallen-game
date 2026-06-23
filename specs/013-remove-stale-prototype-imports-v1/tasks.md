# Tasks: Remove Stale Prototype Imports V1

**Input**: Design artifacts from `specs/013-remove-stale-prototype-imports-v1/`  
**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, `quickstart.md`  
**Scope**: Prepare the future safe removal of only the 77 stale `.import` files classified as `prototype_imports`

**Strict Prohibitions**: Do not implement removal in this tasks stage. Do not remove `.import`, remove `.uid`, alter `.gitignore`, move files, stage files, commit, push, alter Player, alter rig scene, alter scripts, alter approved idle sprites, or alter official rig assets.

## Phase 1: Preparação e leitura da feature

- [X] T001 Ler a especificação da feature 013 em `specs/013-remove-stale-prototype-imports-v1/spec.md`
  - Title: Ler spec 013
  - Description: Confirmar que o escopo é exclusivamente tratar os 77 `prototype_imports`.
  - Files/Folders: `specs/013-remove-stale-prototype-imports-v1/spec.md`
  - Completion Criterion: Escopo e proibições da spec foram entendidos.
  - Dependencies: None

- [X] T002 Ler o plano técnico em `specs/013-remove-stale-prototype-imports-v1/plan.md`
  - Title: Ler plano técnico
  - Description: Confirmar estratégia por lista explícita, critérios de remoção e gate humano.
  - Files/Folders: `specs/013-remove-stale-prototype-imports-v1/plan.md`
  - Completion Criterion: Estratégia futura de remoção está clara.
  - Dependencies: T001

- [X] T003 [P] Ler o research em `specs/013-remove-stale-prototype-imports-v1/research.md`
  - Title: Ler decisões
  - Description: Revisar decisões de não usar glob amplo, não tocar em `.uid` e parar se a contagem divergir.
  - Files/Folders: `specs/013-remove-stale-prototype-imports-v1/research.md`
  - Completion Criterion: Decisões de segurança foram extraídas.
  - Dependencies: T001

- [X] T004 [P] Ler o data model em `specs/013-remove-stale-prototype-imports-v1/data-model.md`
  - Title: Ler modelo
  - Description: Revisar campos de `PrototypeImportCandidate`, `RemovalDecision`, `RemovalManifestEntry` e `SafetyValidation`.
  - Files/Folders: `specs/013-remove-stale-prototype-imports-v1/data-model.md`
  - Completion Criterion: Campos obrigatórios do manifesto e validação estão conhecidos.
  - Dependencies: T001

- [X] T005 [P] Ler o quickstart em `specs/013-remove-stale-prototype-imports-v1/quickstart.md`
  - Title: Ler quickstart
  - Description: Revisar o fluxo de auditoria, filtragem, manifesto, documentação e gate final.
  - Files/Folders: `specs/013-remove-stale-prototype-imports-v1/quickstart.md`
  - Completion Criterion: Fluxo operacional futuro está claro.
  - Dependencies: T001

- [X] T006 Ler a política Godot da feature 012 em `docs/technical/godot-import-uid-policy-v1.md`
  - Title: Ler política 012
  - Description: Confirmar os totais `prototype_imports: 77`, `official_asset_imports: 32` e `official_uid_files: 2`.
  - Files/Folders: `docs/technical/godot-import-uid-policy-v1.md`
  - Completion Criterion: Fonte de verdade da classificação foi revisada.
  - Dependencies: T001

- [X] T007 [P] Ler auditoria e inventário da feature 010 em `docs/technical/untracked-cleanup-audit-v1.md` e `docs/technical/untracked-cleanup-inventory-v1.md`
  - Title: Ler auditoria 010
  - Description: Confirmar contexto de untracked e grupos pendentes.
  - Files/Folders: `docs/technical/untracked-cleanup-audit-v1.md`, `docs/technical/untracked-cleanup-inventory-v1.md`
  - Completion Criterion: Relação com a auditoria de untracked está documentada.
  - Dependencies: T006

- [X] T008 [P] Ler manifesto histórico em `docs/archive/walk-prototypes-v1/manifest.md`
  - Title: Ler arquivo histórico
  - Description: Confirmar que os protótipos de walk foram arquivados historicamente.
  - Files/Folders: `docs/archive/walk-prototypes-v1/manifest.md`, `docs/archive/walk-prototypes-v1/`
  - Completion Criterion: Base de comparação para origem arquivada está disponível.
  - Dependencies: T006

- [X] T009 Confirmar escopo sensível antes de qualquer auditoria em `.gitignore`, `scenes/player/Player.tscn`, `scenes/rig/AntonioRafaelRigLab.tscn`, `scripts/`, `assets/characters/antonio_rafael/sprites/idle/` e `assets/characters/antonio_rafael/rig/`
  - Title: Confirmar limites
  - Description: Registrar que esses caminhos não devem ser alterados pela implementação.
  - Files/Folders: `.gitignore`, `scenes/player/Player.tscn`, `scenes/rig/AntonioRafaelRigLab.tscn`, `scripts/`, `assets/characters/antonio_rafael/sprites/idle/`, `assets/characters/antonio_rafael/rig/`
  - Completion Criterion: Lista de caminhos sensíveis foi confirmada.
  - Dependencies: T001, T002

## Phase 2: Auditoria somente leitura dos `.import`

- [X] T010 [US1] Registrar estado Git inicial usando comandos somente leitura no repositório raiz
  - Title: Auditar status Git
  - Description: Capturar branch, status completo, diff name-only e diff stat sem staging.
  - Files/Folders: repository root
  - Completion Criterion: Estado inicial foi registrado sem alterar arquivos.
  - Dependencies: T009

- [X] T011 [US1] Listar untracked e separar `.import` e `.uid` no repositório raiz
  - Title: Separar untracked
  - Description: Obter lista de untracked, contar `.import` e contar `.uid`.
  - Files/Folders: repository root
  - Completion Criterion: Totais separados de `.import` e `.uid` foram registrados.
  - Dependencies: T010

- [X] T012 [US1] Identificar candidatos `prototype_imports` entre os `.import` untracked
  - Title: Filtrar protótipos
  - Description: Filtrar apenas caminhos relacionados a protótipos de walk rejeitados/arquivados.
  - Files/Folders: untracked `.import` inventory, `docs/technical/godot-import-uid-policy-v1.md`
  - Completion Criterion: Lista candidata contém somente `.import` de protótipos.
  - Dependencies: T011

- [X] T013 [US1] Confirmar contagem esperada de 77 candidatos `prototype_imports`
  - Title: Validar contagem
  - Description: Comparar a lista candidata com o total esperado pela feature 012.
  - Files/Folders: candidate `prototype_imports` list, `docs/technical/godot-import-uid-policy-v1.md`
  - Completion Criterion: Contagem é 77; se divergir, a implementação deve parar para revisão humana.
  - Dependencies: T012

- [X] T014 [US1] Confirmar que todos os candidatos continuam untracked
  - Title: Validar untracked
  - Description: Verificar que nenhum candidato já está rastreado.
  - Files/Folders: candidate `prototype_imports` list
  - Completion Criterion: Todos os candidatos estão untracked ou divergência foi registrada.
  - Dependencies: T013

- [X] T015 [US1] Confirmar que todos os candidatos são `.import`, não `.uid`
  - Title: Excluir UID
  - Description: Validar extensão de cada candidato e excluir qualquer `.uid`.
  - Files/Folders: candidate `prototype_imports` list
  - Completion Criterion: Nenhum `.uid` entra na lista de remoção.
  - Dependencies: T013

- [X] T016 [US1] Excluir qualquer candidato em `assets/characters/antonio_rafael/rig/`
  - Title: Excluir rig
  - Description: Garantir que imports do rig técnico validado não façam parte da lista.
  - Files/Folders: `assets/characters/antonio_rafael/rig/`, candidate `prototype_imports` list
  - Completion Criterion: Nenhum caminho de rig oficial está na lista de remoção.
  - Dependencies: T013

- [X] T017 [US1] Excluir qualquer candidato em `assets/characters/antonio_rafael/sprites/idle/`
  - Title: Excluir idles
  - Description: Garantir que imports da Base Idle Oficial V1 não façam parte da lista.
  - Files/Folders: `assets/characters/antonio_rafael/sprites/idle/`, candidate `prototype_imports` list
  - Completion Criterion: Nenhum import idle aprovado está na lista de remoção.
  - Dependencies: T013

- [X] T018 [US1] Confirmar que candidatos não pertencem a assets oficiais aprovados
  - Title: Excluir oficiais
  - Description: Comparar os candidatos contra `official_asset_imports` documentados na feature 012.
  - Files/Folders: candidate `prototype_imports` list, `docs/technical/godot-import-uid-policy-v1.md`
  - Completion Criterion: Nenhum `official_asset_imports` está marcado para remoção.
  - Dependencies: T016, T017

- [X] T019 [US1] Confirmar que candidatos não são usados por cenas ou scripts oficiais
  - Title: Verificar uso oficial
  - Description: Verificar que os imports candidatos não estão associados a Player, cena de rig, scripts oficiais ou runtime.
  - Files/Folders: `scenes/player/Player.tscn`, `scenes/rig/AntonioRafaelRigLab.tscn`, `scripts/`, candidate `prototype_imports` list
  - Completion Criterion: Nenhum candidato está ligado a cena/script oficial.
  - Dependencies: T018

## Phase 3: Validação dos critérios de remoção

- [X] T020 [US1] Inferir PNG de origem para cada `.import` candidato
  - Title: Mapear origem
  - Description: Remover o sufixo `.import` de cada candidato para obter o PNG de origem esperado.
  - Files/Folders: candidate `prototype_imports` list
  - Completion Criterion: Cada candidato possui `related_source_png` inferido.
  - Dependencies: T019

- [X] T021 [US1] Verificar existência do PNG de origem no local original
  - Title: Checar origem local
  - Description: Confirmar se o PNG original ainda existe no caminho inferido.
  - Files/Folders: `assets/characters/antonio_rafael/exports/`, `assets/characters/antonio_rafael/source/`, `assets/characters/antonio_rafael/sprites/`
  - Completion Criterion: Cada candidato possui flag `related_source_exists`.
  - Dependencies: T020

- [X] T022 [US1] Verificar relação com arquivo histórico em `docs/archive/walk-prototypes-v1/`
  - Title: Checar arquivo histórico
  - Description: Confirmar se a origem foi arquivada ou está representada no manifesto da feature 011.
  - Files/Folders: `docs/archive/walk-prototypes-v1/`, `docs/archive/walk-prototypes-v1/manifest.md`
  - Completion Criterion: Cada candidato possui informação de origem arquivada quando aplicável.
  - Dependencies: T020

- [X] T023 [US1] Classificar decisão preliminar por candidato
  - Title: Decisão preliminar
  - Description: Marcar cada candidato como `remove_candidate` ou `keep_for_review`.
  - Files/Folders: candidate `prototype_imports` list
  - Completion Criterion: Todos os 77 candidatos possuem decisão preliminar.
  - Dependencies: T021, T022

- [X] T024 [US1] Validar os 10 critérios obrigatórios de remoção para cada candidato
  - Title: Validar critérios
  - Description: Aplicar os critérios da spec e manter para revisão qualquer candidato que falhar.
  - Files/Folders: `specs/013-remove-stale-prototype-imports-v1/spec.md`, candidate `prototype_imports` list
  - Completion Criterion: Cada candidato possui decisão final consistente com os 10 critérios.
  - Dependencies: T023

## Phase 4: Preparação do manifesto de decisão

- [X] T025 [US3] Criar estrutura do manifesto em `docs/technical/stale-prototype-imports-removal-manifest-v1.md`
  - Title: Estruturar manifesto
  - Description: Criar seções para objetivo, critérios, resumo e tabela de decisões.
  - Files/Folders: `docs/technical/stale-prototype-imports-removal-manifest-v1.md`
  - Completion Criterion: Manifesto existe com estrutura inicial completa.
  - Dependencies: T024

- [X] T026 [US3] Registrar cada candidato avaliado no manifesto em `docs/technical/stale-prototype-imports-removal-manifest-v1.md`
  - Title: Preencher manifesto
  - Description: Listar caminho original, grupo, origem provável, arquivo de origem, existência, motivo, status e decisão.
  - Files/Folders: `docs/technical/stale-prototype-imports-removal-manifest-v1.md`
  - Completion Criterion: Todos os candidatos avaliados possuem entrada no manifesto.
  - Dependencies: T025

- [X] T027 [US3] Registrar candidatos mantidos para revisão em `docs/technical/stale-prototype-imports-removal-manifest-v1.md`
  - Title: Registrar mantidos
  - Description: Documentar candidatos com status `kept_for_review`, `excluded_official_import`, `excluded_uid` ou `excluded_unknown_origin`.
  - Files/Folders: `docs/technical/stale-prototype-imports-removal-manifest-v1.md`
  - Completion Criterion: Itens não removidos têm motivo explícito.
  - Dependencies: T026

- [X] T028 [US3] Registrar candidatos aprovados para remoção em `docs/technical/stale-prototype-imports-removal-manifest-v1.md`
  - Title: Registrar removíveis
  - Description: Documentar candidatos com status planejado `removed_stale_prototype_import`.
  - Files/Folders: `docs/technical/stale-prototype-imports-removal-manifest-v1.md`
  - Completion Criterion: Itens removíveis têm motivo e decisão verificáveis.
  - Dependencies: T026

## Phase 5: Planejamento da remoção controlada

- [X] T029 [US2] Montar lista explícita de `.import` aprovados para remoção
  - Title: Lista explícita
  - Description: Criar lista derivada do manifesto, sem globs amplos e sem diretórios inteiros.
  - Files/Folders: `docs/technical/stale-prototype-imports-removal-manifest-v1.md`
  - Completion Criterion: Lista contém somente itens com status `removed_stale_prototype_import`.
  - Dependencies: T028

- [X] T030 [US2] Validar lista explícita contra `.uid`, `official_asset_imports` e caminhos oficiais
  - Title: Validar lista final
  - Description: Conferir que a lista não contém `.uid`, rig oficial, Base Idle V1, Player, cenas ou scripts oficiais.
  - Files/Folders: `docs/technical/stale-prototype-imports-removal-manifest-v1.md`, `assets/characters/antonio_rafael/rig/`, `assets/characters/antonio_rafael/sprites/idle/`, `scenes/`, `scripts/`
  - Completion Criterion: Lista final não contém arquivos fora do escopo.
  - Dependencies: T029

- [X] T031 [US2] Executar remoção controlada somente da lista explícita aprovada
  - Title: Remoção controlada
  - Description: Remover apenas os `.import` listados e aprovados, sem remover diretórios inteiros.
  - Files/Folders: explicit approved stale `.import` list
  - Completion Criterion: Apenas os `.import` aprovados foram removidos; nenhum outro arquivo foi tocado.
  - Dependencies: T030

- [X] T032 [US2] Confirmar que os `.import` removidos desapareceram do working tree
  - Title: Confirmar remoção
  - Description: Verificar que os caminhos removidos não existem mais e que os mantidos continuam presentes.
  - Files/Folders: explicit approved stale `.import` list, kept-for-review `.import` list
  - Completion Criterion: Removidos ausentes; mantidos preservados.
  - Dependencies: T031

## Phase 6: Documentação técnica

- [X] T033 [US3] Criar documento técnico em `docs/technical/stale-prototype-imports-removal-v1.md`
  - Title: Criar doc técnico
  - Description: Registrar objetivo, relação com feature 012, critérios e escopo.
  - Files/Folders: `docs/technical/stale-prototype-imports-removal-v1.md`
  - Completion Criterion: Documento técnico existe com contexto e critérios.
  - Dependencies: T031

- [X] T034 [US3] Registrar totais da remoção em `docs/technical/stale-prototype-imports-removal-v1.md`
  - Title: Registrar totais
  - Description: Registrar total avaliado, removido, mantido e divergências.
  - Files/Folders: `docs/technical/stale-prototype-imports-removal-v1.md`
  - Completion Criterion: Totais batem com manifesto e validação.
  - Dependencies: T033

- [X] T035 [US3] Registrar lista ou resumo dos removidos em `docs/technical/stale-prototype-imports-removal-v1.md`
  - Title: Registrar removidos
  - Description: Documentar removidos por grupo/origem e apontar para o manifesto completo.
  - Files/Folders: `docs/technical/stale-prototype-imports-removal-v1.md`, `docs/technical/stale-prototype-imports-removal-manifest-v1.md`
  - Completion Criterion: Removidos são rastreáveis pelo documento técnico.
  - Dependencies: T034

- [X] T036 [US3] Registrar itens mantidos para revisão em `docs/technical/stale-prototype-imports-removal-v1.md`
  - Title: Registrar pendências
  - Description: Documentar qualquer candidato mantido e motivo da retenção.
  - Files/Folders: `docs/technical/stale-prototype-imports-removal-v1.md`
  - Completion Criterion: Pendências e critérios falhos estão documentados.
  - Dependencies: T034

- [X] T037 [US3] Registrar confirmações de segurança em `docs/technical/stale-prototype-imports-removal-v1.md`
  - Title: Registrar segurança
  - Description: Confirmar que `.uid`, `official_asset_imports`, `.gitignore`, Player, cenas, scripts, sprites idle e rig oficial não foram alterados.
  - Files/Folders: `docs/technical/stale-prototype-imports-removal-v1.md`
  - Completion Criterion: Confirmações obrigatórias estão documentadas.
  - Dependencies: T035, T036

## Phase 7: Atualização de documentos correlatos

- [X] T038 [US3] Atualizar política Godot em `docs/technical/godot-import-uid-policy-v1.md`
  - Title: Atualizar política 012
  - Description: Registrar que os `prototype_imports` foram tratados pela feature 013, sem alterar grupos oficiais.
  - Files/Folders: `docs/technical/godot-import-uid-policy-v1.md`
  - Completion Criterion: Política aponta para o resultado da feature 013.
  - Dependencies: T037

- [X] T039 [US3] Atualizar auditoria em `docs/technical/untracked-cleanup-audit-v1.md`
  - Title: Atualizar auditoria
  - Description: Registrar que `prototype_imports` foram tratados e que official imports/UIDs continuam pendentes.
  - Files/Folders: `docs/technical/untracked-cleanup-audit-v1.md`
  - Completion Criterion: Auditoria reflete a decisão da feature 013.
  - Dependencies: T037

- [X] T040 [US3] Atualizar inventário em `docs/technical/untracked-cleanup-inventory-v1.md`
  - Title: Atualizar inventário
  - Description: Atualizar status dos `prototype_imports` e manter `official_asset_imports`/`official_uid_files` como pendentes.
  - Files/Folders: `docs/technical/untracked-cleanup-inventory-v1.md`
  - Completion Criterion: Inventário diferencia removidos, mantidos e pendentes.
  - Dependencies: T037

- [X] T041 [US3] Atualizar higiene do repositório em `docs/project/repository-hygiene.md`
  - Title: Atualizar higiene
  - Description: Registrar a regra prática: remoção de imports stale só por lista explícita e manifesto.
  - Files/Folders: `docs/project/repository-hygiene.md`
  - Completion Criterion: Higiene do repositório incorpora a lição da feature 013.
  - Dependencies: T037

## Phase 8: Validação de escopo seguro

- [X] T042 Validar que os 77 `prototype_imports` foram auditados e receberam decisão documentada
  - Title: Validar decisões
  - Description: Conferir que cada candidato está no manifesto com status e decisão.
  - Files/Folders: `docs/technical/stale-prototype-imports-removal-manifest-v1.md`
  - Completion Criterion: 100% dos candidatos avaliados possuem decisão.
  - Dependencies: T026, T027, T028

- [X] T043 Validar que somente `.import` obsoleto de protótipo foi removido
  - Title: Validar remoção
  - Description: Comparar removidos contra lista explícita e critérios da spec.
  - Files/Folders: `docs/technical/stale-prototype-imports-removal-manifest-v1.md`, explicit removed `.import` paths
  - Completion Criterion: Nenhum arquivo fora da lista explícita foi removido.
  - Dependencies: T031, T032

- [X] T044 Validar que nenhum `.uid` foi removido ou alterado
  - Title: Validar UID
  - Description: Confirmar que os `.uid` untracked e oficiais ficaram intocados.
  - Files/Folders: `scripts/rig/rig_export_notes.gd.uid`, `scripts/rig/rig_preview_controller.gd.uid`, tracked `.uid` files
  - Completion Criterion: Nenhum `.uid` foi removido, alterado ou stageado.
  - Dependencies: T043

- [X] T045 Validar que nenhum `official_asset_imports` foi removido
  - Title: Validar imports oficiais
  - Description: Confirmar que os 32 official imports documentados continuam presentes.
  - Files/Folders: `assets/characters/antonio_rafael/rig/`, `docs/technical/godot-import-uid-policy-v1.md`
  - Completion Criterion: Nenhum import oficial foi removido.
  - Dependencies: T043

- [X] T046 Validar que `.gitignore`, Player, cena de rig, scripts, sprites idle e rig oficial não tiveram diff
  - Title: Validar sensíveis
  - Description: Conferir ausência de diff em caminhos sensíveis.
  - Files/Folders: `.gitignore`, `scenes/player/Player.tscn`, `scenes/rig/AntonioRafaelRigLab.tscn`, `scripts/`, `assets/characters/antonio_rafael/sprites/idle/`, `assets/characters/antonio_rafael/rig/`
  - Completion Criterion: Nenhum caminho sensível possui diff indevido.
  - Dependencies: T043

- [X] T047 Validar que não houve gameplay, walk cycle ou animação oficial
  - Title: Validar não gameplay
  - Description: Confirmar que nenhum arquivo de runtime, cena ou script foi criado/alterado para gameplay.
  - Files/Folders: `scenes/`, `scripts/`, `assets/characters/antonio_rafael/`
  - Completion Criterion: Nenhuma feature de jogo foi criada.
  - Dependencies: T046

- [X] T048 Validar que comandos proibidos de stage/clean/commit não foram usados
  - Title: Validar comandos
  - Description: Confirmar ausência de stage em massa, clean, commit e push durante a implementação.
  - Files/Folders: repository root
  - Completion Criterion: Não houve stage em massa, commit ou push.
  - Dependencies: T047

- [X] T049 Validar documentos finais da feature 013
  - Title: Validar docs
  - Description: Conferir que documento técnico, manifesto e documentos correlatos contêm totais e confirmações obrigatórias.
  - Files/Folders: `docs/technical/stale-prototype-imports-removal-v1.md`, `docs/technical/stale-prototype-imports-removal-manifest-v1.md`, `docs/technical/godot-import-uid-policy-v1.md`, `docs/technical/untracked-cleanup-audit-v1.md`, `docs/technical/untracked-cleanup-inventory-v1.md`, `docs/project/repository-hygiene.md`
  - Completion Criterion: Documentação final está completa e consistente.
  - Dependencies: T038, T039, T040, T041, T048

## Phase 9: Gate humano final

- [ ] T050 Gate humano da Remove Stale Prototype Imports V1
  - Title: Gate humano
  - Description: Apresentar total avaliado, candidatos à remoção, mantidos para revisão, resumo dos removidos, confirmação de `.uid`/official imports/Player/cenas/scripts/assets oficiais/`.gitignore` intocados, documentos criados/atualizados, recomendação para implementação/commit e confirmação de ausência de commit/push.
  - Files/Folders: `docs/technical/stale-prototype-imports-removal-v1.md`, `docs/technical/stale-prototype-imports-removal-manifest-v1.md`, `docs/technical/godot-import-uid-policy-v1.md`, `docs/technical/untracked-cleanup-audit-v1.md`, `docs/technical/untracked-cleanup-inventory-v1.md`, `docs/project/repository-hygiene.md`
  - Completion Criterion: Revisão humana recebe todos os dados para aprovar, ajustar ou reprovar a remoção.
  - Dependencies: T042, T043, T044, T045, T046, T047, T048, T049

## Dependencies & Execution Order

- Phase 1 must complete before any audit task.
- Phase 2 must complete before validating removal criteria.
- Phase 3 must complete before writing the removal manifest.
- Phase 4 must complete before any controlled removal.
- Phase 5 must complete before technical documentation can claim removals.
- Phase 6 must complete before correlated documents are updated.
- Phase 8 validates all outcomes before the human gate.
- T050 is the final gate and must remain the last task.

## Independent Test Criteria

- **US1**: A candidate list exists with exactly 77 `prototype_imports`, no `.uid`, no `official_asset_imports`, no Base Idle V1 imports, and no rig official imports.
- **US2**: Only candidates that pass all 10 criteria are removed, and every removed path exists in the manifest.
- **US3**: The technical document and manifest report totals, decisions, confirmations, and pending items without claiming commit or push.

## Parallel Opportunities

- T003, T004 and T005 can run in parallel after T001.
- T007 and T008 can run in parallel after T006.
- T016 and T017 can run in parallel after T013.
- T021 and T022 can run in parallel after T020.
- T038, T039, T040 and T041 can run in parallel after T037 if handled carefully by separate files.

## Implementation Strategy

### MVP First

1. Complete Phase 1.
2. Complete Phase 2 and stop if the candidate count is not 77.
3. Complete Phase 3 to classify every candidate.
4. Stop and review the candidate decisions before actual removal.

### Safe Removal Increment

1. Build manifesto first.
2. Build the explicit removal list from the manifesto.
3. Remove only paths with approved status.
4. Validate sensitive paths before writing final approval language.

### Final Documentation Increment

1. Write removal document.
2. Update correlated docs.
3. Run validation.
4. Stop at human gate before commit or push.

