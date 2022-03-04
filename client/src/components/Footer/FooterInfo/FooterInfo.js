import React from "react";
import informations from "./dataFooterInfo";
import "./FooterInfo.css";
function FooterInfo() {
  return (
    <>
      <div className="footer-infor-container">
        {informations.map((information, index) => (
          <div className="footer-infor-item" key={index}>
            <h3>{information.title}</h3>
            <ul>
              <li>{information.name1}</li>
              <li>{information.name2}</li>
              <li>{information.name3}</li>
              <li>{information.name4}</li>
              <li>{information.name5}</li>
              <li>{information.name6}</li>
              <li>{information.name7}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default FooterInfo;
