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

    return(
        <ApiContext.Provider value={{bounties}}>
            { props.children }
        </ApiContext.Provider>
    )
}

export { ApiContext, ApiContextProvider }