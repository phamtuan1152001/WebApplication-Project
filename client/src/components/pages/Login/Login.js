import React from "react";
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
              <input type="text" placeholder=" " id="name"/>
              <label for="name" className="form-label">Username</label>
            </div>
            <div className="input-group">
              <input type="password" placeholder=" " id="pass"/>
              <label for="pass" className="form-label">Password</label>
            </div>
              <input type="submit" id="login" name="Login" value="Login"/>
              <div className="register-form"> 
              <p> Haven't got an account?</p> <a href="/register" className="go-to-register"> Register a new account!</a>
              </div>
              <p className="social-title">Or Login with:</p>
              <div className="social-media">
              <a href="\" class="social-icon">
               <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="\" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
           </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login;
