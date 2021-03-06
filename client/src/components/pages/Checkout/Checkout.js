import React, { useState } from "react";
import { useSelector } from "react-redux";
import AuthService from "../../../services/auth.service";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const user = AuthService.getCurrentUser();
  const tokenUser = user.token;
  const navigate = useNavigate();
  const state = useSelector((state) => state.handleCart);
  // console.log(state);
  var total = 0;
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [country, setCountry] = useState("")
  const [itemCart, setItemCart] = useState(state)
  // console.log(itemCart);
  const itemList = (item) => {
    // console.log(item);
    total = total + item.pID.Price;
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0"> {item.pID.Name} </h6>
        </div>
        <span className="text-muted"> {item.pID.Price} </span>
      </li>
    );
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    AuthService.checkout(
      firstName,
      lastName,
      email,
      address,
      country,
      itemCart,
      tokenUser
    ).then(
      () => {
        // alert("Register thanh cong!");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Checkout Succesfully!",
          showConfirmButton: false,
          timer: 3000,
        });
        navigate("/products");
        window.location.reload();
      },
      (error) => {
        // console.log(error);
        // setMessage(error.response.data.details[0].message);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Checkout Unsuccesfully!",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    );
  }
  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted"> Your cart </span>{" "}
              <span className="badge badge-secondary badge-pill">
                {state.length}
              </span>{" "}
            </h4>{" "}
            <ul className="list-group mb-3">
              {state.map(itemList)}
              <li className="list-group-item d-flex justify-content-between">
                <span> Total(USD) </span> <strong>{total}</strong>{" "}
              </li>{" "}
            </ul>
          </div>{" "}
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3"> Billing address </h4>{" "}
            <form onSubmit={handleCheckout} className="needs-validation" /* novalidate="" */>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName"> First name </label>{" "}
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    required=""
                    style={{
                      width: "100%",
                    }}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />{" "}
                  <div className="invalid-feedback">
                    Valid first name is required.{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName"> Last name </label>{" "}
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    required=""
                    style={{
                      width: "100%",
                    }}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />{" "}
                  <div className="invalid-feedback">
                    Valid last name is required.{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <div className="mb-3">
                <label htmlFor="email">
                  Email <span className="text-muted"> </span>{" "}
                </label>{" "}
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.{" "}
                </div>{" "}
              </div>
              <div className="mb-3">
                <label htmlFor="address"> Address </label>{" "}
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required=""
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.{" "}
                </div>{" "}
              </div>
              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country"> Country </label>{" "}
                  <input
                    type="text"
                    className="form-control"
                    id="contry"
                    placeholder="Ho Chi Minh city"
                    required=""
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  />
                  <div className="invalid-feedback">
                    Please select a valid country.{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <hr />
              <button
                className="btn btn-outline-dark btn-lg btn-block"
                type="submit"
              >
                Continue to checkout{" "}
              </button>{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Checkout;
