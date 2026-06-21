# Repository Hygiene Notes

**Contexto**: notas criadas durante a feature `010-cleanup-untracked-prototypes` para evitar commits acidentais de protótipos e arquivos gerados.

## Regras Recomendadas

- Não usar `git add .` ou `git add -A` em features com assets/protótipos pendentes.
- Separar protótipos de assets oficiais em commits e features diferentes.
- Tratar `.import` e `.uid` como política explícita do projeto antes de versionar em massa.
- Revisar assets visualmente e documentalmente antes de qualquer commit.
- Manter gate humano antes de limpeza destrutiva, arquivamento físico ou alteração de `.gitignore`.
- Separar commits por escopo: documentação, rig, sprites, specs, import files e limpeza não devem ser misturados sem aprovação.

## Política Pendente

- Decidir quando `.import` deve ser versionado no projeto Godot.
- Decidir quando `.uid` deve ser versionado.
- Decidir pasta de arquivo histórico para candidatos/protótipos rejeitados.
- Decidir tratamento de specs antigas não rastreadas.

Estas notas são orientativas e não autorizam remoção, movimentação, commit ou push.
