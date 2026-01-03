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

  return (
    <>
      <header>
        <span className="logo">DevFlux</span>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">Chi siamo</a>
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
        <p>Scopri tutti i nostri corsi di programmazione base!</p>

        <div className="courses-list">
          <div className="course-card">
            <h2>Corso Python Base</h2>
            <p>Prezzo: 49€</p>

            <p className="access-link">
              Oppure accedi con password:{" "}
              <span 
                className="link-to-course" 
                onClick={() => navigate("/course")}
               >
                Vai al corso
              </span>
            </p>

          </div>
        </div>

        <section id="about">
          <h2>Chi siamo</h2>
          <p>Testo della sezione Chi siamo...</p>
        </section>

        <section id="contact">
          <h2>Contatti</h2>
          <p>Testo della sezione Contatti...</p>
        </section>
      </div>
    </>
  );
}

export default Home;
