const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment.js')

commentRouter.get('/:issueId', (req, res, next) => {
    Comment.find( {issue: req.params.issueId}, (err, comments) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    } )
})

commentRouter.post('/:issueId', (req, res, next) => {
    req.body.user = req.auth._id
    req.body.issue = req.params.issueId
    const newComment = new Comment(req.body)

    newComment.save((err, savedComment) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

commentRouter.put('/:commentId', (req, res, next) => {
    Comment.findOneAndUpdate(
        { _id: req.params.commentId, user: req.auth._id },
        req.body,
        { new: true },
        ( err, updatedComment ) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedComment)
        }
    )
})

commentRouter.delete('/:commentId', (req, res, next) => {
    Comment.findOneAndDelete(
        { _id: req.params.commentId, user: req.auth._id },
        (err, deletedComment) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted Comment`)
        }
    )
})

module.exports = commentRouter
