import React, { useState, useEffect, createContext } from "react";

const UglyThingContext = createContext()

function UglyThingContextProvider(props) {
    const axios = require('axios')

    /* User Inputs */
    const[uglyThing, setUglyThing] = useState({
        _id: true,
        savedItem: {
            title: "",
            imgUrl: "",
            description: ""
        }
    })

    const [uglyThingList, setUglyThingList] = useState([])

    
    const handleChange = (e) => { 
        const {name, value} = e.target 


        return setUglyThing(prevUglyThing => {
            let currentName = prevUglyThing.savedItem.name
            return {
                ...prevUglyThing,
                [currentName]: value
            }
        })
    }

    const handleSubmit = (e) => { // is working
        e.preventDefault()  
                if(uglyThing.isEdit) {
                    axios.post("https://api.vschool.io/brandonbutkovich/thing", uglyThing.savedItem)
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error))
                } else {
                    axios.put(`https://api.vschool.io/brandonbutkovich/thing${uglyThing._id}`, uglyThing.savedItem)
                }
            
            return setUglyThing(() => {
                return {
                    isEdit: true,
                    savedItem:{
                        title: "",
                        imgUrl: "",
                        description: ""
                    }
                }
            })
    }

    // const handleEdit = (e) => { // need to give the button the props
    //     // const {title, imgUrl, description, _id } = e

    //     console.log(`before changed state ${uglyThing}`)
    //     setUglyThing("This isn't working even")
    //     console.log(`after changed state ${uglyThing}`)
    // }

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
