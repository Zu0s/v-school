import React from "react"

export default function Pet({name, breed}) {
    return(
        <div>
            <h2 className="petName">{name} is a {breed}</h2>
        </div>
    )
}