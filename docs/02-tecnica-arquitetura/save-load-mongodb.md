# Persistência e Sincronização de Progresso — Unfallen

Este documento detalha o funcionamento do sistema de save/load em nuvem e a contingência local para o projeto *Unfallen*.

## Mecanismos de Salvamento

- **Salvamento Remoto (MongoDB Atlas)**: O estado completo do jogo (posição, vida, estamina, inventário e progresso do Capítulo 1: "Plantão Final") é gravado nos checkpoints em um slot indexado de forma única por `{ userId, slotId }`. O slot inicial do MVP é o Slot `1`.
- **Salvamento Local (LocalStorage)**: Usado como cache rápido e fallback imediato caso a internet do jogador falhe durante o gameplay.

## Resolução de Conflitos (Sincronização)

Ao fazer login, o jogo verifica os carimbos de data/hora (`updatedAt`) do save remoto e local:
- Se a nuvem for mais recente, o progresso local é atualizado pela nuvem de forma silenciosa.
- Se o local for mais recente, um modal interativo é exibido solicitando que o jogador escolha entre sobrescrever a nuvem com o progresso local, aceitar o save da nuvem descartando o progresso local, ou desconectar para jogar de forma offline.

Para ver o esquema JSON completo do save game, consulte a especificação [mongodb-save-system.md](file:///d:/Projetos/Unfallen/.sdd-master/specs/mongodb-save-system.md).
