import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

import "./ModalGallery.css";

function ModalGallery(props) {
    const [photoUrl, setPhotoUrl] = useState("");
    const [description, setDesc] = useState("");

    const postPhoto = async (event) => {
        event.preventDefault();

        const photoData = {
            photo: photoUrl,
            desc: description,
        };

        try {
            const response = await axios.post(
                "https://love-pageapi.onrender.com/features/",
                photoData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Token " + localStorage.getItem("token"),
                    },
                    withCredentials: true,
                }
            );
            console.log(response.data);
            props.onHide();
            alert("Enviado com sucesso!");
        } catch (error) {
            console.error("Error:", error);
            alert("Erro / Auth error");
        }
    };

    return (
        <Modal
            className="modal-gallery"
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size="md"
        >
            <Modal.Header
                className="modal-gallery-head"
                closeButton
                closeVariant="white"
            >
                <Modal.Title id="contained-modal-title-vcenter">
                    Add photo
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={postPhoto}>
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control
                        className="modal-gallery-file mb-3"
                        type="text"
                        value={photoUrl}
                        onChange={(e) => setPhotoUrl(e.target.value)}
                    />

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            className="modal-gallery-textarea"
                            as="textarea"
                            rows={3}
                            value={description}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </Form.Group>
                    <Button
                        className="modal-gallery-btn"
                        variant="outline-dark"
                        type="submit"
                    >
                        Upload
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalGallery;
