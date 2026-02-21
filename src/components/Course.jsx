import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
// Rimosso l'import di remark-gfm
import courseContent from "../content/python-base.md?raw";
import "../App.css";

function Course({ user }) {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    } else {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    }
  }, [user]);

  if (!currentUser) {
    return (
      <div className="form-container">
        <h2>Accesso al corso</h2>
        <p>Per accedere a questo corso devi prima effettuare il login.</p>
        <button className="form-button" onClick={() => navigate("/login")}>Vai al login</button>
      </div>
    );
  }

  const hasAccess = currentUser.courses?.some(c => c.name === "Python Base");

  return (
    <div className="course-container">
      <button className="back-button" onClick={() => navigate(-1)}>↩ Indietro</button>

      {!hasAccess ? (
        <div className="locked-content">
          <h2>Contenuto Protetto</h2>
          <p>Acquista il corso per accedere.</p>
          <button className="form-button" onClick={() => navigate("/course-info/1")}>Acquista</button>
        </div>
      ) : (
        <div className="course-content">
          {/* Rimosso remarkPlugins */}
          <ReactMarkdown>{courseContent}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default Course;