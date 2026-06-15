# Definition of Done (DoD)

Este documento define as regras e critérios públicos de qualidade que orientam a entrega de qualquer código e funcionalidade para o jogo **Unfallen**.

## Critérios de Qualidade de Código e Testes
- **TDD (Test-Driven Development)**: Os testes unitários e de integração devem ser criados e rodar em estado de falha antes de qualquer código funcional ser escrito.
- **Jest**: Lógicas isoladas (ex: conversões isométricas, serialização, inventário limitado, regras de respawn) devem rodar 100% sob Jest.
- **Supertest**: Rotas de API devem ser testadas em Jest + Supertest.
- **Playtest e Playwright**: Verificações visuais e interações com o canvas do Phaser devem seguir roteiros de playtest manual ou automação via Playwright.

## Segurança e Governança
- **Resolução de UID**: O `userId` de save deve ser extraído apenas server-side a partir do token decodificado do Firebase Admin.
- **Segredos**: Zero credenciais no git.

## Restrições de Dev Cheats
- O console e painel de cheats (`DevCheatScene`) **não** podem ser importados/inicializados no ambiente de produção.
- Controle rigoroso através da flag de compilação `NEXT_PUBLIC_ENABLE_DEV_CHEATS=false` e verificação da variável de build `process.env.NODE_ENV === 'production'`.
- Garantir a exclusão completa das rotas e atalhos na build final.
