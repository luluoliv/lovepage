import {React, useState} from "react";
import { Form, Button, Modal } from "react-bootstrap";
import PostFeature from "../../hooks/Features/PostFeature";
import { ToastContainer } from "react-toastify";
import { Notify } from "../../utils/Notify";
import './ChooseAFile.css'

export default function ChooseAFile(props){
    const [isUrl, setIsUrl] = useState(false)
    
    return(
        <>
            <ToastContainer />
            <Modal
                className="modal-gallery choose-a-file-modal"
                {...props.visibilityHandler}
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
                        Esse jogo não possui imagem, escolha uma.
                    </Modal.Title>
                </Modal.Header>
                <p onClick={() => {
                    setIsUrl(!isUrl);
                    props.setPhotoUrl(null);
                    props.setPhotoFile(null);
                }}>
                    { isUrl ? "Enviar imagem em arquivo" : "Enviar imagem em link"}
                </p>
                {
                    isUrl ? (
                        <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                            <Form.Control
                                className="modal-gallery-textarea"
                                rows={1}
                                value={props.photoUrl}
                                onChange={(e) => props.setPhotoUrl(e.target.value)}
                            />
                        </Form.Group>
                    ) : (
                        <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                            <Form.Control
                                className="modal-gallery-file mb-3"
                                type="file"
                                onChange={(e) => props.setPhotoFile(e.target.files[0])}
                            />
                        </Form.Group>
                    )
                }
                <Button
                    className="modal-gallery-btn"
                    variant="outline-dark"
                    onClick={() => {
                        props.visibilityHandler.onHide()
                        Notify(true, 'Imagem adicionada, pressione "Enviar"')
                    }}
                >
                    Enviar
                </Button>
            </Modal>
        </>
    )
}