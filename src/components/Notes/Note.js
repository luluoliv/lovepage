import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Note.css";

export default function Note(props) {
    const navigate = useNavigate();
    function handleClick(note_id) {
        localStorage.setItem("note_id", note_id);
        navigate("/notechat");
    }

    const [notes, setNotes] = useState(null);

    useEffect(() => {
        axios
            .get("https://love-pageapi.onrender.com/notes/")
            .then((responseData) => {
                setNotes(responseData.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleStatusColor = (state) => {
        if (state === "0") {
            return "status-red";
        } else {
            return "status-green";
        }
    };

    return (
        <>
            <div className="grid-container">
                {notes
                    ? notes.map((item) => {
                          return (
                              <div
                                  class="grid-item"
                                  onClick={() => handleClick(item.id)}
                              >
                                  <div className="titulo">{item.title}</div>
                                  <div
                                      className={handleStatusColor(item.state)}
                                  ></div>
                              </div>
                          );
                      })
                    : null}
            </div>
        </>
    );
}
