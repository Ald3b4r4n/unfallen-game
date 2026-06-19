# Guia de Pipeline Tecnico de Arte: Personagens

## Especificacoes Gerais

- **Estilo**: Pixel Art HD isometrica.
- **Proporcao base**: `128x128 px` por celula individual.
- **Formato final**: PNG lossless com alpha (`RGBA`).
- **Uso atual**: Base Idle Oficial V1 aprovada e validada visualmente no Godot 4.
- **Filtro recomendado no Godot**: `Nearest`, sem blur.

## Pipeline da Primeira Rodada Oficial

1. Abrir e confirmar as fotos reais em `res://assets/characters/antonio_rafael/references/`.
2. Gerar uma imagem fonte por direcao usando `image_gen`, sempre com as fotos reais como referencia visual e sem usar artes antigas rejeitadas.
3. Gerar cada fonte sobre fundo chroma-key verde plano.
4. Extrair o PNG retornado pelo gerador a partir do log local da sessao.
5. Remover o fundo por chroma-key, preservando detalhes internos como patch.
6. Recortar a silhueta, normalizar altura visual e baseline, centralizar em celula `128x128`.
7. Exportar arquivos finais em `res://assets/characters/antonio_rafael/sprites/idle/`.
8. Montar preview em `res://assets/characters/antonio_rafael/exports/`.
9. Pausar para aprovacao humana antes de qualquer importacao no Godot.
10. Apos aprovacao parcial, conectar os oito sprites idle ao `Player.tscn` e testar apenas a troca de idle por direcao.

## Nomenclatura Oficial de Idle

- `antonio_rafael_idle_front.png`
- `antonio_rafael_idle_back.png`
- `antonio_rafael_idle_left.png`
- `antonio_rafael_idle_right.png`
- `antonio_rafael_idle_front_left.png`
- `antonio_rafael_idle_front_right.png`
- `antonio_rafael_idle_back_left.png`
- `antonio_rafael_idle_back_right.png`

## Validacao Tecnica Aplicada

- Todos os arquivos finais devem existir.
- Todos devem ter exatamente `128x128 px`.
- Todos devem estar em `RGBA`.
- Os quatro cantos devem ter alpha `0`.
- O personagem deve estar inteiro, centralizado e com margem segura.
- O baseline deve ser consistente entre as direcoes.
- Nao pode haver labels externos, grid, texto de direcao ou character sheet nos sprites individuais.
- Direcoes opostas e diagonais devem ter imagens distintas.

## Estado Atual

**Rodada**: primeira rodada oficial valida de idle do SGT Antonio Rafael.  
**Status**: BASE IDLE OFICIAL V1 APROVADA.  
**Validacao humana**: personagem aparece corretamente na cena de teste, fundo verde nao aparece, escala visual esta aceitavel e a direcao idle troca conforme a ultima direcao de movimento.  
**Pendencia**: criar uma feature futura especifica para walk cycle.

Esta etapa altera apenas a cena `Player.tscn` e o controlador de animacao do Player para idle. Nao altera configuracoes globais, gameplay novo, walk cycle, combate, inventario, HUD ou mundo definitivo.

## Proxima Feature Recomendada

**Walk Cycle 8 direcoes do SGT Antonio Rafael**.

A futura feature deve:

- usar a Base Idle Oficial V1 como referencia visual obrigatoria;
- manter os mesmos criterios de escala, silhueta, uniforme, patch, divisa e identidade PMGO;
- passar por novo gate humano antes de implementacao.

Esta recomendacao originou a Walk Cycle V1 registrada abaixo.

## Pipeline Walk Cycle 8 Direcoes V1 - REPROVADO

Esta secao registra a execucao inicial da caminhada V1 do SGT Antonio Rafael, criada a partir da Base Idle Oficial V1.

Status:

- `walk_cycle_v1`: **REPROVADO**;
- motivo: frames visualmente estaticos, sem passada real;
- status: nao aprovado para Godot;
- uso futuro: apenas referencia negativa/auditoria;
- historico documentado; copias rejeitadas removidas do fluxo ativo em limpeza posterior.

### Estrutura de Caminhada

```txt
historico documental da V1 reprovada
  sprites_walk/ removido do fluxo ativo
  source_walk_cycle_v1/ removido do fluxo ativo
  exports_walk_cycle_v1/ removido do fluxo ativo
```

Cada direcao possuia 4 frames individuais, totalizando 32 PNGs. Apos reprovacao e limpeza posterior, os arquivos foram removidos do caminho ativo `sprites/walk/` e das pastas rejeitadas antigas.

### Metodo Aplicado

1. Validar os 8 idles aprovados da Base Idle Oficial V1.
2. Carregar cada idle `128x128` como PNG `RGBA`.
3. Separar areas do personagem por mascaras de alpha: corpo, bracos e pernas.
4. Aplicar deslocamentos discretos e pequenos em 4 fases de passada.
5. Exportar cada frame em `128x128`, com transparencia real.
6. Gerar um preview humano com 8 linhas por direcao e 4 colunas por frame.
7. Registrar manifesto e resumo de validacao, posteriormente removidos do fluxo ativo apos a decisao de limpeza.
8. Integrar `walk_*` no `AnimationPlayer` do `Player.tscn`.
9. Atualizar `player_animation_controller.gd` para tocar `walk_*` em movimento e `idle_*` ao parar.

### Validacao Tecnica Walk V1

- Total esperado: 32 frames.
- Dimensao obrigatoria: `128x128`.
- Formato obrigatorio: PNG `RGBA`.
- Fundo: alpha transparente, sem fundo verde opaco.
- Conteudo proibido: labels, texto de direcao, `Policia Civil`, `Sargento Silva`, nomes aleatorios, arma em destaque, zumbis, gore ou cenario.
- Direcoes criticas: `front` diferente de `back`, `left` diferente de `right`, `back_left` diferente de `back_right`.
- Integracao: a integracao temporaria em `Player.tscn` foi removida apos reprovacao; o Player deve permanecer usando apenas idle ate uma nova walk ser aprovada.

### Limitacao da Rodada

A Walk V1 usou derivacao procedural conservadora dos idles. A revisao humana concluiu que a variacao entre F1, F2, F3 e F4 ficou sutil demais para gameplay: sem passada clara, sem alternancia suficiente de pernas e bracos, sem movimento natural de tronco/mochila e sem sensacao visual de peso.

Essa tentativa nao deve ser usada como walk cycle oficial.

## Pipeline Walk Cycle 8 Direcoes V2 - REPROVADO

A Walk V2 foi criada como nova tentativa apos a reprovacao da V1. Apos revisao humana, ela foi **REPROVADA** e nao esta aprovada como oficial.

Status:

- `walk_cycle_v2`: **REPROVADO**;
- motivo: frames ainda parecem poses paradas, sem ciclo de marcha convincente;
- status: nao aprovado para Godot;
- uso futuro: apenas referencia negativa/auditoria;
- historico documentado; copias rejeitadas removidas do fluxo ativo em limpeza posterior.

### Estrutura V2

```txt
historico documental da V2 reprovada
  sprites_walk_v2/ removido do fluxo ativo
  exports_walk_cycle_v2/ removido do fluxo ativo
```

### Metodo V2

1. Usar os 8 sprites da Base Idle Oficial V1 como fonte obrigatoria.
2. Separar cada sprite por mascaras de alpha em nucleo corporal, pernas, pes, bracos e mochila.
3. Gerar quatro fases por direcao:
   - F1: contato, uma perna avancada;
   - F2: passagem, corpo centralizado;
   - F3: contato oposto, outra perna avancada;
   - F4: passagem oposta.
4. Aplicar movimento independente de pernas e pes, com balanco moderado de bracos.
5. Aplicar bob sutil no tronco/mochila.
6. Exportar 32 PNGs `128x128`, `RGBA`, com alpha.
7. Gerar preview humano V2.
8. Nao integrar no `Player.tscn` ate aprovacao humana.

### Validacao V2 Executada

- 32 frames encontrados.
- Todos os frames possuem `128x128`.
- Todos os frames sao PNG `RGBA`.
- Todos possuem transparencia valida.
- Nao ha fundo verde opaco.
- Nao ha labels ou texto dentro dos frames.
- `front` e `back`, `left` e `right`, `back_left` e `back_right` sao distintos.
- F1, F2, F3 e F4 possuem diferenca visual mensuravel em cada direcao.
- Preview V2 foi gerado.
- `Player.tscn` nao referencia `walk_v2` nem a Walk V1 reprovada.

### Motivo da Reprovacao

A Walk V2 ainda parecia uma variacao de idle: pernas sem passada suficiente, bracos quase sem balanco oposto, tronco sem deslocamento de peso e mochila quase parada. Ela nao deve ser integrada no `Player.tscn` nem usada como base visual principal.

## Pipeline Walk Cycle 8 Direcoes V3 - REPROVADO

A Walk V3 foi criada como nova tentativa apos a reprovacao da V2. Apos decisao humana posterior, ela foi **REPROVADA** por descaracterizar o personagem e deixar o corpo artificial, inferior a Base Idle Oficial V1.

### Estrutura V3

```txt
res://assets/characters/antonio_rafael/sprites/walk_v3/
  front/
  back/
  left/
  right/
  front_left/
  front_right/
  back_left/
  back_right/
res://assets/characters/antonio_rafael/exports/walk_cycle_v3/
```

### Metodo V3

1. Usar os 8 sprites da Base Idle Oficial V1 como referencia de identidade.
2. Preservar cabeca, rosto, oculos e leitura superior a partir dos idles aprovados.
3. Reconstruir pernas, botas, bracos, tronco e mochila como key poses.
4. Gerar quatro fases por direcao:
   - F1: contato A;
   - F2: passagem A;
   - F3: contato B;
   - F4: passagem B.
5. Exportar 32 PNGs `128x128`, `RGBA`, com alpha.
6. Gerar preview humano V3.
7. Nao integrar no `Player.tscn` ate aprovacao humana.

### Validacao V3 Executada

- 32 frames encontrados.
- Todos os frames possuem `128x128`.
- Todos os frames sao PNG `RGBA`.
- Todos possuem transparencia valida.
- Nao ha fundo verde opaco.
- Nao ha labels ou texto dentro dos frames.
- `front` e `back`, `left` e `right`, `back_left` e `back_right` sao distintos.
- F1, F2, F3 e F4 possuem diferenca visual mensuravel em cada direcao.
- Preview V3 foi gerado.
- `Player.tscn` nao referencia `walk_v3`, `walk_v2` ou a Walk V1 reprovada.

### Pendencia

A Walk V3 nao deve ser integrada ao Godot. Os caminhos ativos `sprites/walk_v3/` e `exports/walk_cycle_v3/` foram removidos do fluxo ativo. O Player permanece usando apenas a Base Idle Oficial V1.

## Pipeline Walk Manual Candidate V1 - TESTE REPROVADO

Apos a reprovacao oficial das Walk V1, V2 e V3, uma nova sheet manual foi recebida em `res://assets/characters/antonio_rafael/source/` e tratada como fonte candidata, sem geracao de nova arte por IA.

### Estrutura Manual

```txt
res://assets/characters/antonio_rafael/source/walk_sheet_manual_candidate_v1/
  antonio_rafael_walk_sheet_manual_candidate_v1.png
res://assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/
  front/
  back/
  left/
  right/
  front_left/
  front_right/
  back_left/
  back_right/
res://assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/
  antonio_rafael_walk_manual_candidate_v1_preview.png
```

### Metodo Manual

1. Localizar `antonio_rafael_walk_sheet_candidate_v1.png` em `source/`.
2. Copiar a fonte para `source/walk_sheet_manual_candidate_v1/` com nome padronizado.
3. Analisar a imagem como PNG `2048x2048`, `RGBA`, com checkerboard opaco.
4. Detectar silhuetas por componentes conectados, evitando recorte por grade fixa.
5. Remover o checkerboard opaco por propagacao do fundo conectado as bordas.
6. Exportar frames individuais `128x128`, PNG `RGBA`, com alpha real.
7. Gerar preview tratado para revisao humana.

### Resultado Manual

- 7 linhas reais de movimento detectadas.
- 8 frames extraidos por linha.
- 56 frames tratados no total.
- Direcoes extraidas: `front`, `back`, `left`, `front_left`, `front_right`, `back_left`, `back_right`.
- Direcao ausente: `right`.
- Por decisao humana posterior, `right` foi criado temporariamente por espelhamento horizontal de `left`.
- Total para teste: 64 frames, 8 direcoes x 8 frames.
- Integracao temporaria foi feita no `Player.tscn` como `walk_manual_candidate_v1_TESTE`.
- O controlador tocava `walk_*` durante movimento e retornava para `idle_*` ao parar.
- Teste humano no Godot reprovou a caminhada.
- A integracao foi removida do `Player.tscn`; o Player voltou para idle-only seguro.

### Regra de Gate

A candidata manual foi reprovada como teste tecnico no Godot. A direcao `right` nao e oficial porque foi espelhada de `left`.

Diagnostico tecnico:

- `walk_left` usava somente frames da pasta `left`.
- `walk_right` usava somente frames da pasta `right`.
- `walk_right` era espelho horizontal exato de `walk_left`.
- O controlador de direcao nao alternava direcao no meio do ciclo: input lateral puro caia em `LEFT` para `x < 0` e `RIGHT` para `x > 0`.
- A instabilidade visual vem dos frames laterais: a sequencia `left` alterna frames com o personagem olhando para lados opostos. O espelhamento de `right` reproduz o mesmo problema invertido.
- As passadas sao curtas e nao transmitem deslocamento real.

### Proxima Estrategia Recomendada

```txt
Walk Prototype V5 - LEFT somente, 8 frames, passada ampliada
```

Regras para a V5:

- criar somente a direcao `left`;
- usar `antonio_rafael_idle_left.png` como referencia obrigatoria;
- aumentar amplitude da passada;
- fazer botas avancarem e recuarem claramente;
- alternar bracos em oposicao as pernas;
- manter mochila, colete e volume forte/atletico;
- nao gerar personagem gordo, de palito ou descaracterizado;
- nao integrar no Godot antes de aprovacao visual da sequencia `left`;
- reprovar qualquer ciclo que misture frames olhando para esquerda e direita dentro da mesma animacao lateral.

## Pipeline Rig Tecnico 2D - Decisao Posterior

Em 2026-06-19, a estrategia de producao de novas animacoes foi alterada para:

```txt
Rig Tecnico 2D primeiro, sprites finais depois.
```

Motivo:

- as tentativas anteriores de walk cycle ficaram visualmente estaticas ou descaracterizaram o personagem;
- a Walk V1 permanece formalmente `REPROVADA`, com uso permitido somente para rastreabilidade/auditoria;
- a Base Idle Oficial V1 continua aprovada e deve guiar identidade, escala, silhueta, uniforme, colete, mochila, patch e divisa.

O rig tecnico e ferramenta de producao, nao runtime final. Ele nao substitui `Player.tscn`, nao muda o movimento do jogo e nao autoriza usar `Skeleton2D` no Player oficial sem nova aprovacao humana.

Fluxo atualizado:

1. Usar a Base Idle Oficial V1 como referencia visual mestre.
2. Separar o personagem em partes controlaveis em `res://assets/characters/antonio_rafael/rig/parts/`.
3. Montar e animar o rig em `res://scenes/rig/AntonioRafaelRigLab.tscn`.
4. Validar passada real, alternancia de pernas/bracos, bob do tronco e oscilacao da mochila.
5. Exportar frames finais para PNG `128x128` em `res://assets/characters/antonio_rafael/rig/exports/`.
6. Limpar alpha, baseline, escala, tremedeira e consistencia visual.
7. Gerar preview humano.
8. Integrar no `Player.tscn` somente depois de aprovacao humana explicita.

Documento dedicado:

- `res://docs/technical/rig-pipeline.md`

## Separacao de Partes do Rig - Feature 005

A feature `005-rig-parts-separation` preparou a primeira base de partes visuais controlaveis do SGT Antonio Rafael.

Direcao usada:

```txt
front_right
```

Arquivos principais:

- `res://assets/characters/antonio_rafael/rig/parts/front_right/`
- `res://assets/characters/antonio_rafael/rig/parts_manifest.json`
- `res://assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png`
- `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png`

Estado:

- partes tecnicas **APROVADAS PARCIALMENTE** como `Rig Parts Separation V1`;
- Base Idle Oficial V1 preservada;
- Player oficial nao alterado;
- nenhum walk cycle final criado;
- nenhuma animacao integrada ao Player.

Escopo da aprovacao parcial:

- autorizada como base tecnica inicial para laboratorio, estudo de separacao, preparacao de esqueleto/armacao e referencia de refinamento manual;
- nao autorizada como arte final, animacao final, walk cycle oficial, asset final de gameplay ou substituto do Player runtime.

Limitacoes registradas: `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron` precisam refinamento manual. `radio` e `holster` permanecem rejeitados no manifesto por baixa legibilidade.

A proxima etapa recomendada e refinar manualmente as partes limitadas e validar visualmente no Godot antes de qualquer animacao futura.

## Rig Assembly V1 - Feature 006

A feature `006-rig-assembly-v1` montou tecnicamente as partes `front_right` em `res://scenes/rig/AntonioRafaelRigLab.tscn`.

Estado:

- laboratorio de rig atualizado com hierarquia tecnica e **APROVADO PARCIALMENTE** como `Rig Assembly V1`;
- pivos/markers representados ou documentados;
- manifesto de montagem criado em `res://assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`;
- preview humano criado em `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png`;
- Base Idle Oficial V1 preservada;
- Player oficial nao alterado;
- nenhum walk cycle final criado;
- nenhuma animacao oficial criada;
- nenhum sistema de gameplay alterado.

Esta montagem e uma ponte tecnica entre separacao de partes e animacao futura. Ela nao substitui o Player e nao deve ser usada em runtime.

Limitacoes registradas: `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron` precisam refinamento manual. A validacao foi estatica porque Godot nao estava no PATH; ainda falta validacao visual ao vivo no Godot.
