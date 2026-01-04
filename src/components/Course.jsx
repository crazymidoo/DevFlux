import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Course({ user }) {
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || !user.courses) {
      alert("Utente non loggato o corso non sbloccato!");
      navigate("/login");
      return;
    }

    const courseData = user.courses.find(c => c.name === "Python Base");
    if (courseData && password === courseData.password) {
      setAccessGranted(true);
    } else {
      alert("Password errata!");
    }
  };

  return (
    <div className="form-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ↩ Indietro
      </button>

      {!accessGranted ? (
        <>
          <h2>Accesso al Corso Python Base</h2>
          <p>Inserisci la password che hai ricevuto dopo il pagamento:</p>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button type="submit" className="form-button">
              Accedi
            </button>
          </form>
        </>
      ) : (
        <>
          <h2>Corso Python Base</h2>
          <p>Benvenuto! Qui troverai tutte le lezioni, esercizi e materiali del corso.</p>
          <ul>
            <li>Lezione 1: Introduzione a Python</li>
            <li>Lezione 2: Variabili e tipi di dati</li>
            <li>Lezione 3: Cicli e condizionali</li>
            <li>Lezione 4: Funzioni</li>
            <li>Lezione 5: Progetto finale</li>
          </ul>
        </>
      )}
    </div>
  );
}

export default Course;
