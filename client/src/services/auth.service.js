import axios from "axios";
const API_URL = "http://localhost:5000/user/";
const API_URL_CREATE_PRODUCT = "http://localhost:5000/";

const checkout = (
  firstName,
  lastName,
  email,
  address,
  country,
  itemCart,
  tokenUser
) => {
  return axios.post(API_URL_CREATE_PRODUCT +
    "v1/api/bill",
    {
      Firstname: firstName,
      Lastname: lastName,
      Email: email,
      Address: address,
      Country: country,
      DetailID: itemCart,
    },
    {
      headers: {
        Authorization: `Bearer ${tokenUser}`,
      }
    }
  )
    .then(response => console.log(response))
}

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

const createProduct = (
  nameProduct,
  priceProduct,
  imgProduct,
  descriptionProduct,
  ratingProduct,
  category,
  tokenUser
) => {
  return axios.post(API_URL_CREATE_PRODUCT +
    "admin/create-product",
    {
      Name: nameProduct,
      Price: priceProduct,
      Image: imgProduct,
      Descriptions: descriptionProduct,
      category: category,
      rating: ratingProduct,
    },
    {
      headers: {
        Authorization: `${tokenUser}`,
      }
    }
  )
    .then(response => console.log(response))
}

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
  checkout,
  register,
  login,
  logout,
  getCurrentUser,
  createProduct
};

export default AuthService;
