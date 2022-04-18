import React from "react";
import { useState, useEffect } from "react";
import "./Login.css";
function Login() {
  return (
    <>
    <div className="wrapper">
      <div className="container">
        <div>
          <form action="#" className="login-form">
            <h2 className="heading-login"> Login </h2>
            <div className="input-group"> 
              <label for="name">Username:</label>
              <br/>
              <input type="text" placeholder="Input your username" id="name"/> 
            </div>
            <div className="input-group">
              <label for="pass">Password:</label>
              <br/>
              <input type="password" placeholder="Input your password" id="pass"/>
            </div>
              <a href="https://github.com/typicode/json-server" id="login">Login</a>
              <div className="register-form"> 
              <p> Haven't got an account?</p> <a href="/register" className="go-to-register"> Register a new account!</a>
              </div>
           
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login;
