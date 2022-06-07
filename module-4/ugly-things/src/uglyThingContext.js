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


    /* this and handle edit need to reload the page on click but past that its good  */
    const handleEdit = (event, id) => {
        event.preventDefault()

            axios.put(`https://api.vschool.io/brandonbutkovich/thing/${id}`, uglyThing.savedItem)
                .then(res => {
                    const editedItem = uglyThingList.findIndex(item => item._id === id)
                    setUglyThingList(prevUglyThingList => {
                        const list = prevUglyThingList
                        list[editedItem] = res.data
                        return[...list]
                    })
                    resetUglyThing()
                })
                .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete(`https://api.vschool.io/brandonbutkovich/thing/${id}`)
        .then(() => {
            const deletedItem = uglyThingList.findIndex(item => item._id === id)
            setUglyThingList(prevUglyThingList => {
                const list = prevUglyThingList
                list.splice(deletedItem)
                return[...list]
            })
        }) // HOW TO TOGGLE RELOAD
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
