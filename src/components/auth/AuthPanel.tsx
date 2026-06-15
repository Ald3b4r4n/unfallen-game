"use client";

import React, { useState, useEffect } from "react";
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  User 
} from "firebase/auth";
import { auth } from "@/lib/firebase/client";

export default function AuthPanel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(!!auth);
  const [error, setError] = useState<string | null>(null);
  const [apiData, setApiData] = useState<{ uid: string; email: string } | null>(null);

  // Monitora o estado de autenticação do Firebase
  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (!currentUser) {
        setApiData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Efetua login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (!auth) {
      setError("Autenticação indisponível no momento.");
      setLoading(false);
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
      setError("Falha na autenticação: E-mail ou senha inválidos.");
    } finally {
      setLoading(false);
    }
  };

  // Efetua logout (limpa estado do cliente)
  const handleLogout = async () => {
    setLoading(true);
    if (!auth) {
      setError("Autenticação indisponível no momento.");
      setLoading(false);
      return;
    }
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
      setError("Erro ao sair da sessão.");
    } finally {
      setLoading(false);
    }
  };

  // Testa a chamada da API protegida /api/user/me
  const fetchMe = async () => {
    if (!user) return;
    setError(null);
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Resposta inválida do servidor.");
      }

      const data = await res.json();
      setApiData(data.user);
    } catch (err) {
      console.error(err);
      setError("Erro ao obter dados protegidos da API.");
    }
  };

  if (loading) {
    return (
      <div style={{ color: "var(--text-muted)", padding: "2rem", textAlign: "center" }}>
        Carregando sessão...
      </div>
    );
  }

  return (
    <div 
      className="auth-card" 
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border-color)",
        padding: "2rem",
        borderRadius: "8px",
        width: "100%",
        maxWidth: "400px",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
      }}
    >
      {user ? (
        <div id="auth-success-panel">
          <div className="badge" style={{ marginBottom: "1rem" }}>Autenticado</div>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Antônio Rafael</h2>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
            E-mail: {user.email}
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--accent)", marginBottom: "1.5rem", wordBreak: "break-all" }}>
            UID: {user.uid}
          </p>

          <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
            <button 
              className="btn btn-primary" 
              onClick={fetchMe} 
              id="btn-test-api"
              style={{ width: "100%" }}
            >
              Testar Endpoint Protegido
            </button>

            {apiData && (
              <div 
                style={{ 
                  background: "rgba(255,255,255,0.03)", 
                  padding: "1rem", 
                  borderRadius: "4px", 
                  border: "1px solid var(--border-color)",
                  fontSize: "0.85rem"
                }}
              >
                <strong>Dados da API:</strong>
                <p>UID validado: {apiData.uid}</p>
                <p>E-mail validado: {apiData.email}</p>
              </div>
            )}

            <button 
              className="btn btn-secondary" 
              onClick={handleLogout} 
              id="btn-auth-logout"
              style={{ width: "100%", marginTop: "0.5rem" }}
            >
              Sair da Conta (Logout)
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleLogin} id="auth-login-form">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem", textAlign: "center" }}>
            Login do Sobrevivente
          </h2>

          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
              E-mail corporativo
            </label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              id="auth-input-email"
              style={{
                width: "100%",
                padding: "0.75rem",
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid var(--border-color)",
                borderRadius: "4px",
                color: "#fff",
                outline: "none"
              }}
              placeholder="exemplo@unfallen.com"
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
              Senha de acesso
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              id="auth-input-password"
              style={{
                width: "100%",
                padding: "0.75rem",
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid var(--border-color)",
                borderRadius: "4px",
                color: "#fff",
                outline: "none"
              }}
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            id="btn-auth-login"
            style={{ width: "100%" }}
          >
            Entrar no Plantão
          </button>
        </form>
      )}

      {error && (
        <div 
          id="auth-error-message"
          style={{ 
            marginTop: "1rem", 
            color: "#feb2b2", 
            fontSize: "0.85rem", 
            textAlign: "center",
            background: "rgba(229, 62, 62, 0.15)",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid rgba(229, 62, 62, 0.3)"
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
}
