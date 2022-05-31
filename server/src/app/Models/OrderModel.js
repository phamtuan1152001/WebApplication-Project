const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderProduct = new Schema({
    UserID: {
        type: Schema.Types.String,
        ref: 'Login'
    },
    DetailID: {
        type: Schema.Types.Array,
        ref: 'details'
    },
    TotalPrice: {
        type: Number
    },
    DatePrint: {
        type: Date
    }
})

module.exports = mongoose.model('OrderProduct', OrderProduct)