const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sizes = new Schema({
    sID: {
        type: String
    },
    size: {
        type: String
    }
})

module.exports = mongoose.model('sizes', sizes)