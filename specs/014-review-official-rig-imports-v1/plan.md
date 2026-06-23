# Implementation Plan: Review Official Rig Imports V1

**Branch**: `014-review-official-rig-imports-v1` | **Date**: 2026-06-23 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/014-review-official-rig-imports-v1/spec.md`

## Summary

Planejar uma revisao segura e nao destrutiva dos `32 official_asset_imports` ligados ao rig tecnico validado do personagem Antonio Rafael. A feature deve produzir manifesto e documentacao para decidir futuramente se esses `.import` continuam locais, entram em commit separado, sao ignorados futuramente ou permanecem pendentes para gate humano.

Esta etapa e somente planejamento. Nao remove `.import`, nao remove `.uid`, nao altera `.gitignore`, nao altera Player, cenas, scripts, sprites idle aprovados, PNGs do rig, gameplay, walk cycle ou animacao oficial.

## Technical Context

**Language/Version**: N/A para codigo; projeto base em Godot 4.x Standard com GDScript  
**Primary Dependencies**: Git para auditoria; filesystem local para verificacao de existencia; documentos tecnicos das features 012, 013 e rig  
**Storage**: Planejamento em `specs/014-review-official-rig-imports-v1/`; documentacao futura em `docs/technical/`  
**Testing**: Auditoria documental, validacao de contagem, validacao de existencia de fonte e verificacao de diffs sensiveis  
**Target Platform**: Repositorio local do projeto Unfallen  
**Project Type**: Jogo 2D isometrico em Pixel Art HD com pipeline de personagem/rig tecnico  
**Performance Goals**: N/A; sem execucao de jogo ou alteracao de runtime  
**Constraints**: Tratar somente os 32 `official_asset_imports`; nao tocar em `.uid`, `.gitignore`, Player, cena de rig, scripts, sprites idle aprovados ou assets oficiais do rig; nao usar `git add .`, `git add -A`, `git commit -am` ou `git clean`  
**Scale/Scope**: Revisao documental de 32 arquivos `.import` oficiais do rig, com recomendacao futura e gate humano

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Spec First, Implementacao Depois**: A spec 014 existe antes de qualquer planejamento de execucao.
- [x] **Gate Humano Obrigatorio**: O plano exige gate humano antes de versionar, ignorar, remover, stagear, commitar ou fazer push.
- [x] **Character First**: A feature protege o pipeline do personagem Antonio Rafael e revisa apenas imports do rig tecnico validado.
- [x] **Pixel Art HD Consistente**: A feature nao altera PNGs, sprites, escala ou configuracao visual; apenas planeja revisao de imports.
- [x] **Engine e Tecnologia**: Godot 4.x Standard permanece a referencia; nao ha mudanca de engine, linguagem, cena ou runtime.

## Project Structure

### Documentation (this feature)

```text
specs/014-review-official-rig-imports-v1/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── checklists/
│   └── requirements.md
└── tasks.md              # Criado somente na etapa /speckit.tasks
```

### Planned Documentation Outputs (future implementation)

```text
docs/
├── technical/
│   ├── official-rig-imports-review-v1.md
│   ├── official-rig-imports-review-manifest-v1.md
│   ├── godot-import-uid-policy-v1.md
│   ├── untracked-cleanup-audit-v1.md
│   └── untracked-cleanup-inventory-v1.md
└── project/
    └── repository-hygiene.md
```

### Sensitive Areas Not To Alter

```text
.specify/feature.json
.gitignore
scenes/player/Player.tscn
scenes/rig/AntonioRafaelRigLab.tscn
scripts/player/
scripts/rig/
assets/characters/antonio_rafael/sprites/idle/
assets/characters/antonio_rafael/rig/
*.uid
*.import
```

Observacao: `assets/characters/antonio_rafael/rig/` pode ser lido para auditoria, mas nao pode ser alterado nesta feature.

**Structure Decision**: A feature 014 cria apenas artefatos de planejamento em `specs/014-review-official-rig-imports-v1/`. A documentacao tecnica de revisao e o manifesto serao criados somente na implementacao, depois de `tasks.md` aprovado.

## Source Of Truth

Usar como referencia:

- `docs/technical/godot-import-uid-policy-v1.md`
- `docs/technical/stale-prototype-imports-removal-v1.md`
- `docs/technical/stale-prototype-imports-removal-manifest-v1.md`
- `docs/technical/untracked-cleanup-audit-v1.md`
- `docs/technical/untracked-cleanup-inventory-v1.md`
- `docs/project/repository-hygiene.md`
- `docs/technical/rig-refinement-v1.md`
- `docs/technical/rig-articulation-test-v1.md`
- `docs/technical/rig-assembly-v1.md`

Se algum documento estiver ausente na implementacao futura, registrar a ausencia como pendencia e continuar com as fontes disponiveis.

## Planned Review Criteria

Cada `.import` oficial do rig deve ser revisado com:

1. caminho do `.import`;
2. arquivo PNG de origem relacionado;
3. existencia do PNG de origem;
4. relacao com rig tecnico validado;
5. relacao com parte oficial do rig;
6. relacao com preview oficial;
7. tipo de asset;
8. necessidade para abrir ou validar o rig no Godot;
9. risco de ausencia do `.import`;
10. risco de versionar o `.import`;
11. recomendacao futura;
12. status;
13. pendencia humana, se houver.

## Planned Statuses

- `official_import_reviewed_keep_local`
- `official_import_reviewed_version_later`
- `official_import_reviewed_ignore_later`
- `official_import_needs_human_review`
- `official_import_excluded_not_rig`
- `official_import_excluded_unknown_origin`

## Planned Risk Levels

- `critical`: pode afetar rig tecnico validado, partes do personagem, previews oficiais, cena de rig ou futura reprodutibilidade no Godot.
- `high`: pode gerar inconsistencia visual/tecnica, perda de configuracao de importacao ou confusao entre asset oficial e residuo.
- `medium`: exige validacao humana ou teste no Godot antes de decisao final.
- `low`: documentacao, inventario ou revisao sem impacto direto.

## Planned Safe Commands

Somente leitura nesta etapa e na auditoria futura:

```powershell
git status --short --untracked-files=all
git ls-files --others --exclude-standard
git ls-files "*.import"
git ls-files "*.uid"
git diff --name-only
git diff --stat
Get-ChildItem -Recurse -Filter "*.import"
Get-ChildItem -Recurse -Filter "*.uid"
```

Scripts auxiliares podem processar listas e gerar documentacao futura, mas nao podem remover, mover, alterar, restaurar, stagear ou editar arquivos sensiveis.

## Future Implementation Strategy

1. Capturar estado Git em modo somente leitura.
2. Listar `.import` e `.uid` untracked.
3. Filtrar somente `.import` sob `assets/characters/antonio_rafael/rig/`.
4. Confirmar contagem esperada de 32 `official_asset_imports`; se divergir, parar para revisao humana.
5. Inferir o PNG de origem removendo o sufixo `.import`.
6. Confirmar que o PNG de origem existe.
7. Classificar relacao: parte de rig, backup de refinamento, preview oficial, recomposicao ou outro artefato de rig.
8. Atribuir risco, status e recomendacao futura a cada item.
9. Criar manifesto de revisao com todos os itens.
10. Criar documento tecnico de revisao com totais, politica recomendada e pendencias.
11. Atualizar documentos correlatos apenas para registrar a revisao, se necessario.
12. Validar que nenhum `.import`, `.uid`, `.gitignore`, Player, cena, script, sprite idle, PNG de rig, gameplay, walk cycle ou animacao oficial foi alterado.
13. Parar em gate humano sem commit e sem push.

## Planned Documentation

Criar na implementacao futura:

- `docs/technical/official-rig-imports-review-v1.md`
- `docs/technical/official-rig-imports-review-manifest-v1.md`

Atualizar, se necessario:

- `docs/technical/godot-import-uid-policy-v1.md`
- `docs/technical/untracked-cleanup-audit-v1.md`
- `docs/technical/untracked-cleanup-inventory-v1.md`
- `docs/project/repository-hygiene.md`

## Validation Plan

O plano orienta a implementacao futura a validar:

1. Os 32 `official_asset_imports` foram auditados ou divergencia registrada.
2. Cada `.import` recebeu decisao documentada.
3. Nenhum `.import` foi removido, movido, alterado, stageado ou versionado.
4. Nenhum `.uid` foi removido, movido, alterado, stageado ou versionado.
5. Nenhum asset oficial foi alterado.
6. `.gitignore` nao foi alterado.
7. Player nao foi alterado.
8. Cena de rig nao foi alterada.
9. Scripts nao foram alterados.
10. Sprites idle aprovados nao foram alterados.
11. Manifesto de revisao foi criado.
12. Documentacao tecnica foi criada.
13. Nao houve commit automatico.
14. Nao houve push.

## Prohibited Actions

- Nao remover arquivos.
- Nao mover arquivos.
- Nao stagear `.import`.
- Nao stagear `.uid`.
- Nao versionar `.import`.
- Nao versionar `.uid`.
- Nao alterar `.gitignore`.
- Nao alterar PNGs do rig.
- Nao alterar cenas.
- Nao alterar scripts.
- Nao alterar Player.
- Nao alterar cena de rig.
- Nao criar walk cycle.
- Nao criar animacao oficial.
- Nao criar gameplay.
- Nao usar `git add .`.
- Nao usar `git add -A`.
- Nao usar `git commit -am`.
- Nao usar `git clean`.
- Nao fazer commit.
- Nao fazer push.

## Complexity Tracking

Nenhuma violacao constitucional planejada. A feature e uma revisao documental de imports oficiais do rig, sem acao destrutiva e com gate humano.

## Phase 0 Research Summary

Ver [research.md](./research.md). Decisao principal: revisar os 32 imports oficiais por manifesto e manter qualquer acao de versionamento/ignore/remocao para feature ou gate posterior.

## Phase 1 Design Summary

Ver [data-model.md](./data-model.md) e [quickstart.md](./quickstart.md). Nao ha contratos externos para esta feature porque a saida e documental e de auditoria local.

## Post-Design Constitution Check

- [x] **Spec First, Implementacao Depois**: Plano e artefatos de design criados apos spec.
- [x] **Gate Humano Obrigatorio**: O plano termina antes de implementar qualquer revisao ou decisao.
- [x] **Character First**: A revisao protege o pipeline do personagem principal.
- [x] **Pixel Art HD Consistente**: Nao ha alteracao visual ou de import nesta etapa.
- [x] **Engine e Tecnologia**: Sem mudanca em Godot, GDScript, runtime ou arquitetura.

## Human Gate

Antes de implementar, validar humanamente:

1. escopo limitado aos 32 `official_asset_imports`;
2. criterios de revisao e riscos;
3. proibicao de remover, stagear ou versionar `.import`;
4. proibicao de tocar em `.uid`, `.gitignore`, Player, cena de rig, scripts, sprites idle e PNGs do rig;
5. formato do manifesto;
6. documentos a criar/atualizar;
7. regra de nao fazer commit ou push nesta implementacao sem aprovacao explicita.

Sem esse gate, nao implementar, nao remover, nao mover, nao stagear, nao commitar e nao fazer push.
