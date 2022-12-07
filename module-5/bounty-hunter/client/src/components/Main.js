import React, { useContext } from 'react';
import Bounty from './Bounty.js';
import BountyForm from './BountyForm.js';
import { ApiContext } from '../apiContext';

export default function Main() {
    const {bounties, addBounty, deleteBounty, updateBounty, handleFilter} = useContext(ApiContext) // using bounties state from context


    return(
        <div>
            <BountyForm btnText="Add Bounty" submit={addBounty}/>
            <br />
            <select  onChange={(e) => {handleFilter(e)}} className="filter-form">
                <option value="reset">All</option>
                <option value='Jedi'>Jedi</option>
                <option value='Sith'>Sith</option>
            </select>
            {bounties.map(bounty => <Bounty {...bounty} deleteBounty={deleteBounty} updateBounty={updateBounty} key={bounty._id}/>)}
        </div>
    )
}