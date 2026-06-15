# Plano de Tarefas Técnico — Unfallen

Este documento lista todas as tarefas técnicas estruturadas para o desenvolvimento do MVP de *Unfallen*.

---

## Índice de Blocos de Tarefa

### [BLOCO 01 — Fundação do Projeto](file:///d:/Projetos/Unfallen/.sdd-master/tasks/block-01-foundation.md)
- **TASK-01-01**: Inicializar estrutura Next.js com TypeScript
- **TASK-01-02**: Configurar Jest e Supertest para Testes de Integração
- **TASK-01-03**: Configurar .env.example e Regras .gitignore

### [BLOCO 02 — Autenticação Firebase](file:///d:/Projetos/Unfallen/.sdd-master/tasks/block-02-firebase-auth.md)
- **TASK-02-01**: Configurar Cliente Firebase SDK
- **TASK-02-02**: Configurar Firebase Admin SDK server-side
- **TASK-02-03**: Criar Rota de API /api/user/me e Middleware de Validação

### [BLOCO 03 — MongoDB e Save System](file:///d:/Projetos/Unfallen/.sdd-master/tasks/block-03-mongodb-save-system.md)
- **TASK-03-01**: Configurar Conexão pooling MongoDB Atlas
- **TASK-03-02**: Configurar Coleção saves e Índice Composto Único
- **TASK-03-03**: Criar Endpoints de Persistência /api/save/load e /api/save/write
- **TASK-03-04**: Implementar Algoritmo de Resolução de Conflitos (BR-005)

### [BLOCO 04 — Phaser Runtime](file:///d:/Projetos/Unfallen/.sdd-master/tasks/block-04-phaser-runtime.md)
- **TASK-04-01**: Wrapper de Inicialização do Phaser no Next.js
- **TASK-04-02**: Criar Estrutura de Cenas (Scenes) do Phaser

### [BLOCO 05 — Sistema Isométrico](file:///d:/Projetos/Unfallen/.sdd-master/tasks/block-05-isometric-system.md)
- **TASK-05-01**: Biblioteca Matemática de Conversão Isométrica
- **TASK-05-02**: Implementar Depth Sorting Dinâmico por Eixo Y

### [BLOCO 06 — Gameplay MVP](file:///d:/Projetos/Unfallen/.sdd-master/tasks/block-06-gameplay-mvp.md)
- **TASK-06-01**: Implementar Player e Movimentação com Teclado
- **TASK-06-02**: Sistema de Inventário Simples com Capacidade Limitada
- **TASK-06-03**: Implementar Lanterna, Estamina e Combate Básico

### [BLOCO 07 — Fase "Plantão Final"](file:///d:/Projetos/Unfallen/.sdd-master/tasks/block-07-plantao-final.md)
- **TASK-07-01**: Mapa Isométrico e Checkpoints (Bases e Viaturas)
- **TASK-07-02**: Investigação Narrativa e Morte/Respawn (BR-001)

### [BLOCO 08 — Assets e Áudio](file:///d:/Projetos/Unfallen/.sdd-master/tasks/block-08-assets-audio.md)
- **TASK-08-01**: Configuração do Pipeline de Otimização e Rastreabilidade

### [BLOCO 09 — Cheats/Debug](file:///d:/Projetos/Unfallen/.sdd-master/tasks/block-09-cheats-debug.md)
- **TASK-09-01**: Painel Dev-Only e Segurança de Produção

### [BLOCO 10 — Testes, QA e Playtest](file:///d:/Projetos/Unfallen/.sdd-master/tasks/block-10-tests-qa-playtest.md)
- **TASK-10-01**: Consolidação da Suíte de Testes Automatizados Jest

### [BLOCO 11 — Build e Deploy](file:///d:/Projetos/Unfallen/.sdd-master/tasks/block-11-build-deploy.md)
- **TASK-11-01**: Build de Otimização e Deploy Vercel
