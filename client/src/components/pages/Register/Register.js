import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

var url = "http://localhost:5000/user/signup";

function Register() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passconfirm, setPassConfirm] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Firstname: firstname,
          Lastname: lastname,
          Address: address,
          Phone: phone,
          email: email,
          password: password,
          confirmPassword: passconfirm,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200 || res.status === 201) {
        console.log("register thanh cong  ");
        navigate("/login");
      } else {
        console.log("register that bai");
        console.log(resJson.details[0].message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <form onSubmit={handleRegister} className="register-form">
            <h2 className="register-heading"> Register </h2>
            <div className="input-group">
              <input
                type="text"
                placeholder=" "
                id="fullname"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <label htmlFor="fullname" className="form-label">
                First name
              </label>
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder=" "
                id="lastname"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <label htmlFor="lastname" className="form-label">
                Last name
              </label>
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder=" "
                id="address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              <label htmlFor="address" className="form-label">
                Address
              </label>
            </div>
            <div className="input-group">
              <input
                type="email"
                placeholder=" "
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="email" className="form-label">
                Email
              </label>
            </div>
            <div className="input-group">
              <div className="pass">
                <input
                  type="password"
                  placeholder=" "
                  id="pass"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <label htmlFor="pass" className="form-label">
                  Password
                </label>
              </div>
            </div>
            <div className="input-group">
              <div className="pass-confirm">
                <input
                  type="password"
                  placeholder=" "
                  id="pass-conf"
                  onChange={(e) => {
                    setPassConfirm(e.target.value);
                  }}
                />
                <label htmlFor="pass-conf" className="form-label">
                  Password Confirm
                </label>
              </div>
            </div>
            <div className="input-group">
              <input
                type="tel"
                placeholder=" "
                id="phone-num"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <label htmlFor="phone-num" className="form-label">
                Phone Number
              </label>
            </div>
            <input type="submit" id="register" value="Register" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
