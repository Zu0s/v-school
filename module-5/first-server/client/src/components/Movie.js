import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm.js";

export default function Movie(props) {
    const {title, genre, _id, deleteMovie, editMovie} = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="movie">
        { !editToggle ?
            <>
                <h1>Title: { title }</h1>
                <p>Genre: { genre }</p>
                <button 
                className="delete-button" 
                onClick={() => deleteMovie(_id)}>Delete</button>
                <button 
                className="edit-btn" 
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>    
        :
            <>
                <AddMovieForm 
                    title={title} 
                    genre={genre}
                    _id={_id}
                    btnText="Submit Edit"
                    submit={editMovie}
                />
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
        }
        </div>
    )
}