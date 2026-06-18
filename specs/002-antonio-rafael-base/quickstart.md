# Quickstart Guide: Protagonist Base Setup

This guide provides instructions to run, test, and verify the protagonist base setup feature in Godot 4.x.

## Project Setup & Prerequisites

1. **Godot Engine**: Ensure you are using **Godot 4.x Standard** (GDScript edition).
2. **Input Mapping**: Configure the following inputs in **Project Settings -> Input Map**:
   - `move_up`: mapped to `W` and `Up Arrow`
   - `move_down`: mapped to `S` and `Down Arrow`
   - `move_left`: mapped to `A` and `Left Arrow`
   - `move_right`: mapped to `D` and `Right Arrow`

---

## Technical Layout

Verify the folder and script layout as described:
- `res://scenes/player/Player.tscn` — Player kinematic scene.
- `res://scenes/test/CharacterTestScene.tscn` — Neutrally-styled isolation map.
- `res://scenes/camera/CameraRig.tscn` — Suave follow camera setup.
- `res://scripts/player/player_controller.gd` — Input dispatcher and FSM.
- `res://scripts/player/player_animation_controller.gd` — Sprite/animation state director.
- `res://scripts/player/isometric_movement.gd` — Isometric movement converter.
- `res://scripts/camera/camera_follow.gd` — Suave follow camera script.

---

## Sprite Import Pipeline

When importing sprites for Antônio Rafael:
1. Place assets inside `res://assets/characters/antonio_rafael/sprites/`.
2. Select files in the Godot FileSystem dock.
3. Open the **Import** tab (next to the Scene tab).
4. Set **Compress Mode** to **Lossless**.
5. Set **Texture Filter** to **Nearest** to prevent blur.
6. Click **Reimport**.

---

## Running the Test Scene

1. Open the project in the Godot Editor.
2. In the FileSystem dock, navigate to `res://scenes/test/`.
3. Double-click `CharacterTestScene.tscn` to load it.
4. Press `F6` to run the current scene (or click the "Play Scene" button in the upper right).
5. Use **WASD** or **Arrow Keys** to move.
6. Verify:
   - Antônio Rafael's sprite moves along the isometric plane.
   - The animation changes state (Idle -> Walk) and directions (4 isometric directions).
   - The camera follows the player smoothly.
   - The player cannot pass through the solid collision debug blocks.
