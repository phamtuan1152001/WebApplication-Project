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
    size: {
        type: Schema.Types.Object, 
    },
    color: {
        type: Schema.Types.Object,
    }
})

module.exports = mongoose.model('details', details)