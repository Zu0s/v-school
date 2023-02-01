const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt } = require('express-jwt')
require('dotenv').config()

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI,
    () => console.log('Connected to the DB')    
)

app.use(express.json())
app.use(morgan('dev'))

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/api/issue', require('./routes/issueRouter.js'))
app.use('/api/comment', require('./routes/commentRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === 'UnathorizedErrpr') {
        res.status(err.status)
    }
    return res.send({Errmsg: err.message})
})

app.listen(3001, () => {
    console.log('Server is running on local port 3001')
})
