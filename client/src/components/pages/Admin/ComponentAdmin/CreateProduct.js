import React, { useState } from "react";
import "../AdminPage.css";
import axios from "axios";

function CreateProduct() {
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [imgProduct, setImgProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");

  const handleCreateProduct = (e) => {
    e.preventDefault();
    const CREATE_PRODUCT = axios
      .post("http://localhost:5000/admin/create-product", {
        nameProduct,
        priceProduct,
        imgProduct,
        descriptionProduct,
      })
      .then((response) => console.log(response));
    // console.log({
    //   nameProduct,
    //   priceProduct,
    //   imgProduct,
    //   descriptionProduct,
    // });
  };

  return (
    <>
      <div className="container">
        <h3 className="mt-2 mb-1">Creating Best Sellers</h3>
        <form onSubmit={handleCreateProduct} className="m-1">
          <div className="form-group">
            <label htmlFor="product-name">Product name:</label>
            <input
              type="text"
              className="form-control"
              id="product-name"
              placeholder="Enter product name"
              onChange={(e) => {
                setNameProduct(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-price">Product price:</label>
            <input
              type="text"
              className="form-control"
              id="product-price"
              placeholder="Enter product price"
              onChange={(e) => {
                setPriceProduct(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-price">Product image:</label>
            <small className="ml-2">
              Please note that it should be a link for yours image
            </small>
            <input
              type="text"
              className="form-control"
              id="product-price"
              placeholder="Enter a link image"
              onChange={(e) => {
                setImgProduct(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-image">Product description:</label>
            <input
              type="text"
              className="form-control"
              id="product-image"
              placeholder="Enter product description"
              onChange={(e) => {
                setDescriptionProduct(e.target.value);
              }}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="product-price">Product category:</label>
            <input
              type="text"
              className="form-control"
              id="product-price"
              placeholder="Enter product price"
            />
          </div> */}
          {/* <select className="form-control form-control-lg">
            <option>men's clothing</option>
            <option>woman's clothing</option>
            <option>jewelery</option>
          </select> */}
          <div className="form-group">
            <input
              className="btn btn-outline-dark mt-5"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateProduct;
