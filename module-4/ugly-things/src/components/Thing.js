import React, { useContext, useState } from "react";
import { UglyThingContext } from "../uglyThingContext";
import Form from "./Form";


export default function Thing(props) {
    const {title, imgUrl, description, _id} = props

    const {handleEdit, handleDelete, setUglyThing} = useContext(UglyThingContext)

    const [isEdit, setIsEdit] = useState(false)

    const toggleEdit = () => {
        setIsEdit(prevState => !prevState)
        setUglyThing(prevUglyThings => {
            return {
                ...prevUglyThings,
                savedItem:{
                    title: title,
                    imgUrl: imgUrl,
                    description: description
                }
            }
        })
    }

    return(
        <div>
            <h1>{title}</h1>
            <img src={imgUrl}/>
            <h3>{description}</h3>
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={() => {handleDelete(_id)}}>Delete</button>
            {isEdit && <Form submit={(event) => handleEdit(event, _id)} />}
            <hr />
        </div>
    )
}