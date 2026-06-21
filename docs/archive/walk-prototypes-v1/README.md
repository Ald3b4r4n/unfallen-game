# Walk Prototypes V1 Archive

Este diretorio preserva prototipos historicos e previews relacionados a tentativas anteriores de walk cycle do SGT Antonio Rafael.

## Status

Os arquivos aqui arquivados sao apenas material historico de auditoria. Eles nao sao:

- walk cycle aprovado;
- animacao oficial;
- assets finais;
- sprites aprovados;
- conteudo de gameplay;
- parte do Player runtime.

## Relacao com o pipeline

O arquivamento existe para manter rastreabilidade das tentativas antigas sem misturar prototipos rejeitados com assets oficiais do projeto. Esses arquivos nao substituem a Base Idle Oficial V1 e nao devem ser usados como referencia final sem nova aprovacao humana.

## Estrutura

- `files/`: contem os PNGs historicos preservando a arvore relativa original.
- `manifest.md`: lista cada item arquivado com origem, destino, grupo, status e decisao humana.

## Regras

- Nao integrar estes arquivos ao `Player.tscn`.
- Nao usar estes arquivos como walk cycle oficial.
- Nao tratar estes arquivos como animacao final.
- Nao mover estes arquivos para `res://assets` sem nova feature e gate humano.
- Nao versionar `.import` ou `.uid` relacionados em massa.
