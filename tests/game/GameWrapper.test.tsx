/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render } from "@testing-library/react";
import GameWrapper from "@/components/game/GameWrapper";
import Phaser from "phaser";
import "@testing-library/jest-dom";

// Mock expandido do Phaser para cobrir GameObjects.Container usado em PlayerSprite/EnemySprite
jest.mock("phaser", () => {
  const destroyMock = jest.fn();
  const gameMock = jest.fn().mockImplementation(() => {
    return {
      destroy: destroyMock,
    };
  });

  const ContainerMock = jest.fn().mockImplementation(function (this: any) {
    this.add = jest.fn();
    this.setPosition = jest.fn();
    this.setDepth = jest.fn();
    this.setVisible = jest.fn();
    this.visible = true;
  });

  return {
    Game: gameMock,
    __destroyMock: destroyMock,
    GameObjects: {
      Container: ContainerMock,
      Rectangle: jest.fn(),
      Text: jest.fn().mockImplementation(function (this: any) {
        this.setOrigin = jest.fn().mockReturnThis();
        this.setText = jest.fn().mockReturnThis();
        this.setScrollFactor = jest.fn().mockReturnThis();
        this.setVisible = jest.fn().mockReturnThis();
        this.setDepth = jest.fn().mockReturnThis();
      }),
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
