# Implementation Plan: Rig Imports Versioning and Articulated Walk Lab Prep V1

**Branch**: `016-rig-imports-versioning-and-articulated-walk-lab-prep-v1` | **Date**: 2026-06-23 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `specs/016-rig-imports-versioning-and-articulated-walk-lab-prep-v1/spec.md`

## Summary

Planejar uma entrega consolidada em duas frentes: revalidar e preparar o versionamento explicito dos imports oficiais do rig tecnico validado do SGT Antonio Rafael, e preparar a proxima feature `017-articulated-walk-lab-v1` como laboratorio experimental de caminhada articulada. A feature 016 nao cria walk cycle, nao cria animacao oficial, nao altera Player, nao altera cena de rig, nao altera scripts, nao altera PNGs/assets oficiais e nao versiona `.uid`.

Observacao obrigatoria:

```txt
Ainda nao existe caminhada articulada oficial no projeto.
Esta feature nao cria walk cycle oficial.
Esta feature nao cria animacao oficial.
Esta feature nao integra caminhada ao Player.
Esta feature apenas consolida imports oficiais do rig e prepara a proxima feature de laboratorio.
```

## Technical Context

**Language/Version**: Godot 4.6 Standard / GDScript, sem alteracao de codigo nesta feature  
**Primary Dependencies**: Godot import metadata (`.import`), Git, documentos Spec Kit existentes  
**Storage**: Arquivos do repositorio em Markdown e metadados `.import` do Godot; nenhum savegame ou runtime storage  
**Testing**: Auditoria estatica por comandos Git/read-only e validacao documental; nenhuma validacao runtime obrigatoria nesta etapa de plano  
**Target Platform**: Desktop Godot editor workflow; sem build final  
**Project Type**: Jogo 2D isometrico em Pixel Art HD, character-first  
**Performance Goals**: Nao aplicavel a runtime; manter reprodutibilidade de imports oficiais no Godot sem contaminar assets/prototipos  
**Constraints**: No maximo 33 `.import` candidatos; nenhum `.uid`; nenhum `.gitignore`; nenhum glob amplo; nenhum stage de diretorio; nenhum Player/cena/script/PNG/asset oficial alterado  
**Scale/Scope**: Entrega de governanca tecnica e preparacao; futura feature 017 podera criar laboratorio experimental, mas a 016 para antes da implementacao de caminhada

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Spec First, Implementacao Depois**: A spec 016 existe antes deste plano.
- [x] **Gate Humano Obrigatorio**: O plano exige gate humano antes de stage, commit, push, versionamento de imports ou qualquer acao fora da lista aprovada.
- [x] **Character First**: O trabalho permanece centrado no rig tecnico do SGT Antonio Rafael e na preparacao de animacao do personagem.
- [x] **Pixel Art HD Consistente**: O plano preserva os PNGs oficiais e usa `.import` apenas para reprodutibilidade visual dos assets validados.
- [x] **Engine e Tecnologia**: O plano segue Godot 4.x Standard e GDScript, sem migrar arquitetura.

## Project Structure

### Documentation (this feature)

```text
specs/016-rig-imports-versioning-and-articulated-walk-lab-prep-v1/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
└── tasks.md              # Criado somente na etapa /speckit.tasks
```

### Planned Documentation Outputs (implementation stage only)

```text
docs/technical/
├── official-rig-imports-versioning-v1.md
├── articulated-walk-lab-prep-v1.md
├── godot-import-uid-policy-v1.md                 # atualizar se necessario
├── official-rig-imports-review-v1.md             # atualizar se necessario
├── rig-articulation-preview-import-review-v1.md  # atualizar se necessario
├── untracked-cleanup-audit-v1.md                 # atualizar se necessario
└── untracked-cleanup-inventory-v1.md             # atualizar se necessario

docs/project/
└── repository-hygiene.md                         # atualizar se necessario
```

### Import Candidates (implementation stage only)

O plano permite preparar versionamento explicito de no maximo 33 arquivos `.import`:

```text
assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png.import
assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/backpack.png.import
assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/goias_patch.png.import
assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/neck.png.import
assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/pelvis.png.import
assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/sergeant_chevron.png.import
assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/torso_base.png.import
assets/characters/antonio_rafael/rig/parts/front_right/backpack.png.import
assets/characters/antonio_rafael/rig/parts/front_right/belt.png.import
assets/characters/antonio_rafael/rig/parts/front_right/boot_left.png.import
assets/characters/antonio_rafael/rig/parts/front_right/boot_right.png.import
assets/characters/antonio_rafael/rig/parts/front_right/forearm_left.png.import
assets/characters/antonio_rafael/rig/parts/front_right/forearm_right.png.import
assets/characters/antonio_rafael/rig/parts/front_right/glasses.png.import
assets/characters/antonio_rafael/rig/parts/front_right/goias_patch.png.import
assets/characters/antonio_rafael/rig/parts/front_right/hand_left.png.import
assets/characters/antonio_rafael/rig/parts/front_right/hand_right.png.import
assets/characters/antonio_rafael/rig/parts/front_right/head.png.import
assets/characters/antonio_rafael/rig/parts/front_right/neck.png.import
assets/characters/antonio_rafael/rig/parts/front_right/pelvis.png.import
assets/characters/antonio_rafael/rig/parts/front_right/sergeant_chevron.png.import
assets/characters/antonio_rafael/rig/parts/front_right/shin_left.png.import
assets/characters/antonio_rafael/rig/parts/front_right/shin_right.png.import
assets/characters/antonio_rafael/rig/parts/front_right/thigh_left.png.import
assets/characters/antonio_rafael/rig/parts/front_right/thigh_right.png.import
assets/characters/antonio_rafael/rig/parts/front_right/torso_base.png.import
assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_left.png.import
assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_right.png.import
assets/characters/antonio_rafael/rig/parts/front_right/vest.png.import
assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png.import
assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png.import
assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png.import
assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import
```

**Structure Decision**: Esta feature usa a estrutura existente de specs e documentacao. A implementacao futura pode stagear somente os `.import` aprovados por caminhos literais, sem glob e sem diretorio inteiro. Nenhuma pasta nova de assets, cena ou script deve ser criada nesta feature.

## Complexity Tracking

Nenhuma violacao constitucional prevista.

## Phase 0 - Research Plan

1. Confirmar politica vigente de `.import` e `.uid` a partir de `docs/technical/godot-import-uid-policy-v1.md`.
2. Confirmar lista dos 32 official rig imports a partir de `docs/technical/official-rig-imports-review-manifest-v1.md`.
3. Confirmar recomendacao do preview de articulacao a partir de `docs/technical/rig-articulation-preview-import-review-manifest-v1.md`.
4. Confirmar que os `.import` de prototipos arquivados em `docs/archive/walk-prototypes-v1` continuam fora do escopo.
5. Confirmar que `.uid`, `.gitignore`, Player, cena de rig, scripts, sprites idle e PNGs/assets oficiais nao serao alterados.

## Phase 1 - Design Plan

1. Criar modelo de dados documental para:
   - `OfficialRigImport`
   - `ArticulationPreviewImport`
   - `SourcePNG`
   - `VersioningDecision`
   - `WalkLabPrep`
   - `SafetyGate`
2. Nao criar contratos de API, pois a feature nao expoe interface publica nem altera runtime.
3. Criar quickstart de execucao segura para a futura implementacao.
4. Atualizar `AGENTS.md` para apontar para este plano.

## Implementation Strategy for Future Tasks

1. Executar auditoria read-only:

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

2. Revalidar cada `.import` candidato contra os 10 criterios da spec.
3. Gerar documentacao final em `docs/technical/official-rig-imports-versioning-v1.md`.
4. Gerar preparacao da feature 017 em `docs/technical/articulated-walk-lab-prep-v1.md`.
5. Atualizar documentos correlatos apenas se necessario.
6. Apresentar gate humano antes de qualquer commit ou push.

## Forbidden Implementation Patterns

- Nao usar `git add .`.
- Nao usar `git add -A`.
- Nao usar `git commit -am`.
- Nao usar `git clean`.
- Nao usar glob amplo para stage.
- Nao stagear diretorios inteiros.
- Nao remover `.import`.
- Nao versionar `.uid`.
- Nao alterar `.gitignore`.
- Nao alterar Player, cena de rig, scripts, sprites idle aprovados ou PNGs/assets oficiais.
- Nao criar walk cycle, caminhada articulada oficial, animacao oficial ou gameplay.

## Validation Plan

Antes do gate humano da implementacao futura, validar:

1. 32 official rig imports revalidados.
2. 1 import adicional do preview revalidado.
3. Total aprovado nao passa de 33 `.import`.
4. Todos os `.import` aprovados possuem PNG de origem existente.
5. Todos os PNGs de origem sao rastreados ou oficialmente documentados.
6. Nenhum import de `docs/archive/walk-prototypes-v1` entrou no conjunto.
7. Nenhum `.uid` foi stageado.
8. `.gitignore` nao foi alterado.
9. Nenhum Player foi alterado.
10. Nenhuma cena de rig existente foi alterada.
11. Nenhum script foi alterado.
12. Nenhum sprite idle aprovado foi alterado.
13. Nenhum PNG/asset oficial foi alterado.
14. Documentacao de versionamento criada.
15. Documentacao de preparacao do walk lab criada.
16. Foi registrado que ainda nao existe caminhada articulada oficial.
17. Nao houve walk cycle oficial.
18. Nao houve animacao oficial.
19. Nao houve gameplay.
20. Nao houve commit automatico.
21. Nao houve push automatico.

## Human Gate

O plano termina com gate humano antes de implementacao. A implementacao futura deve apresentar:

1. total de `.import` avaliados;
2. total de `.import` aprovados para stage explicito;
3. lista literal dos caminhos aprovados;
4. confirmacao de que nenhum `.uid` foi stageado;
5. confirmacao de que `.gitignore` nao foi alterado;
6. confirmacao de que Player/cenas/scripts/assets oficiais nao foram alterados;
7. confirmacao de que ainda nao existe caminhada articulada oficial;
8. documentos criados/atualizados;
9. recomendacao para commit;
10. confirmacao de que nao houve commit;
11. confirmacao de que nao houve push.

## Post-Design Constitution Check

- [x] **Spec First, Implementacao Depois**: Planejamento gerado a partir da spec 016.
- [x] **Gate Humano Obrigatorio**: Gate humano explicito antes de implementacao, commit e push.
- [x] **Character First**: Continua focado no rig tecnico do SGT Antonio Rafael.
- [x] **Pixel Art HD Consistente**: Preserva assets e imports oficiais ligados ao rig validado.
- [x] **Engine e Tecnologia**: Mantem Godot 4.x Standard, GDScript e arquitetura existente.
