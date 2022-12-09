const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = rqeuire('mongoose')

app.use(express.json())
app.use(morgan('dev'))

// mongoose connect

// routes

app.listen((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(6969, () => console.log('server is live on port 6969'))