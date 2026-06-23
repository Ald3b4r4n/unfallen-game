# Feature Specification: Review Official Rig Imports V1

**Feature Branch**: `014-review-official-rig-imports-v1`  
**Created**: 2026-06-23  
**Status**: Draft  
**Input**: User description: "Criar a feature Review Official Rig Imports V1 para auditar, revisar e documentar os 32 official_asset_imports ligados ao rig técnico validado do personagem Antônio Rafael, sem remover, stagear, versionar ou alterar esses arquivos nesta etapa."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Auditar imports oficiais do rig (Priority: P1)

Como mantenedor do projeto, quero identificar e revisar exatamente os 32 `.import` oficiais ligados ao rig técnico validado para entender quais arquivos pertencem ao pipeline oficial e quais decisões ainda dependem de validação humana.

**Why this priority**: Esses arquivos foram classificados como `critical` e `needs_human_review`. A auditoria precisa vir antes de qualquer decisão sobre versionar, ignorar ou manter localmente.

**Independent Test**: Pode ser testado revisando a lista de 32 arquivos avaliados e confirmando que cada item possui arquivo de origem, relação com o rig, risco e recomendação documentados.

**Acceptance Scenarios**:

1. **Given** existem `.import` oficiais do rig não rastreados, **When** a auditoria da feature é executada, **Then** os 32 itens esperados são listados e avaliados individualmente.
2. **Given** um `.import` pertence a um preview ou parte oficial do rig, **When** a revisão é documentada, **Then** sua relação com o rig técnico validado fica explícita.
3. **Given** um `.import` não puder ser relacionado ao rig validado, **When** a revisão é documentada, **Then** ele é marcado como fora do escopo ou pendente de revisão humana.

---

### User Story 2 - Recomendar decisão futura segura (Priority: P2)

Como mantenedor do projeto, quero uma recomendação por arquivo e por grupo para decidir posteriormente se os `.import` oficiais do rig devem ser mantidos locais, versionados, ignorados ou tratados em outra feature.

**Why this priority**: A decisão errada pode quebrar reprodutibilidade visual no Godot, confundir assets oficiais com resíduos ou gerar ruído no repositório.

**Independent Test**: Pode ser testado verificando se cada item revisado possui uma recomendação clara e se os totais por recomendação batem com o manifesto.

**Acceptance Scenarios**:

1. **Given** um `.import` oficial tem origem PNG existente e relação clara com o rig, **When** a revisão é concluída, **Then** ele recebe risco e recomendação futura documentados.
2. **Given** um `.import` oficial pode afetar reprodutibilidade visual no Godot, **When** a revisão é concluída, **Then** ele permanece pendente de decisão humana ou é recomendado para versionamento futuro controlado.
3. **Given** uma decisão futura envolver `.gitignore`, **When** a documentação final é revisada, **Then** ela deixa claro que a feature atual não altera `.gitignore`.

---

### User Story 3 - Registrar auditoria sem alterar runtime (Priority: P3)

Como mantenedor do projeto, quero documentação e manifesto que comprovem que a revisão não alterou `.import`, `.uid`, Player, cenas, scripts, sprites idle, assets oficiais, animações ou gameplay.

**Why this priority**: A feature é de revisão e política técnica, não de mudança de runtime. A rastreabilidade evita que arquivos críticos sejam incluídos em commits acidentais.

**Independent Test**: Pode ser testado lendo os documentos finais e confirmando que os totais, riscos, recomendações e confirmações de segurança estão presentes.

**Acceptance Scenarios**:

1. **Given** a revisão foi concluída, **When** a documentação técnica é lida, **Then** ela informa total avaliado, totais por recomendação, riscos e pendências.
2. **Given** a feature termina, **When** o gate humano é apresentado, **Then** ele confirma que nenhum `.import`, `.uid`, `.gitignore`, Player, cena, script, sprite idle ou asset oficial foi alterado.

### Edge Cases

- Se menos ou mais de 32 `official_asset_imports` forem encontrados, a divergência deve ser registrada e a feature deve parar para revisão humana antes de qualquer recomendação final.
- Se um `.import` estiver em área sensível mas não tiver PNG de origem correspondente, ele deve ser marcado como pendente de revisão humana.
- Se um arquivo aparentar ser de rig mas tiver origem desconhecida, ele deve ser classificado como `official_import_excluded_unknown_origin` ou equivalente e não pode receber recomendação de versionamento automático.
- Se `.uid` aparecer na auditoria, ele deve permanecer fora do escopo desta feature.
- Se houver diff em Player, cena de rig, scripts, sprites idle, assets oficiais ou `.gitignore`, a feature deve registrar a falha e parar.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A feature MUST auditar exatamente os `.import` classificados como `official_asset_imports` pela política da feature 012.
- **FR-002**: A feature MUST confirmar o total esperado de 32 `official_asset_imports` antes de qualquer conclusão.
- **FR-003**: A feature MUST registrar, para cada `.import` avaliado, o caminho do `.import` e o caminho do arquivo de origem relacionado.
- **FR-004**: A feature MUST confirmar se o arquivo de origem relacionado existe.
- **FR-005**: A feature MUST registrar a relação de cada item com o rig técnico validado, com partes do rig ou com previews oficiais.
- **FR-006**: A feature MUST atribuir risco a cada item revisado usando os níveis `low`, `medium`, `high` ou `critical`.
- **FR-007**: A feature MUST atribuir status a cada item revisado usando os status permitidos pela solicitação da feature.
- **FR-008**: A feature MUST atribuir recomendação futura a cada item revisado, sem executar essa recomendação nesta feature.
- **FR-009**: A feature MUST criar `docs/technical/official-rig-imports-review-v1.md`.
- **FR-010**: A feature MUST criar `docs/technical/official-rig-imports-review-manifest-v1.md`.
- **FR-011**: A documentação MUST registrar total avaliado, total recomendado para manter local, total recomendado para versionar futuramente, total recomendado para ignorar futuramente e total pendente para revisão humana.
- **FR-012**: A feature MAY atualizar documentos correlatos somente para registrar o resultado da revisão e a decisão futura recomendada.
- **FR-013**: A feature MUST NOT remover, mover, editar, stagear ou versionar arquivos `.import`.
- **FR-014**: A feature MUST NOT remover, mover, editar, stagear ou versionar arquivos `.uid`.
- **FR-015**: A feature MUST NOT alterar `.gitignore`.
- **FR-016**: A feature MUST NOT alterar `Player.tscn`, `AntonioRafaelRigLab.tscn`, scripts, sprites idle aprovados ou assets oficiais do rig.
- **FR-017**: A feature MUST NOT criar walk cycle, animação oficial, gameplay ou integração ao Player.
- **FR-018**: A feature MUST end with a human gate before any commit or push.

### Key Entities

- **Official Rig Import**: Arquivo `.import` não rastreado ligado a asset oficial do rig técnico validado do personagem Antônio Rafael.
- **Related Source Asset**: Arquivo PNG de origem associado ao `.import` revisado.
- **Rig Asset Relationship**: Classificação que indica se o item se relaciona com parte do rig, preview oficial, recomposição, backup de refinamento ou outro artefato do rig.
- **Review Decision**: Registro com risco, status, recomendação futura e observação para cada item avaliado.
- **Sensitive Official Area**: Área do projeto que pode ser lida para auditoria, mas não alterada nesta feature.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% dos 32 `official_asset_imports` esperados são avaliados ou uma divergência é registrada antes da conclusão.
- **SC-002**: 100% dos itens avaliados possuem caminho, origem relacionada, existência da origem, risco, status, recomendação e observação documentados.
- **SC-003**: 0 arquivos `.import` são removidos, movidos, editados, stageados ou versionados.
- **SC-004**: 0 arquivos `.uid` são removidos, movidos, editados, stageados ou versionados.
- **SC-005**: 0 alterações ocorrem em `.gitignore`, Player, cena de rig, scripts, sprites idle aprovados ou assets oficiais do rig.
- **SC-006**: A documentação final apresenta totais por recomendação e uma decisão sugerida para `.gitignore`.
- **SC-007**: A feature termina sem commit automático e sem push.

## Assumptions

- A feature 012 continua sendo a fonte de verdade para a classificação inicial `official_asset_imports: 32`.
- A feature 013 já tratou os `prototype_imports`, então esta feature não deve reabrir decisões sobre protótipos rejeitados.
- Os `.import` oficiais do rig podem ser lidos e auditados, mas não alterados.
- A decisão final de versionar, ignorar ou manter localmente qualquer `.import` oficial será feita em gate humano ou feature posterior.
- Qualquer divergência de contagem, origem ou relação com o rig deve resultar em revisão humana antes de qualquer recomendação final.
