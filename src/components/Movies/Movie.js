import React, { useEffect, useState } from "react"; 

import GetFeatureByType from "../../hooks/Features/GetFeatureByType";
import "./Movie.css";

export default function Movie(props) {
    const { refresh, setRefresh } = props;
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetFeatureByType({
            setFeature: setMovies,
            setLoading: setLoading,
            type: 'filme'
        });
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
                    <div className="movie-item" key={movie.id}>
                        <img
                            className="movie-img"
                            src={movie.photo_url}
                            alt={movie.name}
                        />
                        <p>{movie.name}</p>
                        <p>{movie.desc}</p>
                    </div>
                ))
            ) : (
                <p className="movie-alert">Nenhum filme adicionado</p>
            )}
        </div>
    );
}
