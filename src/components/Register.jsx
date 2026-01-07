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

      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Errore nella registrazione");

      setMsg("Registrazione completata! Ora puoi accedere.");
      setTimeout(() => navigate("/login"), 1500);
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
        <p
          style={{
            marginTop: "1rem",
            color: msg.toLowerCase().includes("errore") ? "red" : "green",
            textAlign: "center",
          }}
        >
          {msg}
        </p>
      )}
    </div>
  );
}

export default Register;
