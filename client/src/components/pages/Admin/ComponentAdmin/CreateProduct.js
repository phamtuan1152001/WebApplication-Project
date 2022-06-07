import React, { useState } from "react";
import "../AdminPage.css";
import axios from "axios";
import AuthService from "../../../../services/auth.service";

function CreateProduct() {
  const user = AuthService.getCurrentUser();
  const tokenUser = user.token;
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [imgProduct, setImgProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [category, setCategory] = useState("");
  const [ratingProduct, setRatingProduct] = useState("");
  // console.log(tokenUser);
  const handleCreateProduct = async (e) => {
    e.preventDefault();
    AuthService.createProduct(
      nameProduct,
      priceProduct,
      imgProduct,
      descriptionProduct,
      ratingProduct,
      category,
      tokenUser
    ).then(
      () => {
        console.log("Created successfully!");
      },
      (error) => {
        console.log(error);
      }
    )
    // Cach nay chay dc va thanh cong khi dung fetch
    // try {
    //   const respone = await fetch(
    //     "http://localhost:5000/admin/create-product/",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `${tokenUser}`,
    //       },
    //       body: JSON.stringify({
    //         Name: nameProduct,
    //         Price: priceProduct,
    //         Image: imgProduct,
    //         Descriptions: descriptionProduct,
    //         category: category,
    //         rating: ratingProduct,
    //       })
    //     }
    //   )
    //   console.log(respone);
    // } catch (error) {
    //   console.log("Fail to create", error);
    // }
  };

  return (
    <>
      <div className="container">
        <h3 className="mt-2 mb-1">Creating Products</h3>
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
          <div className="form-group">
            <label htmlFor="product-image">Product rating:</label>
            <input
              type="text"
              className="form-control"
              id="product-image"
              placeholder="Enter product rating"
              onChange={(e) => {
                setRatingProduct(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-image">Product category:</label>
            <input
              type="text"
              className="form-control"
              id="product-image"
              placeholder="Enter product rating"
              onChange={(e) => {
                setCategory(e.target.value);
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
