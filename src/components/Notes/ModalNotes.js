import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

import PostNote from "../../hooks/Notes/PostNotes";
import "./ModalNotes.css";

function ModalNotes(props) {
    const [title, setTitle] = useState(false);
    const [user, setUser] = useState(false);
    const navigate = useNavigate()

    const { refresh, setRefresh } = props

    const notify = (isSucess, msg) => {
        if(isSucess){
            toast.success('Criado com sucesso', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });;     
        }else{
            toast.error('Error: '+msg, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }
        

    const postNote = async () => {
        
        await PostNote({
            title: title,
            state: "0",
            user: localStorage.getItem("user_id"),
            setRefresh: setRefresh,
            notify: notify
        })

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
                            onClick={postNote}
                        >
                            Enviar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalNotes;
