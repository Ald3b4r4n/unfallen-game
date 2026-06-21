# Feature Specification: Godot Import UID Policy V1

**Feature Branch**: `012-godot-import-uid-policy-v1`  
**Created**: 2026-06-21  
**Status**: Draft  
**Input**: User description: "Criar uma feature para auditar e definir a politica do projeto Unfallen sobre arquivos `.import` e `.uid` do Godot, sem versionamento em massa, sem apagar arquivos, sem alterar `.gitignore` sem plano e aprovacao humana, e sem alterar Player, cenas, scripts ou assets oficiais."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Auditar arquivos Godot pendentes (Priority: P1)

Como mantenedor do projeto, quero saber exatamente quantos arquivos `.import` e `.uid` estao pendentes fora do Git para decidir uma politica sem risco de versionamento em massa.

**Why this priority**: A contagem e a separacao entre `.import` e `.uid` sao a base da decisao. Sem essa auditoria, qualquer politica pode incluir arquivos errados, obsoletos ou ligados a prototipos rejeitados.

**Independent Test**: Pode ser testado comparando a lista de arquivos nao rastreados com o inventario da feature, confirmando totais separados para `.import` e `.uid` sem staging, commit, push, remocao ou alteracao de arquivos sensiveis.

**Acceptance Scenarios**:

1. **Given** existem arquivos `.import` e `.uid` nao rastreados no projeto, **When** a auditoria da feature for executada, **Then** o resultado apresenta totais separados para `.import` e `.uid`.
2. **Given** existem arquivos de origem diferente, **When** a auditoria registrar cada item, **Then** cada arquivo e associado ao caminho original relacionado quando isso puder ser inferido.

---

### User Story 2 - Classificar origem e risco (Priority: P2)

Como mantenedor do projeto, quero classificar `.import` e `.uid` por origem e risco para distinguir arquivos relacionados a assets oficiais, prototipos, arquivo historico, sobras antigas ou origem desconhecida.

**Why this priority**: A politica correta depende de saber se um arquivo pertence a asset oficial validado, prototipo rejeitado, arquivo arquivado ou sobra local. Esses grupos tem riscos diferentes.

**Independent Test**: Pode ser testado revisando o inventario da feature e confirmando que cada grupo esperado possui quantidade, exemplos, risco, recomendacao e decisao pendente.

**Acceptance Scenarios**:

1. **Given** um `.import` esta associado a sprite idle aprovado ou rig tecnico validado, **When** ele for classificado, **Then** ele aparece em grupo de asset oficial com risco e decisao pendente.
2. **Given** um `.import` esta associado a walk candidate ou prototype antigo, **When** ele for classificado, **Then** ele aparece em grupo de prototipo ou sobra historica, sem ser tratado como asset oficial.
3. **Given** um `.uid` esta associado a script ou cena oficial, **When** ele for classificado, **Then** a relacao com o arquivo oficial e registrada para decisao humana.

---

### User Story 3 - Documentar politica recomendada (Priority: P3)

Como mantenedor do projeto, quero uma recomendacao documentada para `.import`, `.uid` e `.gitignore` para que o repositorio tenha uma regra clara antes de qualquer commit ou limpeza.

**Why this priority**: A documentacao reduz risco de decisoes ad hoc, evita `git add .` acidental e cria base para uma feature posterior de aplicacao da politica.

**Independent Test**: Pode ser testado lendo a documentacao criada e confirmando que ela recomenda o que versionar, ignorar, manter local, remover futuramente ou tratar em feature separada, sem executar essas decisoes automaticamente.

**Acceptance Scenarios**:

1. **Given** a auditoria e classificacao foram concluidas, **When** a politica for documentada, **Then** a recomendacao explica se `.gitignore` deve ser alterado no futuro e por qual motivo.
2. **Given** existem arquivos de risco alto ou origem incerta, **When** a feature terminar, **Then** esses arquivos permanecem marcados como pendentes ou para feature separada, sem versionamento em massa.

---

### Edge Cases

- Se nao houver `.import` ou `.uid` nao rastreado no momento da auditoria, a feature deve registrar total zero e manter a politica recomendada baseada no estado rastreado existente.
- Se um `.import` aponta para asset que nao existe mais, ele deve ser classificado como `stale_imports` ou `unknown_imports`, nao removido automaticamente.
- Se um `.uid` aponta para script ou cena oficial, ele deve ser tratado como sensivel e exigir decisao humana antes de qualquer commit.
- Se o projeto ja versiona alguns `.import` ou `.uid`, a feature deve distinguir arquivos ja versionados de untracked pendentes.
- Se `.gitignore` ja possui regra sobre `.import` ou `.uid`, a feature deve registrar a regra atual e avaliar se ela esta adequada.
- Se um arquivo esta ligado a prototipo rejeitado ou arquivo historico, ele nao deve ser promovido para asset oficial.
- Se a origem de um arquivo nao puder ser inferida, ele deve ficar em `unknown_imports` ou `unknown_uid_files`.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A feature MUST auditar arquivos `.import` nao rastreados separadamente de arquivos `.uid` nao rastreados.
- **FR-002**: A feature MUST contar arquivos `.import` e `.uid` atualmente nao rastreados.
- **FR-003**: A feature MUST identificar se o repositorio ja possui arquivos `.import` ou `.uid` versionados.
- **FR-004**: A feature MUST relacionar cada `.import` ou `.uid` ao arquivo original associado quando a relacao puder ser inferida.
- **FR-005**: A feature MUST classificar `.import` nos grupos `official_asset_imports`, `prototype_imports`, `archive_imports`, `stale_imports` e `unknown_imports`.
- **FR-006**: A feature MUST classificar `.uid` nos grupos `official_uid_files`, `prototype_uid_files`, `stale_uid_files` e `unknown_uid_files`.
- **FR-007**: A feature MUST registrar quantidade, exemplos, arquivo relacionado, risco, recomendacao e decisao pendente para cada grupo.
- **FR-008**: A feature MUST responder se algum `.import` esta relacionado a Base Idle Oficial V1.
- **FR-009**: A feature MUST responder se algum `.import` esta relacionado ao rig tecnico validado.
- **FR-010**: A feature MUST responder se algum `.uid` esta relacionado a script ou cena oficial.
- **FR-011**: A feature MUST avaliar se `.gitignore` ja trata `.import` e `.uid`.
- **FR-012**: A feature MUST documentar politica recomendada usando recomendacoes como `version_later`, `ignore_later`, `keep_local`, `remove_later`, `needs_human_review` e `separate_feature`.
- **FR-013**: A feature MUST create or update documentation planned for `docs/technical/godot-import-uid-policy-v1.md`.
- **FR-014**: A feature MUST update cleanup audit/inventory documentation when policy conclusions affect prior untracked groups.
- **FR-015**: A feature MUST NOT version `.import` or `.uid` in bulk.
- **FR-016**: A feature MUST NOT delete `.import` or `.uid` without explicit human approval.
- **FR-017**: A feature MUST NOT alter `.gitignore` without a later plan, justification and explicit human approval.
- **FR-018**: A feature MUST NOT alter `Player.tscn`, `AntonioRafaelRigLab.tscn`, Player scripts, rig scripts, approved idle sprites or official rig assets.
- **FR-019**: A feature MUST NOT use `git add .`, `git add -A`, `git commit -am` or `git clean`.
- **FR-020**: A feature MUST end with a human gate before any commit or push.

### Key Entities

- **Godot Import File**: Arquivo `.import` gerado pelo Godot para registrar configuracoes de importacao de um asset.
- **Godot UID File**: Arquivo `.uid` gerado pelo Godot para identificar recursos/scripts/cenas.
- **Related Source File**: Asset, script ou cena ao qual um `.import` ou `.uid` parece estar associado.
- **Policy Group**: Classificacao aplicada a um arquivo auditado, indicando origem provavel e risco.
- **Policy Recommendation**: Decisao recomendada para um grupo ou arquivo, como versionar futuramente, ignorar, manter local, remover futuramente ou tratar em feature separada.
- **Sensitive Area**: Area do repositorio que nao deve ser alterada sem plano e aprovacao humana, incluindo Player, cenas oficiais, scripts, sprites idle aprovados, rig oficial, `.gitignore` e `.specify/feature.json`.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% dos arquivos `.import` nao rastreados sao contados e classificados ou registrados como origem desconhecida.
- **SC-002**: 100% dos arquivos `.uid` nao rastreados sao contados e classificados ou registrados como origem desconhecida.
- **SC-003**: 100% dos grupos esperados recebem risco, recomendacao e decisao pendente.
- **SC-004**: A documentacao final responde claramente se `.gitignore` deve ou nao ser alterado em feature futura.
- **SC-005**: Nenhum `.import` ou `.uid` e versionado em massa durante a feature.
- **SC-006**: Nenhum arquivo e apagado definitivamente durante a feature.
- **SC-007**: Nenhum Player, cena, script, sprite idle aprovado ou asset oficial e alterado durante a feature.
- **SC-008**: A validacao final apresenta totais, grupos, politica recomendada, pendencias e confirmacao de ausencia de commit automatico e push.

## Assumptions

- A branch anterior `011-archive-walk-prototypes-v1` foi enviada com sucesso e deixou `.import`, `.uid`, specs antigas e manifesto antigo fora do escopo.
- Os arquivos `.import` e `.uid` existentes podem incluir mistura de assets oficiais, rig validado, prototipos rejeitados e sobras locais.
- A primeira entrega desta feature e documental e de auditoria; aplicacao da politica pode exigir feature separada.
- `.gitignore` so deve ser alterado em etapa posterior se a politica for aprovada explicitamente.
- Commits e push dependem de aprovacao humana explicita apos a validacao.
