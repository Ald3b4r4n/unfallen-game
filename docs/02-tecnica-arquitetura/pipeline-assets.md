# Pipeline de Assets e Otimização — Unfallen

Este documento descreve as diretrizes de otimização, carregamento de recursos em tempo de execução e a política de licenciamento para o projeto *Unfallen*.

## Otimizações de Carregamento

- **WebP e Áudio Comprimido**: Todos os arquivos de arte pixel art são salvos e compactados no formato WebP, reduzindo drasticamente o consumo de banda. Efeitos sonoros e trilhas são compactados nos formatos OGG/MP3 de baixa fidelidade.
- **Carregamento Progressivo (Lazy Loading)**: O boot carrega apenas o menu e recursos da primeira cena. Cenas e assets subsequentes são carregados em segundo plano sob demanda no Phaser 3.

## Política Legal e Direitos Autorais

- Todo asset incluído no jogo deve constar em um registro de inventário de assets.
- Assets de terceiros pagos exigem licença ativa devidamente comprovada.
- É terminantemente proibida a extração (ripagem) ou recriação por cópia de assets de terceiros sem licença comercial.
- Imagens por Inteligência Artificial só podem ser usadas caso partam de prompts textuais e conceitos originais descritos para *Unfallen*.

Para consultar o fluxo de cenas detalhado e ciclo de carregamento no Phaser, veja [asset-pipeline.md](file:///d:/Projetos/Unfallen/.sdd-master/specs/asset-pipeline.md).
