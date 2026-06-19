# Configurações de Importação Godot 4: Pixel Art HD

Para garantir que a Pixel Art HD (escala primária 128x128 ou 64x64) renderize corretamente sem desfoque (blur) ou compressão indesejada no Godot 4.x Standard, siga rigorosamente as configurações abaixo.

## 1. Configurações Globais (Project Settings)
Vá em `Project > Project Settings > Rendering`:
- **Textures > Default Texture Filter**: Selecione `Nearest`. (Isso assegura que todas as texturas 2D carregadas não sofram filtro bilinear).
- **2D > Snap**: Habilite `Snap 2D transforms to pixel` e `Snap 2D vertices to pixel`. (Evita "jitter" quando a câmera acompanha o jogador).

## 2. Configurações de Importação de Assets (Aba Import)
Ao importar novos arquivos PNG de sprites:
- Selecione o arquivo na aba `FileSystem`.
- Mude para a aba `Import` (ao lado da aba Scene).
- **Compress > Mode**: Altere de `VRAM Compressed` para `Lossless`.
- **Texture > Filter**: Caso não tenha configurado globalmente, force para `Nearest`.
- Clique no botão `Reimport`.

*Observação*: Recomendamos configurar o Preset `Texture2D` com esses valores e definir como "Set as Default for Texture2D" para automatizar futuras importações.

## 3. Base Idle Oficial V1

A Base Idle Oficial V1 do SGT Antonio Rafael usa os sprites em:

```txt
res://assets/characters/antonio_rafael/sprites/idle/
```

Configuracao aplicada no Player:

- `res://scenes/player/Player.tscn` referencia os oito PNGs idle como `Texture2D`.
- `CharacterSprite` usa `texture_filter = Nearest` para evitar blur.
- `AnimPlayer` possui animacoes `idle_front`, `idle_back`, `idle_left`, `idle_right`, `idle_front_left`, `idle_front_right`, `idle_back_left` e `idle_back_right`.
- O fundo verde nao deve aparecer porque os PNGs finais estao em `RGBA` com alpha transparente.
- `player_controller.gd` preserva a leitura das acoes `move_*` quando existirem e usa WASD/setas como fallback local, sem alterar `project.godot`.

Esta configuracao foi autorizada apenas para teste visual na `CharacterTestScene.tscn`.

## 4. Walk Cycle 8 Direcoes V1 - Reprovada

A caminhada V1 do SGT Antonio Rafael foi criada originalmente com frames individuais em:

```txt
res://assets/characters/antonio_rafael/sprites/walk/
```

Apos reprovacao, esse caminho ativo foi removido. As copias rejeitadas antigas tambem foram removidas do fluxo ativo em limpeza posterior.

```txt
historico documental da Walk V1 reprovada
```

Requisitos dos frames:

- PNG `RGBA`;
- `128x128 px`;
- alpha transparente;
- sem fundo verde opaco;
- sem labels, texto de direcao ou character sheet tecnico;
- mesma escala da Base Idle Oficial V1.

Status apos revisao humana:

- `walk_cycle_v1`: **REPROVADO**.
- Motivo: frames visualmente estaticos, sem passada real.
- Uso futuro: apenas referencia negativa/auditoria.
- Nao importar como asset final.
- Nao ativar no `Player.tscn`.
- A integracao temporaria da V1 foi removida; o Player deve permanecer usando a Base Idle Oficial V1 ate uma walk posterior ser aprovada.

Validacao recomendada no editor:

1. Abrir `res://scenes/test/CharacterTestScene.tscn`.
2. Rodar a cena.
3. Testar WASD/setas nas 8 direcoes.
4. Confirmar que `walk_*` toca durante movimento.
5. Confirmar que `idle_*` retorna ao parar.
6. Conferir se a animacao parece caminhada e nao corrida.
7. Conferir se nao ha tremedeira visual excessiva.

Observacao: estes passos nao aprovam a V1; eles descrevem apenas como validar futuras tentativas aprovaveis.

## 5. Walk Cycle 8 Direcoes V2 - Reprovada

A Walk V2 foi gerada originalmente em:

```txt
res://assets/characters/antonio_rafael/sprites/walk_v2/
```

Apos reprovacao, esse caminho ativo deve ser removido. As copias rejeitadas antigas tambem foram removidas do fluxo ativo em limpeza posterior.

```txt
historico documental da Walk V2 reprovada
```

Status:

- `walk_cycle_v2`: **REPROVADO**;
- nao oficial;
- nao integrada ao `Player.tscn`;
- nao deve ser usada no gameplay;
- nao deve ser base visual principal para novas tentativas.

Requisitos validados localmente:

- 32 PNGs;
- `128x128 px`;
- PNG `RGBA`;
- alpha transparente;
- sem fundo verde opaco;
- preview em `res://assets/characters/antonio_rafael/exports/walk_cycle_v2/antonio_rafael_walk_cycle_v2_preview.png`.

Regra de importacao futura:

Nao adicionar `walk_v2` ao `Player.tscn`. O Player deve permanecer usando apenas a Base Idle Oficial V1 ate uma futura caminhada ser aprovada explicitamente.

## 6. Walk Cycle 8 Direcoes V3 - Reprovada

A Walk V3 foi gerada em:

```txt
res://assets/characters/antonio_rafael/sprites/walk_v3/
```

Status:

- reprovada;
- nao oficial;
- nao integrada ao `Player.tscn`;
- nao deve ser usada no gameplay.

Requisitos validados localmente:

- 32 PNGs;
- `128x128 px`;
- PNG `RGBA`;
- alpha transparente;
- sem fundo verde opaco;
- preview em `res://assets/characters/antonio_rafael/exports/walk_cycle_v3/antonio_rafael_walk_cycle_v3_preview.png`.

Regra de importacao futura:

Nao adicionar `walk_v3` ao `Player.tscn`. A tentativa foi reprovada por descaracterizar o personagem, e os caminhos ativos `sprites/walk_v3/` e `exports/walk_cycle_v3/` foram removidos do fluxo ativo.

## 7. Walk Manual Candidate V1 - Teste Reprovado

A sheet manual candidata foi organizada em:

```txt
res://assets/characters/antonio_rafael/source/walk_sheet_manual_candidate_v1/antonio_rafael_walk_sheet_manual_candidate_v1.png
```

Os frames tratados foram exportados em:

```txt
res://assets/characters/antonio_rafael/sprites/walk_manual_candidate_v1/
```

O preview tratado foi gerado em:

```txt
res://assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/antonio_rafael_walk_manual_candidate_v1_preview.png
```

O preview completo de teste foi gerado em:

```txt
res://assets/characters/antonio_rafael/exports/walk_manual_candidate_v1/antonio_rafael_walk_manual_candidate_v1_complete_preview.png
```

Resultado tecnico:

- 56 frames extraidos da sheet manual;
- 8 frames `right` temporarios criados por espelhamento horizontal de `left`;
- 64 frames totais para teste;
- 8 direcoes com 8 frames cada;
- PNG `128x128`;
- PNG `RGBA`;
- alpha transparente;
- checkerboard opaco removido dos frames tratados;
- direcao `right` temporaria, nao oficial.

Resultado do teste:

- `walk_manual_candidate_v1_TESTE`: **REPROVADO**;
- passadas curtas demais;
- pouca sensacao visual de andar;
- caminhada lateral instavel;
- personagem vira ao contrario a cada 3 ou 4 passadas nas laterais;
- nao oficializar.

Diagnostico:

- `walk_left` usava somente frames de `sprites/walk_manual_candidate_v1/left/`;
- `walk_right` usava somente frames de `sprites/walk_manual_candidate_v1/right/`;
- `right` foi espelho exato de `left`;
- o bug visual nao veio de mistura no `AnimationPlayer`;
- o bug mais provavel veio da sequencia lateral, que alterna orientacao do corpo dentro da mesma animacao.

Regra de importacao:

A integracao `walk_manual_candidate_v1_TESTE` foi removida do `Player.tscn`. O Player deve permanecer em modo seguro com apenas `idle_*` ate nova aprovacao humana.

Nao marcar como walk oficial. O `right` temporario pode inverter patch, mochila e equipamento por ser espelhamento de `left`.

Proxima tentativa recomendada:

```txt
Walk Prototype V5 - LEFT somente, 8 frames, passada ampliada
```

## 8. Rig Tecnico 2D - Laboratorio Isolado

Apos nova decisao humana em 2026-06-19, a producao de animacoes do SGT Antonio Rafael deve usar rig tecnico 2D antes de exportar sprites finais.

Cena criada:

```txt
res://scenes/rig/AntonioRafaelRigLab.tscn
```

Regras de uso:

- a cena e laboratorio tecnico, nao fase do jogo;
- o rig nao substitui o `Player.tscn`;
- `Skeleton2D`, `Bone2D`, marcadores e referencias visuais servem apenas para producao;
- o Player final continua usando PNGs finais `128x128` com `Sprite2D` e `AnimationPlayer`;
- qualquer exportacao futura deve passar por gate humano antes de integracao no Player.

Assets de rig:

```txt
res://assets/characters/antonio_rafael/rig/
res://assets/characters/antonio_rafael/rig/parts/
res://assets/characters/antonio_rafael/rig/exports/
```

Importacao futura de frames renderizados pelo rig:

- PNG `RGBA`;
- `128x128 px`;
- alpha transparente real;
- sem fundo verde opaco;
- filtro `Nearest`;
- compressao `Lossless`;
- sem labels, texto, grid, nomes externos ou spritesheet tecnico como frame final.
