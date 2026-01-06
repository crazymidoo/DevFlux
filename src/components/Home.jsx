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
          <a href="#home" onClick={e => { e.preventDefault(); document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }); }}>Home</a>
          <a href="#about" onClick={e => { e.preventDefault(); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }}>Chi siamo</a>
          <a href="#corsi" onClick={e => { e.preventDefault(); document.getElementById("corsi")?.scrollIntoView({ behavior: "smooth" }); }}>Corsi</a>
          <a href="#why-us" onClick={e => { e.preventDefault(); document.getElementById("why-us")?.scrollIntoView({ behavior: "smooth" }); }}>Perché noi</a>
          <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>Contatti</a>

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

      <section className="home-container" id="home">
        <h1>Benvenuto su DevFlux</h1>
        <div className="intro-text">
          <p>
            Entra in un mondo dove imparare a programmare significa <strong>creare</strong>, <strong>sperimentare</strong> e <strong>crescere</strong> ogni giorno.
          </p>
          <p>
            Percorsi chiari, codice reale e strumenti aggiornati per sviluppare competenze concrete.
          </p>
        </div>
      </section>

      <section className="home-container" id="about">
        <h2>Chi siamo</h2>
        <div className="intro-text">
          <p>
            DevFlux è una <strong>nuova startup tecnologica</strong> nata per rendere l’apprendimento della programmazione più diretto e accessibile.
          </p>
          <p>
            L’idea nasce dalle difficoltà reali di chi studia sviluppo software senza riuscire a collegare teoria e pratica.
            DevFlux esiste per fornire <strong>percorsi strutturati</strong>, <strong>contenuti aggiornati</strong> e un approccio concreto al codice.
          </p>
        </div>
      </section>

      <section className="home-container" id="corsi">
        <h2>Corsi disponibili</h2>
        <div className="courses-list">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <h3>{course.title}</h3>
              <p>
                <span className="link-to-course" onClick={() => navigate(`/course-info/${course.id}`)}>
                  Info corso e pagamento
                </span>
              </p>
              <p>
                <span className="link-to-course" onClick={() => navigate(course.link)}>
                  Vai al corso
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-container" id="why-us">
        <h2>Perché DevFlux</h2>
        <div className="intro-text">
          <p>
            DevFlux nasce come risposta a piattaforme dispersive, teoriche o poco aggiornate.
          </p>
          <p>
            L’obiettivo è offrire un ambiente dove l’apprendimento sia <strong>progressivo</strong>, <strong>pratico</strong> e orientato all’utilizzo reale delle tecnologie.
          </p>
          <p>
            Ogni percorso è pensato per fornire <strong>competenze applicabili</strong>, riducendo al minimo la distanza tra studio e utilizzo concreto.
          </p>
        </div>
      </section>

      <section className="home-container contacts-section" id="contact">
        <h2>Contatti</h2>
        <div className="intro-text">
          <p>
            Per informazioni, collaborazioni o supporto puoi contattarci attraverso i canali ufficiali.
          </p>
        </div>

        <div className="contacts-cards">
          <div className="contact-card">
            <span className="link-to-course" onClick={() => window.open("https://www.instagram.com/devfluxcode/", "_blank")}>
              Instagram @devfluxcode
            </span>
          </div>

          <div className="contact-card">
            <span className="link-to-course" onClick={() => window.location = "mailto:ahmedmoustafadev@gmail.com"}>
              ahmedmoustafedev@gmail.com
            </span>
          </div>

          <div className="contact-card">
            <span className="link-to-course">
              +39 371 571 8198
            </span>
          </div>

          <div className="contact-card">
            <span className="link-to-course" onClick={() => window.open("https://github.com/crazymidoo", "_blank")}>
              GitHub @crazymidoo
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
