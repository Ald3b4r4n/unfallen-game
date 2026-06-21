# Research: Cleanup Untracked Prototypes V1

## Decision 1: Auditoria antes de qualquer limpeza

**Decision**: A feature deve começar por uma auditoria completa dos arquivos não rastreados e registrar os resultados em documentação versionável futura.

**Rationale**: O workspace contém aproximadamente 204 untracked antigos de origens diferentes. Sem inventário e classificação, há risco de commitar protótipos rejeitados, apagar histórico útil ou versionar arquivos gerados pelo editor sem política definida.

**Alternatives considered**:

- Remover todos os untracked com comando de limpeza: rejeitado por risco de perda irreversível e por violar gate humano.
- Commitar todos os untracked: rejeitado por misturar protótipos, arquivos gerados e histórico sem classificação.
- Ignorar o estado sujo e continuar: rejeitado porque manteria ruído operacional antes de novas features.

## Decision 2: Não usar inventário temporário na raiz como artefato final

**Decision**: A implementação futura deve produzir inventário versionável em `docs/technical/untracked-cleanup-inventory-v1.md`; qualquer arquivo temporário usado para coleta deve ser removido antes da finalização.

**Rationale**: Um arquivo temporário na raiz pode entrar no próprio inventário, distorcer contagem e criar novo untracked. Um documento final em `docs/technical/` é rastreável e revisável.

**Alternatives considered**:

- Manter `untracked-audit.txt` na raiz: rejeitado por ser temporário e poluir o workspace.
- Não criar inventário versionável: rejeitado porque a feature precisa permitir revisão humana objetiva.

## Decision 3: Classificar por grupos e risco antes de destino

**Decision**: Cada arquivo deve ser agrupado por função provável e receber risco e destino recomendado.

**Rationale**: Muitos arquivos compartilham padrões claros, como `walk_manual_candidate_v1`, `walk_prototype_v5`, `.import`, `.uid`, specs antigas e previews. Agrupar reduz o esforço de revisão, mas ainda preserva decisão humana.

**Alternatives considered**:

- Listar todos os arquivos sem recomendação: rejeitado porque não ajuda a decidir próximos passos.
- Classificar somente por extensão: rejeitado porque extensões iguais podem ter destinos diferentes dependendo da origem.

## Decision 4: `.import` e `.uid` não entram em massa

**Decision**: Arquivos `.import` e `.uid` devem ser classificados para revisão futura, não versionados em massa nesta feature.

**Rationale**: Arquivos gerados pelo Godot podem ser relevantes em alguns projetos, mas o repositório ainda não tem política explícita consolidada para todos os casos pendentes. Versionar em massa pode incluir ruído de importação de protótipos rejeitados.

**Alternatives considered**:

- Versionar todos os `.import`: rejeitado por incluir imports de protótipos antigos e assets não aprovados.
- Remover todos os `.import`: rejeitado porque alguns podem estar ligados a assets úteis ou rastreabilidade do Godot.

## Decision 5: Specs antigas exigem revisão individual

**Decision**: Specs antigas não rastreadas devem ser classificadas como `old_specs` e receber recomendação de revisão individual ou feature separada.

**Rationale**: Specs antigas podem registrar histórico importante do pipeline ou sobras de iteração. A decisão correta depende do conteúdo, não apenas do caminho.

**Alternatives considered**:

- Commitar todas as specs antigas: rejeitado por possível ruído histórico.
- Apagar todas as specs antigas: rejeitado por possível perda de rastreabilidade.

## Decision 6: Player, idles e rig oficial são itens sensíveis

**Decision**: A auditoria deve destacar `Player.tscn`, sprites idle aprovados e assets de rig como áreas sensíveis que não devem ser alteradas pela limpeza.

**Rationale**: Esses itens representam marcos aprovados ou runtime oficial. Qualquer alteração neles pertence a feature própria com escopo explícito.

**Alternatives considered**:

- Tratar tudo como arquivo comum: rejeitado por risco de alterar assets ou cenas aprovadas.

## Decision 7: Sem contratos externos

**Decision**: Não criar diretório `contracts/` para esta feature.

**Rationale**: A feature não expõe API, CLI, gameplay, save data, editor plugin ou integração externa. O contrato operacional é a documentação da auditoria e o gate humano.

**Alternatives considered**:

- Criar contrato de comando: rejeitado porque a implementação futura não deve automatizar limpeza destrutiva.
