import React from "react";
import { Link } from "react-router-dom";

import AuthService from "../../../services/auth.service";
function UserInfo() {
  const userInfor = AuthService.getCurrentUser();
  // console.log(userInfor);

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
        <button className="btn btn-outline-dark mt-3 mb-3">
          <Link to="/updateuserinfor">Update User Information</Link>
        </button>
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
