import React from "react";
import "./ProductSelection.css";
function ProductSelection({ selection }) {
  return (
    <>
      <div className="products-selection-item">
        <div className="products-selection-control">
          <button>All Clothing</button>
        </div>
        <div className="products-selection-control">
          <button>Men's Clothing</button>
        </div>
        <div className="products-selection-control">
          <button>Woman's Clothing</button>
        </div>
        <div className="products-selection-control">
          <button>Jewelery</button>
        </div>
        <div className="products-selection-control">
          <button>Electronic</button>
        </div>
      </div>
    </>
  );
}

export default ProductSelection;
