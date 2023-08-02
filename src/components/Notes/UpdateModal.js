import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Dropdown, Modal, Form, Button } from "react-bootstrap";

import { Notify } from "../../utils/Notify";
import PutNote from "../../hooks/Notes/PutNote";

import "react-toastify/dist/ReactToastify.css";
import "./UpdateModal.css";

function UpdateModal(props) {

    const [isLoading, setIsLoading] = useState(false);
    const { refresh, setRefresh } = props;
    const [resolvidoSelected, setResolvidoSelected] = useState(props.updateInfo.state)
    const [newTitle, setNewTitle] = useState(props.updateInfo.title)

    const toggleSelected = () =>{
        resolvidoSelected == '1' ? setResolvidoSelected('0') : setResolvidoSelected('1')
    }

    const handlePutNote = async () =>{
        setIsLoading(!isLoading)
        await PutNote({
            setRefresh: setRefresh,
            refresh: refresh,
            notify: Notify,
            title: newTitle,
            state: resolvidoSelected,
            id: props.updateInfo.id
        })
        setIsLoading(!isLoading)
        props.onHide()
    }

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
                        Alterar reclamação
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
                                className = "modal-note-textarea"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                as = "textarea"
                                rows={1}
                                
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>State</Form.Label>

                            <div className="row-div">
                                <div className={resolvidoSelected == '1' && `selected`}>
                                    <div
                                        className="resolvido-update"
                                        onClick={() => toggleSelected()}
                                        >
                                    </div>
                                </div>
                                <div className={resolvidoSelected !== '1' && `selected`}>
                                    <div
                                        className="nao-resolvido-update"
                                        onClick={() => toggleSelected()}
                                        >
                                    </div>
                                </div>
                            </div>

                        </Form.Group>
                        <Button
                            className="modal-note-btn"
                            variant="outline-dark"
                            disabled={isLoading}
                            onClick={() => handlePutNote()}
                        >
                            {isLoading ? "Enviando..." : "Enviar"}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default UpdateModal;
