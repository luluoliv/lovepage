import React from "react";
import { Modal } from "react-bootstrap";
import "./ModalPhoto.css";

function ModalPhoto({ photo, show, onClose }) {
    return (
        <Modal show={show} onHide={onClose} className="photo-modal">
            <Modal.Body className="modal-content">
                <img
                    className="modal-photo-img"
                    src={photo.photo}
                    alt={photo.desc}
                />
                <p className="modal-photo-desc">{photo.desc}</p>
            </Modal.Body>
            <button className="close-modal-btn" onClick={onClose}>
                <i class="fa-solid fa-x"></i>
            </button>
        </Modal>
    );
}

export default ModalPhoto;
