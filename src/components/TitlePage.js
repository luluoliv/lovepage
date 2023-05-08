import Modal from "react-modal";
import { useState } from "react";

export default function TitlePage(props) {
    const Title = {
        fontWeight: "500",
        marginLeft: "10%",
    };

    const Content = {
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        flexDirection: "row",
        gap: "1.5%",
    };

    const BtnModal = {
        background: "transparent",
        fontSize: "1.5em",
        border: "2px #252525 solid",
        borderRadius: "100px",
        height: "40px",
        width: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    return (
        <>
            <div style={Content}>
                <h2 style={Title}>{props.name}</h2>
                <button style={BtnModal} onClick={openModal}>
                    <span>+</span>
                </button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <h2>Adicionar foto</h2>
                <button onClick={() => setModalIsOpen(false)}>
                    <span>x</span>
                </button>
            </Modal>
        </>
    );
}
