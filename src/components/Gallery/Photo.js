import React, { useEffect, useState } from "react";
import ModalPhoto from "./ModalPhoto";
import GetFeatureByType from "../../hooks/Features/GetFeatureByType";

import "./../../components/Gallery/Photo.css";
import DeleteFeature from "../../hooks/Features/DeleteFeature";
import { Notify } from "../../utils/Notify";
import YesNoModal from "../../utils/YesNoModal";

function Photo(props) {
    const [photos, setPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentPhotoId, setCurrentPhotoId] = useState(null);
    const [loading, setLoading] = useState(true);
    const { refresh, setRefresh } = props;
    const [modalLoading, setModalLoading] = useState(false);

    useEffect(() => {
        GetFeatureByType({
            setFeature: setPhotos,
            setLoading: setLoading,
            type: "mural",
        });
    }, [refresh, setRefresh]);

    const handleDeleteIcon = (e, id) => {
        e.stopPropagation();
        setModalIsOpen(true);
        setCurrentPhotoId(id);
    };

    const handleDeletePhoto = async () => {
        setModalLoading(true);
        await DeleteFeature({
            featureId: currentPhotoId,
            setPhoto: setPhotos,
            notify: Notify,
            setRefresh: setRefresh,
            closeModal: () => setModalIsOpen(false),
            refresh: refresh,
        });
        setModalLoading(false);
    };

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
        <>
            <YesNoModal
                show={modalIsOpen}
                onHide={() => setModalIsOpen(!modalIsOpen)}
                msg={"Tem certeza que deseja deletar essa foto?"}
                isLoading={modalLoading}
                yes={() => handleDeletePhoto()}
                no={() => setModalIsOpen(!modalIsOpen)}
            />
            <div className="photo-gallery">
                {loading ? (
                    <i className="photo-loading fa-solid fa-spinner fa-spin-pulse"></i>
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
                                <div className="hover-div">
                                    <div className="delete-icon-div">
                                        <i
                                            className="fa-solid fa-trash delete-icon"
                                            onClick={(e) =>
                                                handleDeleteIcon(e, photo.id)
                                            }
                                        ></i>
                                    </div>
                                    <div className="photo-desc-div">
                                        <p className="photo-desc">
                                            {photo.desc}
                                        </p>
                                    </div>
                                </div>
                            )}
                            <img
                                className="photo-img"
                                src={photo.photo_file}
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
        </>
    );
}

export default Photo;
