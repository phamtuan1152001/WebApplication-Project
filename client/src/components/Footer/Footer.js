import React from "react";
import FooterLogo from "./FooterLogo/FooterLogo";
import FooterInfo from "./FooterInfo/FooterInfo";
import FooterContact from "./FooterContact/FooterContact";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="container-fluid">
        <div className="footer-item row">
          <div className="col-md-3">
            <FooterLogo />
          </div>
          <div className="col-md-6">
            <FooterInfo />
          </div>
          <div className="col-md-3">
            <FooterContact />
          </div>
        </div>
        <div className="footer-item-2 container row">
          <div className="footer-powered col-md-6">
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
