import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
// import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  // const [click, setClick] = useState(false);
  // const handleClick = () => {
  //   setClick(!click);
  // };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <HiOutlineShoppingBag />
            TNTTeam
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="button-nav d-flex">
              <button className="btn btn-outline-info mr-2">
                <Link to="/login" className="nav-link">
                  <span>
                    <i class="fa-solid fa-arrow-right-to-bracket mr-2"></i>
                    Login
                  </span>
                </Link>
              </button>
              <button className="btn btn-outline-info mr-2">
                <Link to="/register" className="nav-link">
                  <span>
                    <i class="fa-solid fa-user-plus mr-2"></i>
                    Register
                  </span>
                </Link>
              </button>
              <button className="btn btn-outline-info mr-2">
                <Link to="/cart" className="nav-link">
                  <span>
                    <i class="fa-solid fa-cart-shopping mr-2"></i>
                    Cart (0)
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
