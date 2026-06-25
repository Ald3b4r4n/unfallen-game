# Walk Cycle Lateral Normalization Manifest V1

Manifesto tecnico dos frames laterais normalizados do laboratorio experimental do SGT Antonio Rafael.

```text
Ainda nao existe walk cycle oficial no projeto.
Esta feature nao integra nada ao Player.
Esta feature nao substitui a Base Idle Oficial V1.
Esta feature nao altera o rig oficial.
Esta feature apenas normaliza e compara material experimental do walk_lab.
```

## Parametros

- Canvas final: `416x540`.
- Baseline alvo: `y=520`.
- Centro horizontal alvo: `x=208`.
- FPS recomendado para teste: `12`.
- Metodo aplicado: mascara cromatica para remover fundo magenta/branco, selecao do maior componente visual do personagem, recorte do personagem, centralizacao em canvas transparente e alinhamento pelo baseline dos pes.
- Normalizacao nao destrutiva: os frames fonte em `walk_lab/frames/` foram preservados.

## Resumo por lado

| Lado | Source frames | Normalized frames | Visible width | Visible height | Opaque pixels | Baseline | Status |
| --- | ---: | ---: | --- | --- | --- | --- | --- |
| right | 24 | 24 | 159-223 | 449-464 | 43887-49567 | 520 | normalizado; frames 21-24 sao ponte 06-09 |
| left | 24 | 24 | 154-217 | 455-478 | 42335-49151 | 520 | normalizado; 24 frames reais |

## Frames

| Lado | Frame | Entrada | Normalizado | Input dim | Output dim | Bounds normalizados | Baseline | Centro X | Pixels opacos | Magenta opaco | Verde opaco | Status |
| --- | ---: | --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| right | 01 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_01.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_01.png` | 509x525 | 416x540 | (127, 56, 290, 520) | 520 | 208.5 | 46670 | 0 | 0 | normalized |
| right | 02 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_02.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_02.png` | 509x525 | 416x540 | (127, 62, 290, 520) | 520 | 208.5 | 48381 | 0 | 2 | normalized |
| right | 03 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_03.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_03.png` | 509x525 | 416x540 | (115, 69, 301, 520) | 520 | 208.0 | 46729 | 0 | 0 | normalized |
| right | 04 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_04.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_04.png` | 509x525 | 416x540 | (114, 69, 303, 520) | 520 | 208.5 | 48269 | 0 | 2 | normalized |
| right | 05 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_05.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_05.png` | 509x525 | 416x540 | (121, 68, 296, 520) | 520 | 208.5 | 48157 | 0 | 7 | normalized |
| right | 06 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_06.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_06.png` | 509x525 | 416x540 | (128, 63, 288, 520) | 520 | 208.0 | 45760 | 0 | 0 | normalized |
| right | 07 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_07.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_07.png` | 509x525 | 416x540 | (129, 61, 288, 520) | 520 | 208.5 | 43887 | 0 | 0 | normalized |
| right | 08 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_08.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_08.png` | 509x525 | 416x540 | (129, 61, 288, 520) | 520 | 208.5 | 44217 | 0 | 0 | normalized |
| right | 09 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_09.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_09.png` | 509x525 | 416x540 | (125, 61, 291, 520) | 520 | 208.0 | 47051 | 0 | 2 | normalized |
| right | 10 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_10.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_10.png` | 509x525 | 416x540 | (109, 61, 307, 520) | 520 | 208.0 | 49354 | 0 | 11 | normalized |
| right | 11 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_11.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_11.png` | 509x525 | 416x540 | (103, 62, 313, 520) | 520 | 208.0 | 49302 | 0 | 15 | normalized |
| right | 12 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_12.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_12.png` | 509x525 | 416x540 | (97, 66, 320, 520) | 520 | 208.5 | 49154 | 0 | 7 | normalized |
| right | 13 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_13.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_13.png` | 509x525 | 416x540 | (101, 70, 315, 520) | 520 | 208.0 | 48930 | 0 | 8 | normalized |
| right | 14 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_14.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_14.png` | 509x525 | 416x540 | (111, 71, 306, 520) | 520 | 208.5 | 47882 | 0 | 5 | normalized |
| right | 15 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_15.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_15.png` | 509x525 | 416x540 | (122, 70, 295, 520) | 520 | 208.5 | 46913 | 0 | 10 | normalized |
| right | 16 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_16.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_16.png` | 509x525 | 416x540 | (127, 64, 290, 520) | 520 | 208.5 | 46272 | 0 | 12 | normalized |
| right | 17 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_17.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_17.png` | 509x525 | 416x540 | (119, 60, 297, 520) | 520 | 208.0 | 46025 | 0 | 11 | normalized |
| right | 18 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_18.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_18.png` | 509x525 | 416x540 | (108, 62, 309, 520) | 520 | 208.5 | 49336 | 0 | 14 | normalized |
| right | 19 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_19.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_19.png` | 509x525 | 416x540 | (101, 63, 315, 520) | 520 | 208.0 | 49567 | 0 | 4 | normalized |
| right | 20 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_20.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_20.png` | 509x525 | 416x540 | (108, 66, 308, 520) | 520 | 208.0 | 48679 | 0 | 0 | normalized |
| right | 21 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_21.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_21.png` | 509x525 | 416x540 | (128, 63, 288, 520) | 520 | 208.0 | 45760 | 0 | 0 | bridge 06 |
| right | 22 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_22.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_22.png` | 509x525 | 416x540 | (129, 61, 288, 520) | 520 | 208.5 | 43887 | 0 | 0 | bridge 07 |
| right | 23 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_23.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_23.png` | 509x525 | 416x540 | (129, 61, 288, 520) | 520 | 208.5 | 44217 | 0 | 0 | bridge 08 |
| right | 24 | `res://assets/characters/antonio_rafael/walk_lab/frames/right_20f/frame_24.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_24.png` | 509x525 | 416x540 | (125, 61, 291, 520) | 520 | 208.0 | 47051 | 0 | 2 | bridge 09 |
| left | 01 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_01.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_01.png` | 500x526 | 416x540 | (131, 43, 285, 520) | 520 | 208.0 | 43508 | 0 | 1 | normalized |
| left | 02 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_02.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_02.png` | 500x526 | 416x540 | (131, 48, 285, 520) | 520 | 208.0 | 42335 | 0 | 1 | normalized |
| left | 03 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_03.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_03.png` | 500x526 | 416x540 | (124, 51, 293, 520) | 520 | 208.5 | 45201 | 0 | 0 | normalized |
| left | 04 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_04.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_04.png` | 500x526 | 416x540 | (103, 56, 314, 520) | 520 | 208.5 | 47773 | 0 | 0 | normalized |
| left | 05 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_05.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_05.png` | 500x526 | 416x540 | (101, 56, 316, 520) | 520 | 208.5 | 47979 | 0 | 0 | normalized |
| left | 06 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_06.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_06.png` | 500x526 | 416x540 | (106, 56, 311, 520) | 520 | 208.5 | 48232 | 0 | 1 | normalized |
| left | 07 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_07.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_07.png` | 500x526 | 416x540 | (118, 50, 298, 520) | 520 | 208.0 | 45738 | 0 | 3 | normalized |
| left | 08 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_08.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_08.png` | 500x526 | 416x540 | (130, 46, 287, 520) | 520 | 208.5 | 43522 | 0 | 2 | normalized |
| left | 09 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_09.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_09.png` | 500x526 | 416x540 | (131, 42, 286, 520) | 520 | 208.5 | 46050 | 0 | 4 | normalized |
| left | 10 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_10.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_10.png` | 500x526 | 416x540 | (127, 42, 289, 520) | 520 | 208.0 | 47225 | 0 | 7 | normalized |
| left | 11 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_11.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_11.png` | 500x526 | 416x540 | (107, 45, 310, 520) | 520 | 208.5 | 48300 | 0 | 14 | normalized |
| left | 12 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_12.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_12.png` | 500x526 | 416x540 | (102, 50, 314, 520) | 520 | 208.0 | 48452 | 0 | 7 | normalized |
| left | 13 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_13.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_13.png` | 500x526 | 416x540 | (107, 54, 310, 520) | 520 | 208.5 | 47419 | 0 | 1 | normalized |
| left | 14 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_14.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_14.png` | 500x526 | 416x540 | (122, 55, 295, 520) | 520 | 208.5 | 45174 | 0 | 0 | normalized |
| left | 15 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_15.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_15.png` | 500x526 | 416x540 | (131, 53, 286, 520) | 520 | 208.5 | 43457 | 0 | 0 | normalized |
| left | 16 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_16.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_16.png` | 500x526 | 416x540 | (127, 49, 290, 520) | 520 | 208.5 | 44496 | 0 | 11 | normalized |
| left | 17 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_17.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_17.png` | 500x526 | 416x540 | (120, 51, 296, 520) | 520 | 208.0 | 45907 | 0 | 10 | normalized |
| left | 18 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_18.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_18.png` | 500x526 | 416x540 | (100, 56, 317, 520) | 520 | 208.5 | 48254 | 0 | 2 | normalized |
| left | 19 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_19.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_19.png` | 500x526 | 416x540 | (103, 56, 314, 520) | 520 | 208.5 | 49151 | 0 | 0 | normalized |
| left | 20 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_20.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_20.png` | 500x526 | 416x540 | (117, 65, 299, 520) | 520 | 208.0 | 45272 | 0 | 2 | normalized |
| left | 21 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_21.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_21.png` | 500x526 | 416x540 | (124, 47, 292, 520) | 520 | 208.0 | 45420 | 0 | 0 | normalized |
| left | 22 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_22.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_22.png` | 500x526 | 416x540 | (130, 43, 286, 520) | 520 | 208.0 | 44766 | 0 | 13 | normalized |
| left | 23 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_23.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_23.png` | 500x526 | 416x540 | (130, 42, 287, 520) | 520 | 208.5 | 46179 | 0 | 9 | normalized |
| left | 24 | `res://assets/characters/antonio_rafael/walk_lab/frames/left_20f/frame_24.png` | `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_24.png` | 500x526 | 416x540 | (131, 43, 285, 520) | 520 | 208.0 | 43508 | 0 | 1 | normalized |

## Previews

- `res://assets/characters/antonio_rafael/walk_lab/normalized/previews/right_24f_normalized_contact_sheet.png`
- `res://assets/characters/antonio_rafael/walk_lab/normalized/previews/left_24f_normalized_contact_sheet.png`
- `res://assets/characters/antonio_rafael/walk_lab/normalized/previews/lateral_walk_comparison_v1.png`
- `res://assets/characters/antonio_rafael/walk_lab/normalized/previews/right_24f_normalized_preview.gif`
- `res://assets/characters/antonio_rafael/walk_lab/normalized/previews/left_24f_normalized_preview.gif`

## Decisao pendente

Os dois conjuntos estao prontos para revisao humana de normalizacao e para avaliacao tecnica futura. Eles ainda nao estao aprovados como walk cycle oficial e nao devem ser integrados ao Player nesta feature.
