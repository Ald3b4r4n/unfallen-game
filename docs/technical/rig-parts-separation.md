# Separacao de Partes do Rig Tecnico 2D - SGT Antonio Rafael

## Status

**Feature**: `005-rig-parts-separation`  
**Direcao primaria**: `front_right`  
**Status dos assets**: APROVADA PARCIALMENTE como `Rig Parts Separation V1`  
**Uso permitido**: laboratorio de rig tecnico e auditoria visual  
**Uso proibido**: Player oficial, gameplay, walk cycle final ou animacao oficial sem nova aprovacao humana

## Decisao Humana - 2026-06-19

A separacao de partes do rig tecnico 2D do SGT Antonio Rafael esta **APROVADA PARCIALMENTE** como `Rig Parts Separation V1`.

Esta aprovacao autoriza somente:

- uso como base tecnica inicial para laboratorio de rig;
- estudo de separacao de partes;
- preparacao para futura montagem de esqueleto/armacao;
- referencia para refinamento manual das partes;
- etapa intermediaria do pipeline "rig tecnico primeiro, sprites finais depois".

Esta aprovacao nao autoriza:

- arte final;
- animacao final;
- walk cycle oficial;
- asset final de gameplay;
- substituto do Player runtime;
- base definitiva sem refinamento.

## Referencia Visual Mestre

A separacao usa obrigatoriamente:

```txt
res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png
```

Os demais sprites da Base Idle Oficial V1 podem ser consultados apenas para consistencia visual. Nenhum sprite idle aprovado foi alterado, movido, sobrescrito ou regenerado nesta feature.

## Arquivos Criados

Partes obrigatorias criadas em:

```txt
res://assets/characters/antonio_rafael/rig/parts/front_right/
```

Arquivos:

- `head.png`
- `neck.png`
- `torso_base.png`
- `vest.png`
- `backpack.png`
- `upper_arm_left.png`
- `upper_arm_right.png`
- `forearm_left.png`
- `forearm_right.png`
- `hand_left.png`
- `hand_right.png`
- `pelvis.png`
- `thigh_left.png`
- `thigh_right.png`
- `shin_left.png`
- `shin_right.png`
- `boot_left.png`
- `boot_right.png`

Partes opcionais criadas:

- `glasses.png`
- `belt.png`
- `goias_patch.png`
- `sergeant_chevron.png`

Partes opcionais rejeitadas nesta direcao:

- `radio`: nao esta legivel o bastante na referencia `front_right`.
- `holster`: nao esta legivel sem risco de parecer arma funcional ou detalhe inventado.

Arquivos auxiliares:

- `res://assets/characters/antonio_rafael/rig/parts_manifest.json`
- `res://assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png`
- `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png`

## Estrategia Tecnica

As partes foram exportadas em canvas registrado `128x128`. Isso permite recompor a pose aproximada da referencia sobrepondo as partes na origem, sem precisar mover o sprite idle original.

Cada parte:

- e PNG `RGBA`;
- tem fundo transparente;
- nao contem labels;
- nao contem texto externo;
- nao contem fundo verde opaco;
- usa pixels derivados da Base Idle Oficial V1;
- preserva margem para futura articulacao tecnica.

## Pivos Sugeridos

Os pivos estao registrados em:

```txt
res://assets/characters/antonio_rafael/rig/parts_manifest.json
```

Resumo:

- `head`: base do pescoco;
- `neck`: centro;
- `torso_base`: centro superior do torso;
- `vest`: centro do torso;
- `backpack`: centro de fixacao nas costas;
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

## Uso no Laboratorio

A cena:

```txt
res://scenes/rig/AntonioRafaelRigLab.tscn
```

foi atualizada para mostrar:

- referencia visual `front_right`;
- recomposicao aproximada;
- partes separadas posicionadas;
- marcadores de pivo;
- estrutura tecnica futura para rig.

A cena continua isolada e nao substitui:

```txt
res://scenes/player/Player.tscn
```

## Limitacoes

- `neck`, `torso_base`, `backpack` e `pelvis` ficam parcialmente ocultos no idle `front_right`; por isso foram marcados como candidatos que precisam refinamento manual antes de animacao final.
- `goias_patch` e `sergeant_chevron` sao muito pequenos em `128x128` e precisam revisao humana antes de virar detalhe animado independente.
- As partes foram mantidas em canvas registrado `128x128`; uma etapa futura pode recortar canvases individuais menores, desde que preserve pivos e recomposicao.
- A validacao foi estatica, pois Godot nao estava disponivel no PATH desta sessao.
- Ainda falta validacao visual ao vivo no Godot.
- A recomposicao e tecnica, nao arte final.
- O rig ainda nao esta animado.
- O Player oficial nao deve usar estas partes em runtime.
- Esta feature nao aprova animacao, walk cycle ou uso runtime.

## Validacao Executada

- Base Idle Oficial V1 preservada.
- `antonio_rafael_idle_front_right.png` validado como `128x128`, PNG `RGBA` e transparente.
- 18 partes obrigatorias criadas.
- 4 partes opcionais criadas.
- `radio` e `holster` rejeitados com justificativa.
- `parts_manifest.json` criado.
- Preview humano criado.
- Recomposicao aproximada criada.
- Cena de laboratorio atualizada e isolada.
- Player oficial nao foi alterado por esta feature.

## Auditoria do Player Oficial

Auditoria executada em 2026-06-19:

- `scenes/player/Player.tscn` aparece modificado no `git status`, mas o hash atual `5AAEF2F318A139F3902D13F7FD91D5AD00317B5554744438D4A0733EB9C06876` e o mesmo hash registrado antes desta rodada documental.
- O diff atual do arquivo mostra apenas reordenacao das chaves da `AnimationLibrary_idle`; nao ha alteracao de textura, node, script, gameplay, rig ou walk cycle nesta auditoria.
- O arquivo referencia somente os 8 sprites idle aprovados em `res://assets/characters/antonio_rafael/sprites/idle/`.
- Nao ha referencia a `res://assets/characters/antonio_rafael/rig/`, `parts_manifest.json`, `AntonioRafaelRigLab.tscn`, `front_right_recomposition.png` ou animacoes `walk_*`.
- Nenhuma reversao foi executada porque a alteracao observada e pre-existente e nao integra o rig ao Player.

## Proxima Etapa

Proxima etapa recomendada: refinamento manual das partes marcadas com limitacao e validacao visual ao vivo no Godot, ainda dentro do laboratorio de rig. Somente depois disso uma feature futura pode montar/articular o rig e testar movimento em laboratorio antes de qualquer exportacao final de walk cycle.
