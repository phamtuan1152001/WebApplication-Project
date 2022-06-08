const mongoose = require('mongoose')
const Schema = mongoose.Schema

var product = mongoose.model('product')


const details = new Schema({
    deID: {
        type: String
    },
    pID: {
        type: Schema.Types.String,
        ref: 'product' 
    },
    // amount: {
    //     type: Number
    // },
    // size: {
    //     type: Schema.Types.Array, 
    // },
    // color: {
    //     type: Schema.Types.Array,
    // }
})

module.exports = mongoose.model('details', details)