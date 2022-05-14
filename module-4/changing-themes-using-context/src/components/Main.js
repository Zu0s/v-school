import React, { useContext } from "react"
import { ThemeContext } from "../themeContext"

export default function Main(props) {

    const {color} = useContext(ThemeContext)

    return(
        <main className={`${color}-theme-main`}>
            <h1>Click the button to toggle the Light theme!</h1>
            <button >Toggle Theme</button>
        </main>
    )
}