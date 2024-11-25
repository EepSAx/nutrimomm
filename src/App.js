import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import "./styles/style.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk halaman utama */}
        <Route path="/" element={<Dashboard />} />
        {/* Route untuk halaman Sign In */}
        <Route path="/signin" element={<SignIn />} />
        {/* Route untuk halaman Sign Up */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;