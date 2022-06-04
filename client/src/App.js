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
import AdminPage from "./components/pages/Admin/AdminPage";
import AddBestSellersPage from "./components/pages/Admin/ComponentAdmin/AddBestSellers";
import AddTrendProductsPage from "./components/pages/Admin/ComponentAdmin/AddTrendProducts.";
import DisplayBestSellerPage from "./components/pages/Admin/ComponentAdmin/DisplayBestSeller";
import DisplayTrendProductPage from "./components/pages/Admin/ComponentAdmin/DisplayTrendProduct";
import { Toggle } from "./components/Theme/Toggle";
import { useDarkMode } from "./components/Theme/useDarkMode";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from "./components/Theme/globalStyles";
import styled, { ThemeProvider } from "styled-components";

const Container = styled.div`
  max-width: 50%;
`;
function App() {
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
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/addBestSeller" element={<AddBestSellersPage />} />
        <Route path="/addTrendProduct" element={<AddTrendProductsPage />} />
        <Route path="/displayBestSeller" element={<DisplayBestSellerPage />} />
        <Route
          path="/displayTrendProduct"
          element={<DisplayTrendProductPage />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
