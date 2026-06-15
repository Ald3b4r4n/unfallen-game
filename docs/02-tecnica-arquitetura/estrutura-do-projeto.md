# Estrutura do Projeto — Unfallen

Este documento descreve a organização de pastas e arquivos no repositório de *Unfallen*, visando guiar desenvolvedores e manter a rastreabilidade estrutural.

## Diretórios Principais

- `/public/assets/`: Contém imagens, spritesheets isométricos WebP, efeitos de áudio compactados e elementos visuais de UI.
- `/src/app/`: App Router do Next.js contendo as páginas públicas (`/login/`), página do jogo (`/play/`), layouts e as API Routes (`/api/save/`, `/api/user/`).
- `/src/components/`: Componentes React compartilhados (ex: wrappers de Canvas e telas de login).
- `/src/game/`: Todo o código da engine Phaser 3 (configuração, scenes de menu e gameplay, lógicas de movimentação, sorting de profundidade e persistência cliente).
- `/src/lib/`: Módulos de conexão server-side (MongoDB Atlas client e inicialização do Firebase Admin SDK).
- `/tests/`: Testes automatizados Jest divididos em testes de rotas de API e testes unitários das lógicas do jogo.

Para visualizar a árvore completa de pastas e arquivos, consulte a especificação técnica de governança [project-structure.md](file:///d:/Projetos/Unfallen/.sdd-master/specs/project-structure.md).
