# Quickstart: Validacao Planejada da Rig Assembly V1

Este guia descreve como validar a implementacao futura da feature. Nesta etapa de planejamento, o rig ainda nao deve ser montado, a cena nao deve ser alterada e nenhum preview deve ser gerado.

## Pre-condicoes

- Base Idle Oficial V1 esta aprovada.
- Rig Parts Separation V1 esta aprovada parcialmente.
- `res://assets/characters/antonio_rafael/rig/parts_manifest.json` existe.
- `res://assets/characters/antonio_rafael/rig/parts/front_right/` contem as partes obrigatorias.
- `res://scenes/rig/AntonioRafaelRigLab.tscn` existe como laboratorio isolado.
- `Player.tscn` continua fora do escopo.

## Validacao de Arquivos

1. Conferir se existe `res://assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`.
2. Conferir se existe `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png`.
3. Conferir se a cena `res://scenes/rig/AntonioRafaelRigLab.tscn` foi atualizada apenas como laboratorio.
4. Conferir se `parts_manifest.json` continua existindo e parseavel.
5. Conferir se as 18 partes obrigatorias existem em `rig/parts/front_right/`.
6. Conferir que `radio` e `holster` continuam rejeitados se nao houver nova decisao humana.

## Validacao da Montagem

1. Abrir o preview de montagem.
2. Comparar o rig montado com `antonio_rafael_idle_front_right.png`.
3. Confirmar que a montagem ainda parece o SGT Antonio Rafael.
4. Confirmar preservacao de rosto, oculos, cabelo, pele, uniforme, colete, mochila, patch/divisa quando visiveis, paleta, escala e silhueta.
5. Confirmar que a recomposicao nao esta sendo apresentada como arte final.

## Validacao de Pivos

1. Conferir se cada parte obrigatoria tem pivo aplicado ou sugerido no manifesto de montagem.
2. Conferir se os pivos seguem a estrategia:
   - cabeca: base do pescoco;
   - pescoco: centro;
   - tronco/colete: centro superior/centro do torso;
   - mochila: fixacao nas costas;
   - braco superior: ombro;
   - antebraco: cotovelo;
   - mao: punho;
   - quadril/pelvis: centro do quadril;
   - coxa: quadril;
   - canela/perna: joelho;
   - bota: tornozelo.
3. Conferir se partes com pivo duvidoso estao marcadas como `needs_pivot_refinement`.

## Validacao do Manifesto

1. Abrir `rig_assembly_manifest.json`.
2. Conferir se cada parte possui nome, asset, node correspondente, posicao local, pivo, rotacao, escala, status e observacao.
3. Conferir se status usados pertencem ao conjunto permitido:
   - `assembled`;
   - `needs_position_refinement`;
   - `needs_pivot_refinement`;
   - `needs_art_refinement`;
   - `placeholder_only`;
   - `rejected`.
4. Conferir se limitacoes de `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron` continuam registradas.

## Validacao da Cena de Laboratorio

1. Abrir `res://scenes/rig/AntonioRafaelRigLab.tscn`.
2. Confirmar que a cena mostra a referencia visual da Base Idle Oficial V1.
3. Confirmar que a cena mostra a montagem do rig.
4. Confirmar que a cena mostra ou documenta pivos/markers.
5. Confirmar que a cena permanece isolada e nao instancia/substitui `Player.tscn`.
6. Confirmar que a cena nao cria walk cycle, animacao oficial ou gameplay.

## Validacao de Escopo

1. Confirmar que `res://scenes/player/Player.tscn` nao foi alterado por esta feature.
2. Confirmar que `player_controller.gd` nao foi alterado.
3. Confirmar que `player_animation_controller.gd` nao foi alterado.
4. Confirmar que nenhum sprite idle aprovado foi alterado.
5. Confirmar que nenhum frame final de caminhada foi criado.
6. Confirmar que nenhum sistema de gameplay foi criado ou alterado.

## Gate Humano

Ao final da implementacao futura, apresentar:

- preview da montagem;
- lista das partes usadas;
- manifesto `rig_assembly_manifest.json`;
- arquivos criados;
- arquivos alterados;
- validacoes tecnicas;
- validacao visual de identidade;
- limitacoes encontradas;
- confirmacao de que o Player oficial permaneceu intacto;
- confirmacao de que idles aprovados permaneceram intactos;
- recomendacao: aprovar, aprovar parcialmente ou reprovar;
- confirmacao de que nao houve commit;
- confirmacao de que nao houve push.

Parar antes de qualquer animacao, walk cycle, integracao no Player ou proxima mecanica.
