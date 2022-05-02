import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./Login.css";

// async function loginUser(credentials) {
//   return fetch("https://reqres.in/api/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   }).then((data) => data.json());
// }

function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const history = createBrowserHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    // history.push("/");
    // const data = await loginUser({
    //   username,
    //   password,
    // });
    try {
      let res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        console.log("login thanh cong");
        history.push("/");
      } else {
        console.log("login that bai");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div>
            <div className="login-form">
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
                onClick={handleSubmit}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
