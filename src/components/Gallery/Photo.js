import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import "./../../components/Gallery/Photo.css"

function Photo() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios
            .get("https://love-pageapi.onrender.com/features/")
            .then((responseData) => {
                setPhotos(responseData.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="photo-gallery">
            {photos && photos.length > 0 ? (
                photos.map((photo) => (
                    <div key={photo.id} className="photo-item">
                        <img className="photo-img" src={photo.photo} alt={photo.desc} />
                        <p className="photo-desc">{photo.desc}</p>
                    </div>
                ))
            ) : (
                <p>No photos available</p>
            )}
        </div>
    );
}

export default Photo;
