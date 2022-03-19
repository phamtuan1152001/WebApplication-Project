const mongoose = require('mongoose');

const products = require('../Models/ProductModel')
const categories = mongoose.model('categories')
const detail = require('../Models/Detail')


// Show all products belong to its category in database
async function ShowProduct (req, res){
    const catePart = await categories.findOne({
        name: {
            $regex: req.params.key
        }
    })
    const Product = await products.find({Cid:{$regex: catePart.Cid}})
    .sort({Price: 1})
    .populate({
        path: 'Cid',
        select: 'name'
    })
    res.send(Product)
    
}

// Show detail product
async function DetailProcduct (req, res){
    // Show all product information
    const product = await products.findOne({
        Name: {
            $regex: req.params.keyProduct
        }
    })
    const details = await detail.find({pID:{$regex: product.pID}})
    .populate({
        path: 'pID',
        populate: {
            path: 'Cid',
            select: 'name'
        }
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
    ShowProduct,
    DetailProcduct
}