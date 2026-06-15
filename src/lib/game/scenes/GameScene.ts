import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    const { width } = this.scale;

    this.add.text(width / 2, 120, "UNFALLEN", {
      fontFamily: "monospace",
      fontSize: "36px",
      color: "#feb2b2"
    }).setOrigin(0.5);

    this.add.text(width / 2, 200, "PHASER RUNTIME ONLINE", {
      fontFamily: "monospace",
      fontSize: "20px",
      color: "#38a169"
    }).setOrigin(0.5);

    this.add.text(width / 2, 250, "BLOCO 04 — RUNTIME PLACEHOLDER", {
      fontFamily: "monospace",
      fontSize: "16px",
      color: "#a0aec0"
    }).setOrigin(0.5);

    this.add.text(width / 2, 300, "CENA ATUAL: GameScene", {
      fontFamily: "monospace",
      fontSize: "14px",
      color: "#cbd5e1"
    }).setOrigin(0.5);

    this.add.text(width / 2, 480, "[ Pressione ESC para pausa futuramente ]", {
      fontFamily: "monospace",
      fontSize: "12px",
      color: "#718096"
    }).setOrigin(0.5);
  }
}
