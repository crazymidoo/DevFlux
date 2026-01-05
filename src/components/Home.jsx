// src/components/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home({ user, setUser }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);       // rimuove l'utente
    localStorage.removeItem("user"); // opzionale: rimuove anche dal localStorage
    setOpen(false);      // chiude il dropdown
    navigate("/");       // torna alla home
  };

  const courses = [
    { id: 1, title: "Corso Python Base", link: "/course" }
  ];

  return (
    <>
      <header>
  <span className="logo">DevFlux</span>
  <nav>
    <a
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Home
    </a>
    <a
      href="#about"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Chi siamo
    </a>
    <a
      href="#corsi"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("corsi")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Corsi
    </a>
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Contatti
    </a>

    {user ? (
      <div className="user-menu">
        <button className="user-email" onClick={() => setOpen(!open)}>
          {user.email}
        </button>
        {open && (
          <div className="dropdown">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    ) : (
      <div className="nav-buttons">
        <button onClick={() => navigate("/register")}>Registrati</button>
        <button onClick={() => navigate("/login")}>Accedi</button>
      </div>
    )}
  </nav>
</header>


      <div className="home-container" id="home">
        <h1>Benvenuto su DevFlux</h1>
        <div className="intro-text">
          <p>
            Entra in un mondo dove i tuoi progetti diventano realtà: scopri DevFlux: una piattaforma dove imparare a programmare non significa solo studiare, ma creare, sperimentare e crescere ogni giorno!
          </p>
          <p>
            Qui non ci sono lezioni noiose e teoriche senza senso. Ogni corso è come un viaggio guidato: affronti sfide reali, scrivi codice che funziona davvero e costruisci progetti che puoi mostrare con orgoglio.
          </p>
          <p>
            DevFlux è per chi vuole sperimentare e capire davvero come funzionano le cose. Ti guideremo, ma sarai tu a fare la differenza: scrivi, prova, impara e cresci con ogni sfida.
          </p>
          <p>
            E non sarai mai solo: la community di DevFlux è fatta di curiosi, sviluppatori e appassionati come te. Qui puoi confrontarti, ricevere feedback e imparare da chi, come te, sta costruendo il suo percorso di crescita.
          </p>
          <p>
            Non importa da dove parti: se sei un principiante che scrive il suo primo “Hello World” o uno sviluppatore che vuole portare i suoi progetti al livello successivo, troverai corsi pensati per te, strumenti aggiornati e la motivazione giusta per non fermarti mai!
          </p>
          <p>
            In DevFlux metti le tue idee in azione: sperimenti, crei e cresci ad ogni progetto. Ogni riga di codice è un passo verso risultati concreti e soddisfazioni reali.
          </p>
        </div>
      </div>

      <section className="home-container" id="about">
        <h2>Chi siamo</h2>
        <p>
          DevFlux è una piattaforma dedicata all'apprendimento della programmazione. Offriamo corsi pratici e teorici con materiale aggiornato, esercizi guidati e supporto agli studenti. Impara da zero o migliora le tue competenze con noi!
        </p>
      </section>

      <section className="home-container" id="corsi">
        <h2>Corsi disponibili</h2>
        <div className="courses-list">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <h3>{course.title}</h3>
              <p className="access-link">
                <span
                  className="link-to-course"
                  onClick={() => navigate(`/course-info/${course.id}`)}
                >
                  Info corso e pagamento
                </span>
              </p>
              <p className="access-link">
                Oppure accedi con password{" "}
                <span
                  className="link-to-course"
                  onClick={() => navigate(course.link)}
                >
                  Vai al corso
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-container contacts-section" id="contact">
        <div className="contacts-left">
          <h2>Contatti</h2>
          <p>
            Hai domande o vuoi collaborare?<br />
            Scrivimi o seguimi sulle piattaforme dove condivido progetti e codice.
          </p>
        </div>
        <div className="contacts-right">
          <div className="contact-card">
            <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h16v16H4z" fill="none"/>
              <path d="M12 13l8-5H4l8 5zm0 2l-8-5v10h16V10l-8 5z"/>
            </svg>
            <span
              className="link-to-course"
              onClick={() => window.location = "mailto:ahmedmoustafadev@gmail.com"}
            >
              ahmedmoustafadev@gmail.com
            </span>
          </div>

          <div className="contact-card">
            <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.371 0 0 5.371 0 12c0 2.136.558 4.131 1.527 5.885L0 24l6.29-1.544A11.94 11.94 0 0 0 12 24c6.629 0 12-5.371 12-12S18.629 0 12 0z"/>
            </svg>
            <span
              className="link-to-course"
              onClick={() => window.open("https://wa.me/1234567890", "_blank")}
            >
              +39 371 571 8198
            </span>
          </div>

          <div className="contact-card">
            <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.084 3.293 9.387 7.868 10.907z"/>
            </svg>
            <span
              className="link-to-course"
              onClick={() => window.open("https://github.com/crazymidoo", "_blank")}
            >
              @crazymidoo
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
