import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const BASE_URL = "https://vigilant-tribble-699jjrwjpxv52rgr6-5000.app.github.dev";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (!res.ok) throw new Error(data.msg || "Errore nel login");

      const loggedUser = { email, courses: data.courses || [] };
      localStorage.setItem("user", JSON.stringify(loggedUser));
      setUser(loggedUser);
      navigate("/");
    } catch (err) {
      setMsg(err.message);
    }
  };

  return (
    <div className="form-container">
      <button className="back-button" onClick={() => navigate(-1)}>↩ Indietro</button>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit" className="form-button">Accedi</button>
      </form>
      {msg && <p style={{ color: "red" }}>{msg}</p>}
    </div>
  );
}

export default Login;
