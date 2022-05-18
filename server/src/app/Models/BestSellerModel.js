const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BestSellerProduct = new Schema({
    productID: {
        type: Schema.Types.String,
        ref: 'product'
    }
})

module.exports = mongoose.model('BestSellerProduct', BestSellerProduct)