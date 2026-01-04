import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://vigilant-tribble-699jjrwjpxv52rgr6-5000.app.github.dev/";

function Success({ user, setUser }) {
  const navigate = useNavigate();
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
        alert(err.message || "Errore nello sblocco del corso");
        navigate("/");
      });
  }, [user, setUser, navigate]);

  return (
    <div className="form-container">
      <h2>Pagamento completato!</h2>
      {loading ? <p>Caricamento in corso...</p> : (
        <>
          <p>Il corso è stato sbloccato!</p>
          <p>Password del corso: <strong>{password}</strong></p>
          <button className="form-button" onClick={() => navigate("/course")}>Vai al corso</button>
        </>
      )}
    </div>
  );
}

export default Success;
