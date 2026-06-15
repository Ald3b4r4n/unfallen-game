# Gameplay Loop

## Contexto
- Tipo de jogo: Isométrico 2.5D (pixel art moderno)
- Engine: Phaser 3
- Target: Web Browser (Desktop-first)

## O Gameplay Loop Principal
O ciclo básico de interação do jogador em *Unfallen* consiste em:

```
[Explorar Cenário Isométrico] 
       │
       ▼
[Investigar Pistas e Bilhetes] 
       │
       ▼
[Coletar Suprimentos (Munição/Pilhas/Cura)]
       │
       ▼
[Evitar/Combater Infectados (Furtividade/Tiro)]
       │
       ▼
[Resolver Obstáculos/Geradores e Checkpoints]
       │
       ▼
[Salvar na Nuvem e Avançar História]
```

## Eixos do Loop no MVP (Capítulo "Plantão Final")
1. **Exploração Tática**: Investigar delegacias, viaturas e casas brasileiras abandonadas, lidando com sorting dinâmico de profundidade.
2. **Coleta de Sobrevivência**: Coletar munição e pilhas (para manter a lanterna ativa e ver no escuro) e gerenciar slots de inventário (1 slot no MVP).
3. **Combate Tenso**: Confrontar infectados gastando munição (barulho atrai mais inimigos) ou usar esquivas consumindo estamina.
4. **Resolução de Bloqueios**: Encontrar chaves ou reestabelecer energia para progredir até a casa de Antônio Rafael.
5. **História e Sincronização**: Ler diários e interagir com rádios para descobrir a evacuação em direção à Escola Municipal, sincronizando nos totens de checkpoint via Firebase/MongoDB.
