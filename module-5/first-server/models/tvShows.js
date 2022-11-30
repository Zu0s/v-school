const mongoose = require("mongoose")
const Schema = mongoose.Schema

// TV Show Blueprint

const tvShowSchema = new Schema({
    title:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("TvShow", tvShowSchema)