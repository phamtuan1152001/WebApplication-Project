import React from "react";

function ProductList({ products }) {
  return (
    <>
      <div className="products-list-container">
        {products.map((product) => (
          <div key={product.id} className="products-list-item">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
