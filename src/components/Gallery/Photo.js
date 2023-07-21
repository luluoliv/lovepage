import React, { useEffect, useState } from "react";
import axios from "axios";
import ModalPhoto from "./ModalPhoto";

import "./../../components/Gallery/Photo.css";

function Photo() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://love-pageapi.onrender.com/features/",
          {
            headers: {
              Authorization: "Token " + localStorage.getItem("token"),
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
      {photos && photos.length > 0 ? (
        photos.sort(comparePhotosById).map((photo) => (
          <div
            key={photo.id}
            className="photo-item"
            onMouseEnter={() => handleMouseEnter(photo.id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => openModal(photo)}
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
        <p className="photo-alert">Nenhuma foto adicionada</p>
      )}

      {selectedPhoto && (
        <ModalPhoto photo={selectedPhoto} show={true} onClose={closeModal} />
      )}
    </div>
  );
}

export default Photo;
