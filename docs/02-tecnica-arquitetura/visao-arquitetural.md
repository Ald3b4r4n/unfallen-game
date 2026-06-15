# Visão Arquitetural — Unfallen

Este documento apresenta a arquitetura geral do projeto **Unfallen**, descrevendo as fronteiras de responsabilidades entre cliente e servidor, controle de dados e as tecnologias adotadas.

## Resumo Arquitetural

*Unfallen* é construído como uma aplicação web moderna que combina o poder de desenvolvimento e APIs do **Next.js** com as capacidades de renderização e física de jogos 2D do **Phaser.js**.

- **Hospedagem & Infraestrutura**: **Vercel** gerencia a distribuição estática (HTML/CSS/JS do cliente) via CDN e expõe as rotas do servidor em APIs Serverless.
- **Frontend / Interface**: **Next.js (React)** desenha telas auxiliares, menção a créditos, opções de volume e o formulário de login integrado ao **Firebase Authentication**.
- **Gameplay / Engine**: O Canvas do **Phaser 3** roda acoplado a um wrapper React, lidando de forma otimizada com o loop de jogo, detecção física isométrica e renderização.
- **Persistência**: O progresso é registrado em cache local (**LocalStorage**) e enviado para a nuvem em um cluster **MongoDB Atlas** de forma assíncrona.

## Segurança e Sincronização

A integridade do progresso baseia-se na verificação server-side:
1. O cliente obtém um **Firebase ID Token** assinado após a autenticação.
2. Toda chamada de API envia esse token no header `Authorization`.
3. O servidor Next.js valida o token usando o **Firebase Admin SDK** e resolve o UID legítimo do usuário no banco MongoDB, inviabilizando falsificações de progresso por alteração de IDs no client.

Para detalhes internos detalhados, consulte a especificação [architecture-overview.md](file:///d:/Projetos/Unfallen/.sdd-master/specs/architecture-overview.md).
