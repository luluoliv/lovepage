import React from "react";
import { useState, useEffect } from "react";
import { Notify } from "../../utils/Notify";

import GetNoteChatMsg from "../../hooks/NoteChats/GetNoteChatMsg";
import PostNoteChats from "../../hooks/NoteChats/PostNoteChats";

import "./Chat.css";

export default function Chat(props) {
    const note_id = localStorage.getItem("note_id");
    const [chatMessages, setChatMessages] = useState();
    const [message, setMessage] = useState("");

    useEffect(() => {
        GetNoteChatMsg({
            note_id: note_id,
            setChatMessages: setChatMessages,
        });
    }, [chatMessages, setChatMessages, note_id]);

    const handleClick = async () => {
        await PostNoteChats({
            note_id: note_id,
            user: localStorage.getItem("user_id"),
            message: message,
            setChatMessages: setChatMessages,
            notify: Notify,
        });

        setMessage("");
    };

    function handleClassName(user) {
        if (user == localStorage.getItem("user_id")) {
            return "sent-content mt-5";
        }
        return "received-content mt-5";
    }

    return (
        <>
            {chatMessages ? (
                chatMessages == undefined || chatMessages.length == 0 ? (
                    <>
                        <div className="first-message mt-4">
                            <span>Adicione a primeira mensagem.</span>
                            <div className="text-div mt-4"></div>
                        </div>
                        <div className="fix-items-bottom">
                            <div className="text-div mt-4 mb-4">
                                <textarea
                                    className="response-inp sent-content"
                                    placeholder="Mensagem"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                <i
                                    className="fa-solid fa-arrow-right mx-2 fa-xl arrow"
                                    onClick={handleClick}
                                ></i>
                            </div>
                            <button
                                className="button "
                                onClick={props.openModal}
                            >
                                {" "}
                                Marcar como Resolvido{" "}
                            </button>
                            <i
                                className="fa-regular fa-trash-can fa-xl delete "
                                onClick={props.openDeleteModal}
                            ></i>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="scroll-div">
                            {chatMessages.map((item) => {
                                return (
                                    <div className={handleClassName(item.user)}>
                                        <div className="usuario">
                                            <i className="fa-solid fa-circle-user fa-4x"></i>
                                            <span className="nome">
                                                {item.user == "2"
                                                    ? "Guizen"
                                                    : "Lulu"}
                                            </span>
                                        </div>
                                        <div className="chat">
                                            <span>{item.message}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="fix-items-bottom">
                            <div className="text-div mt-4 mb-4">
                                <textarea
                                    className="response-inp sent-content"
                                    placeholder="Mensagem"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                <i
                                    className="fa-solid fa-arrow-right mx-2 fa-xl arrow"
                                    onClick={handleClick}
                                ></i>
                            </div>
                            <button
                                className="button "
                                onClick={props.openModal}
                            >
                                {" "}
                                Marcar como Resolvido{" "}
                            </button>
                            <i
                                className="fa-regular fa-trash-can fa-xl delete "
                                onClick={props.openDeleteModal}
                            ></i>
                        </div>
                    </>
                )
            ) : null}
        </>
    );
}
