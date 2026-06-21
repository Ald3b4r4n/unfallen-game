# Implementation Plan: Godot Import UID Policy V1

**Branch**: `012-godot-import-uid-policy-v1` | **Date**: 2026-06-21 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/012-godot-import-uid-policy-v1/spec.md`

## Summary

Planejar uma auditoria segura dos arquivos `.import` e `.uid` do Godot no projeto Unfallen, separando arquivos nao rastreados de arquivos ja versionados, classificando origem/risco e propondo uma politica documentada antes de qualquer decisao de versionamento, remocao ou alteracao de `.gitignore`.

Esta etapa e somente planejamento. Nao altera `.gitignore`, nao move arquivos, nao apaga arquivos, nao stageia `.import` ou `.uid`, nao faz commit e nao faz push.

## Technical Context

**Language/Version**: N/A para codigo; projeto base em Godot 4.x Standard com GDScript  
**Primary Dependencies**: Git para auditoria; filesystem local para listagem; Markdown para artefatos de planejamento  
**Storage**: Planejamento em `specs/012-godot-import-uid-policy-v1/`; documentacao tecnica futura em `docs/technical/godot-import-uid-policy-v1.md`  
**Testing**: Auditoria somente leitura e validacao documental; nenhum teste de runtime nesta etapa  
**Target Platform**: Repositorio local do projeto Unfallen  
**Project Type**: Jogo 2D isometrico em Pixel Art HD com higiene de repositorio Godot  
**Performance Goals**: N/A; sem codigo de jogo ou runtime  
**Constraints**: Nao versionar `.import`/`.uid` em massa; nao apagar; nao alterar `.gitignore` nesta etapa; nao alterar Player, cenas, scripts, sprites idle aprovados ou rig oficial; nao usar `git add .`, `git add -A`, `git commit -am` ou `git clean`  
**Scale/Scope**: Auditar `.import` e `.uid` untracked, verificar `.import`/`.uid` ja rastreados, classificar origem/risco e recomendar politica com gate humano

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Spec First, Implementacao Depois**: A spec 012 existe antes de qualquer implementacao.
- [x] **Gate Humano Obrigatorio**: O plano exige gate humano antes de versionar, apagar, alterar `.gitignore`, commitar ou fazer push.
- [x] **Character First**: A politica protege assets do SGT Antonio Rafael e evita contaminar o pipeline do personagem.
- [x] **Pixel Art HD Consistente**: Imports relacionados a sprites/rig serao classificados antes de qualquer decisao, preservando assets aprovados.
- [x] **Engine e Tecnologia**: Godot 4.x Standard permanece a base; esta feature nao muda engine, scripts, cenas ou runtime.

## Project Structure

### Documentation (this feature)

```text
specs/012-godot-import-uid-policy-v1/
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
│   ├── godot-import-uid-policy-v1.md
│   ├── untracked-cleanup-audit-v1.md
│   └── untracked-cleanup-inventory-v1.md
└── project/
    └── repository-hygiene.md
```

### Sensitive Areas Not To Alter

```text
.specify/feature.json       # estado local Spec Kit; nao incluir automaticamente em commit
.gitignore                  # nao alterar nesta etapa
scenes/player/Player.tscn
scenes/rig/AntonioRafaelRigLab.tscn
scripts/player/
scripts/rig/
assets/characters/antonio_rafael/sprites/idle/
assets/characters/antonio_rafael/rig/
```

**Structure Decision**: A feature 012 deve produzir artefatos de planejamento em `specs/012-godot-import-uid-policy-v1/`. A documentacao tecnica em `docs/` sera criada somente na implementacao, depois de `tasks.md`. Nenhum arquivo `.import`, `.uid` ou `.gitignore` deve ser alterado no plano.

## Audit Questions To Answer

1. Quantos `.import` existem como untracked?
2. Quantos `.uid` existem como untracked?
3. Existem `.import` ou `.uid` ja rastreados no repositorio?
4. Os `.import` pertencem a assets oficiais, prototipos, arquivos arquivados ou sobras antigas?
5. Os `.uid` pertencem a scripts/cenas oficiais, scripts temporarios ou sobras antigas?
6. Algum `.import` esta relacionado a Base Idle Oficial V1?
7. Algum `.import` esta relacionado ao rig tecnico validado?
8. Algum `.uid` esta relacionado a script/cena oficial?
9. O `.gitignore` atual menciona `.import` ou `.uid`?
10. Qual politica e mais segura para o Unfallen?

## Classification Plan

### Import Groups

| Grupo | Definicao | Risco inicial | Recomendacao inicial |
|---|---|---|---|
| `official_asset_imports` | `.import` ligado a asset oficial aprovado ou rig validado | critical/medium conforme origem | `needs_human_review` ou `version_later` |
| `prototype_imports` | `.import` ligado a walk candidates/prototypes rejeitados ou arquivos de prototipo | high | `ignore_later`, `remove_later` ou `separate_feature` |
| `archive_imports` | `.import` ligado a arquivos arquivados historicamente | high | `ignore_later` ou `remove_later` em feature separada |
| `stale_imports` | `.import` cujo asset original nao existe mais | high | `remove_later` apos gate humano |
| `unknown_imports` | `.import` sem origem inferida | high | `needs_human_review` |

### UID Groups

| Grupo | Definicao | Risco inicial | Recomendacao inicial |
|---|---|---|---|
| `official_uid_files` | `.uid` ligado a script/cena oficial | critical/medium conforme origem | `needs_human_review` ou `version_later` |
| `prototype_uid_files` | `.uid` ligado a prototipo ou script temporario | high | `separate_feature` ou `ignore_later` |
| `stale_uid_files` | `.uid` cujo arquivo original nao existe mais | high | `remove_later` apos gate humano |
| `unknown_uid_files` | `.uid` sem origem inferida | high | `needs_human_review` |

## Risk Model

| Risco | Criterio |
|---|---|
| `critical` | Pode afetar Player, cenas oficiais, scripts oficiais, sprites idle aprovados ou rig validado |
| `high` | Pode versionar lixo tecnico, prototipos rejeitados, imports obsoletos ou arquivos sem origem confirmada |
| `medium` | Pode ser util, mas exige validacao humana ou teste no Godot |
| `low` | Documentacao, inventario ou arquivo claramente seguro |

## Recommendation Model

| Recomendacao | Significado |
|---|---|
| `version_later` | Candidato a commit futuro explicito, nunca em massa |
| `ignore_later` | Candidato a regra futura de ignore, se aprovada |
| `keep_local` | Manter localmente fora do Git |
| `remove_later` | Candidato a remocao futura com gate humano destrutivo |
| `needs_human_review` | Exige decisao humana especifica |
| `separate_feature` | Deve virar feature propria antes de qualquer acao |

## Planned Safe Commands

Somente leitura:

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

Scripts locais de leitura/classificacao podem ser usados desde que nao movam, apaguem, stageiem ou alterem arquivos.

## Future Implementation Strategy

1. Capturar estado Git somente leitura.
2. Listar `.import` untracked e `.uid` untracked separadamente.
3. Listar `.import` e `.uid` ja rastreados.
4. Para cada arquivo, inferir arquivo original relacionado e verificar se ele existe.
5. Classificar por grupo e risco.
6. Avaliar se `.gitignore` menciona `.import` ou `.uid`.
7. Criar `docs/technical/godot-import-uid-policy-v1.md`.
8. Atualizar `docs/project/repository-hygiene.md`, `docs/technical/untracked-cleanup-audit-v1.md` e `docs/technical/untracked-cleanup-inventory-v1.md`, se necessario.
9. Parar em gate humano sem executar recomendacoes.

## Prohibited Actions

- Nao usar `git add .`.
- Nao usar `git add -A`.
- Nao usar `git commit -am`.
- Nao usar `git clean`.
- Nao alterar `.gitignore` nesta etapa.
- Nao apagar `.import` ou `.uid`.
- Nao stagear `.import` ou `.uid` em massa.
- Nao alterar Player, cenas, scripts, sprites idle aprovados ou rig oficial.
- Nao criar animacao, walk cycle ou gameplay.
- Nao commitar automaticamente.
- Nao fazer push.

## Validation Plan

- Confirmar que `.import` e `.uid` foram contados separadamente.
- Confirmar que arquivos ja rastreados foram verificados.
- Confirmar que cada grupo planejado recebeu risco e recomendacao.
- Confirmar que relacoes com assets oficiais, prototipos, arquivo historico e sobras foram registradas.
- Confirmar que `.gitignore` foi apenas avaliado, nao alterado.
- Confirmar que nenhum arquivo foi apagado, movido, stageado em massa, commitado ou enviado por push.
- Confirmar que Player, cenas, scripts, sprites idle e rig oficial nao foram alterados.

## Complexity Tracking

Nenhuma violacao constitucional planejada. A feature e documental/de auditoria e preserva gate humano antes de qualquer acao destrutiva, estrutural ou irreversivel.

## Phase 0 Research Summary

Ver [research.md](./research.md). A decisao principal e separar a politica em auditoria/documentacao agora e aplicacao posterior, evitando qualquer mudanca imediata em `.gitignore`, `.import` ou `.uid`.

## Phase 1 Design Summary

Ver [data-model.md](./data-model.md) e [quickstart.md](./quickstart.md). Nao ha contratos externos para esta feature porque a saida e documental e interna ao repositorio.

## Post-Design Constitution Check

- [x] **Spec First, Implementacao Depois**: Planos e artefatos de design foram criados antes de implementacao.
- [x] **Gate Humano Obrigatorio**: O plano exige decisao humana antes de qualquer aplicacao de politica.
- [x] **Character First**: A politica protege assets do personagem principal e evita contaminacao por prototipos.
- [x] **Pixel Art HD Consistente**: Imports associados a assets visuais serao avaliados antes de qualquer decisao.
- [x] **Engine e Tecnologia**: Nenhuma alteracao de Godot, GDScript, runtime ou arquitetura.

## Human Gate

Antes de implementar a feature 012, validar humanamente:

1. grupos de classificacao;
2. modelo de risco;
3. recomendacoes permitidas;
4. escopo de documentos futuros;
5. regra de nao alterar `.gitignore` nesta fase;
6. regra de nao stagear, commitar ou apagar `.import`/`.uid`.

Sem esse gate, nao implementar a politica, nao alterar `.gitignore`, nao mover, nao apagar, nao stagear e nao commitar.
