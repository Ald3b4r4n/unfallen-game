# Rig Articulation Test V1 - SGT Antonio Rafael

## Status

**Feature**: `008-rig-articulation-test-v1`  
**Direcao**: `front_right`  
**Status**: APROVADA PARCIALMENTE como `Rig Articulation Test V1`  
**Uso permitido**: laboratorio tecnico de rig, teste controlado de pivos e articulacao leve  
**Uso proibido**: Player oficial, gameplay, walk cycle final, animacao oficial ou exportacao final de frames

## Objetivo

Esta feature criou testes tecnicos de articulacao controlada do rig do SGT Antonio Rafael no laboratorio isolado:

```txt
res://scenes/rig/AntonioRafaelRigLab.tscn
```

O objetivo e validar se a Rig Refinement V1 consegue responder a movimentos pequenos antes de qualquer tentativa de animacao real.

## Base Usada

Referencia visual mestre preservada:

```txt
res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png
```

Partes refinadas usadas:

```txt
res://assets/characters/antonio_rafael/rig/parts/front_right/
```

Manifestos usados como entrada:

```txt
res://assets/characters/antonio_rafael/rig/parts_manifest.json
res://assets/characters/antonio_rafael/rig/rig_assembly_manifest.json
```

## Estados Tecnicos Criados

Foi adicionado um `AnimationPlayer` de laboratorio em:

```txt
res://scenes/rig/AntonioRafaelRigLab.tscn
```

Nome do node:

```txt
ArticulationTestPlayer
```

Animacoes tecnicas criadas:

- `test_neutral`
- `test_head`
- `test_torso`
- `test_arms`
- `test_legs`
- `test_combined_pose`

Esses estados sao somente testes tecnicos. Eles nao sao animacao oficial, nao sao walk cycle, nao sao gameplay e nao devem ser integrados ao Player.

## Partes e Pivos Testados

### Cabeca

Partes:

- `neck`
- `head`
- `glasses`

Pivos:

- centro do pescoco;
- base da cabeca no pescoco;
- centro dos oculos.

Resultado esperado: rotacao leve da cabeca, retorno ao neutro, rosto e oculos preservados.

### Tronco

Partes:

- `torso_base`
- `vest`
- `backpack`
- `neck`
- `pelvis`
- `belt`

Pivos:

- centro superior do torso;
- centro do colete;
- fixacao da mochila;
- centro do quadril.

Resultado esperado: inclinacao leve do tronco com mochila e colete ainda encaixados.

### Bracos

Partes:

- `upper_arm_left`
- `forearm_left`
- `hand_left`
- `upper_arm_right`
- `forearm_right`
- `hand_right`
- `goias_patch`
- `sergeant_chevron`

Pivos:

- ombros;
- cotovelos;
- punhos;
- centro do patch;
- centro da divisa.

Resultado esperado: swing simples dos bracos sem leitura de ataque e com maos preservadas.

### Pernas

Partes:

- `pelvis`
- `thigh_left`
- `shin_left`
- `boot_left`
- `thigh_right`
- `shin_right`
- `boot_right`

Pivos:

- centro do quadril;
- quadris;
- joelhos;
- tornozelos.

Resultado esperado: flexao leve de pernas com quadril estavel e botas coerentes.

## Manifesto Criado

Manifesto de articulacao:

```txt
res://assets/characters/antonio_rafael/rig/rig_articulation_test_manifest.json
```

Cada teste registra:

- `test_name`;
- `parts_involved`;
- `pivots_used`;
- `rotation_applied`;
- `position_applied`;
- `expected_result`;
- `status`;
- `observed_limitation`.

Status atual dos testes: **APROVADOS PARCIALMENTE** como estados tecnicos de laboratorio. Eles continuam proibidos como animacoes oficiais do jogo.

## Preview Criado

Preview de validacao humana:

```txt
res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png
```

O preview mostra:

- pose neutra;
- teste de cabeca;
- teste de tronco;
- teste de bracos;
- teste de pernas;
- teste combinado simples;
- observacoes externas de limitacao.

Labels existem apenas no preview. Os PNGs individuais das partes nao foram alterados e nao receberam labels.

## Validacao Humana Parcial

Em 2026-06-20, o preview abaixo foi validado visualmente pelo usuario:

```txt
res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_articulation_test_v1_preview.png
```

Resultado registrado:

```txt
Status: APROVADO PARCIALMENTE
Marco: Rig Articulation Test V1
```

Observacoes aprovadas:

- a pose neutra permanece coerente;
- a articulacao da cabeca e sutil e nao quebra rosto/oculos;
- o teste de tronco mantem a silhueta aceitavel;
- os testes de bracos e pernas funcionam como prova tecnica;
- o teste combinado e util para validacao de pivos;
- a montagem continua reconhecivel como SGT Antonio Rafael;
- o preview esta adequado como material de validacao humana.

Esta aprovacao autoriza apenas uso como validacao tecnica de pivos, prova de conceito do rig e etapa intermediaria antes de qualquer animacao controlada. Ela nao aprova animacao oficial, walk cycle final, asset final de gameplay, integracao no Player, substituicao do Player runtime ou exportacao final de frames.

## Validacao Executada

- Base Idle Oficial V1 preservada.
- Nenhum sprite idle aprovado foi alterado.
- Player oficial nao foi alterado por esta feature.
- Scripts do Player nao foram alterados.
- Cena de rig permanece isolada.
- Testes tecnicos existem somente no laboratorio.
- Nenhum estado tecnico foi nomeado como `walk`, `run`, `attack`, `combat`, `gameplay`, `official` ou `final`.
- Manifesto de articulacao foi criado e validado como JSON.
- Preview de articulacao foi criado.
- Pose neutra permanece coerente no preview estatico.
- Cabeca, tronco, bracos, pernas e pose combinada possuem transformacoes leves registradas.
- Mochila e colete permanecem aceitaveis no preview estatico.
- Limitacoes foram registradas.
- Nenhum walk cycle final foi criado.
- Nenhuma animacao oficial foi criada.
- Nenhum sistema de gameplay foi alterado.

## Validacao Godot

Godot nao estava disponivel no PATH durante a execucao automatizada (`godot`, `godot4` e `godot4.6` nao foram encontrados).

Validacao executada na implementacao:

- validacao estatica da cena;
- validacao estatica do manifesto;
- validacao visual do preview gerado;
- auditoria de escopo.

Validacao humana posterior:

- o preview foi aprovado parcialmente pelo usuario;
- os estados tecnicos permanecem material de laboratorio;
- qualquer validacao dinamica detalhada no editor ainda deve ocorrer antes de uma feature de animacao real.

## Limitacoes Restantes

- A validacao ao vivo no editor Godot ainda precisa ser feita por humano.
- `test_arms` e `test_legs` ainda sao poses tecnicas, nao movimento natural final.
- `test_combined_pose` e prova de pivo, nao pose final de animacao.
- Ainda sera necessario refinamento antes de walk cycle futuro.
- Mochila, colete, manga com patch e pernas devem ser observados com atencao em futuros testes dinamicos.
- A validacao atual nao autoriza integracao no Player.
- A validacao atual nao autoriza exportacao de frames finais.
- `torso_base`, `backpack` e `pelvis` podem precisar ajuste fino apos observar a articulacao no editor.
- `goias_patch` e `sergeant_chevron` continuam sendo detalhes simbolicos em escala `128x128`.
- O teste combinado e propositalmente sutil; ele nao deve ser avaliado como animacao final.
- O laboratorio ainda nao produz frames finais para gameplay.

## Escopo Preservado

- `res://scenes/player/Player.tscn` nao foi alterado por esta feature.
- `res://scenes/player/Player.tscn` aparece no Git por alteracao pre-existente; o diff observado e apenas reordenacao de entradas idle na `AnimationLibrary`.
- Hash Git atual do Player auditado: `6f35ff57c80909a1d41466807dee2093784e7fa7`.
- `res://scripts/player/player_controller.gd` nao foi alterado.
- Hash Git atual de `player_controller.gd`: `3ae8e4d5864a563c395499e5a711d1b348a8f492`.
- `res://scripts/player/player_animation_controller.gd` nao foi alterado.
- Hash Git atual de `player_animation_controller.gd`: `150a02c1de671b56777783e264d1cbcbf4d3b443`.
- `res://assets/characters/antonio_rafael/sprites/idle/` nao foi alterado.
- Hash Git atual do idle mestre `front_right`: `af1073890f67e67742df5bec3459d4f776e795bf`.
- Nao ha referencia do rig dentro do Player.
- Nao ha referencia a `walk_*` como animacao oficial no Player.
- Nenhuma animacao oficial foi criada.
- Nenhum walk cycle foi criado.
- Nenhum sistema de gameplay foi alterado.
- Nenhum commit foi feito nesta execucao documental.
- Nenhum push foi feito nesta execucao documental.

## Proxima Etapa Recomendada

Planejar a proxima feature de refinamento/observacao dinamica dos pivos antes de qualquer walk cycle futuro. A recomendacao atual e manter o marco **aprovado parcialmente para laboratorio** e nao promover estes estados a animacao oficial.
