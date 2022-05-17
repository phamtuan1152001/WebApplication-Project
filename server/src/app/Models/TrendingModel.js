const mongoose = require('mongoose')
const Schema = mongoose.Schema



const TrendingProduct = new Schema({
    productID: {
        type: Schema.Types.String,
        ref: 'product'
    }
})

module.exports = mongoose.model('TrendingProduct', TrendingProduct)