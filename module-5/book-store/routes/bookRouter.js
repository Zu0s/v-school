const express = require('express')
const bookRouter = express.Router()
const Book = require('../models/book.js')

bookRouter.route('/')

    .get((req, res, next) => {
        Book.find((err, books) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(books)
        })
    })

    .post((req, res, next) => {
        new Book(req.body).save((err, savedbook) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedbook)
        })
    })

module.exports = bookRouter