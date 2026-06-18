extends CharacterBody2D
class_name PlayerController

@onready var movement_module = $MovementModule
@onready var animation_module = $AnimationModule

func _physics_process(_delta: float) -> void:
    var input_vector := _get_input_vector()
    
    var iso_velocity = movement_module.calculate_velocity(input_vector)
    velocity = iso_velocity
    move_and_slide()
    
    animation_module.update_animation(velocity, input_vector)

func _get_input_vector() -> Vector2:
    var action_input := Vector2(
        _get_action_strength("move_right") - _get_action_strength("move_left"),
        _get_action_strength("move_down") - _get_action_strength("move_up")
    )

    if action_input != Vector2.ZERO:
        return action_input

    var keyboard_input := Vector2.ZERO
    if Input.is_key_pressed(KEY_D) or Input.is_key_pressed(KEY_RIGHT):
        keyboard_input.x += 1.0
    if Input.is_key_pressed(KEY_A) or Input.is_key_pressed(KEY_LEFT):
        keyboard_input.x -= 1.0
    if Input.is_key_pressed(KEY_S) or Input.is_key_pressed(KEY_DOWN):
        keyboard_input.y += 1.0
    if Input.is_key_pressed(KEY_W) or Input.is_key_pressed(KEY_UP):
        keyboard_input.y -= 1.0

    return keyboard_input

func _get_action_strength(action_name: String) -> float:
    if InputMap.has_action(action_name):
        return Input.get_action_strength(action_name)
    return 0.0
