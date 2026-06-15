/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-function-type, @typescript-eslint/no-unused-vars */
import { eventBridge } from "@/lib/game/event-bridge";
import { gameConfig } from "@/lib/game/config";
import Phaser from "phaser";

// Mock do Phaser para as cenas e config
jest.mock("phaser", () => {
  return {
    AUTO: 0,
    HEADLESS: 1,
    Game: jest.fn(),
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
