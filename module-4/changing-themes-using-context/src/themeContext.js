import React,  { useState } from "react"

const ThemeContext = React.createContext()

function ThemeContextProvider(props){

    const [color, setColor] = useState("dark")

    const toggleTheme = () => {
        setColor(prevColor => prevColor === "dark" ? "light" : "dark")
    }

    return(
        <ThemeContextProvider value={{ color, toggleTheme }}>
            {props.children}
        </ThemeContextProvider>
    )
}

export {ThemeContext, ThemeContextProvider}