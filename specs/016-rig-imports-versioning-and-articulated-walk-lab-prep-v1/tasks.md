# Tasks: Rig Imports Versioning and Articulated Walk Lab Prep V1

**Input**: Design documents from `specs/016-rig-imports-versioning-and-articulated-walk-lab-prep-v1/`  
**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `quickstart.md`  
**Tests**: No automated tests requested; this feature uses read-only Git audits, explicit path validation, documentation review and human gate.  
**Organization**: Tasks are grouped by the required execution phases and mapped to user stories where applicable.

## Phase 1: Preparacao e leitura da feature

**Purpose**: Confirmar escopo, fontes de verdade e limites antes de qualquer implementacao.

- [x] T001 Ler a especificacao da feature 016 em `specs/016-rig-imports-versioning-and-articulated-walk-lab-prep-v1/spec.md`; criterio: escopo, proibicoes e 33 imports maximos compreendidos; dependencias: nenhuma.
- [x] T002 Ler o plano tecnico em `specs/016-rig-imports-versioning-and-articulated-walk-lab-prep-v1/plan.md`; criterio: fases, validacoes e gate humano confirmados; dependencias: T001.
- [x] T003 Ler os artefatos de apoio `research.md`, `data-model.md` e `quickstart.md` em `specs/016-rig-imports-versioning-and-articulated-walk-lab-prep-v1/`; criterio: decisoes, entidades e quickstart compreendidos; dependencias: T002.
- [x] T004 [P] Ler a politica Godot em `docs/technical/godot-import-uid-policy-v1.md`; criterio: regras de `.import`, `.uid` e `.gitignore` identificadas; dependencias: T001.
- [x] T005 [P] Ler a revisao dos imports oficiais em `docs/technical/official-rig-imports-review-v1.md` e `docs/technical/official-rig-imports-review-manifest-v1.md`; criterio: lista dos 32 official rig imports localizada; dependencias: T001.
- [x] T006 [P] Ler a revisao do preview de articulacao em `docs/technical/rig-articulation-preview-import-review-v1.md` e `docs/technical/rig-articulation-preview-import-review-manifest-v1.md`; criterio: import adicional e recomendacao `join_official_rig_imports` confirmados; dependencias: T001.
- [x] T007 [P] Ler auditoria, inventario e higiene em `docs/technical/untracked-cleanup-audit-v1.md`, `docs/technical/untracked-cleanup-inventory-v1.md` e `docs/project/repository-hygiene.md`; criterio: grupos fora do escopo reconhecidos; dependencias: T001.
- [x] T008 [P] Consultar documentos do rig, se existirem, em `docs/technical/rig-articulation-test-v1.md`, `docs/technical/rig-refinement-v1.md` e `docs/technical/rig-assembly-v1.md`; criterio: documentos existentes registrados e ausencias anotadas como pendencia; dependencias: T001.
- [x] T009 Confirmar proibicoes da etapa em `specs/016-rig-imports-versioning-and-articulated-walk-lab-prep-v1/tasks.md`; criterio: nenhuma tarefa autoriza `git add .`, `git add -A`, `git commit -am`, `git clean`, glob amplo, commit ou push automatico; dependencias: T001-T008.

---

## Phase 2: Revalidacao dos imports oficiais aprovados

**Purpose**: Revalidar os 32 official rig imports e o import adicional da Rig Articulation Test V1 contra os criterios aprovados.

- [x] T010 [US1] Executar auditoria read-only inicial com `git status --short --untracked-files=all`, `git diff --name-only` e `git diff --stat`; arquivos: working tree Git; criterio: nenhum Player, cena, script, asset oficial ou `.gitignore` aparece como alterado; dependencias: T009.
- [x] T011 [US1] Coletar a lista atual de `.import` e `.uid` com `git ls-files --others --exclude-standard`, `git ls-files "*.import"`, `git ls-files "*.uid"`, `Get-ChildItem -Recurse -Filter "*.import"` e `Get-ChildItem -Recurse -Filter "*.uid"`; arquivos: working tree Git; criterio: listas coletadas sem mover, apagar, stagear ou alterar arquivos; dependencias: T010.
- [x] T012 [US1] Extrair os 32 official rig imports de `docs/technical/official-rig-imports-review-manifest-v1.md`; criterio: 32 caminhos candidatos registrados; dependencias: T005, T011.
- [x] T013 [US1] Extrair o articulation preview import de `docs/technical/rig-articulation-preview-import-review-manifest-v1.md`; criterio: 1 caminho candidato registrado; dependencias: T006, T011.
- [x] T014 [P] [US1] Revalidar o import de recomposicao `assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png.import`; criterio: origem existe, relacao com rig confirmada, nao e `.uid`, nao pertence a prototipo; dependencias: T012.
- [x] T015 [P] [US1] Revalidar os 6 backup imports em `assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/*.png.import` por caminhos individuais listados no manifesto; criterio: seis origens existem e permanecem ligadas ao Rig Refinement V1; dependencias: T012.
- [x] T016 [P] [US1] Revalidar os 22 rig part imports em `assets/characters/antonio_rafael/rig/parts/front_right/*.png.import` por caminhos individuais listados no manifesto; criterio: vinte e duas origens existem e permanecem ligadas ao rig tecnico validado; dependencias: T012.
- [x] T017 [P] [US1] Revalidar os 3 rig preview imports da feature 014 em `assets/characters/antonio_rafael/rig/previews/*.png.import` por caminhos individuais listados no manifesto; criterio: tres previews existem e nao sao walk cycle oficial; dependencias: T012.
- [x] T018 [P] [US1] Revalidar o articulation preview import `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import`; criterio: PNG de origem existe, e rastreado e status `join_official_rig_imports` permanece valido; dependencias: T013.
- [x] T019 [US1] Confirmar que nenhum candidato pertence a `docs/archive/walk-prototypes-v1`; criterio: zero imports de arquivo historico ou prototipo rejeitado no conjunto aprovado; dependencias: T014-T018.
- [x] T020 [US1] Confirmar que nenhum candidato e `.uid` e que `scripts/rig/*.gd.uid` permanece fora do escopo; criterio: zero `.uid` no conjunto aprovado; dependencias: T014-T018.
- [x] T021 [US1] Registrar qualquer divergencia em `docs/technical/official-rig-imports-versioning-v1.md` como pendencia planejada para a implementacao; criterio: divergencias ficam fora do stage futuro; dependencias: T014-T020.

---

## Phase 3: Preparacao da lista explicita de versionamento

**Purpose**: Montar a lista auditavel de `.import` aprovados para versionamento futuro por path individual.

- [x] T022 [US1] Criar a secao `official_rig_imports` em `docs/technical/official-rig-imports-versioning-v1.md`; criterio: 32 itens listados com caminho, origem documental, PNG de origem, status, motivo, risco e decisao; dependencias: T014-T017.
- [x] T023 [US1] Criar a secao `articulation_preview_import` em `docs/technical/official-rig-imports-versioning-v1.md`; criterio: 1 item listado com caminho, origem documental, PNG de origem, status, motivo, risco e decisao; dependencias: T018.
- [x] T024 [US1] Criar a secao `excluded_or_pending_imports` em `docs/technical/official-rig-imports-versioning-v1.md`; criterio: qualquer item divergente ou excluido fica listado com motivo e sem permissao de stage; dependencias: T019-T021.
- [x] T025 [US1] Validar contagem final em `docs/technical/official-rig-imports-versioning-v1.md`; criterio: no maximo 33 `.import` aprovados e zero `.uid`; dependencias: T022-T024.
- [x] T026 [US1] Se houver mais de 33 candidatos, registrar bloqueio em `docs/technical/official-rig-imports-versioning-v1.md` e parar para revisao humana; criterio: nenhum stage futuro e recomendado quando o limite falha; dependencias: T025.

---

## Phase 4: Planejamento do stage seguro por path individual

**Purpose**: Preparar o comando de stage futuro sem executa-lo nesta etapa de tasks.

- [x] T027 [US1] Preparar em `docs/technical/official-rig-imports-versioning-v1.md` o bloco de comando futuro `git add` somente com paths explicitos individuais; criterio: nenhum glob, nenhum diretorio inteiro, nenhum `git add .`, nenhum `git add -A`; dependencias: T025.
- [x] T028 [US1] Documentar em `docs/technical/official-rig-imports-versioning-v1.md` a validacao pre-stage futura com `git status --short --untracked-files=all`, `git diff --name-status -- "*.import"`, `git diff --name-status -- "*.uid"` e `git diff --name-only`; criterio: comandos sao somente auditoria e nao alteram arquivos; dependencias: T027.
- [x] T029 [US1] Documentar em `docs/technical/official-rig-imports-versioning-v1.md` a validacao pos-stage futura com `git diff --cached --name-only` e `git diff --cached --stat`; criterio: staged set esperado contem somente imports aprovados e documentos autorizados da feature; dependencias: T027.
- [x] T030 [US1] Registrar que o stage futuro deve parar se aparecer `.uid`, `.gitignore`, Player, cena, script, sprite idle, asset oficial fora dos imports aprovados ou prototipo arquivado; criterio: regra de bloqueio registrada; dependencias: T028-T029.

---

## Phase 5: Documentacao do versionamento dos imports oficiais

**Purpose**: Criar a documentacao final do versionamento dos imports oficiais.

- [x] T031 [US2] Criar `docs/technical/official-rig-imports-versioning-v1.md`; criterio: arquivo existe e explica objetivo, relacao com features 012/014/015 e escopo consolidado; dependencias: T021.
- [x] T032 [US2] Registrar em `docs/technical/official-rig-imports-versioning-v1.md` total avaliado, total aprovado, total pendente/excluido e lista dos paths versionaveis; criterio: contagens batem com T025; dependencias: T022-T025, T031.
- [x] T033 [US2] Registrar em `docs/technical/official-rig-imports-versioning-v1.md` criterios usados e riscos remanescentes; criterio: os 10 criterios da spec aparecem de forma verificavel; dependencias: T031.
- [x] T034 [US2] Registrar em `docs/technical/official-rig-imports-versioning-v1.md` confirmacoes de que nenhum `.uid` foi versionado, `.gitignore` nao foi alterado e PNGs/assets nao foram alterados; criterio: confirmacoes explicitas presentes; dependencias: T031.
- [x] T035 [US2] Registrar em `docs/technical/official-rig-imports-versioning-v1.md` confirmacoes de que Player, cenas e scripts nao foram alterados; criterio: confirmacoes explicitas presentes; dependencias: T031.
- [x] T036 [US2] Registrar em `docs/technical/official-rig-imports-versioning-v1.md` pendencias e recomendacao de commit futuro controlado; criterio: commit/push continuam dependentes de gate humano; dependencias: T031-T035.

---

## Phase 6: Preparacao do laboratorio de caminhada articulada experimental

**Purpose**: Preparar a futura feature `017-articulated-walk-lab-v1` sem criar caminhada, animacao ou gameplay agora.

- [x] T037 [US3] Criar `docs/technical/articulated-walk-lab-prep-v1.md`; criterio: arquivo existe e descreve objetivo do futuro laboratorio de caminhada articulada; dependencias: T003.
- [x] T038 [US3] Registrar em `docs/technical/articulated-walk-lab-prep-v1.md` o estado atual do rig tecnico; criterio: Rig Parts Separation, Rig Assembly, Rig Refinement e Rig Articulation Test aparecem como bases tecnicas, nao assets finais; dependencias: T008, T037.
- [x] T039 [US3] Registrar em `docs/technical/articulated-walk-lab-prep-v1.md` as cinco observacoes obrigatorias sobre ausencia de caminhada oficial, walk cycle oficial, animacao oficial, integracao ao Player e escopo preparatorio; criterio: texto obrigatorio presente literalmente ou de forma equivalente e inequivoca; dependencias: T037.
- [x] T040 [US3] Registrar em `docs/technical/articulated-walk-lab-prep-v1.md` arquivos/cenas que podem servir como base futura; criterio: referencias ao rig tecnico e laboratorio aparecem sem autorizar alteracao nesta feature; dependencias: T037-T038.
- [x] T041 [US3] Registrar em `docs/technical/articulated-walk-lab-prep-v1.md` arquivos que nao devem ser alterados na proxima fase inicial; criterio: Player, cena de rig existente, scripts, sprites idle, assets oficiais, `.uid` e `.gitignore` aparecem como protegidos salvo nova aprovacao; dependencias: T037.
- [x] T042 [US3] Registrar em `docs/technical/articulated-walk-lab-prep-v1.md` criterios visuais para caminhada experimental; criterio: pelo menos cinco criterios cobrem alternancia de pernas/bracos, peso corporal, tronco/mochila, consistencia do rosto/uniforme e ausencia de Player runtime; dependencias: T037.
- [x] T043 [US3] Registrar em `docs/technical/articulated-walk-lab-prep-v1.md` escopo recomendado da feature `017-articulated-walk-lab-v1`; criterio: laboratorio separado, poses experimentais, preview tecnico, documentacao de limitacoes e validacao visual no Godot aparecem como proximos passos; dependencias: T037-T042.

---

## Phase 7: Atualizacao de documentos correlatos

**Purpose**: Atualizar somente documentos autorizados para refletir a consolidacao e a proxima etapa.

- [x] T044 [P] [US2] Atualizar `docs/technical/godot-import-uid-policy-v1.md`; criterio: registra consolidacao dos imports oficiais e preserva `.uid` fora do escopo; dependencias: T031-T036.
- [x] T045 [P] [US2] Atualizar `docs/technical/official-rig-imports-review-v1.md`; criterio: registra que a feature 016 consolida a recomendacao `version_later` sem alterar a decisao historica da feature 014; dependencias: T031-T036.
- [x] T046 [P] [US2] Atualizar `docs/technical/rig-articulation-preview-import-review-v1.md`; criterio: registra que a feature 016 agrupa o preview import ao conjunto de imports oficiais, sem declarar walk cycle oficial; dependencias: T031-T036.
- [x] T047 [P] [US2] Atualizar `docs/technical/untracked-cleanup-audit-v1.md` e `docs/technical/untracked-cleanup-inventory-v1.md`; criterio: inventario reflete que official rig imports foram tratados pela feature 016 e `.uid` segue pendente; dependencias: T031-T036.
- [x] T048 [P] [US2] Atualizar `docs/project/repository-hygiene.md`; criterio: reforca paths explicitos, sem stage em massa, sem glob e sem misturar imports com runtime; dependencias: T031-T036.

---

## Phase 8: Validacao de escopo seguro

**Purpose**: Confirmar que a feature permaneceu dentro do escopo e que a implementacao futura pode ir para gate humano.

- [x] T049 [US1] Validar que os 32 `.import` oficiais do rig foram revalidados em `docs/technical/official-rig-imports-versioning-v1.md`; criterio: 32/32 aprovados ou divergencias registradas; dependencias: T022-T036.
- [x] T050 [US1] Validar que o articulation preview import foi revalidado em `docs/technical/official-rig-imports-versioning-v1.md`; criterio: 1/1 aprovado ou divergencia registrada; dependencias: T023-T036.
- [x] T051 [US1] Validar que apenas `.import` aprovados foram preparados para stage explicito; criterio: nenhum item fora dos 33 maximos aparece no comando futuro; dependencias: T027-T030.
- [x] T052 Validar que nenhum `.uid` foi preparado para stage; arquivos: `scripts/rig/rig_export_notes.gd.uid`, `scripts/rig/rig_preview_controller.gd.uid`; criterio: ambos permanecem fora do conjunto; dependencias: T020, T051.
- [x] T053 Validar que `.gitignore` nao foi alterado; arquivo: `.gitignore`; criterio: sem diff em `.gitignore`; dependencias: T044-T048.
- [x] T054 Validar que nenhum PNG/asset oficial foi alterado; pasta: `assets/characters/antonio_rafael/rig/`; criterio: somente `.import` aprovados podem estar preparados para stage futuro; dependencias: T051.
- [x] T055 Validar que Player, cena de rig existente, scripts e sprites idle aprovados nao foram alterados; arquivos/pastas: `scenes/player/Player.tscn`, `scenes/rig/AntonioRafaelRigLab.tscn`, `scripts/player/`, `scripts/rig/`, `assets/characters/antonio_rafael/sprites/idle/`; criterio: sem diff ou stage nesses caminhos; dependencias: T052-T054.
- [x] T056 Validar que documentacao de versionamento e preparacao do walk lab foi criada; arquivos: `docs/technical/official-rig-imports-versioning-v1.md`, `docs/technical/articulated-walk-lab-prep-v1.md`; criterio: ambos existem e contem observacoes obrigatorias; dependencias: T031-T043.
- [x] T057 Validar que nao houve walk cycle oficial, animacao oficial ou gameplay; arquivos: `docs/technical/articulated-walk-lab-prep-v1.md`, `docs/technical/official-rig-imports-versioning-v1.md`; criterio: negacoes explicitas registradas; dependencias: T039, T056.
- [x] T058 Validar que `git add .`, `git add -A`, `git clean`, commit e push nao foram usados; arquivos: relatorio final da implementacao em `docs/technical/official-rig-imports-versioning-v1.md`; criterio: confirmacoes explicitas presentes; dependencias: T027-T057.

---

## Phase 9: Gate humano final

**Purpose**: Encerrar com decisao humana antes de stage real, commit ou push.

- [x] T059 Apresentar gate humano final no relatorio da implementacao; arquivos: `docs/technical/official-rig-imports-versioning-v1.md`, `docs/technical/articulated-walk-lab-prep-v1.md`; criterio: inclui total avaliado, total aprovado, pendentes/excluidos, paths aprovados, paths pendentes, confirmacoes de `.uid`, `.gitignore`, Player/cenas/scripts/assets, status de caminhada oficial, documentos criados/atualizados, comando futuro de stage explicito, recomendacao para implementacao, e confirmacao de que nao houve commit nem push; dependencias: T049-T058.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1**: sem dependencias; prepara leitura e limites.
- **Phase 2**: depende da Phase 1; revalida candidatos.
- **Phase 3**: depende da Phase 2; monta lista explicita.
- **Phase 4**: depende da Phase 3; prepara stage futuro por paths individuais.
- **Phase 5**: depende das Phases 2-4; cria documentacao de versionamento.
- **Phase 6**: depende da Phase 1; pode rodar em paralelo com Phase 5 depois da leitura.
- **Phase 7**: depende da documentacao principal da Phase 5.
- **Phase 8**: depende das Phases 5-7.
- **Phase 9**: depende da Phase 8.

### User Story Dependencies

- **US1 - Consolidar imports oficiais do rig**: T010-T030, T049-T051.
- **US2 - Registrar politica final de versionamento**: T031-T036, T044-T048.
- **US3 - Preparar laboratorio de caminhada articulada experimental**: T037-T043.

### MVP Scope

MVP recomendado: completar Phase 1, Phase 2, Phase 3 e Phase 4 para obter uma lista confiavel de imports aprovados e comando futuro seguro de stage. Isso entrega a base critica de US1 antes da documentacao final.

## Parallel Opportunities

- T004-T008 podem rodar em paralelo apos T001.
- T014-T018 podem rodar em paralelo apos T012/T013.
- T044-T048 podem rodar em paralelo apos T031-T036.
- US3 (T037-T043) pode ser trabalhada em paralelo com parte da documentacao de US2 depois que a leitura inicial estiver concluida.

## Parallel Example: Revalidacao de imports

```text
Task: "T014 Revalidar recomposicao em assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png.import"
Task: "T015 Revalidar backups em assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/"
Task: "T016 Revalidar partes em assets/characters/antonio_rafael/rig/parts/front_right/"
Task: "T017 Revalidar previews em assets/characters/antonio_rafael/rig/previews/"
Task: "T018 Revalidar preview de articulacao em assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import"
```

## Implementation Strategy

### Incremento 1: Auditoria e lista explicita

1. Completar Phase 1.
2. Completar Phase 2.
3. Completar Phase 3.
4. Validar contagens antes de qualquer documentacao final.

### Incremento 2: Stage futuro e documentacao de versionamento

1. Completar Phase 4.
2. Completar Phase 5.
3. Confirmar que o comando preparado usa apenas paths explicitos.

### Incremento 3: Preparacao do walk lab e fechamento

1. Completar Phase 6.
2. Completar Phase 7.
3. Completar Phase 8.
4. Parar em Phase 9 para validacao humana.

## Final Notes

- Esta lista nao autoriza implementacao nesta etapa.
- Esta lista nao autoriza stage imediato.
- Esta lista nao autoriza commit ou push.
- `.uid` permanece fora do escopo.
- `.gitignore` permanece inalterado.
- A feature 016 nao cria caminhada articulada oficial, walk cycle oficial, animacao oficial ou gameplay.
