import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Success({ user, setUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    const saved = user || JSON.parse(localStorage.getItem("user"));
    if (!saved) return navigate("/login");

    fetch("/unlock-course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: saved.email, course: "Python Base" }),
    })
      .then((r) => r.json())
      .then(() => {
        const updated = {
          ...saved,
          courses: [...(saved.courses || []), { name: "Python Base" }],
        };
        localStorage.setItem("user", JSON.stringify(updated));
        setUser(updated);
      });
  }, []);

  return (
    <div className="form-container">
      <h2>Pagamento completato</h2>
      <button onClick={() => navigate("/course")}>Vai al corso</button>
    </div>
  );
}

export default Success;
