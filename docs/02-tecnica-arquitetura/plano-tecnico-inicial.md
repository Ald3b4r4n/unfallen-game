# Plano Técnico Inicial — Unfallen

Este documento detalha o plano técnico de implementação para o MVP da fase "Plantão Final" do jogo **Unfallen**. O desenvolvimento é estruturado sob a metodologia TDD (Test-Driven Development), em que testes automatizados precedem o código funcional.

## Status
Aprovado / Executando

## Metodologia de Desenvolvimento
1. **TDD-First**: Para cada funcionalidade lógica (APIs, persistência, regras de negócio, lógica de sistema isométrico), os testes unitários ou de integração correspondentes devem ser criados e validados em estado de falha (*Red*). A implementação deve então buscar satisfazer os testes (*Green*), seguida por refatoração (*Refactor*).
2. **Governança Estrita**: Nenhuma credencial real, chaves privadas ou segredos devem ser persistidos no repositório Git. Variáveis de ambiente reais serão configuradas apenas na infraestrutura do servidor (Vercel) e injetadas server-side no ambiente local por meio do `.env.example` preenchido pelo usuário de forma privada.
3. **Limitação do Escopo**: O MVP é restrito ao capítulo "Plantão Final". Nenhuma mecânica de capítulos futuros ou suporte complexo nativo a mobile/touch e controles gamepad deve ser implementada no MVP.

---

## Blocos de Desenvolvimento

### BLOCO 01 — Fundação do Projeto
Estruturação do ambiente básico do projeto Next.js com suporte a TypeScript e infraestrutura de testes local.
- **TASK-01-01: Inicializar estrutura Next.js com TypeScript**
  Scaffolding inicial utilizando App Router.
- **TASK-01-02: Configurar Jest e Supertest para Testes de Integração**
  Estruturação dos ambientes de teste local e mocks globais de infraestrutura.
- **TASK-01-03: Configurar .env.example e Regras .gitignore**
  Definição de variáveis de ambiente modelo e isolamento rígido de arquivos confidenciais.

### BLOCO 02 — Autenticação Firebase
Implementação de mecanismos seguros para autenticação de usuários baseados no ecossistema Firebase.
- **TASK-02-01: Configurar Cliente Firebase SDK**
  Integração no front-end para captação e envio de credenciais de login.
- **TASK-02-02: Configurar Firebase Admin SDK server-side**
  Biblioteca no servidor Next.js para descriptografar e validar de forma confiável os JWT ID Tokens enviados pelo cliente.
- **TASK-02-03: Criar Rota de API /api/user/me e Middleware de Validação**
  Rota que assegura que requisições válidas exponham os dados de perfil do usuário.

### BLOCO 03 — MongoDB e Save System
Configuração do banco de dados remoto MongoDB Atlas e gerenciamento persistente de slots de save do jogador de forma blindada contra fraudes de cliente.
- **TASK-03-01: Configurar Conexão pooling MongoDB Atlas**
  Estabelecer conexões resilientes e otimizadas para o ambiente serverless.
- **TASK-03-02: Configurar Coleção saves e Índice Composto Único**
  Garantir a integridade lógica por meio de um índice composto único `{ uid: 1, slotId: 1 }`.
- **TASK-03-03: Criar Endpoints de Persistência /api/save/load e /api/save/write**
  Rotas server-side protegidas que validam o token e realizam operações CRUD correspondentes aos slots do usuário sem aceitar `userId` de forma aberta do cliente.
- **TASK-03-04: Implementar Algoritmo de Resolução de Conflitos (BR-005)**
  Regras do `SaveManager` para resolução automatizada ou manual (via modal) em caso de dessincronização local/nuvem.

### BLOCO 04 — Phaser Runtime
Hospedagem e integração da engine de jogo Phaser 3 com o ciclo de vida do Next.js.
- **TASK-04-01: Wrapper de Inicialização do Phaser no Next.js**
  Componente React que gerencia a montagem, desmontagem e limpeza de memória do canvas do jogo.
- **TASK-04-02: Criar Estrutura de Cenas (Scenes) do Phaser**
  Navegação e fluxo de transição entre as 8 cenas planejadas (`Boot`, `Preload`, `Menu`, `Game`, `UI`, `Pause`, `SaveLoad` e `DevCheat`).

### BLOCO 05 — Sistema Isométrico
Mecânica geométrica para representação espacial e física de colisões em 2.5D.
- **TASK-05-01: Biblioteca Matemática de Conversão Isométrica**
  Fórmulas de conversão bidimensional lógico $x, y$ para espaço cartesiano projetado em $2:1$.
- **TASK-05-02: Implementar Depth Sorting Dinâmico por Eixo Y**
  Atualização a cada frame para que sprites dinâmicos desenhem na profundidade visual adequada de acordo com seus pés geográficos.

### BLOCO 06 — Gameplay MVP
Lógicas fundamentais de jogabilidade envolvendo o player, controle de recursos e ameaças primárias.
- **TASK-06-01: Implementar Player e Movimentação com Teclado**
  Movimentação isométrica responsiva usando teclas WASD ou direcionais.
- **TASK-06-02: Sistema de Inventário e Coleta (E)**
  Espaço para 12 itens e interação de proximidade pressionando a tecla `E`.
- **TASK-06-03: Implementar Lanterna, Estamina e Combate Básico**
  Mecânicas de depleção de bateria, gasto de estamina para esquivas, e combates furtivo (corpo a corpo) ou de longo alcance (gasto de munição de pistola).

### BLOCO 07 — Fase "Plantão Final"
Configuração espacial e comportamental do primeiro capítulo de sobrevivência.
- **TASK-07-01: Mapa Isométrico e Checkpoints (Bases e Viaturas)**
  Fronteiras físicas de colisão (delegacia de polícia, ruas adjacentes, mercado, bairro residencial e a casa de Rafael) com totens para save.
- **TASK-07-02: Investigação Narrativa e Morte/Respawn (BR-001)**
  Leitura de pistas (o desaparecimento da filha Luísa) e retorno consistente para o último checkpoint válido em caso de derrota.

### BLOCO 08 — Assets e Áudio
Gestão e otimização dos recursos artísticos integrados no jogo.
- **TASK-08-01: Configuração do Pipeline de Otimização e Rastreabilidade**
  Compressão sistemática em WebP, lazy loading de músicas de fundo e conformidade legal de uso e autoria descrita no log de pipeline.

### BLOCO 09 — Cheats/Debug
Ferramentas auxiliares para testes internos de jogabilidade.
- **TASK-09-01: Painel Dev-Only e Segurança de Produção**
  Console de atalhos contendo comandos de imortalidade, teletransporte e spawn de itens. Restrito e inativo em builds de produção (`NODE_ENV === 'production'`).

### BLOCO 10 — Testes, QA e Playtest
Garantia de qualidade contínua para a entrega do MVP.
- **TASK-10-01: Consolidação da Suíte de Testes Automatizados Jest**
  Verificação final e cobertura de testes lógicos unificados.

### BLOCO 11 — Build e Deploy
Lançamento final para ambiente de staging ou produção na Vercel.
- **TASK-11-01: Build de Otimização e Deploy Vercel**
  Pipeline de empacotamento, validação de segurança contra secrets expostos e lançamento na Vercel.

---

## Aprovação humana
Pendente
