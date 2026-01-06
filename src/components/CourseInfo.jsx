import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

function CourseInfo({ user }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const courses = {
    1: {
      title: "Corso Python Base",
      price: "49.00€",
      description:
        "Corso completo per imparare Python da zero, pensato sia per chi è alle prime armi sia per chi vuole consolidare le basi in modo solido e concreto. Durante il percorso, non ti perderai in concetti astratti: ogni lezione è strutturata per portarti passo dopo passo verso la creazione di codice reale e funzionante.",
      paypalLink:
        "https://www.sandbox.paypal.com/cgi-bin/webscr?" +
        "cmd=_xclick" +
        "&business=sb-62kco48523149@business.example.com" +
        "&item_name=Corso+Python+Base" +
        "&amount=49.00" +
        "&currency_code=EUR" +
        "&return=https://refactored-robot-wrrww9xw4xrgc5pqq-5173.app.github.dev/success" +
        "&cancel_return=https://refactored-robot-wrrww9xw4xrgc5pqq-5173.app.github.dev/#",
      details: [
        "Lezioni passo-passo: spiegazioni chiare e guidate per ogni concetto, dal più semplice al più avanzato.",
        "Esercizi pratici: ogni argomento è accompagnato da esercizi concreti per fissare ciò che impari.",
        "Progetto finale guidato: costruirai un progetto completo e funzionante da mostrare.",
        "Supporto via email e social per dubbi o domande.",
        "Accesso illimitato al materiale per imparare al tuo ritmo.",
      ],
      topics: [
        "Introduzione a Python: cos'è, come installarlo e configurare l'ambiente.",
        "Variabili e tipi di dati: numeri, stringhe, liste, tuple e dizionari.",
        "Operatori e espressioni: aritmetici, logici, confronto e assegnazione.",
        "Controllo di flusso: if, else, elif e cicli for/while.",
        "Funzioni e modularità: come creare funzioni, parametri e ritorni.",
        "Gestione degli errori: try, except e debugging base.",
        "File e input/output: leggere e scrivere file, interazione con l'utente.",
        "Progetto finale: costruzione di un’applicazione reale utilizzando tutto ciò che hai imparato."
      ]
    },
  };

  const course = courses[id];

  if (!course) {
    return (
      <div className="form-container">
        <h2>Corso non trovato</h2>
        <button className="back-button" onClick={() => navigate(-1)}>
          ↩ Indietro
        </button>
      </div>
    );
  }

  const handlePayPal = () => {
    window.open(course.paypalLink, "_blank");
  };

  return (
    <div className="course-container">
      <h2>{course.title}</h2>
      <p>{course.description}</p>

      {/* Nuova sezione: argomenti del corso */}
      <h3>Argomenti trattati:</h3>
      <ul>
        {course.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>

      <h3>Cosa imparerai e otterrai:</h3>
      <ul>
        {course.details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p>
        <strong>Prezzo:</strong> {course.price}
      </p>

      {user ? (
        <button className="form-button" onClick={handlePayPal}>
          Paga con PayPal
        </button>
      ) : (
        <div>
          <p style={{ color: "red", marginBottom: "1rem" }}>
            Devi registrarti o fare login prima di acquistare il corso.
          </p>
          <button
            className="form-button"
            onClick={() => navigate("/login")}
          >
            Vai al Login / Registrazione
          </button>
        </div>
      )}

      <button className="back-button" onClick={() => navigate(-1)}>
        ↩ Indietro
      </button>
    </div>
  );
}

export default CourseInfo;
