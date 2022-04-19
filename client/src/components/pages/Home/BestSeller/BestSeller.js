import React from 'react'
import bestsellers from './dataBestSeller'
import './BestSeller.css'
import { Link } from "react-router-dom";

function BestSeller() {
  return (
    <>
      <h1 className="best-seller-title">Best Seller Products</h1>
      <div className="container row">
        {bestsellers.map((bestseller, index) => (
          <div key={index} className="col-md-3">
            <Link to="/products">
              <img
                className="img-best-seller"
                src={bestseller.img}
                alt={bestseller.name}
              />
            </Link>
            <h3>{bestseller.name}</h3>
            <p>{bestseller.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default BestSeller;