import React from "react";
import RegisterPage from "./Pages/Register";
import LoginPage from "./Pages/Login";
import Navbar from "./Components/Navbar";
import ListIngPage from "./Pages/Lists";
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/register" element={< RegisterPage />} />
        <Route path="/Login" element={< LoginPage />} />
        <Route path="/Book/Lists" element={< ListIngPage />} />
      </Routes>
    </div>
  );
}

export default App;
