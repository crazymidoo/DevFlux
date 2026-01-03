import { Routes, Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import Course from "./components/Course.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
    </Routes>
  )
}

export default App
