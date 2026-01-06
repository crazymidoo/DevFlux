import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = window.location.origin.replace('-5174', '-5000');

function Success({ user, setUser }) {
  const navigate = useNavigate();

  console.log("Success component rendered");

  useEffect(() => {
    console.log("Success useEffect, user:", user);
    let currentUser = user;

    if (!currentUser) {
      const saved = localStorage.getItem("user");
      if (saved) {
        currentUser = JSON.parse(saved);
        setUser?.(currentUser);
      }
    }

    if (!currentUser) {
      console.log("No user, navigating to login");
      navigate("/login");
      return;
    }

    // Controlla se l'utente ha già il corso sbloccato
    const existingCourse = currentUser.courses?.find(c => c.name === "Python Base");
    if (existingCourse) {
      return;
    }

    // Chiamata al backend per sbloccare il corso
    fetch(`${BASE_URL}/unlock-course`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: currentUser.email, course: "Python Base" }),
    })
      .then(async res => {
        const text = await res.text();
        const data = text ? JSON.parse(text) : {};
        if (!res.ok) throw new Error(data.msg || "Errore nello sblocco del corso");
        return data;
      })
      .then(data => {
        const updatedUser = {
          ...currentUser,
          courses: [...(currentUser.courses || []), { name: "Python Base" }],
        };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser?.(updatedUser);
      })
      .catch(err => {
        alert(err.message || "Errore nello sblocco del corso");
        navigate("/");
      });
  }, [user, setUser, navigate]);

  return (
    <div className="form-container">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={{ width: '100px', height: '100px', color: 'green' }}>
          <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"/>
        </svg>
      </div>
      <h2>Grazie per il pagamento!</h2>
      <p>Il pagamento è andato a buon fine. Il corso è stato sbloccato!</p>
      <button className="form-button" onClick={() => navigate("/course")}>
        Vai al corso
      </button>
    </div>
  );
}

export default Success;
