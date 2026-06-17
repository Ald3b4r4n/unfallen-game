import Phaser from 'phaser';
import { toScreen } from '../isometric/iso-math';
import { GAME_ASSETS } from '../config/asset-keys';
import { InteractableData } from '../systems/interaction';

const TILE_WIDTH = 64;
const TILE_HEIGHT = 32;

export default class InteractableSprite extends Phaser.GameObjects.Container {
  public interactableData: InteractableData;
  private visualBody: Phaser.GameObjects.Image | Phaser.GameObjects.Polygon | Phaser.GameObjects.Rectangle;
  private label: Phaser.GameObjects.Text;

  private static TYPE_COLORS: Record<string, number> = {
    ammo: 0xfbbf24,     // amarelo
    battery: 0x60a5fa,   // azul
    healing: 0x34d399,   // verde
    key: 0xf472b6,       // rosa
    note: 0xa78bfa,      // roxo
  };

  constructor(scene: Phaser.Scene, interactable: InteractableData) {
    super(scene, 0, 0);

    this.interactableData = interactable;

    const color = InteractableSprite.TYPE_COLORS[interactable.item.type] || 0xffffff;
    const shadow = scene.add.ellipse(0, 5, 18, 8, 0x000000, 0.36);
    this.add(shadow);

    const glow = scene.add.ellipse(0, 0, 24, 14, color, 0.18)
      .setBlendMode(Phaser.BlendModes.ADD);
    this.add(glow);

    const assetKey = this.getAssetKey(interactable);
    if (assetKey && scene.textures.exists(assetKey)) {
      this.visualBody = scene.add.image(0, -2, assetKey)
        .setOrigin(0.5, 0.75)
        .setScale(this.getAssetScale(interactable));
    } else if (interactable.item.type === 'note') {
      this.visualBody = scene.add.polygon(
        0,
        -2,
        [-6, 0, 0, -5, 6, 0, 0, 5],
        color,
        0.92
      ).setStrokeStyle(1, 0xf8fafc, 0.7);
    } else {
      this.visualBody = scene.add.rectangle(0, -2, 10, 10, color, 0.88)
        .setStrokeStyle(1, 0xf8fafc, 0.65);
    }

    this.add(this.visualBody);

    this.label = scene.add.text(0, -16, 'E', {
      fontFamily: 'monospace',
      fontSize: '9px',
      color: '#e2e8f0',
      backgroundColor: '#0f172a',
      padding: { left: 3, right: 3, top: 1, bottom: 1 },
    }).setOrigin(0.5);
    this.add(this.label);

    scene.add.existing(this);
    this.updateScreenPosition();
  }

  private updateScreenPosition() {
    const screen = toScreen(
      { x: this.interactableData.posX, y: this.interactableData.posY, z: 0 },
      TILE_WIDTH,
      TILE_HEIGHT
    );
    this.setPosition(screen.x, screen.y);
  }

  private getAssetKey(interactable: InteractableData): string | null {
    if (interactable.item.type === 'battery') return GAME_ASSETS.ui.battery.key;
    if (interactable.item.type === 'healing') return GAME_ASSETS.ui.health.key;
    if (interactable.id === 'note-backpack') return GAME_ASSETS.props.marketCrates.key;
    if (interactable.id === 'note-diary') return GAME_ASSETS.props.brokenDoor.key;
    return null;
  }

  private getAssetScale(interactable: InteractableData): number {
    if (interactable.item.type === 'battery') return 0.42;
    if (interactable.item.type === 'healing') return 0.4;
    if (interactable.item.type === 'note') return 0.065;
    return 0.1;
  }

  /** Marca como coletado e oculta. */
  markCollected() {
    this.interactableData = { ...this.interactableData, collected: true };
    this.setVisible(false);
  }
}
