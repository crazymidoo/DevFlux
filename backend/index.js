const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors({ origin: "*" }));
app.use(express.json());

const dbPath = path.join(__dirname, "users.json");
if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, JSON.stringify({ users: [] }, null, 2));

const readDB = () => JSON.parse(fs.readFileSync(dbPath));
const writeDB = (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

function generatePassword(length = 10) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// ===== ROTTE =====

// Registrazione
app.post("/register", (req, res) => {
  console.log("POST /register body:", req.body);
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ msg: "Email e password obbligatorie" });

    const db = readDB();
    if (db.users.find(u => u.email === email)) return res.status(400).json({ msg: "Utente già registrato" });

    db.users.push({ email, password, courses: [] });
    writeDB(db);

    console.log("Utente registrato:", email);
    res.json({ msg: "Registrazione completata" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Errore server" });
  }
});

// Login
app.post("/login", (req, res) => {
  console.log("POST /login body:", req.body);
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ msg: "Email e password obbligatorie" });

    const db = readDB();
    const user = db.users.find(u => u.email === email && u.password === password);
    if (!user) return res.status(400).json({ msg: "Credenziali errate" });

    console.log("Login effettuato:", email);
    res.json({ msg: "Login ok", courses: user.courses });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Errore server" });
  }
});

// Sblocca corso
app.post("/unlock-course", (req, res) => {
  console.log("POST /unlock-course body:", req.body);
  try {
    const { email, course } = req.body;
    if (!email || !course) return res.status(400).json({ msg: "Email e corso obbligatori" });

    const db = readDB();
    const user = db.users.find(u => u.email === email);
    if (!user) return res.status(400).json({ msg: "Utente non trovato" });

    if (!user.courses) user.courses = [];
    if (!user.courses.some(c => c.name === course)) {
      user.courses.push({ name: course });
    }

    writeDB(db);

    res.json({ msg: `Corso ${course} sbloccato` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Errore server" });
  }
});

// Test server
app.get("/", (req, res) => res.json({ msg: "Backend funzionante" }));

app.listen(PORT, "0.0.0.0", () => console.log(`Server avviato su http://localhost:${PORT}`));
