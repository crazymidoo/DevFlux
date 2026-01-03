import React from "react"
import { Link } from "react-router-dom"
import "../App.css"

function Home() {
  return (
    <div className="home-container">
      <h1>Corsi di Informatica</h1>
      <p>Scopri tutti i nostri corsi di programmazione base!</p>

      {/* Lista corsi */}
      <div className="courses-list">
        <div className="course-card">
          <h2>Corso Python Base</h2>
          <p>Prezzo: 49€</p>

          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_blank"
          >
            <input type="hidden" name="cmd" value="_xclick" />
            <input type="hidden" name="business" value="ahmedmoustafadev@gmail.com" />
            <input type="hidden" name="item_name" value="Corso Python Base" />
            <input type="hidden" name="amount" value="49.00" />
            <input type="hidden" name="currency_code" value="EUR" />
            <input type="hidden" name="return" value="http://localhost:5173/success" />

            <input type="submit" value="Compra il corso" className="buy-button"/>
          </form>

          <p className="access-link">
            Oppure accedi con password: <Link to="/course">Vai al corso</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
