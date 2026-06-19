# Research: Rig Assembly V1 do SGT Antonio Rafael

## Decision: Usar `front_right` como unica direcao da montagem V1

**Rationale**: A Rig Parts Separation V1 foi aprovada parcialmente a partir de `front_right` e ja possui partes, pivos sugeridos e preview nessa direcao. Expandir para outras direcoes agora aumentaria escopo e risco antes de validar a montagem tecnica basica.

**Alternatives considered**:

- Montar 8 direcoes agora: rejeitado por ampliar escopo antes de validar a primeira hierarquia.
- Montar `front` em vez de `front_right`: rejeitado porque as partes separadas aprovadas parcialmente estao em `front_right`.
- Usar walk candidates anteriores: rejeitado porque nao sao oficiais e nao servem como fonte de rig.

## Decision: Manter `AntonioRafaelRigLab.tscn` como laboratorio isolado

**Rationale**: A cena ja existe como laboratorio tecnico e nao substitui o Player. Atualiza-la preserva a arquitetura aprovada: rig tecnico primeiro, sprites finais depois.

**Alternatives considered**:

- Criar nova cena de gameplay: rejeitado porque a feature nao e gameplay.
- Integrar no `Player.tscn`: rejeitado por proibicao explicita e por risco de alterar runtime oficial.
- Montar rig em cena temporaria fora de `scenes/rig/`: rejeitado porque reduziria rastreabilidade do pipeline.

## Decision: Usar `Node2D`/`Sprite2D` hierarquicos como montagem principal

**Rationale**: A montagem precisa ser legivel, auditavel e facil de validar. `Node2D` e `Sprite2D` permitem hierarquia clara, posicionamento local, pivots por transform e recomposicao visual sem exigir deformacao ou animacao.

**Alternatives considered**:

- Usar somente composicao plana por alpha: rejeitado porque nao valida hierarquia nem pivos.
- Usar somente `Skeleton2D`/`Bone2D`: rejeitado porque pode ocultar a relacao direta entre parte, node e asset nesta fase.
- Migrar Player para rig runtime: rejeitado por escopo e arquitetura aprovada.

## Decision: Usar `Skeleton2D`/`Bone2D` apenas como guia opcional de laboratorio

**Rationale**: Ossos podem ajudar a visualizar articulacao futura, mas a V1 precisa primeiro validar encaixe e pivos. Eles devem permanecer opcionais e isolados no laboratorio.

**Alternatives considered**:

- Nao usar ossos: aceitavel se `Marker2D` e hierarquia forem suficientes, mas menos util para visualizar animacao futura.
- Usar ossos como sistema final: rejeitado porque a exportacao final prevista continua sendo sprites PNG `128x128` aprovados.

## Decision: Criar `rig_assembly_manifest.json`

**Rationale**: O manifesto de partes registra assets e pivos sugeridos, mas nao registra a montagem: node correspondente, posicao local, rotacao, escala e status de encaixe. Um manifesto de montagem separado cria auditoria clara para a futura animacao.

**Alternatives considered**:

- Alterar somente `parts_manifest.json`: rejeitado porque misturaria separacao de partes com montagem.
- Registrar montagem apenas na cena Godot: rejeitado porque dificultaria revisao textual e validacao automatica.

## Decision: Preview de montagem separado do preview de partes

**Rationale**: `antonio_rafael_rig_parts_preview.png` valida separacao. A Rig Assembly V1 precisa de outro preview para validar hierarquia, recomposicao montada e pivos/markers.

**Alternatives considered**:

- Reusar o preview de partes: rejeitado porque nao mostra a montagem V1.
- Usar a cena Godot como unica evidencia: rejeitado porque o gate humano precisa de artefato visual simples e auditavel.

## Decision: Manter parts limitadas como `needs_*_refinement`

**Rationale**: `neck`, `torso_base`, `backpack`, `pelvis`, `goias_patch` e `sergeant_chevron` ja foram aprovados parcialmente com limitacoes. A montagem deve usar essas partes sem fingir que viraram arte final.

**Alternatives considered**:

- Marcar tudo como `assembled`: rejeitado porque apagaria limitacoes importantes.
- Recriar partes nesta feature: rejeitado porque esta feature monta o rig, nao refina arte.

## Decision: Nao criar contracts externos

**Rationale**: A feature nao expoe API publica, endpoint, CLI, save data ou interface externa. O contrato tecnico relevante e interno e fica representado por `rig_assembly_manifest.json`, data model e quickstart.

**Alternatives considered**:

- Criar contratos em `contracts/`: rejeitado por nao haver consumidor externo ou interface publica nesta etapa.
