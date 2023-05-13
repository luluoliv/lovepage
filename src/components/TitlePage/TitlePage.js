import React from 'react';
import Modal from "react-modal";
import { useState } from "react";

import "./TitlePage.css"

export default function TitlePage(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    return (
        <>
            <div className="content">
                <h2 className="title">{props.name}</h2>
                <button className="btn-modal" onClick={openModal}>
                    <span>+</span>
                </button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <h2>Adicionar</h2>
                <button onClick={() => setModalIsOpen(false)}>
                    <span>x</span>
                </button>
            </Modal>
        </>
    );
}
