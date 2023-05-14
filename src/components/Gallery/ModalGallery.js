import React from "react";
import { Form, Button, Modal } from "react-bootstrap";

import "./ModalGallery.css";

function ModalGallery(props) {
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
                <Form>
                    <Form.Control
                        className="modal-gallery-file mb-3"
                        type="file"
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
                        />
                    </Form.Group>
                    <Button
                        className="modal-gallery-btn"
                        variant="outline-dark"
                    >
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalGallery;
