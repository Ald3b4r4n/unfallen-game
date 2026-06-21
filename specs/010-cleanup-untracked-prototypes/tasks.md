# Tasks: Cleanup Untracked Prototypes V1

**Input**: Design documents from `specs/010-cleanup-untracked-prototypes/`  
**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, `quickstart.md`

**Scope**: Audit, inventory and classify old untracked files. Do not clean, move, delete, stage in mass, commit or push.

**Task Format**: Each task includes ID, short title, objective description, files/folders involved, completion criteria, dependencies and `[P]` when it can be done in parallel.

## Phase 1: Preparação e Leitura da Feature

**Purpose**: Confirmar o escopo documental/de auditoria antes de qualquer coleta.

- [X] T001 Ler constituição do projeto — Ler `.specify/memory/constitution.md` e registrar mentalmente gates aplicáveis; arquivos/pastas: `.specify/memory/constitution.md`; critério: princípios de gate humano, proibição de destruição e escopo character-first compreendidos; dependências: nenhuma.
- [X] T002 Ler especificação 010 — Ler `specs/010-cleanup-untracked-prototypes/spec.md`; arquivos/pastas: `specs/010-cleanup-untracked-prototypes/spec.md`; critério: objetivo, requisitos e critérios de aceite compreendidos; dependências: T001.
- [X] T003 [P] Ler plano técnico 010 — Ler `specs/010-cleanup-untracked-prototypes/plan.md`; arquivos/pastas: `specs/010-cleanup-untracked-prototypes/plan.md`; critério: comandos permitidos, artefatos planejados e proibições identificados; dependências: T001.
- [X] T004 [P] Ler research 010 — Ler `specs/010-cleanup-untracked-prototypes/research.md`; arquivos/pastas: `specs/010-cleanup-untracked-prototypes/research.md`; critério: decisões de auditoria, `.import`, `.uid`, specs antigas e itens sensíveis compreendidas; dependências: T001.
- [X] T005 [P] Ler data model 010 — Ler `specs/010-cleanup-untracked-prototypes/data-model.md`; arquivos/pastas: `specs/010-cleanup-untracked-prototypes/data-model.md`; critério: campos de `UntrackedFile`, `AuditGroup`, risco e destino recomendado compreendidos; dependências: T001.
- [X] T006 [P] Ler quickstart 010 — Ler `specs/010-cleanup-untracked-prototypes/quickstart.md`; arquivos/pastas: `specs/010-cleanup-untracked-prototypes/quickstart.md`; critério: fluxo seguro de implementação e validação compreendido; dependências: T001.
- [X] T007 Confirmar escopo proibitivo — Confirmar que a feature não move, apaga, altera Player, altera cenas, altera scripts, altera sprites/assets oficiais, faz commit ou faz push; arquivos/pastas: `specs/010-cleanup-untracked-prototypes/tasks.md`; critério: proibições registradas como checklist operacional antes da auditoria; dependências: T002, T003, T004, T005, T006.

## Phase 2: Auditoria Git Somente Leitura

**Purpose**: Coletar estado Git sem modificar workspace, índice ou remoto.

- [X] T008 Executar status completo — Executar `git status --short --untracked-files=all` e registrar saída para documentação futura; arquivos/pastas: workspace Git; critério: status completo disponível para contagem e grupos; dependências: T007.
- [X] T009 Executar lista de untracked — Executar `git ls-files --others --exclude-standard` e usar a saída como fonte primária do inventário; arquivos/pastas: workspace Git; critério: lista bruta de untracked coletada sem criar artefato final na raiz; dependências: T007.
- [X] T010 [P] Executar diff name-only — Executar `git diff --name-only` para confirmar arquivos rastreados modificados; arquivos/pastas: workspace Git; critério: lista de tracked modificados registrada, com atenção a `.specify/feature.json`; dependências: T007.
- [X] T011 [P] Executar diff stat — Executar `git diff --stat` para confirmar impacto rastreado; arquivos/pastas: workspace Git; critério: estatística de diff rastreado registrada; dependências: T007.
- [X] T012 [P] Executar log recente — Executar `git log --oneline -10` e registrar os commits principais já enviados; arquivos/pastas: histórico Git; critério: últimos 10 commits disponíveis para contexto da auditoria; dependências: T007.
- [X] T013 Registrar comandos proibidos — Confirmar no relatório futuro que não foram usados `git add .`, `git add -A`, `git commit -am`, `git clean`, `Remove-Item`, restauração sem autorização ou alteração de `.gitignore`; arquivos/pastas: `docs/technical/untracked-cleanup-audit-v1.md`; critério: seção de segurança planejada para a documentação de auditoria; dependências: T008, T009, T010, T011, T012.

## Phase 3: Coleta do Inventário Bruto

**Purpose**: Preparar a base do inventário sem transformar arquivo temporário em artefato final.

- [X] T014 Contar total de untracked — Contar itens retornados por `git ls-files --others --exclude-standard`; arquivos/pastas: saída de `git ls-files`; critério: total numérico registrado para o inventário; dependências: T009.
- [X] T015 Identificar inventário temporário na raiz — Verificar se algum arquivo temporário de auditoria na raiz aparece na lista; arquivos/pastas: raiz do projeto; critério: temporários classificados como `temporary_audit_files` e não tratados como artefato final; dependências: T009.
- [X] T016 Preparar tabela base do inventário — Estruturar dados com colunas `path`, `group`, `type`, `risk`, `recommended_destination`, `observation`, `decision_status`; arquivos/pastas: `docs/technical/untracked-cleanup-inventory-v1.md`; critério: modelo de tabela pronto para preenchimento na implementação; dependências: T014, T015.
- [X] T017 Verificar cobertura do inventário — Comparar contagem de linhas do inventário planejado com total de untracked coletados; arquivos/pastas: `docs/technical/untracked-cleanup-inventory-v1.md`; critério: 100% dos untracked listados ou explicitamente contabilizados; dependências: T016.

## Phase 4: Classificação dos Untracked

**Purpose**: Agrupar arquivos por origem/função antes de qualquer recomendação.

- [X] T018 [P] Classificar walk candidates — Classificar arquivos de `assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/`, `assets/characters/antonio_rafael/source/walk_sheet_manual_candidate_v1/` e `assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/`; arquivos/pastas: caminhos de walk manual candidate; critério: grupo `walk_candidates` com quantidade, exemplos, origem provável e relação com features anteriores; dependências: T016.
- [X] T019 [P] Classificar walk prototypes — Classificar arquivos de `assets/characters/antonio_rafael/exports/walk_prototype_v5/` e `assets/characters/antonio_rafael/sprites/walk_prototype_v5/`; arquivos/pastas: caminhos de walk prototype; critério: grupo `walk_prototypes` com quantidade, exemplos, origem provável e relação com tentativas anteriores; dependências: T016.
- [X] T020 [P] Classificar arquivos `.import` — Identificar todos os untracked terminados em `.import`; arquivos/pastas: workspace Git; critério: grupo `godot_import_files` contabilizado, com subobservação por origem quando o `.import` pertence a candidato/protótipo/rig; dependências: T016.
- [X] T021 [P] Classificar arquivos `.uid` — Identificar todos os untracked terminados em `.uid`; arquivos/pastas: workspace Git; critério: grupo `godot_uid_files` contabilizado, com exemplos e origem provável; dependências: T016.
- [X] T022 [P] Classificar specs antigas — Classificar arquivos untracked em `specs/004-walk-cycle-8-directions/`, `specs/005-rig-parts-separation/`, `specs/006-rig-assembly-v1/`, `specs/007-rig-refinement-v1/` e `specs/008-rig-articulation-test-v1/`; arquivos/pastas: `specs/`; critério: grupo `old_specs` com quantidade, exemplos e recomendação de revisão individual; dependências: T016.
- [X] T023 [P] Classificar rig assets — Classificar untracked sob `assets/characters/antonio_rafael/rig/`; arquivos/pastas: `assets/characters/antonio_rafael/rig/`; critério: grupo `rig_assets` separado de `.import`, previews e manifests quando aplicável; dependências: T016.
- [X] T024 [P] Classificar preview assets — Classificar PNGs de preview em `assets/characters/antonio_rafael/**/previews/` e `assets/characters/antonio_rafael/exports/`; arquivos/pastas: paths de preview/export; critério: grupo `preview_assets` com quantidade, exemplos e origem provável; dependências: T016.
- [X] T025 [P] Classificar manifests — Classificar arquivos `.json` relacionados a manifests de walk, rig ou testes; arquivos/pastas: `assets/characters/antonio_rafael/**/*.json`; critério: grupo `manifest_files` com quantidade, exemplos e relação com features anteriores; dependências: T016.
- [X] T026 Classificar origem incerta — Classificar qualquer arquivo que não caiba nos grupos anteriores como `unknown_origin`; arquivos/pastas: workspace Git; critério: nenhum arquivo sem grupo primário; dependências: T018, T019, T020, T021, T022, T023, T024, T025.

## Phase 5: Análise de Risco

**Purpose**: Atribuir risco por grupo e destacar áreas sensíveis.

- [X] T027 Marcar riscos dos grupos — Atribuir `low`, `medium`, `high` ou `critical` a cada grupo classificado; arquivos/pastas: `docs/technical/untracked-cleanup-inventory-v1.md`; critério: cada grupo tem risco explícito e justificativa curta; dependências: T026.
- [X] T028 Avaliar itens críticos — Verificar se algum untracked ou tracked modificado toca `.specify/feature.json`, `scenes/player/Player.tscn`, `assets/characters/antonio_rafael/sprites/idle/` ou assets oficiais de `assets/characters/antonio_rafael/rig/`; arquivos/pastas: caminhos sensíveis; critério: itens sensíveis listados como `critical` ou `high`, sem alteração; dependências: T010, T026.
- [X] T029 Avaliar risco de protótipos rejeitados — Marcar walk candidates/prototypes como risco alto ou necessidade de revisão se puderem representar tentativa reprovada ou não oficial; arquivos/pastas: grupos `walk_candidates`, `walk_prototypes`; critério: risco e observação preservam que não são walk cycle oficial; dependências: T018, T019, T027.
- [X] T030 Avaliar risco de arquivos Godot gerados — Marcar `.import` e `.uid` como `needs_human_review` salvo política documentada; arquivos/pastas: grupos `godot_import_files`, `godot_uid_files`; critério: nenhum `.import` ou `.uid` recomendado para versionamento em massa; dependências: T020, T021, T027.
- [X] T031 Avaliar risco de specs antigas — Marcar specs antigas como `medium` ou `needs_human_review` conforme potencial histórico; arquivos/pastas: grupo `old_specs`; critério: nenhuma spec antiga recomendada para remoção automática; dependências: T022, T027.

## Phase 6: Documentação de Auditoria

**Purpose**: Criar a documentação final somente na implementação, com inventário e relatório auditáveis.

- [X] T032 Criar inventário versionável — Criar `docs/technical/untracked-cleanup-inventory-v1.md` com tabela completa ou agrupamento contabilizado dos untracked; arquivos/pastas: `docs/technical/untracked-cleanup-inventory-v1.md`; critério: documento contém todos os campos do data model e cobertura de 100%; dependências: T017, T026, T027.
- [X] T033 Criar relatório de auditoria — Criar `docs/technical/untracked-cleanup-audit-v1.md` com data, branch, total, grupos, riscos, sensíveis, recomendações, pendências e confirmações de segurança; arquivos/pastas: `docs/technical/untracked-cleanup-audit-v1.md`; critério: relatório cobre todos os itens exigidos pela spec e pelo plano; dependências: T032.
- [X] T034 [P] Avaliar documento de higiene opcional — Decidir se `docs/project/repository-hygiene.md` faz sentido para registrar política futura de `.import`, `.uid`, protótipos e inventários temporários; arquivos/pastas: `docs/project/repository-hygiene.md`; critério: documento criado somente se a auditoria justificar, ou decisão de não criar registrada no relatório; dependências: T027.
- [X] T035 Registrar contexto pós-push — Registrar no relatório que a branch 009 foi enviada com commits limpos e que os untracked antigos não foram enviados; arquivos/pastas: `docs/technical/untracked-cleanup-audit-v1.md`; critério: commits principais e remoto `origin/009-readme-oficial-unfallen` citados como contexto; dependências: T012, T033.

## Phase 7: Recomendações por Grupo

**Purpose**: Propor destinos futuros sem executar nenhuma mudança.

- [X] T036 Recomendar destino para walk candidates — Atribuir `archive_later`, `separate_feature` ou `needs_human_review` aos walk candidates; arquivos/pastas: `docs/technical/untracked-cleanup-inventory-v1.md`, `docs/technical/untracked-cleanup-audit-v1.md`; critério: recomendação registrada sem mover, apagar ou versionar arquivos; dependências: T018, T029, T032, T033.
- [X] T037 Recomendar destino para walk prototypes — Atribuir `archive_later`, `separate_feature` ou `needs_human_review` aos walk prototypes; arquivos/pastas: `docs/technical/untracked-cleanup-inventory-v1.md`, `docs/technical/untracked-cleanup-audit-v1.md`; critério: recomendação registrada sem declarar aprovação de walk cycle; dependências: T019, T029, T032, T033.
- [X] T038 Recomendar destino para `.import` — Atribuir `needs_human_review` ou `ignore_later` conforme política Godot ainda pendente; arquivos/pastas: `docs/technical/untracked-cleanup-inventory-v1.md`, `docs/technical/untracked-cleanup-audit-v1.md`; critério: nenhum `.import` recomendado para commit em massa; dependências: T020, T030, T032, T033.
- [X] T039 Recomendar destino para `.uid` — Atribuir `needs_human_review` aos `.uid` até política explícita; arquivos/pastas: `docs/technical/untracked-cleanup-inventory-v1.md`, `docs/technical/untracked-cleanup-audit-v1.md`; critério: nenhum `.uid` recomendado para commit em massa; dependências: T021, T030, T032, T033.
- [X] T040 Recomendar destino para specs antigas — Atribuir `needs_human_review`, `keep_versioned_later` ou `separate_feature` por grupo de spec antiga; arquivos/pastas: `docs/technical/untracked-cleanup-inventory-v1.md`, `docs/technical/untracked-cleanup-audit-v1.md`; critério: specs antigas exigem revisão individual antes de commit ou remoção; dependências: T022, T031, T032, T033.
- [X] T041 Recomendar destino para rig/previews/manifests — Atribuir `keep_versioned_later`, `needs_human_review` ou `separate_feature` conforme relação com marcos aprovados; arquivos/pastas: `docs/technical/untracked-cleanup-inventory-v1.md`, `docs/technical/untracked-cleanup-audit-v1.md`; critério: assets oficiais não são alterados e untracked de rig são separados por risco; dependências: T023, T024, T025, T027, T032, T033.
- [X] T042 Recomendar destino para origem incerta — Atribuir `needs_human_review` a `unknown_origin`; arquivos/pastas: `docs/technical/untracked-cleanup-inventory-v1.md`, `docs/technical/untracked-cleanup-audit-v1.md`; critério: nenhum arquivo de origem incerta recebe remoção ou commit automático; dependências: T026, T032, T033.

## Phase 8: Validação de Escopo Seguro

**Purpose**: Confirmar que a implementação da auditoria não executou limpeza nem versionamento indevido.

- [X] T043 Validar ausência de remoção e movimentação — Confirmar que nenhum arquivo foi apagado, movido, renomeado ou sobrescrito; arquivos/pastas: workspace Git; critério: relatório final contém confirmação explícita; dependências: T033, T036, T037, T038, T039, T040, T041, T042.
- [X] T044 Validar ausência de stage em massa — Confirmar que não foram usados `git add .`, `git add -A`, `git commit -am` ou `git clean`; arquivos/pastas: documentação de auditoria; critério: relatório final registra a não utilização desses comandos; dependências: T013, T043.
- [X] T045 Validar arquivos protegidos intactos — Confirmar que `scenes/player/Player.tscn`, `scenes/rig/AntonioRafaelRigLab.tscn`, `scripts/player/`, `scripts/rig/`, `assets/characters/antonio_rafael/sprites/idle/`, `assets/characters/antonio_rafael/rig/` e `.gitignore` não foram alterados por esta feature; arquivos/pastas: caminhos protegidos; critério: status/diff não aponta alteração indevida nesses caminhos; dependências: T010, T011, T043.
- [X] T046 Validar documentos permitidos — Confirmar que somente `docs/technical/untracked-cleanup-audit-v1.md`, `docs/technical/untracked-cleanup-inventory-v1.md`, opcionalmente `docs/project/repository-hygiene.md` e `specs/010-cleanup-untracked-prototypes/tasks.md` foram criados/alterados na implementação; arquivos/pastas: docs permitidos e `specs/010-cleanup-untracked-prototypes/tasks.md`; critério: escopo documental validado; dependências: T032, T033, T034.
- [X] T047 Validar ausência de commit e push — Confirmar que nenhum commit ou push foi feito durante a implementação; arquivos/pastas: histórico Git e remoto; critério: último commit permanece anterior à implementação da auditoria e relatório registra ausência de push; dependências: T012, T043.

## Phase 9: Gate Humano Final

**Purpose**: Parar para decisão humana antes de qualquer limpeza, commit ou push.

- [X] T048 Gate humano obrigatório — Apresentar total de untracked encontrados, grupos classificados, arquivos críticos, recomendações para manter fora do Git, commit futuro, arquivamento, remoção futura, feature separada, confirmações de que nada foi apagado/movido/commitado/enviado e recomendação da próxima etapa; arquivos/pastas: `docs/technical/untracked-cleanup-audit-v1.md`, `docs/technical/untracked-cleanup-inventory-v1.md`; critério: decisão humana solicitada antes de qualquer limpeza real; dependências: T043, T044, T045, T046, T047.

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1**: Sem dependências externas; bloqueia todas as demais fases.
- **Phase 2**: Depende da confirmação de escopo da Phase 1.
- **Phase 3**: Depende da coleta Git somente leitura.
- **Phase 4**: Depende da tabela base do inventário.
- **Phase 5**: Depende da classificação dos grupos.
- **Phase 6**: Depende da contagem, classificação e risco.
- **Phase 7**: Depende dos documentos de inventário e auditoria.
- **Phase 8**: Depende das recomendações e documentos.
- **Phase 9**: Depende da validação de escopo seguro.

### Parallel Opportunities

- T003, T004, T005 e T006 podem ser feitos em paralelo após T001.
- T010, T011 e T012 podem ser feitos em paralelo após T007.
- T018 a T025 podem ser feitos em paralelo após T016.
- T034 pode ser feito em paralelo com T033 após T027.

### Prohibited During All Tasks

- Não usar `git add .`.
- Não usar `git add -A`.
- Não usar `git commit -am`.
- Não usar `git clean`.
- Não fazer push.
- Não mover, apagar, renomear ou sobrescrever arquivos sem aprovação humana.
- Não alterar Player, cenas, scripts, sprites idle aprovados, assets oficiais ou `.gitignore`.

## Implementation Strategy

### MVP First

1. Completar Phase 1.
2. Completar Phase 2.
3. Completar Phase 3.
4. Produzir inventário mínimo com 100% dos untracked contabilizados.
5. Parar se a cobertura não bater com a contagem de `git ls-files --others --exclude-standard`.

### Full Audit

1. Completar classificação por grupos.
2. Atribuir riscos.
3. Criar documentação de auditoria e inventário.
4. Registrar recomendações por grupo.
5. Validar que nenhuma limpeza, commit ou push ocorreu.
6. Submeter ao gate humano.
