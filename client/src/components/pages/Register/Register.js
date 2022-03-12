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
            <div className="input-group">
              <label for="name">Username:</label>
              <br/>
              <input type="text" placeholder="Your username" id="name"/>
            </div>
            <div className="input-group">
              <label for="email">Email:</label>
              <br/>
              <input type="email" placeholder="Input your Email" id="email" />
            </div>
            <div className="input-group">
                <div className="pass">
                  <label for="pass">Password:</label>
                  <br/>
                  <input type="password" placeholder="Password" id="pass"/>
                </div>
                <div className="pass-confirm">
                  <label for="pass-conf">Password Confirm:</label>
                  <br/>
                  <input type="password" placeholder="Confirm Password" id="pass-conf"/>
                </div>
                </div>
                <div className="input-group">
                  <label for="gender">Gender</label>
                  <br/>
                  <select name="gender" id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="different">Different?</option>
                  </select>
                </div>
                <div className="input-group">
                <label for="phone-num">Phone Number:</label>
                <input type="number" placeholder="Phone number" id="phone-num"/>
                </div>
                <a href="#"  id="register">Register</a>
          </form>
      </div>
    </div>
    </>
  )
}

export default Register;
