const mongoose = require('mongoose')
const Schema = mongoose.Schema

// this is ohh going to fucking break

const commentSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }, 
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    }
})

module.exports = mongoose.model('Comment', commentSchema)