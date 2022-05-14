import React, { useContext } from "react"
import { ThemeContext } from "../themeContext"

export default function Footer(props) {

    const {color} = useContext(ThemeContext)
    
    return(
        <footer className={`${color}-theme-footer`}>
            <p>The amazing Footer</p>
        </footer>
    )
}