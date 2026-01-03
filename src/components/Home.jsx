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
      price: "49€",
      link: "/course"
    },
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
              <p>Prezzo: {course.price}</p>
              <p className="access-link">
                Oppure accedi con password:{" "}
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

      <section className="home-container" id="contact">
  <h2>Contatti</h2>
  <p>
    <span className="contact-item" onClick={() => window.location = 'mailto:ahmedmoustafadev@gmail.com'}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" height="16" fill="#222222" 
        viewBox="0 0 16 16" 
        style={{ marginRight: "8px", verticalAlign: "middle" }}
      >
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-5.708 3.426L15 12.117V5.383zM14.8 13H1.2l5.708-3.308L8 10.883l1.092-.491L14.8 13zM1 12.117l5.708-3.308L1 5.383v6.734z"/>
      </svg>
      ahmedmoustafadev@gmail.com
    </span>
  </p>
  <p>
    <span className="contact-item" onClick={() => window.open('https://github.com/crazymidoo', '_blank')}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" height="16" fill="#222222" 
        viewBox="0 0 16 16" 
        style={{ marginRight: "8px", verticalAlign: "middle" }}
      >
        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82a7.64 7.64 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.001 8.001 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
      @crazymidoo
    </span>
  </p>
</section>

    </>
  );
}

export default Home;
