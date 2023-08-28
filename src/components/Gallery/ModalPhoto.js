import React from "react";
import { Modal } from "react-bootstrap";

import "./ModalPhoto.css";

function ModalPhoto({ photo, show, onClose }) {

    return (
        <Modal size="md" show={show} className="modal-photo" centered>
            <img
                className="modal-photo-img"
                src={photo.photo_file}
                alt={photo.desc}
            />
            <div className="modal-photo-overlay">
                <p className="modal-photo-desc">{photo.desc}</p>
                <div className="modal-photo-btns">
                    <button className="modal-photo-btn" onClick={onClose}>
                        <i class="fa-solid fa-x"></i>
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default ModalPhoto;
