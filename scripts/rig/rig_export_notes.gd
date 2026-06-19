extends Node
class_name AntonioRafaelRigExportNotes

const TARGET_FRAME_SIZE := Vector2i(128, 128)
const IDLE_REFERENCE_ROOT := "res://assets/characters/antonio_rafael/sprites/idle/"
const RIG_ROOT := "res://assets/characters/antonio_rafael/rig/"
const RIG_PARTS_ROOT := "res://assets/characters/antonio_rafael/rig/parts/"
const RIG_EXPORT_ROOT := "res://assets/characters/antonio_rafael/rig/exports/"

const REQUIRED_PARTS := [
    "head",
    "neck",
    "torso",
    "vest",
    "backpack",
    "upper_arm_left",
    "upper_arm_right",
    "forearm_left",
    "forearm_right",
    "hand_left",
    "hand_right",
    "hips",
    "thigh_left",
    "thigh_right",
    "shin_left",
    "shin_right",
    "boot_left",
    "boot_right",
]

const EXPORT_CHECKLIST := [
    "Use Base Idle Oficial V1 as the visual master reference.",
    "Animate the technical rig in an isolated lab scene only.",
    "Export final sprites as individual PNG files.",
    "Keep every exported frame at 128x128 pixels.",
    "Keep every exported frame in PNG RGBA with real transparency.",
    "Validate visible leg and arm alternation before Godot integration.",
    "Require human approval before updating Player.tscn.",
]

func get_export_summary() -> Dictionary:
    return {
        "target_frame_size": TARGET_FRAME_SIZE,
        "idle_reference_root": IDLE_REFERENCE_ROOT,
        "rig_root": RIG_ROOT,
        "rig_parts_root": RIG_PARTS_ROOT,
        "rig_export_root": RIG_EXPORT_ROOT,
        "required_parts": REQUIRED_PARTS,
        "export_checklist": EXPORT_CHECKLIST,
    }
