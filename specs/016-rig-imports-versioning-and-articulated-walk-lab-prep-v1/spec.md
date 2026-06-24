# Feature Specification: Rig Imports Versioning and Articulated Walk Lab Prep V1

**Feature Branch**: `016-rig-imports-versioning-and-articulated-walk-lab-prep-v1`  
**Created**: 2026-06-23  
**Status**: Draft  
**Input**: User description: "Criar a feature Rig Imports Versioning and Articulated Walk Lab Prep V1 para consolidar os imports oficiais do rig tecnico validado, versionar somente imports aprovados com paths explicitos, manter UID e runtime fora do escopo, e preparar a proxima etapa de laboratorio de caminhada articulada experimental."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Consolidar imports oficiais do rig (Priority: P1)

Como mantenedor do projeto, quero consolidar os imports oficiais do rig tecnico ja revisados para que a reproducibilidade do laboratorio validado fique documentada e controlada, sem misturar prototipos rejeitados, UID ou arquivos de runtime.

**Why this priority**: As features 014 e 015 ja separaram os `32 official_asset_imports` e o import adicional do preview de articulacao. Esta feature precisa transformar essa decisao revisada em um marco consolidado, com rastreabilidade e sem stage amplo.

**Independent Test**: Pode ser testado conferindo se os imports avaliados sao exatamente os itens aprovados pelas revisoes 014 e 015, se todos possuem criterio documentado, se os caminhos versionaveis sao listados individualmente e se nenhum `.uid` ou import fora da lista aparece como aprovado.

**Acceptance Scenarios**:

1. **Given** existem 32 imports oficiais do rig revisados, **When** a feature e planejada e executada, **Then** os 32 itens sao revalidados contra os criterios aprovados antes de qualquer versionamento.
2. **Given** existe um import adicional do preview da Rig Articulation Test V1, **When** a feature consolida os imports, **Then** esse item e avaliado separadamente e so entra se cumprir todos os criterios de agrupamento.
3. **Given** existem imports de prototipos, arquivos `.uid` e residuos antigos no working tree, **When** a consolidacao e feita, **Then** eles permanecem fora do escopo e nao sao tratados como assets oficiais.

---

### User Story 2 - Registrar politica final de versionamento dos imports oficiais (Priority: P2)

Como mantenedor do projeto, quero uma documentacao clara que explique quais imports oficiais podem ser versionados, por que eles sao seguros e quais limites continuam valendo para UID, `.gitignore`, assets, cenas e scripts.

**Why this priority**: O repositorio passou por varias auditorias pequenas. Esta feature deve reduzir a dispersao e deixar uma referencia unica para o estado final dos imports oficiais do rig.

**Independent Test**: Pode ser testado lendo a documentacao final e confirmando que ela registra total avaliado, total versionavel, lista de caminhos, criterios usados, exclusoes, riscos remanescentes e confirmacoes de escopo seguro.

**Acceptance Scenarios**:

1. **Given** um revisor quer entender o que foi consolidado, **When** ele abre a documentacao de versionamento, **Then** encontra o total de imports avaliados, o total de imports aprovados e a lista dos caminhos aprovados.
2. **Given** um arquivo `.uid` permanece no working tree, **When** a documentacao e lida, **Then** fica claro que `.uid` esta fora desta feature e nao deve ser versionado por esta decisao.
3. **Given** um import pertence a prototipo rejeitado ou arquivo arquivado, **When** a documentacao e lida, **Then** fica claro que esse import nao faz parte dos imports oficiais do rig.

---

### User Story 3 - Preparar o laboratorio de caminhada articulada experimental (Priority: P3)

Como mantenedor do projeto, quero preparar a proxima etapa `017-articulated-walk-lab-v1` com criterios, limites e referencias claras para que o laboratorio avance sem declarar uma caminhada oficial antes de validacao humana.

**Why this priority**: O projeto precisa mudar de ritmo para uma entrega evolutiva maior. A preparacao do walk lab cria continuidade real, mas preserva o limite de que ainda nao existe walk cycle oficial nem integracao ao Player.

**Independent Test**: Pode ser testado verificando se a documentacao de preparacao descreve objetivo do futuro laboratorio, estado atual do rig, materiais que podem servir como base, arquivos proibidos, criterios visuais e gate humano antes de qualquer oficializacao.

**Acceptance Scenarios**:

1. **Given** a feature termina, **When** a equipe consulta a preparacao do walk lab, **Then** encontra a proxima feature recomendada, os criterios visuais e os limites de escopo para caminhada articulada experimental.
2. **Given** ainda nao ha caminhada articulada oficial no projeto, **When** a documentacao e revisada, **Then** essa ausencia e declarada explicitamente.
3. **Given** o Player runtime permanece separado do laboratorio, **When** a feature e validada, **Then** fica claro que nao houve integracao ao Player, gameplay, animacao oficial ou walk cycle oficial.

### Edge Cases

- Se menos de 32 imports oficiais do rig forem encontrados, a feature deve registrar a divergencia e parar para revisao humana antes de versionar qualquer item faltante.
- Se mais de 32 imports aparecerem no grupo oficial do rig sem rastreabilidade nas features 014 ou 015, a feature deve manter os extras fora do escopo.
- Se o import adicional do preview nao existir ou nao estiver ligado a PNG existente, ele deve permanecer pendente e fora do versionamento.
- Se qualquer `.uid` aparecer entre candidatos a stage, a feature deve falhar a validacao de escopo.
- Se qualquer import de `docs/archive/walk-prototypes-v1` ou prototipo rejeitado aparecer como candidato, ele deve ser excluido e registrado como fora do escopo.
- Se houver alteracao em `.gitignore`, Player, cena de rig, scripts, sprites idle ou PNGs/assets oficiais, a feature deve parar para revisao humana.
- Se a lista final de imports aprovados ultrapassar 33 itens, a feature deve registrar falha de escopo antes de qualquer commit.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A feature MUST revalidar os 32 `official_asset_imports` documentados pela feature 014.
- **FR-002**: A feature MUST revalidar o import adicional do preview da Rig Articulation Test V1 documentado pela feature 015.
- **FR-003**: A feature MUST limitar a lista aprovada a no maximo 33 arquivos `.import`.
- **FR-004**: A feature MUST confirmar que cada `.import` aprovado esta listado na revisao da feature 014 ou 015.
- **FR-005**: A feature MUST confirmar que cada `.import` aprovado foi recomendado como `version_later` ou `join_official_rig_imports`.
- **FR-006**: A feature MUST confirmar que cada `.import` aprovado esta ligado ao rig tecnico validado ou ao preview tecnico da Rig Articulation Test V1.
- **FR-007**: A feature MUST confirmar que o PNG de origem de cada `.import` aprovado existe.
- **FR-008**: A feature MUST confirmar que o PNG de origem de cada `.import` aprovado e asset oficial documentado ou arquivo rastreado pelo projeto.
- **FR-009**: A feature MUST excluir qualquer `.import` pertencente a prototipo rejeitado, arquivo historico ou `docs/archive/walk-prototypes-v1`.
- **FR-010**: A feature MUST excluir todo arquivo `.uid`.
- **FR-011**: A feature MUST manter `.gitignore` inalterado.
- **FR-012**: A feature MUST usar apenas caminhos individuais e explicitos para qualquer stage futuro de `.import` aprovado.
- **FR-013**: A feature MUST NOT usar `git add .`, `git add -A`, `git commit -am` ou `git clean`.
- **FR-014**: A feature MUST criar `docs/technical/official-rig-imports-versioning-v1.md`.
- **FR-015**: A feature MUST criar `docs/technical/articulated-walk-lab-prep-v1.md`.
- **FR-016**: A feature MAY atualizar documentos de politica, inventario, revisao e higiene apenas para registrar o resultado desta consolidacao.
- **FR-017**: A feature MUST registrar explicitamente que ainda nao existe caminhada articulada oficial no projeto.
- **FR-018**: A feature MUST registrar explicitamente que esta feature nao cria walk cycle oficial.
- **FR-019**: A feature MUST registrar explicitamente que esta feature nao cria animacao oficial.
- **FR-020**: A feature MUST registrar explicitamente que esta feature nao integra caminhada ao Player.
- **FR-021**: A feature MUST registrar explicitamente que esta feature apenas consolida imports oficiais do rig e prepara a proxima feature de laboratorio.
- **FR-022**: A feature MUST NOT alterar Player, cena de rig existente, scripts, sprites idle aprovados ou PNGs/assets oficiais.
- **FR-023**: A feature MUST NOT criar gameplay, inimigos, combate, inventario, caminhada articulada oficial ou animacao oficial.
- **FR-024**: A feature MUST preparar criterios e limites para a futura feature `017-articulated-walk-lab-v1`.
- **FR-025**: A feature MUST terminar com gate humano antes de commit ou push.

### Key Entities

- **Official Rig Import**: Arquivo `.import` ligado a PNG oficial do rig tecnico validado e previamente revisado pela feature 014.
- **Articulation Preview Import**: Arquivo `.import` adicional ligado ao preview tecnico da Rig Articulation Test V1 e previamente revisado pela feature 015.
- **Versioning Decision**: Registro que informa se um import e aprovado para versionamento, excluido, pendente ou bloqueado, com criterio e justificativa.
- **Source PNG**: PNG de origem associado ao `.import`, que deve existir e estar ligado a asset oficial documentado.
- **Walk Lab Preparation**: Documento de preparacao da futura feature de laboratorio de caminhada articulada experimental.
- **Sensitive Scope Area**: Areas que podem ser lidas para auditoria, mas nao alteradas por esta feature, incluindo Player, cena de rig, scripts, sprites idle, rig oficial, `.gitignore` e `.uid`.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 32 de 32 imports oficiais do rig sao avaliados ou qualquer divergencia e registrada antes de versionamento.
- **SC-002**: 1 de 1 import adicional do preview de articulacao e avaliado ou qualquer divergencia e registrada antes de agrupamento.
- **SC-003**: A lista final aprovada contem no maximo 33 arquivos `.import`.
- **SC-004**: 100% dos imports aprovados possuem caminho individual, origem, criterio, recomendacao e status documentados.
- **SC-005**: 0 arquivos `.uid` sao versionados, stageados, removidos ou alterados.
- **SC-006**: 0 alteracoes ocorrem em `.gitignore`, Player, cena de rig existente, scripts, sprites idle aprovados ou PNGs/assets oficiais.
- **SC-007**: 0 imports de prototipos rejeitados ou arquivos historicos sao classificados como oficiais.
- **SC-008**: A documentacao final contem as cinco observacoes obrigatorias sobre ausencia de caminhada articulada oficial, ausencia de walk cycle oficial, ausencia de animacao oficial, ausencia de integracao ao Player e escopo preparatorio desta feature.
- **SC-009**: A documentacao de preparacao do walk lab identifica a proxima etapa recomendada e pelo menos cinco criterios visuais para uma caminhada experimental futura.
- **SC-010**: A feature termina sem commit automatico e sem push.

## Assumptions

- As revisoes das features 014 e 015 continuam sendo as fontes de verdade para a lista de imports candidatos.
- Os 32 imports oficiais do rig e o import adicional do preview podem ser lidos e auditados sem alterar os PNGs de origem.
- A decisao de versionar imports oficiais deve ser feita por caminhos explicitos e sob gate humano.
- Arquivos `.uid` permanecem fora desta feature mesmo que sejam considerados oficiais em uma decisao futura separada.
- A proxima etapa de laboratorio sera experimental e nao deve produzir Player runtime, walk cycle oficial ou animacao oficial sem nova aprovacao humana.
