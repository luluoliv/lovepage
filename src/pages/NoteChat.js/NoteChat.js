import React from "react";
import { divStyle } from "../../components/BackgroundDiv/BackgroundDiv";
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import "./NoteChat.css";
import Chat from "../../components/NoteChat/Chat";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Modal } from "react-bootstrap";

export default function NoteChat(props) {
    const [note, setNote] = useState();
    const navigate = useNavigate();

    const notify = () => {
        toast.success('Deletado com sucesso', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }

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

    const handleDeleteClick = async () =>{

        if (window.confirm("Tem certeza que deseja deletar essa reclamação?")) {
            await axios
                .delete(
                    "https://love-pageapi.onrender.com/notes/"+
                    localStorage.getItem("note_id"),
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Token " + localStorage.getItem("token"),
                        },
                        withCredentials: true,
                    }
                )
                .then((responseData) => {
                    setNote(responseData.data);
                })
                .then(()=>{
                    toast.success('Deletado com sucesso', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    })
                })
                .then(() =>{
                    navigate("/notes");
                })
                .catch((err) => {
                    console.log(err);
                    alert('Error / Auth error')
                });
        }

    }

    const handleResolvido = async () =>{

        const data = {
            user: localStorage.getItem('note_userid'),
            title: localStorage.getItem('note_title'),
            state: '1'
        }

        if (window.confirm("Tem certeza que quer marcar essa reclamação como resolvida?")) {
            await axios
                .put(
                    "https://love-pageapi.onrender.com/notes/"+
                    localStorage.getItem("note_id")+'/',
                    data,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Token " + localStorage.getItem("token"),
                        },
                        withCredentials: true,
                    }
                )
                .then((responseData) => {
                    setNote(responseData.data);
                })
                .then(()=>{
                    alert('Reclamação resolvida, parabéns!')
                })
                .then(() =>{
                    navigate("/notes");
                })
                .catch((err) => {
                    console.log(err);
                    alert('Error / Auth error')
            });
        }
    }

    return (
        <div style={divStyle}>
            <NavBar />
            <div className="chat-container">
                <h2>{note ? note.title : "Carregando..."}</h2>
                <Chat />
                <button className="button bottom" onClick={handleResolvido}>Marcar como Resolvido</button>
                <i className="fa-regular fa-trash-can fa-xl delete bottom" onClick={handleDeleteClick}></i>
            </div>
        </div>
    );
}
