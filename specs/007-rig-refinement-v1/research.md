# Research: Rig Refinement V1 do SGT Antonio Rafael

## Decision: Refinar somente as seis partes criticas

**Rationale**: `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron` foram identificadas nas features anteriores como limitadoras para a proxima etapa de articulacao. Refinar todas as partes agora aumentaria o risco de descaracterizar a Base Idle Oficial V1 e diluiria o foco do gate humano.

**Alternatives considered**:

- Refinar o corpo inteiro: rejeitado por ampliar escopo e mexer em partes ja aceitaveis para laboratorio.
- Criar novas partes de outras direcoes: rejeitado porque a feature e `front_right`.
- Ir direto para animacao: rejeitado porque as partes criticas ainda nao sustentam movimento real.

## Decision: Usar backup local `_backup_v1/`

**Rationale**: A feature altera PNGs ja aprovados parcialmente como base tecnica. Copiar as versoes anteriores antes do refinamento cria comparacao visual, reversibilidade manual e auditoria simples sem depender apenas do historico Git.

**Alternatives considered**:

- Depender apenas de Git: rejeitado porque revisao visual humana precisa comparar arquivos no proprio pipeline de assets.
- Criar nomes novos para as partes refinadas: rejeitado porque quebraria a montagem existente ou exigiria troca maior de paths.
- Sobrescrever sem backup: rejeitado por violar rastreabilidade.

## Decision: Manter nomes e caminhos dos seis PNGs refinados

**Rationale**: A cena de rig e os manifestos ja apontam para os nomes canonicos das partes. Manter os caminhos reduz alteracoes na montagem, preserva compatibilidade e concentra a diferenca no refinamento visual.

**Alternatives considered**:

- Criar `*_refined.png`: rejeitado porque duplicaria referencias e aumentaria risco de usar versao errada.
- Criar uma pasta `front_right_refined/`: rejeitado porque exigiria remontagem ou alteracao maior de manifesto/cena.

## Decision: Detalhes pequenos devem ser simbolicos

**Rationale**: `goias_patch` e `sergeant_chevron` podem nao comportar leitura literal em escala `128x128`. Uma marca simbolica coerente preserva identidade sem virar texto ilegivel, label externo ou poluicao visual.

**Alternatives considered**:

- Tentar texto literal: rejeitado porque viola legibilidade e pode parecer label.
- Remover os detalhes: rejeitado porque reduz identidade PMGO/sobrevivente.
- Superdimensionar os detalhes: rejeitado porque quebraria proporcao e silhueta.

## Decision: Atualizar `parts_manifest.json` e `rig_assembly_manifest.json`

**Rationale**: O refinamento afeta tanto a qualidade individual da parte quanto a montagem. `parts_manifest.json` deve registrar status visual e rastreabilidade; `rig_assembly_manifest.json` deve registrar impacto em pivos, encaixe e limitacoes de recomposicao.

**Alternatives considered**:

- Atualizar apenas documentacao: rejeitado porque manifestos sao fonte tecnica do pipeline.
- Atualizar apenas `parts_manifest.json`: rejeitado porque nao cobre montagem, pivos e cena.
- Atualizar apenas `rig_assembly_manifest.json`: rejeitado porque nao cobre historico das partes separadas.

## Decision: Preview comparativo dedicado ao refinamento

**Rationale**: O preview de montagem V1 mostra a recomposicao geral. O refinamento precisa mostrar antes/depois e destacar as seis partes criticas para decisao humana rapida.

**Alternatives considered**:

- Reusar preview de montagem: rejeitado porque nao mostra diferenca antes/depois.
- Validar apenas no editor Godot: rejeitado porque Godot pode nao estar no PATH e o gate precisa de artefato visual portavel.
- Criar spritesheet tecnico: rejeitado porque preview nao e asset final nem fonte de gameplay.

## Decision: Nao criar contracts externos

**Rationale**: A feature nao expoe API publica, endpoint, CLI, save data ou interface externa. O contrato tecnico e interno e fica representado por manifestos, data model e quickstart.

**Alternatives considered**:

- Criar contratos em `contracts/`: rejeitado por nao haver consumidor externo ou interface publica nesta etapa.
