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
    const [isLoading, setIsloading] = useState(false)
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
        setIsloading(true)
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
        setIsloading(false)
    }

    const handleResolvido = async () =>{
        setIsloading(true)
        try{
            await PutNoteChat({
                setNote: setNote,
                notify: Notify,
                setIsloading: setIsloading
            })
            closeModal()
            setTimeout(() => {
                navigate('/notes')
            }, 3000);
        }catch{
            closeModal()
        }
        setIsloading(false)
    }

    return (
        <div style={divStyle}>
            <ToastContainer />
            <YesNoModal 
                show={modalIsOpen} 
                onHide={closeModal}
                msg={'Tem certeza que deseja marcar como resolvido?'} 
                isLoading={isLoading}
                yes={handleResolvido}
                no={closeModal}
            />
            <YesNoModal 
                show={deleteModalIsOpen} 
                onHide={closeDeleteModal}
                msg={'Tem certeza que deseja deletar essa reclamação?'} 
                yes={handleDeleteClick}
                no={closeDeleteModal}
                isLoading={isLoading}
            />

            <NavBar />
            <div className="chat-container">
                
                <>
                {note ? (
                    <>     
                        <div className="title-div">
                            <i class="fa-solid fa-arrow-left" onClick={()=> navigate('/notes')}></i>
                            <h2>
                                {note.title}
                            </h2>
                        </div>
                        <Chat
                           openModal={openModal}
                           openDeleteModal={openDeleteModal}
                        />
                    </>
                ) : (
                    <div className="loading-icon">
                        <i className="photo-loading fa-solid fa-spinner fa-spin-pulse"></i>
                    </div>
                )
                }
                </>
            </div>
        </div>
    );
}
