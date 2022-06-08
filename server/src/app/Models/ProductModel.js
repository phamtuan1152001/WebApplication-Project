const mongoose = require('mongoose')
const Schema = mongoose.Schema

const product = new Schema({
    Name: {
        type: String
    },
    Price: {
        type:  Number
    },
    // Descriptions: {
    //     type: Object
    // },
    Descriptions: {
        type: String
    },
    Image: {
        type: String
    },
    category: {
        type: String
    },
    rating: {
        type: Object
    },
    size: {
        type: String
    },
    color: {
        type: String
    }
})

module.exports = mongoose.model('product', product)