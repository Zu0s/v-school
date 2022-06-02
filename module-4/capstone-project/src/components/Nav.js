import React from "react"
import { Link } from "react-router-dom"

export default function Nav(){
    return(
        <nav className="nav">
            <h1 className="nav--title">Whisppara</h1>
            <ul className="nav--link">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/color">Color</Link></li>
                <li><Link to="/pattern">Pattern</Link></li>
            </ul>
        </nav>
    )
}