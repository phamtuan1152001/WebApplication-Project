import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

function ProductList({ products }) {
  return (
    <>
      {products.map((product) => (
        <div className="products-list-item" key={product._id}>
          <img
            className="img-products"
            src={product.Image}
            alt={product.Name}
          />

          <h3>{product.Name.substring(0, 12)}</h3>
          <p>
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
