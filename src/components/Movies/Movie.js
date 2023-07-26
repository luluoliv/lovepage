import React, { useEffect, useState } from "react"; // Import useEffect and useState

import "./Movie.css";
import GetMyMovies from "../../hooks/Movies/GetMyMovies";

export default function Movie(props) {
    const { refresh, setRefresh } = props;
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetMyMovies({ setMovies, setLoading });
    }, [refresh, setRefresh]);

    const compareMoviesById = (a, b) => {
        return a.id - b.id;
    };

    return (
        <div className="movie-grid">
            {loading ? (
                <i className="photo-loading fa-solid fa-spinner fa-spin-pulse"></i>
            ) : movies && movies.length > 0 ? (
                movies.sort(compareMoviesById).map((movie) => (
                    <div key={movie.id}>
                        <img
                            className="movie-img"
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <p>{movie.title}</p>
                        <p>{movie.overview}</p>
                    </div>
                ))
            ) : (
                <p className="movie-alert">Nenhum filme adicionado</p>
            )}
        </div>
    );
}
