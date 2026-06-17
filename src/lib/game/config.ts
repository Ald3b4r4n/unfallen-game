import Phaser from "phaser";
import BootScene from "./scenes/BootScene";
import PreloadScene from "./scenes/PreloadScene";
import MenuScene from "./scenes/MenuScene";
import GameScene from "./scenes/GameScene";
import UIScene from "./scenes/UIScene";
import PauseScene from "./scenes/PauseScene";

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: typeof window !== "undefined" ? Phaser.AUTO : Phaser.HEADLESS,
  width: 1120,
  height: 640,
  parent: "game-container",
  pixelArt: true,
  scene: [BootScene, PreloadScene, MenuScene, GameScene, UIScene, PauseScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: false,
    },
  },
};
