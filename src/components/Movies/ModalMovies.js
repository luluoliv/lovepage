import { Modal } from "react-bootstrap";
import React from "react";
import { Form, Button } from "react-bootstrap";

function ModalMovies(props) {
    return (
        <>
            <Modal
                className="modal-note"
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                size="md"
            >
                <Modal.Header
                    className="modal-note-head"
                    closeButton
                    closeVariant="white"
                >
                    <Modal.Title id="contained-modal-title-vcenter">
                        Adicionar filme
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Procurar</Form.Label>
                            <Form.Control
                                className="modal-note-textarea"
                                as="textarea"
                                rows={1}
                            />
                        </Form.Group>
                        <Button
                            className="modal-note-btn"
                            variant="outline-dark"
                        >
                            Enviar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalMovies;
