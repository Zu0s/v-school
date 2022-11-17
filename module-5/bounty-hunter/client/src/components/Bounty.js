import React, { useState } from "react"
import BountyForm from "./BountyForm.js"

export default function Bounty(props) {
    const { firstName, lastName, bountyAmount, living, type, deleteBounty, updateBounty, _id} = props
    // need to add the turinary for the form to be added to this
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="bounty">
        { !editToggle ? 
            <>
                <h1> Name: {firstName} {lastName}</h1>
                <h2>Amount: {bountyAmount}</h2>
                <h2>Affiliaton: {type}</h2>
                <button onClick={() => deleteBounty(_id)}>Delete</button>
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
        :
            <>
                <BountyForm 
                    firstName={ firstName }
                    lastName={ lastName }
                    bountyAmount={ bountyAmount }
                    living={ living }
                    type={ type }
                    _id={ _id }
                    btnText="Update Bounty" 
                    submit={ updateBounty }
                /> {/* Should update the bounty */}
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
        }   
        </div>
    )
}