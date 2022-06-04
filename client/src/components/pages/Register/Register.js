import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import "./Register.css";
import Swal from "sweetalert2";

function Register() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passconfirm, setPassConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  // console.log(message);

  const HandleValidate = () => {
    return (
      <>
        <p className="alert alert-warning">
          <strong>{message}!</strong>
        </p>
      </>
    );
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    AuthService.register(
      firstname,
      lastname,
      address,
      phone,
      email,
      password,
      passconfirm
    ).then(
      () => {
        // alert("Register thanh cong!");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Register Succesfully!",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/login");
        // window.location.reload();
      },
      (error) => {
        // console.log(error);
        setMessage(error.response.data.details[0].message);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Register Unsuccesfully!",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    );
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
              {message ? <HandleValidate /> : null}
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
              {message ? <HandleValidate /> : null}
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
              {message ? <HandleValidate /> : null}
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
              {message ? <HandleValidate /> : null}
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
                {message ? <HandleValidate /> : null}
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
                {message ? <HandleValidate /> : null}
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
              {message ? <HandleValidate /> : null}
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
