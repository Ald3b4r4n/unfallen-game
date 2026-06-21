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

## Atualizacao 2026-06-21 - Godot Import UID Policy V1

A feature `012-godot-import-uid-policy-v1` documentou a politica inicial para arquivos `.import` e `.uid` do Godot.

Regras reforcadas:

- Nao versionar `.import` em massa.
- Nao versionar `.uid` em massa.
- `.import` ligado a asset oficial aprovado pode ser candidato a commit futuro, mas somente com paths explicitos e gate humano.
- `.import` ligado a prototipo rejeitado, fonte ausente ou arquivo historico nao deve ser promovido a asset oficial.
- `.uid` de scripts/cenas oficiais pode ser candidato a commit futuro, mas exige revisao humana e validacao no Godot.
- `.gitignore` nao deve ser alterado sem feature propria e aprovacao explicita.
- Qualquer commit de `.import` ou `.uid` deve ser separado de Player, cenas, scripts, gameplay e assets oficiais.

Documento de referencia:

- `docs/technical/godot-import-uid-policy-v1.md`

Esta atualizacao nao altera `.gitignore`, nao move arquivos, nao apaga arquivos e nao autoriza commit/push automatico.
