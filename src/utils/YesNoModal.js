import React from "react";
import { Button, Modal, Col, Row } from "react-bootstrap";
import "./YesNoModal.css";

export default function YesNoModal(props){

    return(
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
                    {props.msg}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <Button
                            className="modal-note-btn modal-button"
                            variant="outline-dark"
                            onClick={() => props.yes()}
                        >
                            Sim
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            className="modal-note-btn modal-button"
                            variant="outline-dark"
                            onClick={() => props.no()}
                        >
                            Não
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}