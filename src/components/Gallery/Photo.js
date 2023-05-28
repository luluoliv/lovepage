import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import "./../../components/Gallery/Photo.css";

function Photo() {
    const [photos, setPhotos] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://love-pageapi.onrender.com/features/",
                    {
                        headers: {
                            Authorization:
                                "Token " + localStorage.getItem("token"),
                        },
                    }
                );
                setPhotos(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const [hoveredPhotoId, setHoveredPhotoId] = useState(null);

    const handleMouseEnter = (photoId) => {
        setHoveredPhotoId(photoId);
    };

    const handleMouseLeave = () => {
        setHoveredPhotoId(null);
    };

    return (
        <div className="photo-gallery">
            {photos && photos.length > 0 ? (
                photos.map((photo) => (
                    <div
                        key={photo.id}
                        className="photo-item"
                        onMouseEnter={() => handleMouseEnter(photo.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            className="photo-img"
                            src={photo.photo}
                            alt={photo.desc}
                        />
                        {hoveredPhotoId === photo.id && (
                            <p className="photo-desc">{photo.desc}</p>
                        )}
                    </div>
                ))
            ) : (
                <p>No photos available</p>
            )}
        </div>
    );
}

export default Photo;