import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GetNotes from "../../hooks/Notes/GetNotes"; 
import "./Note.css";

export default function Note(props) {
    const navigate = useNavigate();

    const { refresh, setRefresh } = props
     
    function handleClick(item) {
        localStorage.setItem("note_id", item.id);
        localStorage.setItem("note_title", item.title);
        localStorage.setItem("note_userid", item.user);
        navigate("/notechat");
    }

    const [notes, setNotes] = useState(null);
    const [intervalId, setIntervalId] = useState(null);

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

    const handleIconClick = (event) => {
        event.stopPropagation();
        console.log('Clicado')
    };

    return (
            <div className="scroll-div">    
                <div className="grid-container">
                    {notes
                        ? notes.map((item) => {
                              return (
                                  <div
                                      className="grid-item"
                                      onClick={() => handleClick(item)}
                                  >
                                        <i
                                            class="fa-solid fa-pen update-icon"
                                            onClick={(event) => handleIconClick(event)}
                                        ></i>
                                        <div className="titulo">{item.title}</div>
                                        <div
                                            className={handleStatusColor(item.state)}
                                        >

                                        </div>
                                  </div>
                              );
                          })
                        : null}
                </div>
            </div>
    );
}
