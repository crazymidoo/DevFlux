import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Success({ user }) {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetch("https://expert-system-v66xxgwx5jw9hxrrj-5000.app.github.dev/unlock-course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, course: "Python Base" }),
    })
      .then(res => res.json())
      .then(data => setPassword(data.password))
      .catch(err => {
        console.error(err);
        alert("Errore nello sbloccare il corso");
        navigate("/");
      });
  }, [user]);

  return (
    <div className="form-container">
      <h2>Pagamento completato!</h2>
      {password ? (
        <>
          <p>Il tuo corso è stato sbloccato!</p>
          <p>
            La tua password per accedere al corso è: <strong>{password}</strong>
          </p>
          <button className="form-button" onClick={() => navigate("/course")}>
            Vai al corso
          </button>
        </>
      ) : (
        <p>Caricamento...</p>
      )}
    </div>
  );
}

export default Success;
