const express = require('express')
const app = express() 
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(express.json())

app.use('/bounty', require('./routes/bounty.js'))

app.listen(8000, () => { console.log('the server is running on port 8000')})