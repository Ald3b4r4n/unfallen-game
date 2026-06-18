extends Node
class_name PlayerAnimationController

@onready var anim_player = $"../AnimPlayer"
@onready var sprite = $"../SpritePivot/CharacterSprite"

enum Facing {
    FRONT,
    BACK,
    LEFT,
    RIGHT,
    FRONT_LEFT,
    FRONT_RIGHT,
    BACK_LEFT,
    BACK_RIGHT
}

var current_facing: Facing = Facing.FRONT

func _ready() -> void:
    _play_idle()

func update_animation(_velocity: Vector2, input: Vector2) -> void:
    if input != Vector2.ZERO:
        current_facing = _get_facing_direction(input)
    _play_idle()

func _get_facing_direction(input: Vector2) -> Facing:
    if input.y > 0.0:
        if input.x < 0.0:
            return Facing.FRONT_LEFT
        if input.x > 0.0:
            return Facing.FRONT_RIGHT
        return Facing.FRONT

    if input.y < 0.0:
        if input.x < 0.0:
            return Facing.BACK_LEFT
        if input.x > 0.0:
            return Facing.BACK_RIGHT
        return Facing.BACK

    if input.x < 0.0:
        return Facing.LEFT
    if input.x > 0.0:
        return Facing.RIGHT

    return current_facing

func _play_idle() -> void:
    var animation_name := _get_idle_animation_name(current_facing)
    if anim_player.has_animation(animation_name) and anim_player.current_animation != animation_name:
        anim_player.play(animation_name)

func _get_idle_animation_name(facing: Facing) -> String:
    match facing:
        Facing.FRONT:
            return "idle_front"
        Facing.BACK:
            return "idle_back"
        Facing.LEFT:
            return "idle_left"
        Facing.RIGHT:
            return "idle_right"
        Facing.FRONT_LEFT:
            return "idle_front_left"
        Facing.FRONT_RIGHT:
            return "idle_front_right"
        Facing.BACK_LEFT:
            return "idle_back_left"
        Facing.BACK_RIGHT:
            return "idle_back_right"
    return "idle_front"
