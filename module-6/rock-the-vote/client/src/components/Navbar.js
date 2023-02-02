import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({logout}) {
    return (
        <div>
            <div className="navbar">
                <Link to="/profile">Profile</Link>
                <Link to="/public">Public</Link>
                <button onClick={logout}> Logout</button>
            </div>
        </div>
    )
}