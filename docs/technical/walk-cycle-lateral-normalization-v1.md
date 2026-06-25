# Walk Cycle Lateral Normalization V1

Normalizacao tecnica dos testes laterais experimentais do SGT Antonio Rafael.

```text
Ainda nao existe walk cycle oficial no projeto.
Esta feature nao integra nada ao Player.
Esta feature nao substitui a Base Idle Oficial V1.
Esta feature nao altera o rig oficial.
Esta feature apenas normaliza e compara material experimental do walk_lab.
```

## Escopo executado

Foram avaliados e normalizados dois conjuntos experimentais do laboratorio:

- `right-facing / walking_left_to_right_20f`: 24 frames, sendo os frames 21-24 ponte de loop baseada nos frames 06-09.
- `left-facing / walking_right_to_left_20f`: 24 frames reais.

A normalizacao foi gerada em pasta separada, sem sobrescrever os frames fonte.

## Diagnostico right-facing

- Frames encontrados: 24.
- Canvas de entrada: `509x525`.
- Fundo fonte: magenta opaco.
- Ciclo: caminhada lateral funcional, com frames 21-24 documentados como ponte de loop.
- Limitacao: ainda precisa avaliacao humana de identidade/escala antes de qualquer integracao futura.

## Diagnostico left-facing

- Frames encontrados: 24.
- Canvas de entrada: `500x526`.
- Fundo fonte: magenta opaco.
- Ciclo: caminhada lateral funcional com 24 frames reais.
- Limitacao: ainda precisa avaliacao humana de identidade/escala antes de qualquer integracao futura.

## Normalizacao aplicada

- Canvas final: `416x540`.
- Baseline usado: `y=520`.
- Centro horizontal usado: `x=208`.
- Metodo: mascara cromatica para remover fundo magenta/branco, selecao do maior componente visual do personagem, recorte do personagem, centralizacao em canvas transparente e alinhamento pelo baseline dos pes.
- Resultado: todos os frames normalizados sao PNG RGBA, possuem transparencia real e nao possuem fundo magenta opaco.

## Arquivos normalizados

- `res://assets/characters/antonio_rafael/walk_lab/normalized/right/frame_01.png` a `frame_24.png`.
- `res://assets/characters/antonio_rafael/walk_lab/normalized/left/frame_01.png` a `frame_24.png`.

## Previews gerados

- `res://assets/characters/antonio_rafael/walk_lab/normalized/previews/right_24f_normalized_contact_sheet.png`
- `res://assets/characters/antonio_rafael/walk_lab/normalized/previews/left_24f_normalized_contact_sheet.png`
- `res://assets/characters/antonio_rafael/walk_lab/normalized/previews/lateral_walk_comparison_v1.png`
- `res://assets/characters/antonio_rafael/walk_lab/normalized/previews/right_24f_normalized_preview.gif`
- `res://assets/characters/antonio_rafael/walk_lab/normalized/previews/left_24f_normalized_preview.gif`

## Cena experimental

Criada cena isolada de comparacao:

```text
res://scenes/test/WalkLateralNormalizedTest.tscn
```

A cena usa dois `AnimatedSprite2D` com `SpriteFrames` normalizados e autoplay para comparacao visual lado a lado. Ela nao possui input, colisao, gameplay nem dependencia do Player oficial.

## SpriteFrames experimentais

- `res://assets/characters/antonio_rafael/walk_lab/animations/walking_right_24f_normalized_spriteframes.tres`
- `res://assets/characters/antonio_rafael/walk_lab/animations/walking_left_24f_normalized_spriteframes.tres`

Cada recurso referencia 24 frames normalizados e usa velocidade inicial de 12 FPS para teste visual.

## Validacao estatica

- Right normalized: 24 PNGs `416x540`, RGBA, baseline `y=520`.
- Left normalized: 24 PNGs `416x540`, RGBA, baseline `y=520`.
- Fundo magenta opaco: removido dos dois lados.
- Player oficial: nao alterado.
- Rig oficial: nao alterado.
- Sprites idle aprovados: nao alterados.
- Scripts do Player/rig: nao alterados.

## Limitacoes

- A arte lateral continua experimental e nao substitui a Base Idle Oficial V1.
- Ainda nao ha validacao de integracao com movimento real do Player.
- Ainda nao existe walk cycle oficial.
- A cena normalizada precisa de validacao humana ao vivo no editor Godot.
- O lado direito usa frames 21-24 como ponte de loop; isso esta documentado e nao deve ser interpretado como 24 poses totalmente unicas.

## Status recomendado

Aprovar parcialmente como material normalizado de laboratorio, pronto para validacao humana visual e para uma futura feature de avaliacao de integracao. Nao aprovar como walk oficial nesta etapa.
