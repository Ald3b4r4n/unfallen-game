# Ficha Tecnica Oficial: SGT Antonio Rafael

**Personagem**: SGT Antonio Rafael  
**Instituicao**: Policia Militar de Goias / PMGO  
**Idade**: 35 anos  
**Funcao narrativa**: protagonista jogavel de sobrevivencia  
**Estado inicial**: cansado apos plantao, mas alerta  
**Estilo visual**: Pixel Art HD isometrica  
**Engine futura**: Godot 4

## Identidade Visual

Antonio Rafael deve parecer humano, brasileiro, serio, cansado, preparado, vulneravel e disciplinado. O desenho evita aparencia de super-heroi, soldado futurista, caricatura infantil, Policia Civil, zumbis, gore ou cena de acao.

Caracteristicas obrigatorias registradas para a arte:

- pele morena clara;
- rosto inspirado nas fotos reais de referencia;
- cabelo escuro, curto, estilo militar;
- barba feita;
- oculos de grau;
- fisico atletico realista;
- uniforme policial militar em tons cinza, chumbo e preto;
- colete tatico policial;
- mochila tatico/sobrevivencia;
- patch da bandeira de Goias no braco;
- divisa de sargento visivel;
- referencia PMGO apenas como detalhe pequeno no uniforme/colete/mochila;
- pose idle neutra;
- sem arma em destaque nesta primeira criacao.

## Primeira Rodada Oficial Valida

Esta documentacao registra a **primeira rodada oficial valida de criacao dos assets visuais do SGT Antonio Rafael**. Tentativas anteriores permanecem rejeitadas e **nao foram usadas como base visual** para esta entrega.

Ferramenta usada:

- `image_gen` integrado ao Codex para gerar sprites fonte em Pixel Art HD com as fotos reais abertas como referencias visuais.
- Pos-processamento local com Pillow para extrair o PNG gerado do log da sessao, remover chroma-key verde, normalizar escala e exportar PNGs finais `128x128` com alpha.

## Fotos de Referencia Usadas

As fotos reais foram encontradas no caminho obrigatorio:

- `res://assets/characters/antonio_rafael/references/ref_1.jpg`
- `res://assets/characters/antonio_rafael/references/ref_2.png`
- `res://assets/characters/antonio_rafael/references/ref_3.png`
- `res://assets/characters/antonio_rafael/references/ref_4.png`

Uso das referencias:

- rosto, tom de pele, cabelo curto, oculos e expressao;
- fisico atletico realista e postura seria;
- uniforme PMGO, patch de Goias, divisa e composicao de colete/mochila.

As fotos sao material restrito de referencia e nao entram na build final do jogo como sprites.

## Arquivos Gerados

Sprites individuais finais:

- `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front.png`
- `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_back.png`
- `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_left.png`
- `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_right.png`
- `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_left.png`
- `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`
- `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_back_left.png`
- `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_back_right.png`

Preview para aprovacao humana:

- `res://assets/characters/antonio_rafael/exports/antonio_rafael_idle_contact_sheet_preview.png`

Fontes geradas preservadas para auditoria:

- `res://assets/characters/antonio_rafael/source/official_round_01/antonio_rafael_idle_*_source.png`

## Decisao Humana: Base Idle Oficial V1

Em 2026-06-18, apos validacao visual no Godot, a primeira rodada oficial valida foi **APROVADA** como **BASE IDLE OFICIAL V1**.

Esta aprovacao registra que os 8 sprites idle individuais em `128x128` estao autorizados como primeira base oficial do personagem jogavel.

Esta aprovacao cobre somente:

- importar/configurar os sprites idle no Godot;
- substituir o placeholder visual do `Player`;
- testar troca de idle por ultima direcao de movimento na `CharacterTestScene.tscn`.

Esta aprovacao **nao** representa aprovacao final definitiva do personagem completo. Walk cycle, combate, armas funcionais, zumbis, inventario, HUD final, mundo definitivo e novas imagens continuam fora do escopo.

## Configuracao Godot

Os sprites idle V1 foram conectados ao `Player` em:

- `res://scenes/player/Player.tscn`
- `res://scripts/player/player_controller.gd`
- `res://scripts/player/player_animation_controller.gd`

Configuracao aplicada:

- `CharacterSprite` usa `antonio_rafael_idle_front.png` como textura inicial.
- `CharacterSprite` usa `texture_filter = Nearest` na cena.
- `AnimPlayer` possui oito animacoes idle, uma por direcao.
- O controlador de animacao atualiza a direcao quando ha movimento e mantem o ultimo idle ao parar.
- O controlador do Player usa acoes `move_*` se existirem e fallback local para WASD/setas se o projeto ainda nao tiver input map.
- Nenhum walk cycle foi criado.

## Validacao da Rodada

Resultado tecnico e visual aprovado:

- 8 sprites individuais existem.
- Todos foram exportados em `128x128 px`.
- Todos estao em PNG `RGBA` com cantos transparentes.
- O personagem aparece corretamente na cena de teste.
- O fundo verde nao aparece no Godot.
- A escala visual esta aceitavel para teste.
- A direcao idle troca conforme a ultima direcao de movimento.
- Nao ha labels externos nas imagens individuais.
- Nao ha textos externos como `FRONT`, `BACK`, `LEFT SIDE`, `RIGHT SIDE` ou `IDLE POSE`.
- Nao ha pose chamada `PMGO`.
- Nao foi identificado uso de `Policia Civil`, `Sargento Silva`, `Silva` ou nomes aleatorios.
- O personagem usa oculos nas direcoes onde o rosto e visivel.
- A divisa de sargento aparece como detalhe visual de manga nas direcoes adequadas.
- A referencia PMGO aparece apenas como detalhe no uniforme/colete.
- O patch de Goias aparece no braco nas direcoes em que a manga e visivel.
- Frente, costas, laterais e diagonais foram geradas como imagens distintas.
- `back_left` e `back_right` possuem hashes diferentes e leitura visual distinta.
- A escala foi normalizada por altura visual e baseline comum.
- O resultado esta configurado no `Player` para avaliacao visual na `CharacterTestScene.tscn`.
- Nao houve alteracao indevida de gameplay.
- Nao houve alteracao de sistemas fora do escopo aprovado.

Pendencias:

- A Base Idle Oficial V1 esta aprovada como primeira base oficial jogavel.
- Revisao artistica futura pode melhorar legibilidade de detalhes pequenos em `128x128`, especialmente texto de tarja e PMGO.
- Nenhum walk cycle foi criado nesta etapa.

## Proxima Feature Recomendada

**Walk Cycle 8 direcoes do SGT Antonio Rafael**.

Essa futura feature deve usar a **Base Idle Oficial V1** como referencia visual obrigatoria. Esta etapa foi apenas registrada e **nao foi executada**.

**Status oficial**: **BASE IDLE OFICIAL V1 APROVADA**.
