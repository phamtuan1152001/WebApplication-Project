import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <div>
            <Link to="/" className="navbar-logo">
              <HiOutlineShoppingBag className="navbar-icon" />
           </Link> 

          </div>
          <div className="nav">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-links">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-links">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-links">
                  Contact
                </Link>
              </li>
              {/* <li className="nav-btn">
              {button ? (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline">Sign Up</Button>
                </Link>
              ) : (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    Sign Up
                  </Button>
                </Link>
              )}
            </li> */}
            </ul>
         </div>
          <div className="sub-nav">
            <div className="sub-contain">
              <Link to="/" className="subnav-item search subnav-links"> <i class="fa-solid fa-user"></i> &nbsp; Login /</Link>
              <Link to="/" className="subnav-item search subnav-links"> Register &emsp;</Link>
              </div>
              <div className="subnav-item search search-btn ">
               <i class="search-icon fa-light fa-magnifying-glass"></i>
                </div>
            
           </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
