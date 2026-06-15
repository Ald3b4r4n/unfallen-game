# Estratégia de Testes (TDD) — Unfallen

Este documento descreve a metodologia de testes automatizados e manuais que governam o ciclo de desenvolvimento de *Unfallen*.

## Filosofia de Testes

Como o projeto segue estritamente a metodologia **TDD (Test-Driven Development)**, nenhum código de funcionalidade ou endpoint de API deve ser implementado antes da criação de seus testes de falha correspondentes.

## Foco de Testes Automatizados (Jest)

- **Testes de API**: Validam os retornos esperados, cabeçalhos de autenticação Firebase ID Token e rejeições de parâmetros inválidos nos endpoints Next.js.
- **Testes de Lógica de Negócio**: Validam as regras de morte e checkpoint (respawn com snapshot), deterioração da lanterna, estamina e resolução de conflitos de save local/nuvem.
- **Mocks**: Chamadas à API do Firebase Admin SDK e conexões MongoDB Atlas são isoladas e mockadas para garantir testes rápidos.

Para ver os casos de teste específicos e asserções projetadas, consulte a especificação [testing-strategy.md](file:///d:/Projetos/Unfallen/.sdd-master/specs/testing-strategy.md).
