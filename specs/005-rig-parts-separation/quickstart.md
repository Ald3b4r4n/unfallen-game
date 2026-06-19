# Quickstart: Validacao Planejada da Separacao de Partes do Rig

Este guia descreve como validar a implementacao futura da feature. Nesta etapa de planejamento, nenhuma parte PNG deve ser criada e nenhuma cena deve ser alterada.

## Pre-condicoes

- Base Idle Oficial V1 esta aprovada.
- Walk V1/V2/V3 e candidata manual permanecem reprovadas e fora do Player.
- `res://scenes/rig/AntonioRafaelRigLab.tscn` existe como laboratorio tecnico isolado.
- `Player.tscn` continua fora do escopo.

## Validacao de Arquivos

1. Conferir se existe `res://assets/characters/antonio_rafael/rig/parts_manifest.json`.
2. Conferir se existe `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png`.
3. Conferir se existe a pasta da direcao primaria `res://assets/characters/antonio_rafael/rig/parts/front_right/`.
4. Conferir se as 18 partes obrigatorias existem ou possuem limitacao documentada no manifesto.
5. Conferir que todos os PNGs de partes estao em `RGBA`.
6. Conferir que todos os PNGs de partes possuem transparencia real.
7. Conferir que nenhum PNG individual possui label, texto, fundo verde opaco, cenario ou grid.

## Validacao de Identidade Visual

1. Abrir o preview humano.
2. Comparar as partes separadas com `antonio_rafael_idle_front_right.png`.
3. Confirmar preservacao de rosto, oculos, cabelo, pele, uniforme, colete, mochila, patch/divisa quando visiveis, paleta, escala e silhueta.
4. Confirmar que a recomposicao aproximada ainda parece o SGT Antonio Rafael.
5. Confirmar ausencia de Policia Civil, Sargento Silva, nomes aleatorios, zumbis, gore, armas em destaque ou personagem generico.

## Validacao do Manifesto

1. Abrir `parts_manifest.json`.
2. Conferir se cada parte possui nome, caminho, direcao de origem, tamanho, pivo sugerido, observacao de uso, dependencia visual e status.
3. Conferir se os pivos seguem a estrategia:
   - cabeca: base do pescoco;
   - tronco/colete: centro superior do torso;
   - mochila: fixacao nas costas;
   - braco superior: ombro;
   - antebraco: cotovelo;
   - mao: punho;
   - coxa: quadril;
   - canela/perna: joelho;
   - bota: tornozelo.
4. Conferir se limitacoes de partes ocultas foram registradas.

## Validacao da Cena de Laboratorio

1. Abrir `res://scenes/rig/AntonioRafaelRigLab.tscn`.
2. Confirmar que a cena mostra referencia visual da Base Idle Oficial V1.
3. Confirmar que a cena permanece isolada e nao instancia/substitui `Player.tscn`.
4. Confirmar que a recomposicao das partes pode ser visualizada ou planejada na cena.
5. Confirmar que placeholders de pivo/rig sao apenas tecnicos.

## Validacao de Escopo

1. Confirmar que `res://scenes/player/Player.tscn` nao foi alterado.
2. Confirmar que `player_controller.gd` nao foi alterado.
3. Confirmar que `player_animation_controller.gd` nao foi alterado.
4. Confirmar que nenhum sprite idle aprovado foi alterado.
5. Confirmar que nenhum walk cycle final foi criado.
6. Confirmar que nenhum sistema de gameplay foi criado ou alterado.

## Gate Humano

Ao final da implementacao futura, apresentar:

- preview da separacao de partes;
- lista das partes criadas;
- manifesto `parts_manifest.json`;
- validacoes tecnicas;
- validacao visual de identidade;
- limitacoes encontradas;
- confirmacao de que o Player oficial permaneceu intacto;
- recomendacao: aprovar, aprovar parcialmente ou reprovar;
- confirmacao de que nao houve commit;
- confirmacao de que nao houve push.

Parar antes de qualquer animacao, walk cycle, integracao no Player ou proxima mecanica.
