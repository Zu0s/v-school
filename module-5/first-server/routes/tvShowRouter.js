const express = require('express')
const tvShowRouter = express.Router()
const { v4: uuidv4 } = require ('uuid')

// Fake Data //
const tvShows = [
    {title: "Rick and Morty",_id: uuidv4(), },
    {title: "Overlord",_id: uuidv4(), }, 
    {title: "My Life as a Slime",_id: uuidv4(), },
    {title: "Assassination Classroom",_id: uuidv4(), },
]


tvShowRouter.route('/:tvShowId')

.get((req, res, next) => {
    foundTvShow = tvShows.find(tvShow => tvShow._id === req.params.tvShowId)
    if(!foundTvShow) {
        const error = new Error(`The item with the id of ${req.params.tvShowId} could not be found`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(`${foundTvShow.title} is free to watch with a prime membership`)
})


.delete((req, res) => {
    const tvShowIndex = tvShows.findIndex(tvShow => tvShow._id === req.params.tvShowId)
    tvShows.splice(tvShowIndex, 1)
    res.status(201).send('succesfully delete the tv show')
})



tvShowRouter.route('/')
.get((req, res) => {
    res.send(tvShows)
})

.post((req, res) => {
    req.body._id = uuidv4()
    tvShows.push(req.body)
    res.status(201).send(`Succesfully added ${req.body.title} to the database`)
})

module.exports = tvShowRouter