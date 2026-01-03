import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Success({ user }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // Chiama backend per sbloccare il corso
      fetch("https://expert-system-v66xxgwx5jw9hxrrj-5000.app.github.dev/unlock-course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, course: "Python Base" }),
      })
        .then(() => {
          navigate("/course"); // reindirizza alla pagina del corso
        })
        .catch((err) => {
          console.error(err);
          alert("Errore nello sbloccare il corso");
          navigate("/"); // ritorna alla home in caso di errore
        });
    } else {
      navigate("/login"); // se non loggato, manda al login
    }
  }, [user]);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Pagamento completato ✅</h1>
      <p>Il tuo corso è stato sbloccato! Reindirizzamento in corso...</p>
    </div>
  );
}

export default Success;

