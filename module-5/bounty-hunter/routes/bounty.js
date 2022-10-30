const express = require('express')
const bountyRouter = express()
const { v4 : uuidv4 } = require("uuid")

// Fake Data //

const bounties = [
    {
        firstName: 'Brandon',
        lastName: 'Butkovich',
        living: true,
        bountyAmount: 100000,
        type: 'Sith',
        _id: uuidv4()
    },
    {
        firstName: 'Jessie',
        lastName: 'Cooksey',
        living: true,
        bountyAmount: 10000,
        type: 'Jedi',
        _id: uuidv4()
    }
]

bountyRouter.route('/')

.get((req, res) => {
    res.send(bounties)
})

.post((req, res) => {
    req.body._id = uuidv4()
    bounties.push(req.body)
    res.send(`succesfully added a bounty on the ${req.body.type}, ${req.body.firstName} ${req.body.lastName} for ${req.body.bountyAmount}`)
})

module.exports = bountyRouter