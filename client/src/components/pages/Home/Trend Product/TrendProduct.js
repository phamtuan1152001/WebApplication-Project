import React from "react";
import products from "./dataTrendProducts";
import "./TrendProduct.css";
function TrendProduct() {
  return (
    <>
      <h1 className="title-trend-product">Trending Product</h1>
      <div className="container-trend-product">
        {products.map((product, index) => (
          <div key={index} className="trend-product-list">
              <img
                className="img-trend-product"
                src={product.img}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TrendProduct;
