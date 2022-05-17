import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import AuthService from "../../../services/auth.service";

// var url = "http://localhost:5000/user/signin";

// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState("");

  let navigate = useNavigate();

  const handleLogin = async (e) => {
    // e.preventDefault();
    // try {
    //   let res = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: username,
    //       password: password,
    //     }),
    //   });
    //   let resJson = await res.json();
    //   if (res.status === 200) {
    //     // console.log("login thanh cong");
    //     // console.log(resJson);
    //     window.sessionStorage.setItem("token", JSON.stringify(resJson));
    //     alert("Login thanh cong!");
    //     navigate("/");
    //     window.location.reload(false);
    //   } else {
    //     console.log("login that bai");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    e.preventDefault();
    AuthService.login(username, password).then(
      () => {
        alert("Login thanh cong!");
        navigate("/");
        window.location.reload();
      },
      (error) => {
        console.log("Login that bai!");
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
                <label htmlFor="pass" className="form-label">
                  Password
                </label>
              </div>
              <input
                type="submit"
                id="login"
                name="Login"
                value="Login"
                /* onClick={handleSubmit} */
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
