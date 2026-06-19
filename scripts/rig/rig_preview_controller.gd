extends Node2D
class_name AntonioRafaelRigPreviewController

@export var zoom_step := 0.25
@export var min_zoom := 1.0
@export var max_zoom := 6.0

@onready var preview_camera: Camera2D = $PreviewCamera

func _ready() -> void:
    if preview_camera != null:
        preview_camera.make_current()

func _unhandled_input(event: InputEvent) -> void:
    if preview_camera == null:
        return

    if event is InputEventKey and event.pressed and not event.echo:
        if event.keycode == KEY_EQUAL or event.keycode == KEY_PLUS:
            _set_zoom(preview_camera.zoom.x + zoom_step)
        elif event.keycode == KEY_MINUS:
            _set_zoom(preview_camera.zoom.x - zoom_step)
        elif event.keycode == KEY_0:
            _set_zoom(3.0)

func _set_zoom(value: float) -> void:
    var clamped_zoom := clampf(value, min_zoom, max_zoom)
    preview_camera.zoom = Vector2(clamped_zoom, clamped_zoom)
