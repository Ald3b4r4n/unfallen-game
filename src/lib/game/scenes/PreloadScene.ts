import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    // Assets placeholders podem ser carregados futuramente aqui
  }

  create() {
    this.scene.start("MenuScene");
  }
}
