const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = rqeuire('mongoose')
require('dotenv').config()

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(process.env.MONGODB_URI,
    () => console.log('Connect to the DB')
)

// routes

app.listen((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(6969, () => console.log('server is live on port 6969'))