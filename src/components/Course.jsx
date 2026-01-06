import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Course({ user }) {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    } else {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    }
  }, [user]);

  if (!currentUser) {
    return (
      <div className="form-container">
        <h2>Accesso al corso</h2>
        <p>Per accedere a questo corso devi prima effettuare il login.</p>
        <button className="form-button" onClick={() => navigate("/login")}>
          Vai al login
        </button>
        <button className="back-button" onClick={() => navigate(-1)}>
          ↩ Indietro
        </button>
      </div>
    );
  }

  const hasAccess =
    currentUser.courses && currentUser.courses.some(c => c.name === "Python Base");

  return (
    <div className="course-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ↩ Indietro
      </button>

      {!hasAccess ? (
        <>
          <h2>Corso Python Base</h2>
          <p>
            Questo corso è disponibile solo per gli utenti che l'hanno acquistato.
          </p>
          <button className="form-button" onClick={() => navigate("/course-info/1")}>
            Acquista il corso
          </button>
        </>
      ) : (
        <>
          <h2>Corso Python Base</h2>
          <p>
            Benvenuto nel corso completo di Python Base! Qui troverai tutti gli argomenti trattati, divisi in capitoli con appunti dettagliati, esempi pratici e spiegazioni passo passo.
          </p>

          {/* Capitolo 1 */}
          <section>
            <h3>Capitolo 1: Introduzione a Python</h3>
            <p>
              Python è un linguaggio di programmazione versatile e semplice da imparare. In questo capitolo scoprirai:
            </p>
            <ul>
              <li>Cos'è Python e perché è così popolare</li>
              <li>Come installare Python su Windows, Mac e Linux</li>
              <li>Configurare un ambiente di sviluppo (IDEs, VSCode, PyCharm)</li>
              <li>Scrivere il primo programma: <code>print("Hello, world!")</code></li>
            </ul>
            <pre>
              <code>{`# Stampa un messaggio
print("Benvenuto in Python!")`}</code>
            </pre>
          </section>

          {/* Capitolo 2 */}
          <section>
            <h3>Capitolo 2: Variabili e tipi di dati</h3>
            <ul>
              <li><strong>Numeri:</strong> interi (int), numeri decimali (float)</li>
              <li><strong>Stringhe:</strong> testo racchiuso tra virgolette</li>
              <li><strong>Liste:</strong> collezioni ordinate di elementi</li>
              <li><strong>Tuple:</strong> collezioni ordinate immutabili</li>
              <li><strong>Dizionari:</strong> coppie chiave-valore</li>
            </ul>
            <pre>
              <code>{`nome = "Alice"
eta = 25
lista_frutta = ["mela", "banana", "ciliegia"]
dizionario = {"nome": "Alice", "eta": 25}`}</code>
            </pre>
          </section>

          {/* Capitolo 3 */}
          <section>
            <h3>Capitolo 3: Operatori e espressioni</h3>
            <ul>
              <li><strong>Aritmetici:</strong> <code>+, -, *, /, %, **</code></li>
              <li><strong>Confronto:</strong> <code>==, !=, &gt;, &lt;, &gt;=, &lt;=</code></li>
              <li><strong>Logici:</strong> <code>and, or, not</code></li>
              <li><strong>Assegnazione:</strong> <code>=, +=, -=, *=, /=</code></li>
            </ul>
          </section>

          {/* Capitolo 4 */}
          <section>
            <h3>Capitolo 4: Controllo di flusso</h3>
            <pre>
              <code>{`# if/else
eta = 18
if eta >= 18:
    print("Sei maggiorenne")
else:
    print("Sei minorenne")

# ciclo for
frutta = ["mela", "banana", "ciliegia"]
for f in frutta:
    print(f)

# ciclo while
count = 0
while count < 5:
    print(count)
    count += 1`}</code>
            </pre>
          </section>

          {/* Capitolo 5 */}
          <section>
            <h3>Capitolo 5: Funzioni e modularità</h3>
            <pre>
              <code>{`def saluta(nome):
    return f"Ciao {nome}!"

messaggio = saluta("Alice")
print(messaggio)  # Output: Ciao Alice!`}</code>
            </pre>
          </section>

          {/* Capitolo 6 */}
          <section>
            <h3>Capitolo 6: Gestione degli errori</h3>
            <pre>
              <code>{`try:
    numero = int(input("Inserisci un numero: "))
    print("Hai inserito:", numero)
except ValueError:
    print("Non hai inserito un numero valido!")`}</code>
            </pre>
          </section>

          {/* Capitolo 7 */}
          <section>
            <h3>Capitolo 7: File e input/output</h3>
            <pre>
              <code>{`# Scrivere su un file
with open("dati.txt", "w") as f:
    f.write("Ciao mondo!")

# Leggere un file
with open("dati.txt", "r") as f:
    contenuto = f.read()
    print(contenuto)`}</code>
            </pre>
          </section>

          {/* Capitolo 8 */}
          <section>
            <h3>Capitolo 8: Progetto finale</h3>
            <ul>
              <li>Riceve input dall’utente</li>
              <li>Memorizza dati in un file</li>
              <li>Usa funzioni e cicli per elaborare i dati</li>
              <li>Gestisce eventuali errori in ingresso</li>
            </ul>
          </section>

          <p>
            Congratulazioni! Hai completato il corso. Puoi tornare su ogni capitolo per ripassare gli argomenti e continuare a esercitarti.
          </p>
        </>
      )}
    </div>
  );
}

export default Course;
