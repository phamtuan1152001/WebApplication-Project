const mongoose = require('mongoose');

const products = require('../Models/ProductModel')
const categories = mongoose.model('categories')
const detail = require('../Models/Detail')


// Show all products belong to its category in database
async function getAllProduct(req, res) {
    const product = await products.find();

    return res.status(200).json(product);
}

// Show detail product
async function DetailProcduct (req, res){
    // Show all product information
    const product = await products.findOne({
        _id:  req.params.keyProduct
    })
    const details = await detail.find({pID:{$regex: product._id}})
    .populate({
        path: 'pID',
    })

    
    res.send(details)
}

// Search product 
async function Search (req, res){
    const data = await products.find({
        "$or": [
            {
                Name:{
                    $regex: req.params.key
                } 
            }
        ]
    })
    res.send(data)
}

module.exports = {
    Search,
    DetailProcduct,
    getAllProduct
}