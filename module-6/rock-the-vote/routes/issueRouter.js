const express = require('express')
const issue = require('../models/issue')
const issueRouter = express.Router()
const Issue = require('../models/issue')

issueRouter.get('/', (req, res, next) => { // get all
    Issue.find((err, issues) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

issueRouter.get('/user', (req, res, next) => { // get issues by id
    Issue.find({user: req.auth._id}, (err, issues) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

issueRouter.post('/', (req, res, next) => {
    req.body.user = req.auth._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

issueRouter.delete('/:issueId', (req, res, next) => {
    Issue.findOneAndDelete(
        { _id: req.params.issueId, user: req.auth._id }, 
        (err, deletedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfullly deleted issue: ${deletedIssue.title}`)
        }
    )
})

issueRouter.put('/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId, user: req.auth._id },
        req.body,
        { new: true },
        (err, updatedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(202).send(updatedIssue)
        }
    )
})

issueRouter.put('/upvote/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId, user: req.auth._id },
        {
            $pull: {downvotes: req.auth._id},
            $addToSet: {upvotes: req.auth._id}
        },
        { new: true },
        (err, updatedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(202).send(updatedIssue)
        }
    )
})

issueRouter.put('/downvote/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId, user: req.auth._id },
        {
            $pull: {upvotes: req.auth._id},
            $addToSet: {downvotes: req.auth._id}
        },
        { new: true },
        (err, updatedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(202).send(updatedIssue)
        }
    )
})


module.exports = issueRouter