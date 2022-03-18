const mongoose = require('mongoose')
const Schema = mongoose.Schema

const descriptions = new Schema({
    dID: {
        type: String
    },
    Designs: {
        type: String
    },
    Material: {
        type: String
    },
    Origin: {
        type: String
    }
})

module.exports = mongoose.model('descriptions', descriptions)