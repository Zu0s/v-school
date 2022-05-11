import React from "react"

export default function(props) {
    return(
        <div>
            <span>{`Color ${props.id + 1}`}</span>
            <span>{props.currentColor}</span>
            <input type="color" onChange={props.onChange} id={props.id} />
        </div>
    )
}