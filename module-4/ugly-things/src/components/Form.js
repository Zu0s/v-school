import React, { useContext } from "react";
import { UglyThingContext } from "../uglyThingContext";

export default function Form(props) {

    const {uglyThing, handleChange } = useContext(UglyThingContext)

    return(
        <form onSubmit={props.submit}>
            <input
                name="title"
                type="text"
                placeholder="Title"
                onChange={handleChange}
                value={uglyThing.savedItem.title}
            />
            <input
                name="imgUrl"
                type="text"
                placeholder="Image Url"
                onChange={handleChange}
                value={uglyThing.savedItem.imgUrl}
            />
            <input
                name="description"
                type="text"
                placeholder="Description"
                onChange={handleChange}
                value={uglyThing.savedItem.description}
            />
            <button>Submit</button>
        </form>
    )
}
