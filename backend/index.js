const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors()); // ok anche con proxy
app.use(express.json());

const dbPath = path.join(__dirname, "users.json");
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, JSON.stringify({ users: [] }, null, 2));
}

const readDB = () => JSON.parse(fs.readFileSync(dbPath, "utf-8"));
const writeDB = (data) =>
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

function generatePassword(length = 10) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}

// ================= ROUTES =================

// Register
app.post("/register", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ msg: "Email e password obbligatorie" });

  const db = readDB();
  if (db.users.find((u) => u.email === email))
    return res.status(400).json({ msg: "Utente già registrato" });

  db.users.push({ email, password, courses: [] });
  writeDB(db);

  res.json({ msg: "Registrazione completata" });
});

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ msg: "Email e password obbligatorie" });

  const db = readDB();
  const user = db.users.find(
    (u) => u.email === email && u.password === password
  );
  if (!user) return res.status(400).json({ msg: "Credenziali errate" });

  res.json({ msg: "Login ok", courses: user.courses });
});

// Unlock course
app.post("/unlock-course", (req, res) => {
  const { email, course } = req.body;
  if (!email || !course)
    return res.status(400).json({ msg: "Email e corso obbligatori" });

  const db = readDB();
  const user = db.users.find((u) => u.email === email);
  if (!user) return res.status(400).json({ msg: "Utente non trovato" });

  if (!user.courses) user.courses = [];
  if (user.courses.find((c) => c.name === course))
    return res.json({ msg: "Corso già sbloccato" });

  const coursePassword = generatePassword();
  user.courses.push({ name: course, password: coursePassword });
  writeDB(db);

  res.json({ msg: "Corso sbloccato", password: coursePassword });
});

// Test
app.get("/", (req, res) => {
  res.json({ msg: "Backend funzionante" });
});

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Backend avviato su http://localhost:${PORT}`)
);
