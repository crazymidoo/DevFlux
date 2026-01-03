import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Course from "./components/Course.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Home user={user} setUser={setUser} />} />
      <Route path="/course" element={<Course user={user} setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
    </Routes>
  );
}

export default App;
