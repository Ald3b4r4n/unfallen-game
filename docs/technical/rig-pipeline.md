# Rig Tecnico 2D do SGT Antonio Rafael

## Status

Esta documentacao registra a mudanca de arquitetura de producao para as proximas animacoes do SGT Antonio Rafael.

- `walk_cycle_v1`: REPROVADO
- Motivo: frames praticamente estaticos, sem passada real
- Status: nao oficial
- Uso permitido: somente rastreabilidade/auditoria
- Uso proibido: gameplay, Player oficial, animacao oficial

A Base Idle Oficial V1 permanece aprovada, intacta e deve continuar sendo a referencia visual mestre.

## Decisao de Arquitetura

A partir desta etapa, novas animacoes devem seguir a estrategia:

```txt
Rig Tecnico 2D primeiro, sprites finais depois.
```

O rig tecnico e ferramenta de producao. Ele nao substitui automaticamente o Player em runtime, nao muda o movimento do jogo e nao autoriza trocar `Player.tscn` para `Skeleton2D`.

O Player final continua usando PNGs finais `128x128` com `Sprite2D` e `AnimationPlayer`, ate decisao humana diferente.

## Estrutura Criada

```txt
res://assets/characters/antonio_rafael/rig/
res://assets/characters/antonio_rafael/rig/parts/
res://assets/characters/antonio_rafael/rig/exports/
res://assets/characters/antonio_rafael/source/rejected/walk_cycle_v1/
res://scenes/rig/AntonioRafaelRigLab.tscn
res://scripts/rig/rig_export_notes.gd
res://scripts/rig/rig_preview_controller.gd
```

`AntonioRafaelRigLab.tscn` e uma cena isolada de laboratorio. Ela contem referencias visuais da Base Idle Oficial V1, estrutura inicial de `Skeleton2D`/`Bone2D`, marcadores de partes e uma moldura tecnica `128x128` para orientar futuras exportacoes.

## Partes Planejadas do Personagem

O rig deve separar o personagem em partes controlaveis:

- cabeca;
- pescoco;
- tronco;
- colete;
- mochila;
- braco esquerdo;
- braco direito;
- antebraco esquerdo;
- antebraco direito;
- mao esquerda;
- mao direita;
- quadril;
- coxa esquerda;
- coxa direita;
- perna esquerda;
- perna direita;
- bota esquerda;
- bota direita.

Cada parte deve preservar rosto, oculos, cabelo, tom de pele, uniforme cinza/chumbo/preto, colete, mochila, patch da bandeira de Goias quando visivel, divisa de sargento quando visivel, escala e silhueta geral da Base Idle Oficial V1.

## Pipeline Oficial de Animacao

1. Manter a Base Idle Oficial V1 como referencia visual mestre.
2. Montar partes tecnicas do personagem em `res://assets/characters/antonio_rafael/rig/parts/`.
3. Animar o rig em `res://scenes/rig/AntonioRafaelRigLab.tscn`.
4. Validar movimento real de pernas, bracos, tronco, mochila e botas.
5. Exportar frames finais para PNG individual `128x128`.
6. Salvar exports brutos/intermediarios em `res://assets/characters/antonio_rafael/rig/exports/`.
7. Limpar pixels, transparencias e alinhamento de baseline.
8. Gerar preview humano.
9. Fazer gate humano de aprovacao visual.
10. Integrar no `Player.tscn` somente depois de aprovacao humana explicita.

## Validacoes Obrigatorias Futuras

- Frames finais devem ser PNG `RGBA`.
- Cada frame final deve medir exatamente `128x128`.
- Fundo deve usar transparencia real.
- Nao pode haver fundo verde opaco.
- Nao pode haver label, texto externo ou direcao escrita dentro dos frames.
- Nao pode haver `Policia Civil`, `Sargento Silva` ou nomes aleatorios.
- A caminhada precisa mostrar passada real, alternancia de pernas e bracos e peso corporal.
- O personagem nao pode virar para o lado oposto dentro da mesma animacao lateral.
- O Player deve permanecer idle-only enquanto nao houver walk aprovada.

## Proximo Passo Recomendado

Preparar as partes do rig a partir da Base Idle Oficial V1 e validar uma animacao lateral em laboratorio antes de qualquer nova tentativa completa de 8 direcoes.

Nao gerar walk final, nao integrar no Player e nao fazer commit/push sem nova decisao humana.

## Separacao de Partes - Feature 005

Em 2026-06-19, foi executada a primeira separacao tecnica de partes do SGT Antonio Rafael para rig 2D, usando a direcao primaria `front_right`.

Referencias e resultados:

- referencia mestre: `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`;
- partes criadas: `res://assets/characters/antonio_rafael/rig/parts/front_right/`;
- manifesto: `res://assets/characters/antonio_rafael/rig/parts_manifest.json`;
- recomposicao: `res://assets/characters/antonio_rafael/rig/assembled/front_right_recomposition.png`;
- preview humano: `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_parts_preview.png`;
- documentacao dedicada: `res://docs/technical/rig-parts-separation.md`.

Decisao humana posterior: as partes estao **APROVADAS PARCIALMENTE** como `Rig Parts Separation V1`.

Uso permitido:

- base tecnica inicial para laboratorio de rig;
- estudo de separacao de partes;
- preparacao para futura montagem de esqueleto/armacao;
- referencia para refinamento manual.

Uso proibido:

- arte final;
- animacao final;
- walk cycle oficial;
- asset final de gameplay;
- substituto do Player runtime.

Limitacoes registradas: `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron` precisam refinamento manual; `radio` e `holster` foram rejeitados no manifesto por baixa legibilidade em `front_right`.

As partes sao materiais de producao para laboratorio e nao substituem o Player oficial.

## Rig Assembly V1 - Feature 006

Em 2026-06-19, foi montada a primeira hierarquia tecnica do rig 2D do SGT Antonio Rafael usando a direcao `front_right`.

Referencias e resultados:

- referencia mestre: `res://assets/characters/antonio_rafael/sprites/idle/antonio_rafael_idle_front_right.png`;
- partes usadas: `res://assets/characters/antonio_rafael/rig/parts/front_right/`;
- manifesto de partes: `res://assets/characters/antonio_rafael/rig/parts_manifest.json`;
- manifesto de montagem: `res://assets/characters/antonio_rafael/rig/rig_assembly_manifest.json`;
- preview humano: `res://assets/characters/antonio_rafael/rig/previews/antonio_rafael_rig_assembly_v1_preview.png`;
- laboratorio: `res://scenes/rig/AntonioRafaelRigLab.tscn`;
- documentacao dedicada: `res://docs/technical/rig-assembly-v1.md`.

A montagem foi **APROVADA PARCIALMENTE** como `Rig Assembly V1`. Ela e uma etapa de laboratorio para validar hierarquia, pivos e recomposicao, nao uma animacao oficial e nao runtime final.

Limitacoes herdadas: `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron` precisam refinamento manual. `radio` e `holster` permanecem rejeitados.

Escopo da aprovacao parcial:

- autorizada como laboratorio tecnico, prova inicial de montagem, validacao de hierarquia/pivos e base para refinamento manual;
- nao autorizada como arte final, animacao final, walk cycle oficial, asset final de gameplay ou substituto do Player runtime.

Auditoria: Player, scripts do Player e sprites idle aprovados permanecem sem alteracao por esta feature; a cena de rig referencia apenas assets do rig e o idle `front_right`.

## Rig Refinement V1 - Feature 007

Em 2026-06-19, foi executado o primeiro refinamento manual das partes criticas do rig `front_right`, seguindo a decisao "Rig Tecnico 2D primeiro, sprites finais depois".

Fluxo aplicado:

1. Validar Base Idle Oficial V1 e manifestos existentes.
2. Criar backup nao destrutivo das partes criticas em `_backup_v1/`.
3. Refinar `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron`.
4. Atualizar `parts_manifest.json` e `rig_assembly_manifest.json`.
5. Gerar preview humano de antes/depois.
6. Registrar limitacoes e parar para validacao humana.

Resultado:

- refinamento tecnico criado;
- aprovado parcialmente como `Rig Refinement V1`;
- `goias_patch` e `sergeant_chevron` tratados como detalhes simbolicos;
- laboratorio continua isolado;
- nenhuma animacao oficial criada;
- nenhum walk cycle criado;
- nenhum asset foi integrado ao Player.

Antes de qualquer animacao controlada, ainda e necessario validar o resultado ao vivo no Godot.
