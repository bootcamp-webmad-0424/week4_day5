import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./../MovieCard/MovieCard";
import NewMovieForm from "../NewMovieForm/NewMovieForm";
import MoviesNameFilter from "../MoviesNameFilter/MoviesNameFilter";

function MovieList() {

    const [movies, setMovies] = useState(moviesDataJSON)
    const [moviesBackup, setMoviesBackup] = useState(moviesDataJSON)

    const addNewMovie = movieToAdd => {
        const newMovies = [movieToAdd, ...movies]
        setMovies(newMovies)

        const newMoviesBackup = [movieToAdd, ...moviesBackup]
        setMoviesBackup(newMoviesBackup)
    }

    const filterMoviesByTitle = query => {
        const filteredMovies = moviesBackup.filter(elm => elm.title.toLowerCase().includes(query))
        setMovies(filteredMovies)
    }

    return (
        <div>
            <h2>Movie List</h2>

            <hr />

            <NewMovieForm addNewMovie={addNewMovie} />

            <hr />

            <MoviesNameFilter filterMoviesByTitle={filterMoviesByTitle} />

            <hr />

            {
                movies.map(movie => {
                    return <MovieCard key={movie._id} {...movie} />;
                })
            }
        </div>
    );
}

export default MovieList;
