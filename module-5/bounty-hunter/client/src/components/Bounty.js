import React from "react"

export default function Bounty(props) {
    const { firstName, lastName, bountyAmount, type, deleteBounty, _id} = props
    
    return(
        <div className="bounty">
            <h1>{firstName} {lastName}</h1>
            <h2>{bountyAmount}</h2>
            <h2>{type}</h2>
            <button onClick={() => {deleteBounty(_id)}}>Delete</button>
        </div>
    )
}