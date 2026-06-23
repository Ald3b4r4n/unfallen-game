# Feature Specification: Remove Stale Prototype Imports V1

**Feature Branch**: `013-remove-stale-prototype-imports-v1`  
**Created**: 2026-06-21  
**Status**: Draft  
**Input**: User description: "Criar a feature Remove Stale Prototype Imports V1 para auditar e remover com segurança somente os 77 `.import` obsoletos classificados como `prototype_imports`, ligados a protótipos de walk rejeitados/arquivados, sem alterar `.gitignore`, Player, cenas, scripts, sprites idle, rig oficial, `.uid`, `official_asset_imports` ou `official_uid_files`."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Auditar os imports obsoletos de protótipos (Priority: P1)

Como mantenedor do projeto, quero confirmar exatamente quais `.import` pertencem aos `77 prototype_imports` para que a remoção seja limitada aos resíduos técnicos de protótipos antigos de walk.

**Why this priority**: A auditoria é a proteção principal contra remover imports oficiais por engano. Sem ela, a feature poderia tocar em rig validado, sprites aprovados ou arquivos `.uid`.

**Independent Test**: Pode ser testado revisando a lista de `.import` candidatos, confirmando que todos estão classificados como `prototype_imports`, que nenhum `.uid` aparece na lista e que nenhum caminho pertence a `official_asset_imports`.

**Acceptance Scenarios**:

1. **Given** existem `.import` untracked de protótipos antigos, **When** a auditoria da feature é executada, **Then** todos os 77 candidatos esperados são listados para decisão.
2. **Given** um `.import` pertence ao rig técnico validado, **When** a lista de remoção é montada, **Then** esse arquivo é excluído da remoção e marcado como fora do escopo.
3. **Given** um `.uid` aparece como untracked no repositório, **When** a feature classifica os alvos, **Then** esse `.uid` não entra na remoção.

---

### User Story 2 - Remover somente resíduos aprovados (Priority: P2)

Como mantenedor do projeto, quero remover apenas `.import` obsoleto cujo PNG original esteja ausente ou arquivado historicamente, para reduzir ruído local sem afetar assets oficiais.

**Why this priority**: A remoção é útil somente se for precisa e reversível por histórico documental. Ela não deve se transformar em limpeza ampla ou alteração de política global.

**Independent Test**: Pode ser testado comparando a lista de removidos com os critérios de remoção, verificando que cada item removido tinha origem ausente ou arquivada e que nenhum arquivo oficial foi alterado.

**Acceptance Scenarios**:

1. **Given** um `.import` aponta para PNG de walk prototype cujo caminho original não existe mais, **When** todos os critérios de segurança passam, **Then** o arquivo pode ser removido e registrado no manifesto.
2. **Given** um `.import` aponta para asset oficial ou rig validado, **When** os critérios são avaliados, **Then** o arquivo é mantido para revisão humana e não é removido.
3. **Given** um arquivo candidato tem origem incerta, **When** a decisão é registrada, **Then** ele é mantido para revisão humana.

---

### User Story 3 - Documentar a remoção e pendências (Priority: P3)

Como mantenedor do projeto, quero um manifesto e uma documentação técnica da remoção para entender exatamente o que saiu, por que saiu e o que continua pendente.

**Why this priority**: A limpeza mexe em arquivos locais. O projeto precisa preservar rastreabilidade e provar que Player, cenas, scripts, sprites idle, rig oficial, `.uid` e `.gitignore` não foram alterados.

**Independent Test**: Pode ser testado lendo a documentação final e confirmando totais, lista de removidos, itens mantidos, critérios aplicados, confirmações de segurança e ausência de commit/push automático.

**Acceptance Scenarios**:

1. **Given** a remoção segura foi executada, **When** a documentação é revisada, **Then** ela informa total avaliado, total removido, total mantido e motivo de cada decisão.
2. **Given** a feature termina, **When** a validação final é apresentada, **Then** ela confirma que `.gitignore`, Player, cenas, scripts, sprites idle, rig oficial e `.uid` não foram alterados.

### Edge Cases

- Se menos ou mais de 77 `prototype_imports` forem encontrados, a divergência deve ser registrada e a remoção deve parar para revisão humana.
- Se algum candidato estiver dentro de área oficial do rig ou de sprites idle aprovados, ele deve ser excluído da remoção.
- Se o arquivo de origem ainda existir no local original, o `.import` deve ser mantido para revisão humana.
- Se o arquivo de origem não existir, mas também não houver relação clara com protótipo de walk rejeitado/arquivado, o `.import` deve ser mantido para revisão humana.
- Se qualquer `.uid` aparecer na lista de candidatos, ele deve ser excluído e registrado como fora do escopo.
- Se houver qualquer diff em Player, cena de rig, scripts, sprites idle, assets oficiais ou `.gitignore`, a feature deve registrar a falha e parar.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A feature MUST auditar os 77 `.import` classificados como `prototype_imports` pela política da feature 012.
- **FR-002**: A feature MUST confirmar, para cada candidato, o caminho original do `.import` e o arquivo de origem relacionado.
- **FR-003**: A feature MUST confirmar se o arquivo PNG de origem está ausente no caminho original ou foi arquivado em `docs/archive/walk-prototypes-v1/`.
- **FR-004**: A feature MUST remover somente `.import` que cumpra todos os critérios de remoção aprovados.
- **FR-005**: A feature MUST manter para revisão humana qualquer arquivo que não cumpra todos os critérios de remoção.
- **FR-006**: A feature MUST NOT remover `.uid`.
- **FR-007**: A feature MUST NOT remover `official_asset_imports`.
- **FR-008**: A feature MUST NOT remover `official_uid_files`.
- **FR-009**: A feature MUST NOT alterar `.gitignore`.
- **FR-010**: A feature MUST NOT alterar `Player.tscn`, `AntonioRafaelRigLab.tscn`, scripts, sprites idle aprovados ou assets oficiais do rig.
- **FR-011**: A feature MUST NOT criar gameplay, walk cycle, animação oficial ou integração com Player.
- **FR-012**: A feature MUST criar `docs/technical/stale-prototype-imports-removal-v1.md`.
- **FR-013**: A feature MUST criar `docs/technical/stale-prototype-imports-removal-manifest-v1.md`.
- **FR-014**: O manifesto MUST registrar cada `.import` avaliado com caminho original, grupo, origem provável, arquivo de origem relacionado, existência da origem, motivo, status e decisão.
- **FR-015**: A documentação MUST registrar total avaliado, total removido, total mantido para revisão, critérios usados e confirmações de segurança.
- **FR-016**: A feature MAY atualizar `docs/technical/godot-import-uid-policy-v1.md`, `docs/technical/untracked-cleanup-audit-v1.md`, `docs/technical/untracked-cleanup-inventory-v1.md` e `docs/project/repository-hygiene.md` somente para registrar o resultado da remoção.
- **FR-017**: A feature MUST NOT usar `git add .`, `git add -A`, `git commit -am` ou `git clean`.
- **FR-018**: A feature MUST end with a human gate before any commit or push.

### Key Entities

- **Prototype Import Candidate**: Arquivo `.import` untracked ligado a protótipo de walk antigo/rejeitado e classificado como `prototype_imports`.
- **Related Source PNG**: Arquivo PNG original ao qual o `.import` se refere; pode estar ausente no caminho original ou arquivado historicamente.
- **Removal Decision**: Decisão por arquivo indicando se foi removido, mantido para revisão ou excluído por estar fora do escopo.
- **Removal Manifest Entry**: Registro documental de cada arquivo avaliado, com caminho, origem, status, motivo e decisão.
- **Sensitive Official Area**: Área do projeto que não pode ser alterada nesta feature, incluindo Player, cena de rig, scripts, sprites idle aprovados, rig oficial, `.gitignore`, `.uid`, `official_asset_imports` e `official_uid_files`.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% dos `prototype_imports` encontrados são avaliados e recebem decisão documentada.
- **SC-002**: 100% dos `.import` removidos possuem registro no manifesto com motivo e status `removed_stale_prototype_import`.
- **SC-003**: 0 arquivos `.uid` são removidos ou alterados.
- **SC-004**: 0 `official_asset_imports` são removidos ou alterados.
- **SC-005**: 0 arquivos em Player, cena de rig, scripts, sprites idle aprovados, rig oficial ou `.gitignore` são alterados.
- **SC-006**: A documentação final informa total avaliado, total removido, total mantido e lista ou resumo verificável dos arquivos removidos.
- **SC-007**: A feature termina sem commit automático e sem push.

## Assumptions

- A feature 012 foi enviada ao GitHub e documentou `prototype_imports: 77`, `official_asset_imports: 32` e `official_uid_files: 2`.
- Os 77 `prototype_imports` são resíduos técnicos ligados a protótipos de walk rejeitados/arquivados.
- Os PNGs originais dos protótipos foram removidos dos caminhos originais ou arquivados em `docs/archive/walk-prototypes-v1/`.
- A remoção desta feature deve ser pontual por arquivo, nunca por diretório inteiro sem enumeração.
- Qualquer divergência de contagem ou origem deve parar a remoção e exigir revisão humana.
