const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')

// Routes
inventoryRouter.route('/')

    .get((req, res, next) => {
        Inventory.find((err, items) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(items)
        })
    })
    
    .post((req, res, next) => {
        const newItem = new Inventory(req.body)
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
        Inventory.findOneAndDelete({_id: req.params.itemId}, (err ,deletedItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).res.send({ itemDeleted: deletedItem })
        })
    })

    .put((req, res, next) => {
        Inventory.findOneAndUpdate(
            {_id: req.params.itemId}, 
            req.body,
            {new: true},
            (err, updatedItem) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                res.status(202).send(updatedItem)
            }
        )
    })


module.exports = inventoryRouter