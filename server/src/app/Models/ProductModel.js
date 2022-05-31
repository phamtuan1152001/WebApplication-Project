const mongoose = require('mongoose')
const Schema = mongoose.Schema

const product = new Schema({
    Name: {
        type: String
    },
    Price: {
        type:  Number
    },
    Descriptions: {
        type: Object
    },
    Image: {
        type: String
    },
    category: {
        type: String
    },
    amount: {
        type: Number
    },
    rating: {
        type: Object
    }
})

module.exports = mongoose.model('product', product)