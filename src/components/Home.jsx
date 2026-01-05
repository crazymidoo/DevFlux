// src/components/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home({ user, setUser }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);       
    localStorage.removeItem("user"); 
    setOpen(false);    
    navigate("/");  
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
            Entra in un mondo dove i tuoi progetti diventano realtà: scopri DevFlux, la piattaforma dove imparare a programmare significa <strong>creare</strong>, <strong>sperimentare</strong> e <strong>crescere</strong> ogni giorno!
          </p>
          <p>
            I corsi sono come viaggi guidati: affronti <strong>sfide reali</strong>, scrivi codice che funziona davvero e costruisci <strong>progetti concreti</strong> da mostrare con orgoglio!
          </p>
          <p>
            Non sarai mai solo: la community di DevFlux è fatta di curiosi e sviluppatori come te, pronti a <strong>confrontarsi</strong>, ricevere <strong>feedback</strong> e <strong>imparare insieme</strong>.
          </p>
          <p>
            Che tu sia un principiante o uno sviluppatore avanzato, troverai corsi, <strong>strumenti aggiornati</strong> e <strong>motivazione</strong> per portare i tuoi progetti al livello successivo!
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
            Siamo sempre qui per ascoltarti e aiutarti a fare il prossimo passo nel tuo percorso di apprendimento.

            Non esitare a scriverci: che si tratti di informazioni sui corsi, consigli per migliorare la piattaforma o anche solo per condividere le tue idee e i tuoi progetti, ci farà piacere leggerti.

            Il nostro obiettivo è rendere il tuo viaggio con DevFlux il più semplice e piacevole possibile, e ogni messaggio che riceviamo ci aiuta a migliorare insieme a te.
          </p>
        </div>

        <div className="contacts-right">
          <div className="contact-card">
            <span className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/>
              </svg>
            </span>
            <span
              className="link-to-course"
              onClick={() => window.open("https://www.instagram.com/devfluxcode/", "_blank")}
            >
              @devfluxcode
            </span>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
              </svg>
            </span>
            <span
              className="link-to-course"
              onClick={() => window.location = "mailto:ahmedmoustafadev@gmail.com"}
            >
              ahmedmoustafadev@gmail.com
            </span>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
              </svg>
            </span>
            <span
              className="link-to-course"
              onClick={() => window.open("https://wa.me/1234567890", "_blank")}
            >
              +39 371 571 8198
            </span>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
              </svg>
            </span>
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
