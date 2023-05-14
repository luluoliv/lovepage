import React from "react";
import { Form, Button } from "react-bootstrap";

import "./ModalGallery.css";

function ModalGallery(props) {

    return (
        <div className="modal-gallery">
            <div className="modal-gallery-head">
                <button className="modal-gallery-btn" onClick={props.onClose} variant="outline-dark">
                    <span  className="modal-gallery-span">x</span>
                </button>
                <h3>Add photo</h3>
            </div>

            <Form>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    <Button variant="outline-dark">Submit</Button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default ModalGallery;
