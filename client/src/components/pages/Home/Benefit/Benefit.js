import React from "react";
import { Link } from "react-router-dom";
import "./Benefit.css";
import benefits from "./dataBenefits";

function Benefit() {
  return (
    <div className="benefits-container">
      {benefits.map((benefit, index) => (
        <div key={index} className="benefits-item">
          <img src={benefit.img} alt={benefit.h4} />
          <h4>{benefit.h4}</h4>
          <p>{benefit.p}</p>
          <Link to="/">
            <p>
              <strong>
                <span>Learn mores</span>
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </strong>
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Benefit;
