import React, { useEffect, useState } from "react";

import "./body.css";
import GetFeatureByType from "../../hooks/Features/GetFeatureByType";

export default function HomeBody(props) {
    const { refresh, setRefresh } = props;
    const [movies, setMovies] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetFeatureByType({
            setFeature: setMovies,
            setLoading: setLoading,
            type: "filme",
        });
    }, [refresh, setRefresh]);

    useEffect(() => {
        GetFeatureByType({
            setFeature: setPhotos,
            setLoading: setLoading, 
            type: 'mural'
        });
    }, [refresh, setRefresh]);


    return (
        <div className="home-body">
            <section className="latest-movies">
                <h4>Últimos Filmes</h4>
                
            </section>

            <section className="latest-photos">
                <h4>Últimas Fotos</h4>
            </section>
        </div>
    );
}
