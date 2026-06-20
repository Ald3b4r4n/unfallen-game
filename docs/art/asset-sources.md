# Registro de Origem e Rastreabilidade de Assets

**Personagem**: SGT Antonio Rafael  
**Projeto**: Unfallen  
**Rodada registrada**: primeira rodada oficial valida de assets idle  
**Decisao humana**: APROVADA como BASE IDLE OFICIAL V1 em 2026-06-18

## Referencias Reais

| Asset | Descricao | Origem | Status |
|---|---|---|---|
| `res://assets/characters/antonio_rafael/references/ref_1.jpg` | Foto real de referencia fisica/rosto/fisico | Fornecida pelo usuario | Restrito / referencia interna |
| `res://assets/characters/antonio_rafael/references/ref_2.png` | Foto real de referencia de rosto, oculos e uniforme | Fornecida pelo usuario | Restrito / referencia interna |
| `res://assets/characters/antonio_rafael/references/ref_3.png` | Foto real de referencia de rosto e expressao | Fornecida pelo usuario | Restrito / referencia interna |
| `res://assets/characters/antonio_rafael/references/ref_4.png` | Foto real de referencia PMGO, patch e postura | Fornecida pelo usuario | Restrito / referencia interna |

As fotos reais foram usadas como referencia visual direta para rosto, tom de pele, cabelo, oculos, expressao, aparencia geral, postura e elementos PMGO. Elas nao devem ser exportadas como assets finais de jogo.

## Assets Gerados

| Asset | Descricao | Origem | Status |
|---|---|---|---|
| `res://assets/characters/antonio_rafael/source/official_round_01/antonio_rafael_idle_front_source.png` | Fonte IA da direcao frente | `image_gen` com fotos reais de referencia | Fonte auditavel |
| `res://assets/characters/antonio_rafael/source/official_round_01/antonio_rafael_idle_back_source.png` | Fonte IA da direcao costas | `image_gen` com fotos reais de referencia | Fonte auditavel |
| `res://assets/characters/antonio_rafael/source/official_round_01/antonio_rafael_idle_left_source.png` | Fonte IA da direcao lado esquerdo | `image_gen` com fotos reais de referencia | Fonte auditavel |
| `res://assets/characters/antonio_rafael/source/official_round_01/antonio_rafael_idle_right_source.png` | Fonte IA da direcao lado direito | `image_gen` com fotos reais de referencia | Fonte auditavel |
| `res://assets/characters/antonio_rafael/source/official_round_01/antonio_rafael_idle_front_left_source.png` | Fonte IA da diagonal frente-esquerda | `image_gen` com fotos reais de referencia | Fonte auditavel |
| `res://assets/characters/antonio_rafael/source/official_round_01/antonio_rafael_idle_front_right_source.png` | Fonte IA da diagonal frente-direita, regenerada para melhor leitura | `image_gen` com fotos reais de referencia | Fonte auditavel |
| `res://assets/characters/antonio_rafael/source/official_round_01/antonio_rafael_idle_back_left_source.png` | Fonte IA da diagonal costas-esquerda | `image_gen` com fotos reais de referencia | Fonte auditavel |
| `res://assets/characters/antonio_rafael/source/official_round_01/antonio_rafael_idle_back_right_source.png` | Fonte IA da diagonal costas-direita | `image_gen` com fotos reais de referencia | Fonte auditavel |
| `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front.png` | Sprite final idle frente, `128x128`, RGBA | Fonte IA + chroma-key + resize local | BASE IDLE OFICIAL V1 APROVADA |
| `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_back.png` | Sprite final idle costas, `128x128`, RGBA | Fonte IA + chroma-key + resize local | BASE IDLE OFICIAL V1 APROVADA |
| `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_left.png` | Sprite final idle lado esquerdo, `128x128`, RGBA | Fonte IA + chroma-key + resize local | BASE IDLE OFICIAL V1 APROVADA |
| `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_right.png` | Sprite final idle lado direito, `128x128`, RGBA | Fonte IA + chroma-key + resize local | BASE IDLE OFICIAL V1 APROVADA |
| `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_left.png` | Sprite final idle diagonal frente-esquerda, `128x128`, RGBA | Fonte IA + chroma-key + resize local | BASE IDLE OFICIAL V1 APROVADA |
| `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png` | Sprite final idle diagonal frente-direita, `128x128`, RGBA | Fonte IA + chroma-key + resize local | BASE IDLE OFICIAL V1 APROVADA |
| `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_back_left.png` | Sprite final idle diagonal costas-esquerda, `128x128`, RGBA | Fonte IA + chroma-key + resize local | BASE IDLE OFICIAL V1 APROVADA |
| `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_back_right.png` | Sprite final idle diagonal costas-direita, `128x128`, RGBA | Fonte IA + chroma-key + resize local | BASE IDLE OFICIAL V1 APROVADA |
| `res://assets/characters/antonio_rafael/exports/antonio_rafael_idle_contact_sheet_preview.png` | Contact sheet sem labels para aprovacao humana | Montagem local dos 8 sprites finais | Preview |

## Observacoes

- Tentativas anteriores rejeitadas permanecem ignoradas e nao foram usadas como base.
- Os sprites idle V1 foram configurados no `Player.tscn` para teste visual na `CharacterTestScene.tscn`.
- O `AnimationPlayer` do Player possui oito animacoes idle apontando para os PNGs finais.
- Validacao humana confirmou que o personagem aparece corretamente na cena de teste.
- Validacao humana confirmou que o fundo verde nao aparece no Godot.
- Validacao humana confirmou que a troca de idle por ultima direcao funciona.
- A Base Idle Oficial V1 nao contem `Policia Civil`, `Sargento Silva`, labels externos ou `PMGO` usado como pose.
- Esta rodada nao criou walk cycle.
- Esta rodada nao criou combate, armas funcionais, zumbis, inventario, HUD final ou mundo definitivo.
- Esta rodada alterou apenas a configuracao visual/idle do Player e a documentacao autorizada.
- Esta rodada nao fez commit ou push.

## Proxima Feature Recomendada

**Walk Cycle 8 direcoes do SGT Antonio Rafael**. Esta recomendacao usa a Base Idle Oficial V1 como referencia visual obrigatoria e originou a Walk Cycle V1 registrada abaixo.

## Walk Cycle 8 Direcoes V1

**Rodada registrada**: primeira base de caminhada V1  
**Data**: 2026-06-18  
**Status**: REPROVADO  
**Base obrigatoria**: BASE IDLE OFICIAL V1 APROVADA
**Motivo da reprovacao**: frames visualmente estaticos, sem passada real.
**Uso futuro**: apenas referencia negativa/auditoria; nao usar como asset final e nao usar no Player.

| Asset | Descricao | Origem | Status |
|---|---|---|---|
| `walk_cycle_v1` | Historico documental dos frames, preview e fontes da Walk V1 reprovada | Auditoria local removida do fluxo ativo | Rejeitado / removido |
| `walk_cycle_v1/generation_manifest.json` | Manifesto da geracao procedural dos frames walk V1 | Derivacao local com Pillow a partir dos 8 idles aprovados | Rejeitado / removido |
| `walk_cycle_v1/validation_summary.json` | Resumo da validacao tecnica dos 32 frames V1 | Validacao local com Pillow e verificacao estatica do `Player.tscn` | Rejeitado / removido |
| `walk_cycle_v1/antonio_rafael_walk_cycle_v1_preview.png` | Preview humano V1 com 8 direcoes x 4 frames | Montagem local dos 32 PNGs finais | Rejeitado / removido |
| `walk_cycle_v1/sprites_walk/` | 32 frames da caminhada V1 reprovada | Base Idle Oficial V1 + derivacao procedural por mascaras | Rejeitado / removido |

Observacoes da rodada walk:

- Nenhum frame foi recriado do zero.
- Nenhum frame usa placeholder generico.
- Nenhum frame contem labels externos, texto de direcao, fundo verde opaco, `Policia Civil`, `Sargento Silva`, nomes aleatorios, arma em destaque, zumbis, gore ou cenario.
- A validacao humana reprovou a tentativa porque os frames ficaram praticamente estaticos, sem passada clara, sem alternancia suficiente de pernas e bracos, e sem sensacao visual de peso.
- A integracao temporaria da V1 foi removida do `Player.tscn`; o Player nao deve usar esses frames no gameplay.

## Walk Cycle 8 Direcoes V2

**Rodada registrada**: segunda tentativa de caminhada  
**Data**: 2026-06-18  
**Status**: REPROVADO  
**Base obrigatoria**: BASE IDLE OFICIAL V1 APROVADA  
**Motivo da reprovacao**: frames ainda parecem poses paradas, sem ciclo de marcha convincente, sem passada suficiente e sem leitura clara em gameplay.
**Uso futuro**: apenas referencia negativa/auditoria; nao usar como asset final e nao usar no Player.

| Asset | Descricao | Origem | Status |
|---|---|---|---|
| `walk_cycle_v2` | Historico documental dos frames e preview da Walk V2 reprovada | Auditoria local removida do fluxo ativo | Rejeitado / removido |
| `walk_cycle_v2/antonio_rafael_walk_cycle_v2_preview.png` | Preview humano V2 com 8 direcoes x 4 frames | Montagem local dos 32 PNGs V2 | Rejeitado / removido |
| `walk_cycle_v2/sprites_walk_v2/` | 32 frames da caminhada V2 reprovada | Base Idle Oficial V1 + derivacao local por partes do sprite | Rejeitado / removido |

Observacoes da rodada walk V2:

- Nenhum frame V2 foi integrado ao `Player.tscn`.
- A V2 nao deve ser chamada de oficial.
- A validacao humana reprovou a tentativa porque a diferenca visual entre F1, F2, F3 e F4 ainda e insuficiente para leitura de caminhada.
- A V2 deve permanecer apenas como auditoria negativa.

## Walk Cycle 8 Direcoes V3

**Rodada registrada**: terceira tentativa de caminhada, key poses  
**Data**: 2026-06-18  
**Status**: REPROVADO  
**Base obrigatoria**: BASE IDLE OFICIAL V1 APROVADA  
**Motivo da reprovacao**: a V3 descaracterizou o personagem, deixando o corpo artificial e inferior a Base Idle Oficial V1.
**Uso futuro**: apenas historico documental; nao usar como asset final e nao usar no Player.

| Asset | Descricao | Origem | Status |
|---|---|---|---|
| `res://assets/characters/antonio_rafael/exports/walk_cycle_v3/antonio_rafael_walk_cycle_v3_preview.png` | Preview humano com 8 direcoes x 4 frames | Montagem local dos 32 PNGs V3 | Rejeitado / removido do fluxo ativo |
| `res://assets/characters/antonio_rafael/sprites/walk_v3/front/antonio_rafael_walk_front_01.png` a `_04.png` | Caminhada frente V3 | Base Idle Oficial V1 + reconstrucao local por key poses | Rejeitado / removido do fluxo ativo |
| `res://assets/characters/antonio_rafael/sprites/walk_v3/back/antonio_rafael_walk_back_01.png` a `_04.png` | Caminhada costas V3 | Base Idle Oficial V1 + reconstrucao local por key poses | Rejeitado / removido do fluxo ativo |
| `res://assets/characters/antonio_rafael/sprites/walk_v3/left/antonio_rafael_walk_left_01.png` a `_04.png` | Caminhada lado esquerdo V3 | Base Idle Oficial V1 + reconstrucao local por key poses | Rejeitado / removido do fluxo ativo |
| `res://assets/characters/antonio_rafael/sprites/walk_v3/right/antonio_rafael_walk_right_01.png` a `_04.png` | Caminhada lado direito V3 | Base Idle Oficial V1 + reconstrucao local por key poses | Rejeitado / removido do fluxo ativo |
| `res://assets/characters/antonio_rafael/sprites/walk_v3/front_left/antonio_rafael_walk_front_left_01.png` a `_04.png` | Caminhada diagonal frente-esquerda V3 | Base Idle Oficial V1 + reconstrucao local por key poses | Rejeitado / removido do fluxo ativo |
| `res://assets/characters/antonio_rafael/sprites/walk_v3/front_right/antonio_rafael_walk_front_right_01.png` a `_04.png` | Caminhada diagonal frente-direita V3 | Base Idle Oficial V1 + reconstrucao local por key poses | Rejeitado / removido do fluxo ativo |
| `res://assets/characters/antonio_rafael/sprites/walk_v3/back_left/antonio_rafael_walk_back_left_01.png` a `_04.png` | Caminhada diagonal costas-esquerda V3 | Base Idle Oficial V1 + reconstrucao local por key poses | Rejeitado / removido do fluxo ativo |
| `res://assets/characters/antonio_rafael/sprites/walk_v3/back_right/antonio_rafael_walk_back_right_01.png` a `_04.png` | Caminhada diagonal costas-direita V3 | Base Idle Oficial V1 + reconstrucao local por key poses | Rejeitado / removido do fluxo ativo |

Observacoes da rodada walk V3:

- Nenhum frame V3 foi integrado ao `Player.tscn`.
- A V3 nao deve ser chamada de oficial.
- A validacao tecnica local confirmou 32 PNGs `128x128`, `RGBA`, com alpha, sem pixels verdes opacos e com diferenca visual mensuravel entre F1, F2, F3 e F4 de cada direcao.
- A decisao humana reprovou a tentativa por descaracterizacao visual.
- Os caminhos ativos `res://assets/characters/antonio_rafael/sprites/walk_v3/` e `res://assets/characters/antonio_rafael/exports/walk_cycle_v3/` foram removidos do fluxo ativo.

## Walk Manual Candidate V1

**Rodada registrada**: sheet manual candidata para caminhada  
**Data**: 2026-06-18  
**Status**: REPROVADO COMO TESTE, NAO OFICIAL  
**Origem**: imagem manual fornecida pelo usuario em `res://assets/characters/antonio_rafael/source/`.

| Asset | Descricao | Origem | Status |
|---|---|---|---|
| `res://assets/characters/antonio_rafael/source/antonio_rafael_walk_sheet_candidate_v1.png` | Sheet manual original localizada em `source` | Fornecida manualmente pelo usuario | Fonte recebida |
| `res://assets/characters/antonio_rafael/source/walk_sheet_manual_candidate_v1/antonio_rafael_walk_sheet_manual_candidate_v1.png` | Copia organizada da sheet manual candidata | Copia local da fonte recebida | Fonte candidata auditavel |
| `res://assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front/antonio_rafael_walk_front_01.png` a `_08.png` | Caminhada frente extraida da sheet manual | Recorte por silhueta + remocao de checkerboard | Tratado, nao oficial |
| `res://assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back/antonio_rafael_walk_back_01.png` a `_08.png` | Caminhada costas extraida da sheet manual | Recorte por silhueta + remocao de checkerboard | Tratado, nao oficial |
| `res://assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/left/antonio_rafael_walk_left_01.png` a `_08.png` | Caminhada lateral esquerda extraida da sheet manual | Recorte por silhueta + remocao de checkerboard | Tratado, nao oficial |
| `res://assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/right/antonio_rafael_walk_right_01.png` a `_08.png` | Caminhada lateral direita temporaria | Espelhamento horizontal de `left` autorizado somente para teste | Reprovado como teste / nao oficial |
| `res://assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_left/antonio_rafael_walk_front_left_01.png` a `_08.png` | Caminhada diagonal frente-esquerda extraida da sheet manual | Recorte por silhueta + remocao de checkerboard | Tratado, nao oficial |
| `res://assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/front_right/antonio_rafael_walk_front_right_01.png` a `_08.png` | Caminhada diagonal frente-direita extraida da sheet manual | Recorte por silhueta + remocao de checkerboard | Tratado, nao oficial |
| `res://assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_left/antonio_rafael_walk_back_left_01.png` a `_08.png` | Caminhada diagonal costas-esquerda extraida da sheet manual | Recorte por silhueta + remocao de checkerboard | Tratado, nao oficial |
| `res://assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/back_right/antonio_rafael_walk_back_right_01.png` a `_08.png` | Caminhada diagonal costas-direita extraida da sheet manual | Recorte por silhueta + remocao de checkerboard | Tratado, nao oficial |
| `res://assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/antonio_rafael_walk_manual_candidate_v1_preview.png` | Preview tratado dos frames extraidos | Montagem local dos 56 PNGs tratados | Preview para revisao |
| `res://assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/antonio_rafael_walk_manual_candidate_v1_complete_preview.png` | Preview completo com `right` temporario | Montagem local dos 64 PNGs tratados | Preview de teste reprovado |
| `res://assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/walk_manual_candidate_v1_test_manifest.json` | Manifesto da direcao `right` temporaria | Registro local do espelhamento de `left` | Evidencia tecnica |

Observacoes da rodada manual:

- A sheet original possui `2048x2048`, PNG `RGBA`, mas alpha totalmente opaco.
- O checkerboard era pixel real e foi removido tecnicamente nos frames tratados.
- Foram detectadas 7 linhas de 8 frames, totalizando 56 frames extraidos.
- A direcao `right` nao foi encontrada na sheet manual.
- A direcao `right` foi criada por espelhamento horizontal de `left`, somente para teste tecnico.
- O `Player.tscn` referenciou os 64 frames como `walk_manual_candidate_v1_TESTE` apenas durante teste humano.
- Apos reprovacao, a integracao foi removida do `Player.tscn`.
- Diagnostico: `walk_left` e `walk_right` estavam mapeados para suas pastas corretas, mas os frames laterais misturam orientacoes opostas dentro da mesma sequencia.
- A proxima tentativa recomendada e `Walk Prototype V5 - LEFT somente, 8 frames, passada ampliada`.
- Nenhum asset desta rodada deve ser marcado como oficial sem aprovacao humana.

## Rig Tecnico 2D - Estrutura Inicial

**Data**: 2026-06-19  
**Status**: estrutura tecnica criada, nao runtime final  
**Decisao humana**: usar rig tecnico 2D primeiro e sprites finais depois.

Registro formal da tentativa rejeitada:

- `walk_cycle_v1`: **REPROVADO**;
- motivo: frames praticamente estaticos, sem passada real;
- status: nao oficial;
- uso permitido: somente rastreabilidade/auditoria;
- uso proibido: gameplay, Player oficial, animacao oficial.

| Asset | Descricao | Origem | Status |
|---|---|---|---|
| `res://assets/characters/antonio_rafael/rig/` | Raiz tecnica para rig de producao do SGT Antonio Rafael | Criada localmente | Ferramenta de producao |
| `res://assets/characters/antonio_rafael/rig/parts/` | Pasta planejada para partes separadas do personagem | Criada localmente | Aguardando separacao de partes |
| `res://assets/characters/antonio_rafael/rig/exports/` | Pasta planejada para renders/exports intermediarios do rig | Criada localmente | Aguardando exports futuros |
| `res://assets/characters/antonio_rafael/source/rejected/walk_cycle_v1/` | Pasta de rastreabilidade para Walk V1 reprovada, caso arquivos rejeitados precisem ser preservados | Criada localmente | Auditoria |
| `res://scenes/rig/AntonioRafaelRigLab.tscn` | Laboratorio isolado com referencias da Base Idle Oficial V1 e estrutura inicial de ossos/marcadores | Criada localmente | Tecnico, nao gameplay |
| `res://scripts/rig/rig_export_notes.gd` | Registro tecnico programatico de partes e checklist de exportacao | Criado localmente | Tecnico |
| `res://scripts/rig/rig_preview_controller.gd` | Controlador simples de camera/zoom para laboratorio de rig | Criado localmente | Tecnico |
| `res://docs/technical/rig-pipeline.md` | Documento oficial do pipeline de rig tecnico 2D | Criado localmente | Documentacao |

Observacoes:

- O rig nao foi integrado ao `Player.tscn`.
- O Player deve continuar usando sprites finais `128x128` via `Sprite2D` e `AnimationPlayer`.
- Nenhum walk cycle final novo foi gerado nesta execucao.
- Qualquer exportacao futura precisa de validacao humana antes de virar animacao oficial.

## Separacao de Partes do Rig - Feature 005

**Data**: 2026-06-19  
**Direcao primaria**: `front_right`  
**Status**: APROVADA PARCIALMENTE como `Rig Parts Separation V1`  
**Origem visual**: Base Idle Oficial V1 aprovada

| Asset | Descricao | Origem | Status |
|---|---|---|---|
| `res://assets/characters/antonio_rafael/rig/parts/front_right/head.png` | Parte cabeca | `antonio_rafael_idle_front_right.png` | Criado / laboratorio |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/neck.png` | Parte pescoco | `antonio_rafael_idle_front_right.png` | Criado / precisa refinamento |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/torso_base.png` | Parte tronco base | `antonio_rafael_idle_front_right.png` | Criado / precisa refinamento |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/vest.png` | Parte colete | `antonio_rafael_idle_front_right.png` | Criado / laboratorio |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/backpack.png` | Parte mochila | `antonio_rafael_idle_front_right.png` | Criado / precisa refinamento |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_left.png` | Braco superior esquerdo | `antonio_rafael_idle_front_right.png` | Criado / laboratorio |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/upper_arm_right.png` | Braco superior direito | `antonio_rafael_idle_front_right.png` | Criado / laboratorio |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/forearm_left.png` | Antebraco esquerdo | `antonio_rafael_idle_front_right.png` | Criado / laboratorio |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/forearm_right.png` | Antebraco direito | `antonio_rafael_idle_front_right.png` | Criado / laboratorio |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/hand_left.png` | Mao esquerda | `antonio_rafael_idle_front_right.png` | Criado / laboratorio |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/hand_right.png` | Mao direita | `antonio_rafael_idle_front_right.png` | Criado / laboratorio |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/pelvis.png` | Quadril/pelvis | `antonio_rafael_idle_front_right.png` | Criado / precisa refinamento |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/thigh_left.png` | Coxa esquerda | `antonio_rafael_idle_front_right.png` | Criado / laboratorio |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/thigh_right.png` | Coxa direita | `antonio_rafael_idle_front_right.png` | Criado / laboratorio |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/shin_left.png` | Perna/canela esquerda | `antonio_rafael_idle_front_right.png` | Criado / laboratorio |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/shin_right.png` | Perna/canela direita | `antonio_rafael_idle_front_right.png` | Criado / laboratorio |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/boot_left.png` | Bota esquerda | `antonio_rafael_idle_front_right.png` | Criado / laboratorio |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/boot_right.png` | Bota direita | `antonio_rafael_idle_front_right.png` | Criado / laboratorio |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/glasses.png` | Oculos opcional | `antonio_rafael_idle_front_right.png` | Criado / laboratorio |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/belt.png` | Cinto opcional | `antonio_rafael_idle_front_right.png` | Criado / laboratorio |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/goias_patch.png` | Patch de Goias opcional | `antonio_rafael_idle_front_right.png` | Criado / precisa refinamento |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/sergeant_chevron.png` | Divisa de sargento opcional | `antonio_rafael_idle_front_right.png` | Criado / precisa refinamento |
| `res://assets/characters/antonio_rafael/rig/parts_manifest.json` | Manifesto de partes e pivos | Gerado localmente a partir das partes | Criado |
| `res://assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png` | Recomposicao aproximada | Montagem local das partes | Criado |
| `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png` | Preview humano com labels externos | Montagem local para revisao | Criado |

Observacoes:

- Os PNGs individuais das partes nao possuem labels.
- `radio` e `holster` nao foram criados porque nao estao legiveis na referencia `front_right` e permanecem rejeitados no manifesto.
- `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron` precisam refinamento manual antes de virar base final de animacao.
- A aprovacao parcial autoriza uso como base tecnica inicial de laboratorio, estudo de separacao e referencia para refinamento manual.
- A aprovacao parcial nao autoriza arte final, animacao final, walk cycle oficial, asset final de gameplay ou substituicao do Player runtime.
- A validacao foi estatica; ainda falta validacao visual ao vivo no Godot.
- O Player oficial nao foi alterado.
- Os idles aprovados nao foram alterados.

## Rig Assembly V1 - Feature 006

**Data**: 2026-06-19  
**Direcao primaria**: `front_right`  
**Status**: APROVADA PARCIALMENTE como `Rig Assembly V1`  
**Origem visual**: Base Idle Oficial V1 + Rig Parts Separation V1

| Asset | Descricao | Origem | Status |
|---|---|---|---|
| `res://scenes/rig/AntonioRafaelRigLab.tscn` | Laboratorio com hierarquia tecnica da montagem V1 | Partes `front_right` + manifesto de partes | Tecnico / nao gameplay |
| `res://assets/characters/antonio_rafael/rig/rig_assembly_manifest.json` | Manifesto de montagem, nodes, pivos, posicoes, status e notas | Gerado localmente a partir de `parts_manifest.json` | Criado / pendente validacao |
| `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png` | Preview humano com referencia, rig montado e pivos | Montagem local das partes `front_right` | Criado / revisao humana |
| `res://docs/technical/rig-assembly-v1.md` | Documentacao dedicada da montagem | Registro tecnico local | Documentacao |

Observacoes:

- O preview pode conter labels externos para revisao humana.
- Nenhum PNG individual de parte foi alterado.
- Nenhum sprite idle aprovado foi alterado.
- O Player oficial nao foi alterado.
- Nenhum walk cycle ou animacao oficial foi criado.
- `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron` precisam refinamento manual antes de qualquer animacao final.
- A validacao foi estatica porque Godot nao estava no PATH; ainda falta validacao visual ao vivo no Godot.
- A aprovacao parcial nao autoriza arte final, gameplay, animacao oficial ou substituicao do Player runtime.

## Rig Refinement V1 - Feature 007

**Data**: 2026-06-19
**Direcao primaria**: `front_right`
**Status**: APROVADA PARCIALMENTE como `Rig Refinement V1`
**Origem visual**: Base Idle Oficial V1 + Rig Parts Separation V1 + Rig Assembly V1

| Asset | Descricao | Origem | Status |
|---|---|---|---|
| `res://assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/neck.png` | Backup pre-refinamento do pescoco | Rig Parts Separation V1 | Backup / auditoria |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/torso_base.png` | Backup pre-refinamento do torso base | Rig Parts Separation V1 | Backup / auditoria |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/backpack.png` | Backup pre-refinamento da mochila | Rig Parts Separation V1 | Backup / auditoria |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/pelvis.png` | Backup pre-refinamento da pelvis | Rig Parts Separation V1 | Backup / auditoria |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/goias_patch.png` | Backup pre-refinamento do patch Goias | Rig Parts Separation V1 | Backup / auditoria |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/sergeant_chevron.png` | Backup pre-refinamento da divisa | Rig Parts Separation V1 | Backup / auditoria |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/neck.png` | Pescoco refinado para encaixe cabeca/tronco | Edicao local sobre parte V1 | `refined_for_rig_v1` |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/torso_base.png` | Torso base refinado como camada tecnica sob colete | Edicao local sobre parte V1 | `needs_minor_adjustment` |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/backpack.png` | Mochila refinada para leitura tatica | Edicao local sobre parte V1 | `refined_for_rig_v1` |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/pelvis.png` | Pelvis refinada como centro tecnico do rig | Edicao local sobre parte V1 | `needs_minor_adjustment` |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/goias_patch.png` | Patch Goias/PMGO simbolico | Edicao local sobre parte V1 | `symbolic_detail` |
| `res://assets/characters/antonio_rafael/rig/parts/front_right/sergeant_chevron.png` | Divisa de sargento simbolica | Edicao local sobre parte V1 | `symbolic_detail` |
| `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png` | Preview humano antes/depois com labels externos | Montagem local para revisao | Preview / nao gameplay |

Observacoes:

- Os PNGs individuais refinados nao possuem labels ou texto externo.
- `goias_patch` e `sergeant_chevron` sao detalhes simbolicos pela escala `128x128`; nao ha texto literal.
- O refinamento nao criou animacao oficial, walk cycle, gameplay ou integracao no Player.
- A Base Idle Oficial V1 permaneceu intacta.
- Os seis backups foram criados e validados como PNG `128x128`, `RGBA`, com transparencia.
- O Player nao deve usar essas partes em runtime.
