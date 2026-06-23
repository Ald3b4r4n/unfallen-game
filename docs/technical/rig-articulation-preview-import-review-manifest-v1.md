# Rig Articulation Preview Import Review Manifest V1

**Feature**: `015-review-rig-articulation-preview-import-v1`  
**Data da auditoria**: 2026-06-23  
**Branch**: `015-review-rig-articulation-preview-import-v1`  
**Escopo**: manifesto de revisao de um unico `.import` adicional ligado ao preview tecnico da Rig Articulation Test V1.

Este manifesto nao aprova walk cycle, nao aprova caminhada articulada oficial, nao aprova animacao oficial, nao integra nada ao Player e nao versiona `.import`.

## Observacao Obrigatoria

```txt
Ainda nao existe caminhada articulada oficial no projeto.
O rig atual e tecnico/laboratorial.
O preview da Rig Articulation Test V1 e evidencia visual de teste tecnico do rig, nao walk cycle oficial.
Esta feature nao valida walk cycle.
Esta feature nao cria walk cycle.
Esta feature nao integra walk cycle ao Player.
Esta feature nao transforma o rig em animacao oficial.
```

## Item Revisado

| Import path | Source PNG | Source exists | Source tracked | Import tracked | Rig relationship | Asset type | Risk | Status | Recommendation | Observation |
|---|---|---|---|---|---|---|---|---|---|---|
| `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png.import` | `assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png` | yes | yes | no, untracked | `rig_articulation_test_preview` | `godot_import_metadata` | critical | `articulation_preview_import_join_official_rig_imports` | `join_official_rig_imports` | Import gerado para preview tecnico validado da Rig Articulation Test V1; recomendado para agrupamento futuro com imports oficiais do rig, somente com gate humano e paths explicitos. |

## Evidencia Do `.import`

O arquivo existe localmente e permanece untracked.

Trechos relevantes auditados em modo somente leitura:

```txt
importer="texture"
type="CompressedTexture2D"
source_file="res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png"
```

O PNG de origem existe, e o Git rastreia o PNG:

```txt
assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png
```

## Classificacao

| Campo | Valor |
|---|---|
| Grupo | `rig_articulation_preview_import` |
| Tipo | `godot_import_metadata` |
| Origem provavel | Import automatico do Godot para preview tecnico de articulacao |
| Relacao com feature 014 | Candidato adicional fora do snapshot de 32 official rig imports |
| Relacao com feature 013 | Nao e stale prototype import; a origem PNG existe |
| Relacao com Player | Nenhuma integracao ao Player |
| Relacao com walk cycle | Nenhuma aprovacao de walk cycle |
| Relacao com animacao oficial | Nenhuma aprovacao de animacao oficial |

## Recomendacao

Recomendacao futura: `join_official_rig_imports`.

Motivo:

- o PNG de origem existe e ja e rastreado;
- o import se relaciona ao preview tecnico validado da Rig Articulation Test V1;
- o arquivo ficou fora do snapshot dos 32 official rig imports por diferenca temporal de auditoria;
- a politica do projeto ja permite versionamento seletivo de `.import` oficial, com paths explicitos e gate humano;
- nao ha justificativa para remocao ou ignore automatico nesta feature.

Esta recomendacao nao foi executada. O arquivo nao foi stageado, versionado, movido, editado ou removido.

## Decisao Sugerida Para `.gitignore`

Nao alterar `.gitignore`.

Nao criar regra global para `.import`. Se houver uma politica futura de ignore, ela deve preservar excecoes para imports oficiais de sprites aprovados, rig tecnico validado e previews tecnicos aprovados.

## Confirmacoes De Escopo

- Nenhum `.import` foi removido.
- Nenhum `.import` foi movido.
- Nenhum `.import` foi editado.
- Nenhum `.import` foi stageado.
- Nenhum `.import` foi versionado.
- Nenhum `.uid` foi removido.
- Nenhum `.uid` foi movido.
- Nenhum `.uid` foi editado.
- Nenhum `.uid` foi stageado.
- Nenhum `.uid` foi versionado.
- `.gitignore` nao foi alterado.
- `scenes/player/Player.tscn` nao foi alterado.
- `scenes/rig/AntonioRafaelRigLab.tscn` nao foi alterado.
- `scripts/player/` nao foi alterado.
- `scripts/rig/` nao foi alterado.
- `assets/characters/antonio_rafael/sprites/idle/` nao foi alterado.
- `assets/characters/antonio_rafael/rig/` foi somente lido/auditado; nenhum asset oficial foi alterado.
- Nenhuma caminhada articulada oficial foi criada.
- Nenhum walk cycle foi criado.
- Nenhuma animacao oficial foi criada.
- Nenhum gameplay foi criado.
- Nao houve commit.
- Nao houve push.

## Gate

Este manifesto recomenda aprovar parcialmente a revisao documental e, em etapa futura, considerar o `.import` como complemento dos official rig imports. Qualquer acao sobre o arquivo deve acontecer em commit separado, com path explicito e aprovacao humana.
