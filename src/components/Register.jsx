import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

// → Assicurati che questo punti al tuo backend, senza slash finale
const BASE_URL = "https://psychic-palm-tree-r44jjrwjx5wvhwpp6-5000.app.github.dev";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // Leggiamo il testo e facciamo parse solo se è JSON
      const text = await res.text();
      let data;
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        throw new Error("Errore: il backend non ha risposto con JSON");
      }

      if (!res.ok) throw new Error(data.msg || "Errore nella registrazione");

      setMsg("Registrazione completata! Ora puoi fare login.");
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

      {msg && <p style={{ color: msg.includes("Errore") ? "red" : "green" }}>{msg}</p>}
    </div>
  );
}

export default Register;
