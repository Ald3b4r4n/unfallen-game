/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-function-type, @typescript-eslint/no-unused-vars */
import { eventBridge } from "@/lib/game/event-bridge";
import { gameConfig } from "@/lib/game/config";
import Phaser from "phaser";

// Mock expandido do Phaser para cobrir GameObjects.Container, Input.Keyboard, etc.
jest.mock("phaser", () => {
  const ContainerMock = jest.fn().mockImplementation(function (this: any) {
    this.add = jest.fn();
    this.setPosition = jest.fn();
    this.setDepth = jest.fn();
    this.setVisible = jest.fn();
    this.visible = true;
  });

  const RectangleMock = jest.fn().mockImplementation(function (this: any) {
    this.setFillStyle = jest.fn();
  });

  const TextMock = jest.fn().mockImplementation(function (this: any) {
    this.setOrigin = jest.fn().mockReturnThis();
    this.setText = jest.fn().mockReturnThis();
    this.setScrollFactor = jest.fn().mockReturnThis();
    this.setVisible = jest.fn().mockReturnThis();
    this.setDepth = jest.fn().mockReturnThis();
  });

  return {
    AUTO: 0,
    HEADLESS: 1,
    Game: jest.fn(),
    GameObjects: {
      Container: ContainerMock,
      Rectangle: RectangleMock,
      Text: TextMock,
    },
    Input: {
      Keyboard: {
        KeyCodes: {
          W: 87, A: 65, S: 83, D: 68,
          SPACE: 32, E: 69, F: 70, Q: 81, ESC: 27, R: 82,
        },
        JustDown: jest.fn().mockReturnValue(false),
      },
    },
    Math: {
      Vector2: jest.fn().mockImplementation((x: number, y: number) => ({ x, y })),
    },
    Events: {
      EventEmitter: jest.fn().mockImplementation(() => {
        const listeners: Record<string, Function[]> = {};
        return {
          on: jest.fn((event: string, callback: Function) => {
            if (!listeners[event]) listeners[event] = [];
            listeners[event].push(callback);
          }),
          emit: jest.fn((event: string, ...args: any[]) => {
            if (listeners[event]) {
              listeners[event].forEach(cb => cb(...args));
            }
          }),
          off: jest.fn((event: string, callback: Function) => {
            if (listeners[event]) {
              listeners[event] = listeners[event].filter(cb => cb !== callback);
            }
          }),
        };
      }),
    },
    Scene: jest.fn().mockImplementation(function (this: any, config: any) {
      this.key = typeof config === "string" ? config : config?.key;
    }),
  };
});

describe("Phaser Config & Event Bridge", () => {
  it("configuração contém as propriedades e cenas necessárias", () => {
    expect(gameConfig).toBeDefined();
    expect(gameConfig.type).toBeDefined();
    expect(gameConfig.parent).toBe("game-container");
    expect(gameConfig.scene).toBeInstanceOf(Array);
    // Deve conter todas as cenas do bloco 04
    expect(gameConfig.scene?.length).toBeGreaterThanOrEqual(6);
  });

  it("eventBridge emite e escuta eventos de teste com sucesso", () => {
    const callback = jest.fn();
    
    // Inscreve no evento
    eventBridge.on("test-event", callback);
    
    // Dispara o evento
    eventBridge.emit("test-event", { data: "success" });
    
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith({ data: "success" });
    
    // Remove o listener
    eventBridge.off("test-event", callback);
    eventBridge.emit("test-event", { data: "fail" });
    
    expect(callback).toHaveBeenCalledTimes(1); // Continua 1 porque foi removido
  });
});
