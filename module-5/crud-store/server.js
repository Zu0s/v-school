const express = require ('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
// add .env tag

app.use(express.json())
app.use(morgan('dev'))

// route to inventory

// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(4269, () => { console.log('The server is runnign on Port 4269') })