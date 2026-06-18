# Research Notes: Protagonist Base Setup

This document outlines the technical research, decisions, and rationale for implementing the protagonist base setup in Godot 4.x Standard.

## Technical Decisions & Rationale

### 1. Kinematic Character Body Choice
* **Decision**: Use `CharacterBody2D` for the player entity (`Player.tscn`).
* **Rationale**: `CharacterBody2D` provides direct API controls (`move_and_slide()`, `velocity`) which are perfect for precise, responsive, and direct grid-like or free isometric movements. It eliminates the unpredictability of physics engine forces.
* **Alternatives Considered**: `RigidBody2D` (rejected because physics-based forces/impulses are unnecessary for isometric RPG/survival movement and lead to slippage and complex deceleration tuning).

### 2. Isometric Vector Movement Math
* **Decision**: Convert orthogonal user inputs (WASD/arrows) to isometric space using the projection:
  ```gdscript
  var iso_velocity = Vector2(
      orthogonal_input.x - orthogonal_input.y,
      (orthogonal_input.x + orthogonal_input.y) * 0.5
  ).normalized() * speed
  ```
  And normalise inputs to prevent speed inflation on diagonals.
* **Rationale**: Unfallen uses a standard 2:1 isometric projection. The y-axis in isometric projection is squashed by exactly 50% relative to the x-axis. Normalizing the input vector ensures that moving diagonally (which is straight along the isometric axes) does not result in a faster movement speed than moving orthocentrically.
* **Alternatives Considered**: 
  - Standard orthogonal movement (rejected because it does not match the 2D isometric art perspective, causing characters to appear to glide at incorrect angles).
  - Simple 45-degree rotation without y-scaling (rejected because it results in 1:1 isometric angles, which look too steep and do not match the target 2:1 visual assets).

### 3. Crisp Pixel Art Rendering in Godot 4
* **Decision**: Apply default CanvasTexture import settings:
  - **Texture Filter**: set to `Nearest` (either globally in Project Settings -> Rendering -> Textures -> Default Texture Filter, or per-texture).
  - **Texture Compress**: set to `Lossless` for spritesheets.
  - **Snap 2D**: Enable `Snap 2D transforms to pixel` and `Snap 2D vertices to pixel` in Project Settings -> Rendering -> 2D to avoid sub-pixel jitter during movement.
* **Rationale**: This prevents Godot from applying linear anti-aliasing interpolation to the sprites, keeping the Pixel Art HD boundaries sharp and crisp at all resolutions. Snapping prevents visual jittering and shimmering artifacts during camera movement.
* **Alternatives Considered**: Default Bilinear filtering (rejected because it causes blurry sprites and makes high-quality pixel art look smudged).

### 4. Animation Architecture
* **Decision**: Use `Sprite2D` coupled with `AnimationPlayer` or `AnimatedSprite2D`. For the modularity requirement, we will structure the player scene with:
  - Root: `CharacterBody2D`
  - Child: `Node2D` (Pivot / Sprite Container)
  - Child: `Sprite2D` or `AnimatedSprite2D`
  - Child: `AnimationPlayer`
  A dedicated script `player_animation_controller.gd` will receive movement states and direction vectors from `player_controller.gd` and handle switching animations based on state (Idle, Walk) and direction (Nordeste, Noroeste, Sudeste, Sudoeste).
* **Rationale**: This modular approach decouples the physics and input logic from visual presentation, allowing easy substitution of spritesheets or changing from `Sprite2D` to a multi-layered node structure (e.g. for gear/clothing overlays) in the future.
