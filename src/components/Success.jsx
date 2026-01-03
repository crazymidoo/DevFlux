import React from "react";

function Success() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Pagamento completato ✅</h1>
      <p>Grazie per aver acquistato il corso Python Base!</p>
      <p>Usa questa password per accedere al corso:</p>
      <h2 style={{ color: "#0f0" }}>1234</h2>
      <p>
        Vai alla pagina del corso: <a href="/course">Corso Python Base</a>
      </p>
    </div>
  );
}

export default Success;
