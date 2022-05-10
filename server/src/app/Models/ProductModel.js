const mongoose = require('mongoose')
const Schema = mongoose.Schema

require("../models/Categories")

var categories = mongoose.model('categories')

const product = new Schema({
    Cid: {
        type: Schema.Types.String,
        ref: 'categories' 
    },
    Image: {
        type: String
    },
    Name: {
        type: String
    },
    Price: {
        type:  Number
    },
    pID: {
        type: String
    },
    Descriptions: {
        type: Schema.Types.Object
    }
})

module.exports = mongoose.model('product', product)