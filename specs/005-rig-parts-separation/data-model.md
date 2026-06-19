# Data Model: Separacao de Partes do Rig Tecnico 2D

## BaseIdleOfficialV1

Representa a referencia visual aprovada do SGT Antonio Rafael.

**Fields**:

- `direction`: uma das 8 direcoes aprovadas (`front`, `back`, `left`, `right`, `front_left`, `front_right`, `back_left`, `back_right`)
- `path`: caminho do sprite idle aprovado
- `size`: `128x128`
- `format`: PNG `RGBA`
- `visual_traits`: rosto, oculos, cabelo, tom de pele, uniforme, colete, mochila, patch de Goias, divisa, paleta, escala e silhueta

**Validation Rules**:

- Deve permanecer intacta durante a feature.
- Deve ser usada como referencia visual mestre.
- Nao pode ser substituida por walk reprovada, prompt novo ou personagem recriado.

## RigPart

Representa uma parte visual isolada do personagem.

**Fields**:

- `name`: nome canonico da parte, por exemplo `head`, `vest`, `boot_right`
- `path`: caminho PNG da parte
- `source_direction`: direcao visual de origem, inicialmente `front_right`
- `source_reference`: sprite idle aprovado usado como referencia principal
- `size`: largura e altura do PNG da parte
- `pivot`: coordenada relativa ao canvas da parte e nome do anchor anatomico
- `usage_note`: observacao curta sobre encaixe, sobreposicao ou articulacao
- `visual_dependency`: lista de partes que precisam sobrepor ou encaixar com esta parte
- `status`: `draft`, `needs_review`, `approved`, `rejected`

**Validation Rules**:

- Deve ser PNG `RGBA`.
- Deve ter fundo transparente.
- Nao pode conter labels, texto externo, fundo verde, cenario ou personagem diferente.
- Deve preservar identidade visual da Base Idle Oficial V1.
- Deve registrar limitacao quando a parte estiver parcialmente oculta na referencia.

## RequiredRigPartSet

Representa o conjunto minimo de partes planejado para a primeira separacao.

**Required Parts**:

- `head`
- `neck`
- `torso_base`
- `vest`
- `backpack`
- `upper_arm_left`
- `upper_arm_right`
- `forearm_left`
- `forearm_right`
- `hand_left`
- `hand_right`
- `pelvis`
- `thigh_left`
- `thigh_right`
- `shin_left`
- `shin_right`
- `boot_left`
- `boot_right`

**Optional Parts**:

- `glasses`
- `radio`
- `belt`
- `holster`
- `goias_patch`
- `sergeant_chevron`

**Validation Rules**:

- As 18 partes obrigatorias devem existir ou ter justificativa objetiva quando a fonte aprovada nao permitir separacao fiel.
- Partes opcionais so devem existir se melhorarem o rig sem fragilizar visualmente o personagem.
- O conjunto deve permitir uma recomposicao aproximada da pose original.

## PartsManifest

Representa o arquivo de rastreabilidade da separacao.

**Fields**:

- `character`: `SGT Antonio Rafael`
- `feature`: `005-rig-parts-separation`
- `primary_direction`: `front_right`
- `status`: `draft`, `pending_human_validation`, `approved`, `rejected`
- `base_references`: lista dos idles aprovados usados
- `parts`: lista de `RigPart`
- `known_limitations`: lista de limitacoes visuais
- `validation`: resumo das validacoes tecnicas e visuais

**Validation Rules**:

- Deve listar cada parte criada.
- Deve documentar pivo sugerido para cada parte.
- Deve registrar dependencia visual e status de revisao.
- Deve deixar claro que as partes nao sao runtime oficial.

## RecompositionPreview

Representa o preview humano da separacao.

**Fields**:

- `path`: caminho do preview
- `includes_parts_grid`: indica se mostra partes separadas
- `includes_recomposed_pose`: indica se mostra a recomposicao aproximada
- `includes_idle_reference`: indica se mostra a Base Idle Oficial V1 para comparacao
- `review_status`: `pending`, `approved`, `approved_partial`, `rejected`

**Validation Rules**:

- Pode conter labels externos para revisao humana.
- Nao substitui os PNGs individuais.
- Deve permitir verificar se a separacao preservou o personagem.

## HumanValidationGate

Representa a pausa obrigatoria apos a preparacao das partes.

**Fields**:

- `preview_path`: preview humano da separacao
- `manifest_path`: manifesto de partes
- `checks`: validacoes tecnicas e visuais obrigatorias
- `decision`: `pending`, `approved`, `approved_partial`, `rejected`

**Validation Rules**:

- Deve ocorrer antes de animar walk cycle.
- Deve ocorrer antes de integrar qualquer animacao no Player.
- Deve ocorrer antes de marcar partes como aprovadas.
