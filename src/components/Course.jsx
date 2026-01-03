import React, { useState } from "react"

function Course() {
  const [password, setPassword] = useState("")
  const [accessGranted, setAccessGranted] = useState(false)

  const correctPassword = "1234" // password temporanea

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === correctPassword) {
      setAccessGranted(true)
    } else {
      alert("Password errata! 🔒")
    }
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      {!accessGranted ? (
        <div>
          <h1>Accesso al Corso Python Base 🔒</h1>
          <p>Inserisci la password che hai ricevuto dopo il pagamento:</p>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{ padding: "0.5rem", marginRight: "0.5rem" }}
            />
            <button type="submit" style={{ padding: "0.5rem" }}>Accedi</button>
          </form>
        </div>
      ) : (
        <div>
          <h1>Corso Python Base</h1>
          <p>Benvenuto! Qui troverai tutte le lezioni, esercizi e materiali del corso.</p>
          <ul>
            <li>Lezione 1: Introduzione a Python</li>
            <li>Lezione 2: Variabili e tipi di dati</li>
            <li>Lezione 3: Cicli e condizionali</li>
            <li>Lezione 4: Funzioni</li>
            <li>Lezione 5: Progetto finale</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Course
