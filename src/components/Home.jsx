import React from "react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Benvenuto ai Corsi di Informatica</h1>
      <p>Impara programmazione base con esempi pratici!</p>
      
      <h2>Corso Python Base</h2>
      <p>Prezzo: 49€</p>

      {/* Bottone PayPal */}
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
    <input type="submit" value="Compra il corso" />
    </form>

      <p style={{ marginTop: "1rem" }}>
        Dopo il pagamento, vai alla pagina del corso: <Link to="/course">Corso Python Base</Link>
      </p>
    </div>
  )
}

export default Home
