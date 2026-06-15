import Phaser from 'phaser';
import { eventBridge } from '../event-bridge';

export default class PauseScene extends Phaser.Scene {
  constructor() {
    super('PauseScene');
  }

  create() {
    const { width, height } = this.scale;

    // Overlay escuro
    this.add.rectangle(width / 2, height / 2, width, height, 0x000000, 0.7);

    this.add.text(width / 2, height / 2 - 40, 'PAUSADO', {
      fontFamily: 'monospace',
      fontSize: '32px',
      color: '#f1f5f9',
      fontStyle: 'bold',
    }).setOrigin(0.5);

    this.add.text(width / 2, height / 2 + 20, 'Pressione ESC para continuar', {
      fontFamily: 'monospace',
      fontSize: '14px',
      color: '#94a3b8',
    }).setOrigin(0.5);

    if (this.input.keyboard) {
      const escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
      escKey.on('down', () => {
        this.scene.resume('GameScene');
        this.scene.stop();
      });
    }
  }

  shutdown() {
    // Emitir evento de resume se necessário
    eventBridge.emit('game:resume');
  }
}
