import React, { useState, useEffect } from "react";
import axios from 'axios'

import Movie from './components/Movie.js'
import AddMovieForm from "./components/AddMovieForm.js";

export default function App() {
    const [movies, setMovies] = useState([])

    function getMovies() {
        axios.get('/movies')
        .then(res => setMovies(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addMovie(newMovie) {
        axios.post('/movies', newMovie)
        .then(res => setMovies(prevMovies => [...prevMovies, res.data]))
        .catch(err => console.log(err.response.data.errMsg))
    }

    function deleteMovie(movieId) {
        axios.delete(`/movies/${movieId}`)
        .then(res => {
            setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function editMovie(updates, movieId) {
        axios.put(`/movies/${movieId}`, updates)
        .then(res => {
            return setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function handleFilter(e) {
        if (e.target.value = 'reset') { getMovies() } else {
            axios.get(`/movies/search/genre?genre=${e.target.value}`)
                .then(res => setMovies(res.data))
                .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    return(
        <div>
            <div className="movie-container">
                <AddMovieForm submit={addMovie} btnText="Add Movie"/>

                <h4>Select Genre</h4>
                <select onChange={handleFilter} className='filter-form'>
                    <option value='reset'>- Select A Genre -</option>
                    <option value='Action'>Action</option>
                    <option value='Adventure'>Adventure</option>
                    <option value='Fantasy'>Fantasy</option>
                </select>
                { 
                    movies.map(movie => 
                        <Movie 
                            {...movie} 
                            key={movie.title} 
                            deleteMovie={deleteMovie} 
                            editMovie={editMovie}
                        />
                    ) 
                }
            </div>
        </div>
    )
}