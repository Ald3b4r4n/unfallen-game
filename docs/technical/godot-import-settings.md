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
