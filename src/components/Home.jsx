import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home({ user, setUser }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    setOpen(false);
  };

  const courses = [
    {
      id: 1,
      title: "Corso Python Base",
      link: "/course",
    }
  ];

  return (
    <>
      <header>
        <span className="logo">DevFlux</span>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">Chi siamo</a>
          <a href="#corsi">Corsi</a>
          <a href="#contact">Contatti</a>
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
        <p>Scopri i nostri corsi di programmazione e inizia a imparare subito!</p>
      </div>

      <section className="home-container" id="about">
        <h2>Chi siamo</h2>
        <p>Testo della sezione Chi siamo...</p>
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
