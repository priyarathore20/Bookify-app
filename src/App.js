import React from "react";
import RegisterPage from "./Pages/Register";
import LoginPage from "./Pages/Login";
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/register" element={< RegisterPage />} />
      <Route path="/Login" element={< LoginPage />} />
    </Routes>
  );
}

export default App;
