import React,  { useState, createContext } from "react"

const ThemeContext = createContext()

function ThemeContextProvider(props){

    const [color, setColor] = useState("dark")

    const toggleTheme = () => {
        setColor(prevColor => prevColor === "dark" ? "light" : "dark")
    }

    // function toggleTheme(props) {
    //     setColor(prevColor => prevColor === "dark" ? "light" : "dark")
    // }

    return(
        <ThemeContextProvider value={{
             color, 
             toggleTheme 
        }}>
            {props.children}
        </ThemeContextProvider>
    )
}

export {ThemeContext, ThemeContextProvider}