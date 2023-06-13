import { Routes, Route } from "react-router-dom";

// Components
import MyNavbar from "./Components/Navbar";

// Pages
import RegisterPage from "./Pages/Register";
import LoginPage from "./Pages/Login";
import ListingPage from "./Pages/List";
import HomePage from "./Pages/Home";
import BookDetailPage from "./Pages/Detail";
import OrdersPage from "./Pages/ViewOrder";
import ViewOrderDetails from "./Pages/ViewOrderDetail";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/book/list" element={<ListingPage />} />
        <Route path="/book/view/:bookId" element={<BookDetailPage />} />
        <Route path="/book/orders" element={<OrdersPage />} />
        <Route path="/books/orders/:bookId" element={<ViewOrderDetails />} />
      </Routes>
    </div>
  );
}

export default App;