import Phaser from "phaser";

class EventBridge extends Phaser.Events.EventEmitter {
  constructor() {
    super();
  }
}

export const eventBridge = new EventBridge();
