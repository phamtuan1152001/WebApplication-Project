import React from "react";
import { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const url = "http://localhost:5000/api/v1/products";
        const response = await fetch(url);
        const responseJSON = await response.json();
        setProducts(responseJSON);
        //console.log("ResponseJSON:", responseJSON);
      } catch (error) {
        console.log("Failed to fetch products: ", error);
      }
    };
    getProducts();
  }, []);
  console.log("Products are", products);
  return (
    <>
      {
        <div className="contact-container">
          {products.map((product) => (
            <ul key={product._id}>
              <h1>{product.Name}</h1>
              <h2>{product.Price}</h2>
            </ul>
          ))}
        </div>
      }
    </>
  );
}

export default Contact;
