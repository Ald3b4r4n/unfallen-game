<!--
SYNC IMPACT REPORT:
- Version change: [CONSTITUTION_VERSION] -> 1.0.0
- List of modified principles:
  - [PRINCIPLE_1_NAME] -> I. Spec First, Implementação Depois
  - [PRINCIPLE_2_NAME] -> II. Gate Humano Obrigatório
  - [PRINCIPLE_3_NAME] -> III. Character First
  - [PRINCIPLE_4_NAME] -> IV. Pixel Art HD Consistente
  - [PRINCIPLE_5_NAME] -> V. Identidade do Jogo e Direção de Arte
- Added sections:
  - Escopo Inicial Obrigatório
  - Engine e Tecnologia
- Removed sections:
  - None
- Templates requiring updates:
  - ✅ updated: .specify/templates/plan-template.md
  - ✅ updated: .specify/templates/spec-template.md (No changes needed, verified aligned)
  - ✅ updated: .specify/templates/tasks-template.md (No changes needed, verified aligned)
- Follow-up TODOs:
  - None
-->

# Unfallen Constitution

## Core Principles

### I. Spec First, Implementação Depois
Nenhuma funcionalidade, sistema, cena, arte definitiva, mecânica ou estrutura técnica deve ser implementada sem antes existir especificação aprovada. Todo trabalho deve seguir o fluxo:
1. Definir objetivo.
2. Criar especificação.
3. Levantar dúvidas.
4. Planejar tecnicamente.
5. Quebrar em tarefas.
6. Validar com gate humano.
7. Somente então implementar.

É proibido sair implementando apenas com base em ideia solta, conversa informal ou suposição do agente.

### II. Gate Humano Obrigatório
O projeto Unfallen exige aprovação humana explícita antes de qualquer ação destrutiva, estrutural ou irreversível.
Exigem aprovação humana:
- Criar ou modificar arquitetura principal.
- Alterar organização de pastas.
- Criar sistemas de gameplay.
- Modificar cenas principais.
- Substituir assets.
- Remover arquivos.
- Fazer commits.
- Fazer push.
- Instalar plugins/addons.
- Alterar configurações globais do Godot.
- Mudar resolução-base, câmera, escala ou padrão visual.
- Trocar engine, linguagem ou abordagem técnica.

O agente deve sempre parar antes da implementação e solicitar aprovação clara quando uma tarefa atingir esse limite.

### III. Character First
O desenvolvimento deve começar pelo personagem principal antes de cenários, sistemas avançados, inimigos ou narrativa extensa.
Prioridade inicial obrigatória:
1. Ficha visual do protagonista (Antônio Rafael: 35 anos, Policial Militar de Goiás, cansado, visual humano, tático e realista em Pixel Art HD. Características: Barba feita, cabelo curto escuro estilo militar, óculos de grau, pele morena clara, físico atlético, mochila tática, colete policial).
2. Sprite base.
3. Proporção final.
4. Direções isométricas.
5. Animações básicas.
6. Teste em cena isolada.
7. Controle de movimentação.
8. Só depois avançar para mundo, combate, inventário e inimigos.

Enquanto o personagem Antônio Rafael não estiver validado visualmente e funcionalmente, o projeto não deve expandir para sistemas complexos.

### IV. Pixel Art HD Consistente
Todo asset visual deve respeitar a estética Pixel Art HD isométrica.
Diretrizes obrigatórias:
- Visual em pixel art, não pintura digital genérica.
- Alta definição percebida, mas com leitura clara em baixa escala.
- Câmera isométrica ou pseudo-isométrica coerente.
- Proporção preferencial do personagem: 128x128.
- 64x64 permitido apenas para protótipo ou testes.
- Sem mistura visual inconsistente entre assets.
- Sem sprites borrados, esticados ou com anti-aliasing inadequado.
- Escala de importação no Godot deve preservar nitidez.
- Texturas devem usar filtro desativado quando necessário para manter pixel art.

A arte deve parecer parte de um mesmo jogo, não uma coleção de imagens desconexas.

### V. Identidade do Jogo e Direção de Arte
Unfallen é um jogo de ação, aventura e sobrevivência isométrica em Pixel Art HD, desenvolvido em Godot 4.
O jogo acompanha Antônio Rafael em um cenário de colapso causado por uma infestação zumbi. O foco narrativo do projeto não é gore, brutalidade gratuita ou choque visual, mas sobrevivência, perda, investigação, deslocamento, tensão e persistência.
A identidade central do jogo deve preservar:
- Protagonista humano, cansado, preparado e vulnerável.
- Atmosfera de sobrevivência brasileira.
- Narrativa emocional sobre busca, resistência e responsabilidade.
- Jogabilidade clara, responsiva e progressiva.
- Produção organizada por especificações antes de implementação.

O design não deve transformar Antônio Rafael em personagem caricato, excessivamente musculoso ou visualmente genérico.

## Escopo Inicial Obrigatório
O primeiro escopo do Unfallen deve ser uma cena isolada de personagem, sem mundo aberto e sem sistemas complexos.

### Fase 1 — Personagem
Entregáveis mínimos:
- Sprite idle.
- Sprite andando.
- Sprite correndo, se aprovado.
- Direções isométricas principais.
- Cena de teste no Godot.
- Controle básico.
- Colisão simples.
- Câmera acompanhando o personagem.
- Importação correta de pixel art.
- Documentação dos assets.

### Fase 2 — Protótipo de Movimento
Entregáveis mínimos:
- Movimento isométrico com WASD e/ou setas.
- Normalização de movimento diagonal.
- Animação por direção.
- Teste de colisão.
- Cena neutra de debug.
- HUD mínimo opcional.

### Fase 3 — Sistemas Básicos
Somente após aprovação das fases anteriores:
- Inventário simples.
- Coleta.
- Interação.
- Checkpoint.
- Cena narrativa inicial.
- Primeiro inimigo simples.
- Combate básico, se aprovado.

## Engine e Tecnologia
### Engine Oficial
Godot 4.x Standard é a versão oficial do projeto, salvo decisão humana posterior.

### Linguagem
GDScript é a linguagem padrão. C# só pode ser usado com aprovação explícita e justificativa técnica.

### Organização Técnica Esperada
O projeto deve favorecer:
- Cenas pequenas e reutilizáveis.
- Scripts coesos e baixo acoplamento.
- Nomes claros.
- Separação entre player, câmera, mundo, UI, dados e sistemas.
- Evitar mega-scripts e lógica espalhada em nós sem documentação.

### Estrutura de Pastas Recomendada
```txt
res://
  assets/
    characters/
      antonio_rafael/
    environments/
    ui/
    audio/
    effects/
  scenes/
    player/
    test/
    world/
    ui/
  scripts/
    player/
    systems/
    ui/
    debug/
  resources/
    data/
    configs/
  docs/
    art/
    technical/
    gameplay/
```

## Governance
1. **Supremacia da Constituição**: Esta constituição estabelece os limites técnicos e criativos absolutos do projeto Unfallen. Qualquer alteração ou nova funcionalidade deve obrigatoriamente alinhar-se com os princípios descritos.
2. **Processo de Emenda**: Modificações nestes princípios exigem consentimento explícito de Antônio Rafael. A versão do documento deve ser atualizada de acordo com versionamento semântico (SemVer):
   - **MAJOR**: Alteração ou remoção incompatível de princípios core ou governança.
   - **MINOR**: Adição ou expansão de seções/princípios sem invalidação dos anteriores.
   - **PATCH**: Correções ortográficas, esclarecimentos ou refinamentos de redação que não alteram a intenção do texto.
3. **Data e Registro de Alterações**: Toda atualização deve ter a versão alterada, a data atualizada (`Last Amended`), e um relatório de impacto (Sync Impact Report) mantido no topo do arquivo como comentário HTML.
4. **Documento de Orientação**: Para orientações de tempo de execução, utilize as diretrizes do Spec Kit e os planos de implementação gerados.

**Version**: 1.0.0 | **Ratified**: 2026-06-17 | **Last Amended**: 2026-06-17
