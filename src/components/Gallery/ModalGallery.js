import { Form, Button, Modal, ToastContainer } from "react-bootstrap";
import { React, useState } from "react";
import { Notify } from "../../utils/Notify";

import PostPhoto from "../../hooks/Gallery/PostPhotos";

import "react-toastify/dist/ReactToastify.css";
import "./ModalGallery.css";

function ModalGallery(props) {
    const [photoFile, setPhotoFile] = useState(null);
    const [desc, setDesc] = useState("");

    const postPhoto = async () => {
        await PostPhoto({
            photo: photoFile,
            desc: desc,
            notify: Notify,
        });

        props.onHide()
    };

    return (
        <>
            <ToastContainer />
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
                        Adicionar foto
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={postPhoto}>
                        <Form.Control
                            className="modal-gallery-file mb-3"
                            type="file"
                            onChange={(e) => setPhotoFile(e.target.files[0])}
                        />

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control
                                className="modal-gallery-textarea"
                                as="textarea"
                                rows={3}
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </Form.Group>
                        <Button
                            className="modal-gallery-btn"
                            variant="outline-dark"
                            type="submit"
                        >
                            Enviar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalGallery;
