# Regras de Negócio

## Lista de Regras de Negócio (BR)

- **[BR-001 — Morte e Respawn](file:///d:/Projetos/Unfallen/.sdd-master/requirements/business-rules/BR-001.md)**: Ao zerar a saúde, o jogador retorna ao último checkpoint válido consistente com o snapshot salvo (posição, inventário, objetivo, vida mínima restaurada, progresso), evitando soft-locks.
- **[BR-002 — Deterioração da Lanterna](file:///d:/Projetos/Unfallen/.sdd-master/requirements/business-rules/BR-002.md)**: Consumo contínuo de 0.5% por segundo enquanto ativa. Uso do item "Pilha" recarrega 50% sem ultrapassar o limite de 100%.
- **[BR-003 — Tensão e Barulho de Disparos](file:///d:/Projetos/Unfallen/.sdd-master/requirements/business-rules/BR-003.md)**: Disparos de pistola alertam infectados em um raio de até 15 metros, ativando pathfinding em direção ao tiro. Golpes corpo a corpo são furtivos.
- **[BR-004 — Trava de Progresso](file:///d:/Projetos/Unfallen/.sdd-master/requirements/business-rules/BR-004.md)**: Passagens-chave permanecem trancadas narrativamente até que o jogador leia documentos ou investigue pistas específicas do enredo.
- **[BR-005 — Sincronização de Sessão](file:///d:/Projetos/Unfallen/.sdd-master/requirements/business-rules/BR-005.md)**: Se o save remoto for mais recente que o local, ele prevalece. Se o local for mais recente, o jogador escolhe se mantém o local (atualiza nuvem), usa nuvem ou descarta local, comparando `updatedAt` e slot.
- **[BR-006 — Slots de Save](file:///d:/Projetos/Unfallen/.sdd-master/requirements/business-rules/BR-006.md)**: O MVP suporta 1 slot de save por usuário, indexado de forma a suportar expansão futura para 3 slots. Cada slot é vinculado ao UID do Firebase e ao número do slot.

## Status
Rascunho

## Aprovação humana
Pendente
