import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import DeletePhotos from "../../hooks/Gallery/DeletePhotos";
import { Notify } from "../../utils/Notify";

import "./ModalPhoto.css";

function ModalPhoto({ photo, show, onClose, setRefresh, refresh }) {
    const [currentPhoto, setPhoto] = useState(photo);

    const handleDeletePhoto = (photoId) => {
        DeletePhotos({
            photoId: photoId,
            setPhoto: setPhoto,
            notify: Notify,
            closeModal: onClose,
            setRefresh: setRefresh,
            refresh: refresh,
        });
    };

    return (
        <Modal show={show} onHide={onClose} className="modal-photo" size="md">
            <Modal.Body className="modal-photo-content">
                <img
                    className="modal-photo-img"
                    src={currentPhoto.photo}
                    alt={currentPhoto.desc}
                />
                <div className="modal-photo-btns">
                    <Button
                        className="modal-delete-btn"
                        onClick={() => handleDeletePhoto(currentPhoto.id)}
                    >
                        <i className="fa-solid fa-trash-can"></i>
                    </Button>

                    <Button className="modal-close-btn" onClick={onClose}>
                        <i className="fa-solid fa-xmark"></i>
                    </Button>
                </div>

                <p className="modal-photo-desc">{currentPhoto.desc}</p>
            </Modal.Body>
        </Modal>
    );
}

export default ModalPhoto;
