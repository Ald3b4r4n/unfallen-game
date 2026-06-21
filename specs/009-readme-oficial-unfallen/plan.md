# Implementation Plan: README oficial do repositorio Unfallen

**Branch**: `009-readme-oficial-unfallen` | **Date**: 2026-06-20 | **Spec**: [spec.md](file:///d:/Projetos/Unfallen/specs/009-readme-oficial-unfallen/spec.md)  
**Input**: Feature specification from `/specs/009-readme-oficial-unfallen/spec.md`

## Summary

Planejar a criacao de um `README.md` oficial, novo e especifico do projeto Unfallen antes de qualquer push publico. A feature e exclusivamente documental: o README deve apresentar Unfallen como jogo em desenvolvimento no Godot 4, com foco atual no pipeline character-first do SGT Antonio Rafael, rig tecnico, validacao visual e teste de articulacao em laboratorio. O plano tambem define auditoria para evitar reaproveitamento de README antigo, valida o estado real do projeto e preserva codigo, cenas, sprites, Player, scripts, assets, commits e push fora do escopo.

## Technical Context

**Language/Version**: Nao ha codigo novo nesta feature; contexto do projeto e Godot 4.x Standard / GDScript.  
**Primary Dependencies**: Markdown, GitHub README rendering, documentos existentes do projeto, Spec Kit/SDD.  
**Storage**: `README.md` na raiz do repositorio; anotacoes auxiliares planejadas em `docs/project/README-notes.md`; artefatos de planejamento em `specs/009-readme-oficial-unfallen/`.  
**Testing**: Validacao documental manual, checklist de conteudo, auditoria de escopo por Git, busca textual por afirmacoes proibidas.  
**Target Platform**: Repositorio Git/GitHub; projeto Godot 4 desktop em desenvolvimento.  
**Project Type**: Jogo 2D isometrico em Pixel Art HD, com feature atual de documentacao do repositorio.  
**Performance Goals**: README legivel em menos de 5 minutos; identificacao do projeto em ate 30 segundos; localizacao de instrucoes de abertura/validacao em ate 2 minutos.  
**Constraints**: Nao criar README nesta etapa; nao alterar codigo, cenas, scripts, Player, sprites, PNGs ou assets; nao limpar arquivos antigos; nao alterar `.gitignore`; nao fazer commit; nao fazer push.  
**Scale/Scope**: Uma pagina raiz `README.md` e, se necessario durante implementacao futura, uma nota auxiliar em `docs/project/README-notes.md`.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Spec First, Implementacao Depois**: A especificacao existe em `specs/009-readme-oficial-unfallen/spec.md`; esta etapa e somente planejamento.
- [x] **Gate Humano Obrigatorio**: O plano termina em gate humano antes de criar o README, commitar, dar push ou alterar qualquer arquivo fora do escopo documental.
- [x] **Character First**: O README planejado preserva o foco atual no SGT Antonio Rafael e no pipeline de personagem, sem expandir para gameplay completo.
- [x] **Pixel Art HD Consistente**: A documentacao planejada deve comunicar Pixel Art HD isometrica e evitar promessas de assets/animacoes finais inexistentes.
- [x] **Engine e Tecnologia**: O README deve representar o contexto real Godot 4.x Standard/GDScript sem alterar tecnologia ou configuracao do projeto.

## Project Structure

### Documentation (this feature)

```text
specs/009-readme-oficial-unfallen/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── checklists/
│   └── requirements.md
└── tasks.md                 # Criado somente por /speckit.tasks
```

### Planned Repository Documentation Scope

```text
README.md                    # Criar/substituir somente na implementacao futura
docs/
└── project/
    └── README-notes.md      # Opcional: notas de auditoria do README, se necessario
AGENTS.md                    # Atualizado nesta etapa para apontar ao plano atual
```

### Explicitly Out of Scope

```text
assets/
scenes/
scripts/
project.godot
.gitignore
```

**Structure Decision**: A feature e uma entrega de documentacao de repositorio. A implementacao futura deve alterar no maximo `README.md`, `docs/project/README-notes.md`, os artefatos da feature 009 e `AGENTS.md` quando exigido pelo Spec Kit. Nenhum arquivo do jogo, asset, cena, Player ou script participa da implementacao.

## Current Repository Observations

- `README.md` nao existe na raiz no momento deste planejamento.
- `LICENSE`, `LICENSE.md` e `COPYING` nao existem na raiz no momento deste planejamento.
- `docs/` possui as pastas `art/` e `technical/`; `docs/project/` deve ser criada apenas se a implementacao futura precisar registrar notas auxiliares do README.
- O historico local contem marcos relevantes: `314b5e0`, `7e48801`, `068a261` e `7db411c`.
- Ha alteracoes e arquivos nao rastreados pre-existentes no worktree; esta feature nao deve limpar, mover ou normalizar esse estado.

## Planned README Content Model

O README futuro deve conter, no minimo:

```md
# Unfallen

## Sobre o projeto
## Visao do jogo
## Status atual
## Stack tecnica
## Pipeline do personagem
## Marcos validados
## Estrutura do projeto
## Como abrir no Godot
## Cena atual de validacao
## Regras de desenvolvimento
## Roadmap
## Assets e licenciamento
## Status do repositorio
```

Titulos podem ser refinados, mas o conteudo precisa cobrir todas as categorias acima.

## Planned Status Statements

O README deve afirmar claramente:

- projeto em desenvolvimento;
- engine Godot 4;
- estilo Pixel Art HD isometrica;
- personagem principal atual: SGT Antonio Rafael;
- foco atual: character-first pipeline, rig tecnico e validacao de articulacao;
- Base Idle Oficial V1 aprovada;
- rig tecnico criado;
- partes do rig separadas;
- partes criticas refinadas;
- validacao visual no Godot aprovada parcialmente;
- teste tecnico de articulacao aprovado parcialmente;
- walk cycle final ainda nao criado/aprovado;
- nenhuma animacao oficial final aprovada;
- gameplay completo ainda nao implementado;
- rig tecnico nao substitui o Player runtime;
- sem release publica final confirmada.

## Planned File References

O README deve citar:

```txt
res://scenes/rig/AntonioRafaelRigLab.tscn
res://scenes/player/Player.tscn
```

E deve explicar:

- `AntonioRafaelRigLab.tscn` e laboratorio tecnico;
- `Player.tscn` e o Player runtime oficial separado;
- o rig tecnico e ferramenta de producao/animacao;
- o rig nao substitui o Player;
- Player/rig nao devem ser alterados fora de feature especifica.

## Planned Validation Strategy

1. Confirmar que o README novo e especifico do Unfallen.
2. Confirmar que nenhum README antigo foi reaproveitado.
3. Confirmar que Godot 4 aparece no README.
4. Confirmar que o status real do projeto esta listado.
5. Confirmar que o README nao promete gameplay completo.
6. Confirmar que o README nao afirma walk cycle final aprovado.
7. Confirmar que rig tecnico e Player runtime sao explicados como separados.
8. Confirmar que `AntonioRafaelRigLab.tscn` e citado como cena atual de laboratorio.
9. Confirmar que `Player.tscn` e citado como Player runtime oficial separado.
10. Confirmar que a governanca Spec Kit/SDD aparece.
11. Confirmar aviso claro de desenvolvimento/pre-release.
12. Confirmar ausencia de declaracoes proibidas sobre release, combate funcional, inventario funcional, mundo aberto implementado, assets livres ou licenca aberta sem arquivo.
13. Confirmar que codigo, cenas, sprites, Player, scripts, PNGs e assets nao foram alterados.
14. Confirmar que nao houve commit.
15. Confirmar que nao houve push.

## Planned Governance Notes

O README futuro deve mencionar:

- fluxo Spec Kit/SDD: especificacao, plano, tarefas, implementacao controlada e gate humano;
- sem push automatico sem aprovacao humana;
- sem versionar segredos;
- sem versionar `.env`;
- sem assets pagos ou de terceiros sem licenca confirmada;
- sem alterar Player/rig fora de escopo aprovado;
- sem declarar licenca aberta sem arquivo de licenca confirmado.

## Planned Roadmap Language

Roadmap curto e honesto:

1. Validar rig tecnico.
2. Refinar pivos e articulacao.
3. Criar walk cycle tecnico controlado.
4. Validar sprites finais.
5. Integrar animacoes aprovadas ao Player.
6. Iniciar gameplay minimo.
7. Expandir sistemas de sobrevivencia/narrativa.

O README deve deixar claro que estes itens sao direcao futura, nao implementacao atual.

## Phase 0 Output

Research decisions documented in [research.md](file:///d:/Projetos/Unfallen/specs/009-readme-oficial-unfallen/research.md).

## Phase 1 Output

Design artifacts:

- [data-model.md](file:///d:/Projetos/Unfallen/specs/009-readme-oficial-unfallen/data-model.md)
- [quickstart.md](file:///d:/Projetos/Unfallen/specs/009-readme-oficial-unfallen/quickstart.md)

No external contracts are required because this feature does not expose APIs, CLI commands, save data, gameplay interfaces or runtime integration. The expected README structure and validation rules are documented in the data model and quickstart.

## Post-Design Constitution Check

- [x] **Spec First, Implementacao Depois**: Plano e artefatos de design foram gerados antes de tarefas e implementacao.
- [x] **Gate Humano Obrigatorio**: O plano preserva gate antes de criar README, alterar arquivos finais, commitar ou dar push.
- [x] **Character First**: O README planejado continua centrado no personagem SGT Antonio Rafael e no pipeline character-first.
- [x] **Pixel Art HD Consistente**: A comunicacao planejada preserva a identidade Pixel Art HD isometrica sem prometer assets finais inexistentes.
- [x] **Engine e Tecnologia**: Godot 4.x Standard segue como contexto oficial; nenhuma tecnologia ou arquivo de engine sera alterado.

## Complexity Tracking

Nenhuma violacao constitucional planejada.

## Gate Humano

Este plano nao autoriza implementacao. A feature deve parar apos `/speckit.plan` e aguardar aprovacao humana antes de:

- criar ou substituir `README.md`;
- criar `docs/project/README-notes.md`;
- gerar `tasks.md`;
- alterar qualquer arquivo de codigo, cena, sprite, Player, script, PNG ou asset;
- limpar arquivos antigos;
- alterar `.gitignore`;
- fazer commit;
- fazer push.
