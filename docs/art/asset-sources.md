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

**Walk Cycle 8 direcoes do SGT Antonio Rafael**. A futura feature deve usar a Base Idle Oficial V1 como referencia visual obrigatoria. Nao foi executada nesta etapa documental.
