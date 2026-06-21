# README Notes

## Motivo

Estas notas registram a auditoria editorial da feature `009-readme-oficial-unfallen`. A entrega cria um README oficial para apresentar o projeto Unfallen de forma específica, em português do Brasil, antes de um push público futuro.

## Auditoria do README anterior

Na auditoria desta feature, não foi identificado conteúdo reaproveitado de projeto antigo no README entregue.

O `README.md` atual foi tratado como substituição editorial completa e escrito especificamente para o Unfallen. Qualquer README antigo, caso tenha existido antes desta feature, não foi usado como base textual.

## Estado real usado como base

O README foi baseado nos artefatos da feature 009 e no estado documentado do projeto:

- projeto em desenvolvimento no Godot 4;
- direção visual Pixel Art HD isométrica;
- personagem principal em foco: SGT Antônio Rafael;
- pipeline atual character-first;
- Base Idle Oficial V1 aprovada;
- rig técnico criado;
- partes do rig separadas;
- partes críticas refinadas;
- validação visual no Godot aprovada parcialmente;
- teste técnico de articulação aprovado parcialmente;
- walk cycle final ainda não criado/aprovado;
- nenhuma animação oficial final aprovada;
- gameplay completo ainda não implementado;
- rig técnico separado do Player runtime;
- sem release pública final.

## Decisões editoriais

- Separar estado atual de visão futura.
- Mencionar gameplay, combate, investigação, progressão e sobrevivência apenas como direção futura.
- Citar `res://scenes/rig/AntonioRafaelRigLab.tscn` como laboratório técnico.
- Citar `res://scenes/player/Player.tscn` como Player runtime oficial separado.
- Evitar declarações de licença aberta sem arquivo de licença confirmado.
- Registrar regras de governança Spec Kit/SDD, gate humano, segurança e escopo.

## Limitações

Esta feature é exclusivamente documental. Ela não deve alterar código, cenas, scripts, sprites, PNGs, assets, Player runtime, rig técnico, `.gitignore`, commits ou push.

As notas deste arquivo são auxiliares e não substituem o README oficial da raiz.

## Escopo confirmado

Nesta feature, a intenção é limitar mudanças aos arquivos documentais autorizados:

- `README.md`;
- `docs/project/README-notes.md`;
- `specs/009-readme-oficial-unfallen/tasks.md`.

Arquivos de código, cenas, Player, scripts, sprites, PNGs e assets permanecem fora do escopo.
