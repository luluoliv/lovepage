import React, { useState } from "react";

import "./TitlePage.css";
import ModalGallery from "../../components/Gallery/ModalGallery";
import ModalNotes from "../../components/Notes/ModalNotes";

function TitlePage(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const {refresh, setRefresh} = props

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
                    <span className="btn-plus">+</span>
                </button>
            </div>

            {props.name === "Gallery" ? (
                <ModalGallery show={modalIsOpen} onHide={closeModal} />
            ) : props.name === "Reclamações" ? (
                <ModalNotes show={modalIsOpen} onHide={closeModal} refresh={refresh} setRefresh={setRefresh}/>
            ) : null}
        </>
    );
}

export default TitlePage;
