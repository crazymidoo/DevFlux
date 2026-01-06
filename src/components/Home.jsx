import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home({ user, setUser }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const successParam = urlParams.get('success');
    console.log("Home useEffect, success param:", successParam);
    if (successParam === 'true') {
      console.log("Navigating to /success");
      navigate('/success');
    }
  }, [navigate]);

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
            <strong>Percorsi essenziali</strong>, programmazione <strong>pratica e applicabile</strong> e <strong>strumenti moderni</strong> per crescere come sviluppatore.</p>
        </div>
      </section>

      <section className="home-container" id="about">
        <h2>Chi siamo</h2>
        <div className="intro-text">
          <p>
            DevFlux è una <strong>nuova startup tecnologica</strong> nata per rendere l’apprendimento della programmazione più diretto e accessibile.
          </p>
          <p>
            L’idea nasce dalle difficoltà reali di chi studia programmazione senza riuscire a collegare teoria e pratica.
            DevFlux esiste per fornire <strong>percorsi strutturati</strong> e <strong>contenuti aggiornati</strong> per mettere subito in pratica ciò che impari!
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
      Con DevFlux impari <strong>ciò che conta davvero</strong>, <strong>senza perdere tempo</strong> in concetti inutili, vecchi o complicati.
    </p>
    <p>
      Ci impegniamo a rendere il nostro sito <strong>chiaro e semplice da navigare</strong>, così da trovare subito ciò che ti serve. I percorsi sono <strong>chiari</strong>, <strong>semplici</strong> e <strong>adatti a chiunque</strong>, anche a chi non ha mai messo mani nel codice, con un <strong>approccio pratico</strong> e immediatamente <strong>applicabile</strong>.
    </p>
    <p>
      Siamo sempre <strong>pronti ad ascoltarti</strong>, <strong>guidarti e supportarti</strong>, perché <strong>il tuo apprendimento è la nostra priorità!</strong>
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
