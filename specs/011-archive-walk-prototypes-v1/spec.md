# Feature Specification: Archive Walk Prototypes V1

**Feature Branch**: `011-archive-walk-prototypes-v1`  
**Created**: 2026-06-21  
**Status**: Draft  
**Input**: User description: "Criar uma feature controlada para arquivar protótipos antigos de walk e previews relacionados, preservando rastreabilidade histórica, sem tratar esses arquivos como assets oficiais e sem alterar Player, cenas, scripts, sprites idle ou assets oficiais."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Identificar protótipos antigos de walk (Priority: P1)

Como mantenedor do projeto, quero identificar com precisão os arquivos classificados como `walk_candidates`, `walk_prototypes` e `preview_assets` para separar o que é histórico/protótipo do que é asset oficial.

**Why this priority**: A identificação precisa evita que protótipos rejeitados ou antigos sejam confundidos com walk cycle oficial, sprites aprovados ou conteúdo de runtime.

**Independent Test**: Pode ser testado comparando a lista da auditoria documental da feature 010 com a lista da feature 011, confirmando que todos os arquivos-alvo foram encontrados, contados e classificados sem alteração em Player, cenas, scripts ou assets oficiais.

**Acceptance Scenarios**:

1. **Given** a auditoria da feature 010 registrou arquivos em `walk_candidates`, `walk_prototypes` e `preview_assets`, **When** a feature 011 auditar esses grupos, **Then** cada grupo é contado e documentado separadamente.
2. **Given** um arquivo parece ser sprite, preview ou import gerado por tentativa antiga, **When** ele for avaliado, **Then** ele é classificado como histórico/protótipo ou marcado para revisão humana, nunca como asset oficial.

---

### User Story 2 - Definir arquivo histórico seguro (Priority: P2)

Como mantenedor do projeto, quero definir um destino histórico seguro para os protótipos antigos para preservar consulta futura sem poluir assets oficiais ou runtime do Player.

**Why this priority**: Arquivar sem critério pode gerar novos imports, misturar protótipos com assets oficiais ou criar confusão sobre o que está aprovado.

**Independent Test**: Pode ser testado revisando a documentação e o manifesto planejado, confirmando que a pasta de arquivo histórico foi justificada, que nenhum arquivo oficial foi alterado e que os protótipos permanecem marcados como não oficiais.

**Acceptance Scenarios**:

1. **Given** existem duas opções de destino histórico, **When** o plano técnico escolher uma delas, **Then** a escolha apresenta justificativa clara sobre rastreabilidade, impacto no Godot e risco de gerar arquivos auxiliares.
2. **Given** um protótipo é arquivado, **When** sua entrada for registrada no manifesto, **Then** o manifesto informa origem, destino, motivo, status não oficial e decisão humana.

---

### User Story 3 - Registrar política e gate humano (Priority: P3)

Como mantenedor do projeto, quero documentação clara dizendo que esses arquivos são históricos e não oficiais, com gate humano antes de qualquer commit, push ou uso futuro.

**Why this priority**: O arquivamento só é seguro se o repositório continuar distinguindo protótipos rejeitados de assets aprovados e se futuras ações forem revisadas por escopo.

**Independent Test**: Pode ser testado lendo a documentação da feature e confirmando que ela proíbe integração ao Player, criação de walk cycle oficial, animação oficial, alteração de assets oficiais e push sem aprovação.

**Acceptance Scenarios**:

1. **Given** os protótipos foram documentados como históricos, **When** a validação final for apresentada, **Then** ela confirma que nenhum arquivo foi tratado como walk cycle oficial.
2. **Given** há arquivos que ainda exigem revisão, **When** a feature terminar, **Then** esses arquivos aparecem como pendentes em vez de serem movidos, removidos ou versionados automaticamente.

---

### Edge Cases

- Se a quantidade encontrada diferir da auditoria anterior, a feature deve registrar a divergência e aguardar decisão humana.
- Se algum arquivo-alvo não existir mais, a feature deve registrar como ausente, não recriar o arquivo.
- Se algum arquivo estiver em área sensível, como Player, sprites idle aprovados, rig oficial ou scripts, ele deve ser marcado como `do_not_archive` ou `needs_human_review`.
- Se arquivar em `res://assets` puder gerar arquivos `.import` desnecessários, o plano deve justificar a escolha ou preferir arquivo histórico fora de assets oficiais.
- Se arquivos `.import` ou `.uid` forem relacionados aos protótipos, eles não devem ser versionados em massa.
- Se a origem de um arquivo for incerta, ele deve ficar em `needs_human_review`.
- Se o arquivo histórico escolhido conflitar com assets oficiais, o arquivamento deve parar para revisão humana.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A feature MUST usar a auditoria documental da feature 010 como referência para os grupos `walk_candidates`, `walk_prototypes` e `preview_assets`.
- **FR-002**: A feature MUST auditar e contar os arquivos de `walk_candidates`, `walk_prototypes` e `preview_assets` antes de qualquer arquivamento.
- **FR-003**: A feature MUST classificar arquivos nas categorias `archive_walk_candidates`, `archive_walk_prototypes`, `archive_preview_assets`, `keep_local`, `needs_human_review` e `do_not_archive`.
- **FR-004**: A feature MUST registrar quantidade, exemplos de caminhos, motivo, destino recomendado, risco e decisão para cada categoria.
- **FR-005**: A feature MUST definir uma pasta de arquivo histórico e justificar a escolha antes de mover qualquer arquivo.
- **FR-006**: A feature MUST preserve rastreabilidade histórica dos protótipos arquivados por meio de manifesto.
- **FR-007**: A feature MUST criar documentação deixando claro que os arquivos arquivados são históricos/protótipos, não assets oficiais.
- **FR-008**: A feature MUST NOT tratar qualquer arquivo arquivado como walk cycle oficial, animação oficial, sprite aprovado ou asset de gameplay.
- **FR-009**: A feature MUST NOT integrar protótipos ao Player runtime.
- **FR-010**: A feature MUST NOT alterar `Player.tscn`, scripts do Player, cenas oficiais, sprites idle aprovados, assets oficiais do rig ou `.gitignore`.
- **FR-011**: A feature MUST NOT apagar arquivos definitivamente.
- **FR-012**: A feature MUST NOT versionar `.import` ou `.uid` em massa.
- **FR-013**: A feature MUST update documentation for `docs/technical/walk-prototypes-archive-v1.md`.
- **FR-014**: A feature MUST update the cleanup audit and inventory documentation to reflect the archive decision status.
- **FR-015**: A feature MUST create an archive manifest if the plan approves a historical archive folder.
- **FR-016**: A feature MUST end with a human gate before commit or push.
- **FR-017**: A feature MUST NOT push changes.
- **FR-018**: A feature MUST NOT commit without explicit human approval after validation.

### Key Entities

- **Walk Candidate**: Arquivo local antigo ligado à tentativa manual/candidata de caminhada; não é asset oficial nem walk cycle aprovado.
- **Walk Prototype**: Arquivo local antigo ligado a protótipo de walk; possui valor histórico, mas não deve entrar em runtime.
- **Preview Asset**: Imagem de preview/export usada para validação ou comparação; não é spritesheet técnico nem asset final.
- **Archive Category**: Categoria de decisão aplicada a um arquivo-alvo, como arquivar, manter localmente, revisar ou não arquivar.
- **Archive Destination**: Local histórico escolhido para preservar protótipos sem misturar com assets oficiais.
- **Archive Manifest**: Registro dos arquivos arquivados, origem, destino, status, motivo e decisão humana.
- **Sensitive Area**: Área que não pode ser alterada nesta feature, incluindo Player, cenas oficiais, scripts, sprites idle aprovados, rig oficial e `.gitignore`.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% dos arquivos classificados na feature 010 como `walk_candidates`, `walk_prototypes` e `preview_assets` são localizados, contabilizados ou registrados como ausentes.
- **SC-002**: 100% dos arquivos avaliados recebem uma categoria de decisão entre arquivar, manter local, revisar ou não arquivar.
- **SC-003**: 100% dos arquivos arquivados, se houver, aparecem no manifesto com origem, destino, motivo e status não oficial.
- **SC-004**: Nenhum arquivo oficial do Player, cenas, scripts, sprites idle aprovados ou rig oficial é alterado.
- **SC-005**: Nenhum protótipo arquivado é descrito como walk cycle oficial, animação oficial ou asset final.
- **SC-006**: Nenhum arquivo é apagado definitivamente.
- **SC-007**: A validação final apresenta quantidades por categoria, documentos criados/atualizados e confirmação de ausência de push.

## Assumptions

- A auditoria da feature 010 é a referência inicial para os totais esperados: 66 `walk_candidates`, 8 `walk_prototypes` e 3 `preview_assets`.
- Os arquivos-alvo são protótipos/histórico de tentativas anteriores e não estão aprovados como arte final.
- A escolha do destino histórico será definida no plano técnico, com preferência por evitar mistura com assets oficiais se os arquivos forem apenas referência histórica.
- Qualquer movimentação física de arquivos só ocorrerá após plano e tarefas aprovados.
- Commit e push continuam dependentes de aprovação humana explícita.
