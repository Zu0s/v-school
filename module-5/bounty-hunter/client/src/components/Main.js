import React, { useContext } from 'react';
import Bounty from './Bounty.js';
import { ApiContext } from '../apiContext';

export default function Main() {
    const {bounties} = useContext(ApiContext) // using bounties state from context

    return(
        <div>
            {bounties.map(bounty => <Bounty {...bounty} key={bounty._id}/>)}
        </div>
    )
}