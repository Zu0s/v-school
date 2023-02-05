import React from 'react'
import Comment from './Comment.js'

export default function CommentList({commentList, deleteComment}) {
    return(
        <div>
            {commentList.map(comment => <Comment key={comment._id} {...comment} deleteComment={deleteComment}/>)}
        </div>
    )
}