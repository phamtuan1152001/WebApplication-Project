import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/pages/Home/Home";
import ProductsPage from "./components/pages/Products/Products";
import ServicesPage from "./components/pages/Services";
import ContactPage from "./components/pages/Contact/Contact";
import LoginPage from "./components/pages/Login/Login";
import RegisterPage from "./components/pages/Register/Register";
import ProductPage from "./components/pages/Products/Product/Product";
import CartPage from "./components/pages/Products/Cart/Cart";
import "./App.css";
import registerApi from "./api/registerAPI";

function App() {
  const [userList, setUser] = useState([]);

  useEffect(() =>{
    const fetchUser = async () => {}
    try {
      const params = {
        _page: 1,
        _limit: 10,
      };
      const response = await registerApi.getAll(params);
      console.log(response);
    } catch (error) {
      console.log ('Failed to fetch User Information:', error);
    }

    fetchUser();
  }, []);  


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
