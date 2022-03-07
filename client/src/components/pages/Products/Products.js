import React from "react";
import ProductList from "./ProductList/ProductList";
import ProductSelection from "./ProductSelection/ProductSelection";
//import { Grid } from "@material-ui/core";
import products from "./dataProducts";

function Products() {
  return (
    <>
      <div className="products-container">
        <ProductSelection />
        <ProductList products={products} />
      </div>
    </>
  );
}

export default Products;
