import React from "react";
import ProductList from "./ProductList/ProductList";
import ProductSelection from "./ProductSelection/ProductSelection";
import "./Products.css";
//import products from "./dataProducts";

function Products() {
  return (
    <>
      <div className="products-container">
        <div className="products-selections-container">
          <ProductSelection />
        </div>
        <div className="products-list-container">
          {/* {products.map((product) => (
            <ProductList
              key={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
            />
          ))} */}
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default Products;
