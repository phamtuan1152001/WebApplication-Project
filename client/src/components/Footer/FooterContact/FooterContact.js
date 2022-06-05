import React from "react";
import "./FooterContact.css";
function FooterContact() {
  return (
    <>
      <div className="footer-contact-container">
        <div className="footer-contact-item">
          <h3>Let's talk</h3>
          <p className="contact-item">
            <span>
              <i className="fa-solid fa-headphones-simple"></i>
            </span>
            <span>+84 333 57 242</span>
          </p>
        </div>
        <div className="footer-contact-item">
          <h3>Find Us</h3>
          <p className="contact-item">
            <span>
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <span>502 New Design Str Melbourne, Australia</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default FooterContact;
