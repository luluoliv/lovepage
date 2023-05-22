import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

import "./ModalGallery.css";

function ModalGallery(props) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [description, setDescription] = useState("");

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("photo", selectedFile);
        formData.append("desc", description);

        try {
            const response = await axios.post(
                "https://love-pageapi.onrender.com/features/",
                formData,
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
                <Form onSubmit={handleSubmit}>
                    <Form.Control
                        className="modal-gallery-file mb-3"
                        type="file"
                        onChange={handleFileChange}
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
                            onChange={(e) => setDescription(e.target.value)}
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
