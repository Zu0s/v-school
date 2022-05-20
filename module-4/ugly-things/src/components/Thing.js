import React from "react";


export default function Thing(props) {
    const {title, imgUrl, description} = props

    return(
        <div>
            <h1>{title}</h1>
            <img src={imgUrl}/>
            <h3>{description}</h3>
        </div>
    )
}