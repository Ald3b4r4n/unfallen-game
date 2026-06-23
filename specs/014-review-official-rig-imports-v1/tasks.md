# Tasks: Review Official Rig Imports V1

**Input**: Design artifacts from `specs/014-review-official-rig-imports-v1/`
**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, `quickstart.md`
**Scope**: Audit and document the 32 official rig `.import` files only. Do not remove, move, stage, version, or regenerate `.import`/`.uid` files.

## Execution Notes

- Forbidden commands: `git add .`, `git add -A`, `git commit -am`, `git clean`.
- Forbidden changes: `.gitignore`, `scenes/player/Player.tscn`, `scenes/rig/AntonioRafaelRigLab.tscn`, `scripts/player/`, `scripts/rig/`, `assets/characters/antonio_rafael/sprites/idle/`, `assets/characters/antonio_rafael/rig/`.
- Documentation created during implementation must remain limited to the approved docs for feature 014.
- All decisions about official rig `.import` files remain pending human approval.

## Phase 1: Preparacao e leitura da feature

- [X] T001 Ler a especificacao da feature 014 em `specs/014-review-official-rig-imports-v1/spec.md`
  - Title: Ler spec 014
  - Description: Confirmar objetivo, escopo autorizado, proibicoes e criterios de aceite antes de qualquer auditoria.
  - Files/Folders: `specs/014-review-official-rig-imports-v1/spec.md`
  - Completion Criteria: Escopo de revisao dos 32 official rig imports foi compreendido e registrado nas notas da execucao.
  - Dependencies: None

- [X] T002 Ler o plano tecnico em `specs/014-review-official-rig-imports-v1/plan.md`
  - Title: Ler plan 014
  - Description: Confirmar estrategia de auditoria, grupos esperados, riscos e artefatos documentais previstos.
  - Files/Folders: `specs/014-review-official-rig-imports-v1/plan.md`
  - Completion Criteria: Decisoes do plano foram usadas como referencia primaria da implementacao.
  - Dependencies: T001

- [X] T003 [P] Ler a pesquisa tecnica em `specs/014-review-official-rig-imports-v1/research.md`
  - Title: Ler research 014
  - Description: Levantar as decisoes de pesquisa sobre politica Godot, import cache e revisao humana.
  - Files/Folders: `specs/014-review-official-rig-imports-v1/research.md`
  - Completion Criteria: Restricoes e justificativas de pesquisa foram incorporadas na auditoria.
  - Dependencies: T001

- [X] T004 [P] Ler o modelo de dados em `specs/014-review-official-rig-imports-v1/data-model.md`
  - Title: Ler data-model 014
  - Description: Confirmar campos esperados para item de import, grupo, risco, recomendacao e decisao humana.
  - Files/Folders: `specs/014-review-official-rig-imports-v1/data-model.md`
  - Completion Criteria: Campos do manifesto futuro estao alinhados ao modelo de dados.
  - Dependencies: T001

- [X] T005 [P] Ler o quickstart em `specs/014-review-official-rig-imports-v1/quickstart.md`
  - Title: Ler quickstart 014
  - Description: Confirmar comandos seguros de auditoria e sequencia recomendada para validacao manual.
  - Files/Folders: `specs/014-review-official-rig-imports-v1/quickstart.md`
  - Completion Criteria: Comandos de leitura foram identificados sem incluir comandos destrutivos ou de staging.
  - Dependencies: T001

- [X] T006 Ler a politica Godot atual em `docs/technical/godot-import-uid-policy-v1.md`
  - Title: Ler politica import UID
  - Description: Usar a politica da feature 012 como base para nao versionar nem apagar `.import`/`.uid` sem decisao humana.
  - Files/Folders: `docs/technical/godot-import-uid-policy-v1.md`
  - Completion Criteria: Politica existente foi considerada antes de classificar os official rig imports.
  - Dependencies: T002

- [X] T007 [P] Ler a auditoria de untracked em `docs/technical/untracked-cleanup-audit-v1.md`
  - Title: Ler auditoria cleanup
  - Description: Confirmar o historico dos grupos pendentes e a classificacao anterior como critical/needs_human_review.
  - Files/Folders: `docs/technical/untracked-cleanup-audit-v1.md`
  - Completion Criteria: Relacao entre feature 010 e official rig imports foi compreendida.
  - Dependencies: T002

- [X] T008 [P] Ler o inventario de untracked em `docs/technical/untracked-cleanup-inventory-v1.md`
  - Title: Ler inventario cleanup
  - Description: Confirmar entradas conhecidas de official_asset_imports e grupos que permanecem fora do escopo.
  - Files/Folders: `docs/technical/untracked-cleanup-inventory-v1.md`
  - Completion Criteria: Itens esperados para revisao foram reconciliados com inventario anterior.
  - Dependencies: T002

- [X] T009 [P] Ler a politica de higiene em `docs/project/repository-hygiene.md`
  - Title: Ler higiene do repositorio
  - Description: Confirmar regras de commits seguros, separacao de prototipos e tratamento de `.import`/`.uid`.
  - Files/Folders: `docs/project/repository-hygiene.md`
  - Completion Criteria: Regras de higiene foram consideradas na recomendacao final.
  - Dependencies: T002

- [X] T010 [P] Ler documentacao do rig validado em `docs/technical/rig-refinement-v1.md`
  - Title: Ler contexto de rig
  - Description: Confirmar quais assets do rig sao oficiais/validados parcialmente para evitar confundir prototipos com rig aprovado.
  - Files/Folders: `docs/technical/rig-refinement-v1.md`, `docs/technical/rig-articulation-test-v1.md`, `docs/technical/rig-assembly-v1.md`
  - Completion Criteria: Relacao entre imports e rig tecnico validado foi identificada.
  - Dependencies: T002

- [X] T011 Confirmar limites de escopo em `specs/014-review-official-rig-imports-v1/tasks.md`
  - Title: Confirmar limites de escopo
  - Description: Reafirmar que a feature e documental/auditoria e nao pode alterar Player, cenas, scripts, sprites, rig oficial ou `.gitignore`.
  - Files/Folders: `specs/014-review-official-rig-imports-v1/tasks.md`
  - Completion Criteria: Execucao segue sem mover, apagar, stagear ou versionar `.import`/`.uid`.
  - Dependencies: T001, T002

## Phase 2: Auditoria somente leitura dos `.import` oficiais do rig

- [X] T012 [US1] Executar auditoria Git somente leitura e registrar em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Auditar estado Git
  - Description: Rodar apenas `git status --short --untracked-files=all`, `git diff --name-only`, `git diff --stat`, `git diff --name-status -- "*.import"` e `git diff --name-status -- "*.uid"`.
  - Files/Folders: `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: Estado inicial foi registrado sem `git add`, `git clean`, restauracao, remocao ou alteracao de arquivos.
  - Dependencies: T011

- [X] T013 [US1] Listar `.import` e `.uid` untracked em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Listar imports e uids
  - Description: Coletar lista somente leitura dos `.import` e `.uid` nao rastreados para separar escopo oficial, `.uid` e itens fora de escopo.
  - Files/Folders: `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: Lista bruta foi registrada ou resumida sem mover, apagar ou stagear arquivos.
  - Dependencies: T012

- [X] T014 [US1] Filtrar candidatos official rig `.import` em `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Title: Filtrar official rig imports
  - Description: Selecionar somente `.import` sob `assets/characters/antonio_rafael/rig/` relacionados ao rig validado.
  - Files/Folders: `assets/characters/antonio_rafael/rig/`, `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Completion Criteria: Lista candidata contem apenas official rig `.import`, sem `.uid`, prototipos, arquivos arquivados ou origem incerta.
  - Dependencies: T013

- [X] T015 [US1] Confirmar total esperado de 32 imports em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Confirmar contagem 32
  - Description: Comparar o total filtrado com a expectativa de 32 official_asset_imports da politica 012.
  - Files/Folders: `docs/technical/official-rig-imports-review-v1.md`, `docs/technical/untracked-cleanup-inventory-v1.md`
  - Completion Criteria: Total de 32 foi confirmado ou divergencia foi registrada para gate humano antes de qualquer decisao.
  - Dependencies: T014

- [X] T016 [US1] Confirmar que os 32 imports sao untracked em `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Title: Confirmar untracked
  - Description: Verificar que os candidatos nao estao versionados e nao aparecem como delecoes rastreadas.
  - Files/Folders: `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Completion Criteria: Cada item tem observacao indicando estado untracked ou divergencia pendente.
  - Dependencies: T015

- [X] T017 [US1] Excluir `.uid` da revisao em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Excluir uid
  - Description: Registrar que `.uid` oficiais continuam fora do escopo desta feature e exigem feature separada.
  - Files/Folders: `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: Nenhum `.uid` foi classificado como official rig import nesta revisao.
  - Dependencies: T013

- [X] T018 [US1] Excluir prototipos e arquivo historico em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Excluir prototipos
  - Description: Garantir que arquivos em `docs/archive/`, walk prototypes, walk candidates e previews antigos nao entrem na revisao de official rig imports.
  - Files/Folders: `docs/archive/walk-prototypes-v1/`, `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: Grupos de prototipos arquivados permanecem fora do escopo.
  - Dependencies: T014

- [X] T019 [US1] Confirmar que feature 013 nao removeu imports oficiais em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Conferir impacto feature 013
  - Description: Verificar que a limpeza de stale prototype imports nao afetou official_asset_imports do rig.
  - Files/Folders: `docs/technical/stale-prototype-imports-removal-v1.md`, `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: Documento registra que a feature 013 ficou limitada aos prototype_imports obsoletos.
  - Dependencies: T006, T015

## Phase 3: Verificacao de origem e vinculo com o rig

- [X] T020 [US1] Inferir asset fonte de cada `.import` em `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Title: Inferir fontes PNG
  - Description: Para cada `.import`, derivar o caminho do asset fonte removendo o sufixo `.import`.
  - Files/Folders: `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Completion Criteria: Cada item tem `source_asset_path` registrado ou marcado como `source_missing`.
  - Dependencies: T016

- [X] T021 [US1] Verificar existencia dos assets fonte em `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Title: Verificar fontes existem
  - Description: Confirmar somente leitura se cada PNG fonte correspondente existe no workspace.
  - Files/Folders: `assets/characters/antonio_rafael/rig/`, `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Completion Criteria: Cada item registra `source_exists` ou divergencia para revisao humana.
  - Dependencies: T020

- [X] T022 [US1] Mapear relacao com partes do rig em `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Title: Mapear relacao com rig
  - Description: Relacionar cada import com partes, backups, previews ou manifestos do rig validados parcialmente.
  - Files/Folders: `docs/technical/rig-parts-separation.md`, `docs/technical/rig-refinement-v1.md`, `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Completion Criteria: Cada item tem `rig_relation` preenchido ou marcado como `unknown_rig_relation`.
  - Dependencies: T021

- [X] T023 [US1] Confirmar ausencia de sprites idle oficiais em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Proteger idles oficiais
  - Description: Validar que nenhum item revisado pertence a `assets/characters/antonio_rafael/sprites/idle/`.
  - Files/Folders: `assets/characters/antonio_rafael/sprites/idle/`, `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: Documento confirma que sprites idle aprovados nao foram alterados nem incluidos.
  - Dependencies: T014

- [X] T024 [US1] Confirmar ausencia de cenas e scripts em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Proteger cenas e scripts
  - Description: Validar que a revisao nao inclui `Player.tscn`, `AntonioRafaelRigLab.tscn`, `scripts/player/` ou `scripts/rig/`.
  - Files/Folders: `scenes/player/Player.tscn`, `scenes/rig/AntonioRafaelRigLab.tscn`, `scripts/player/`, `scripts/rig/`, `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: Documento confirma que cenas e scripts oficiais nao foram alterados nem incluidos.
  - Dependencies: T012

- [X] T025 [US1] Registrar utilidade dos imports para reprodutibilidade Godot em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Avaliar reprodutibilidade
  - Description: Documentar se os `.import` podem ajudar abertura consistente do rig no Godot ou se podem ser regenerados localmente.
  - Files/Folders: `docs/technical/godot-import-uid-policy-v1.md`, `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: Cada grupo tem observacao sobre valor tecnico e custo de versionamento.
  - Dependencies: T022

## Phase 4: Classificacao por tipo de asset

- [X] T026 [P] [US1] Classificar rig part imports em `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Title: Classificar partes rig
  - Description: Agrupar `.import` ligados a partes visuais do rig em `rig_part_imports`.
  - Files/Folders: `assets/characters/antonio_rafael/rig/parts/`, `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Completion Criteria: Itens de partes do rig foram marcados como `rig_part_imports`.
  - Dependencies: T022

- [X] T027 [P] [US1] Classificar imports de backup/refinamento em `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Title: Classificar backups rig
  - Description: Agrupar `.import` ligados a backups/refinamentos do rig em `rig_refinement_backup_imports` quando aplicavel.
  - Files/Folders: `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/`, `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Completion Criteria: Itens de backup foram marcados ou ausencia foi registrada.
  - Dependencies: T022

- [X] T028 [P] [US1] Classificar preview imports em `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Title: Classificar previews rig
  - Description: Agrupar `.import` ligados a previews do rig em `rig_preview_imports`.
  - Files/Folders: `assets/characters/antonio_rafael/rig/previews/`, `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Completion Criteria: Itens de preview foram marcados como `rig_preview_imports` ou ausencia foi registrada.
  - Dependencies: T022

- [X] T029 [P] [US1] Classificar outputs de montagem/articulacao em `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Title: Classificar outputs rig
  - Description: Agrupar imports ligados a outputs oficiais de assembly/refinement/articulation em grupo especifico.
  - Files/Folders: `assets/characters/antonio_rafael/rig/`, `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Completion Criteria: Outputs de laboratorio foram classificados sem confundir com Player runtime.
  - Dependencies: T022

- [X] T030 [US1] Marcar relacoes desconhecidas em `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Title: Marcar desconhecidos
  - Description: Qualquer item que nao tenha vinculo claro com rig validado deve ser marcado como `unknown_rig_relation`.
  - Files/Folders: `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Completion Criteria: Nenhum item permanece sem grupo ou sem observacao.
  - Dependencies: T026, T027, T028, T029

- [X] T031 [US1] Resumir contagens por grupo em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Resumir grupos
  - Description: Registrar quantidade e exemplos de caminho para cada grupo encontrado.
  - Files/Folders: `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: Documento contem tabela de grupos, contagens e exemplos.
  - Dependencies: T030

## Phase 5: Avaliacao de risco e recomendacao

- [X] T032 [US2] Atribuir risco por grupo em `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Title: Atribuir risco
  - Description: Usar riscos permitidos `low`, `medium`, `high`, `critical` conforme impacto potencial no rig validado e reprodutibilidade.
  - Files/Folders: `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Completion Criteria: Cada item e grupo possui `risk_level` definido.
  - Dependencies: T031

- [X] T033 [US2] Atribuir status por item em `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Title: Atribuir status
  - Description: Usar status permitidos `official_rig_import_candidate`, `keep_local`, `version_later`, `ignore_later`, `needs_human_review`, `separate_feature`, `excluded_from_review`.
  - Files/Folders: `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Completion Criteria: Cada item possui status claro e nao executado.
  - Dependencies: T032

- [X] T034 [US2] Atribuir recomendacao por item em `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Title: Atribuir recomendacao
  - Description: Recomendar `keep_local`, `version_later`, `ignore_later`, `needs_human_review` ou `separate_feature` sem aplicar a decisao.
  - Files/Folders: `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Completion Criteria: Cada item possui recomendacao pendente de aprovacao humana.
  - Dependencies: T033

- [X] T035 [US2] Registrar politica sugerida sem alterar `.gitignore` em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Registrar politica sugerida
  - Description: Documentar se `.import` oficiais deveriam ser mantidos locais, versionados depois, ignorados depois ou tratados em feature separada.
  - Files/Folders: `.gitignore`, `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: Documento contem recomendacao, e `.gitignore` permanece inalterado.
  - Dependencies: T034

- [X] T036 [US2] Resumir recomendacoes por grupo em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Resumir recomendacoes
  - Description: Criar resumo com totais por recomendacao e lista de decisoes pendentes.
  - Files/Folders: `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: Documento permite gate humano sem abrir todos os itens individualmente.
  - Dependencies: T034

## Phase 6: Preparacao do manifesto de revisao

- [X] T037 [US3] Criar manifesto de revisao em `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Title: Criar manifesto official imports
  - Description: Registrar todos os 32 official rig imports com campos do data model.
  - Files/Folders: `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Completion Criteria: Manifesto existe e contem tabela com caminho do import, fonte, grupo, risco, status, recomendacao e decisao humana.
  - Dependencies: T036

- [X] T038 [US3] Registrar itens excluidos do escopo em `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Title: Registrar excluidos
  - Description: Registrar `.uid`, `.import` de prototipos, old specs, manifestos antigos e itens desconhecidos que nao entram nos 32 official rig imports.
  - Files/Folders: `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Completion Criteria: Excluidos possuem motivo e permanecem sem acao executada.
  - Dependencies: T037

- [X] T039 [US3] Registrar divergencias e pendencias em `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Title: Registrar pendencias
  - Description: Registrar qualquer divergencia de contagem, fonte ausente ou relacao desconhecida como pendencia para revisao humana.
  - Files/Folders: `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Completion Criteria: Manifesto nao esconde divergencias nem inventa correcao.
  - Dependencies: T038

## Phase 7: Documentacao tecnica

- [X] T040 [US3] Criar documento tecnico em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Criar doc tecnica
  - Description: Documentar motivo da revisao, contexto da feature 012, escopo dos 32 imports e status nao executado das recomendacoes.
  - Files/Folders: `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: Documento existe e explica que nenhum `.import` foi removido, versionado, ignorado ou integrado.
  - Dependencies: T036

- [X] T041 [US3] Documentar vinculo com rig validado em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Documentar vinculo rig
  - Description: Explicar relacao dos imports com Rig Parts Separation, Rig Assembly, Rig Refinement e Rig Articulation Test.
  - Files/Folders: `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: Documento diferencia rig tecnico validado de Player runtime e assets finais.
  - Dependencies: T040

- [X] T042 [US3] Documentar recomendacao final em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Documentar recomendacao final
  - Description: Registrar recomendacao objetiva para approve/partial/future feature, sem executar mudanca.
  - Files/Folders: `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: Documento termina com decisao pendente de gate humano.
  - Dependencies: T041

## Phase 8: Atualizacao de documentos correlatos

- [X] T043 [US3] Atualizar politica Godot em `docs/technical/godot-import-uid-policy-v1.md`
  - Title: Atualizar politica Godot
  - Description: Registrar que official rig imports foram revisados pela feature 014, mantendo decisao pendente ou recomendacao aprovada.
  - Files/Folders: `docs/technical/godot-import-uid-policy-v1.md`
  - Completion Criteria: Politica reflete a revisao sem alterar `.gitignore` ou versionar `.import`.
  - Dependencies: T042

- [X] T044 [US3] Atualizar auditoria cleanup em `docs/technical/untracked-cleanup-audit-v1.md`
  - Title: Atualizar auditoria cleanup
  - Description: Registrar status dos official_asset_imports apos a revisao documental.
  - Files/Folders: `docs/technical/untracked-cleanup-audit-v1.md`
  - Completion Criteria: Auditoria aponta feature 014 como tratamento documental dos official rig imports.
  - Dependencies: T042

- [X] T045 [US3] Atualizar inventario cleanup em `docs/technical/untracked-cleanup-inventory-v1.md`
  - Title: Atualizar inventario cleanup
  - Description: Atualizar classificacao dos official_asset_imports sem remover grupos pendentes fora do escopo.
  - Files/Folders: `docs/technical/untracked-cleanup-inventory-v1.md`
  - Completion Criteria: Inventario mostra que `.uid`, old specs e demais residuos continuam pendentes quando aplicavel.
  - Dependencies: T042

- [X] T046 [US3] Atualizar higiene do repositorio em `docs/project/repository-hygiene.md`
  - Title: Atualizar higiene repo
  - Description: Registrar regra de nao stagear `.import`/`.uid` em massa e exigir decisao por grupo oficial.
  - Files/Folders: `docs/project/repository-hygiene.md`
  - Completion Criteria: Documento reforca comandos proibidos e separacao de escopos.
  - Dependencies: T042

## Phase 9: Validacao de escopo seguro

- [X] T047 Validar que todos os 32 imports foram avaliados em `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Title: Validar completude
  - Description: Conferir que cada official rig `.import` possui grupo, risco, status, recomendacao e decisao humana pendente.
  - Files/Folders: `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Completion Criteria: Nao ha item sem classificacao ou divergencia sem registro.
  - Dependencies: T037, T039

- [X] T048 Validar que nenhum `.import` foi removido ou stageado em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Validar imports intactos
  - Description: Confirmar que a execucao nao removeu, moveu, versionou, stageou ou alterou `.import`.
  - Files/Folders: `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: Documento registra confirmacao e `git diff --name-status -- "*.import"` nao mostra delecoes rastreadas.
  - Dependencies: T040

- [X] T049 Validar que nenhum `.uid` foi alterado em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Validar uids intactos
  - Description: Confirmar que `.uid` permaneceu fora do escopo e sem alteracao.
  - Files/Folders: `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: Documento registra confirmacao e `git diff --name-status -- "*.uid"` nao mostra alteracoes.
  - Dependencies: T017

- [X] T050 Validar que arquivos sensiveis nao foram alterados em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Validar sensiveis intactos
  - Description: Confirmar que Player, cena de rig, scripts, sprites idle, rig oficial e `.gitignore` nao foram alterados.
  - Files/Folders: `scenes/player/Player.tscn`, `scenes/rig/AntonioRafaelRigLab.tscn`, `scripts/player/`, `scripts/rig/`, `assets/characters/antonio_rafael/sprites/idle/`, `assets/characters/antonio_rafael/rig/`, `.gitignore`, `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: `git diff --name-only` nao inclui arquivos proibidos alem de estados locais ja conhecidos e documentados.
  - Dependencies: T024

- [X] T051 Validar que nao houve gameplay, walk cycle ou animacao oficial em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Validar sem gameplay
  - Description: Confirmar que a feature nao criou gameplay, walk cycle final, animacao oficial, integracao ao Player ou export final.
  - Files/Folders: `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: Documento registra confirmacao negativa para cada item proibido.
  - Dependencies: T040

- [X] T052 Validar que nao houve commit nem push em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Validar sem commit push
  - Description: Confirmar que a implementacao parou antes de commit/push e nao usou comandos proibidos.
  - Files/Folders: `docs/technical/official-rig-imports-review-v1.md`
  - Completion Criteria: Documento registra ausencia de commit/push e ausencia de `git add .`, `git add -A`, `git commit -am`, `git clean`.
  - Dependencies: T048, T049, T050, T051

## Phase 10: Gate humano final

- [X] T053 Gate humano final em `docs/technical/official-rig-imports-review-v1.md`
  - Title: Gate humano final
  - Description: Apresentar resultado para decisao humana antes de qualquer versionamento, remocao, ignore rule ou feature seguinte.
  - Files/Folders: `docs/technical/official-rig-imports-review-v1.md`, `docs/technical/official-rig-imports-review-manifest-v1.md`
  - Completion Criteria: Relatorio final apresenta quantidade revisada, grupos, riscos, recomendacoes, arquivos que exigem revisao, confirmacoes de escopo seguro, ausencia de commit e ausencia de push.
  - Dependencies: T047, T048, T049, T050, T051, T052

## Dependencies Summary

- Phase 1 must complete before audit tasks.
- Phase 2 must confirm the exact official rig `.import` set before source verification.
- Phase 3 must map source and rig relationship before classification.
- Phase 4 must classify every item before risk/recommendation.
- Phase 5 must complete before manifest and documentation are finalized.
- Phase 6 and Phase 7 can proceed once recommendations are defined.
- Phase 8 depends on the main recommendation document.
- Phase 9 validates the complete implementation.
- Phase 10 is the final human gate and must be last.

## Parallel Opportunities

- T003, T004, T005, T007, T008, T009, and T010 can run in parallel after T001/T002.
- T026, T027, T028, and T029 can run in parallel after T022.
- Documentation updates T043, T044, T045, and T046 can run in parallel after T042.

## Implementation Strategy

1. Read all feature artifacts and current policy documents.
2. Audit Git state with read-only commands only.
3. Identify exactly the official rig `.import` candidates.
4. Confirm count, source assets, and rig relationship.
5. Classify by group, risk, status, and recommendation.
6. Create manifest and documentation.
7. Update correlated policy/audit documents.
8. Validate forbidden files and forbidden commands remained untouched.
9. Stop at human gate with no commit and no push.
