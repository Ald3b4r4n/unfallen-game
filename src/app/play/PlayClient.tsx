"use client";

import React from "react";
import dynamic from "next/dynamic";

// Carregamento dinâmico do wrapper com SSR desativado
const GameWrapper = dynamic(() => import("@/components/game/GameWrapper"), {
  ssr: false,
  loading: () => (
    <div 
      style={{ 
        width: "800px", 
        height: "600px", 
        margin: "0 auto", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        background: "#000",
        color: "var(--text-muted)",
        fontFamily: "monospace",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "4px"
      }}
    >
      INICIALIZANDO MOTOR GRÁFICO PHASER...
    </div>
  ),
});

export default function PlayClient() {
  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <GameWrapper />
    </div>
  );
}
