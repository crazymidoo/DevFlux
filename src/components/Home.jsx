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
    <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4h16v16H4z" fill="none"/>
      <path d="M12 13l8-5H4l8 5zm0 2l-8-5v10h16V10l-8 5z"/>
    </svg>
    <span className="link-to-course" onClick={() => window.location = 'mailto:ahmedmoustafadev@gmail.com'}>
      ahmedmoustafadev@gmail.com
    </span>
  </p>

  <p>
    <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.371 0 0 5.371 0 12c0 2.136.558 4.131 1.527 5.885L0 24l6.29-1.544A11.94 11.94 0 0 0 12 24c6.629 0 12-5.371 12-12S18.629 0 12 0zm-.028 18.234c-1.837 0-3.521-.55-4.95-1.494l-.354-.21-3.73.915.995-3.637-.229-.372A9.914 9.914 0 0 1 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.402-7.453c-.295-.147-1.745-.862-2.016-.96-.271-.099-.468-.147-.664.147-.197.295-.762.96-.936 1.157-.172.197-.345.221-.64.074-.295-.147-1.245-.458-2.37-1.457-.876-.779-1.467-1.737-1.64-2.033-.172-.295-.018-.454.13-.601.134-.133.295-.345.443-.518.148-.172.197-.296.296-.493.099-.197.05-.37-.025-.518-.075-.147-.664-1.599-.91-2.196-.239-.576-.482-.497-.664-.507l-.566-.01c-.197 0-.518.074-.792.37-.271.295-1.036 1.012-1.036 2.466 0 1.454 1.062 2.86 1.211 3.06.148.197 2.092 3.2 5.072 4.487.709.306 1.262.49 1.694.626.712.227 1.36.195 1.872.119.571-.085 1.745-.712 1.992-1.401.247-.688.247-1.277.172-1.401-.074-.124-.271-.197-.566-.345z"/>
    </svg>
    <span className="link-to-course" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
      +39 371 571 8198
    </span>
  </p>

  <p>
    <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.084 3.293 9.387 7.868 10.907.575.106.786-.25.786-.555 0-.273-.01-1.183-.014-2.15-3.198.694-3.875-1.542-3.875-1.542-.524-1.333-1.278-1.688-1.278-1.688-1.044-.714.08-.699.08-.699 1.154.082 1.762 1.186 1.762 1.186 1.026 1.758 2.693 1.25 3.35.955.104-.744.402-1.25.731-1.538-2.554-.291-5.237-1.277-5.237-5.683 0-1.256.448-2.28 1.182-3.083-.118-.29-.512-1.457.113-3.038 0 0 .964-.309 3.158 1.178a10.983 10.983 0 0 1 2.875-.387c.976.004 1.96.13 2.875.387 2.193-1.487 3.154-1.178 3.154-1.178.627 1.581.233 2.748.114 3.038.736.803 1.18 1.827 1.18 3.083 0 4.416-2.687 5.388-5.247 5.671.413.356.78 1.06.78 2.135 0 1.542-.014 2.783-.014 3.162 0 .309.208.667.792.554C20.71 21.385 24 17.084 24 12c0-6.352-5.148-11.5-12-11.5z"/>
    </svg>
    <span className="link-to-course" onClick={() => window.open('https://github.com/crazymidoo', '_blank')}>
      @crazymidoo
    </span>
  </p>
</section>

    </>
  );
}

export default Home;
