const express = require('express')
const addIdModule = express()
const { v4: uuidv4 } = require ('uuid')

const id = { _id: uuidv4() }

const middleware = addIdModule.use('/', (req, res, next) => {
    console.log('this ran')
    Object.assign(req.body, id)
    next()
})

module.exports = {middleware}