# Implementation Plan: Archive Walk Prototypes V1

**Branch**: `011-archive-walk-prototypes-v1` | **Date**: 2026-06-21 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/011-archive-walk-prototypes-v1/spec.md`

## Summary

Planejar o arquivamento controlado dos prototipos antigos de caminhada e previews relacionados identificados pela feature 010: 66 `walk_candidates`, 8 `walk_prototypes` e 3 `preview_assets`. A abordagem preferida e colocar esses arquivos historicos em `docs/archive/walk-prototypes-v1/` durante a implementacao futura, com manifesto de rastreabilidade, sem tratar qualquer item como walk cycle oficial, animacao oficial, asset final ou conteudo do Player runtime.

Esta etapa e apenas planejamento. Nao cria pasta de arquivo, nao move arquivos, nao apaga arquivos, nao stageia, nao commita e nao faz push.

## Technical Context

**Language/Version**: N/A para codigo; projeto base em Godot 4.x Standard com GDScript  
**Primary Dependencies**: Git para auditoria; Markdown para documentacao; inventario da feature 010 como referencia  
**Storage**: Documentos Markdown e manifesto historico planejado em `docs/archive/walk-prototypes-v1/manifest.md`  
**Testing**: Auditoria somente leitura com `git status`, `git ls-files`, `git diff`; revisao de caminhos e contagens  
**Target Platform**: Repositorio local do projeto Unfallen; sem impacto em runtime  
**Project Type**: Jogo 2D isometrico em Pixel Art HD, com feature atual de higiene documental/arquivamento  
**Performance Goals**: N/A; nenhum codigo de jogo ou asset runtime sera carregado  
**Constraints**: Nao alterar Player, cenas, scripts, sprites idle aprovados, rig oficial ou `.gitignore`; nao usar `git add .`, `git add -A`, `git commit -am` ou `git clean`; nao versionar `.import`/`.uid` em massa  
**Scale/Scope**: 77 arquivos-alvo planejados para avaliacao e possivel arquivamento futuro: 66 candidates, 8 prototypes, 3 previews; arquivos `.import` e `.uid` ficam fora do arquivamento desta feature

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Spec First, Implementacao Depois**: A spec 011 existe antes de qualquer implementacao.
- [x] **Gate Humano Obrigatorio**: O plano exige gate humano antes de mover arquivos, stagear, commitar ou fazer push.
- [x] **Character First**: A feature preserva o pipeline do SGT Antonio Rafael e nao cria sistemas complexos fora do personagem.
- [x] **Pixel Art HD Consistente**: Os prototipos sao tratados como historicos; nenhum sprite aprovado ou asset final de Pixel Art HD sera alterado.
- [x] **Engine e Tecnologia**: O projeto permanece em Godot 4.x Standard/GDScript; esta feature nao altera engine, runtime ou scripts.

## Project Structure

### Documentation (this feature)

```text
specs/011-archive-walk-prototypes-v1/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── checklists/
│   └── requirements.md
└── tasks.md              # Criado apenas na etapa /speckit.tasks
```

### Planned Documentation Outputs (future implementation)

```text
docs/
├── technical/
│   ├── walk-prototypes-archive-v1.md
│   ├── untracked-cleanup-audit-v1.md
│   └── untracked-cleanup-inventory-v1.md
└── archive/
    └── walk-prototypes-v1/
        ├── manifest.md
        └── files/
            └── assets/
                └── characters/
                    └── antonio_rafael/
                        ├── exports/
                        ├── source/
                        └── sprites/
```

### Source/Runtime Areas Explicitly Excluded

```text
scenes/player/Player.tscn
scenes/rig/AntonioRafaelRigLab.tscn
scripts/player/
scripts/rig/
assets/characters/antonio_rafael/sprites/idle/
assets/characters/antonio_rafael/rig/
.gitignore
```

**Structure Decision**: Usar `docs/archive/walk-prototypes-v1/` como destino planejado. Os arquivos arquivados devem preservar a arvore relativa original sob `docs/archive/walk-prototypes-v1/files/` para rastreabilidade e para evitar colisoes de nomes. O uso de `res://assets/characters/antonio_rafael/archive/walk_prototypes_v1/` foi rejeitado para este plano porque os arquivos sao referencia historica, nao assets de runtime, e coloca-los em `res://assets` pode gerar `.import` desnecessario e confundir prototipos rejeitados com assets oficiais.

## Archive Scope

### Included Groups

| Grupo | Quantidade esperada | Origem planejada | Categoria planejada | Risco | Decisao |
|---|---:|---|---|---|---|
| `walk_candidates` | 66 | `assets/characters/antonio_rafael/source/` e `assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/` | `archive_walk_candidates` | high | Arquivar somente apos tasks e gate humano |
| `walk_prototypes` | 8 | `assets/characters/antonio_rafael/sprites/walk_prototype_v5/` | `archive_walk_prototypes` | high | Arquivar somente apos tasks e gate humano |
| `preview_assets` | 3 | `assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/` e `assets/characters/antonio_rafael/exports/walk_prototype_v5/` | `archive_preview_assets` | high | Arquivar somente apos tasks e gate humano |

### Excluded Groups

| Grupo | Decisao planejada | Motivo |
|---|---|---|
| `.import` relacionados | `do_not_archive` / `needs_human_review` | Nao versionar imports em massa; docs/archive evita importacao nova pelo Godot |
| `.uid` | `do_not_archive` / `needs_human_review` | Politica Godot ainda pendente |
| specs antigas | `needs_human_review` | Fora do escopo da feature 011 |
| manifests antigos | `needs_human_review` | Fora do escopo, salvo referencia documental explicita |
| assets de rig | `do_not_archive` | Area oficial/validada do rig e sensivel |
| Player/cenas/scripts | `do_not_archive` | Fora do escopo e protegidos pela constituicao |

## Manifest Plan

O manifesto futuro `docs/archive/walk-prototypes-v1/manifest.md` deve registrar uma entrada por item aprovado para arquivamento com:

- caminho original;
- caminho de destino sob `docs/archive/walk-prototypes-v1/files/`;
- grupo;
- tipo;
- origem provavel;
- status;
- motivo do arquivamento;
- risco;
- observacao;
- decisao humana.

Status permitidos:

- `archived_candidate`
- `archived_prototype`
- `archived_preview`
- `kept_local`
- `needs_review`
- `excluded_from_archive`

## Implementation Strategy (future only)

1. Executar auditoria somente leitura para confirmar os 77 arquivos-alvo.
2. Comparar contagens atuais com a feature 010; divergencias bloqueiam movimentacao e exigem gate humano.
3. Classificar cada item em `archive_walk_candidates`, `archive_walk_prototypes`, `archive_preview_assets`, `keep_local`, `needs_human_review` ou `do_not_archive`.
4. Criar `docs/archive/walk-prototypes-v1/` somente na implementacao, depois de tasks aprovadas.
5. Mover apenas arquivos PNG historicos explicitamente classificados e aprovados, preservando arvore relativa em `files/`.
6. Criar `manifest.md` com a decisao de cada item.
7. Atualizar `docs/technical/walk-prototypes-archive-v1.md`, `docs/technical/untracked-cleanup-audit-v1.md` e `docs/technical/untracked-cleanup-inventory-v1.md`.
8. Validar que nenhum Player, cena oficial, script, sprite idle aprovado, rig oficial, `.import`, `.uid` ou `.gitignore` foi alterado.
9. Parar para gate humano antes de qualquer commit.

## Validation Plan

- Confirmar que `git status --short --untracked-files=all` nao mostra alteracoes indevidas em areas sensiveis.
- Confirmar que `git diff --name-only` nao inclui `Player.tscn`, `AntonioRafaelRigLab.tscn`, scripts, sprites idle, rig oficial ou `.gitignore`.
- Confirmar que nenhum `.import` ou `.uid` entrou no escopo de arquivamento.
- Confirmar que todos os 66 `walk_candidates`, 8 `walk_prototypes` e 3 `preview_assets` foram localizados, ou registrar divergencia.
- Confirmar que a documentacao declara os arquivos como historicos/prototipos, nao oficiais.
- Confirmar que nao houve walk cycle final, animacao oficial, gameplay, stage em massa, commit ou push.

## Complexity Tracking

Nenhuma violacao constitucional planejada. A feature e documental/organizacional e mantem gate humano antes de qualquer acao de movimentacao ou commit.

## Phase 0 Research Summary

Ver [research.md](./research.md). A decisao principal e preferir `docs/archive/walk-prototypes-v1/` em vez de `res://assets/.../archive/` porque os arquivos sao historicos e nao precisam ser importados pelo Godot.

## Phase 1 Design Summary

Ver [data-model.md](./data-model.md) e [quickstart.md](./quickstart.md). Nao ha contratos externos para esta feature, pois o fluxo e interno ao repositorio e governado por documentos/manifesto.

## Post-Design Constitution Check

- [x] **Spec First, Implementacao Depois**: Artefatos de planejamento foram criados antes de tarefas/implementacao.
- [x] **Gate Humano Obrigatorio**: A implementacao futura deve parar antes de commit/push e antes de qualquer divergencia de contagem.
- [x] **Character First**: A organizacao protege o pipeline do personagem sem expandir gameplay.
- [x] **Pixel Art HD Consistente**: Prototipos rejeitados ficam separados dos sprites aprovados.
- [x] **Engine e Tecnologia**: Nenhuma alteracao de Godot, GDScript, cena ou runtime.

## Human Gate

Antes de implementar a feature 011, validar humanamente:

1. destino historico `docs/archive/walk-prototypes-v1/`;
2. escopo de 77 arquivos PNG historicos;
3. exclusao de `.import`, `.uid`, Player, cenas, scripts, sprites idle e rig oficial;
4. estrutura do manifesto;
5. regra de parar antes de commit/push.

Sem esse gate, nao mover arquivos, nao apagar arquivos, nao stagear e nao commitar.
