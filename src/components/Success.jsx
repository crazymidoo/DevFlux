import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Success({ user, setUser }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let currentUser = user;

    if (!currentUser) {
      const saved = localStorage.getItem("user");
      if (saved) {
        currentUser = JSON.parse(saved);
        setUser?.(currentUser);
      }
    }

    if (!currentUser) {
      navigate("/login");
      return;
    }

    const existingCourse = currentUser.courses?.find(c => c.name === "Python Base");
    if (existingCourse) {
      setPassword(existingCourse.password);
      setLoading(false);
      return;
    }

    const params = new URLSearchParams(location.search);
    const payerID = params.get("PayerID");
    const token = params.get("token");

    if (!payerID || !token) {
      console.warn("Parametri PayPal mancanti, procedo comunque...");
    }

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
        setPassword(data.password);
        const updatedUser = {
          ...currentUser,
          courses: [...(currentUser.courses || []), { name: "Python Base", password: data.password }],
        };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser?.(updatedUser);

        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        alert("Errore nello sblocco del corso");
        navigate("/");
      });
  }, [user, setUser, location.search, navigate]);

  return (
    <div className="form-container">
      <h2>Pagamento completato!</h2>

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
