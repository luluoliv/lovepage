import React from "react";
import { divStyle } from "../../components/BackgroundDiv/BackgroundDiv";
import NavBar from "../../components/NavBar/NavBar";
import "./NoteChat.css";
import Chat from "../../components/NoteChat/Chat";
import { useState, useEffect } from "react";
import axios from "axios";

export default function NoteChat() {
    const [note, setNote] = useState();

    useEffect(() => {
        axios
            .get(
                "https://love-pageapi.onrender.com/notes/" +
                    localStorage.getItem("note_id")
            )
            .then((responseData) => {
                setNote(responseData.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div style={divStyle}>
            <NavBar />
            <div className="chat-container">
                <h2>{note ? note.title : "Carregando..."}</h2>
                <button className="button">Marcar como Resolvido</button>
                <Chat />
            </div>
        </div>
    );
}
