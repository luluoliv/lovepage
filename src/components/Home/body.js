import React, { useEffect, useState } from "react";
import "./body.css";
import GetFeatureByType from "../../hooks/Features/GetFeatureByType";
import { Link } from "react-router-dom";

export default function HomeBody(props) {
    const { refresh, setRefresh } = props;
    const [movies, setMovies] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    const compareItemById = (itemA, itemB) => {
        return itemB.id - itemA.id;
    };

    useEffect(() => {
        GetFeatureByType({
            setFeature: (data) => setMovies(data.sort(compareItemById)),
            setLoading: setLoading,
            type: "filme",
        });
    }, [refresh, setRefresh]);

    useEffect(() => {
        GetFeatureByType({
            setFeature: (data) => setPhotos(data.sort(compareItemById)),
            setLoading: setLoading,
            type: "mural",
        });
    }, [refresh, setRefresh]);

    return (
        <div className="home-body">
            <section className="latest-movies">
                <h4>Últimos Filmes</h4>
                {loading ? (
                    <p>Loading movies...</p>
                ) : movies && movies.length > 0 ? (
                    <div className="latest-items-content">
                        {movies.map((movie) => (
                            <div key={movie.id}>
                                <img
                                    className="latest-movie-img"
                                    src={movie.photo_url}
                                    alt={movie.name}
                                />
                                <div className="text-div home">
                                    {movie.name ? (
                                        <p style={{ fontWeight: "bold" }}>
                                            {movie.name}
                                        </p>
                                    ) : (
                                        <p
                                            style={{
                                                fontWeight: "300",
                                                fontStyle: "italic",
                                            }}
                                        >
                                            Título indefinido
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                        <Link to={"/movies"}>Ver Tudo..</Link>
                    </div>
                ) : (
                    <p className="photo-alert">Nenhum filme adicionado</p>
                )}
            </section>

            <section className="latest-photos">
                <h4>Últimas Fotos</h4>
                {loading ? (
                    <p>Loading photos...</p>
                ) : photos && photos.length > 0 ? (
                    <div className="latest-items-content">
                        {photos.map((photo) => (
                            <div key={photo.id}>
                                <div className="latest-photo-item">
                                    <img
                                        className="latest-photo-img"
                                        src={photo.photo_file}
                                        alt={photo.title}
                                    />
                                </div>
                                <p>{photo.desc}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="photo-alert">Nenhuma foto adicionada</p>
                )}
            </section>
        </div>
    );
}
