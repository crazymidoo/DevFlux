// src/components/Success.jsx
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Success({ user, setUser }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔁 Recupera l'utente da localStorage se manca
    let currentUser = user;
    if (!currentUser) {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        currentUser = JSON.parse(savedUser);
        setUser(currentUser);
      }
    }

    if (!currentUser) {
      // Se non c'è utente nemmeno in localStorage, chiedi il login
      navigate("/login");
      return;
    }

    // 🔍 Estrai parametri PayPal
    const params = new URLSearchParams(location.search);
    const payerID = params.get("PayerID");
    const token = params.get("token");

    if (!payerID || !token) {
      alert("Pagamento non completato o parametri mancanti");
      navigate("/");
      return;
    }

    // 🔓 Chiama il backend per sbloccare il corso e generare la password
    fetch("https://expert-system-v66xxgwx5jw9hxrrj-5000.app.github.dev/unlock-course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: currentUser.email,
        course: "Python Base",
      }),
    })
      .then(res => res.json())
      .then(data => {
        const coursePassword = data.password;
        setPassword(coursePassword);
        setLoading(false);

        // 💾 Aggiorna localStorage con corso sbloccato
        currentUser.courses = currentUser.courses || [];
        // Evita duplicati
        if (!currentUser.courses.find(c => c.name === "Python Base")) {
          currentUser.courses.push({ name: "Python Base", password: coursePassword });
        }
        localStorage.setItem("user", JSON.stringify(currentUser));
        setUser(currentUser);
      })
      .catch(err => {
        console.error(err);
        alert("Errore nello sbloccare il corso");
        navigate("/");
      });
  }, [user, setUser, navigate, location.search]);

  return (
    <div className="form-container">
      <h2>Pagamento completato ✅</h2>
      {loading ? (
        <p>Caricamento in corso...</p>
      ) : (
        <>
          <p>Il corso è stato sbloccato!</p>
          <p>
            Password del corso: <strong>{password}</strong>
          </p>
          <button className="form-button" onClick={() => navigate("/course")}>
            Vai al corso
          </button>
        </>
      )}
    </div>
  );
}

export default Success;
