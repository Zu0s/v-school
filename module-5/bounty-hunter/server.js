const express = require('express')
const app = express() 
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(express.json())

app.use('/bounties', require('./routes/bounties.js'))

app.listen(3001, () => { console.log('the server is running on port 3001')})