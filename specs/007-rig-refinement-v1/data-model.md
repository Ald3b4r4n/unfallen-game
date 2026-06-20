# Data Model: Rig Refinement V1 do SGT Antonio Rafael

## BaseIdleOfficialV1

Representa a referencia visual aprovada do personagem.

**Fields**:

- `direction`: `front_right`.
- `path`: `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`.
- `size`: `128x128`.
- `format`: PNG `RGBA`.
- `visual_traits`: rosto, oculos, cabelo, pele, uniforme, colete, mochila, patch de Goias, divisa, paleta, escala, proporcao e silhueta.

**Validation Rules**:

- Deve permanecer intacta.
- Deve ser usada como referencia visual mestre.
- Nao pode ser substituida por walk reprovada, arte nova sem rastreabilidade ou personagem recriado.

## CriticalRigPart

Representa uma das seis partes que precisam de refinamento.

**Fields**:

- `name`: `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` ou `sergeant_chevron`.
- `asset_path`: caminho PNG atual em `rig/parts/front_right/`.
- `backup_path`: caminho esperado em `rig/parts/front_right/_backup_v1/`.
- `source_direction`: `front_right`.
- `previous_status`: status herdado de manifestos anteriores.
- `target_status`: `refined_for_rig_v1`, `needs_minor_adjustment`, `needs_art_refinement`, `symbolic_detail` ou `rejected`.
- `visual_goal`: objetivo especifico de refinamento da parte.
- `pivot_dependency`: pivo que deve ser preservado ou revisado.
- `remaining_limitations`: lista de limitacoes apos refinamento.

**Validation Rules**:

- Toda parte critica deve ter backup ou rastreabilidade equivalente antes de ser alterada.
- Toda parte critica deve permanecer PNG `RGBA` com transparencia valida.
- Nenhuma parte critica pode conter labels, texto externo, nomes aleatorios ou fundo verde opaco.
- `goias_patch` e `sergeant_chevron` podem ser `symbolic_detail` se a escala nao permitir leitura literal.

## RefinementBackup

Representa a preservacao nao destrutiva do estado anterior.

**Fields**:

- `feature`: `007-rig-refinement-v1`.
- `backup_directory`: `res://assets/characters/antonio_rafael/rig/parts/front_right/_backup_v1/`.
- `parts`: lista das seis partes preservadas.
- `created_from`: caminho original de cada parte.
- `purpose`: comparacao antes/depois e reversao manual.

**Validation Rules**:

- Deve existir antes da substituicao dos PNGs refinados.
- Deve conter todos os seis arquivos criticos ou registrar claramente qualquer excecao.
- Nao deve ser usada como asset de runtime.

## PartsManifestRefinementRecord

Representa a atualizacao planejada em `parts_manifest.json`.

**Fields**:

- `name`: nome da parte critica.
- `path`: caminho do PNG refinado.
- `previous_backup`: caminho do backup.
- `previous_status`: status anterior.
- `status`: novo status.
- `refinement_note`: resumo objetivo da melhoria.
- `symbolic_detail`: booleano para patch/divisa quando aplicavel.
- `remaining_limitations`: limitacoes ainda abertas.

**Validation Rules**:

- Deve existir uma entrada ou extensao rastreavel para cada uma das seis partes.
- Status deve pertencer ao conjunto permitido da feature.
- Notas devem deixar claro se a parte esta pronta para rig V1 ou ainda exige ajuste.

## RigAssemblyRefinementRecord

Representa o impacto do refinamento na montagem de laboratorio.

**Fields**:

- `name`: nome da parte critica.
- `asset_path`: caminho do PNG refinado.
- `scene_node`: node correspondente em `AntonioRafaelRigLab.tscn`.
- `pivot`: pivo mantido ou sugerido.
- `pivot_change`: `maintained`, `adjusted`, `needs_review`.
- `assembly_status`: status de encaixe apos refinamento.
- `refinement_note`: impacto visual/tecnico na montagem.

**Validation Rules**:

- Deve manter a cena como laboratorio isolado.
- Deve registrar se pivos foram mantidos ou precisam revisao.
- Nao pode indicar Player integration, walk cycle ou animacao oficial.

## RefinementPreview

Representa o preview humano do refinamento.

**Fields**:

- `path`: `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_refinement_v1_preview.png`.
- `includes_idle_reference`: mostra a Base Idle Oficial V1 `front_right`.
- `includes_before_state`: mostra backups ou estado anterior.
- `includes_after_state`: mostra refinamento aplicado.
- `highlights_refined_parts`: destaca as seis partes.
- `includes_limitations`: registra limitacoes restantes.
- `review_status`: `pending`, `approved`, `approved_partial` ou `rejected`.

**Validation Rules**:

- Pode conter labels externos para revisao humana.
- Nao substitui PNGs individuais.
- Nao pode ser usado como spritesheet tecnico ou asset final de gameplay.

## HumanValidationGate

Representa a pausa obrigatoria ao final da feature.

**Fields**:

- `preview_path`: caminho do preview.
- `manifest_paths`: manifestos atualizados.
- `checks`: validacoes tecnicas e visuais.
- `decision`: `pending`, `approved`, `approved_partial` ou `rejected`.

**Validation Rules**:

- Deve ocorrer antes de animacao, walk cycle, Player integration ou status oficial.
- Deve apresentar limitacoes restantes e recomendacao objetiva.
- Deve confirmar ausencia de commit e push quando exigido pelo escopo.
