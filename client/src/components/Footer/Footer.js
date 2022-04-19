import React from "react";
import FooterLogo from "./FooterLogo/FooterLogo";
import FooterInfo from "./FooterInfo/FooterInfo";
import FooterContact from "./FooterContact/FooterContact";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-item">
          <FooterLogo />
          <FooterInfo />
          <FooterContact />
        </div>
        <div className="footer-item-2">
          <div className="footer-powered">
            <p>
              Copyright © <strong>TNTTeam</strong> all rights reserved. Powered
              by <strong>TNTTeam</strong>
            </p>
          </div>
          <div>
            <img
              src="https://imquocbao.github.io/Rubix-Fashion/img/icon/payment.png"
              alt="hinh-anh-powered"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
