import React from 'react'
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import { addCart, deleteCart } from "../../../../redux/action";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  // Store useDispatch in a variable
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    console.log(product);
  };

  const deleteProduct = (product) => {
    dispatch(deleteCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
      //console.log(response);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="loading">
          <p>Loading.......hihituanne</p>
        </div>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="product-info-container">
          <div className="product-info-item">
            <div className="product-info-img">
              <img
                className="product-img"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="product-info">
              <h1>{product.title}</h1>
              <h2>{product.category}</h2>
              <h3>
                <span>Rating: </span>
                {product.rating && product.rating.rate}
                <span>
                  <i class="fa-solid fa-star"></i>
                </span>
              </h3>
              <p>
                <span>$</span>
                {product.price}
              </p>
              <h4>{product.description}</h4>
              <button onClick={() => addProduct(product)}>Add to Cart</button>
              <button className="product-cart">Go to Cart</button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return <>{loading ? <Loading /> : <ShowProduct />}</>;
}

export default Product