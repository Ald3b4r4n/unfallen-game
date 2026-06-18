# Implementation Plan: Protagonist Base Setup (Antônio Rafael)

**Branch**: `002-antonio-rafael-base` | **Date**: 2026-06-18 | **Spec**: [spec.md](file:///d:/Projetos/Unfallen/specs/002-antonio-rafael-base/spec.md)
**Input**: Feature specification from `/specs/002-antonio-rafael-base/spec.md`

## Summary

Esta feature inicial visa construir a fundação jogável do jogo **Unfallen**, focada exclusivamente no protagonista **Antônio Rafael** em uma cena isolada de teste.
A abordagem técnica consiste em:
- Implementar uma arquitetura modular em Godot 4.x Standard utilizando GDScript.
- Separar rigorosamente a física, o processamento de inputs, a conversão matemática isométrica e o controle de animação.
- Configurar uma câmera suave de acompanhamento e uma cena de laboratório neutra com blocos de colisão sólidos.
- Garantir a importação correta de sprites em Pixel Art HD sem perdas e sem desfoque (Texture Filter: Nearest).

## Technical Context

**Language/Version**: GDScript / Godot 4.x Standard  
**Primary Dependencies**: Godot 4.x Standard  
**Storage**: N/A  
**Testing**: Manual debug scenes (CharacterTestScene.tscn)  
**Target Platform**: Desktop (Windows/Linux/macOS)  
**Project Type**: Game 2D isométrico em Pixel Art HD  
**Performance Goals**: 60 FPS  
**Constraints**: Pixel Art HD scale consistency (e.g., 128x128 or 64x64)  
**Scale/Scope**: Fase 1-3 Protótipo de cena isolada  

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Spec First, Implementação Depois**: Is there an approved spec before starting work?
- [x] **Gate Humano Obrigatório**: Does the plan list tasks that require explicit human approval (commits, folder structures, principal scene edits)?
- [x] **Character First**: Is the character (Antônio Rafael) validated before starting on complex systems?
- [x] **Pixel Art HD Consistente**: Are visual asset imports and scales complying with the 128x128 / 64x64 isometric art standards?
- [x] **Engine e Tecnologia**: Are we using Godot 4.x Standard & GDScript?

## Project Structure

A estrutura física do projeto será criada no diretório raiz (`res://`) respeitando o padrão modular:

```text
res://
├── assets/
│   ├── characters/
│   │   └── antonio_rafael/
│   │       ├── source/                # Arquivos fonte de arte (aseprite, PSD)
│   │       ├── sprites/               # Spritesheets importadas (PNG)
│   │       ├── references/            # Fotos e referências visuais
│   │       └── exports/               # Renderizações temporárias
│   ├── ui/                            # Assets de interface (se necessário futuramente)
│   └── environments/
│       └── test/                      # Texturas/materiais de teste neutros
├── scenes/
│   ├── player/
│   │   └── Player.tscn                # Cena do protagonista
│   ├── test/
│   │   └── CharacterTestScene.tscn    # Cena de laboratório/teste
│   └── camera/
│       └── CameraRig.tscn             # Cena da câmera de acompanhamento
├── scripts/
│   ├── player/
│   │   ├── player_controller.gd       # Coordena inputs e estados
│   │   ├── player_animation_controller.gd # Coordena as animações
│   │   └── isometric_movement.gd      # Lógica matemática de movimento isométrico
│   └── camera/
│       └── camera_follow.gd           # Suavização de câmera
└── docs/
    ├── art/
    │   ├── antonio-rafael.md          # Ficha visual e direções de arte
    │   └── asset-sources.md           # Rastreamento de assets
    └── technical/
        ├── character-pipeline.md      # Instruções de exportação de arte
        └── godot-import-settings.md   # Configuração de importação no Godot
```

**Structure Decision**: Projeto Godot 4 estruturado em uma raiz unificada com separação estrita por tipo de recurso (scenes, scripts, assets, docs) para assegurar modularidade.

## Proposed Changes

Abaixo estão descritas as especificações de componentes técnicos que serão criados:

### Cenas

#### [NEW] [Player.tscn](file:///d:/Projetos/Unfallen/scenes/player/Player.tscn)
Representa o protagonista Antônio Rafael.
- **Estrutura**:
  - `CharacterBody2D` (Root) [Script: `player_controller.gd`]
    - `Node2D` (SpritePivot)
      - `Sprite2D` (CharacterSprite)
    - `CollisionShape2D` (CapsuleShape2D / CircleShape2D de pé)
    - `AnimationPlayer` (AnimPlayer)
    - `Node` (MovementModule) [Script: `isometric_movement.gd`]
    - `Node` (AnimationModule) [Script: `player_animation_controller.gd`]

#### [NEW] [CameraRig.tscn](file:///d:/Projetos/Unfallen/scenes/camera/CameraRig.tscn)
Câmera de acompanhamento suave.
- **Estrutura**:
  - `Node2D` (CameraRig) [Script: `camera_follow.gd`]
    - `Camera2D` (Camera2D) [Position smoothing: Enabled, Drag margins: ajustadas]

#### [NEW] [CharacterTestScene.tscn](file:///d:/Projetos/Unfallen/scenes/test/CharacterTestScene.tscn)
Mapa neutro de laboratório físico e visual.
- **Estrutura**:
  - `Node2D` (CharacterTestScene) (Root)
    - `Node2D` (Environment)
      - `TileMap` ou `StaticBody2D` (SolidGround)
      - `StaticBody2D` (SolidWallBlock) (Obstáculo pintado com cor sólida de depuração)
    - `Player` (Player.tscn instanciado)
    - `CameraRig` (CameraRig.tscn instanciado, target definido para o Player)

---

### Scripts

#### [NEW] [player_controller.gd](file:///d:/Projetos/Unfallen/scripts/player/player_controller.gd)
Controlador principal do jogador. Captura entradas e direciona as sub-lógicas.
```gdscript
extends CharacterBody2D
class_name PlayerController

@onready var movement_module = $MovementModule
@onready var animation_module = $AnimationModule

func _physics_process(delta: float) -> void:
    # 1. Obter input ortogonal
    var input_vector = Vector2(
        Input.get_action_strength("move_right") - Input.get_action_strength("move_left"),
        Input.get_action_strength("move_down") - Input.get_action_strength("move_up")
    )
    
    # 2. Calcular velocidade isométrica via módulo
    var iso_velocity = movement_module.calculate_velocity(input_vector)
    velocity = iso_velocity
    move_and_slide()
    
    # 3. Informar o módulo de animação sobre o estado físico
    animation_module.update_animation(velocity, input_vector)
```

#### [NEW] [isometric_movement.gd](file:///d:/Projetos/Unfallen/scripts/player/isometric_movement.gd)
Efetua as transformações matemáticas para o plano isométrico 2:1.
```gdscript
extends Node
class_name IsometricMovement

@export var max_speed: float = 120.0

func calculate_velocity(input: Vector2) -> Vector2:
    if input == Vector2.ZERO:
        return Vector2.ZERO
        
    # Normalizar o input para evitar super-velocidade diagonal
    var normalized_input = input.normalized()
    
    # Conversão de eixos ortogonais para isométricos 2:1 (Eixo Y achatado em 50%)
    var iso_x = normalized_input.x - normalized_input.y
    var iso_y = (normalized_input.x + normalized_input.y) * 0.5
    
    return Vector2(iso_x, iso_y).normalized() * max_speed
```

#### [NEW] [player_animation_controller.gd](file:///d:/Projetos/Unfallen/scripts/player/player_animation_controller.gd)
Determina a animação com base na velocidade e no último vetor de direção (Idle e Walk em 4 direções).
```gdscript
extends Node
class_name PlayerAnimationController

@onready var anim_player = $"../AnimationPlayer"
@onready var sprite = $"../SpritePivot/Sprite2D"

# Mapeamento de direções isométricas
enum Facing { SOUTH_WEST, SOUTH_EAST, NORTH_WEST, NORTH_EAST }
var current_facing: Facing = Facing.SOUTH_WEST

func update_animation(velocity: Vector2, input: Vector2) -> void:
    if input != Vector2.ZERO:
        current_facing = _get_facing_direction(input)
        anim_player.play("walk_" + _get_facing_string(current_facing))
    else:
        anim_player.play("idle_" + _get_facing_string(current_facing))

func _get_facing_direction(input: Vector2) -> Facing:
    # Escolha da direção isométrica com base no vetor de input ortogonal
    if input.x > 0 and input.y >= 0:
        return Facing.SOUTH_EAST
    elif input.x < 0 and input.y >= 0:
        return Facing.SOUTH_WEST
    elif input.x > 0 and input.y < 0:
        return Facing.NORTH_EAST
    else:
        return Facing.NORTH_WEST

func _get_facing_string(facing: Facing) -> String:
    match facing:
        Facing.SOUTH_WEST: return "south_west"
        Facing.SOUTH_EAST: return "south_east"
        Facing.NORTH_WEST: return "north_west"
        Facing.NORTH_EAST: return "north_east"
    return "south_west"
```

#### [NEW] [camera_follow.gd](file:///d:/Projetos/Unfallen/scripts/camera/camera_follow.gd)
Acompanhamento amortecido do jogador.
```gdscript
extends Node2D
class_name CameraFollow

@export var target_node: Node2D
@export var smooth_speed: float = 5.0

func _physics_process(delta: float) -> void:
    if target_node:
        # Amortecimento linear da câmera
        global_position = global_position.lerp(target_node.global_position, smooth_speed * delta)
```

## Verification Plan

### Automated Tests
* N/A para testes de unidade clássicos nesta fase inicial de prototipagem física/visual. O Godot não possui suporte nativo simples para CI/CD sem assets.

### Manual Verification
1. **Verificação de Movimento e Câmera**:
   - Abrir a cena `CharacterTestScene.tscn`.
   - Controlar o personagem usando WASD e verificar se ele se desloca nos eixos isométricos corretos.
   - Observar se a câmera segue o personagem suavemente e sem interrupções visuais.
2. **Verificação de Colisão**:
   - Tentar caminhar contra o obstáculo sólido (StaticObstacle) na cena neutra de teste.
   - O personagem deve ser completamente bloqueado pelo objeto sólido sem penetrar.
3. **Verificação de Animação**:
   - Testar o comportamento das animações `walk` e `idle` nas 4 direções isométricas ao mudar a direção de input.
