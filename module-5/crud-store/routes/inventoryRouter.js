const express = require('express')
const inventoryRouter = express.Router()
const inventory = require('../models/inventory.js')

// Routes
inventoryRouter.route('/')

    .get((req, res, next) => {
        inventory.find((err, items) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(items)
        })
    })
    
    .post((req, res, next) => {
        const newItem = new inventory(req.body)
        newItem.save((err, savedItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedItem)
        }) 
    })

inventoryRouter.route('/:itemId')

    .get((req, res, next) => {

    })

    .delete((req, res, next) => {

    })

    .put((req, res, next) => {

    })


module.exports = inventoryRouter