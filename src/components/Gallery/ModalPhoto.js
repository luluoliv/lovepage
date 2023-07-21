import React from "react";
import { Modal } from "react-bootstrap";
import "./ModalPhoto.css";

function ModalPhoto({ photo, show, onClose }) {
    return (
        <Modal show={show} onHide={onClose} className="photo-modal">
            <Modal.Body className="modal-photo-content">
                
                <button className="close-modal-btn" onClick={onClose}>
                    <i class="fa-solid fa-x"></i>
                </button>

                <img
                    className="modal-photo-img"
                    src={photo.photo}
                    alt={photo.desc}
                />

                <p className="modal-photo-desc">{photo.desc}</p>

            </Modal.Body>
        </Modal>
    );
}

export default ModalPhoto;
