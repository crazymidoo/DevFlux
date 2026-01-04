// src/components/CourseInfo.jsx
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

function CourseInfo() {
  const navigate = useNavigate();
  const { id } = useParams();

  const courses = {
    1: {
      title: "Corso Python Base",
      price: "49€",
      description:
        "Corso completo per imparare Python da zero. Include lezioni teoriche, esercizi pratici e un progetto finale per consolidare le competenze.",
      paypalLink: "https://paypal.me/ahmedmousta/49",
      details: [
        "Lezioni video passo-passo",
        "Esercizi pratici per ogni argomento",
        "Progetto finale guidato",
        "Supporto via email per dubbi",
        "Accesso illimitato al materiale"
      ]
    }
  };

  const course = courses[id];

  if (!course) {
    return (
      <div className="form-container">
        <h2>Corso non trovato</h2>
        <button className="back-button" onClick={() => navigate(-1)}>
          ↩ Indietro
        </button>
      </div>
    );
  }

  const handlePayPal = () => {
    window.open(course.paypalLink, "_blank");
  };

  return (
    <div className="form-container">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <ul>
        {course.details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Prezzo: {course.price}</p>
      <button className="form-button" onClick={handlePayPal}>
        Paga con PayPal
      </button>
      <button className="back-button" onClick={() => navigate(-1)}>
        ↩ Indietro
      </button>
    </div>
  );
}

export default CourseInfo;
