# Implementation Plan: Cleanup Untracked Prototypes V1

**Branch**: `010-cleanup-untracked-prototypes` | **Date**: 2026-06-21 | **Spec**: [spec.md](file:///d:/Projetos/Unfallen/specs/010-cleanup-untracked-prototypes/spec.md)  
**Input**: Feature specification from `/specs/010-cleanup-untracked-prototypes/spec.md`

## Summary

Planejar uma auditoria segura dos arquivos não rastreados antigos do projeto Unfallen, sem executar limpeza nesta etapa. A feature deve classificar os untracked por origem, tipo, risco e destino recomendado, produzindo documentação de auditoria e inventário versionável somente durante a implementação futura. O plano proíbe commit em massa, remoção definitiva, alteração de Player, cenas, scripts, sprites oficiais, assets oficiais ou push.

## Technical Context

**Language/Version**: Não há código novo nesta feature; contexto do projeto é Godot 4.x Standard / GDScript.  
**Primary Dependencies**: Git, Spec Kit/SDD, Markdown e documentação existente do projeto.  
**Storage**: Artefatos de planejamento em `specs/010-cleanup-untracked-prototypes/`; documentação futura planejada em `docs/technical/untracked-cleanup-audit-v1.md`, `docs/technical/untracked-cleanup-inventory-v1.md` e, opcionalmente, `docs/project/repository-hygiene.md`.  
**Testing**: Auditoria por comandos Git somente leitura, conferência manual do inventário, validação documental e gate humano.  
**Target Platform**: Repositório Git/GitHub do projeto Unfallen; projeto Godot 4 desktop em desenvolvimento.  
**Project Type**: Jogo 2D isométrico em Pixel Art HD com pipeline character-first.  
**Performance Goals**: Auditoria revisável em menos de 5 minutos por grupo; identificação de grupos de risco em menos de 5 minutos; nenhum impacto em runtime.  
**Constraints**: Não mover, apagar, renomear, sobrescrever, stagear em massa, commitar ou fazer push; não alterar Player, cenas, scripts, sprites idle aprovados ou assets oficiais.  
**Scale/Scope**: Aproximadamente 204 arquivos não rastreados antigos, incluindo candidatos de walk, protótipos, `.import`, `.uid`, specs antigas e assets gerados em tentativas anteriores.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Spec First, Implementação Depois**: A especificação existe em `specs/010-cleanup-untracked-prototypes/spec.md`; esta etapa é apenas planejamento.
- [x] **Gate Humano Obrigatório**: O plano exige aprovação humana antes de qualquer limpeza real, remoção, arquivamento, alteração de `.gitignore`, commit ou push.
- [x] **Character First**: A feature preserva o estado do pipeline do SGT Antônio Rafael e evita alterar Player, rig oficial, sprites idle aprovados ou assets oficiais.
- [x] **Pixel Art HD Consistente**: O plano não altera arte, importação, escala ou sprites; apenas audita arquivos não rastreados.
- [x] **Engine e Tecnologia**: O plano mantém Godot 4.x Standard / GDScript como contexto e não altera engine, scripts ou configuração de runtime.

## Project Structure

### Documentation (this feature)

```text
specs/010-cleanup-untracked-prototypes/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── checklists/
│   └── requirements.md
└── tasks.md                 # Criado somente por /speckit.tasks
```

### Planned Implementation Artifacts

```text
docs/
├── technical/
│   ├── untracked-cleanup-audit-v1.md
│   └── untracked-cleanup-inventory-v1.md
└── project/
    └── repository-hygiene.md    # Opcional, somente se regras recorrentes forem aprovadas
```

### Explicitly Out of Scope

```text
scenes/player/Player.tscn
scenes/rig/AntonioRafaelRigLab.tscn
scripts/player/
scripts/rig/
assets/characters/antonio_rafael/sprites/idle/
assets/characters/antonio_rafael/rig/
.gitignore
```

**Structure Decision**: A feature é documental e de auditoria. A implementação futura deve criar apenas os documentos de auditoria/inventário e atualizar `tasks.md`; não deve mover ou remover arquivos do workspace, nem alterar arquivos de jogo.

## Current Repository State to Preserve

- A branch `009-readme-oficial-unfallen` foi enviada com segurança para `origin/009-readme-oficial-unfallen`.
- Os commits principais já versionados incluem o README oficial, validações de rig, refinamento, montagem e laboratório de articulação.
- O working tree rastreado ficou limpo exceto por `.specify/feature.json`, que representa estado local do Spec Kit.
- Há aproximadamente 204 arquivos não rastreados antigos que não foram enviados no push.
- Os untracked não devem ser enviados nem commitados em massa.

## Planned Audit Commands

A implementação futura pode usar comandos somente leitura:

```powershell
git status --short --untracked-files=all
git ls-files --others --exclude-standard
git diff --name-only
git diff --stat
git branch --show-current
git log --oneline -10
```

Comandos proibidos nesta feature:

```powershell
git add .
git add -A
git commit -am
git clean
git push
```

`Remove-Item`, movimentação de arquivos, alteração de `.gitignore` e qualquer remoção definitiva só podem aparecer em feature posterior com aprovação humana explícita.

## Classification Strategy

Cada arquivo não rastreado deve receber:

- caminho;
- grupo;
- tipo;
- risco;
- destino recomendado;
- observação;
- decisão pendente.

Grupos mínimos:

```text
walk_candidates
walk_prototypes
godot_import_files
godot_uid_files
old_specs
rig_assets
preview_assets
manifest_files
temporary_audit_files
unknown_origin
```

Grupos adicionais podem ser criados se a auditoria encontrar padrões não cobertos.

## Recommendation Values

Cada grupo deve receber uma recomendação entre:

```text
keep_versioned_later
archive_later
keep_local
ignore_later
remove_later
separate_feature
needs_human_review
```

Essas recomendações são apenas decisões propostas. Nenhuma recomendação executa limpeza, movimentação, ignore, commit ou push nesta feature.

## Sensitive Items

Itens que devem ser tratados como risco alto:

- `.specify/feature.json`: estado local do Spec Kit; não incluir automaticamente em commit.
- `scenes/player/Player.tscn`: Player runtime oficial; não alterar.
- `assets/characters/antonio_rafael/sprites/idle/`: Base Idle Oficial V1; não alterar.
- `assets/characters/antonio_rafael/rig/`: contém assets e manifests de rig; separar arquivos já versionados de untracked gerados pelo Godot.
- `.import` e `.uid`: avaliar política do projeto antes de versionar em massa.
- specs antigas não rastreadas: revisar uma por uma antes de classificar como histórico útil ou lixo de iteração.

## Planned Documentation Content

`docs/technical/untracked-cleanup-audit-v1.md` deve registrar:

- data da auditoria;
- branch atual;
- contexto pós-push;
- quantidade total de untracked;
- grupos encontrados;
- arquivos de alto risco;
- arquivos que não devem ser commitados;
- candidatos a commit futuro;
- candidatos a arquivamento;
- candidatos a remoção futura;
- pendências;
- recomendação final;
- confirmação de que nada foi apagado, movido, commitado ou enviado.

`docs/technical/untracked-cleanup-inventory-v1.md` deve registrar:

- listagem ou agrupamento completo dos untracked;
- grupo;
- tipo;
- risco;
- destino recomendado;
- observação;
- decisão pendente.

`docs/project/repository-hygiene.md` é opcional e só deve ser criado se a implementação identificar regras recorrentes úteis, como política futura para `.import`, `.uid`, protótipos e inventários temporários.

## Validation Strategy

1. Confirmar que a auditoria lista ou contabiliza 100% dos untracked encontrados.
2. Confirmar que cada grupo tem risco e destino recomendado.
3. Confirmar que nenhum arquivo foi removido, movido, renomeado ou sobrescrito.
4. Confirmar que nenhum arquivo foi stageado em massa.
5. Confirmar que `.specify/feature.json` não foi incluído automaticamente em commit.
6. Confirmar que `Player.tscn` não foi alterado.
7. Confirmar que sprites idle aprovados não foram alterados.
8. Confirmar que cenas, scripts e assets oficiais não foram alterados.
9. Confirmar que `.import` e `.uid` não foram versionados em massa.
10. Confirmar que `docs/technical/untracked-cleanup-audit-v1.md` e `docs/technical/untracked-cleanup-inventory-v1.md` foram criados somente na implementação.
11. Confirmar que não houve commit.
12. Confirmar que não houve push.

## Phase 0 Output

Research decisions documented in [research.md](file:///d:/Projetos/Unfallen/specs/010-cleanup-untracked-prototypes/research.md).

## Phase 1 Output

Design artifacts:

- [data-model.md](file:///d:/Projetos/Unfallen/specs/010-cleanup-untracked-prototypes/data-model.md)
- [quickstart.md](file:///d:/Projetos/Unfallen/specs/010-cleanup-untracked-prototypes/quickstart.md)

No external contracts are required because this feature creates internal documentation and does not expose API, CLI, gameplay, save data, runtime or editor plugin interfaces.

## Post-Design Constitution Check

- [x] **Spec First, Implementação Depois**: Planejamento e design foram gerados antes de tarefas e implementação.
- [x] **Gate Humano Obrigatório**: O plano termina com gate explícito e proíbe qualquer ação destrutiva ou commit/push nesta etapa.
- [x] **Character First**: O plano preserva os marcos do personagem e não altera Player, rig ou sprites oficiais.
- [x] **Pixel Art HD Consistente**: Nenhum asset visual ou import setting será alterado nesta etapa.
- [x] **Engine e Tecnologia**: A feature continua limitada a auditoria documental sem alterar Godot, scripts ou runtime.

## Complexity Tracking

Nenhuma violação constitucional planejada.

## Gate Humano

Este plano não autoriza implementação. A feature deve parar após `/speckit.plan` e aguardar aprovação humana antes de:

- criar os documentos finais de auditoria;
- gerar inventário versionável;
- criar `tasks.md`;
- mover, apagar, renomear ou arquivar arquivos;
- alterar `.gitignore`;
- stagear qualquer grupo de untracked;
- commitar;
- fazer push.
