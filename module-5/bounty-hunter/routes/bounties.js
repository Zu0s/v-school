const express = require('express')
const bountyRouter = express()
const Bounty = require('../models/bounty.js')
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
    console.log('first test')
    Bounty.find((err, bounties) => {
    console.log('second test')
        if(err) {
            console.log('third test')
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
    Bounty.findOneAndDelete({ _id: req.params.bountyId }, (err, deletedBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(deletedBounty)
    })
})

.put((req, res, next) => { 
    console.log(req.params)
    Bounty.findOneAndUpdate(
        { _id: req.params.bountyId },
        req.body,
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

bountyRouter.get('/type', (req, res, next) => {
    Bounty.find({ type: req.query.type }, (err, bounties) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(bounties)
    }
    )
})

module.exports = bountyRouter