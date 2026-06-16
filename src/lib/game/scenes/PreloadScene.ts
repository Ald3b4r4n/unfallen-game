import Phaser from "phaser";
import { PRELOAD_GAME_ASSETS } from "../config/asset-keys";

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    for (const asset of PRELOAD_GAME_ASSETS) {
      this.load.image(asset.key, asset.path);
    }
  }

  create() {
    this.scene.start("MenuScene");
  }
}
