# Data Model: Rig Assembly V1 do SGT Antonio Rafael

## BaseIdleOfficialV1

Representa a referencia visual aprovada do personagem.

**Fields**:

- `direction`: `front_right` como direcao principal da montagem V1.
- `path`: caminho do sprite idle aprovado.
- `size`: `128x128`.
- `format`: PNG `RGBA`.
- `visual_traits`: rosto, oculos, cabelo, pele, uniforme, colete, mochila, patch de Goias, divisa, paleta, escala e silhueta.

**Validation Rules**:

- Deve permanecer intacta durante a feature.
- Deve ser usada como referencia visual mestre.
- Nao pode ser substituida por walk reprovada, prompt novo ou personagem recriado.

## RigPart

Representa uma parte separada herdada da Rig Parts Separation V1.

**Fields**:

- `name`: nome canonico da parte.
- `path`: caminho PNG em `rig/parts/front_right/`.
- `source_direction`: `front_right`.
- `source_sprite`: sprite idle aprovado usado como origem.
- `size`: largura e altura do PNG.
- `suggested_pivot`: pivo herdado de `parts_manifest.json`.
- `visual_dependency`: partes relacionadas para sobreposicao e encaixe.
- `status`: status herdado da separacao.

**Validation Rules**:

- Partes usadas devem existir quando `path` nao for nulo.
- Partes rejeitadas como `radio` e `holster` nao entram na montagem aprovada.
- Partes com `needs_manual_refinement` devem manter limitacao registrada na montagem.

## RigAssemblyV1

Representa a montagem tecnica inicial no laboratorio.

**Fields**:

- `character`: `SGT Antonio Rafael`.
- `feature`: `006-rig-assembly-v1`.
- `primary_direction`: `front_right`.
- `source_idle`: Base Idle Oficial V1 usada como referencia.
- `parts_manifest`: caminho do manifesto de partes.
- `scene`: caminho do laboratorio de rig.
- `preview`: caminho do preview de montagem.
- `status`: `pending_human_validation`, `approved_partial`, `approved`, `rejected`.
- `placements`: lista de `RigPartPlacement`.
- `known_limitations`: lista de limitacoes visuais e tecnicas.

**Validation Rules**:

- Deve permanecer como artefato de laboratorio, nao runtime.
- Deve listar todas as partes obrigatorias usadas ou justificar qualquer ausencia.
- Deve registrar que nao cria animacao oficial nem walk cycle.

## RigPartPlacement

Representa como uma parte foi posicionada na montagem.

**Fields**:

- `name`: nome da parte.
- `asset_path`: caminho da parte PNG.
- `scene_node`: caminho do node correspondente em `AntonioRafaelRigLab.tscn`.
- `local_position`: posicao local planejada/aplicada.
- `pivot`: pivo aplicado ou sugerido.
- `rotation_degrees`: rotacao inicial.
- `scale`: escala inicial.
- `status`: `assembled`, `needs_position_refinement`, `needs_pivot_refinement`, `needs_art_refinement`, `placeholder_only`, `rejected`.
- `refinement_note`: observacao curta sobre encaixe, sobreposicao ou limitacao.

**Validation Rules**:

- Cada parte obrigatoria deve ter uma entrada.
- Pivos devem apontar para ancoras anatomicas coerentes.
- Rotacao inicial deve ser neutra na V1, salvo justificativa documentada.
- Escala inicial deve preservar proporcao da Base Idle Oficial V1.

## PivotMarker

Representa um pivo visual ou documentado para revisao humana.

**Fields**:

- `part_name`: parte associada.
- `anchor`: nome anatomico do pivo.
- `position`: coordenada relativa ou posicao na cena.
- `visible_in_lab`: indica se o marker aparece no laboratorio.
- `source`: `parts_manifest`, ajuste manual futuro ou documentacao.

**Validation Rules**:

- Todo articulavel obrigatorio deve possuir pivo representado ou documentado.
- Pivos principais devem cobrir cabeca, pescoco, torso/colete, mochila, bracos, antebracos, maos, quadril, coxas, canelas e botas.

## AssemblyPreview

Representa o preview humano da montagem.

**Fields**:

- `path`: `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png`.
- `includes_idle_reference`: mostra a referencia idle original.
- `includes_assembled_rig`: mostra a montagem do rig.
- `includes_pivot_markers`: mostra pivos ou marcadores.
- `includes_limitations`: indica limitacoes visuais.
- `review_status`: `pending`, `approved_partial`, `approved`, `rejected`.

**Validation Rules**:

- Pode conter labels externos para revisao humana.
- Nao substitui os PNGs individuais.
- Deve permitir comparar referencia e recomposicao em uma unica imagem.

## HumanValidationGate

Representa a pausa obrigatoria ao final da feature.

**Fields**:

- `preview_path`: preview de montagem.
- `manifest_path`: manifesto de montagem.
- `checks`: validacoes tecnicas e visuais.
- `decision`: `pending`, `approved`, `approved_partial`, `rejected`.

**Validation Rules**:

- Deve ocorrer antes de qualquer animacao.
- Deve ocorrer antes de integrar qualquer coisa no Player.
- Deve ocorrer antes de marcar a montagem como oficial.
