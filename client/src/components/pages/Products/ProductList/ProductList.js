import React from "react";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "./ProductList.css";

function ProductList() {
  /* {
    /* products */
  /* img,
  name,
  price, 
  } */
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  //let componentMounted = true;

  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        //console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => (
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
  };

  return (
    <>
      {/* <div className="products-list-item">
        {<img src={img} alt={name} />
        <h3>{name}</h3>
        <p>{price}</p>}
        {loading ? <Loading /> : <ShowProducts />}
      </div> */}
      {loading ? <Loading /> : <ShowProducts />}
    </>
  );
}

export default ProductList;
