const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Database locale
const dbPath = "./users.json";
if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, JSON.stringify({ users: [] }));

const readDB = () => JSON.parse(fs.readFileSync(dbPath));
const writeDB = (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

// Funzione per generare password casuale
function generatePassword(length = 10) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// =====================
// Rotte del backend
// =====================

app.post("/register", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ msg: "Email e password obbligatorie" });

  const db = readDB();
  if (db.users.find(u => u.email === email)) return res.status(400).json({ msg: "Utente già registrato" });

  db.users.push({ email, password, courses: [] });
  writeDB(db);

  res.json({ msg: "Registrazione completata" });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const db = readDB();
  const user = db.users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(400).json({ msg: "Credenziali errate" });

  res.json({ msg: "Login ok", courses: user.courses });
});

// Sblocca corso e genera password
app.post("/unlock-course", (req, res) => {
  const { email, course } = req.body;
  const db = readDB();
  const user = db.users.find(u => u.email === email);
  if (!user) return res.status(400).json({ msg: "Utente non trovato" });

  const coursePassword = generatePassword(10);

  if (!user.courses) user.courses = [];
  user.courses.push({ name: course, password: coursePassword });
  writeDB(db);

  res.json({ msg: `Corso ${course} sbloccato`, password: coursePassword });
});

// Test server
app.get("/", (req, res) => res.send("Backend funzionante ✅"));

// Avvio server
app.listen(PORT, () => console.log(`Server backend avviato su http://localhost:${PORT}`));
