import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AuthService from '../../../../services/auth.service';

function AddTrendProducts() {
    const [trendProducts, setTrendProduct] = useState([])
    const [loading, setLoading] = useState(false);
    const [idAdd, setIdAdd] = useState();
    const user = AuthService.getCurrentUser();

    useEffect(() => {
        let componentMounted = true;
        const getProducts = async () => {
          setLoading(true);
          const response = await axios.get("http://localhost:5000/products");
          if (componentMounted) {
            setTrendProduct(response.data);
            setLoading(false);
          }
          return () => {
            componentMounted = false;
          };
        };
        getProducts();
      },[]);

    const handleAdd = async (e) => {
        e.preventDefault();
        try {          
            let res = await fetch(`http://localhost:5000/admin/add-trending/${idAdd}`, {
              method: "POST",
              headers: {
                "Authorization": `${user.token}`
              }
            })
            if (res.status === 200) {
              console.log("Adding sucessful!");
            } else {
              console.log("Fail adding item!");
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
                {trendProducts.map((trendProduct) => (
                  <div className="card col-4" key={trendProduct._id}>
                    <div className="card-body">
                    <img
                      style={{width: "200px", height: "200px"}}
                      className="card-img-top"
                      src={trendProduct.Image}
                      alt={trendProduct.Name}
                    />
                      <h5 className="card-title">{trendProduct.Name}</h5>
                      <p className="card-text">
                        Designs:{" "}
                        {trendProduct.Descriptions &&
                          trendProduct.Descriptions.Designs}
                      </p>
                      <p className="card-text">
                      Material:{" "}
                        {trendProduct.Descriptions &&
                          trendProduct.Descriptions.Material}
                      </p>
                      <p className="card-text">
                      Origin:{" "}
                        {trendProduct.Descriptions &&
                          trendProduct.Descriptions.Origin}
                      </p>
                        <input 
                            type="radio" 
                            onChange={() => setIdAdd(trendProduct._id)}
                        />
                    </div>
                  </div>
                ))}
                <button className='btn btn-outline-dark mt-3 mb-3' onClick={handleAdd}>Add Item</button>
            </div>
          </>
        );
    }

  return (
    <>
        <div className='container mt-3'>
            <h1>Adding Trend Products</h1>
            <p>Choose the list item below</p>
            {loading ? <Loading/> : <GetAllProducts />}
        </div>
    </>
  )
}

export default AddTrendProducts