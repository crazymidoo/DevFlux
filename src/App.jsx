import { Routes, Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import Course from "./components/Course.jsx"
import Success from "./components/Success.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/course" element={<Success />} />
    </Routes>
  )
}

export default App
