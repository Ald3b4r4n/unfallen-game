# Implementation Plan: Remove Stale Prototype Imports V1

**Branch**: `013-remove-stale-prototype-imports-v1` | **Date**: 2026-06-21 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/013-remove-stale-prototype-imports-v1/spec.md`

## Summary

Planejar uma remoção segura, controlada e documentada somente dos `.import` obsoletos classificados como `prototype_imports` pela feature 012. A remoção futura deve atingir apenas imports de protótipos antigos/rejeitados de walk cycle cujos PNGs de origem estão ausentes ou arquivados historicamente em `docs/archive/walk-prototypes-v1/`.

Esta etapa é somente planejamento. Não remove arquivos `.import`, não remove arquivos `.uid`, não altera `.gitignore`, não move arquivos, não stageia, não faz commit e não faz push.

## Technical Context

**Language/Version**: N/A para código; projeto base em Godot 4.x Standard com GDScript  
**Primary Dependencies**: Git para auditoria; filesystem local para verificação de existência; Markdown para plano, manifesto futuro e documentação  
**Storage**: Planejamento em `specs/013-remove-stale-prototype-imports-v1/`; documentação futura em `docs/technical/`  
**Testing**: Auditoria documental, validação de contagem e verificação de diffs sensíveis; nenhum teste de runtime  
**Target Platform**: Repositório local do projeto Unfallen  
**Project Type**: Jogo 2D isométrico em Pixel Art HD com higiene de repositório Godot  
**Performance Goals**: N/A; sem execução de jogo ou alteração de runtime  
**Constraints**: Tratar somente `77 prototype_imports`; não tocar em `32 official_asset_imports`, `2 official_uid_files`, `.uid`, `.gitignore`, Player, cenas, scripts, sprites idle aprovados ou rig oficial; não usar `git add .`, `git add -A`, `git commit -am` ou `git clean`  
**Scale/Scope**: Remoção futura pontual por lista explícita de `.import` stale de protótipos, com manifesto e gate humano

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Spec First, Implementação Depois**: A spec 013 existe antes de qualquer implementação.
- [x] **Gate Humano Obrigatório**: O plano exige gate humano antes de remoção, commit ou push.
- [x] **Character First**: A feature protege assets oficiais do SGT Antônio Rafael e remove apenas resíduos de protótipos rejeitados.
- [x] **Pixel Art HD Consistente**: Nenhum sprite oficial ou asset visual validado será alterado; imports oficiais ficam fora do escopo.
- [x] **Engine e Tecnologia**: Godot 4.x Standard permanece a base; a feature não muda engine, scripts, cenas ou runtime.

## Project Structure

### Documentation (this feature)

```text
specs/013-remove-stale-prototype-imports-v1/
├── spec.md
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
│   ├── stale-prototype-imports-removal-v1.md
│   ├── stale-prototype-imports-removal-manifest-v1.md
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
official_asset_imports
official_uid_files
```

**Structure Decision**: A feature 013 deve criar somente artefatos de planejamento em `specs/013-remove-stale-prototype-imports-v1/` nesta etapa. A documentação de remoção e o manifesto serão criados somente na implementação, depois de `tasks.md`. A remoção futura deve ser por lista explícita validada, nunca por diretório inteiro ou glob amplo.

## Source of Truth

Usar como referência:

- `docs/technical/godot-import-uid-policy-v1.md`
- `docs/technical/untracked-cleanup-audit-v1.md`
- `docs/technical/untracked-cleanup-inventory-v1.md`
- `docs/archive/walk-prototypes-v1/`
- `docs/archive/walk-prototypes-v1/manifest.md`

## Removal Criteria For Future Implementation

Um `.import` só pode ser removido na implementação futura se todos os critérios forem verdadeiros:

1. Foi classificado como `prototype_imports`.
2. Está ligado a protótipo de walk rejeitado/antigo.
3. Não pertence a asset oficial.
4. Não pertence à Base Idle Oficial V1.
5. Não pertence ao rig técnico validado.
6. Não pertence a arquivo atualmente usado por cena/script oficial.
7. O arquivo de origem PNG não existe mais no local original ou foi arquivado em `docs/archive/walk-prototypes-v1/`.
8. A remoção está registrada em manifesto/documentação.
9. Não é `.uid`.
10. Não está no grupo `official_asset_imports`.

Se qualquer critério falhar, o arquivo deve ser mantido para revisão humana.

## Planned Safe Commands

Somente leitura nesta etapa de planejamento:

```powershell
git status --short --untracked-files=all
git ls-files --others --exclude-standard
git diff --name-only
git diff --stat
Get-ChildItem -Recurse -Filter "*.import"
Get-ChildItem -Recurse -Filter "*.uid"
```

Na implementação futura, qualquer remoção autorizada deve usar lista explícita de caminhos já validados. Não planejar `git clean`. Não planejar remoção de diretórios inteiros.

## Future Implementation Strategy

1. Capturar estado Git somente leitura.
2. Listar todos os `.import` untracked.
3. Filtrar apenas os candidatos compatíveis com `prototype_imports`.
4. Confirmar contagem esperada de 77; se divergir, parar para revisão humana.
5. Inferir o PNG relacionado de cada `.import` removendo o sufixo `.import`.
6. Confirmar que o PNG original está ausente ou arquivado historicamente.
7. Excluir qualquer item que toque em `.uid`, `official_asset_imports`, `official_uid_files`, Base Idle V1, rig técnico validado, Player, cenas, scripts ou `.gitignore`.
8. Gerar manifesto de decisão para todos os candidatos avaliados.
9. Remover somente os itens aprovados por todos os critérios.
10. Atualizar documentação técnica e inventários.
11. Validar ausência de alterações proibidas.
12. Parar em gate humano sem commit e sem push.

## Planned Manifest

`docs/technical/stale-prototype-imports-removal-manifest-v1.md` deve listar cada `.import` avaliado com:

- caminho original;
- grupo;
- origem provável;
- arquivo de origem relacionado;
- existência do arquivo de origem;
- motivo da remoção ou manutenção;
- status;
- decisão.

Status permitidos:

- `removed_stale_prototype_import`
- `kept_for_review`
- `excluded_official_import`
- `excluded_uid`
- `excluded_unknown_origin`

## Planned Documentation

Criar na implementação futura:

- `docs/technical/stale-prototype-imports-removal-v1.md`
- `docs/technical/stale-prototype-imports-removal-manifest-v1.md`

Atualizar, se necessário:

- `docs/technical/godot-import-uid-policy-v1.md`
- `docs/technical/untracked-cleanup-audit-v1.md`
- `docs/technical/untracked-cleanup-inventory-v1.md`
- `docs/project/repository-hygiene.md`

## Validation Plan

O plano deve orientar a implementação futura a validar:

1. Os 77 `prototype_imports` foram auditados.
2. Cada arquivo recebeu decisão documentada.
3. Somente `.import` obsoleto de protótipo foi removido.
4. Nenhum `.uid` foi removido.
5. Nenhum `official_asset_imports` foi removido.
6. Nenhum asset oficial foi alterado.
7. Player não foi alterado.
8. Cena de rig não foi alterada.
9. Scripts não foram alterados.
10. Sprites idle aprovados não foram alterados.
11. `.gitignore` não foi alterado.
12. Manifesto de remoção foi criado.
13. Documentação técnica foi criada.
14. Não houve commit automático.
15. Não houve push.

## Prohibited Actions

- Não remover arquivos nesta etapa de planejamento.
- Não remover `.uid`.
- Não remover `.import` oficial.
- Não alterar `.gitignore`.
- Não alterar Player, cena de rig, scripts, sprites idle aprovados ou rig oficial.
- Não criar animação, walk cycle ou gameplay.
- Não usar `git add .`.
- Não usar `git add -A`.
- Não usar `git commit -am`.
- Não usar `git clean`.
- Não fazer commit.
- Não fazer push.

## Complexity Tracking

Nenhuma violação constitucional planejada. A feature é uma limpeza controlada de resíduos Godot com critérios explícitos, rastreabilidade e gate humano.

## Phase 0 Research Summary

Ver [research.md](./research.md). A decisão principal é separar a remoção futura em uma lista explícita dos 77 `prototype_imports`, mantendo fora `official_asset_imports`, `.uid`, `.gitignore` e áreas oficiais.

## Phase 1 Design Summary

Ver [data-model.md](./data-model.md) e [quickstart.md](./quickstart.md). Não há contratos externos para esta feature porque a saída é documental e de limpeza local controlada.

## Post-Design Constitution Check

- [x] **Spec First, Implementação Depois**: Plano e artefatos de design criados antes da implementação.
- [x] **Gate Humano Obrigatório**: O plano termina antes de qualquer remoção e exige gate humano na implementação.
- [x] **Character First**: A feature protege o pipeline do personagem principal e não altera assets aprovados.
- [x] **Pixel Art HD Consistente**: A feature remove apenas imports obsoletos de protótipos, sem alterar sprites.
- [x] **Engine e Tecnologia**: Nenhuma alteração em Godot, GDScript, runtime ou arquitetura.

## Human Gate

Antes de implementar, validar humanamente:

1. escopo limitado aos 77 `prototype_imports`;
2. critérios de remoção;
3. proibição de tocar em `.uid`, `official_asset_imports`, `official_uid_files`, Base Idle V1 e rig validado;
4. formato do manifesto;
5. documentos a criar/atualizar;
6. regra de não alterar `.gitignore`;
7. regra de não fazer commit ou push nesta implementação sem aprovação explícita.

Sem esse gate, não remover arquivos, não alterar `.gitignore`, não mover, não stagear, não commitar e não fazer push.
