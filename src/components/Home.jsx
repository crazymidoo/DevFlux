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
  <h2>Contatti</h2>
  <div className="intro-text">
    <p>
      Hai domande o vuoi collaborare? Siamo qui per aiutarti e guidarti nel tuo percorso di apprendimento.
      Scrivici per informazioni sui corsi, consigli sulla piattaforma o semplicemente per condividere idee e progetti.
      Il nostro obiettivo è rendere il tuo viaggio con DevFlux semplice e piacevole, e ogni tuo messaggio ci aiuta a migliorare insieme.
    </p>
  </div>

  <div className="contacts-cards">
    <div className="contact-card">
      <span className="contact-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/>
        </svg>
      </span>
      <span className="link-to-course" onClick={() => window.open("https://www.instagram.com/devfluxcode/", "_blank")}>
        @devfluxcode
      </span>
    </div>

    <div className="contact-card">
      <span className="contact-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M155.8 96C123.9 96 96.9 119.4 92.4 150.9L64.6 345.2C64.2 348.2 64 351.2 64 354.3L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 354.3C576 351.3 575.8 348.2 575.4 345.2L547.6 150.9C543.1 119.4 516.1 96 484.2 96L155.8 96zM155.8 160L484.3 160L511.7 352L451.8 352C439.7 352 428.6 358.8 423.2 369.7L408.9 398.3C403.5 409.1 392.4 416 380.3 416L259.9 416C247.8 416 236.7 409.2 231.3 398.3L217 369.7C211.6 358.9 200.5 352 188.4 352L128.3 352L155.8 160z"/>
        </svg>
      </span>
      <span className="link-to-course" onClick={() => window.location = "mailto:ahmedmoustafadev@gmail.com"}>
        ahmedmoustafadev@gmail.com
      </span>
    </div>

    <div className="contact-card">
      <span className="contact-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7z"/>
        </svg>
      </span>
      <span className="link-to-course" onClick={() => window.open("https://wa.me/1234567890", "_blank")}>
        +39 371 571 8198
      </span>
    </div>

    <div className="contact-card">
      <span className="contact-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72z"/>
        </svg>
      </span>
      <span className="link-to-course" onClick={() => window.open("https://github.com/crazymidoo", "_blank")}>
        @crazymidoo
      </span>
    </div>
  </div>
</section>


    </>
  );
}

export default Home;
