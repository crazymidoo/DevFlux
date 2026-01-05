import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

function CourseInfo() {
  const navigate = useNavigate();
  const { id } = useParams();

  const FRONTEND_URL = "https://expert-system-v66xxgwx5jw9hxrrj-5173.app.github.dev";

  const courses = {
    1: {
      title: "Corso Python Base",
      price: "49.00",
      description:
        "Corso completo per imparare Python da zero. Include lezioni teoriche, esercizi pratici e un progetto finale per consolidare le competenze.",
      paypalLink:
        "https://www.sandbox.paypal.com/cgi-bin/webscr?" +
        "cmd=_xclick" +
        "&business=sb-62kco48523149@business.example.com" +
        "&item_name=Corso+Python+Base" +
        "&amount=49.00" +
        "&currency_code=EUR" +
        `&return=${FRONTEND_URL}/success` +
        `&cancel_return=${FRONTEND_URL}/`,
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
    window.location.href = course.paypalLink;
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

      <p>Prezzo: {course.price} €</p>

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
