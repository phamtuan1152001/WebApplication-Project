const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categories = new Schema({
    Cid: {
        type: String
    },
    name: {
        type: String
    }
})

module.exports = mongoose.model('categories', categories)