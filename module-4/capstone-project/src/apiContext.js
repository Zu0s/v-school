import React, { useState, createContext } from "react";

const apiContext = createContext()

function ApiContext(props) { // use this for the two api calls I need to do 

    const  {colors, setColors} = useState() // random colors

    const newColors = () => { // api call for random colors

    }

    const  {patterns, setPatterns} = useState() // random patterns

    const newPatterns = () => { // api call for random patterns

    }

    return (
        <ApiContext.Provider>
            {props.children}
        </ApiContext.Provider>
    )
}

export { apiContext, ApiContext }