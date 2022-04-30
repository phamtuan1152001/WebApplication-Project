import React from "react";
import { useState, useEffect } from "react";
import "./Register.css";
function Register() {
  return (
    <>
    <div className="wrapper">
      <div className="container">
          <form action="#" className="register-form">
            <h2 className="register-heading"> Register </h2>
            <table>
              <tr>
                <td>
              <div className="input-group w-100">
              <input type="text" placeholder=" " id="fname"/>
              <label for="fname" className="form-label">First Name</label>
              </div>
              </td>
              <td>
              <div className="input-group px-3 w-100 ">
              <input type="text" placeholder=" " id="lname"/>
              <label for="lname" className="form-label">Last Name</label>
              </div>
              </td>
              </tr>
              </table>
            <div className="input-group">
              <input type="text" placeholder=" " id="address" />
              <label for="address" className="form-label">Address</label>
            </div>
            <div className="input-group">
              <input type="email" placeholder=" " id="email" />
              <label for="email" className="form-label">Email</label>
            </div>
            <div className="input-group">
                <div className="pass">
                  <input type="password" placeholder=" " id="pass"/>
                  <label for="pass" className="form-label">Password</label>
                </div>
                </div>
                <div className="input-group">
                <div className="pass-confirm">
                  <input type="password" placeholder=" " id="pass-conf"/>
                  <label for="pass-conf" className="form-label">Password Confirm</label>
                </div>
                </div>
                <div className="input-group">
                <input type="tel" placeholder=" " id="phone-num" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                <label for="phone-num" className="form-label">Phone Number</label>
                </div>
                <input type="submit" id="register" value="Register" />
          </form>
      </div>
    </div>
    </>
  )
}

export default Register;
