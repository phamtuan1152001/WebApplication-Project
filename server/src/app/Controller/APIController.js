const mongoose = require('mongoose');

const products = require('../Models/ProductModel')

async function getAllProduct(req, res) {
  const product = await products.find();

  return res.status(200).json({
    message: "Oke",
    data: product,
  });
  /* try {
    const product = await products.find();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  } */
}

module.exports = {
    getAllProduct,
}