const express = require('express')
const bountyRouter = express()
const Bounty = require('../ models/bounty.js')
    // {
    //     firstName: 'Mike',
    //     lastName: 'Hawk',
    //     living: true,
    //     bountyAmount: 100000,
    //     type: 'Jedi',
    //     _id: uuidv4()
    // }

bountyRouter.route('/') // guess I cant use .route because parameters wont pass over

.get((req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

.post((req, res, next) => {
    new Bounty(req.body).save((err, savedBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

bountyRouter.route('/:bountyId')

.delete((req, res, next) => {
    Bounty.findOneAndDelete({ _id: req.params.movieId }, (err, deletedBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(deletedBounty)
    })
})

.put((req, res, next) => { 
    Bounty.findOneAndUpdate(
        { _id: req.params.movieId },
        { new: true },
        (err , updatedMovie) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            res.status(202).send(updatedMovie)
        }
    )
})

// need to add query requests for tuff like sith or jedi or is living 

module.exports = bountyRouter