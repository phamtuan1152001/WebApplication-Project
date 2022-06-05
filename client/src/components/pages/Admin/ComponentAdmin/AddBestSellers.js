import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AuthService from '../../../../services/auth.service';
import Swal from "sweetalert2";

function AddBestSellers() {
  const [bestSellers, setBestSeller] = useState([]);
  const [loading, setLoading] = useState(false);
  const [idAdd, setIdAdd] = useState();
  const user = AuthService.getCurrentUser();

  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/products");
      if (componentMounted) {
        setBestSeller(response.data);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      // let addItem =  axios.post(`http://localhost:5000/admin/add-bestseller/${idAdd}`, {
      //   headers: {
      //       "Authorization": `${user.token}`
      //     }
      // })
      // if (addItem.status === 200) {
      //     console.log("Adding sucessful!");
      //   } else {
      //     console.log("Fail adding item!");
      //   }

      let res = await fetch(
        `http://localhost:5000/admin/add-bestseller/${idAdd}`,
        {
          method: "POST",
          headers: {
            Authorization: `${user.token}`,
          },
        }
      );
      if (res.status === 200) {
        // console.log("Adding sucessful!");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Adding Succesfully!",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        // console.log("Fail adding item!");
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Adding Unsuccesfully!",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Loading = () => {
    return (
      <>
        <div>Loading</div>
      </>
    );
  };

  const GetAllProducts = () => {
    return (
      <>
        <div className="row">
          {bestSellers.map((bestSeller) => (
            <div className="card col-4" key={bestSeller._id}>
              <div className="card-body">
                <img
                  style={{ width: "200px", height: "200px" }}
                  className="card-img-top"
                  src={bestSeller.Image}
                  alt={bestSeller.Name}
                />
                <h5 className="card-title">
                  {bestSeller.Name.substring(0, 12)}
                </h5>
                <p className="card-text">
                  Designs:{" "}
                  {bestSeller.Descriptions && bestSeller.Descriptions.Designs}
                </p>
                <p className="card-text">
                  Material:{" "}
                  {bestSeller.Descriptions && bestSeller.Descriptions.Material}
                </p>
                <p className="card-text">
                  Origin:{" "}
                  {bestSeller.Descriptions && bestSeller.Descriptions.Origin}
                </p>
                <input type="radio" onChange={() => setIdAdd(bestSeller._id)} />
              </div>
            </div>
          ))}
          <button
            className="btn btn-outline-dark mt-3 mb-3"
            onClick={handleAdd}
          >
            Add Item
          </button>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container mt-3">
        <h1>Adding Best Seller</h1>
        <p>Choose the list item below</p>
        {loading ? <Loading /> : <GetAllProducts />}
      </div>
    </>
  );
}

export default AddBestSellers