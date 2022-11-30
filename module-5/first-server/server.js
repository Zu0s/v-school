// First Express Server 
const express = require ("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()

//middleware
app.use(express.json())
app.use(morgan('dev'))

// connect to database
mongoose.connect(process.env.MONGODB_URI,  
    () => console.log("Conected to the DB")
)


// Routes //
app.use('/movies', require("./routes/movieRouter.js"))

app.use('/tvShows', require('./routes/tvShowRouter.js'))

// Error handler - put above app.listen//
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//Server Listen //
app.listen(9000, () => { console.log("the server is running on Port 9000") }) 