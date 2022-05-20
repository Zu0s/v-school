import React, { useContext, useState } from "react";
// import { UglyThingContext } from "../uglyThingContext";


export default function Thing(props) {
    const {title, imgUrl, description} = props

    // const {handleEdit} = useContext(UglyThingContext)

    return(
        <div>
            <h1>{title}</h1>
            <img src={imgUrl}/>
            <h3>{description}</h3>
            {/* <input type="button" value="Edit" onClick={() => handleEdit(props)}/> */}
            <button>Delete</button>
            <hr />
        </div>
    )
}