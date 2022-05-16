const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BestSellerProduct = new Schema({
    productID: {
        type: String
    }
})

module.exports = mongoose.model('BestSellerProduct', BestSellerProduct)