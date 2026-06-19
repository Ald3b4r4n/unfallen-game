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

Essa recomendacao usou a **Base Idle Oficial V1** como referencia visual obrigatoria e foi o ponto de partida para a Walk Cycle V1 registrada abaixo.

**Status oficial**: **BASE IDLE OFICIAL V1 APROVADA**.

## Walk Cycle 8 Direcoes V1 - REPROVADA

Em 2026-06-18, foi criada a primeira base de caminhada V1 do SGT Antonio Rafael para validacao humana, usando a **Base Idle Oficial V1** como referencia visual direta. Apos revisao humana, esta tentativa foi **REPROVADA**.

Reclassificacao obrigatoria:

- `walk_cycle_v1`: **REPROVADO**;
- motivo: frames visualmente estaticos, sem passada real;
- status: nao aprovado para Godot;
- uso futuro: apenas referencia negativa/auditoria, nao usar como asset final;
- a Base Idle Oficial V1 permanece intacta e aprovada.

Escopo executado:

- 8 direcoes de caminhada: `front`, `back`, `left`, `right`, `front_left`, `front_right`, `back_left`, `back_right`;
- 4 frames por direcao;
- 32 PNGs finais em `128x128`;
- PNG `RGBA` com alpha transparente;
- preview humano original gerado e posteriormente removido do fluxo ativo;
- integracao temporaria das animacoes `walk_*` no `Player.tscn`, posteriormente removida apos reprovacao;
- controlador atualizado para tocar `walk_*` durante movimento e retornar a `idle_*` ao parar.

Metodo de geracao:

- derivacao procedural local com Pillow a partir dos 8 idles aprovados;
- separacao por mascaras de alpha para corpo, bracos e pernas;
- deslocamentos pequenos por frame para simular passada;
- nenhuma recriacao do personagem por prompt;
- nenhuma troca de identidade visual.

Arquivos da tentativa V1:

- os 32 frames foram removidos do caminho ativo `res://assets/characters/antonio_rafael/sprites/walk/`;
- copia rejeitada removida do fluxo ativo em limpeza posterior;
- fontes e preview rejeitados removidos do fluxo ativo em limpeza posterior.

Validacao tecnica executada antes da reprovacao:

- 32 frames existem;
- todos os frames sao PNG `RGBA`;
- todos possuem `128x128`;
- todos possuem transparencia valida;
- nao ha pixels verdes opacos;
- nao ha labels ou texto de direcao dentro dos frames;
- nao ha `Policia Civil`, `Sargento Silva` ou nomes aleatorios;
- `front` e `back` sao arquivos distintos;
- `left` e `right` sao arquivos distintos;
- `back_left` e `back_right` sao arquivos distintos;
- o preview foi gerado;
- as animacoes `walk_*` foram removidas do `Player.tscn` apos reprovacao;
- os idles aprovados continuam existindo.

Limitacoes:

- a caminhada V1 e uma derivacao procedural sutil da Base Idle Oficial V1, nao uma animacao manual refinada frame a frame;
- os frames F1, F2, F3 e F4 ficaram muito parecidos;
- nao houve passada clara, alternancia suficiente de pernas ou balanco perceptivel de bracos;
- nao houve sensacao visual adequada de peso, deslocamento ou ciclo de marcha;
- a animacao pareceu idle repetido e nao caminhada.

**Status oficial da tentativa**: **WALK CYCLE V1 REPROVADO**. O historico permanece documentado, mas os arquivos rejeitados foram removidos do fluxo ativo e nao devem ser usados no gameplay.

## Walk Cycle 8 Direcoes V2 - REPROVADA

Em 2026-06-18, apos a reprovacao da Walk V1, foi criada uma nova tentativa: **Walk Cycle V2**. A V2 usou a Base Idle Oficial V1 como referencia visual direta, mas a revisao humana concluiu que ela ainda nao apresenta caracteristicas suficientes para montar uma caminhada real.

Reclassificacao obrigatoria:

- `walk_cycle_v2`: **REPROVADO**;
- motivo: frames ainda parecem poses paradas, sem ciclo de marcha convincente;
- status: nao aprovado para Godot;
- uso futuro: apenas referencia negativa/auditoria, nao usar como asset final;
- a Base Idle Oficial V1 permanece intacta e aprovada.

Escopo executado:

- 8 direcoes de caminhada: `front`, `back`, `left`, `right`, `front_left`, `front_right`, `back_left`, `back_right`;
- 4 frames por direcao;
- 32 PNGs finais em `128x128`;
- PNG `RGBA` com alpha transparente;
- preview humano gerado originalmente e posteriormente removido do fluxo ativo;
- nenhuma integracao automatica no `Player.tscn`;
- o Player permanece sem animacoes walk ativas ate aprovacao humana.

Metodo de geracao:

- derivacao local a partir dos 8 idles aprovados;
- separacao do sprite em areas de corpo, pernas, pes, bracos e mochila por mascaras de alpha;
- alternancia mais forte de pernas e pes nos frames de contato F1/F3;
- frames de passagem F2/F4 com corpo mais centralizado e bob vertical;
- balanco moderado de bracos para evitar leitura de arma ou objeto externo;
- nenhuma geracao de novo personagem por prompt.

Validacao tecnica executada antes da reprovacao:

- 32 frames V2 existem;
- todos sao PNG `RGBA`;
- todos possuem `128x128`;
- todos possuem transparencia valida;
- nao ha pixels verdes opacos;
- nao ha labels ou texto de direcao dentro dos frames;
- nao ha `Policia Civil`, `Sargento Silva` ou nomes aleatorios;
- `front` e `back` sao distintos;
- `left` e `right` sao distintos;
- `back_left` e `back_right` sao distintos;
- F1, F2, F3 e F4 de cada direcao possuem diferenca visual mensuravel;
- preview V2 foi gerado;
- Walk V2 nao foi marcada como oficial.

Motivo visual da reprovacao:

- os frames ainda parecem poses paradas;
- nao ha ciclo de marcha convincente;
- as pernas nao demonstram passada suficiente;
- os bracos quase nao fazem balanco oposto as pernas;
- o tronco nao transmite deslocamento de peso;
- a mochila quase nao acompanha o movimento;
- a diferenca entre F1, F2, F3 e F4 ainda e insuficiente para gameplay.

Limitacoes:

- A V2 ainda e uma derivacao procedural dos idles, nao animacao artistica manual quadro a quadro.
- Os frames rejeitados foram removidos do fluxo ativo em limpeza posterior.
- A V2 nao deve ser integrada como oficial.

**Status oficial da tentativa**: **WALK CYCLE V2 REPROVADO**. A V2 nao esta ativa no Player e nao deve ser usada como base visual principal para novas tentativas.

## Walk Cycle 8 Direcoes V3 - REPROVADA

Em 2026-06-18, apos a reprovacao da Walk V2, foi criada uma nova tentativa: **Walk Cycle V3 - caminhada real por key poses**.

A V3 usa a Base Idle Oficial V1 somente como referencia de identidade visual. Diferente da V1 e da V2, os frames foram reconstruidos como poses de caminhada, com pernas, botas, bracos, tronco e mochila reposicionados para formar quatro key poses por direcao.

Apos decisao humana posterior, a V3 foi **REPROVADA** porque descaracterizou o personagem, deixando o corpo artificial e inferior a Base Idle Oficial V1. Ela nao deve ser chamada de oficial, nao deve ser integrada ao Godot e nao deve ser usada como base visual principal.

Escopo executado:

- 8 direcoes de caminhada: `front`, `back`, `left`, `right`, `front_left`, `front_right`, `back_left`, `back_right`;
- 4 frames por direcao;
- 32 PNGs finais em `128x128`;
- PNG `RGBA` com alpha transparente;
- preview humano gerado originalmente em `res://assets/characters/antonio_rafael/exports/walk_cycle_v3/antonio_rafael_walk_cycle_v3_preview.png`, depois removido do fluxo ativo;
- nenhuma integracao automatica no `Player.tscn`;
- o Player permanece sem animacoes walk ativas ate aprovacao humana.

Metodo de geracao:

- reconstrucao local por desenho de key poses;
- cabeca, rosto, oculos e elementos superiores usam os idles aprovados como ancora visual;
- pernas, botas, bracos e mochila foram redesenhados/recompostos em poses de caminhada;
- F1 e F3 representam contatos opostos;
- F2 e F4 representam passagens opostas;
- nenhuma imagem foi marcada como oficial.

Validacao tecnica executada:

- 32 frames V3 existem;
- todos sao PNG `RGBA`;
- todos possuem `128x128`;
- todos possuem transparencia valida;
- nao ha pixels verdes opacos;
- nao ha labels ou texto de direcao dentro dos frames;
- nao ha `Policia Civil`, `Sargento Silva` ou nomes aleatorios;
- `front` e `back` sao distintos;
- `left` e `right` sao distintos;
- `back_left` e `back_right` sao distintos;
- F1, F2, F3 e F4 de cada direcao possuem diferenca visual mensuravel;
- preview V3 foi gerado;
- Walk V3 nao foi integrada no Godot e nao foi marcada como oficial.

Analise visual objetiva:

- A V3 apresenta alternancia clara de pernas e botas.
- Os bracos alternam de forma mais visivel em oposicao as pernas.
- O corpo possui bob vertical e leve deslocamento de peso.
- A mochila acompanha a pose de modo perceptivel, principalmente em costas e diagonais.
- A leitura de caminhada e mais clara que V1 e V2 quando vista no preview parado.

Limitacoes:

- A V3 e uma reconstrucao por key poses e simplifica parte do corpo, especialmente pernas e bracos.
- A fidelidade fina do uniforme, colete e mochila ainda deve ser revisada visualmente por humano.
- A V3 foi reprovada por decisao humana e seus caminhos ativos foram removidos.

**Status oficial da tentativa**: **WALK CYCLE V3 REPROVADO**. A V3 nao esta ativa no Player e nao deve ser usada no gameplay.

## Walk Manual Candidate V1 - Sheet Manual Tratada

Em 2026-06-18, apos a reprovacao das Walk V1, V2 e V3, foi recebida uma nova sheet manual em:

- `res://assets/characters/antonio_rafael/source/antonio_rafael_walk_sheet_candidate_v1.png`

A imagem foi organizada como fonte candidata manual em:

- `res://assets/characters/antonio_rafael/source/walk_sheet_manual_candidate_v1/antonio_rafael_walk_sheet_manual_candidate_v1.png`

Tratamento aplicado:

- analise da sheet manual como PNG `2048x2048`, `RGBA`, com checkerboard opaco;
- deteccao de silhueta por componente para evitar cortes por grade fixa;
- remocao tecnica do checkerboard opaco;
- exportacao de frames individuais `128x128`, PNG `RGBA`, com alpha;
- preview tratado em `res://assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/antonio_rafael_walk_manual_candidate_v1_preview.png`.

Resultado extraido:

- 56 frames tratados;
- 7 direcoes com 8 frames cada: `front`, `back`, `left`, `front_left`, `front_right`, `back_left`, `back_right`;
- a direcao `right` nao existe como linha propria na sheet manual.

Atualizacao para teste tecnico:

- por decisao humana, foram criados 8 frames `right` temporarios por espelhamento horizontal dos frames `left`;
- total atual para teste: 64 frames, 8 direcoes x 8 frames;
- preview completo: `res://assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/antonio_rafael_walk_manual_candidate_v1_complete_preview.png`;
- manifesto de teste: `res://assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/walk_manual_candidate_v1_test_manifest.json`;
- integracao temporaria no `Player.tscn` como `walk_manual_candidate_v1_TESTE`.

Status:

- **REPROVADA COMO TESTE**;
- **nao oficial**;
- integracao temporaria removida do Player;
- frames preservados apenas como material de auditoria/candidata rejeitada;
- nenhuma walk esta aprovada oficialmente.

Limitacao da direcao `right`:

- `right` e espelhamento de `left`, nao arte manual original;
- patch, mochila, equipamento e leitura lateral podem ficar invertidos;
- essa solucao existe apenas para testar fluxo de animacao no Godot.

Limpeza registrada:

- os caminhos ativos reprovados `sprites/walk/`, `sprites/walk_v2/`, `sprites/walk_v3/`, `exports/walk_cycle_v1/`, `exports/walk_cycle_v2/` e `exports/walk_cycle_v3/` foram removidos quando existentes;
- as copias antigas em `source/rejected/walk_cycle_v1/`, `source/rejected/walk_cycle_v2/` e `source/rejected/walk_cycle_v3/` foram removidas quando existentes;
- a Base Idle Oficial V1 em `sprites/idle/` permaneceu intacta.

### Reprovacao do walk_manual_candidate_v1_TESTE

O teste humano no Godot reprovou `walk_manual_candidate_v1_TESTE`.

Problemas observados:

- passadas curtas demais;
- quase sem sensacao visual de andar;
- caminhada lateral instavel;
- o personagem vira ao contrario a cada 3 ou 4 passadas nas laterais;
- animacao sem deslocamento real convincente.

Diagnostico tecnico:

- `walk_left` usava somente frames da pasta `left`;
- `walk_right` usava somente frames da pasta `right`;
- `right` era espelho exato de `left`, conforme autorizado apenas para teste;
- o controlador de direcao classificava `x < 0` como `LEFT` e `x > 0` como `RIGHT`, sem alternar direcao no meio do ciclo;
- a causa mais provavel do giro lateral esta nos assets: a propria sequencia `left` mistura frames olhando para lados opostos (`01`, `02` e `05` para um lado; `03`, `04`, `06`, `07` e `08` para o lado oposto). O `right` espelhado herdou a mesma alternancia.

Estado apos reprovacao:

- `Player.tscn` voltou para modo seguro com apenas os 8 idles aprovados;
- `player_animation_controller.gd` voltou a tocar somente `idle_*` conforme ultima direcao;
- a Base Idle Oficial V1 permanece intacta e aprovada.

## Proxima Estrategia Recomendada: Walk Prototype V5

Registrar a proxima tentativa como:

```txt
Walk Prototype V5 - LEFT somente, 8 frames, passada ampliada
```

Objetivo:

- criar somente a direcao `left`;
- usar o sprite idle left aprovado como base;
- aumentar amplitude da passada;
- fazer botas avancarem e recuarem claramente;
- alternar bracos em oposicao as pernas;
- manter volume forte/atletico do personagem;
- manter mochila, colete e identidade da Base Idle Oficial V1;
- nao integrar no Godot antes de aprovacao visual da sequencia `left`.

Critérios futuros de aceitacao:

- personagem continua parecido com a Base Idle Oficial V1;
- passada lateral visivel;
- botas mudam claramente de posicao;
- pernas alternam com amplitude maior;
- bracos alternam em oposicao as pernas;
- corpo nao vira para o lado oposto durante a animacao;
- ciclo nao alterna sprites olhando para esquerda/direita indevidamente;
- caminhada parece caminhada no preview parado e no Godot;
- personagem continua forte/atletico, sem deformacao.

## Decisao Posterior: Rig Tecnico 2D Primeiro

Em 2026-06-19, a decisao humana reprovou a ultima rodada de walk cycle por repetir o problema central das tentativas anteriores: frames visualmente parados, F1-F4 muito parecidos, sem passada clara, sem alternancia real de pernas/bracos e sem sensacao de deslocamento.

Registro formal:

- `walk_cycle_v1`: **REPROVADO**;
- motivo: frames praticamente estaticos, sem passada real;
- status: nao oficial;
- uso permitido: somente rastreabilidade/auditoria;
- uso proibido: gameplay, Player oficial e animacao oficial.

A Base Idle Oficial V1 continua aprovada, intacta e deve permanecer como referencia visual mestre do personagem.

Nova estrategia de producao:

```txt
Rig Tecnico 2D primeiro, sprites finais depois.
```

O rig tecnico deve ser usado apenas como ferramenta de producao para animar partes do personagem e exportar frames finais PNG `128x128`. Ele nao substitui automaticamente o Player em runtime e nao autoriza trocar o Player final para `Skeleton2D`.

Estrutura inicial criada:

- `res://assets/characters/antonio_rafael/rig/`
- `res://assets/characters/antonio_rafael/rig/parts/`
- `res://assets/characters/antonio_rafael/rig/exports/`
- `res://assets/characters/antonio_rafael/source/rejected/walk_cycle_v1/`
- `res://scenes/rig/AntonioRafaelRigLab.tscn`
- `res://scripts/rig/rig_export_notes.gd`
- `res://scripts/rig/rig_preview_controller.gd`
- `res://docs/technical/rig-pipeline.md`

Estado do Player apos esta decisao:

- `Player.tscn` permanece em modo seguro com apenas `idle_*`;
- nenhuma Walk V1, V2, V3 ou candidata manual esta ativa como animacao oficial;
- nenhuma nova walk cycle final foi gerada nesta execucao;
- nenhuma nova caminhada foi integrada no Godot.

## Separacao de Partes do Rig Tecnico 2D - Front Right

Em 2026-06-19, foi criada uma primeira separacao tecnica do SGT Antonio Rafael em partes visuais controlaveis para laboratorio de rig 2D.

Referencia mestre:

- `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`

Partes obrigatorias criadas:

- cabeca, pescoco, tronco base, colete, mochila;
- bracos, antebracos e maos;
- quadril, coxas, pernas/canelas e botas.

Partes opcionais criadas:

- oculos;
- cinto;
- patch da bandeira de Goias;
- divisa de sargento.

Partes opcionais rejeitadas nesta direcao:

- radio;
- coldre.

Motivo da rejeicao dos opcionais: baixa legibilidade no idle `front_right` aprovado e risco de inventar detalhe visual.

Status:

- material tecnico **APROVADO PARCIALMENTE** como `Rig Parts Separation V1`;
- nao e animacao;
- nao e walk cycle;
- nao substitui o Player oficial.

Escopo autorizado da aprovacao parcial:

- laboratorio de rig tecnico;
- estudo de separacao de partes;
- preparacao para futura montagem de esqueleto/armacao;
- referencia para refinamento manual.

Limitacoes obrigatorias:

- `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron` precisam refinamento manual antes de virar base final de animacao;
- `radio` e `holster` foram rejeitados no manifesto por baixa legibilidade na pose `front_right`;
- a recomposicao e tecnica, nao arte final;
- o rig ainda nao esta animado;
- falta validacao visual ao vivo no Godot.

A Base Idle Oficial V1 permanece aprovada e intacta.
