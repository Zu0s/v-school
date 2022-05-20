import React, { useContext } from "react";
import { UglyThingContext } from "../uglyThingContext";

export default function Form(props) {

    const { uglyThing, handleChange, handleSubmit } = useContext(UglyThingContext)

    return(
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                type="text"
                placeholder="Title"
                onChange={handleChange}
                value={uglyThing.title}
            />
            <input
                name="imgUrl"
                type="text"
                placeholder="Image Url"
                onChange={handleChange}
                value={uglyThing.imgUrl}
            />
            <input
                name="description"
                type="text"
                placeholder="Description"
                onChange={handleChange}
                value={uglyThing.description}
            />
            <button>Submit</button>
        </form>
    )
}