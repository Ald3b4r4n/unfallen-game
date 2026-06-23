# Feature Specification: Review Rig Articulation Preview Import V1

**Feature Branch**: `015-review-rig-articulation-preview-import-v1`  
**Created**: 2026-06-23  
**Status**: Draft  
**Input**: User description: "Criar a feature Review Rig Articulation Preview Import V1 para auditar, revisar e documentar exclusivamente o import adicional antonio_rafael_rig_articulation_test_v1_preview.png.import, sem remover, stagear, versionar ou alterar .import, .uid, .gitignore, Player, cenas, scripts, sprites idle ou assets oficiais."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Auditar o import adicional do preview de articulacao (Priority: P1)

Como mantenedor do projeto, quero revisar exclusivamente o arquivo `antonio_rafael_rig_articulation_test_v1_preview.png.import` para entender se ele pertence ao conjunto tecnico do rig ou se deve permanecer separado dos 32 imports oficiais revisados anteriormente.

**Why this priority**: A feature 014 encontrou esse arquivo fora do snapshot de `32 official_asset_imports`. Ele precisa de decisao propria para evitar misturar o preview de articulacao com o grupo oficial sem revisao humana.

**Independent Test**: Pode ser testado verificando se a documentacao final registra o caminho do candidato, o PNG de origem, a existencia do PNG, a relacao com a Rig Articulation Test V1 e a decisao futura recomendada.

**Acceptance Scenarios**:

1. **Given** existe o candidato adicional de `.import`, **When** a auditoria da feature e executada, **Then** o candidato e listado individualmente com origem, relacao, risco, status e recomendacao.
2. **Given** o PNG de origem existe, **When** a revisao e documentada, **Then** a documentacao registra que o item se relaciona ao preview tecnico/laboratorial da Rig Articulation Test V1.
3. **Given** o candidato nao fazia parte dos 32 imports da feature 014, **When** a revisao e concluida, **Then** essa diferenca fica explicita e depende de gate humano antes de qualquer agrupamento futuro.

---

### User Story 2 - Recomendar decisao futura segura (Priority: P2)

Como mantenedor do projeto, quero uma recomendacao clara sobre o destino futuro desse `.import` adicional para decidir se ele deve permanecer local, ser versionado futuramente, ser ignorado futuramente, ser agrupado aos 32 imports oficiais ou continuar pendente de revisao humana.

**Why this priority**: O arquivo pode ajudar a reprodutibilidade visual do preview de articulacao no Godot, mas tambem pode gerar confusao se for tratado como evidencia de walk cycle oficial.

**Independent Test**: Pode ser testado lendo o manifesto e confirmando que existe uma recomendacao unica, um status permitido, um risco atribuido e uma decisao sugerida para `.gitignore`.

**Acceptance Scenarios**:

1. **Given** o candidato esta ligado a um preview tecnico do rig, **When** a revisao define uma recomendacao, **Then** a recomendacao nao executa remocao, versionamento, ignore rule ou staging nesta feature.
2. **Given** a decisao futura pode envolver os 32 imports oficiais, **When** a documentacao final e lida, **Then** ela indica se o item deve ou nao ser agrupado futuramente com eles.
3. **Given** uma decisao futura envolver `.gitignore`, **When** a revisao termina, **Then** fica claro que `.gitignore` permanece inalterado nesta feature.

---

### User Story 3 - Registrar que o runtime nao foi alterado (Priority: P3)

Como mantenedor do projeto, quero uma trilha documental que prove que essa revisao nao alterou Player, cena de rig, scripts, sprites idle, assets oficiais, gameplay, walk cycle ou animacao oficial.

**Why this priority**: O preview de articulacao e material tecnico de laboratorio. A revisao nao pode promover esse material a runtime nem sugerir que ja existe caminhada articulada oficial.

**Independent Test**: Pode ser testado conferindo as confirmacoes de seguranca e verificando que os documentos finais dizem explicitamente que nao houve walk cycle, animacao oficial, gameplay ou integracao ao Player.

**Acceptance Scenarios**:

1. **Given** a feature termina, **When** o gate humano e apresentado, **Then** ele confirma que nenhum `.import`, `.uid`, `.gitignore`, Player, cena, script, sprite idle ou asset oficial foi alterado.
2. **Given** o preview representa um teste tecnico, **When** a documentacao e revisada, **Then** ela declara que ainda nao existe caminhada articulada oficial no projeto.

### Edge Cases

- Se o candidato adicional nao existir mais, a feature deve registrar a divergencia e parar para revisao humana antes de recomendar destino futuro.
- Se o PNG de origem estiver ausente, o candidato deve ser marcado como `articulation_preview_import_excluded_unknown_origin` ou equivalente e permanecer pendente de revisao humana.
- Se o candidato estiver presente mas apontar para material fora da Rig Articulation Test V1, a feature deve registrar a relacao desconhecida e nao agrupa-lo aos imports oficiais.
- Se houver diff em `.import`, `.uid`, `.gitignore`, Player, cena de rig, scripts, sprites idle ou assets oficiais, a feature deve registrar falha de escopo e parar.
- Se existirem outros `.import` fora do escopo, eles devem permanecer fora desta feature.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A feature MUST auditar exclusivamente o arquivo `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import`.
- **FR-002**: A feature MUST registrar o caminho do `.import` candidato e o caminho do PNG de origem relacionado.
- **FR-003**: A feature MUST confirmar se o PNG de origem existe.
- **FR-004**: A feature MUST documentar a relacao do candidato com a Rig Articulation Test V1.
- **FR-005**: A feature MUST documentar a relacao do candidato com o rig tecnico validado.
- **FR-006**: A feature MUST confirmar que o preview e documentacao tecnica/laboratorial, nao asset runtime do Player.
- **FR-007**: A feature MUST confirmar que o candidato nao e walk cycle oficial.
- **FR-008**: A feature MUST confirmar que o candidato nao e caminhada articulada oficial.
- **FR-009**: A feature MUST atribuir risco usando `low`, `medium`, `high` ou `critical`.
- **FR-010**: A feature MUST atribuir um dos status permitidos para o candidato revisado.
- **FR-011**: A feature MUST atribuir recomendacao futura sem executar essa recomendacao nesta feature.
- **FR-012**: A feature MUST criar `docs/technical/rig-articulation-preview-import-review-v1.md`.
- **FR-013**: A feature MUST criar `docs/technical/rig-articulation-preview-import-review-manifest-v1.md`.
- **FR-014**: A feature MAY atualizar documentos correlatos apenas para registrar o resultado desta revisao.
- **FR-015**: A feature MUST NOT remover, mover, editar, stagear ou versionar arquivos `.import`.
- **FR-016**: A feature MUST NOT remover, mover, editar, stagear ou versionar arquivos `.uid`.
- **FR-017**: A feature MUST NOT alterar `.gitignore`.
- **FR-018**: A feature MUST NOT alterar `Player.tscn`, `AntonioRafaelRigLab.tscn`, scripts, sprites idle aprovados ou assets oficiais do rig.
- **FR-019**: A feature MUST NOT criar caminhada articulada, walk cycle, animacao oficial, gameplay ou integracao ao Player.
- **FR-020**: A feature MUST terminar com gate humano antes de qualquer commit ou push.

### Key Entities

- **Articulation Preview Import Candidate**: O arquivo `.import` adicional encontrado pela feature 014 e ligado ao preview da Rig Articulation Test V1.
- **Related Source PNG**: O PNG `antonio_rafael_rig_articulation_test_v1_preview.png` associado ao candidato `.import`.
- **Review Decision**: Registro contendo risco, status, recomendacao futura e observacao do candidato revisado.
- **Sensitive Official Area**: Areas que podem ser lidas para auditoria, mas nao alteradas nesta feature, incluindo Player, cena de rig, scripts, sprites idle e assets oficiais.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% do unico candidato definido e avaliado ou uma divergencia e registrada antes da conclusao.
- **SC-002**: O candidato revisado possui caminho, origem relacionada, existencia da origem, relacao com rig, risco, status, recomendacao e observacao documentados.
- **SC-003**: 0 arquivos `.import` sao removidos, movidos, editados, stageados ou versionados.
- **SC-004**: 0 arquivos `.uid` sao removidos, movidos, editados, stageados ou versionados.
- **SC-005**: 0 alteracoes ocorrem em `.gitignore`, Player, cena de rig, scripts, sprites idle aprovados ou assets oficiais do rig.
- **SC-006**: A documentacao final declara explicitamente que ainda nao existe caminhada articulada oficial, walk cycle oficial, animacao oficial ou gameplay criado por esta feature.
- **SC-007**: A documentacao final informa se o candidato deve ser agrupado futuramente com os 32 imports oficiais, tratado em feature separada, mantido local, versionado futuramente, ignorado futuramente ou mantido pendente.
- **SC-008**: A feature termina sem commit automatico e sem push.

## Assumptions

- A feature 014 continua sendo a fonte de verdade para a descoberta do candidato adicional fora do snapshot de 32 imports oficiais.
- O candidato de `.import` pode ser lido e auditado, mas nao alterado.
- A decisao final de versionar, ignorar, manter local ou agrupar o candidato com os 32 imports oficiais sera feita em gate humano ou feature posterior.
- O preview da Rig Articulation Test V1 permanece material tecnico de laboratorio, nao animacao oficial e nao Player runtime.
- Qualquer divergencia de existencia, origem ou relacao com o rig deve resultar em revisao humana antes de qualquer recomendacao final.
