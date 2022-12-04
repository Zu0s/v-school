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
        const newMovie = new Movie(req.body)
        newMovie.save((err, savedMovie) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedMovie)
        })
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
        //Doesnt not work for now
        res.send('not currently active')
    })

    // Delete one
    .delete((req, res, next) => {
        Movie.findOneAndDelete({ _id: req.params.movieId }, (err, deletedItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Succesfull deelted item ${deletedItem.title} from the database`)
        })
    })

    // Update
    .put((req, res, next) => {
        Movie.findOneAndUpdate(
            { _id: req.params.movieId },// Find this one to update
            req.body, // update the object with this data
            { new: true }, // send back the updated version instead of old version
            (err, updatedMovie) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                res.status(202).send(updatedMovie)
            }
        )
    })

module.exports = movieRouter