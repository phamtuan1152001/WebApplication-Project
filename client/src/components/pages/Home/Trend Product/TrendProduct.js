import React from "react";
import products from "./dataTrendProducts";
import "./TrendProduct.css";
import { Link } from "react-router-dom";

function TrendProduct() {
  return (
    <>
      <h1 className="title-trend-product">Trending Product</h1>
      <div className="container row">
        {products.map((product, index) => (
          <div key={index} className="col-md-3">
            <Link to="/products">
              <img
                className="img-trend-product"
                src={product.img}
                alt={product.name}
              />
            </Link>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TrendProduct;
