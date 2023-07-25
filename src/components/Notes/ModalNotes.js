import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import { Notify } from "../../utils/Notify";

import PostNote from "../../hooks/Notes/PostNotes";

import 'react-toastify/dist/ReactToastify.css';
import "./ModalNotes.css";


function ModalNotes(props) {
    const [title, setTitle] = useState(false);
    const [loading, setLoading] = useState(false)

    const { refresh, setRefresh } = props        

    const postNote = async () => {
        
        setLoading(true)
        await PostNote({
            title: title,
            state: "0",
            user: localStorage.getItem("user_id"),
            setRefresh: setRefresh,
            notify: Notify
        })
        setLoading(false)

        props.onHide()
    };

    return (
        <>
            <ToastContainer />

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
                        Adicionar reclamação
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                className="modal-note-textarea"
                                as="textarea"
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                                rows={1}
                            />
                        </Form.Group>
                        <Button
                            className="modal-note-btn"
                            variant="outline-dark"
                            disabled={loading}
                            onClick={postNote}
                        >
                            {loading ? 'Enviando...' : 'Enviar'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalNotes;
