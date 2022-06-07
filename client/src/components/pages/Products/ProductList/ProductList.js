import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

function ProductList({ products }) {
  //console.log(products[0].pID);
  return (
    <>
      {products.map((product, index) => (
        <div className="products-list-item" key={index}>
          <img
            className="img-products"
            src={product.Image}
            alt={product.Name}
          />

          <h3>{product.Name}</h3>
          <p className="product-list-item__price">
            <span>$</span>
            {product.Price}
          </p>
          <Link to={`/products/${product._id}`} className="btn btn-dark">
            <span>
              <i class="fa-solid fa-bag-shopping"></i>
            </span>
            Add to cart
          </Link>
        </div>
      ))}
    </>
  );
}

export default ProductList;
