import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

function ProductList({ products }) {
  return (
    <>
      {products.map((product) => (
        <div className="products-list-item card-products" key={product.id}>
          <img
            className="img-products"
            src={product.image}
            alt={product.title}
          />
          <h3>{product.title.substring(0, 12)}</h3>
          <p>
            <span>$</span>
            {product.price}
          </p>
          <Link to={`/products/${product.id}`}>
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
