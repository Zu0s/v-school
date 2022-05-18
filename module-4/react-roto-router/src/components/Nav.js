import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return(
        <nav className="nav">
            <h1 className="nav--title">Amber's Plumbing Company</h1>

            <ul className="nav--navigation">
                <li> <Link to="/">HOME</Link> </li>
                <li> <Link to="/about">ABOUT</Link> </li>
                <li> <Link to="/services">SERVICES</Link> </li>
            </ul>
        </nav>
    )
}