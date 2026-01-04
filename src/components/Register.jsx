import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const BASE_URL = "https://vigilant-tribble-699jjrwjpxv52rgr6-5000.app.github.dev/";

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

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (!res.ok) throw new Error(data.msg || "Errore nella registrazione");

      setMsg("Registrazione completata! Ora puoi fare login.");
    } catch (err) {
      setMsg(err.message);
    }
  };

  return (
    <div className="form-container">
      <button className="back-button" onClick={() => navigate(-1)}>↩ Indietro</button>
      <h2>Registrazione</h2>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit" className="form-button">Registrati</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default Register;
