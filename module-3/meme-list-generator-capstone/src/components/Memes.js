import React from "react"

export default function Meme(props) {
    return(
        <div className="memeComp--grid">

            <div className="meme">
                <img className="meme--imgComp" src={props.url}/>
                <h2 className="meme--text top memeList">{props.topText}</h2>
                <h2 className="meme--text bottom memeList">{props.bottomText}</h2>
            </div>

            <button onClick={()=>props.handleDelete(props.id)} className="meme--delete">Delete</button>
            <button onClick={()=>props.handleEdit(props.id)} className="meme--edit">Edit</button>
        </div>
    )
}