import React from "react"

export default function Nav({id}) {

    return(
        <nav className="nav">
            <h1>Meme List Generator</h1>
            {!isNaN(id) && <h1>- Editing</h1>}
        </nav>
    )
}