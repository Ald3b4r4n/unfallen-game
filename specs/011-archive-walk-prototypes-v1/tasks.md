# Tasks: Archive Walk Prototypes V1

**Input**: Design documents from `specs/011-archive-walk-prototypes-v1/`
**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, `quickstart.md`
**Scope**: Arquivar historicamente prototipos antigos de walk e previews relacionados, sem oficializar, sem integrar ao Player e sem alterar assets/cenas/scripts oficiais.

## Phase 1: Preparacao e leitura da feature

- [x] T001 Ler constituicao do projeto
  - Descricao: Ler `.specify/memory/constitution.md` e registrar que a feature exige Spec First, gate humano e preservacao dos assets oficiais do SGT Antonio Rafael.
  - Arquivos/pastas: `.specify/memory/constitution.md`
  - Criterio de conclusao: Principios aplicaveis identificados e usados como restricoes da implementacao.
  - Dependencias: Nenhuma.

- [x] T002 Ler especificacao da feature 011
  - Descricao: Ler `specs/011-archive-walk-prototypes-v1/spec.md` e confirmar que os prototipos nao sao walk cycle oficial, animacao oficial, asset final, sprite aprovado ou conteudo de gameplay.
  - Arquivos/pastas: `specs/011-archive-walk-prototypes-v1/spec.md`
  - Criterio de conclusao: Escopo funcional e proibicoes da spec 011 estao compreendidos.
  - Dependencias: T001.

- [x] T003 [P] Ler plano tecnico da feature 011
  - Descricao: Ler `specs/011-archive-walk-prototypes-v1/plan.md` e confirmar a decisao de destino historico em `docs/archive/walk-prototypes-v1/`.
  - Arquivos/pastas: `specs/011-archive-walk-prototypes-v1/plan.md`
  - Criterio de conclusao: Destino planejado, grupos-alvo e exclusoes estao identificados.
  - Dependencias: T001.

- [x] T004 [P] Ler pesquisa, modelo de dados e quickstart
  - Descricao: Ler `research.md`, `data-model.md` e `quickstart.md` para extrair decisoes, entidades, estados e validacoes.
  - Arquivos/pastas: `specs/011-archive-walk-prototypes-v1/research.md`, `specs/011-archive-walk-prototypes-v1/data-model.md`, `specs/011-archive-walk-prototypes-v1/quickstart.md`
  - Criterio de conclusao: Categorias, status permitidos e fluxo de validacao estao mapeados.
  - Dependencias: T001.

- [x] T005 Confirmar proibicoes de escopo
  - Descricao: Confirmar que a implementacao futura nao pode alterar `Player.tscn`, `AntonioRafaelRigLab.tscn`, scripts, sprites idle aprovados, rig oficial, `.gitignore`, nem executar commit ou push.
  - Arquivos/pastas: `scenes/player/Player.tscn`, `scenes/rig/AntonioRafaelRigLab.tscn`, `scripts/player/`, `scripts/rig/`, `assets/characters/antonio_rafael/sprites/idle/`, `assets/characters/antonio_rafael/rig/`, `.gitignore`
  - Criterio de conclusao: Lista de areas proibidas registrada para validacao final.
  - Dependencias: T002, T003, T004.

## Phase 2: Auditoria dos arquivos-alvo

- [x] T006 Auditar estado Git somente leitura
  - Descricao: Executar somente comandos de leitura para capturar branch, status, diff rastreado e lista de untracked antes do arquivamento.
  - Arquivos/pastas: repositorio Git
  - Criterio de conclusao: Saida de `git status --short --untracked-files=all`, `git diff --name-only`, `git diff --stat` e branch atual registrada na documentacao futura.
  - Dependencias: T005.

- [x] T007 Identificar os 66 walk candidates
  - Descricao: Identificar arquivos PNG untracked classificados como `walk_candidates`, excluindo qualquer `.import`.
  - Arquivos/pastas: `assets/characters/antonio_rafael/source/`, `assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/`
  - Criterio de conclusao: 66 arquivos encontrados ou divergencia documentada e bloqueada para gate humano.
  - Dependencias: T006.

- [x] T008 Identificar os 8 walk prototypes
  - Descricao: Identificar arquivos PNG untracked classificados como `walk_prototypes`, excluindo qualquer `.import`.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk_prototype_v5/`
  - Criterio de conclusao: 8 arquivos encontrados ou divergencia documentada e bloqueada para gate humano.
  - Dependencias: T006.

- [x] T009 Identificar os 3 preview assets
  - Descricao: Identificar arquivos PNG untracked classificados como `preview_assets`, excluindo qualquer `.import`.
  - Arquivos/pastas: `assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/`, `assets/characters/antonio_rafael/exports/walk_prototype_v5/`
  - Criterio de conclusao: 3 arquivos encontrados ou divergencia documentada e bloqueada para gate humano.
  - Dependencias: T006.

- [x] T010 Validar exclusao de .import e .uid
  - Descricao: Separar arquivos `.import` e `.uid` relacionados ou adjacentes aos prototipos como fora do arquivamento desta feature.
  - Arquivos/pastas: `assets/characters/antonio_rafael/`, `scripts/rig/`
  - Criterio de conclusao: Nenhum `.import` ou `.uid` foi incluido na lista de arquivos a mover.
  - Dependencias: T007, T008, T009.

- [x] T011 Validar que os arquivos-alvo sao untracked
  - Descricao: Confirmar que todos os 77 arquivos PNG alvo estao fora do indice Git antes da movimentacao futura.
  - Arquivos/pastas: lista de `walk_candidates`, `walk_prototypes`, `preview_assets`
  - Criterio de conclusao: Todos os arquivos-alvo aparecem como untracked ou divergencias sao documentadas.
  - Dependencias: T007, T008, T009.

- [x] T012 Validar que arquivos-alvo nao sao assets oficiais
  - Descricao: Conferir que nenhum arquivo-alvo pertence a `sprites/idle/`, rig oficial, Player, cena oficial ou script.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/idle/`, `assets/characters/antonio_rafael/rig/`, `scenes/`, `scripts/`
  - Criterio de conclusao: Todos os arquivos-alvo permanecem classificados como historicos/prototipos.
  - Dependencias: T011.

- [x] T013 Registrar exemplos de caminhos por grupo
  - Descricao: Coletar exemplos representativos de caminhos para `walk_candidates`, `walk_prototypes` e `preview_assets`.
  - Arquivos/pastas: lista auditada de arquivos-alvo
  - Criterio de conclusao: Cada grupo possui quantidade e exemplos prontos para documentacao.
  - Dependencias: T007, T008, T009.

## Phase 3: Definicao do arquivo historico

- [x] T014 Preparar estrutura planejada do arquivo historico
  - Descricao: Definir a estrutura futura `docs/archive/walk-prototypes-v1/`, `files/`, `manifest.md` e `README.md` sem criar ainda na etapa de tasks.
  - Arquivos/pastas: `docs/archive/walk-prototypes-v1/`
  - Criterio de conclusao: Estrutura futura descrita para implementacao.
  - Dependencias: T013.

- [x] T015 Justificar uso de docs/archive
  - Descricao: Registrar que `docs/archive/walk-prototypes-v1/` foi escolhido para evitar importacao automatica pelo Godot, `.import` desnecessario e confusao com assets oficiais.
  - Arquivos/pastas: `docs/technical/walk-prototypes-archive-v1.md`
  - Criterio de conclusao: Justificativa pronta para documentacao tecnica futura.
  - Dependencias: T014.

- [x] T016 Definir preservacao da arvore relativa
  - Descricao: Definir que cada arquivo arquivado deve manter seu caminho original sob `docs/archive/walk-prototypes-v1/files/`.
  - Arquivos/pastas: `docs/archive/walk-prototypes-v1/files/`
  - Criterio de conclusao: Regra de destino relativo documentada com exemplo origem/destino.
  - Dependencias: T014.

- [x] T017 Validar exclusao de destino em res://assets
  - Descricao: Confirmar que `res://assets/characters/antonio_rafael/archive/walk_prototypes_v1/` nao sera usado nesta feature sem nova aprovacao humana.
  - Arquivos/pastas: `assets/characters/antonio_rafael/archive/`
  - Criterio de conclusao: Alternativa em `res://assets` registrada como rejeitada para esta versao.
  - Dependencias: T015.

## Phase 4: Planejamento do manifesto

- [x] T018 Definir campos do manifesto
  - Descricao: Definir que `manifest.md` deve conter caminho original, caminho arquivado, grupo, tipo, origem provavel, status, motivo, risco, observacao e decisao humana.
  - Arquivos/pastas: `docs/archive/walk-prototypes-v1/manifest.md`
  - Criterio de conclusao: Esquema do manifesto documentado.
  - Dependencias: T016.

- [x] T019 Definir status permitidos
  - Descricao: Registrar status permitidos: `archived_candidate`, `archived_prototype`, `archived_preview`, `kept_local`, `needs_review`, `excluded_from_archive`.
  - Arquivos/pastas: `docs/archive/walk-prototypes-v1/manifest.md`
  - Criterio de conclusao: Lista de status pronta para uso no manifesto.
  - Dependencias: T018.

- [x] T020 Mapear entradas de walk candidates no manifesto
  - Descricao: Planejar entradas de manifesto para os 66 `walk_candidates` com status `archived_candidate`, se aprovados na implementacao.
  - Arquivos/pastas: `docs/archive/walk-prototypes-v1/manifest.md`
  - Criterio de conclusao: Regra de preenchimento para candidatos definida.
  - Dependencias: T018, T019.

- [x] T021 Mapear entradas de walk prototypes no manifesto
  - Descricao: Planejar entradas de manifesto para os 8 `walk_prototypes` com status `archived_prototype`, se aprovados na implementacao.
  - Arquivos/pastas: `docs/archive/walk-prototypes-v1/manifest.md`
  - Criterio de conclusao: Regra de preenchimento para prototipos definida.
  - Dependencias: T018, T019.

- [x] T022 Mapear entradas de preview assets no manifesto
  - Descricao: Planejar entradas de manifesto para os 3 `preview_assets` com status `archived_preview`, se aprovados na implementacao.
  - Arquivos/pastas: `docs/archive/walk-prototypes-v1/manifest.md`
  - Criterio de conclusao: Regra de preenchimento para previews definida.
  - Dependencias: T018, T019.

- [x] T023 Registrar exclusoes no manifesto
  - Descricao: Planejar registro de `.import`, `.uid`, arquivos de origem incerta e areas sensiveis como `excluded_from_archive` ou `needs_review`, quando aparecerem no contexto da auditoria.
  - Arquivos/pastas: `docs/archive/walk-prototypes-v1/manifest.md`
  - Criterio de conclusao: Exclusoes planejadas sem incluir arquivos proibidos na movimentacao.
  - Dependencias: T010, T018, T019.

## Phase 5: Planejamento da movimentacao controlada

- [x] T024 Planejar criacao da pasta historica
  - Descricao: Planejar criacao futura de `docs/archive/walk-prototypes-v1/` e `docs/archive/walk-prototypes-v1/files/` somente na etapa de implementacao.
  - Arquivos/pastas: `docs/archive/walk-prototypes-v1/`, `docs/archive/walk-prototypes-v1/files/`
  - Criterio de conclusao: Acao futura definida, sem executar nesta etapa.
  - Dependencias: T014, T016.

- [x] T025 Planejar movimentacao dos walk candidates
  - Descricao: Planejar mover somente os 66 PNGs aprovados de `walk_candidates` para `docs/archive/walk-prototypes-v1/files/`, preservando arvore relativa.
  - Arquivos/pastas: `assets/characters/antonio_rafael/source/`, `assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/`, `docs/archive/walk-prototypes-v1/files/`
  - Criterio de conclusao: Lista futura de movimentacao dos candidatos definida e dependente de aprovacao.
  - Dependencias: T007, T016, T020, T024.

- [x] T026 Planejar movimentacao dos walk prototypes
  - Descricao: Planejar mover somente os 8 PNGs aprovados de `walk_prototypes` para `docs/archive/walk-prototypes-v1/files/`, preservando arvore relativa.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/walk_prototype_v5/`, `docs/archive/walk-prototypes-v1/files/`
  - Criterio de conclusao: Lista futura de movimentacao dos prototipos definida e dependente de aprovacao.
  - Dependencias: T008, T016, T021, T024.

- [x] T027 Planejar movimentacao dos preview assets
  - Descricao: Planejar mover somente os 3 PNGs aprovados de `preview_assets` para `docs/archive/walk-prototypes-v1/files/`, preservando arvore relativa.
  - Arquivos/pastas: `assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/`, `assets/characters/antonio_rafael/exports/walk_prototype_v5/`, `docs/archive/walk-prototypes-v1/files/`
  - Criterio de conclusao: Lista futura de movimentacao dos previews definida e dependente de aprovacao.
  - Dependencias: T009, T016, T022, T024.

- [x] T028 Definir arquivos mantidos fora da movimentacao
  - Descricao: Planejar que `.import`, `.uid`, origem incerta, assets oficiais, sprites idle, rig oficial, cenas e scripts nao serao movidos.
  - Arquivos/pastas: `assets/characters/antonio_rafael/`, `scripts/`, `scenes/`
  - Criterio de conclusao: Lista de exclusoes pronta para validacao antes da implementacao.
  - Dependencias: T010, T012, T023.

- [x] T029 Definir regra contra exclusao definitiva
  - Descricao: Registrar que a implementacao futura pode mover arquivos aprovados, mas nao pode apagar definitivamente nenhum arquivo.
  - Arquivos/pastas: repositorio Git
  - Criterio de conclusao: Regra de nao exclusao definitiva documentada nas tarefas e validacoes.
  - Dependencias: T024, T028.

## Phase 6: Documentacao tecnica

- [x] T030 Criar documentacao tecnica do arquivo historico
  - Descricao: Criar `docs/technical/walk-prototypes-archive-v1.md` na implementacao futura com motivo do arquivamento, relacao com Walk V1 reprovada, contagens, destino e restricoes.
  - Arquivos/pastas: `docs/technical/walk-prototypes-archive-v1.md`
  - Criterio de conclusao: Documento tecnico registra que os arquivos sao historicos, nao oficiais e nao devem entrar no Player.
  - Dependencias: T013, T015, T025, T026, T027.

- [x] T031 Criar README do arquivo historico
  - Descricao: Criar `docs/archive/walk-prototypes-v1/README.md` na implementacao futura explicando o conteudo historico e as proibicoes de uso como asset final.
  - Arquivos/pastas: `docs/archive/walk-prototypes-v1/README.md`
  - Criterio de conclusao: README diferencia prototipo rejeitado de asset oficial.
  - Dependencias: T024, T030.

- [x] T032 Criar manifesto do arquivo historico
  - Descricao: Criar `docs/archive/walk-prototypes-v1/manifest.md` na implementacao futura com entradas para todos os arquivos arquivados e exclusoes relevantes.
  - Arquivos/pastas: `docs/archive/walk-prototypes-v1/manifest.md`
  - Criterio de conclusao: Manifesto cobre arquivos movidos, origem, destino, risco, status e decisao humana.
  - Dependencias: T020, T021, T022, T023, T025, T026, T027.

- [x] T033 Registrar confirmacoes de nao oficializacao
  - Descricao: Garantir que a documentacao afirma que nao ha walk cycle oficial, animacao oficial, asset final, sprite aprovado, gameplay ou integracao ao Player.
  - Arquivos/pastas: `docs/technical/walk-prototypes-archive-v1.md`, `docs/archive/walk-prototypes-v1/README.md`, `docs/archive/walk-prototypes-v1/manifest.md`
  - Criterio de conclusao: Documentos contem confirmacoes explicitas de uso historico/prototipo.
  - Dependencias: T030, T031, T032.

## Phase 7: Atualizacao da auditoria/inventario da feature 010

- [x] T034 Atualizar auditoria de untracked
  - Descricao: Atualizar `docs/technical/untracked-cleanup-audit-v1.md` para registrar que `walk_candidates`, `walk_prototypes` e `preview_assets` foram tratados pela feature 011.
  - Arquivos/pastas: `docs/technical/untracked-cleanup-audit-v1.md`
  - Criterio de conclusao: Auditoria informa status da feature 011 e grupos ainda pendentes.
  - Dependencias: T030, T032.

- [x] T035 Atualizar inventario de untracked
  - Descricao: Atualizar `docs/technical/untracked-cleanup-inventory-v1.md` para registrar destino historico, categorias e itens ainda fora do escopo.
  - Arquivos/pastas: `docs/technical/untracked-cleanup-inventory-v1.md`
  - Criterio de conclusao: Inventario mostra que `.import`, `.uid` e demais grupos continuam pendentes ou fora do arquivamento.
  - Dependencias: T030, T032.

- [x] T036 Registrar grupos nao tratados
  - Descricao: Registrar que specs antigas, `.import`, `.uid`, manifests antigos e origem incerta continuam pendentes para features futuras.
  - Arquivos/pastas: `docs/technical/untracked-cleanup-audit-v1.md`, `docs/technical/untracked-cleanup-inventory-v1.md`
  - Criterio de conclusao: Nenhum grupo fora dos 66/8/3 e tratado como resolvido por engano.
  - Dependencias: T034, T035.

## Phase 8: Validacao de escopo seguro

- [x] T037 Validar que Player nao foi alterado
  - Descricao: Confirmar que `scenes/player/Player.tscn` nao teve diff e nao referencia os prototipos arquivados.
  - Arquivos/pastas: `scenes/player/Player.tscn`
  - Criterio de conclusao: Nenhuma alteracao no Player e nenhuma integracao de prototipos.
  - Dependencias: T025, T026, T027.

- [x] T038 Validar que cenas e scripts oficiais nao foram alterados
  - Descricao: Confirmar que `AntonioRafaelRigLab.tscn`, `scripts/player/` e `scripts/rig/` nao tiveram alteracao.
  - Arquivos/pastas: `scenes/rig/AntonioRafaelRigLab.tscn`, `scripts/player/`, `scripts/rig/`
  - Criterio de conclusao: Nenhum diff em cenas ou scripts oficiais.
  - Dependencias: T025, T026, T027.

- [x] T039 Validar que sprites idle e rig oficial nao foram alterados
  - Descricao: Confirmar que sprites idle aprovados e assets oficiais do rig nao foram modificados ou movidos.
  - Arquivos/pastas: `assets/characters/antonio_rafael/sprites/idle/`, `assets/characters/antonio_rafael/rig/`
  - Criterio de conclusao: Nenhum diff ou movimentacao em idle aprovado ou rig oficial.
  - Dependencias: T025, T026, T027.

- [x] T040 Validar que .gitignore nao foi alterado
  - Descricao: Confirmar que `.gitignore` permanece sem diff nesta feature.
  - Arquivos/pastas: `.gitignore`
  - Criterio de conclusao: `.gitignore` nao aparece no diff.
  - Dependencias: T034, T035.

- [x] T041 Validar que .import e .uid nao foram versionados em massa
  - Descricao: Confirmar que nenhum `.import` ou `.uid` foi movido para o arquivo historico ou preparado para versionamento.
  - Arquivos/pastas: `assets/`, `scripts/`, `docs/archive/walk-prototypes-v1/`
  - Criterio de conclusao: Zero `.import` e zero `.uid` no escopo arquivado.
  - Dependencias: T028, T032.

- [x] T042 Validar ausencia de oficializacao indevida
  - Descricao: Revisar documentos e manifesto para confirmar que nenhum prototipo foi chamado de oficial, aprovado, final, gameplay ou Player runtime.
  - Arquivos/pastas: `docs/technical/walk-prototypes-archive-v1.md`, `docs/archive/walk-prototypes-v1/README.md`, `docs/archive/walk-prototypes-v1/manifest.md`
  - Criterio de conclusao: Linguagem documental trata tudo como historico/prototipo.
  - Dependencias: T033.

- [x] T043 Validar ausencia de comandos proibidos
  - Descricao: Confirmar no relato final que nao foram usados `git add .`, `git add -A`, `git commit -am`, `git clean`, commit ou push.
  - Arquivos/pastas: repositorio Git
  - Criterio de conclusao: Relatorio final confirma ausencia de comandos proibidos.
  - Dependencias: T034, T035, T036.

- [x] T044 Validar que nada foi apagado definitivamente
  - Descricao: Confirmar que os arquivos aprovados foram apenas movidos para arquivo historico e que nenhum arquivo foi removido definitivamente.
  - Arquivos/pastas: `docs/archive/walk-prototypes-v1/files/`, caminhos originais dos 77 arquivos-alvo
  - Criterio de conclusao: Manifesto e status Git demonstram movimentacao rastreavel, nao exclusao definitiva.
  - Dependencias: T025, T026, T027, T032.

## Phase 9: Gate humano final

- [x] T045 Gate humano obrigatorio
  - Descricao: Apresentar quantidade de walk candidates, walk prototypes e preview assets encontrados; destino historico; arquivos planejados/arquivados; arquivos mantidos fora do Git; arquivos que exigem revisao; documentos criados/atualizados; confirmacoes de seguranca; recomendacao para implementacao ou commit.
  - Arquivos/pastas: `docs/archive/walk-prototypes-v1/`, `docs/technical/walk-prototypes-archive-v1.md`, `docs/technical/untracked-cleanup-audit-v1.md`, `docs/technical/untracked-cleanup-inventory-v1.md`
  - Criterio de conclusao: Usuario recebe relatorio final confirmando que Player, sprites idle, cenas, scripts, `.import`, `.uid`, walk cycle oficial, animacao oficial, commit e push nao foram alterados/executados.
  - Dependencias: T037, T038, T039, T040, T041, T042, T043, T044.

## Dependencies & Execution Order

- Fase 1 bloqueia todas as demais.
- Fase 2 confirma o escopo 66/8/3 antes de qualquer planejamento de movimentacao.
- Fase 3 define o destino historico.
- Fase 4 define o manifesto.
- Fase 5 depende de auditoria, destino e manifesto.
- Fase 6 depende da movimentacao planejada e cria a base documental futura.
- Fase 7 depende da documentacao tecnica e atualiza a auditoria/inventario da feature 010.
- Fase 8 valida escopo seguro.
- Fase 9 e gate humano obrigatorio.

## Parallel Opportunities

- T003 e T004 podem ser feitas em paralelo apos T001.
- T007, T008 e T009 podem ser feitas em paralelo apos T006.
- T020, T021 e T022 podem ser preparadas em paralelo apos T018 e T019.
- T025, T026 e T027 podem ser planejadas em paralelo apos T024.
- T037, T038, T039 e T040 podem ser validadas em paralelo apos as movimentacoes/documentos da implementacao futura.

## Implementation Strategy

1. Completar fases 1 e 2 para confirmar que os numeros atuais ainda batem com a auditoria 010.
2. Se houver divergencia nos 66/8/3, parar para gate humano antes de mover qualquer arquivo.
3. Se as contagens baterem, seguir para destino historico, manifesto e planejamento da movimentacao.
4. Na implementacao futura, mover somente PNGs classificados e aprovados para `docs/archive/walk-prototypes-v1/files/`.
5. Manter `.import`, `.uid`, Player, cenas, scripts, sprites idle e rig oficial fora do escopo.
6. Parar no gate humano final antes de qualquer commit ou push.

