import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Course() {
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const navigate = useNavigate();

  const correctPassword = "1234"; // password temporanea

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAccessGranted(true);
    } else {
      alert("Password errata!");
    }
  };

  return (
    <div className="form-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ↩  Indietro
      </button>

      {!accessGranted ? (
        <div>
          <h1>Accesso al Corso Python Base</h1>
          <p>Inserisci la password che hai ricevuto dopo il pagamento:</p>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
                className="course-container"
            />
            <button type="submit" className="form-button" style={{ padding: "0.75rem 1.5rem", fontWeight: 600 }}>
              Accedi
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h1>Corso Python Base</h1>
          <p>Benvenuto! Qui troverai tutte le lezioni, esercizi e materiali del corso.</p>
          <ul>
            <li>Lezione 1: Introduzione a Python</li>
            <li>Lezione 2: Variabili e tipi di dati</li>
            <li>Lezione 3: Cicli e condizionali</li>
            <li>Lezione 4: Funzioni</li>
            <li>Lezione 5: Progetto finale</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Course;
