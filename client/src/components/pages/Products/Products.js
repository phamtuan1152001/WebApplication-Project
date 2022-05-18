import React from "react";
import { useState, useEffect } from "react";
import ProductList from "./ProductList/ProductList";
import "./Products.css";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:5000/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading....</>;
  };

  const filterProducts = (cat) => {
    const updateProducts = data.filter((x) => x.category === cat);
    setFilter(updateProducts);
  };

  return (
    <>
      <div className="container">
        <div className="row text-center mb-4">
          {/* <ProductSelection /> */}
          <div className="col">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setFilter(data)}
            >
              All Clothing
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-outline-secondary"
              onClick={() => filterProducts("men's clothing")}
            >
              Men's Clothing
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-outline-secondary"
              onClick={() => filterProducts("women's clothing")}
            >
              Woman's Clothing
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-outline-secondary"
              onClick={() => filterProducts("jewelery")}
            >
              Jewelery
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-outline-secondary"
              onClick={() => filterProducts("electronics")}
            >
              Electronic
            </button>
          </div>
        </div>
        <div className="products-list-container">
          {loading ? <Loading /> : <ProductList products={filter} />}
        </div>
      </div>
    </>
  );
}

export default Products;
