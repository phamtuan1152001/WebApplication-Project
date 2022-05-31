import axios from "axios";
const API_URL = "http://localhost:5000/user/";
const register = (
  Firstname,
  Lastname,
  Address,
  Phone,
  email,
  password,
  confirmPassword
) => {
  return axios.post(API_URL + "signup", {
    Firstname,
    Lastname,
    Address,
    Phone,
    email,
    password,
    confirmPassword,
  })
    .then(response => console.log(response))
};
const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response;
      //   console.log(response.data.token);
      //   console.log(response.data.user);
      // console.log(response);
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};
export default AuthService;
