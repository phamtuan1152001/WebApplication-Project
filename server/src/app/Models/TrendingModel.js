const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TrendingProduct = new Schema({
    productID: {
        type: String
    }
})

module.exports = mongoose.model('TrendingProduct', TrendingProduct)