# Data Model: README oficial do repositorio Unfallen

## OfficialReadme

Representa o `README.md` oficial da raiz do repositorio.

**Fields**:

- `path`: `README.md`.
- `language`: portugues do Brasil.
- `project_name`: `Unfallen`.
- `project_summary`: descricao curta do jogo em desenvolvimento.
- `status_sections`: secoes que comunicam estado atual, marcos, roadmap e limitacoes.
- `validation_references`: cenas e arquivos citados para orientacao.
- `governance_rules`: regras de Spec Kit/SDD, seguranca e escopo.
- `license_notice`: nota conservadora sobre licenciamento e assets.

**Validation Rules**:

- Deve ser especifico do Unfallen.
- Nao pode reaproveitar conteudo de outro projeto.
- Deve distinguir estado atual de visao futura.
- Deve ser honesto sobre desenvolvimento, ausencia de release publica final, ausencia de walk cycle final e ausencia de animacao oficial final.
- Nao pode declarar licenca aberta sem arquivo de licenca confirmado.

## ReadmeSection

Representa uma secao obrigatoria ou equivalente editorial no README.

**Fields**:

- `title`: titulo visivel da secao.
- `purpose`: motivo da secao.
- `required_content`: informacoes que devem aparecer.
- `forbidden_content`: afirmacoes que nao podem aparecer.
- `verification_method`: como validar a secao.

**Required Sections**:

- Titulo do projeto.
- Sobre o projeto.
- Visao do jogo.
- Status atual.
- Stack tecnica.
- Pipeline do personagem.
- Marcos validados.
- Estrutura do projeto.
- Como abrir no Godot.
- Cena atual de validacao.
- Regras de desenvolvimento.
- Roadmap.
- Assets e licenciamento.
- Status do repositorio.

**Validation Rules**:

- Cada categoria obrigatoria deve aparecer de forma clara, mesmo que o titulo final seja ajustado.
- Secoes de visao e roadmap devem ser marcadas como futuras quando mencionarem sistemas ainda nao implementados.
- Secoes tecnicas nao devem virar tutorial de codigo ou alteracao de cenas.

## ProjectStatusStatement

Representa uma afirmacao obrigatoria sobre o estado real do projeto.

**Fields**:

- `statement`: afirmacao em linguagem clara.
- `status`: `validated`, `partially_approved`, `pending`, `not_implemented` ou `unknown`.
- `source_context`: marco/documento/historico que sustenta a afirmacao.
- `readme_location`: secao onde deve aparecer.

**Required Statements**:

- Projeto em desenvolvimento.
- Engine Godot 4.
- Pixel Art HD isometrica.
- Personagem principal SGT Antonio Rafael.
- Foco atual em character-first pipeline.
- Base Idle Oficial V1 aprovada.
- Rig tecnico criado.
- Partes do rig separadas.
- Partes criticas refinadas.
- Validacao visual no Godot aprovada parcialmente.
- Teste tecnico de articulacao aprovado parcialmente.
- Walk cycle final ainda nao criado/aprovado.
- Nenhuma animacao oficial final aprovada.
- Gameplay completo ainda nao implementado.
- Rig tecnico nao substitui Player runtime.
- Sem release publica final confirmada.

**Validation Rules**:

- Todas as afirmacoes obrigatorias devem estar presentes.
- Afirmacoes parciais precisam usar linguagem como `aprovado parcialmente`, `laboratorio`, `tecnico` ou equivalente.
- Afirmacoes sobre sistemas futuros nao podem aparecer como implementadas.

## RepositoryGovernanceRule

Representa regra de contribuicao, seguranca ou processo.

**Fields**:

- `name`: nome curto da regra.
- `description`: explicacao em linguagem de README.
- `risk_prevented`: risco evitado.
- `mandatory`: se a regra deve aparecer no README.

**Required Rules**:

- Fluxo Spec Kit/SDD.
- Especificacao, plano, tarefas, implementacao controlada e gate humano.
- Sem push automatico sem aprovacao.
- Sem segredos versionados.
- Sem `.env`.
- Sem assets pagos/terceiros sem licenca.
- Sem alterar Player/rig fora do escopo aprovado.

**Validation Rules**:

- O README deve conter pelo menos cinco regras de governanca/seguranca.
- Regras devem ser claras para colaboradores e revisores.
- Regras nao devem prometer automacao inexistente.

## RepositoryArtifactReference

Representa caminho importante citado no README.

**Fields**:

- `path`: caminho exibido no README.
- `role`: funcao do arquivo ou cena.
- `scope_warning`: alerta de escopo, se aplicavel.

**Required References**:

- `res://scenes/rig/AntonioRafaelRigLab.tscn`: laboratorio tecnico de validacao.
- `res://scenes/player/Player.tscn`: Player runtime oficial separado.

**Validation Rules**:

- O README deve explicar a diferenca entre laboratorio e Player.
- Nenhum caminho deve sugerir que o rig substitui o Player.
- Referencias devem ser textuais; a feature nao deve editar as cenas.

## ImplementationGate

Representa a pausa obrigatoria antes da implementacao do README.

**Fields**:

- `decision_needed`: aprovacao humana para seguir.
- `allowed_future_files`: `README.md`, `docs/project/README-notes.md`, artefatos da feature 009 e `AGENTS.md`.
- `forbidden_future_files`: codigo, cenas, scripts, Player, sprites, PNGs e assets.
- `commit_allowed`: `false` nesta etapa.
- `push_allowed`: `false` nesta etapa.

**Validation Rules**:

- O plano nao cria README.
- O plano nao altera codigo/cenas/assets.
- A implementacao futura deve parar para validacao humana quando concluir o README.
