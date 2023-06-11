import React from "react";
import RegisterPage from "./Pages/Register";
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/register" element={< RegisterPage />} />
      <Route path="/Login" element={<h1>Login</h1>} />
    </Routes>
  );
}

export default App;
