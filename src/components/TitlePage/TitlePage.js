import React, { useState } from "react";
import "./TitlePage.css";

import ModalGallery from "../Gallery/ModalGallery";
import ModalNotes from "../Notes/ModalNotes";
import ModalMovies from "../Movies/ModalMovies";
import ModalPlaces from "../Places/ModalPlaces";
import ModalGames from "../Games/ModalGames";

function TitlePage(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { name, refresh, setRefresh } = props;

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const getModalComponent = () => {
        switch (name) {
            case "Galeria":
                return (
                    <ModalGallery
                        onHide={closeModal}
                        show={modalIsOpen}
                        refresh={refresh}
                        setRefresh={setRefresh}
                    />
                );
            case "Reclamações":
                return (
                    <ModalNotes
                        show={modalIsOpen}
                        onHide={closeModal}
                        refresh={refresh}
                        setRefresh={setRefresh}
                    />
                );
            case "Filmes":
                return (
                    <ModalMovies
                        show={modalIsOpen}
                        onHide={closeModal}
                        refresh={refresh}
                        setRefresh={setRefresh}
                    />
                );
            case "Lugares":
                return (
                    <ModalPlaces
                        show={modalIsOpen}
                        onHide={closeModal}
                        refresh={refresh}
                        setRefresh={setRefresh}
                    />
                );
            case "Jogos": 
                return (
                    <ModalGames
                        show={modalIsOpen}
                        onHide={closeModal}
                        refresh={refresh}
                        setRefresh={setRefresh}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className="content">
                <h2 className="title">{name}</h2>
                <button className="btn-modal" onClick={openModal}>
                    <i className="btn-plus fa-solid fa-circle-plus"></i>
                </button>
            </div>
            {getModalComponent()}
        </>
    );
}

export default TitlePage;
