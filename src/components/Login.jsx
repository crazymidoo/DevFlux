import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://expert-system-v66xxgwx5jw9hxrrj-5000.app.github.dev/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.msg);

      // 🔐 utente loggato
      const loggedUser = {
        email,
        courses: data.courses || [],
      };

      // ✅ SALVA IN LOCALSTORAGE (FONDAMENTALE PER PAYPAL)
      localStorage.setItem("user", JSON.stringify(loggedUser));

      // ✅ SALVA IN STATO REACT
      setUser(loggedUser);

      navigate("/");
    } catch (err) {
      setMsg(err.message);
    }
  };

  return (
    <div className="form-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ↩ Indietro
      </button>

      <h2>Login</h2>

      <form onSubmit={handleLogin}>
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
          Accedi
        </button>
      </form>

      {msg && <p style={{ color: "red" }}>{msg}</p>}
    </div>
  );
}

export default Login;
