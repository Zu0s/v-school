import React from 'react'

export default function Comment({deleteComment, _id, description}) {
    const user = JSON.parse(localStorage.getItem("user"))
    
    return(
        <div>
            <h1>{description}</h1>
            {user._id === _id || <button onClick={() => deleteComment(_id)}>X</button>}
        </div>
    )
}