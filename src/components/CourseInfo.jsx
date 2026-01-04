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
      description: "Corso completo per imparare Python da zero. Include lezioni teoriche, esercizi pratici e un progetto finale per consolidare le competenze.",
      paypalLink: "https://paypal.me/ahmedmousta/49"
    }
  };

  const course = courses[id];

  if (!course) {
    return (
      <div className="course-container">
        <div className="course-content">
          <h1>Corso non trovato</h1>
          <button className="back-button" onClick={() => navigate(-1)}>
            ↩ Indietro
          </button>
        </div>
      </div>
    );
  }

  const handlePayPal = () => {
    window.open(course.paypalLink, "_blank");
  };

  return (
    <div className="course-container">
      <div className="course-content">
        <h1>{course.title}</h1>
        <p>{course.description}</p>
        <p>Prezzo: {course.price}</p>
        <button className="form-button" onClick={handlePayPal}>
          Paga con PayPal
        </button>
        <button className="back-button" onClick={() => navigate(-1)}>
          ↩ Indietro
        </button>
      </div>
    </div>
  );
}

export default CourseInfo;
