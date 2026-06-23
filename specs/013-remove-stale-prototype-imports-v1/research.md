# Research: Remove Stale Prototype Imports V1

## Decision: Remover apenas `prototype_imports` com lista explícita

**Rationale**: A feature 012 separou os `.import` em grupos e identificou 77 `prototype_imports` ligados a protótipos antigos de walk. Usar lista explícita evita tocar nos 32 `official_asset_imports`, nos 2 `official_uid_files` e em áreas sensíveis do projeto.

**Alternatives considered**:

- Remover todos os `.import` untracked: rejeitado porque incluiria imports do rig técnico validado.
- Usar glob amplo por pasta `assets/characters/antonio_rafael/`: rejeitado porque mistura protótipos e assets oficiais.
- Alterar `.gitignore`: rejeitado porque a feature é de remoção pontual, não de política global.

## Decision: Parar se a contagem divergir de 77

**Rationale**: A contagem 77 vem da política da feature 012. Se a lista atual divergir, o estado local mudou e a remoção pode atingir itens errados.

**Alternatives considered**:

- Prosseguir com a contagem atual: rejeitado porque reduz segurança.
- Ajustar automaticamente a lista: rejeitado porque a origem da divergência pode indicar arquivo oficial, arquivo novo ou resíduo não classificado.

## Decision: Exigir origem ausente ou arquivada

**Rationale**: `.import` é derivado do asset original. Se o PNG original ainda existe no local original, remover o `.import` pode ser prematuro. Se o PNG foi arquivado historicamente ou não existe mais, o `.import` local é resíduo técnico.

**Alternatives considered**:

- Remover por nome contendo `walk`: rejeitado porque nome sozinho não prova obsolescência.
- Manter todos os imports: rejeitado porque perpetua ruído local já classificado como stale/prototype.

## Decision: Não tocar em `.uid`

**Rationale**: `.uid` tem papel diferente no Godot e a feature 012 encontrou 2 `official_uid_files` ligados a scripts do rig. Eles exigem feature separada e validação própria.

**Alternatives considered**:

- Tratar `.uid` junto com `.import`: rejeitado por misturar riscos e escopos.

## Decision: Documentar cada decisão em manifesto

**Rationale**: A remoção é destrutiva, mesmo que segura. O manifesto preserva rastreabilidade, permite revisão humana e facilita confirmar que nada oficial foi alterado.

**Alternatives considered**:

- Documentar apenas totais: rejeitado porque não permite auditoria arquivo a arquivo.

## Decision: Sem contratos externos

**Rationale**: A feature não expõe API, UI pública ou integração externa. O contrato é documental: lista avaliada, critérios, manifesto e validação de segurança.

**Alternatives considered**:

- Criar contratos em `contracts/`: rejeitado por ausência de interface externa.
