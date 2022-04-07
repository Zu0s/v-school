import React from "react"
import Pet from "./Pet"

export default function Friend(props) {
    const {pets} = props

    const petsOwned = pets.map(item => {
        return <Pet 
            name={item.name}
            breed={item.breed}
        />
    })

    // console.log(petsOwned)

    return(
        <div className="card">
            <h1 className="name">{props.name} </h1>
            <h3 className="age">age {props.age}</h3>
            {petsOwned}
            
        </div>
    )
}