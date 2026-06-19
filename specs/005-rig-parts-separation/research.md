# Research: Separacao de Partes do Rig Tecnico 2D do SGT Antonio Rafael

## Decision: Usar `front_right` como direcao primaria

**Rationale**: `front_right` preserva leitura de rosto, oculos, tronco, colete e uma porcao lateral suficiente para orientar bracos, pernas e mochila. Ela oferece melhor equilibrio para validacao de identidade e futura articulacao do que uma frente totalmente simetrica.

**Alternatives considered**:

- `front`: boa para validar rosto/colete, mas menos util para volume lateral, mochila e sobreposicao de membros.
- `left` ou `right`: boas para passada lateral, mas menos adequadas para validar rosto/colete completo nesta primeira separacao.
- Separar 8 direcoes agora: rejeitado por aumentar risco de baixa qualidade e prometer escopo amplo demais antes de validar uma direcao.

## Decision: Usar todos os idles aprovados apenas como referencia auxiliar

**Rationale**: A Base Idle Oficial V1 e o contrato visual aprovado. A separacao deve priorizar a direcao primaria, mas detalhes parcialmente ocultos podem ser conferidos nos demais idles para manter fidelidade sem inventar uma nova identidade.

**Alternatives considered**:

- Usar somente um idle: reduz risco de mistura, mas pode deixar partes ocultas pobres ou mal interpretadas.
- Recriar partes por prompt ou desenho livre: rejeitado por risco de descaracterizacao.
- Usar tentativas walk reprovadas: rejeitado porque elas nao sao oficiais e servem apenas como auditoria negativa.

## Decision: Manter partes como PNGs individuais com transparencia

**Rationale**: PNGs individuais facilitam revisao humana, validacao de alpha, substituicao de partes e futura montagem no laboratorio de rig. Tambem evitam labels, grids ou sheets tecnicas como fonte de runtime.

**Alternatives considered**:

- Spritesheet unico de partes: rejeitado porque aumenta risco de recorte incorreto e labels dentro do material tecnico.
- Arquivo vetorial ou rig direto sem PNGs: rejeitado porque o projeto usa Pixel Art HD e precisa preservar leitura de sprite.

## Decision: Registrar pivôs em manifesto JSON

**Rationale**: O rig futuro precisa de pivos consistentes. Um manifesto auditavel evita depender apenas de memoria visual ou posicoes manuais na cena. Coordenadas relativas ao canvas da parte sao portaveis para montagem futura.

**Alternatives considered**:

- Registrar pivos apenas em documentacao Markdown: legivel, mas menos util para ferramentas e verificacoes.
- Guardar pivos somente na cena Godot: acopla dados de producao a uma cena e dificulta auditoria por arquivo.

## Decision: Criar preview de partes + recomposicao

**Rationale**: O maior risco e separar partes que tecnicamente existem mas nao recompõem o personagem aprovado. Um preview humano permite avaliar fidelidade antes de qualquer animacao.

**Alternatives considered**:

- Validar apenas arquivos individuais: insuficiente para detectar buracos, sobreposicoes ruins ou perda de identidade na montagem.
- Integrar no Player para testar: rejeitado porque a feature e de producao tecnica e nao deve alterar runtime oficial.

## Decision: Manter Player oficial fora do escopo

**Rationale**: A decisao arquitetural aprovada define rig tecnico como ferramenta de producao. O Player final continua usando sprites finais `128x128`, e nenhuma parte separada deve substituir o personagem jogavel sem nova aprovacao humana.

**Alternatives considered**:

- Trocar o Player para rig em runtime: rejeitado pela decisao humana e pelo risco de arquitetura/gameplay.
- Adicionar animacoes walk experimentais ao Player: rejeitado porque esta feature prepara partes, nao anima walk.

## Decision: Nao criar contracts externos

**Rationale**: A feature nao expoe API publica, endpoint, CLI, save data ou interface externa. O contrato tecnico relevante e interno e fica representado por `parts_manifest.json`, data model e quickstart.

**Alternatives considered**:

- Criar contrato formal em `contracts/`: rejeitado por nao haver consumidor externo ou interface publica nesta etapa.
