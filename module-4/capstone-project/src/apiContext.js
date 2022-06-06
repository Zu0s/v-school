import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext()

function ApiContextProvider(props) { 
    /* Everything related to color state/api call */
    const  [colors, setColors] = useState({ 
        title: "",
        imgUrl: "",
        sepColors: [],
        author: ""
    }) 

    const changeColor = async() => {
        try {
            const res = await axios.get("https://vschool-cors.herokuapp.com?url=http://www.colourlovers.com/api/palettes/random?format=json")
            // console.log(res.data[0])
            const data = res.data[0]

            setColors({
                title:data.title,
                imgUrl:data.imageUrl,
                sepColors: data.colors,
                author: data.userName
            })
        }
        catch(errors) {
            console.log(errors);
        }
    }

    /* Everything related to patterns state/api call */
    const  [patterns, setPatterns] = useState({ 
        title: "",
        imgUrl: "",
        sepPatterns: [],
        author: ""
    }) 

    const changePatterns = async() => {
        try {
            const res = await axios.get("https://vschool-cors.herokuapp.com?url=http://www.colourlovers.com/api/patterns/random?format=json")
            console.log(res.data[0])
            const data = res.data[0]

            setPatterns({
                title:data.title,
                imgUrl:data.imageUrl,
                sepColors: data.colors,
                author: data.userName
            })
        }
        catch(errors) {
            console.log(errors);
        }
    }

    /* calls boths apis to fill the page to make a more fluid page */
    useEffect(() => {
        changeColor();
        changePatterns()
    }, [])

    return (
        <ApiContext.Provider value={{ colors, changeColor, patterns, changePatterns }}>
            {props.children}
        </ApiContext.Provider>
    )
}

export { ApiContext, ApiContextProvider }