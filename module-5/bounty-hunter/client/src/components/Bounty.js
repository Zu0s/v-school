import React from "react"

export default function Bounty(props) {
    const { firstName, lastName, living, bountyAmount, type, _id} = props
    
    return(
        <div>
            <h1>{firstName} {lastName}</h1>
            <h2>{bountyAmount}</h2>
            <h2>{type}</h2>
        </div>
    )
}