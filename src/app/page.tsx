"use client";

import React from "react";
import AuthPanel from "@/components/auth/AuthPanel";

export default function Home() {
  return (
    <div className="app-container">
      <header>
        <div className="logo" id="logo-branding">
          Unfallen <span className="logo-dot" aria-hidden="true"></span>
        </div>
        <nav>
          <a
            href="https://github.com"
            className="btn btn-secondary"
            id="nav-link-docs"
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.9rem" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositório
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span className="badge" id="badge-chapter">MVP — Capítulo 1: Plantão Final</span>
          <h1 className="title" id="main-hero-title">
            Sobreviva ao Colapso.
            <br />
            Encontre sua Família.
          </h1>
          <p className="subtitle" id="main-hero-subtitle">
            Unfallen é uma experiência isométrica narrativa de sobrevivência 2.5D. 
            Controle o sargento Antônio Rafael em sua travessia em busca de sua filha 
            Luísa em um cenário urbano tomado pelo surto infectado.
          </p>
          <div className="cta-container">
            <button
              className="btn btn-primary"
              id="btn-play-game"
              onClick={() => alert("O runtime do Phaser está em fase de planejamento e será implementado nos próximos blocos.")}
            >
              Jogar Demo (Em Breve)
            </button>
            <a
              href="https://vercel.com"
              className="btn btn-secondary"
              id="btn-learn-more"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel Staging
            </a>
          </div>

          <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", width: "100%" }}>
            <AuthPanel />
          </div>
        </section>


        <section className="features-grid" id="game-features-section">
          <div className="feature-card" id="card-isometric">
            <div className="feature-icon" aria-hidden="true">📐</div>
            <h2 className="feature-title">Motor Isométrico 2.5D</h2>
            <p className="feature-desc">
              Construído sobre o Phaser 3 com depth-sorting dinâmico por Y, colisor físico 
              de Arcade Physics nos pés e projeção matemática 2:1.
            </p>
          </div>

          <div className="feature-card" id="card-persistence">
            <div className="feature-icon" aria-hidden="true">💾</div>
            <h2 className="feature-title">Save Híbrido Seguro</h2>
            <p className="feature-desc">
              Persistência redundante em nuvem com MongoDB Atlas M0 (indexado e validado server-side 
              via Firebase Admin SDK) com fallback offline para LocalStorage.
            </p>
          </div>

          <div className="feature-card" id="card-narrative">
            <div className="feature-icon" aria-hidden="true">📻</div>
            <h2 className="feature-title">Luta e Patrulha</h2>
            <p className="feature-desc">
              Gerenciamento estrito de estamina, bateria de lanternas, contagem limitada de munição 
              e pistas narrativas integradas ao inventário.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p id="footer-text">&copy; {new Date().getFullYear()} Unfallen. Desenvolvido sob especificações de governança SDD Master.</p>
      </footer>
    </div>
  );
}
