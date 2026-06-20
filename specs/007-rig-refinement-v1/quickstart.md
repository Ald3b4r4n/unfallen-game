# Quickstart: Validacao Planejada do Rig Refinement V1

Este guia descreve como validar a implementacao futura da feature. Nesta etapa de planejamento, nenhum PNG deve ser refinado, nenhum preview deve ser gerado e a cena nao deve ser alterada.

## Pre-condicoes

- Base Idle Oficial V1 esta aprovada.
- Rig Parts Separation V1 esta aprovada parcialmente.
- Rig Assembly V1 esta aprovada parcialmente.
- `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png` existe.
- `res://assets/characters/antonio_rafael/rig/parts/front_right/` contem as partes atuais.
- `parts_manifest.json` e `rig_assembly_manifest.json` existem.
- `res://scenes/rig/AntonioRafaelRigLab.tscn` existe como laboratorio isolado.
- `Player.tscn` continua fora do escopo.

## Validacao de Backup

1. Conferir se existe `res://assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/`.
2. Conferir se a pasta contem:
   - `neck.png`;
   - `torso_base.png`;
   - `backpack.png`;
   - `pelvis.png`;
   - `goias_patch.png`;
   - `sergeant_chevron.png`.
3. Confirmar que backups representam o estado anterior ao refinamento.
4. Confirmar que os backups nao foram usados como assets finais de gameplay.

## Validacao dos PNGs Refinados

1. Conferir se as seis partes refinadas existem no path canonico em `rig/parts/front_right/`.
2. Conferir se todas sao PNG `RGBA`.
3. Conferir se todas possuem transparencia valida.
4. Conferir ausencia de fundo verde opaco.
5. Conferir ausencia de labels internos, texto externo, nomes aleatorios ou texto de direcao.
6. Conferir preservacao de escala, silhueta, paleta e identidade visual do SGT Antonio Rafael.

## Validacao Visual por Parte

1. `neck`: verificar encaixe entre cabeca e tronco, tom de pele e leitura anatomica.
2. `torso_base`: verificar volume do tronco, encaixe com colete, pescoco, bracos e quadril.
3. `backpack`: verificar leitura como mochila tatica e separacao de colete/sombra.
4. `pelvis`: verificar ponte visual entre torso e pernas e utilidade como centro do rig.
5. `goias_patch`: verificar se funciona como detalhe simbolico sem texto ilegivel.
6. `sergeant_chevron`: verificar se funciona como divisa simbolica sem label externo.

## Validacao dos Manifestos

1. Abrir `res://assets/characters/antonio_rafael/rig/parts_manifest.json`.
2. Confirmar que cada parte critica registra backup, status anterior, status novo, nota de refinamento e limitacoes restantes.
3. Abrir `res://assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`.
4. Confirmar que cada parte critica registra node, pivo mantido ou ajustado, impacto na montagem e status de encaixe.
5. Confirmar que status usados pertencem ao conjunto permitido:
   - `refined_for_rig_v1`;
   - `needs_minor_adjustment`;
   - `needs_art_refinement`;
   - `symbolic_detail`;
   - `rejected`.

## Validacao do Preview

1. Abrir `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png`.
2. Confirmar que o preview mostra a referencia idle original.
3. Confirmar que o preview mostra estado anterior quando disponivel.
4. Confirmar que o preview mostra estado refinado.
5. Confirmar que as seis partes refinadas estao destacadas.
6. Confirmar que limitacoes restantes estao registradas.
7. Confirmar que o preview nao esta sendo tratado como spritesheet tecnico.

## Validacao da Cena de Laboratorio

1. Abrir `res://scenes/rig/AntonioRafaelRigLab.tscn` se Godot 4.6 estiver disponivel.
2. Confirmar que a cena ainda usa a referencia `front_right`.
3. Confirmar que a cena permanece isolada e nao instancia/substitui `Player.tscn`.
4. Confirmar que a recomposicao continua coerente com o personagem.
5. Confirmar que a cena nao cria walk cycle, animacao oficial ou gameplay.
6. Se Godot nao estiver disponivel, registrar validacao estatica e pendencia de validacao ao vivo.

## Validacao de Escopo

1. Confirmar que `res://scenes/player/Player.tscn` nao foi alterado pela feature.
2. Confirmar que `res://scripts/player/player_controller.gd` nao foi alterado.
3. Confirmar que `res://scripts/player/player_animation_controller.gd` nao foi alterado.
4. Confirmar que nenhum sprite idle aprovado foi alterado.
5. Confirmar que nenhum walk cycle foi criado.
6. Confirmar que nenhuma animacao oficial foi criada.
7. Confirmar que nenhum sistema de gameplay foi criado ou alterado.

## Gate Humano

Ao final da implementacao futura, apresentar:

- preview de refinamento;
- lista das seis partes refinadas;
- lista de backups preservados;
- manifestos atualizados;
- arquivos criados;
- arquivos alterados;
- validacoes tecnicas;
- validacao visual de identidade;
- limitacoes restantes;
- confirmacao de que o Player oficial permaneceu intacto;
- confirmacao de que idles aprovados permaneceram intactos;
- recomendacao: aprovar, aprovar parcialmente ou reprovar;
- confirmacao de que nao houve commit;
- confirmacao de que nao houve push.

Parar antes de qualquer animacao, walk cycle, integracao no Player ou proxima mecanica.
