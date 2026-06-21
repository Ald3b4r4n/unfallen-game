# Tasks: README oficial do repositorio Unfallen

**Input**: Design documents from `/specs/009-readme-oficial-unfallen/`  
**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, `quickstart.md`  
**Tests**: Sem TDD formal; esta feature exige validacao documental, auditoria de conteudo e auditoria de escopo seguro.  
**Organization**: Tarefas organizadas pelas fases obrigatorias do pedido, com labels `[US1]`, `[US2]` e `[US3]` quando mapeadas para as historias da especificacao.

## Format: `[ID] [P?] [Story] Description`

- `[P]`: pode ser executada em paralelo por atuar em arquivos diferentes ou por ser validacao independente.
- `[US1]`: Apresentar o projeto real no repositorio.
- `[US2]`: Registrar o status honesto do pipeline atual.
- `[US3]`: Orientar abertura, validacao e governanca do projeto.

---

## Phase 1: Preparacao e Leitura da Feature

**Purpose**: Confirmar escopo documental antes de qualquer criacao futura de README.

- [X] T001 Ler constituicao do projeto; descricao: revisar principios Spec First, Gate Humano, Character First, Pixel Art HD e tecnologia oficial; arquivos/pastas: `D:/Projetos/Unfallen/.specify/memory/constitution.md`; criterio: restricoes compreendidas e registradas mentalmente antes de prosseguir; dependencias: nenhuma.
- [X] T002 [P] Ler especificacao da feature 009; descricao: extrair user stories, requisitos, criterios de aceite e proibicoes do README oficial; arquivos/pastas: `D:/Projetos/Unfallen/specs/009-readme-oficial-unfallen/spec.md`; criterio: escopo do README entendido sem duvidas abertas; dependencias: T001.
- [X] T003 [P] Ler plano tecnico da feature 009; descricao: confirmar estrutura planejada, arquivos permitidos e estrategia de validacao; arquivos/pastas: `D:/Projetos/Unfallen/specs/009-readme-oficial-unfallen/plan.md`; criterio: plano lido e usado como fonte principal da execucao futura; dependencias: T001.
- [X] T004 [P] Ler pesquisa da feature 009; descricao: confirmar decisoes de criar README novo, PT-BR, separacao estado atual/visao futura, rig como laboratorio e governanca; arquivos/pastas: `D:/Projetos/Unfallen/specs/009-readme-oficial-unfallen/research.md`; criterio: decisoes editoriais compreendidas; dependencias: T001.
- [X] T005 [P] Ler modelo de dados da feature 009; descricao: mapear entidades `OfficialReadme`, `ReadmeSection`, `ProjectStatusStatement`, `RepositoryGovernanceRule`, `RepositoryArtifactReference` e `ImplementationGate`; arquivos/pastas: `D:/Projetos/Unfallen/specs/009-readme-oficial-unfallen/data-model.md`; criterio: entidades convertidas em checklist mental de implementacao; dependencias: T001.
- [X] T006 [P] Ler quickstart da feature 009; descricao: extrair roteiro de validacao do README futuro e auditoria de escopo; arquivos/pastas: `D:/Projetos/Unfallen/specs/009-readme-oficial-unfallen/quickstart.md`; criterio: validacoes futuras compreendidas; dependencias: T001.
- [X] T007 Confirmar escopo documental; descricao: registrar que a feature pode criar/alterar somente `README.md`, `docs/project/README-notes.md` e `specs/009-readme-oficial-unfallen/tasks.md`; arquivos/pastas: `D:/Projetos/Unfallen/specs/009-readme-oficial-unfallen/tasks.md`; criterio: nenhuma tarefa exige alteracao de codigo, cenas, sprites, Player, scripts, assets, `.gitignore`, commit ou push; dependencias: T002-T006.
- [X] T008 Confirmar arquivos proibidos; descricao: marcar como fora de escopo `scenes/player/Player.tscn`, `scenes/rig/AntonioRafaelRigLab.tscn`, `scripts/player/`, `scripts/rig/`, `assets/`, `assets/characters/antonio_rafael/sprites/idle/`, `assets/characters/antonio_rafael/rig/` e `.gitignore`; arquivos/pastas: `D:/Projetos/Unfallen/scenes/`, `D:/Projetos/Unfallen/scripts/`, `D:/Projetos/Unfallen/assets/`, `D:/Projetos/Unfallen/.gitignore`; criterio: nenhum arquivo proibido sera editado na implementacao futura; dependencias: T007.

---

## Phase 2: Auditoria do README Existente

**Purpose**: Garantir que o README oficial futuro nao reaproveite conteudo antigo de outro projeto.

- [X] T009 Verificar existencia do README; descricao: checar se `README.md` existe na raiz antes de escrever qualquer conteudo; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: existencia ou ausencia registrada para auditoria; dependencias: T007.
- [X] T010 Auditar README existente se houver; descricao: se `README.md` existir, ler o conteudo e identificar se pertence ao Unfallen ou a projeto antigo; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: origem e adequacao do README existente registradas; dependencias: T009.
- [X] T011 Registrar decisao de substituicao total; descricao: decidir que qualquer README antigo ou generico sera substituido por texto novo do Unfallen; arquivos/pastas: `D:/Projetos/Unfallen/docs/project/README-notes.md`; criterio: decisao de nao reaproveitamento registrada se notas auxiliares forem criadas; dependencias: T010.
- [X] T012 Validar ausencia de copia de outro projeto; descricao: comparar a redacao futura contra eventual README antigo para garantir que frases de outro projeto nao foram copiadas; arquivos/pastas: `D:/Projetos/Unfallen/README.md`, `D:/Projetos/Unfallen/docs/project/README-notes.md`; criterio: README futuro usa conteudo novo e especifico do Unfallen; dependencias: T011.

---

## Phase 3: Estrutura do README Novo

**Purpose**: Montar o esqueleto minimo do README oficial antes da redacao detalhada.

- [X] T013 [US1] Criar esqueleto do README oficial; descricao: criar `README.md` com titulo `# Unfallen` e secoes obrigatorias planejadas; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: arquivo existe com todas as categorias minimas de secao; dependencias: T009-T012.
- [X] T014 [US1] Incluir secao Sobre o projeto; descricao: reservar secao para descricao curta, identidade e estado de desenvolvimento; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: secao presente e pronta para redacao; dependencias: T013.
- [X] T015 [US1] Incluir secao Visao do jogo; descricao: reservar secao para visao futura sem tratar roadmap como implementado; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: secao presente e separada do status atual; dependencias: T013.
- [X] T016 [US2] Incluir secoes Status atual, Pipeline do personagem e Marcos validados; descricao: reservar secoes para estado real do projeto e marcos de rig/personagem; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: secoes presentes e separadas entre si; dependencias: T013.
- [X] T017 [US3] Incluir secoes Stack tecnica, Estrutura do projeto, Como abrir, Cena atual, Regras, Roadmap, Assets e Status do repositorio; descricao: montar secoes operacionais e de governanca; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: README cobre todas as informacoes obrigatorias; dependencias: T013.

---

## Phase 4: Redacao do README Oficial

**Purpose**: Escrever conteudo honesto, especifico do Unfallen e pronto para revisao humana.

- [X] T018 [US1] Redigir titulo e descricao curta; descricao: escrever abertura com nome `Unfallen`, Godot 4, Pixel Art HD isometrica, desenvolvimento ativo e foco em personagem/rig tecnico; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: leitor identifica Unfallen e seu estado em ate 30 segundos; dependencias: T013.
- [X] T019 [US1] Redigir Sobre o projeto; descricao: descrever Unfallen como jogo isometrico em desenvolvimento com sobrevivencia, colapso zumbi e protagonista SGT Antonio Rafael sem prometer gameplay implementado; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: descricao evocativa e honesta, sem afirmar jogo completo; dependencias: T014, T018.
- [X] T020 [US1] Redigir Visao do jogo; descricao: mencionar exploracao, sobrevivencia, narrativa, combate, investigacao, progressao e ambiente hostil como visao futura; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: texto deixa claro que esses itens sao roadmap/visao, nao estado atual; dependencias: T015.
- [X] T021 [US2] Redigir Status atual; descricao: registrar Base Idle Oficial V1 aprovada, personagem validado, rig criado, partes separadas/refinadas, validacao visual parcial, articulacao parcial, sem walk final, sem animacao oficial final, sem gameplay completo e sem release publica final; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: todos os status obrigatorios aparecem com linguagem clara; dependencias: T016.
- [X] T022 [US3] Redigir Stack tecnica; descricao: registrar Godot 4, GDScript quando aplicavel, Pixel Art HD isometrica, Spec Kit/SDD e organizacao de assets em estrutura Godot; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: stack representada sem criar promessas de sistemas inexistentes; dependencias: T017.
- [X] T023 [US2] Redigir Pipeline do personagem; descricao: explicar Base Idle Oficial V1, Rig Parts Separation V1, Rig Assembly V1, Rig Refinement V1, Rig Articulation Test V1 e proximos passos antes do walk cycle; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: leitor entende ordem e status parcial do pipeline; dependencias: T016, T021.
- [X] T024 [US2] Redigir Marcos validados; descricao: listar Rig Assembly V1, Rig Refinement V1, Validacao Visual Godot e Rig Articulation Test V1 sem exagerar status; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: marcos aparecem como tecnicos/parciais quando aplicavel; dependencias: T023.
- [X] T025 [US3] Redigir Estrutura do projeto; descricao: citar pastas confirmadas `res://scenes/player/`, `res://scenes/rig/`, `res://assets/characters/antonio_rafael/`, `res://docs/` e `res://specs/`; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: estrutura nao inventa pastas inexistentes nem exige alteracao de arquivos; dependencias: T017.
- [X] T026 [US3] Redigir Como abrir no Godot; descricao: orientar instalacao/uso de Godot 4, abertura da pasta do projeto e selecao de `project.godot`; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: colaborador encontra instrucao de abertura em menos de 2 minutos; dependencias: T017.
- [X] T027 [US3] Redigir Cena atual de validacao; descricao: citar `res://scenes/rig/AntonioRafaelRigLab.tscn` como laboratorio tecnico e `res://scenes/player/Player.tscn` como Player runtime oficial separado; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: README explica que rig nao substitui Player e Player nao deve ser alterado fora de feature especifica; dependencias: T017.
- [X] T028 [US3] Redigir Regras de desenvolvimento; descricao: registrar Spec Kit/SDD, especificacao, plano, tarefas, implementacao controlada, gate humano, sem push automatico, sem segredos, sem `.env`, sem Player/rig fora de escopo e sem assets sem licenca; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: pelo menos cinco regras de governanca/seguranca aparecem claramente; dependencias: T017.
- [X] T029 [US3] Redigir Roadmap; descricao: criar roadmap curto com validacao de rig, refinamento de pivos, walk tecnico controlado, sprites finais, integracao aprovada ao Player, gameplay minimo e expansao de sobrevivencia/narrativa; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: roadmap aparece como futuro, nao como implementacao atual; dependencias: T020, T028.
- [X] T030 [US3] Redigir Assets e licenciamento; descricao: registrar rastreabilidade de assets, proibicao de assets pagos/terceiros sem licenca e ausencia de licenca aberta sem arquivo confirmado; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: texto evita afirmar que todos os assets sao livres; dependencias: T028.
- [X] T031 [US1] Redigir Status do repositorio; descricao: registrar projeto em desenvolvimento, README criado para evitar confusao com repo antigo, sem release final e push futuro somente apos revisao humana; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: status do repositorio prepara apresentacao publica sem promessas indevidas; dependencias: T018-T030.

---

## Phase 5: Documentacao Auxiliar

**Purpose**: Registrar, quando necessario, a auditoria editorial do README oficial.

- [X] T032 [P] Criar pasta de documentacao de projeto se necessaria; descricao: criar `docs/project/` apenas se a implementacao futura decidir registrar notas auxiliares; arquivos/pastas: `D:/Projetos/Unfallen/docs/project/`; criterio: pasta criada somente se houver `README-notes.md`; dependencias: T011.
- [X] T033 Criar README-notes se necessario; descricao: registrar motivo da substituicao, ausencia de reaproveitamento, estado real usado como base, decisoes editoriais e limitacoes; arquivos/pastas: `D:/Projetos/Unfallen/docs/project/README-notes.md`; criterio: notas existem apenas se trouxerem auditoria util; dependencias: T032.
- [X] T034 Vincular README-notes a validacao; descricao: garantir que notas auxiliares nao substituem o README e nao introduzem tarefas fora de escopo; arquivos/pastas: `D:/Projetos/Unfallen/docs/project/README-notes.md`; criterio: notas sao complementares e documentais; dependencias: T033.

---

## Phase 6: Validacao de Conteudo

**Purpose**: Confirmar que o README representa o Unfallen com honestidade e sem promessas falsas.

- [X] T035 [P] Validar identidade do projeto; descricao: verificar que `README.md` e especifico do Unfallen e nao contem texto reaproveitado de outro projeto; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: README identifica Unfallen, SGT Antonio Rafael e contexto atual; dependencias: T018-T031.
- [X] T036 [P] Validar stack e estilo visual; descricao: confirmar mencoes a Godot 4, GDScript quando aplicavel e Pixel Art HD isometrica; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: stack tecnica obrigatoria aparece; dependencias: T022.
- [X] T037 [P] Validar status real; descricao: conferir que status atual, marcos validados, pipeline e pendencias aparecem sem exagero; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: Base Idle Oficial V1, rig, partes, refinamento, validacao parcial e articulacao parcial aparecem corretamente; dependencias: T021-T024.
- [X] T038 [P] Validar cenas citadas; descricao: conferir referencias a `res://scenes/rig/AntonioRafaelRigLab.tscn` e `res://scenes/player/Player.tscn`; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: README explica laboratorio tecnico e Player runtime separado; dependencias: T027.
- [X] T039 [P] Validar ausencia de promessas proibidas; descricao: procurar afirmacoes de jogo completo, gameplay completo, build publica final, release estavel, walk final aprovado, combate/inventario/mundo aberto implementados, rig como Player oficial, assets livres ou licenca aberta sem confirmacao; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: nenhuma afirmacao proibida existe; dependencias: T018-T031.
- [X] T040 [P] Validar governanca e seguranca; descricao: confirmar Spec Kit/SDD, gate humano, sem push automatico, sem segredos, sem `.env`, sem assets sem licenca e sem alteracao de Player/rig fora do escopo; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: governanca aparece de forma clara; dependencias: T028, T030.
- [X] T041 Validar leitura completa do README; descricao: revisar coesao, clareza, PT-BR, tom adequado para GitHub e separacao entre status atual e visao futura; arquivos/pastas: `D:/Projetos/Unfallen/README.md`; criterio: README esta pronto para revisao humana; dependencias: T035-T040.

---

## Phase 7: Validacao de Escopo Seguro

**Purpose**: Garantir que a feature documental nao tocou no jogo, assets, cenas ou Git de forma indevida.

- [X] T042 Validar status do Git antes do gate; descricao: executar `git status --short` e registrar somente mudancas esperadas em arquivos documentais permitidos; arquivos/pastas: `D:/Projetos/Unfallen/`; criterio: alteracoes da feature limitadas a `README.md`, `docs/project/README-notes.md` e `specs/009-readme-oficial-unfallen/tasks.md`; dependencias: T041.
- [X] T043 [P] Validar que codigo nao foi alterado; descricao: conferir ausencia de alteracoes em scripts e arquivos de codigo; arquivos/pastas: `D:/Projetos/Unfallen/scripts/player/`, `D:/Projetos/Unfallen/scripts/rig/`; criterio: nenhum script alterado por esta feature; dependencias: T042.
- [X] T044 [P] Validar que cenas nao foram alteradas; descricao: conferir que `Player.tscn` e `AntonioRafaelRigLab.tscn` nao foram alterados por esta feature; arquivos/pastas: `D:/Projetos/Unfallen/scenes/player/Player.tscn`, `D:/Projetos/Unfallen/scenes/rig/AntonioRafaelRigLab.tscn`; criterio: cenas permanecem fora do escopo; dependencias: T042.
- [X] T045 [P] Validar que assets nao foram alterados; descricao: conferir ausencia de alteracoes em assets, sprites, PNGs, rig e sprites idle aprovados; arquivos/pastas: `D:/Projetos/Unfallen/assets/`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/sprites/idle/`, `D:/Projetos/Unfallen/assets/characters/antonio_rafael/rig/`; criterio: nenhum asset alterado por esta feature; dependencias: T042.
- [X] T046 [P] Validar que `.gitignore` nao foi alterado; descricao: conferir que `.gitignore` nao recebeu alteracoes nesta feature; arquivos/pastas: `D:/Projetos/Unfallen/.gitignore`; criterio: `.gitignore` permanece intacto; dependencias: T042.
- [X] T047 Confirmar ausencia de commit e push; descricao: registrar que nenhum commit e nenhum push foram feitos durante a implementacao da feature README; arquivos/pastas: `D:/Projetos/Unfallen/`; criterio: historico e remote nao foram alterados por commit/push nesta execucao; dependencias: T042-T046.

---

## Phase 8: Gate Humano Final

**Purpose**: Parar para revisao humana antes de commit, push ou qualquer proxima etapa.

- [X] T048 Gate humano final; descricao: apresentar caminho do README, resumo das secoes, confirmacao de nao reaproveitamento de README antigo, confirmacao de estado real, confirmacao de nenhum codigo/cena/asset alterado, recomendacao de aprovar/aprovar parcialmente/revisar, confirmacao de sem commit e sem push; arquivos/pastas: `D:/Projetos/Unfallen/README.md`, `D:/Projetos/Unfallen/docs/project/README-notes.md`, `D:/Projetos/Unfallen/specs/009-readme-oficial-unfallen/tasks.md`; criterio: usuario recebe evidencia suficiente para validacao humana; dependencias: T001-T047.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1**: Sem dependencias; estabelece leitura e escopo.
- **Phase 2**: Depende da Phase 1; bloqueia a redacao para evitar reaproveitamento de README antigo.
- **Phase 3**: Depende da Phase 2; cria o esqueleto futuro do README.
- **Phase 4**: Depende da Phase 3; redige o conteudo oficial por secoes.
- **Phase 5**: Pode ocorrer apos auditoria do README existente; e opcional se notas auxiliares forem uteis.
- **Phase 6**: Depende da redacao completa.
- **Phase 7**: Depende da validacao de conteudo.
- **Phase 8**: Depende de todas as fases anteriores.

### User Story Dependencies

- **US1 (P1)**: Pode ser entregue apos auditoria e esqueleto; cria a identidade publica minima do Unfallen.
- **US2 (P2)**: Depende da estrutura do README e complementa a identidade com status real do pipeline.
- **US3 (P3)**: Pode ser redigida em paralelo com US2 apos o esqueleto, mas deve ser validada junto ao README completo.

### MVP Scope

MVP minimo: completar Phases 1-4 com as secoes `# Unfallen`, `Sobre o projeto`, `Visao do jogo`, `Status atual`, `Pipeline do personagem`, `Cena atual de validacao` e `Status do repositorio`, seguido das validacoes basicas de conteudo e escopo.

---

## Parallel Opportunities

- T002-T006 podem ser executadas em paralelo apos T001.
- T014-T017 podem ser preparadas em paralelo apos T013, mas consolidando no mesmo `README.md` com cuidado.
- T018-T031 envolvem o mesmo arquivo `README.md`; conceitualmente sao independentes por secao, mas a escrita final deve ser sequenciada por um unico executor para evitar conflitos.
- T032 pode ser feita em paralelo com a redacao do README se `README-notes.md` for necessario.
- T035-T040 podem ser executadas em paralelo apos a redacao completa.
- T043-T046 podem ser executadas em paralelo apos T042.

## Parallel Example: Content Validation

```text
T035: Validar identidade do projeto em README.md
T036: Validar stack e estilo visual em README.md
T038: Validar cenas citadas em README.md
T040: Validar governanca e seguranca em README.md
```

## Parallel Example: Scope Validation

```text
T043: Validar scripts em scripts/player/ e scripts/rig/
T044: Validar cenas Player/Rig
T045: Validar assets e sprites idle
T046: Validar .gitignore
```

---

## Implementation Strategy

### MVP First

1. Completar Phase 1 e Phase 2.
2. Criar esqueleto do README.
3. Redigir identidade, status atual e cena de validacao.
4. Validar que nao ha promessas falsas.
5. Parar para revisao rapida se o README ainda parecer generico.

### Incremental Delivery

1. Identidade do projeto e status real.
2. Pipeline e marcos validados.
3. Instrucoes de abertura e cenas.
4. Regras de desenvolvimento, assets/licenca e roadmap.
5. Validacao completa de conteudo e escopo.
6. Gate humano final.

### Guardrails

- Nao criar README durante `/speckit.tasks`; esta lista apenas planeja a implementacao futura.
- Nao alterar codigo.
- Nao alterar cenas.
- Nao alterar sprites, PNGs ou assets.
- Nao alterar Player.
- Nao alterar scripts.
- Nao alterar `.gitignore`.
- Nao limpar arquivos antigos.
- Nao criar gameplay, animacao ou walk cycle.
- Nao fazer commit.
- Nao fazer push.
