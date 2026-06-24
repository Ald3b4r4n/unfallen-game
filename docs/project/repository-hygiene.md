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

## Atualizacao 2026-06-21 - Remove Stale Prototype Imports V1

A feature `013-remove-stale-prototype-imports-v1` aplicou uma limpeza segura apenas a `.import` obsoleto de prototipos rejeitados.

Regra pratica adicionada:

- Remocao de `.import` stale deve acontecer somente por lista explicita, com manifesto, contagem esperada e validacao de caminhos sensiveis.
- Nunca remover `.import` por diretorio inteiro ou glob amplo quando houver assets oficiais no mesmo projeto.
- `.uid` deve continuar fora de limpezas de `.import` e precisa de decisao propria.
- Imports oficiais do rig, Base Idle Oficial V1, Player, cenas, scripts e `.gitignore` devem ser validados como intocados antes do gate humano.

Documentos de referencia:

- `docs/technical/stale-prototype-imports-removal-v1.md`
- `docs/technical/stale-prototype-imports-removal-manifest-v1.md`

## Atualizacao 2026-06-23 - Review Official Rig Imports V1

A feature `014-review-official-rig-imports-v1` revisou os `32 official_asset_imports` do rig tecnico validado sem mover, apagar, stagear ou versionar `.import`.

Regra pratica adicionada:

- Imports oficiais do rig podem ser candidatos a `version_later`, mas somente em commit futuro separado, com paths explicitos e gate humano.
- Nao usar regra global em `.gitignore` para esconder `.import` enquanto o projeto versiona imports oficiais selecionados.
- `.uid` deve continuar em decisao separada.
- Imports de preview/arquivo historico/prototipo nao devem ser misturados com imports oficiais do rig.
- Nenhum `.import` prova existencia de caminhada articulada oficial, walk cycle oficial ou animacao oficial.

Documentos de referencia:

- `docs/technical/official-rig-imports-review-v1.md`
- `docs/technical/official-rig-imports-review-manifest-v1.md`

## Atualizacao 2026-06-23 - Review Rig Articulation Preview Import V1

A feature `015-review-rig-articulation-preview-import-v1` revisou um `.import` adicional ligado ao preview tecnico da Rig Articulation Test V1.

Regra pratica adicionada:

- Imports de preview tecnico validado podem ser candidatos a agrupamento futuro com imports oficiais do rig, mas somente com paths explicitos, commit separado e gate humano.
- Um `.import` de preview tecnico nao prova existencia de caminhada articulada oficial, walk cycle oficial ou animacao oficial.
- Nao alterar `.gitignore` para esconder `.import` globalmente enquanto o projeto usa politica seletiva para imports oficiais.
- Nao misturar imports de rig com `.uid`, Player, cenas, scripts, sprites idle ou gameplay no mesmo escopo sem aprovacao explicita.

Documentos de referencia:

- `docs/technical/rig-articulation-preview-import-review-v1.md`
- `docs/technical/rig-articulation-preview-import-review-manifest-v1.md`

## Atualizacao 2026-06-24 - Rig Imports Versioning and Articulated Walk Lab Prep V1

A feature `016-rig-imports-versioning-and-articulated-walk-lab-prep-v1` consolidou o versionamento dos imports oficiais do rig.

Regras praticas reforcadas:

- `.import` oficial pode ser stageado somente por path explicito individual.
- Nao usar glob para `.import`.
- Nao stagear diretorio inteiro de `assets/`.
- Nao misturar `.import` oficial com `.uid`.
- Nao alterar `.gitignore` para resolver casos individuais de import.
- Nao confundir import de preview tecnico com walk cycle oficial.
- A proxima etapa recomendada e laboratorio experimental separado, sem integracao inicial ao Player.

Documentos de referencia:

- `docs/technical/official-rig-imports-versioning-v1.md`
- `docs/technical/articulated-walk-lab-prep-v1.md`
