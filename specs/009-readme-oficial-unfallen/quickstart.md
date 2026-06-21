# Quickstart: Validacao planejada do README oficial do Unfallen

Este guia descreve como validar a implementacao futura da feature. Nesta etapa de planejamento, nao criar `README.md` ainda e nao alterar codigo, cenas, sprites, Player, scripts ou assets.

## Pre-condicoes

- Branch atual: `009-readme-oficial-unfallen`.
- Spec existe em `res://specs/009-readme-oficial-unfallen/spec.md`.
- Plano existe em `res://specs/009-readme-oficial-unfallen/plan.md`.
- O repositorio esta em desenvolvimento no contexto Godot 4.
- A cena de laboratorio atual e `res://scenes/rig/AntonioRafaelRigLab.tscn`.
- O Player runtime oficial separado e `res://scenes/player/Player.tscn`.

## Validacao de Escopo Antes da Implementacao

1. Confirmar que a tarefa futura e documental.
2. Confirmar que `README.md` e o unico arquivo raiz planejado.
3. Confirmar que `docs/project/README-notes.md` so sera criado se for necessario registrar auditoria auxiliar.
4. Confirmar que nenhum arquivo em `assets/`, `scenes/`, `scripts/` ou sprites idle sera alterado.
5. Confirmar que nao havera commit nem push sem nova ordem humana.

## Validacao do README Futuro

1. Abrir `README.md` na raiz do repositorio.
2. Confirmar que o titulo principal e `Unfallen`.
3. Confirmar que o README esta em portugues do Brasil.
4. Confirmar que a descricao inicial identifica o projeto em ate 30 segundos.
5. Confirmar que o README apresenta Unfallen como jogo em desenvolvimento, nao jogo completo.
6. Confirmar que Godot 4 e Pixel Art HD isometrica aparecem.
7. Confirmar que SGT Antonio Rafael aparece como personagem principal/foco atual.
8. Confirmar que o README separa estado atual de visao futura.

## Validacao do Status Real

Confirmar que o README registra:

- Base Idle Oficial V1 aprovada.
- Personagem principal criado/validado visualmente.
- Rig tecnico criado.
- Partes do rig separadas.
- Partes criticas refinadas.
- Validacao visual no Godot aprovada parcialmente.
- Teste tecnico de articulacao aprovado parcialmente.
- Walk cycle final ainda nao criado/aprovado.
- Nenhuma animacao oficial final aprovada.
- Gameplay completo ainda nao implementado.
- Rig tecnico nao substitui o Player runtime.
- Sem release publica final confirmada.

## Validacao de Cenas Citadas

1. Confirmar que `res://scenes/rig/AntonioRafaelRigLab.tscn` aparece como laboratorio tecnico atual.
2. Confirmar que `res://scenes/player/Player.tscn` aparece como Player runtime oficial separado.
3. Confirmar que o README diz que o laboratorio de rig nao substitui o Player.
4. Confirmar que o README diz que Player nao deve ser alterado fora de feature especifica.

## Validacao de Conteudo Proibido

Procurar e reprovar o README se ele afirmar ou sugerir:

- jogo completo;
- gameplay completo;
- build publica final;
- release estavel;
- walk cycle final aprovado;
- combate funcional;
- inventario funcional;
- mundo aberto implementado;
- rig como Player oficial;
- exportacao final de frames de gameplay;
- assets livres sem confirmacao;
- licenca aberta sem arquivo de licenca confirmado.

## Validacao de Governanca

Confirmar que o README menciona:

- fluxo Spec Kit/SDD;
- especificacao, plano, tarefas, implementacao controlada e gate humano;
- sem push automatico sem aprovacao;
- sem segredos versionados;
- sem `.env`;
- sem assets pagos/terceiros sem licenca;
- sem alteracao de Player/rig fora do escopo aprovado.

## Validacao de Arquivos

Depois da implementacao futura:

1. Rodar `git status --short`.
2. Confirmar que nao houve alteracao em:
   - `res://scenes/player/Player.tscn`;
   - `res://scenes/rig/AntonioRafaelRigLab.tscn`;
   - `res://scripts/player/`;
   - `res://scripts/rig/`;
   - `res://assets/`;
   - `res://assets/characters/antonio_rafael/sprites/idle/`;
   - `res://assets/characters/antonio_rafael/rig/`.
3. Confirmar que o trabalho se limita a arquivos documentais permitidos.
4. Confirmar que nao houve commit.
5. Confirmar que nao houve push.

## Gate Humano

Ao final da implementacao futura, apresentar:

- caminho do README criado/alterado;
- resumo das secoes criadas;
- confirmacao de que README antigo nao foi reaproveitado;
- confirmacao de que o conteudo reflete o estado real do projeto;
- confirmacao de que nao houve alteracao de codigo/cenas/assets;
- recomendacao: aprovar, aprovar parcialmente ou revisar;
- confirmacao de que nao houve commit;
- confirmacao de que nao houve push.

Parar antes de qualquer push, commit, limpeza de arquivos, alteracao de cenas, alteracao de assets ou proxima feature.
