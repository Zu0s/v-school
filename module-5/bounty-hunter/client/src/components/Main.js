import React, { useContext } from 'react';
import Bounty from './Bounty.js';
import BountyForm from './BountyForm.js';
import { ApiContext } from '../apiContext';

export default function Main() {
    const {bounties, addBounty, deleteBounty} = useContext(ApiContext) // using bounties state from context
    return(
        <div>
            <BountyForm btnText="Add Bounty" submit={addBounty}/>
            <br />
            {bounties.map(bounty => <Bounty {...bounty} deleteBounty={deleteBounty} key={bounty._id}/>)}
        </div>
    )
}