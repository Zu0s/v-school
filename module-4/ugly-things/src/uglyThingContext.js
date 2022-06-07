import React, { useState, useEffect, createContext } from "react";

const UglyThingContext = createContext()

function UglyThingContextProvider(props) {
    const axios = require('axios')

    /* User Inputs */
    const[uglyThing, setUglyThing] = useState({
        savedItem: {
            title: "",
            imgUrl: "",
            description: ""
        }
    })

    const [uglyThingList, setUglyThingList] = useState([])

    
    const handleChange = (e) => { 
        const {name, value} = e.target 

        setUglyThing(prevUglyThing => {
            // let currentName = prevUglyThing.savedItem
            return {
                ...prevUglyThing,
                savedItem: {
                    ...prevUglyThing.savedItem,
                    [name]: value
                }
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
            axios.post("https://api.vschool.io/brandonbutkovich/thing", uglyThing.savedItem)
                .then(res => {
                    console.log(res.data)
                    resetUglyThing()

                    setUglyThingList(prevState => {
                        return [...prevState, res.data]
                    })
                })
                .catch(error => console.log(error))
                    

    }

    // const handleEdit = (_id) => { 
    //     return event => {
    //         event.preventDefault();

    //         axios.put(`https://api.vschool.io/brandonbutkovich/thing/${_id}`, uglyThing.savedItem)
    //             .then(resetUglyThing())
    //             .catch(err => console.log(err))
    //     }
    // }

    const handleEdit = _id => event => {
        event.preventDefault()

        console.log(`Please work. Id equal to: ${_id}`)
            axios.put(`https://api.vschool.io/brandonbutkovich/thing/${_id}`, uglyThing.savedItem)
                .then(resetUglyThing())
                .catch(err => console.log(err))
    }



    const handleDelete = (_id) => {
        console.log(_id)
        axios.delete(`https://api.vschool.io/brandonbutkovich/thing/${_id}`)
        .then(res => console.log(res)) // HOW TO TOGGLE RELOAD
        .catch(err => console.log(err))
    }

    const resetUglyThing = () => { 
        setUglyThing(() => {
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


    useEffect(() => { 
        axios.get("https://api.vschool.io/brandonbutkovich/thing")
        .then(response => setUglyThingList(response.data))
        .catch(error => console.log(error))

        console.log("useEffect rendered")

    }, []) // I HAVE NO IDEA WHAT TO DO TO CHOOSE WHEN I NEED TO RE RENDER THE LIST 

    return(
        <UglyThingContext.Provider value = {{ uglyThing, uglyThingList, handleChange, handleEdit, handleSubmit, handleDelete, setUglyThing }}>
            {props.children}
        </UglyThingContext.Provider>
    )
}

export {UglyThingContext, UglyThingContextProvider}
