import React from 'react'
import 'antd/dist/antd.css';
import { Spin, Space } from 'antd';
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import { addCart } from "../../../../redux/action";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  // Store useDispatch in a variable
  const dispatch = useDispatch();

  const addProduct = (productsongtuan) => {
    dispatch(addCart(productsongtuan));
    //console.log(productsongtuan);
  };

  // console.log(product);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);
  console.log(product);
  // console.log(...new Set(product.map((item) => item.pID.Image)));

  const Loading = () => {
    return (
      <>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <Space size="large" align="center">
              <Spin size="large" />
            </Space>
          </div>
        </div>
      </>
    )
  };

  const ShowProduct = () => {
    return (
      <>
        {product.map((item, index) => (
          <div className="product-info-container" key={index}>
            <div className="product-info-item">
              <div className="product-info-img">
                <img
                  className="product-img"
                  src={item.pID.Image}
                  alt={item.pID.Name}
                />
              </div>
              <div className="product-info">
                <h1>{item.pID.Name}</h1>
                <h2>{item.pID.category}</h2>
                <h3>
                  <span>Rating: </span>
                  {item.pID.rating}
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </h3>
                <p>
                  <span>$</span>
                  {item.pID.Price}
                </p>
                <h4>{item.pID.Descriptions}</h4>
                <button onClick={() => addProduct(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return <>{loading ? <Loading /> : <ShowProduct />}</>;
}

export default Product