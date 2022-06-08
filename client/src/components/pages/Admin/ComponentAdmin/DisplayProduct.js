import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AuthService from '../../../../services/auth.service';
import Swal from "sweetalert2";
import "../AdminPage.css"
function DisplayProduct() {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const [idDel, setIdAdd] = useState();
    const user = AuthService.getCurrentUser();

    useEffect(() => {
        let componentMounted = true;
        const getProducts = async () => {
            setLoading(true);
            const response = await axios.get("http://localhost:5000/products/");
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

    console.log(item);

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(
                `http://localhost:5000/admin/delete-product/${idDel}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `${user.token}`,
                    },
                }
            );
            if (res.status === 200) {
                // console.log("Deleting sucessful!");
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Delete Succesfully!",
                    showConfirmButton: false,
                    timer: 3000,
                });
                window.location.reload();
            } else {
                // console.log("Fail Deleting item!");
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Delete Unsuccesfully!",
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
                    {item.map((item) => (
                        <div className="card col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3" key={item._id}>
                            <div className="card-item-content card-body d-flex flex-column justify-content-center align-items-center">
                                <img
                                    style={{ width: "200px", height: "200px" }}
                                    className="card-img-top"
                                    src={item.Image}
                                    alt={item.Name}
                                />
                                <h5 className="card-title">
                                    {item.Name.substring(0, 10)}
                                </h5>
                                <p className="card-text card-descriptions">
                                    {item.Descriptions?.substring(0, 50)}
                                </p>
                                <input type="radio" onChange={() => setIdAdd(item._id)} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center'>
                    <button
                        className="btn btn-outline-dark mt-3 mb-3"
                        onClick={handleAdd}
                    >
                        Delete Item
                    </button>
                </div>
            </>
        );
    };

    return (
        <>
            <div className="container mt-3">
                <h1>Display Product</h1>
                <p>The list item below</p>
                {loading ? <Loading /> : <GetAllProducts />}
            </div>
        </>
    )
}

export default DisplayProduct