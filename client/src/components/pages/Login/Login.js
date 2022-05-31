import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import "./Login.css";
import Swal from 'sweetalert2'

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let navigate = useNavigate();

  const HandleValidate = () => {
    return (
      <>
        <p className="alert alert-warning"><strong>{message}!</strong></p>
      </>
    )
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    AuthService.login(username, password).then(
      () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Login Succesfully!",
          showConfirmButton: false,
          timer: 2000
        })
        navigate("/");
        window.location.reload();
      },
      (error) => {
        // console.log(error);
        setMessage(error.response.data.details[0].message);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: "Login Unsuccesfully!",
          showConfirmButton: false,
          timer: 2000
        })
      }
    );
  };
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div>
            <form onSubmit={handleLogin} className="login-form">
              <h2 className="heading-login"> Login </h2>
              <div className="input-group">
                <input
                  type="text"
                  placeholder=" "
                  id="name"
                  onChange={(e) => setUserName(e.target.value)}
                />
                {message ? <HandleValidate /> : null}
                <label htmlFor="name" className="form-label">
                  Username
                </label>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  placeholder=" "
                  id="pass"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {message ? <HandleValidate /> : null}
                <label htmlFor="pass" className="form-label">
                  Password
                </label>
              </div>
              <input
                type="submit"
                id="login"
                name="Login"
                value="Login"
              />
              <div className="register-form">
                <p> Haven't got an account?</p>{" "}
                <Link to="/register" className="go-to-register">
                  Register a new account!
                </Link>
              </div>
              <p className="social-title">Or Login with:</p>
              <div className="social-media">
                <Link to="/register" className="social-icon">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link to="/register" className="social-icon">
                  <i className="fab fa-google"></i>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
