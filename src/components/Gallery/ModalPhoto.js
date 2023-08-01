import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import DeleteFeature from "../../hooks/Features/DeleteFeature";
import YesNoModal from "../../utils/YesNoModal";
import { Notify } from "../../utils/Notify";

import "./ModalPhoto.css";

function ModalPhoto({ photo, show, onClose, setRefresh, refresh }) {
    const [currentPhoto, setPhoto] = useState(photo);
    const [isLoading, setIsLoading] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleDeletePhoto = (photoId) => {
        setIsLoading(!isLoading)
        DeleteFeature({
            featureId: photoId,
            setPhoto: setPhoto,
            notify: Notify,
            closeModal: onClose,
            setRefresh: setRefresh,
            refresh: refresh,
        });
        setIsLoading(!isLoading)
    };


    return (
        <Modal show={show} onHide={onClose} className="modal-photo" centered>

            <YesNoModal
                show={modalIsOpen} 
                onHide={() => setModalIsOpen(!modalIsOpen)}
                msg={'Tem certeza que deseja deletar essa foto?'} 
                isLoading={isLoading}
                yes={() => handleDeletePhoto(currentPhoto.id)}
                no={() => setModalIsOpen(!modalIsOpen)}
            />

            <Modal.Body className="modal-photo-content">
                <img
                    className="modal-photo-img"
                    src={currentPhoto.photo_file}
                    alt={currentPhoto.desc}
                />
                <div className="modal-photo-btns">
                    <Button
                        className="modal-delete-btn"
                        onClick={() => setModalIsOpen(!modalIsOpen)}
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
