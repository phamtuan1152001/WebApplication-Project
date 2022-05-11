import React from "react";
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
import CheckoutPage from "./components/pages/Checkout/Checkout";
import "./App.css";
import UserInfoPage from "./components/pages/UserInfo/UserInfo";
import UpdateUserPage from "./components/pages/UserInfo/UpdateUser";
import { Toggle } from "./components/Theme/Toggle";
import { useDarkMode } from "./components/Theme/useDarkMode";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from "./components/Theme/globalStyles";
import styled, { ThemeProvider } from "styled-components";

// import { useNavigate } from "react-router-dom";

// function setToken(userToken) {
//   sessionStorage.setItem("token", JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem("token");
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token;
// }
const Container = styled.div`
  max-width: 50%;
  margin: 5px;
`;
function App() {
  // useNavigate();
  // const token = getToken();
  // if (!token) {
  //   //navigate("/");
  //   return <LoginPage setToken={setToken} />;
  // }
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <>
      <Navbar />
      <ThemeProvider theme={themeMode}>
        <Container>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </Container>
      </ThemeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user/:id" element={<UserInfoPage />} />
        <Route path="/updateuserinfor" element={<UpdateUserPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
