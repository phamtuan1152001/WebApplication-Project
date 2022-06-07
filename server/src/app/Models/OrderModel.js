const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderProduct = new Schema({
    // UserID: {
    //     type: Schema.Types.String,
    //     ref: 'Login'
    // },
    Firstname: {
        type: String
    },
    Lastname: {
        type: String
    },
    Email: {
        type: String
    },
    Address: {
        type: String
    },
    Country: {
        type: String
    },
    DetailID: {
        type: Schema.Types.Array,
        ref: 'details'
    },
    // TotalPrice: {
    //     type: Number
    // },
    // DatePrint: {
    //     type: Date
    // }
})

module.exports = mongoose.model('OrderProduct', OrderProduct)