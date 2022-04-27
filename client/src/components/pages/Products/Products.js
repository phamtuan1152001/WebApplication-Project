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
      const response = await fetch("https://fakestoreapi.com/products");
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
      <div className="products-container">
        <div className="products-selections-container">
          {/* <ProductSelection /> */}
          <div className="products-selection-item">
            <div className="products-selection-control">
              <button onClick={() => setFilter(data)}>All Clothing</button>
            </div>
            <div className="products-selection-control">
              <button onClick={() => filterProducts("men's clothing")}>
                Men's Clothing
              </button>
            </div>
            <div className="products-selection-control">
              <button onClick={() => filterProducts("women's clothing")}>
                Woman's Clothing
              </button>
            </div>
            <div className="products-selection-control">
              <button onClick={() => filterProducts("jewelery")}>
                Jewelery
              </button>
            </div>
            <div className="products-selection-control">
              <button onClick={() => filterProducts("electronics")}>
                Electronic
              </button>
            </div>
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
