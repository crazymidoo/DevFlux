import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (!res.ok) throw new Error(data.msg || "Errore nella registrazione");

      // Messaggio di conferma, senza redirect automatico
      setMsg("Registrazione completata! Ora puoi accedere.");
    } catch (err) {
      setMsg(err.message);
    }
  };

  return (
    <div className="form-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ↩ Indietro
      </button>

      <h2>Registrazione</h2>

      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="form-button">
          Registrati
        </button>
      </form>

      {msg && (
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <p
            style={{
              color: msg.toLowerCase().includes("errore") ? "red" : "green",
            }}
          >
            {msg}
          </p>

          {/* Bottone per andare al login solo se registrazione OK */}
          {!msg.toLowerCase().includes("errore") && (
            <button
              className="form-button"
              style={{ marginTop: "0.5rem" }}
              onClick={() => navigate("/login")}
            >
              Vai al login
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Register;
