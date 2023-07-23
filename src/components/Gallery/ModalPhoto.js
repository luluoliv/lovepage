import React from "react";
import { Dropdown, Modal } from "react-bootstrap";
import "./ModalPhoto.css";

function ModalPhoto({ photo, show, onClose }) {
    return (
        <Modal show={show} onHide={onClose} className="modal-photo">
            <Modal.Body className="modal-photo-content">

                <Dropdown className="photo-edit-btn">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <i class="fa-solid fa-pen"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                            Editar descrição
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            Deletar foto
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <button className="modal-close-btn" onClick={onClose}>
                    <i class="fa-solid fa-xmark"></i>
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
