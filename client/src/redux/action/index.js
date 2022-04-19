// For add items into cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// For delete items from cart
export const deleteCart = (product) => {
  return {
    type: "DELETEITEM",
    payload: product,
  };
};
