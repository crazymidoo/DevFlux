import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://expert-system-v66xxgwx5jw9hxrrj-5000.app.github.dev/register",
    {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    }
);


      const data = await res.json();
      if (!res.ok) throw new Error(data.msg);
      setMsg("Registrazione completata! Ora puoi fare login.");
    } catch (err) {
      setMsg(err.message);
    }
  };

  return (
    <div className="form-container">
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
        <button type="submit">Registrati</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default Register;
