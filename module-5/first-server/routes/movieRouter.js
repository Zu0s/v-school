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

// GET one
movieRouter.get('/:movieId', (req, res) => { 
    const foundMovie = movies.find(movie => movie._id === req.params.movieId)
    res.send(`The movie you have selected is ${foundMovie.title}`)
})

movieRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})

// DELETE ONE 
movieRouter.delete('/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send('succesfully delete movie')
})

// update
movieRouter.put('/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.send(updatedMovie)
})

movieRouter.route('/')
.get((req, res) => {
    res.send(movies)
})
.post((req, res) => {
    req.body._id = uuidv4()
    movies.push(req.body)
    res.send (`Successfully added ${req.body.title} to the database`)
})





module.exports = movieRouter