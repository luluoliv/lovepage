import React, { useState } from "react";
import Modal from "react-modal";

import "./TitlePage.css";
import ModalGallery from "../../components/Gallery/ModalGallery";

function TitlePage(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <>
            <div className="content">
                <h2 className="title">{props.name}</h2>
                <button className="btn-modal" onClick={openModal}>
                    <span>+</span>
                </button>
            </div>

            <Modal className={"modal-content"} isOpen={modalIsOpen} onRequestClose={closeModal}>
                <ModalGallery onClose={closeModal} />
            </Modal>
        </>
    );
}

export default TitlePage;