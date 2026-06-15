/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render } from "@testing-library/react";
import GameWrapper from "@/components/game/GameWrapper";
import Phaser from "phaser";
import "@testing-library/jest-dom";

// Mock do Phaser
jest.mock("phaser", () => {
  const destroyMock = jest.fn();
  const gameMock = jest.fn().mockImplementation(() => {
    return {
      destroy: destroyMock,
    };
  });

  return {
    Game: gameMock,
    __destroyMock: destroyMock, // Referência para verificação
    Events: {
      EventEmitter: jest.fn().mockImplementation(() => {
        return {
          on: jest.fn(),
          emit: jest.fn(),
          off: jest.fn(),
        };
      }),
    },
    Scene: jest.fn().mockImplementation(function (this: any) {
      this.init = jest.fn();
      this.preload = jest.fn();
      this.create = jest.fn();
      this.update = jest.fn();
    }),
  };
});

describe("GameWrapper Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renderiza o contêiner com id game-container", () => {
    const { container } = render(<GameWrapper />);
    const div = container.querySelector("#game-container");
    expect(div).toBeInTheDocument();
  });

  it("instancia Phaser.Game somente no ambiente do cliente", () => {
    render(<GameWrapper />);
    expect(Phaser.Game).toHaveBeenCalledTimes(1);
    
    const config = (Phaser.Game as jest.Mock).mock.calls[0][0];
    expect(config.parent).toBe("game-container");
  });

  it("chama o método destroy(true) no unmount do componente", () => {
    const { unmount } = render(<GameWrapper />);
    unmount();
    
    const destroyMock = (Phaser as any).__destroyMock;
    expect(destroyMock).toHaveBeenCalledTimes(1);
    expect(destroyMock).toHaveBeenCalledWith(true);
  });
});
