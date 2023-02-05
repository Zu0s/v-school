import React from 'react'
import { Link } from 'react-router-dom'

// What does issues need
// upvotes and downvotes need to be buttons that do put requests for updating 
// clicking on a todo to link to a page with comments that does a get request for the comments
// 

export default function Issue({_id, title, description, upvotes, downvotes, addVote}) {
    return(
        <div>
            <Link to={`/issue/${_id}`}>
                <h1>{title}</h1>
                <h3>{description}</h3>
            </Link>
            <button onClick={() => addVote(_id, "upvote")}>Upvotes: {upvotes.length}</button>
            <button onClick={() => addVote(_id, "downvote")}>Downvotes: {downvotes.length}</button>
            {/* <h3>upvotes: {upvotes.length}</h3>
            <h3>upvotes: {downvotes.length}</h3> */}
        </div>
    )
}