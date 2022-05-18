import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AuthService from '../../../../services/auth.service';

function DisplayBestSeller() {
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(false);
  const [idDel, setIdAdd] = useState();
  const user = AuthService.getCurrentUser();

  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/bestseller/");
      if (componentMounted) {
        setItem(response.data);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  },[]);

   console.log(item);

const handleAdd = async (e) => {
    e.preventDefault();
    try {
        let res = await fetch(`http://localhost:5000/admin/delete-bestseller/${idDel}`, {
          method: "DELETE",
          headers: {
            "Authorization": `${user.token}`
          }
        })
        if (res.status === 200) {
          console.log("Deleting sucessful!");
        } else {
          console.log("Fail Deleting item!");
        }
    } catch (error) {
        console.log(error);
    }
}

const Loading = () => {
    return(
        <>
            <div>Loading</div>
        </>
    )
}

  const GetAllProducts = () => {
    return (
      <>
        <div className="row">
            {item.map((item) => (
              <div className="card col-3" key={item.productID._id}>
                <div className="card-body">
                <img
                  style={{width: "200px", height: "200px"}}
                  className="card-img-top"
                  src={item.productID.Image}
                  alt={item.productID.Name}
                />
                  <h5 className="card-title">{item.productID.Name}</h5>
                  <p className="card-text">
                    Designs:{" "}
                    {item.productID.Descriptions &&
                      item.productID.Descriptions.Designs}
                  </p>
                  <p className="card-text">
                  Material:{" "}
                    {item.productID.Descriptions &&
                      item.productID.Descriptions.Material}
                  </p>
                  <p className="card-text">
                  Origin:{" "}
                    {item.productID.Descriptions &&
                      item.productID.Descriptions.Origin}
                  </p>
                    <input 
                        type="radio" 
                        onChange={() => setIdAdd(item._id)}
                    />
                </div>
              </div>
            ))}
            <button className='btn btn-outline-dark mt-3 mb-3' onClick={handleAdd}>Delete Item</button>
        </div>
      </>
    );
}
  return (
    <>
      <div className='container mt-3'>
            <h1>Display Best Seller</h1>
            <p>The list item below</p>
            {loading ? <Loading/> : <GetAllProducts />}
        </div>
    </>
  )
}

export default DisplayBestSeller