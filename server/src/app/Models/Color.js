const mongoose = require('mongoose')
const Schema = mongoose.Schema

const colors = new Schema({
    coID: {
        type: String
    },
    color: {
        type: String
    }
})

module.exports = mongoose.model('colors', colors)