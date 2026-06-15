import Phaser from 'phaser';
import { toScreen } from '../isometric/iso-math';
import { InteractableData } from '../systems/interaction';

const TILE_WIDTH = 64;
const TILE_HEIGHT = 32;

export default class InteractableSprite extends Phaser.GameObjects.Container {
  public interactableData: InteractableData;
  private bodyRect: Phaser.GameObjects.Rectangle;
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

    this.bodyRect = scene.add.rectangle(0, 0, 12, 12, color);
    this.add(this.bodyRect);

    this.label = scene.add.text(0, -12, interactable.item.type.charAt(0).toUpperCase(), {
      fontFamily: 'monospace',
      fontSize: '9px',
      color: '#ffffff',
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

  /** Marca como coletado e oculta. */
  markCollected() {
    this.interactableData = { ...this.interactableData, collected: true };
    this.setVisible(false);
  }
}

