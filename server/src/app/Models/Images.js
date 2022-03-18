const mongoose = require('mongoose')
const Schema = mongoose.Schema

const images = new Schema({
    ImageID: {
        type: String
    },
    Image: {
        type: String
    }
})

module.exports = mongoose.model('images', images)