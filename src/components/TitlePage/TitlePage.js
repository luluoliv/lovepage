import React, { useState } from "react";
import "./TitlePage.css";
import ModalGallery from "../../components/Gallery/ModalGallery";
import ModalNotes from "../../components/Notes/ModalNotes";
import ModalMovies from "../../components/Movies/ModalMovies";

function TitlePage(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { name, refresh, setRefresh } = props;

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const getModalComponent = () => {
    switch (name) {
      case "Galeria":
        return <ModalGallery show={modalIsOpen} onHide={closeModal} />;
      case "Reclamações":
        return (
          <ModalNotes show={modalIsOpen} onHide={closeModal} refresh={refresh} setRefresh={setRefresh} />
        );
      case "Filmes":
        return <ModalMovies show={modalIsOpen} onHide={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="content">
        <h2 className="title">{name}</h2>
        <button className="btn-modal" onClick={openModal}>
          <span className="btn-plus">+</span>
        </button>
      </div>
      {getModalComponent()}
    </>
  );
}

export default TitlePage;
