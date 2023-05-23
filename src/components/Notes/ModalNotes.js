import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

import "./ModalNotes.css";

function ModalNotes(props) {
    const [title, setTitle] = useState(false);
    const [user, setUser] = useState(false);

    const postNote = async () => {
        const data = {
            title: title,
            state: "0",
            user: localStorage.getItem("user_id"),
        };

        try {
            await axios.post(
                "https://love-pageapi.onrender.com/notes/",
                JSON.stringify(data),
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Token " + localStorage.getItem("token"),
                    },
                    withCredentials: true,
                }
            );
            props.onHide();
            alert("Enviado com sucesso!");
        } catch (error) {
            console.error("Error:", error);
            alert("Erro / Auth error");
        }
    };

    return (
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
                    Add Note
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            className="modal-note-textarea"
                            as="textarea"
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            rows={1}
                        />
                    </Form.Group>
                    <Form.Label>User</Form.Label>
                    <Form.Group
                        className="mb-3 row-flex"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Check
                            inline
                            label="Guizen"
                            name="group1"
                            value={"Guilherme"}
                            type="radio"
                            onChange={(e) => {
                                setUser(e.target.value);
                            }}
                        />
                        <Form.Check
                            inline
                            label="Lulu"
                            name="group1"
                            value={"Luara"}
                            radio
                            type="radio"
                            onChange={(e) => {
                                setUser(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Button
                        className="modal-note-btn"
                        variant="outline-dark"
                        onClick={postNote}
                    >
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalNotes;
