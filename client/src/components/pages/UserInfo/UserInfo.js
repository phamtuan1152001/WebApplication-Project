import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import AuthService from "../../../services/auth.service";
function UserInfo() {
  const [item, setItem] = useState([]);
  const [bill, setBill] = useState([])
  const [loading, setLoading] = useState(false);
  const userInfor = AuthService.getCurrentUser();
  // const idUser = userInfor.user._id
  // console.log(userInfor.user._id);

  // useEffect(() => {
  //   let componentMounted = true;
  //   const getProducts = async () => {
  //     setLoading(true);
  //     const response = await axios.get(`http://localhost:5000/user/${idUser}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${userInfor.token}`,
  //         }
  //       }
  //     );
  //     if (componentMounted) {
  //       setItem(response.data);
  //       setLoading(false);
  //       setBill(item)
  //     }
  //     return () => {
  //       componentMounted = false;
  //     };
  //   };
  //   getProducts();
  // }, []);
  // console.log(item);
  // const billData = bill[0]?.DetailID
  // console.log(billData);

  // console.log(userInfor.bill[0].DetailID[0].Name);

  const userBill = userInfor.bill;

  console.log(userBill);
  const ShowUserInfo = () => {
    return (
      <div className="container">
        <h1>
          <strong>User Information</strong>
        </h1>
        <table
          style={{ width: "60%", fontSize: "30px" }}
          class="table table-striped mt-3"
        >
          <thead>
            <tr className="row">
              <th className="col-4" scope="col">
                Information
              </th>
              <th className="col-8" scope="col">
                Detail
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="row">
              <td className="col-4">First name:</td>
              <td className="col-8">{userInfor.user.Firstname}</td>
            </tr>
            <tr className="row">
              <td className="col-4">Last name:</td>
              <td className="col-8">{userInfor.user.Lastname}</td>
            </tr>
            <tr className="row">
              <td className="col-4">Email:</td>
              <td className="col-8">{userInfor.user.email}</td>
            </tr>
            <tr className="row">
              <td className="col-4">Phone number:</td>
              <td className="col-8">{userInfor.user.Phone}</td>
            </tr>
            <tr className="row">
              <td className="col-4">Address:</td>
              <td className="col-8">{userInfor.user.Address}</td>
            </tr>
          </tbody>
        </table>
        <button style={{ width: "500px" }} className="btn btn-outline-dark mt-3 mb-3">
          <Link style={{ color: "black" }} to="/updateuserinfor">Update User Information</Link>
        </button>
        <h2 className="mt-3">History Order</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Bill</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userBill.map((item, index) => (
              item.DetailID.map((bill, idx) => (
                <tr key={idx}>
                  <td>{bill._id}</td>
                  <td>{bill.Name.substring(0, 50)}</td>
                  <td>${bill.Price}</td>
                  <td>Hoàn thành</td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
        {/* {userBill.map((item, index) => (
          <div>
            <h2>{item._id}</h2>
            <div>
              {item.DetailID.map((detail, idx) => {
                <span>{detail.Name.substring(0, 50)}</span>
              })}
            </div>
          </div>    
        ))} */}
      </div>
    );
  };

  return (
    <>
      <ShowUserInfo />
    </>
  );
}

export default UserInfo;
