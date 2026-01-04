import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Course({ user }) {
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    } else {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    }
  }, [user]);

  if (currentUser === null) {
    return (
      <div className="form-container">
        <p>Caricamento...</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentUser.courses || currentUser.courses.length === 0) {
      alert("Corso non sbloccato");
      return;
    }

    const courseData = currentUser.courses.find(c => c.name === "Python Base");

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
          <p>Inserisci la password ricevuta dopo il pagamento:</p>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit" className="form-button">
              Accedi
            </button>
          </form>
        </>
      ) : (
        <>
          <h2>Corso Python Base</h2>
          <p>Benvenuto! Qui trovi il contenuto del corso.</p>
          <ul>
            <li>Lezione 1: Introduzione a Python</li>
            <li>Lezione 2: Variabili</li>
            <li>Lezione 3: Cicli</li>
            <li>Lezione 4: Funzioni</li>
            <li>Lezione 5: Progetto finale</li>
          </ul>
        </>
      )}
    </div>
  );
}

export default Course;
