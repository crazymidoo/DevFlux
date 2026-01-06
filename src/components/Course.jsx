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

  // Se utente non loggato, mostra messaggio chiaro
  if (currentUser === null) {
    return (
      <div className="form-container">
        <h2>Accesso al corso</h2>
        <p>Devi effettuare il login per poter accedere al corso.</p>
        <button className="form-button" onClick={() => navigate("/login")}>
          Vai al login
        </button>
        <button className="back-button" onClick={() => navigate(-1)}>
          ↩ Indietro
        </button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentUser.courses || currentUser.courses.length === 0) {
      alert("Corso non sbloccato. Completa il pagamento per ottenere la password.");
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
  <p>
    Benvenuto! Questo corso ti guiderà passo dopo passo nell'apprendimento di Python, dal primo codice fino a creare progetti concreti che funzionano davvero. È pensato sia per chi è alle prime armi sia per chi vuole consolidare le basi in modo solido.
  </p>
  <ul>
    <li><strong>Lezione 1:</strong> Introduzione a Python – scopri cos'è Python, come installarlo e scrivere i primi programmi funzionanti.</li>
    <li><strong>Lezione 2:</strong> Variabili e tipi di dati – impara a memorizzare informazioni, lavorare con numeri, stringhe e liste in maniera pratica.</li>
    <li><strong>Lezione 3:</strong> Cicli e condizioni – crea logiche dinamiche per automatizzare operazioni e prendere decisioni nel tuo codice.</li>
    <li><strong>Lezione 4:</strong> Funzioni e modularità – organizza il codice in pezzi riutilizzabili e comprensibili, proprio come fanno gli sviluppatori professionisti.</li>
    <li><strong>Lezione 5:</strong> Progetto finale guidato – applica tutto ciò che hai imparato costruendo un progetto reale, pronto da mostrare e utilizzare.</li>
  </ul>
  <p>
    Con questo corso riceverai anche esercizi pratici per consolidare ogni argomento, supporto via email per ogni dubbio e accesso illimitato al materiale, così da poter imparare al tuo ritmo. In poche parole: impari ciò che conta davvero, senza perdere tempo in concetti inutili!
  </p>
</>

      )}
    </div>
  );
}

export default Course;
