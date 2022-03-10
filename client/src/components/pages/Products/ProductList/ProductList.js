import React from "react";
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
        </div>
      ))}
    </>
  );
}

export default ProductList;
