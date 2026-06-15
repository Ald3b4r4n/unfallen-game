# Requisitos Iniciais

## Requisitos Funcionais (RF)
- **RF-01 (Menu e Login)**: Tela inicial com opções de iniciar/continuar, créditos, volume e formulário simples de login para sincronizar save na nuvem.
- **RF-02 (Movimentação Isométrica)**: Deslocamento livre do protagonista (Antônio Rafael) em grid isométrico utilizando teclado (WASD ou setas).
- **RF-03 (Combate Tático e Defesa)**: Ataque corpo a corpo básico (cassetete/faca) e disparo de arma de fogo com mira via ponteiro do mouse, além de ação de esquiva/empurrão baseada em resistência (estamina).
- **RF-04 (Gestão de Inventário)**: Tela de inventário (atalho `I`) para visualizar e gerenciar suprimentos escassos coletados (munição, curativos, pilhas da lanterna, chaves).
- **RF-05 (Exploração e Coleta)**: Busca por recursos interativos no cenário isométrico (caixas, gavetas, corpos, prateleiras).
- **RF-06 (Investigação Narrativa)**: Coleta e leitura de pistas textuais (documentos, relatórios policiais, rádios ativos com áudio de estática, bilhetes) que revelem a trajetória de Luísa.
- **RF-07 (Obstáculos e Puzzles Ambientais)**: Bloqueios no mapa que demandam chaves específicas, fusíveis para painéis elétricos ou empurrar objetos para liberar passagens.
- **RF-08 (Save em Nuvem com Fallback)**: Sincronização automática e assíncrona do progresso (capítulo atual, inventário, vida) com banco de dados remoto nos checkpoints. Fallback em LocalStorage se offline.
- **RF-09 (HUD)**: HUD isométrica sutil exibindo a saúde atual, barra de energia da lanterna (bateria), objetivos rápidos ativos e medidor de resistência.
- **RF-10 (Painel de Testes/Cheats)**: Atalho de desenvolvedor para alternar invencibilidade, munição infinita e pular capítulos para facilitar auditorias e testes de gameplay.

## Requisitos Não Funcionais (RNF)
- **RNF-01 (Depth Sorting Isométrico)**: Correção visual em tempo real (60 FPS) da ordenação por eixo Y para garantir que os sprites de personagens e infectados transitem corretamente atrás ou na frente de objetos do cenário (árvores, móveis, carros).
- **RNF-02 (Design de Som Imersivo)**: Efeitos de áudio compactados que simulam ruído ambiente (chuva, vento, infectados distantes) e efeitos de rádio policial transmitindo desespero e relatórios perdidos.
- **RNF-03 (Controles Desktop-First)**: Latência zero entre os comandos de teclado/mouse e a movimentação no grid isométrico, com mira ágil baseada na posição do cursor na tela.
- **RNF-04 (Tamanho e Otimização)**: Uso de imagens WebP compactadas e áudios comprimidos de forma que o tamanho do bundle total fique abaixo de 8MB para garantir início rápido no navegador.

## Status
Rascunho

## Aprovação humana
Pendente
