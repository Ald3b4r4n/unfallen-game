# Feature Specification: Cleanup Untracked Prototypes V1

**Feature Branch**: `010-cleanup-untracked-prototypes`  
**Created**: 2026-06-21  
**Status**: Draft  
**Input**: User description: "Criar uma feature de auditoria e limpeza seletiva para classificar os arquivos não rastreados antigos do projeto Unfallen depois do push seguro da branch 009, sem commitar em massa, sem remover arquivos sem aprovação humana e sem push."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Inventariar arquivos não rastreados (Priority: P1)

Como mantenedor do projeto, quero uma lista completa e revisável dos arquivos não rastreados antigos para entender o tamanho real da pendência antes de qualquer ação de limpeza.

**Why this priority**: Sem inventário completo, qualquer remoção, arquivamento ou versionamento teria risco alto de perder material útil ou incluir arquivos indevidos.

**Independent Test**: Pode ser testado conferindo se todos os arquivos não rastreados conhecidos aparecem no inventário ou em grupos explícitos, sem que nenhum arquivo seja removido, movido ou commitado.

**Acceptance Scenarios**:

1. **Given** o repositório possui arquivos não rastreados antigos, **When** a auditoria for executada, **Then** a documentação lista a quantidade total encontrada e agrupa os arquivos por categoria.
2. **Given** existe um arquivo de origem desconhecida, **When** ele for auditado, **Then** ele aparece em um grupo de origem incerta em vez de ser removido ou versionado automaticamente.

---

### User Story 2 - Classificar risco e destino recomendado (Priority: P2)

Como mantenedor do projeto, quero que cada grupo de arquivos seja classificado por risco e destino recomendado para decidir com segurança o que pode ser mantido, arquivado, ignorado, removido ou tratado em outra feature.

**Why this priority**: A classificação reduz o risco de misturar protótipos antigos, arquivos gerados e assets úteis em um único commit sem revisão.

**Independent Test**: Pode ser testado revisando a documentação e verificando que cada grupo esperado possui função, risco, recomendação e pendência de decisão humana.

**Acceptance Scenarios**:

1. **Given** há candidatos de caminhada, protótipos, arquivos gerados e specs antigas, **When** a classificação for registrada, **Then** cada grupo recebe uma recomendação explícita de manter, arquivar, ignorar, remover, versionar futuramente ou tratar separadamente.
2. **Given** um grupo contém arquivos sensíveis do Player, sprites idle aprovados ou rig, **When** ele for classificado, **Then** a recomendação preserva esses arquivos fora de qualquer alteração automática.

---

### User Story 3 - Registrar decisões e próximos passos seguros (Priority: P3)

Como mantenedor do projeto, quero uma documentação de auditoria que indique próximos commits seguros e pendências para aprovação humana antes de qualquer limpeza real.

**Why this priority**: O projeto precisa preservar histórico útil sem bloquear o push dos marcos já versionados nem introduzir ruído por commits grandes e pouco auditáveis.

**Independent Test**: Pode ser testado conferindo se a documentação final apresenta recomendações separadas, arquivos críticos, grupos pendentes e um gate humano antes de qualquer ação destrutiva ou commit.

**Acceptance Scenarios**:

1. **Given** a auditoria foi concluída, **When** o relatório final for apresentado, **Then** ele informa quantidade total, grupos classificados, riscos e recomendações de próximos passos.
2. **Given** há arquivos candidatos a commit futuro, **When** a auditoria termina, **Then** eles aparecem como candidatos condicionais, não como arquivos aprovados automaticamente.

---

### Edge Cases

- Se não houver arquivos não rastreados no momento da auditoria, a documentação deve registrar total zero e encerrar sem recomendar limpeza.
- Se o próprio inventário temporário aparecer como arquivo não rastreado durante a coleta, ele deve ser identificado como temporário e removido ou excluído da contagem final versionável.
- Se arquivos tiverem origem incerta, eles devem ir para `unknown_origin` e aguardar decisão humana.
- Se aparecerem alterações em `Player.tscn`, sprites idle aprovados ou scripts do Player, elas devem ser registradas como risco crítico e não devem ser incluídas nesta feature.
- Se arquivos de ferramenta forem necessários para o editor, mas sua política de versionamento não estiver clara, eles devem ser classificados para avaliação posterior, não commitados em massa.
- Se specs antigas parecerem conter histórico útil, elas devem ser recomendadas para revisão individual, não removidas automaticamente.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A feature MUST registrar o estado pós-push da branch anterior, incluindo que os commits principais já foram enviados com segurança e que os arquivos não rastreados antigos não foram enviados.
- **FR-002**: A feature MUST produzir uma auditoria dos arquivos não rastreados existentes no repositório no momento da execução.
- **FR-003**: A feature MUST classificar os arquivos não rastreados em grupos, incluindo `walk_candidates`, `walk_prototypes`, `godot_import_files`, `godot_uid_files`, `old_specs`, `rig_assets`, `preview_assets`, `manifest_files`, `temporary_audit_files` e `unknown_origin` quando aplicável.
- **FR-004**: A feature MUST indicar, para cada grupo, função provável, risco, recomendação e necessidade de aprovação humana.
- **FR-005**: A feature MUST destacar arquivos e áreas sensíveis, incluindo estado local do Spec Kit, Player runtime, sprites idle aprovados e assets de rig.
- **FR-006**: A feature MUST documentar quais arquivos ou grupos não devem ser commitados automaticamente.
- **FR-007**: A feature MUST documentar quais arquivos ou grupos podem ser candidatos a commit futuro, desde que sejam revisados individualmente ou por grupo aprovado.
- **FR-008**: A feature MUST documentar quais arquivos ou grupos podem ser candidatos a arquivamento histórico, manutenção local, futura regra de ignorar ou remoção.
- **FR-009**: A feature MUST criar uma documentação de auditoria em `docs/technical/untracked-cleanup-audit-v1.md`.
- **FR-010**: A feature MUST criar um inventário versionável em `docs/technical/untracked-cleanup-inventory-v1.md` se o inventário for útil para revisão humana.
- **FR-011**: A feature MAY criar documentação auxiliar de higiene do repositório em `docs/project/repository-hygiene.md` se houver regras recorrentes a registrar.
- **FR-012**: A feature MUST NOT remover, mover, renomear ou sobrescrever arquivos não rastreados sem aprovação humana explícita.
- **FR-013**: A feature MUST NOT incluir arquivos em commit de forma massiva ou sem classificação individual/grupal.
- **FR-014**: A feature MUST NOT alterar `Player.tscn`, sprites idle aprovados, scripts do Player, cenas de rig ou assets de gameplay nesta etapa.
- **FR-015**: A feature MUST NOT fazer push.
- **FR-016**: A feature MUST terminar com gate humano contendo total de arquivos, grupos, arquivos críticos, recomendações e confirmação de que nada foi apagado, commitado ou enviado.

### Key Entities

- **Arquivo Não Rastreado**: Arquivo presente no workspace que ainda não está versionado; atributos relevantes incluem caminho, tipo, origem provável, risco e destino recomendado.
- **Grupo de Auditoria**: Categoria usada para agrupar arquivos por função ou origem provável, como protótipos, arquivos gerados, specs antigas ou manifests.
- **Classificação de Risco**: Nível qualitativo que indica impacto potencial de versionar, ignorar, arquivar ou remover o grupo.
- **Destino Recomendado**: Ação proposta para revisão humana, como manter fora do Git, versionar futuramente, arquivar, remover, ignorar ou tratar em feature separada.
- **Documento de Auditoria**: Relatório versionável que registra estado, grupos, riscos, recomendações e pendências.
- **Inventário Versionável**: Lista organizada dos arquivos encontrados, preparada para revisão humana sem mover ou apagar os arquivos auditados.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% dos arquivos não rastreados encontrados no momento da auditoria aparecem no inventário ou em um grupo explicitamente contabilizado.
- **SC-002**: 100% dos grupos encontrados possuem recomendação clara de destino antes de qualquer limpeza real.
- **SC-003**: Nenhum arquivo é removido, movido, renomeado, sobrescrito, commitado ou enviado durante a etapa de especificação.
- **SC-004**: A auditoria permite identificar em menos de 5 minutos quais grupos não devem ser commitados automaticamente.
- **SC-005**: A auditoria permite identificar em menos de 5 minutos quais grupos são candidatos a revisão futura, arquivamento ou remoção.
- **SC-006**: O gate humano final apresenta quantidade total, grupos, arquivos críticos, recomendações e confirmações de segurança exigidas.

## Assumptions

- A branch anterior já foi enviada com segurança e os commits principais estão no remoto.
- O estado local do Spec Kit pode permanecer modificado e não deve ser tratado automaticamente como arquivo a commitar.
- Os arquivos não rastreados antigos podem conter mistura de protótipos úteis, arquivos gerados pelo editor, artefatos temporários e specs de iteração.
- A limpeza real, remoção definitiva, alteração de regras de ignore ou arquivamento físico de arquivos exigirá aprovação humana posterior.
- A documentação desta feature deve priorizar rastreabilidade e decisões pequenas, não limpeza em lote.
