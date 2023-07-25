import React, { useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";

import DeletePhotos from "../../hooks/Gallery/DeletePhotos";
import { Notify } from "../../utils/Notify";

import "./ModalPhoto.css";
import PutPhotos from "../../hooks/Gallery/PutPhotos";

function ModalPhoto({ photo, show, onClose, setRefresh, refresh }) {
    const [currentPhoto, setPhoto] = useState(photo);

    const [editingDescription, setEditingDescription] = useState(false);
    const [newDescription, setNewDescription] = useState(currentPhoto.desc);

    const handleDeletePhoto = (photoId) => {
        DeletePhotos({
            photoId: photoId,
            setPhoto: setPhoto,
            notify: Notify,
            closeModal: onClose,
            setRefresh: setRefresh,
            refresh: refresh
        });
    };

    const handleEditDescription = () => {
        setEditingDescription(true);
    };

    const handleCancelEdit = () => {
        setEditingDescription(false);
        setNewDescription(currentPhoto.desc);
    };

    return (
        <Modal show={show} onHide={onClose} className="modal-photo">
            <Modal.Body className="modal-photo-content">
                <Dropdown className="photo-edit-btn">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <i class="fa-solid fa-pen"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Editar descrição</Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => handleDeletePhoto(currentPhoto.id)}
                        >
                            Deletar foto
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <button className="modal-close-btn" onClick={onClose}>
                    <i class="fa-solid fa-xmark"></i>
                </button>

                <img
                    className="modal-photo-img"
                    src={currentPhoto.photo}
                    alt={currentPhoto.desc}
                />

                {editingDescription ? (
                    <Form.Group>
                        <Form.Control
                            type="text"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                        />
                        <div>
                            <Button variant="success">Salvar</Button>
                            <Button
                                variant="secondary"
                                onClick={handleCancelEdit}
                            >
                                Cancelar
                            </Button>
                        </div>
                    </Form.Group>
                ) : (
                    <p className="modal-photo-desc">{currentPhoto.desc}</p>
                )}
            </Modal.Body>
        </Modal>
    );
}

export default ModalPhoto;
