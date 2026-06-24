# Research: Rig Imports Versioning and Articulated Walk Lab Prep V1

## Decision 1: Consolidar 32 official rig imports + 1 articulation preview import

**Decision**: A feature 016 deve tratar como candidatos somente os 32 `.import` revisados pela feature 014 e o `.import` adicional revisado pela feature 015.

**Rationale**: A feature 014 registrou 32 imports oficiais do rig com recomendacao `version_later`. A feature 015 revisou o import do preview da Rig Articulation Test V1 e recomendou `join_official_rig_imports`. O total maximo seguro e 33 itens.

**Alternatives considered**:

- Versionar todos os `.import` untracked: rejeitado por risco de incluir prototipos, arquivos arquivados e residuos.
- Manter todos os imports fora do Git: rejeitado porque o projeto ja versiona imports oficiais selecionados e a reprodutibilidade do rig validado pode se beneficiar de versionamento seletivo.
- Criar microfeature separada para o item 33: rejeitado pela diretriz de mudar ritmo e consolidar decisoes relacionadas.

## Decision 2: Manter `.uid` fora desta feature

**Decision**: Nenhum `.uid` deve ser versionado, removido, editado ou stageado nesta feature.

**Rationale**: A politica da feature 012 deixou `.uid` como decisao propria. Os `.uid` restantes estao ligados a scripts do rig e exigem revisao separada, especialmente porque `scripts/rig/` e area sensivel.

**Alternatives considered**:

- Versionar `.uid` junto com imports oficiais: rejeitado por misturar metadados de scripts com metadados de imagens.
- Alterar `.gitignore` para ocultar `.uid`: rejeitado porque a politica de UID ainda nao foi aprovada.

## Decision 3: Nao alterar `.gitignore`

**Decision**: `.gitignore` permanece inalterado.

**Rationale**: O projeto possui politica seletiva para `.import`; uma regra global poderia esconder imports oficiais necessarios. A feature 016 e de consolidacao e preparacao, nao de politica global de ignore.

**Alternatives considered**:

- Ignorar `.import` globalmente: rejeitado porque o repositorio ja versiona imports oficiais.
- Criar excecoes complexas agora: rejeitado por escopo; qualquer mudanca em `.gitignore` exige feature propria e aprovacao explicita.

## Decision 4: Planejar stage apenas por paths explicitos individuais

**Decision**: A implementacao futura deve usar somente caminhos literais individuais para stage de `.import` aprovados.

**Rationale**: A regra central do projeto proibe `git add .`, `git add -A`, glob amplo e stage de diretorio inteiro. Caminhos literais reduzem risco de incluir `.uid`, prototipos arquivados ou imports fora da lista.

**Alternatives considered**:

- Stage por diretorio `assets/characters/antonio_rafael/rig/`: rejeitado porque incluiria assets/arquivos fora do conjunto se aparecerem novos arquivos.
- Stage por glob `*.import`: rejeitado porque incluiria imports de docs/archive ou outros residuos.

## Decision 5: Preparar 017 como laboratorio experimental, nao como feature oficial de walk cycle

**Decision**: A feature 016 deve criar somente preparacao documental para `017-articulated-walk-lab-v1`.

**Rationale**: Ainda nao existe caminhada articulada oficial. O rig atual e tecnico/laboratorial, e o preview de articulacao e evidencia de teste tecnico. A proxima etapa pode criar laboratorio experimental, mas deve manter Player runtime separado.

**Alternatives considered**:

- Criar caminhada articulada nesta feature: rejeitado por fora do escopo.
- Integrar experimentos ao Player: rejeitado porque nenhuma animacao oficial foi aprovada.
- Tratar preview existente como animacao oficial: rejeitado porque a feature 015 documentou explicitamente que nao e walk cycle.

## Decision 6: Nao criar contratos de interface

**Decision**: Nao criar `contracts/` nesta feature.

**Rationale**: A feature e de governanca documental e metadados de import, sem API, comando publico, endpoint, UI nova ou contrato de runtime.

**Alternatives considered**:

- Criar contrato de stage Git: rejeitado porque o quickstart e tasks sao suficientes e mais adequados ao fluxo Spec Kit.
- Criar contrato para Godot import: rejeitado porque o formato `.import` e definido pelo Godot e nao deve ser reinterpretado pelo projeto.
