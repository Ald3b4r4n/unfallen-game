extends Node2D

const ANIMATION_NAME := &"walk_right_20f"
const GALLERY_COLUMNS := 6
const GALLERY_CELL_SIZE := Vector2(92.0, 86.0)
const GALLERY_THUMB_SCALE := Vector2(0.13, 0.13)
const PLAYBACK_MIN_FPS := 1.0
const PLAYBACK_MAX_FPS := 18.0
const START_POSITION := Vector2(320.0, 330.0)
const MOVE_SPEED := 260.0

@onready var walk_sprite: AnimatedSprite2D = $WalkRight20F
@onready var frame_gallery: Node2D = $FrameGallery
@onready var frame_label: Label = $CanvasLayer/FrameLabel
@onready var status_label: Label = $CanvasLayer/StatusLabel
@onready var controls_label: Label = $CanvasLayer/ControlsLabel

var frame_count := 0
var current_frame := 0
var playback_fps := 6.0
var playback_accumulator := 0.0
var is_playing := false
var movement_mode := false
var thumbnails: Array[Sprite2D] = []


func _ready() -> void:
	walk_sprite.position = START_POSITION
	walk_sprite.animation = ANIMATION_NAME
	walk_sprite.stop()
	frame_count = walk_sprite.sprite_frames.get_frame_count(ANIMATION_NAME)
	_build_frame_gallery()
	_set_frame(0)
	_set_playing(false)
	controls_label.text = "Tab: inspect/move | Space: play/pause | Left/Right or A/D: frame or move | R: reset | Up/Down: speed"


func _process(delta: float) -> void:
	if movement_mode:
		_process_movement(delta)
		return

	if not is_playing or frame_count <= 0:
		return

	playback_accumulator += delta * playback_fps
	while playback_accumulator >= 1.0:
		playback_accumulator -= 1.0
		_step_frame(1)


func _unhandled_input(event: InputEvent) -> void:
	if not event is InputEventKey:
		return

	var key_event := event as InputEventKey
	if not key_event.pressed or key_event.echo:
		return

	match key_event.keycode:
		KEY_TAB:
			movement_mode = not movement_mode
			_set_playing(false)
		KEY_SPACE:
			if not movement_mode:
				_set_playing(not is_playing)
		KEY_RIGHT, KEY_D:
			if not movement_mode:
				_set_playing(false)
				_step_frame(1)
		KEY_LEFT, KEY_A:
			if not movement_mode:
				_set_playing(false)
				_step_frame(-1)
		KEY_HOME:
			_set_playing(false)
			_set_frame(0)
		KEY_END:
			_set_playing(false)
			_set_frame(frame_count - 1)
		KEY_UP, KEY_W:
			playback_fps = minf(playback_fps + 1.0, PLAYBACK_MAX_FPS)
			_update_labels()
		KEY_DOWN, KEY_S:
			playback_fps = maxf(playback_fps - 1.0, PLAYBACK_MIN_FPS)
			_update_labels()
		KEY_R:
			walk_sprite.position = START_POSITION
			walk_sprite.flip_h = false
			_set_playing(false)
			_set_frame(0)


func _process_movement(delta: float) -> void:
	if frame_count <= 0:
		return

	var direction := 0.0
	if Input.is_key_pressed(KEY_RIGHT) or Input.is_key_pressed(KEY_D):
		direction += 1.0
	if Input.is_key_pressed(KEY_LEFT) or Input.is_key_pressed(KEY_A):
		direction -= 1.0

	if is_zero_approx(direction):
		playback_accumulator = 0.0
		_update_labels()
		return

	walk_sprite.position.x += direction * MOVE_SPEED * delta
	walk_sprite.flip_h = direction < 0.0
	playback_accumulator += delta * playback_fps

	while playback_accumulator >= 1.0:
		playback_accumulator -= 1.0
		_step_frame(1)


func _build_frame_gallery() -> void:
	thumbnails.clear()

	for child in frame_gallery.get_children():
		child.queue_free()

	for index in range(frame_count):
		var cell := Node2D.new()
		cell.name = "Frame%02d" % [index + 1]
		cell.position = Vector2(
			float(index % GALLERY_COLUMNS) * GALLERY_CELL_SIZE.x,
			float(floori(float(index) / float(GALLERY_COLUMNS))) * GALLERY_CELL_SIZE.y
		)
		frame_gallery.add_child(cell)

		var thumb := Sprite2D.new()
		thumb.name = "Thumbnail"
		thumb.texture = walk_sprite.sprite_frames.get_frame_texture(ANIMATION_NAME, index)
		thumb.texture_filter = CanvasItem.TEXTURE_FILTER_NEAREST
		thumb.scale = GALLERY_THUMB_SCALE
		cell.add_child(thumb)
		thumbnails.append(thumb)

		var label := Label.new()
		label.name = "FrameNumber"
		label.text = "%02d" % [index + 1]
		label.position = Vector2(-14.0, 42.0)
		label.add_theme_font_size_override("font_size", 12)
		cell.add_child(label)


func _set_playing(value: bool) -> void:
	is_playing = value
	walk_sprite.stop()
	playback_accumulator = 0.0
	_update_labels()


func _step_frame(delta: int) -> void:
	if frame_count <= 0:
		return

	_set_frame(posmod(current_frame + delta, frame_count))


func _set_frame(frame_index: int) -> void:
	if frame_count <= 0:
		return

	current_frame = clampi(frame_index, 0, frame_count - 1)
	walk_sprite.set_frame_and_progress(current_frame, 0.0)
	_update_gallery_highlight()
	_update_labels()


func _update_gallery_highlight() -> void:
	for index in range(thumbnails.size()):
		var thumb := thumbnails[index]
		var selected := index == current_frame
		thumb.modulate = Color.WHITE if selected else Color(0.45, 0.45, 0.45, 0.65)
		thumb.scale = GALLERY_THUMB_SCALE * (1.18 if selected else 1.0)
		thumb.z_index = 10 if selected else 0


func _update_labels() -> void:
	var mode := "move test" if movement_mode else ("autoplay" if is_playing else "inspect")
	frame_label.text = "Frame %02d/%02d" % [current_frame + 1, frame_count]
	status_label.text = "Mode: %s | Speed: %.0f fps" % [mode, playback_fps]
