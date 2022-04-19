import React from "react";
import { Link } from "react-router-dom";
import "./Benefit.css";
import benefits from "./dataBenefits";

function Benefit() {
  return (
    <div className="container row justify-content-center">
      {benefits.map((benefit, index) => (
        <div key={index} className="col-md-3 col-sm-12">
          <div className="benefits-item">
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
        </div>
      ))}
    </div>
  );
}

export default Benefit;
