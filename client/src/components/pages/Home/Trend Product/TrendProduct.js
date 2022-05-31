import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./TrendProduct.css";
import { Link } from "react-router-dom";

function TrendProduct() {
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/trending/");
      if (componentMounted) {
        setItem(response.data);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  // console.log(item);
  return (
    <>
      <h1 className="title-trend-product">Trending Product</h1>
      <div className="container row">
        {item.map((item) => (
          <div key={item.productID._id} className="col-md-3 d-flex  flex-column justify-content-center align-items-center">
            <Link to="/products">
              <img
                className="img-trend-product"
                src={item.productID.Image}
                alt={item.productID.Name}
              />
            </Link>
            <h3>{item.productID.Name.substring(0, 12)}</h3>
            <p className="text-center">{item.productID.Price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TrendProduct;
