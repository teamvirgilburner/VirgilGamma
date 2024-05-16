import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home"; // Adjust the import path according to your project structure
import Demo from "./components/Demo";
import EarlyLife from "./components/EarlyLife";
import EducationTeenage from "./components/EducationTeenage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/early-life" element={<EarlyLife />} />

        <Route
          path="/education-and-teenage-years"
          element={<EducationTeenage />}
        />

        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
