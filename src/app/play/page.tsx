import React from "react";
import PlayClient from "./PlayClient";
import Link from "next/link";

export const metadata = {
  title: "Unfallen - Play",
  description: "Canal de execução do motor gráfico do jogo Unfallen.",
};

export default function PlayPage() {
  return (
    <div className="app-container" style={{ minHeight: "100vh", background: "#0d0e12" }}>
      <header>
        <div className="logo" id="logo-branding">
          Unfallen <span className="logo-dot" aria-hidden="true"></span>
        </div>
        <nav className="nav-links">
          <Link href="/">Voltar ao Menu</Link>
        </nav>
      </header>

      <main style={{ padding: "0.75rem 1rem" }}>
        <PlayClient />
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Unfallen. Desenvolvido por AR Games Development.</p>
      </footer>
    </div>
  );
}
