# Unfallen

**Unfallen** é um projeto de jogo em desenvolvimento no **Godot 4**, com direção visual em **Pixel Art HD isométrica**.

O foco atual do repositório é o pipeline character-first do **SGT Antônio Rafael**: base visual, sprites idle, rig técnico, separação de partes, refinamento, validação visual e testes de articulação em laboratório.

Este README descreve o estado real do projeto antes de qualquer release pública final. Ele não apresenta o jogo como completo, não promete gameplay completo e não trata o rig técnico como substituto do Player runtime.

## Sobre o projeto

Unfallen é um jogo isométrico em desenvolvimento, com temática de sobrevivência em um cenário de colapso zumbi. O protagonista atual é o **SGT Antônio Rafael**, trabalhado primeiro para consolidar proporção, identidade visual, rig técnico e base de animação antes da expansão para sistemas de gameplay.

O projeto ainda está em fase de construção. Ideias de mundo, combate, exploração e narrativa existem como direção de jogo, mas não devem ser interpretadas como sistemas completos já implementados.

## Visão do jogo

A visão futura de Unfallen combina exploração, sobrevivência, narrativa, combate, investigação, progressão e deslocamento por um ambiente hostil.

Esses elementos descrevem a direção pretendida para o jogo. O estado atual do repositório ainda está concentrado em personagem, rig técnico, validação visual e preparação para animações aprovadas.

## Status atual

Estado real registrado para esta fase:

- O projeto está em desenvolvimento.
- A engine oficial é **Godot 4**.
- A direção visual é **Pixel Art HD isométrica**.
- O personagem principal em foco é o **SGT Antônio Rafael**.
- O foco atual é o pipeline character-first, com rig técnico e validação de articulação.
- A **Base Idle Oficial V1** foi aprovada.
- O personagem principal foi validado visualmente para esta etapa.
- O rig técnico foi criado.
- As partes do rig foram separadas.
- As partes críticas do rig foram refinadas.
- A validação visual no Godot foi aprovada parcialmente.
- O teste técnico de articulação foi aprovado parcialmente.
- O walk cycle final ainda não foi criado nem aprovado.
- Nenhuma animação oficial final foi aprovada.
- O gameplay completo ainda não foi implementado.
- O rig técnico não substitui o Player runtime.
- Ainda não há release pública final.

## Stack técnica

- **Engine**: Godot 4.
- **Linguagem**: GDScript quando aplicável ao runtime.
- **Arte**: Pixel Art HD isométrica.
- **Processo**: Spec Kit/SDD, com especificação, plano, tarefas, implementação controlada e gate humano.
- **Organização**: assets, cenas e documentação estruturados no padrão de projeto Godot.

## Pipeline do personagem

O pipeline atual do SGT Antônio Rafael segue uma abordagem character-first:

1. **Base Idle Oficial V1**: base visual aprovada para orientar proporção, identidade e leitura do personagem.
2. **Rig Parts Separation V1**: separação das partes do personagem para trabalho técnico de rig.
3. **Rig Assembly V1**: montagem inicial do rig técnico.
4. **Rig Refinement V1**: refinamento de partes críticas do rig.
5. **Rig Articulation Test V1**: teste técnico de articulação, aprovado parcialmente.

Antes de um walk cycle final, ainda é necessário validar melhor pivôs, articulações, leitura dos sprites finais e integração correta das animações aprovadas ao Player runtime.

## Marcos validados

Marcos funcionais e documentais relevantes nesta fase:

- **Rig Assembly V1**: montagem técnica inicial do rig.
- **Rig Refinement V1**: refinamento de partes críticas.
- **Validação Visual Godot**: validação visual parcial dentro do Godot.
- **Rig Articulation Test V1**: teste técnico de articulação aprovado parcialmente.

Esses marcos apoiam o pipeline de personagem, mas não equivalem a animação oficial final, release pública final ou gameplay completo.

## Estrutura do projeto

Estrutura confirmada e relevante para este README:

```txt
res://scenes/player/
res://scenes/rig/
res://assets/characters/antonio_rafael/
res://docs/
res://specs/
```

## Como abrir no Godot

1. Instale o **Godot 4**.
2. Abra o Godot e importe a pasta raiz do projeto Unfallen.
3. Selecione o arquivo `project.godot`.
4. Abra a cena de validação atual quando precisar revisar o laboratório técnico.

## Cena atual de validação

A cena técnica atual de validação é:

```txt
res://scenes/rig/AntonioRafaelRigLab.tscn
```

Ela funciona como laboratório técnico para rig, articulação e validação visual. Essa cena não substitui o Player runtime oficial.

O Player runtime oficial separado é:

```txt
res://scenes/player/Player.tscn
```

O rig técnico é uma ferramenta de produção e teste. Alterações no rig, no Player ou na relação entre os dois devem acontecer apenas em features específicas, com escopo aprovado.

## Regras de desenvolvimento

- Seguir o fluxo **Spec Kit/SDD** antes de implementar features.
- Manter especificação, plano, tarefas, implementação controlada e gate humano.
- Não fazer push automático sem aprovação humana.
- Não versionar segredos.
- Não versionar arquivos `.env`.
- Não alterar Player, rig, cenas principais ou assets fora de escopo aprovado.
- Não incluir assets pagos ou de terceiros sem licença/autorização documentada.
- Não declarar sistemas, animações ou builds como finais sem validação específica.

## Roadmap

Roadmap curto, tratado como direção futura e não como estado atual implementado:

1. Validar rig técnico.
2. Refinar pivôs e articulação.
3. Criar walk cycle técnico controlado.
4. Validar sprites finais.
5. Integrar animações aprovadas ao Player.
6. Iniciar gameplay mínimo.
7. Expandir sistemas de sobrevivência e narrativa.

## Assets e licenciamento

Assets do projeto devem ter origem documentada e rastreabilidade. Assets pagos ou de terceiros não devem ser versionados sem autorização ou licença registrada.

Assets gerados, refinados ou derivados durante o desenvolvimento também devem manter histórico suficiente para revisão futura. O licenciamento final do repositório depende de um arquivo de licença específico; se ele não existir, não assumir licença aberta nem liberdade de uso para assets sem confirmação.

## Status do repositório

Este repositório está em desenvolvimento e ainda não possui release pública final. O README foi criado para apresentar corretamente o Unfallen e evitar confusão com qualquer repositório ou README antigo.

Pushes futuros devem acontecer somente após revisão humana. Até que novas features sejam aprovadas, este README deve ser lido como apresentação honesta do estado atual: character-first pipeline, Godot 4, Pixel Art HD isométrica, rig técnico em validação parcial e gameplay completo ainda não implementado.
