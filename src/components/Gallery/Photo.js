import React, { useEffect, useState } from "react";
import ModalPhoto from "./ModalPhoto";
import GetPhotos from "../../hooks/Gallery/GetPhotos";

import "./../../components/Gallery/Photo.css";

function Photo(props) {
    const [photos, setPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [loading, setLoading] = useState(true);
    const { refresh, setRefresh } = props;

    useEffect(() => {
        GetPhotos({ setPhotos, setLoading });
    }, [refresh, setRefresh]);

    const [hoveredPhotoId, setHoveredPhotoId] = useState(null);

    const handleMouseEnter = (photoId) => {
        setHoveredPhotoId(photoId);
    };

    const handleMouseLeave = () => {
        setHoveredPhotoId(null);
    };

    const comparePhotosById = (photoA, photoB) => {
        return photoB.id - photoA.id;
    };

    const openModal = (photo) => {
        setSelectedPhoto(photo);
    };

    const closeModal = () => {
        setSelectedPhoto(null);
    };

    return (
        <div className="photo-gallery">
            {loading ? (
                <i class="photo-loading fa-solid fa-spinner fa-spin-pulse"></i>
            ) : photos && photos.length > 0 ? (
                photos.sort(comparePhotosById).map((photo) => (
                    <div
                        key={photo.id}
                        className="photo-item"
                        onMouseEnter={() => handleMouseEnter(photo.id)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => openModal(photo)}
                    >
                        {hoveredPhotoId === photo.id && (
                            <p className="photo-desc">{photo.desc}</p>
                        )}
                        <img
                            className="photo-img"
                            src={photo.photo}
                            alt={photo.desc}
                        />
                    </div>
                ))
            ) : (
                <p className="photo-alert">Nenhuma foto adicionada</p>
            )}

            {selectedPhoto && (
                <ModalPhoto
                    photo={selectedPhoto}
                    show={true}
                    onClose={closeModal}
                    setRefresh={setRefresh}
                    refresh={refresh}
                />
            )}
        </div>
    );
}

export default Photo;
