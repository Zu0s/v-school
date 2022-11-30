const express = require('express')
const movieRouter = express.Router()
const { v4: uuidv4 } = require ('uuid')

const movies = [
    {title: "die hard", genre: "action", _id: uuidv4(), },
    {title: "star wars IV", genre: "fantasy", _id: uuidv4(), },
    {title: "lion king", genre: "fantasy", _id: uuidv4(), },
    {title: "firday the 13th", genre: "horror", _id: uuidv4() }
]

// Routes //

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

.get((req, res, next) => { 
    const foundMovie = movies.find(movie => movie._id === req.params.movieId)
    if(!foundMovie) {
        const error = new Error(`The item with the id ${req.params.movieId} was not found`)
        res.status(500)
        return next(error)
    }
    res.send(foundMovie)
})

// DELETE ONE 
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

// update
.put((req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.status(202).send(updatedMovie)
})

movieRouter.route('/')
.get((req, res) => {
    res.status(200).send(movies)
})
.post((req, res) => {
    req.body._id = uuidv4()
    movies.push(req.body)
    res.status(201).send (req.body)
})





module.exports = movieRouter