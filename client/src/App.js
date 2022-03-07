import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/pages/Home/Home";
import ProductsPage from "./components/pages/Products/Products";
import ServicesPage from "./components/pages/Services";
import ContactPage from "./components/pages/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
