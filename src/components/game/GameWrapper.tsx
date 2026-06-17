"use client";

import React, { useEffect, useRef } from "react";
import Phaser from "phaser";
import { gameConfig } from "@/lib/game/config";

export default function GameWrapper() {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gameRef.current = new Phaser.Game(gameConfig);
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      id="game-container" 
      style={{ 
        width: "1120px", 
        height: "640px", 
        margin: "0 auto", 
        background: "#000",
        borderRadius: "4px",
        border: "1px solid rgba(255, 255, 255, 0.1)"
      }} 
    />
  );
}
