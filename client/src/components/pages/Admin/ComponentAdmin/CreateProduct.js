import React, { useState } from "react";
import 'antd/dist/antd.css';
import { Input, Radio, Space } from 'antd';

import "../AdminPage.css";

import AuthService from "../../../../services/auth.service";

import Swal from "sweetalert2";

const typeofProduct = [
  {
    id: 1,
    title: "men's clothing"
  },
  {
    id: 2,
    title: "woman's clothing"
  },
  {
    id: 3,
    title: "jewelery"
  },
]
function CreateProduct() {
  const user = AuthService.getCurrentUser();
  const tokenUser = user.token;

  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [imgProduct, setImgProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [category, setCategory] = useState(typeofProduct[0].title);
  const [ratingProduct, setRatingProduct] = useState("");
  const [size, setSize] = useState("")
  const [color, setColor] = useState("")

  const onChange = (e) => {
    setCategory(e.target.value);
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    AuthService.createProduct(
      nameProduct,
      priceProduct,
      imgProduct,
      descriptionProduct,
      ratingProduct,
      category,
      size,
      color,
      tokenUser
    ).then(
      () => {
        // console.log("Created successfully!");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Created Succesfully!",
          showConfirmButton: false,
          timer: 2000,
        });
      },
      (error) => {
        // console.log(error.response.data.error.message);
        const errMessage = error.response.data.error.message;
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Created Unsuccesfully! ${errMessage}`,
          showConfirmButton: false,
          timer: 3000,
        });
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
            <label htmlFor="product-image">Product category:</label>
            <Radio.Group onChange={onChange} value={category}>
              <Space direction="vertical">
                {typeofProduct.map(item => (
                  <Radio value={item.title} key={item.id}>{item.title}</Radio>
                ))}
              </Space>
            </Radio.Group>
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
            <label htmlFor="product-image">Product size:</label>
            <input
              type="text"
              className="form-control"
              id="product-image"
              placeholder="Enter product size"
              onChange={(e) => {
                setSize(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-image">Product color:</label>
            <input
              type="text"
              className="form-control"
              id="product-image"
              placeholder="Enter product color"
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </div>
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
