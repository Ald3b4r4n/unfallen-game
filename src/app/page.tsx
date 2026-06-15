"use client";

import React from "react";
import AuthPanel from "@/components/auth/AuthPanel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="app-container">
      <header>
        <div className="logo" id="logo-branding">
          Unfallen <span className="logo-dot" aria-hidden="true"></span>
        </div>
        <nav className="nav-links">
          <a href="#about" id="nav-link-about">Sobre o Projeto</a>
          <a href="#features" id="nav-link-features">Recursos</a>
          <a href="#roadmap" id="nav-link-roadmap">Roadmap</a>
          <a href="#docs" id="nav-link-docs">Documentação</a>
          <a
            href="https://github.com"
            className="btn btn-secondary"
            id="nav-link-repo"
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.8rem", textTransform: "uppercase" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositório
          </a>
        </nav>
      </header>

      <main>
        <div className="hero-layout">
          <div className="hero-left">
            <span className="badge" id="badge-chapter">MVP — Capítulo 1: Plantão Final</span>
            <h1 className="title" id="main-hero-title">
              Sobreviva ao Colapso.
              <br />
              Encontre sua <span className="highlight">Família</span>.
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
                <span>📻</span> Jogar Demo
              </button>
              <a
                href="https://github.com"
                className="btn btn-secondary"
                id="btn-learn-more"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>📁</span> Ver Projeto
              </a>
            </div>
          </div>

          <div className="hero-right">
            <AuthPanel />
          </div>
        </div>

        <section className="features-grid" id="game-features-section">
          <div className="feature-card" id="card-isometric">
            <div className="feature-image-container">
              <Image 
                src="/assets/unfallen/generated/card-isometric-engine.png" 
                alt="Motor Isométrico 2.5D" 
                width={400} 
                height={140}
                priority
              />
            </div>
            <div className="feature-content">
              <h2 className="feature-title">Motor Isométrico 2.5D</h2>
              <p className="feature-desc">
                Construído sobre o Phaser 3 com depth-sorting dinâmico por Y, colisor físico 
                de Arcade Physics nos pés e projeção matemática 2:1.
              </p>
            </div>
          </div>

          <div className="feature-card" id="card-persistence">
            <div className="feature-image-container">
              <Image 
                src="/assets/unfallen/generated/card-cloud-save.png" 
                alt="Save Híbrido Seguro" 
                width={400} 
                height={140}
              />
            </div>
            <div className="feature-content">
              <h2 className="feature-title">Save Híbrido Seguro</h2>
              <p className="feature-desc">
                Persistência redundante em nuvem com MongoDB Atlas M0 (indexado e validado server-side 
                via Firebase Admin SDK) com fallback offline para LocalStorage.
              </p>
            </div>
          </div>

          <div className="feature-card" id="card-narrative">
            <div className="feature-image-container">
              <Image 
                src="/assets/unfallen/generated/card-patrol-combat.png" 
                alt="Luta e Patrulha" 
                width={400} 
                height={140}
              />
            </div>
            <div className="feature-content">
              <h2 className="feature-title">Luta e Patrulha</h2>
              <p className="feature-desc">
                Gerenciamento estrito de estamina, bateria de lanternas, contagem limitada de munição 
                e pistas narrativas integradas ao inventário.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p id="footer-branding">SANTA AMÉLIA - ZONA OESTE | BASE OPERACIONAL 01</p>
        <p className="footer-quote">&quot;A esperança não é um plano. Mas é o que ainda nos mantém de pé.&quot;</p>
        <p id="footer-text">&copy; {new Date().getFullYear()} Unfallen. Desenvolvido sob especificações de governança SDD Master.</p>
      </footer>
    </div>
  );
}
