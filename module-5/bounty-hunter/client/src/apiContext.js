import React, { useState, useEffect, createContext } from "react";
import axios from 'axios'

const ApiContext = createContext()

function ApiContextProvider(props) {
    const [bounties, setBounties] = useState([])

    useEffect(() => {
        axios.get('/bounties')
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }, [])

    function addBounty(bountyData) {
        axios.post('/bounties', bountyData)
            .then(res => setBounties(prevBounties => prevBounties.push(res.data))) // change state to have the new bounty so no reload needed
            .catch(err => console.log(err))
    }
    
    function deleteBounty(bountyId) {
        axios.delete(`/bounties/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId)) // filter the bounty we justed delete request away from the state for react
            })
            .catch(err => console.log(err))
    }

    function updateBounty(bountyUpdate, bountyId) {
        axios.put(`/bounties/${bountyId}`, bountyUpdate)
            .then(res => {
                setBounties(prevBounties => prevBounties.map( bounty => bounty._id !== bountyId ? bounty : res.data))
            })
            .catch(err => console.log(err))
    }

    return(
        <ApiContext.Provider value={{bounties, addBounty, deleteBounty, updateBounty}}>
            { props.children }
        </ApiContext.Provider>
    )
}

export { ApiContext, ApiContextProvider }