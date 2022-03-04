import React from "react";
import "./FooterLogo.css";
function FooterLogo() {
  return (
    <>
      <div className="logo-footer-container">
        <h1>TNTTeam</h1>
        <div className="logo-footer">
          <span>
            <i className="fa-brands fa-facebook"></i>
          </span>
          <span>
            <i className="fa-brands fa-twitter"></i>
          </span>
          <span>
            <i className="fa-brands fa-youtube"></i>
          </span>
          <span>
            <i className="fa-solid fa-envelope"></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default FooterLogo;
