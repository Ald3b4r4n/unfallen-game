# Research: Archive Walk Prototypes V1

## Decision: Usar `docs/archive/walk-prototypes-v1/` como destino historico planejado

**Rationale**: Os arquivos classificados como `walk_candidates`, `walk_prototypes` e `preview_assets` sao historicos/prototipos de tentativas anteriores. Eles nao precisam ser inspecionados como assets runtime dentro do Godot. Manter o arquivo historico em `docs/archive/` reduz a chance de gerar `.import`, evita misturar prototipos rejeitados com assets oficiais e torna a revisao no GitHub mais clara.

**Alternatives considered**:

- `res://assets/characters/antonio_rafael/archive/walk_prototypes_v1/`: rejeitado para esta versao porque pode acionar importacao do Godot e parecer parte do acervo oficial de assets do personagem.
- Manter tudo local sem arquivar: rejeitado como destino principal porque nao resolve rastreabilidade historica nem reduz ambiguidade do working tree.
- Remover definitivamente: rejeitado por violar a regra de preservacao e exigir gate destrutivo especifico.

## Decision: Preservar a arvore relativa original sob `docs/archive/walk-prototypes-v1/files/`

**Rationale**: A preservacao da arvore relativa facilita auditoria posterior, evita colisoes de nomes repetidos como `antonio_rafael_walk_left_01.png` e permite mapear cada item do manifesto ao caminho original.

**Alternatives considered**:

- Pastas por grupo apenas (`walk_candidates/`, `walk_prototypes/`, `preview_assets/`): simples, mas perde parte do contexto original e pode gerar conflitos de nomes.
- Renomear todos os arquivos com prefixos de grupo: aumenta ruido e risco de erro manual.

## Decision: Arquivar somente PNGs historicos, excluir `.import` e `.uid`

**Rationale**: Os `.import` e `.uid` sao gerados/gerenciados pelo Godot e a politica do projeto para esses arquivos permanece pendente. Versiona-los junto com prototipos rejeitados criaria ruido e risco sem beneficio para rastreabilidade visual.

**Alternatives considered**:

- Arquivar pares PNG + `.import`: rejeitado porque o destino escolhido fica fora de `res://assets` e nao exige imports do Godot.
- Versionar `.uid` relacionados: rejeitado por nao haver relacao direta com os prototipos de walk e por estar fora do escopo.

## Decision: Criar manifesto Markdown em vez de JSON

**Rationale**: A feature e documental e voltada a revisao humana. Um `manifest.md` e mais legivel no GitHub, facilita comentarios manuais e evita sugerir que os prototipos sao dados tecnicos consumidos por runtime.

**Alternatives considered**:

- JSON: util para consumo automatizado, mas desnecessario agora e mais facil de confundir com manifesto tecnico de assets.
- CSV: bom para planilha, mas menos expressivo para observacoes e decisoes humanas.

## Decision: Tratar divergencia de contagem como bloqueio

**Rationale**: A auditoria 010 definiu os totais esperados. Se a implementacao encontrar numero diferente de 66 candidates, 8 prototypes ou 3 previews, a diferenca pode indicar arquivo removido, renomeado, novo ou mal classificado. Prosseguir sem revisao aumentaria risco de arquivar o arquivo errado.

**Alternatives considered**:

- Arquivar o que existir e registrar ausencia: permitido somente apos gate humano; nao deve ser automatico.
- Recriar arquivos ausentes: rejeitado; a feature e de arquivamento, nao geracao.

## Decision: Sem contratos externos

**Rationale**: A feature nao expoe API, UI publica, formato de runtime ou integracao externa. O contrato efetivo e documental: manifestos, listas e criterios de validacao.

**Alternatives considered**:

- Criar contratos em `contracts/`: rejeitado por nao haver interface externa.
