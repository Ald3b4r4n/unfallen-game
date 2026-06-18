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
