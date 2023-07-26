import React from "react";
import { useState, useEffect } from "react";

import Chat from "../../components/NoteChat/Chat";
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

//utils
import YesNoModal from "../../utils/YesNoModal";
import { Notify } from "../../utils/Notify";

//hooks
import PutNoteChat from "../../hooks/NoteChats/PutNoteChats";
import DeleteNoteChat from "../../hooks/NoteChats/DeleteNoteChat";
import GetNoteChatTitle from "../../hooks/NoteChats/GetNoteChatTitle";

//css
import { divStyle } from "../../components/BackgroundDiv/BackgroundDiv";
import "./NoteChat.css";
import 'react-toastify/dist/ReactToastify.css';


export default function NoteChat(props) {
    const [note, setNote] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const navigate = useNavigate();

    function openModal() {
        setModalIsOpen(true);
    }

    function openDeleteModal(){
        setDeleteModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    function closeDeleteModal(){
        setDeleteModalIsOpen(false);
    }

    useEffect(() => {

        GetNoteChatTitle({
            note_id: localStorage.getItem("note_id"),
            setNote: setNote
        })

    }, [setNote]);

    const handleDeleteClick = async () =>{
        try{
            await DeleteNoteChat({
                setNote: setNote,
                notify: Notify
            })
            closeDeleteModal()
            setTimeout(() => {
                navigate('/notes')
            }, 3000);
        }catch{
            closeDeleteModal()
        }

    }

    const handleResolvido = async () =>{
        try{
            await PutNoteChat({
                setNote: setNote,
                notify: Notify
            })
            closeModal()
            setTimeout(() => {
                navigate('/notes')
            }, 3000);
        }catch{
            closeModal()
        }
    }

    return (
        <div style={divStyle}>
            <ToastContainer />
            <YesNoModal 
                show={modalIsOpen} 
                onHide={closeModal}
                msg={'Tem certeza que deseja marcar como resolvido?'} 
                yes={handleResolvido}
                no={closeModal}
            />
            <YesNoModal 
                show={deleteModalIsOpen} 
                onHide={closeDeleteModal}
                msg={'Tem certeza que deseja deletar essa reclamação?'} 
                yes={handleDeleteClick}
                no={closeDeleteModal}
            />

            <NavBar />
            <div className="chat-container">
                
                <>
                {note ? (
                    <h2>
                        {note.title}
                    </h2>
                ) : (
                    <i className="photo-loading fa-solid fa-spinner fa-spin-pulse"></i>
                )
                }
                </>
                <Chat
                    openModal={openModal}
                    openDeleteModal={openDeleteModal}
                 />
            </div>
        </div>
    );
}
