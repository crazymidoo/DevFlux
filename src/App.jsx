import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Course from "./components/Course.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import CourseInfo from "./components/CourseInfo.jsx";
import Success from "./components/Success.jsx";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home user={user} setUser={setUser} />} />
      <Route path="/course" element={<Course user={user} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/course-info/:id" element={<CourseInfo user={user} />} />
      <Route path="/success" element={<Success user={user} setUser={setUser} />} />
    </Routes>
  );
}

export default App;
