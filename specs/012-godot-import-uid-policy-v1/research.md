# Research: Godot Import UID Policy V1

## Decision: Separar auditoria de aplicacao da politica

**Rationale**: `.import` e `.uid` podem estar ligados a assets oficiais, prototipos rejeitados, arquivos historicos ou sobras. Aplicar uma politica sem auditoria previa pode versionar lixo tecnico ou apagar arquivos que o Godot ainda referencia.

**Alternatives considered**:

- Alterar `.gitignore` imediatamente: rejeitado porque a politica ainda nao foi validada.
- Versionar todos os `.import` e `.uid`: rejeitado por risco de commit em massa e mistura com prototipos rejeitados.
- Remover todos os `.import` e `.uid`: rejeitado por ser destrutivo e exigir gate humano especifico.

## Decision: Auditar `.import` e `.uid` separadamente

**Rationale**: `.import` e `.uid` tem papeis diferentes no Godot. `.import` esta associado a configuracao de importacao de assets; `.uid` esta associado a identificacao de recursos/scripts/cenas. A politica pode ser diferente para cada tipo.

**Alternatives considered**:

- Tratar ambos como arquivos gerados genericos: rejeitado porque perde contexto e aumenta risco para scripts/cenas oficiais.

## Decision: Verificar arquivos ja rastreados antes de recomendar politica

**Rationale**: O repositorio ja pode versionar alguns `.import` ou `.uid`. Uma politica nova deve considerar o estado real para evitar contradicoes entre arquivos existentes e recomendacoes futuras.

**Alternatives considered**:

- Considerar somente untracked atuais: insuficiente para definir politica de repositorio.

## Decision: Classificar por origem, risco e arquivo relacionado

**Rationale**: A decisao correta depende de saber se o arquivo pertence a asset oficial, prototipo, arquivo historico, sobra antiga ou origem desconhecida. O arquivo relacionado e a evidencia principal para essa classificacao.

**Alternatives considered**:

- Classificar apenas por extensao: insuficiente para decidir versionamento.
- Classificar apenas por pasta: rapido, mas pode errar em areas mistas como `assets/characters/antonio_rafael/`.

## Decision: Nao alterar `.gitignore` na fase de planejamento

**Rationale**: `.gitignore` e arquivo global de comportamento do repositorio. Alterar sem politica aprovada pode esconder arquivos importantes ou manter lixo tecnico sem rastreabilidade.

**Alternatives considered**:

- Ignorar todos `.import` e `.uid`: simples, mas potencialmente errado para projetos Godot que precisem de import settings reprodutiveis.
- Versionar todos `.import` e `.uid`: aumenta ruido e inclui prototipos/sobras.

## Decision: Sem contratos externos

**Rationale**: A feature nao expoe API, UI publica ou integracao externa. O contrato e documental: auditoria, grupos, riscos e recomendacao.

**Alternatives considered**:

- Criar contratos em `contracts/`: rejeitado por ausencia de interface externa.
