const mongoose = require('mongoose');

const products = require('../Models/ProductModel')

async function getAllProduct(req, res){

    const product = await products.find()

    return res.status(200).json({
        message: 'Oke',
        data: product
    });
}

module.exports = {
    getAllProduct,
}