import React, { useState, useEffect, createContext } from "react";

const UglyThingContext = createContext()

function UglyThingContextProvider(props) {
    const axios = require('axios')

    /* User Inputs */
    const[uglyThing, setUglyThing] = useState({
        title: "",
        imgUrl: "",
        description: ""
    })

    const [uglyThingList, setUglyThingList] = useState([])

    
    const handleChange = (e) => { 
        const {name, value} = e.target 

        return setUglyThing(prevUglyThing => {
            return {
                ...prevUglyThing,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => { // is working
        e.preventDefault()  
            axios.post("https://api.vschool.io/brandonbutkovich/thing", uglyThing)
                .then(response => console.log(response.data))
                .catch(error => console.log(error))
            
            return setUglyThing({
                title: "",
                imgUrl: "",
                description: ""
            })
    }

    useEffect(() => { 
        axios.get("https://api.vschool.io/brandonbutkovich/thing")
        .then(response => setUglyThingList(response.data))
        .catch(error => console.log(error))

        console.log("useEffect rendered")

    }, []) // I HAVE NO IDEA WHAT TO DO TO CHOOSE WHEN I NEED TO RE RENDER THE LIST 

    return(
        <UglyThingContext.Provider value = {{ uglyThing, uglyThingList, handleChange, handleSubmit }}>
            {props.children}
        </UglyThingContext.Provider>
    )
}

export {UglyThingContext, UglyThingContextProvider}
