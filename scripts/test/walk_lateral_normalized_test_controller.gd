extends Node2D

const RIGHT_ANIMATION := &"walk_right_24f_normalized"
const LEFT_ANIMATION := &"walk_left_24f_normalized"

@onready var right_sprite: AnimatedSprite2D = $RightPanel/WalkRightNormalized
@onready var left_sprite: AnimatedSprite2D = $LeftPanel/WalkLeftNormalized
@onready var right_label: Label = $CanvasLayer/RightFrameLabel
@onready var left_label: Label = $CanvasLayer/LeftFrameLabel
@onready var status_label: Label = $CanvasLayer/StatusLabel

func _ready() -> void:
	right_sprite.animation = RIGHT_ANIMATION
	left_sprite.animation = LEFT_ANIMATION
	right_sprite.play(RIGHT_ANIMATION)
	left_sprite.play(LEFT_ANIMATION)
	_update_labels()

func _process(_delta: float) -> void:
	_update_labels()

func _update_labels() -> void:
	var right_count := right_sprite.sprite_frames.get_frame_count(RIGHT_ANIMATION)
	var left_count := left_sprite.sprite_frames.get_frame_count(LEFT_ANIMATION)
	right_label.text = "Right-facing normalized: Frame %02d/%02d" % [right_sprite.frame + 1, right_count]
	left_label.text = "Left-facing normalized: Frame %02d/%02d" % [left_sprite.frame + 1, left_count]
	status_label.text = "Experimental walk lab only | 12 FPS | autoplay | no Player integration"
