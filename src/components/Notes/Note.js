import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GetNotes from "../../hooks/Notes/GetNotes"; 
import { Form, Button, Modal } from "react-bootstrap"; 
import UpdateModal from "./UpdateModal";

import "./Note.css";

export default function Note(props) {
    const navigate = useNavigate();

    const { refresh, setRefresh } = props

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => setModalIsOpen(!modalIsOpen);
    const [updateInfo, setUpdateInfo] = useState([])
     
    function handleClick(item) {
        localStorage.setItem("note_id", item.id);
        localStorage.setItem("note_title", item.title);
        localStorage.setItem("note_userid", item.user);
        navigate("/notechat");
    }

    const [notes, setNotes] = useState(null);

    useEffect(() => {
        GetNotes({ setNotes, setRefresh });

      }, [refresh, setNotes, setRefresh]);


    const handleStatusColor = (state) => {
        if (state === "0") {
            return "status-red";
        } else {
            return "status-green";
        }
    };

    const handleIconClick = (event, data) => {
        event.stopPropagation();
        setUpdateInfo(data)
        toggleModal()
    };

    return (
            <div className="scroll-div-note">    
                <div className="grid-container">
                    {notes && notes.length > 0
                        ? notes.map((item) => {
                              return (
                                  <div
                                      className="grid-item"
                                      onClick={() => handleClick(item)}
                                  >
                                        <i
                                            className="fa-solid fa-pen update-icon"
                                            onClick={(event) => handleIconClick(event, {
                                                title: item.title,
                                                state: item.state,
                                                id: item.id
                                                })}
                                        ></i>
                                        <div className="titulo">{item.title}</div>
                                        <div
                                            className={handleStatusColor(item.state)}
                                        >

                                        </div>
                                  </div>
                              );
                          })
                        : <p className="note-alert">Nenhuma reclamação adicionada</p>}
                </div>

                {modalIsOpen && (
                <UpdateModal
                    onHide={() => setModalIsOpen(false)}
                    show={modalIsOpen}
                    setRefresh={setRefresh}
                    refresh={refresh}
                    updateInfo={updateInfo}
                />
                )}
            </div>
    );
}
