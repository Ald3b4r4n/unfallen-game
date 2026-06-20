# Rig Assembly V1 - SGT Antonio Rafael

## Status

**Feature**: `006-rig-assembly-v1`  
**Direcao**: `front_right`  
**Status**: APROVADA PARCIALMENTE como `Rig Assembly V1`  
**Uso permitido**: laboratorio de rig tecnico, validacao de hierarquia, pivos e recomposicao visual  
**Uso proibido**: Player oficial, gameplay, walk cycle final ou animacao oficial sem nova aprovacao humana

## Decisao Humana - 2026-06-19

A feature **Rig Assembly V1** esta **APROVADA PARCIALMENTE** como montagem tecnica inicial de laboratorio.

Esta aprovacao autoriza somente:

- laboratorio tecnico de rig;
- prova inicial de montagem das partes;
- validacao de hierarquia;
- validacao de pivos;
- base para refinamento manual;
- preparacao para futura animacao controlada.

Esta aprovacao nao autoriza:

- arte final;
- animacao final;
- walk cycle oficial;
- asset final de gameplay;
- substituto do Player runtime;
- base definitiva sem refinamento.

## Objetivo

Montar tecnicamente as partes separadas do SGT Antonio Rafael em uma hierarquia inicial de rig 2D, usando a Rig Parts Separation V1 como entrada e a Base Idle Oficial V1 como referencia visual mestre.

Esta montagem valida:

- recomposicao aproximada da pose `front_right`;
- encaixe das partes separadas;
- hierarquia tecnica para futura articulacao;
- pivos/markers principais;
- rastreabilidade por manifesto.

## Referencias

Referencia visual mestre:

```txt
res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png
```

Partes usadas:

```txt
res://assets/characters/antonio_rafael/rig/parts/front_right/
```

Manifesto de partes:

```txt
res://assets/characters/antonio_rafael/rig/parts_manifest.json
```

Manifesto de montagem:

```txt
res://assets/characters/antonio_rafael/rig/rig_assembly_manifest.json
```

Preview humano:

```txt
res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png
```

## Partes Montadas

Partes obrigatorias:

- `head`
- `neck`
- `torso_base`
- `vest`
- `backpack`
- `upper_arm_left`
- `upper_arm_right`
- `forearm_left`
- `forearm_right`
- `hand_left`
- `hand_right`
- `pelvis`
- `thigh_left`
- `thigh_right`
- `shin_left`
- `shin_right`
- `boot_left`
- `boot_right`

Partes opcionais usadas:

- `glasses`
- `belt`
- `goias_patch`
- `sergeant_chevron`

Partes rejeitadas:

- `radio`
- `holster`

`radio` e `holster` continuam rejeitados por baixa legibilidade na referencia `front_right`.

## Hierarquia

A cena `res://scenes/rig/AntonioRafaelRigLab.tscn` foi organizada como laboratorio isolado, com:

- `Reference/IdleFrontRightReference`;
- `RigRoot/Pelvis/TorsoBase`;
- membros hierarquicos sob `TorsoBase` e `Pelvis`;
- `PivotMarkers`;
- `SkeletonGuide` apenas como guia tecnico;
- `PreviewCamera`.

A montagem usa `Node2D` como ponto de articulacao e `Sprite2D` como filho visual. Os sprites mantem os PNGs originais intactos; a articulacao futura deve acontecer por transform dos nodes.

## Pivos

Os pivos foram herdados de `parts_manifest.json` e registrados em `rig_assembly_manifest.json`.

Resumo das ancoras:

- `head`: base do pescoco;
- `neck`: centro;
- `torso_base`: centro superior do torso;
- `vest`: centro do torso;
- `backpack`: ponto de fixacao nas costas;
- `upper_arm_left`: ombro esquerdo;
- `upper_arm_right`: ombro direito;
- `forearm_left`: cotovelo esquerdo;
- `forearm_right`: cotovelo direito;
- `hand_left`: punho esquerdo;
- `hand_right`: punho direito;
- `pelvis`: centro do quadril;
- `thigh_left`: quadril esquerdo;
- `thigh_right`: quadril direito;
- `shin_left`: joelho esquerdo;
- `shin_right`: joelho direito;
- `boot_left`: tornozelo esquerdo;
- `boot_right`: tornozelo direito.

## Limitacoes

- `neck`, `torso_base`, `backpack` e `pelvis` continuam parcialmente ocultos na origem `front_right` e precisam refinamento manual antes de animacao final.
- `goias_patch` e `sergeant_chevron` sao pequenos em `128x128` e precisam revisao antes de animacao independente.
- A recomposicao e tecnica, nao arte final.
- O preview e material de validacao humana, nao asset final.
- A montagem ainda nao possui animacao.
- A validacao foi estatica porque Godot nao estava disponivel no PATH.
- Ainda falta validacao visual ao vivo no Godot.
- O rig ainda nao deve ser usado no Player.
- Nenhuma animacao oficial foi criada.
- Nenhum walk cycle foi criado.

## Validacao Executada

- Base Idle Oficial V1 preservada.
- Nenhum sprite idle aprovado foi alterado.
- Player oficial nao foi alterado por esta feature.
- Scripts do Player nao foram alterados.
- Partes obrigatorias existem e foram montadas.
- `parts_manifest.json` validado.
- `rig_assembly_manifest.json` criado e validado.
- Preview humano criado.
- Cena de laboratorio permanece isolada e nao instancia o Player.
- Nenhum walk cycle foi criado.
- Nenhuma animacao oficial foi criada.
- Nenhum sistema de gameplay foi alterado.

## Auditoria do Player e Escopo

Auditoria registrada em 2026-06-19:

- `scenes/player/Player.tscn` nao foi alterado por esta feature.
- `scenes/player/Player.tscn` aparece modificado no Git por alteracao pre-existente.
- Hash baseline do Player: `5AAEF2...` (`5AAEF2F318A139F3902D13F7FD91D5AD00317B5554744438D4A0733EB9C06876`).
- `scripts/player/player_controller.gd` permanece com hash `66184CC7168858D839D4090ABDB4E86F2DE8F5E6A3DC78D4D6EC36F9DCF4F958`.
- `scripts/player/player_animation_controller.gd` permanece com hash `BACBDFE58F6FF0FDE242DA6596D3ECC29BD263A992AA3C69774C4C07F6234F36`.
- Os sprites idle aprovados permanecem com hashes inalterados.
- A cena de rig referencia apenas assets do rig e o idle `front_right`.
- Nao ha referencia do rig dentro do Player.
- Nao ha referencia a `walk_*` no Player.
- Nao houve alteracao de gameplay.

## Proxima Etapa

Proxima etapa recomendada: refinamento manual de `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron`, seguido de validacao visual ao vivo no Godot antes de qualquer animacao controlada.

## Rig Refinement V1 - Feature 007

Em 2026-06-19, a feature `007-rig-refinement-v1` refinou manualmente as seis partes criticas herdadas da montagem:

- `neck`;
- `torso_base`;
- `backpack`;
- `pelvis`;
- `goias_patch`;
- `sergeant_chevron`.

Artefatos relacionados:

- backups: `res://assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/`;
- preview: `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png`;
- manifestos atualizados: `parts_manifest.json` e `rig_assembly_manifest.json`;
- documento dedicado: `res://docs/technical/rig-refinement-v1.md`.

O refinamento foi **APROVADO PARCIALMENTE** como `Rig Refinement V1`, melhorando a leitura tecnica e o encaixe visual da montagem. A cena `AntonioRafaelRigLab.tscn` continua isolada, sem animacao oficial, sem walk cycle e sem integracao no Player.

Limitacoes ainda abertas:

- `torso_base` e `pelvis` ainda precisam validacao visual ao vivo no Godot;
- `goias_patch` e `sergeant_chevron` sao detalhes simbolicos por limite de escala;
- o refinamento e tecnico de laboratorio, nao arte final.

Validacao visual posterior: a cena `res://scenes/rig/AntonioRafaelRigLab.tscn` foi aberta no Godot e a montagem refinada foi **APROVADA PARCIALMENTE** como `Validacao Visual Godot - Rig Refinement V1`. A recomposicao mantem a silhueta geral, o personagem continua reconhecivel e a montagem e adequada para laboratorio tecnico, sem autorizar animacao, walk cycle ou Player runtime.
