const express = require ('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.json())
app.use(morgan('dev'))

// mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI,  
    () => console.log("Conected to the DB")
)


// Routes
app.use('/inventory', require('./routes/inventoryRouter.js'))

// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// App Listen
app.listen(4500, () => { console.log('The server is running on Port 4500') })