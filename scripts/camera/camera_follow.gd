extends Node2D
class_name CameraFollow

@export var target_node: Node2D
@export var smooth_speed: float = 5.0

func _physics_process(delta: float) -> void:
    if target_node:
        # Amortecimento linear da câmera
        global_position = global_position.lerp(target_node.global_position, smooth_speed * delta)
