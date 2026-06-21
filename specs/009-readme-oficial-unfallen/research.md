# Research: README oficial do repositorio Unfallen

## Decision: Criar um README novo, sem reaproveitar conteudo antigo

**Rationale**: O pedido parte do risco de o repositorio antigo ou README antigo pertencer a outro projeto. A apresentacao publica precisa ser fiel ao estado atual do Unfallen e nao pode carregar identidade, promessas ou instrucoes herdadas de outro trabalho.

**Alternatives considered**:

- Editar incrementalmente um README antigo: rejeitado porque manteria risco de contaminacao por outro projeto.
- Nao criar README antes do push: rejeitado porque o repositorio ficaria confuso publicamente.
- Criar README generico: rejeitado porque o Unfallen ja tem identidade, personagem e pipeline especificos.

## Decision: Escrever em portugues do Brasil com termos tecnicos pontuais

**Rationale**: O usuario pediu preferencia por PT-BR e o projeto vem sendo documentado em portugues. Termos como Godot, Pixel Art HD, Player runtime, rig tecnico e Spec Kit devem permanecer claros para revisores tecnicos.

**Alternatives considered**:

- README somente em ingles: rejeitado por desalinhamento com a documentacao atual e o pedido.
- README bilingue completo: adiado para uma feature futura, pois aumenta escopo e manutencao.
- Linguagem excessivamente poetica: rejeitada porque pode obscurecer o status real do projeto.

## Decision: Separar estado atual de visao futura

**Rationale**: O README pode mencionar exploracao, sobrevivencia, narrativa, combate, investigacao, progressao e ambiente hostil como visao futura, mas deve deixar claro que gameplay completo, walk cycle final e animacao oficial ainda nao estao prontos.

**Alternatives considered**:

- Apresentar a visao como se ja estivesse implementada: rejeitado por ser enganoso.
- Evitar totalmente a visao futura: rejeitado porque o README perderia contexto criativo.
- Misturar status e roadmap em um paragrafo unico: rejeitado porque dificulta auditoria.

## Decision: Tratar o rig como laboratorio tecnico, nao como Player

**Rationale**: A documentacao das features 006-008 reforca que `AntonioRafaelRigLab.tscn` e laboratorio tecnico e que `Player.tscn` permanece separado. O README deve prevenir confusao publica e tecnica sobre runtime.

**Alternatives considered**:

- Descrever o rig como personagem jogavel: rejeitado porque nao e verdade.
- Omitir o Player: rejeitado porque o leitor precisa entender a separacao.
- Detalhar internamente todos os nodes do rig: rejeitado porque README deve ser apresentacao, nao manual tecnico profundo.

## Decision: Incluir governanca Spec Kit/SDD e seguranca

**Rationale**: O projeto tem constituicao, gates humanos e fluxo de especificacao/plano/tarefas. Antes de push publico, o README deve orientar contribuidores a nao versionar segredos, `.env`, assets sem licenca e a nao alterar Player/rig fora do escopo.

**Alternatives considered**:

- Deixar governanca apenas em docs internas: rejeitado porque o README e a porta de entrada.
- Criar guia de contribuicao separado nesta feature: rejeitado por ampliar escopo; pode ser roadmap futuro.
- Declarar regras de licenca sem arquivo de licenca: rejeitado por risco legal.

## Decision: Nao criar contratos externos

**Rationale**: A feature nao expoe API, CLI, save data, gameplay runtime ou interface para sistemas externos. O contrato da entrega e editorial: secoes obrigatorias, conteudos proibidos e validacoes documentais.

**Alternatives considered**:

- Criar `contracts/README.md`: rejeitado porque duplicaria a quickstart e o data model.
- Criar contrato de markdown formal: rejeitado por excesso para um README unico.
- Criar teste automatizado de README nesta etapa: rejeitado porque a etapa e planejamento e nao implementacao.
