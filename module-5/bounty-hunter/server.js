const express = require('express')
const mongoose = require('mongoose')
const app = express() 
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(express.json())

mongoose.set('strictQuery', false)
mongoose.connect('process.env.MONGODB_URI',  
    () => console.log("Conected to the DB")
)


app.use('/bounties', require('./routes/bounties.js'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

app.listen(3001, () => { console.log('the server is running on port 3001')})