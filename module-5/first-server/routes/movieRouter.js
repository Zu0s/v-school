const express = require('express')
const movieRouter = express.Router()
const Movie = require('../models/movie.js')

// Routes //
movieRouter.route('/')

    //Get All
    .get((req, res, next) => {
        Movie.find((err, movies)=> {
            if(err) {
                res.status(500)
                return next(err)
            }
            console.log('test')
            return res.status(200).send(movies)
        })
    })

    // Post
    .post((req, res, next) => {
        req.body._id = uuidv4()
        movies.push(req.body)
        res.status(201).send (req.body)
    })

movieRouter.get("/search/genre", (req, res, next) => {
    const genre = req.query.genre
    if(!genre) {
        const error = new Error("You must provide a genre")
        res.status(500)
        return next(error)
    }
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})

movieRouter.route('/:movieId')

    // Get One
    .get((req, res, next) => { 
        const foundMovie = movies.find(movie => movie._id === req.params.movieId)
        if(!foundMovie) {
            const error = new Error(`The item with the id ${req.params.movieId} was not found`)
            res.status(500)
            return next(error)
        }
        res.send(foundMovie)
    })

    // Delete one
    .delete((req, res, next) => {
        const movieId = req.params.movieId
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        if(!movieIndex) {
            const error = new Error(`The item with the id ${movieId} was not found`)
            res.status(500)
            return next(error)
        }
        movies.splice(movieIndex, 1)
        res.status(200).send('succesfully delete movie')
    })

    // Update
    .put((req, res, next) => {
        const movieId = req.params.movieId
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        const updatedMovie = Object.assign(movies[movieIndex], req.body)
        res.status(202).send(updatedMovie)
    })

module.exports = movieRouter