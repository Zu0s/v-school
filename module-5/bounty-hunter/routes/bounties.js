const express = require('express')
const bountyRouter = express()
const { v4 : uuidv4 } = require("uuid")

// Fake Data //

const bounties = [
    {
        firstName: 'Mike',
        lastName: 'Hawk',
        living: true,
        bountyAmount: 100000,
        type: 'Jedi',
        _id: uuidv4()
    },
    {
        firstName: 'Peter',
        lastName: 'File',
        living: true,
        bountyAmount: 10000,
        type: 'Sith',
        _id: uuidv4()
    }
]

bountyRouter.route('/') // guess I cant use .route because parameters wont pass over

.get((req, res) => {
    res.send(bounties)
})

.post((req, res) => {
    req.body._id = uuidv4()
    bounties.push(req.body)
    res.send(`succesfully added a bounty on the ${req.body.type}, ${req.body.firstName} ${req.body.lastName} for ${req.body.bountyAmount}`)
})

bountyRouter.route('/:bountyId')

.delete((req, res) => {
    const bountyIndex = bounties.findIndex(bounty => bounty._id === req.params.bountyId)
    bounties.splice(bountyIndex, 1)
    res.send('Succesfully removed the bounty')
})

.put((req, res) => { 
    const bountyIndex = bounties.findIndex(bounty => bounty._id === req.params.bountyId)
    res.send(Object.assign(bounties[bountyIndex], req.body))
})



module.exports = bountyRouter