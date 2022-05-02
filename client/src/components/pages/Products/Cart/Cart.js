import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../../../redux/action";
import { Link } from "react-router-dom";
function Cart() {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (items) => {
    dispatch(deleteCart(items));
  };

  const cartItems = (cartItem) => {
    console.log(cartItem);
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.pID._id}>
          <div className="container py-4">
            <button
              onClick={() => handleClose(cartItem)}
              type="button"
              class="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="row justify-content-center">
              <div className="col-md-4 text-center">
                <img
                  src={cartItem.pID.Image}
                  alt={cartItem.pID.Name}
                  height="300px"
                  width="220px"
                ></img>
              </div>
              <div className="col-md-4 d-flex justify-content-center flex-column">
                <h3>{cartItem.pID.Name}</h3>
                <p style={{ fontSize: "30px" }}>
                  <strong>$ {cartItem.pID.Price}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const isEmpty = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container">
          <div className="row">
            <h1>Your cart item is empty!</h1>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <Link to="/checkout" className="btn btn-outline-dark mb-5">
            Checkout all items
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && isEmpty()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
}

export default Cart;
