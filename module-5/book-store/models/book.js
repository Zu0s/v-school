const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Book', bookSchema)