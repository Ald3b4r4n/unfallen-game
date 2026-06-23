# Research: Review Official Rig Imports V1

## Decision: Revisar somente os 32 `official_asset_imports`

**Rationale**: A feature 012 classificou 32 `.import` untracked como imports oficiais do rig, com risco `critical` e recomendacao `needs_human_review`. A feature 013 removeu somente `prototype_imports`, deixando este grupo oficial pendente. A feature 014 deve isolar essa decisao para evitar misturar imports oficiais com prototipos, `.uid` ou `.gitignore`.

**Alternatives considered**:

- Revisar todos os `.import` restantes: rejeitado porque inclui imports do arquivo historico em `docs/archive/`, fora do escopo 014.
- Versionar os 32 imports diretamente: rejeitado porque a feature atual e de planejamento/revisao, nao de versionamento.
- Ignorar todos os `.import`: rejeitado porque o repositorio ja versiona alguns `.import` oficiais e uma regra global poderia ocultar arquivos importantes.

## Decision: Nao alterar `.import`, `.uid` ou `.gitignore`

**Rationale**: `.import` e `.uid` tem politicas diferentes no Godot e ja foram separados pela feature 012. `.gitignore` tambem precisa de decisao propria para nao esconder imports oficiais por acidente.

**Alternatives considered**:

- Alterar `.gitignore` para ignorar `.import`: rejeitado porque poderia afetar imports oficiais ja versionados ou futuros.
- Tratar `.uid` junto com os imports do rig: rejeitado porque os 2 `official_uid_files` pertencem a scripts do rig e exigem feature separada.

## Decision: Exigir existencia do PNG de origem

**Rationale**: Um `.import` oficial do rig so pode ser revisado como tal se o asset de origem existir. Ausencia do PNG de origem indica divergencia local ou classificacao incorreta e deve resultar em revisao humana.

**Alternatives considered**:

- Confiar apenas no caminho do `.import`: rejeitado porque caminho sozinho nao prova que o asset oficial ainda existe.
- Marcar origem ausente como versionar futuramente: rejeitado porque versionar import sem asset correspondente nao ajuda reprodutibilidade.

## Decision: Classificar por relacao com rig

**Rationale**: Os imports do rig incluem partes, backups/refinamentos, previews e recomposicao. Esses grupos tem riscos diferentes para reprodutibilidade visual e para revisao humana.

**Alternatives considered**:

- Usar uma recomendacao unica para todos: rejeitado porque previews, partes e backups podem ter destinos diferentes.
- Basear decisao apenas em nome de arquivo: rejeitado porque a relacao tecnica com o rig precisa estar documentada.

## Decision: Manifesto por arquivo antes de qualquer acao futura

**Rationale**: O manifesto permite revisar cada item antes de uma decisao de versionamento, ignore ou manutencao local. Isso evita commits em massa e preserva rastreabilidade.

**Alternatives considered**:

- Documentar apenas totais: rejeitado porque nao permite auditoria caminho por caminho.
- Fazer commit direto da lista: rejeitado porque a feature 014 nao autoriza stage ou commit de `.import`.

## Decision: Sem contratos externos

**Rationale**: A feature nao expoe API, UI publica, endpoint ou comportamento de gameplay. A interface da feature e documental: manifesto, relatorio e gate humano.

**Alternatives considered**:

- Criar contratos em `contracts/`: rejeitado por ausencia de interface externa.
