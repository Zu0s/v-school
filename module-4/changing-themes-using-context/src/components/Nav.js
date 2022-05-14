import React, { useContext } from "react"
import { ThemeContext } from "../themeContext"

export default function Nav(props) {
    const {color} = useContext(ThemeContext)
    
    return(
        <nav className={`${color}-theme-nav`}>
            <ul>
                <li><h1>Home</h1></li>
                <li><h1>About</h1></li>
                <li><h1>Contact</h1></li>
            </ul>
        </nav>

    )
}