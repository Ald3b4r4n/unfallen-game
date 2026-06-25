# Walk Cycle Lateral Review V1

Revisao visual/documental dos dois ciclos laterais experimentais normalizados.

```text
Ainda nao existe walk cycle oficial no projeto.
Esta feature nao integra nada ao Player.
Esta feature nao substitui a Base Idle Oficial V1.
Esta feature nao altera o rig oficial.
Esta feature apenas normaliza e compara material experimental do walk_lab.
```

## Right-facing

O conjunto right-facing tem leitura de caminhada lateral melhor que as tentativas antigas de idle repetido. A passada e perceptivel, mas os frames 21-24 sao ponte de loop baseada nos frames 06-09.

A normalizacao removeu o fundo magenta opaco e padronizou canvas, baseline e centro horizontal.

## Left-facing

O conjunto left-facing possui 24 frames reais e ficou comparavel ao lado direito depois da normalizacao. A passada e perceptivel e a escala ficou mais controlada pelo baseline comum.

A normalizacao removeu o fundo magenta opaco e padronizou canvas, baseline e centro horizontal.

## Comparacao

- Ambos usam canvas `416x540`.
- Ambos usam baseline `y=520`.
- Ambos usam centro horizontal `x=208`.
- Ambos estao adequados para revisao visual humana como laboratorio experimental.
- Nenhum dos lados esta aprovado como walk cycle oficial nesta etapa.

## Pontos de atencao

- Confirmar identidade visual contra a Base Idle Oficial V1 antes de qualquer integracao.
- Validar escala aparente em Godot com camera/zoom do projeto.
- Avaliar se o right-facing deve receber novos frames reais para substituir a ponte 21-24.
- Avaliar se o ciclo lateral precisa de ajuste fino de timing antes de exportacao futura.

## Proxima etapa recomendada

Validacao humana no Godot da cena `res://scenes/test/WalkLateralNormalizedTest.tscn`, seguida de uma feature separada para decidir se os laterais entram como candidatos de integracao futura.
