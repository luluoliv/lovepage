import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Button.css";

function FormsButton(props) {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/");
        } else {
            navigate("/home");
        }
    }, [navigate, isLoggedIn]);

    let id = "";
    let userList = "";

    async function getUserId() {
        await axios
            .get("https://love-pageapi.onrender.com/usuarios/list")
            .then((response) => {
                userList = response.data;
            })
            .catch((error) => {
                console.error(error);
            });

        userList.map((item) => {
            if (item.user === props.username) {
                id = item.id;
            }
        });
    }

    const postdata = async () => {
        getUserId();

        const data = {
            username: props.username,
            password: props.password,
        };

        if (props.username !== "Visitante") {
            try {
                await axios
                    .post(
                        "https://love-pageapi.onrender.com/usuarios/login",
                        JSON.stringify(data),
                        {
                            headers: {
                                "Content-Type": "application/json",
                            },
                            withCredentials: true,
                        }
                    )
                    .then((data) => {
                        localStorage.setItem("token", data.data.token);
                        localStorage.setItem("username", props.username);
                        localStorage.setItem("user_id", id);
                    })
                    .then(() => {
                        setisLoggedIn((prev) => !prev);
                    });
            } catch (error) {
                console.error("Error:", error);
                alert("Senha incorreta!");
            }
        } else {
            localStorage.setItem("username", props.username);
            localStorage.removeItem("token");
            setisLoggedIn((prev) => !prev);
        }
    };

    return (
        <>
            {isLoggedIn || (
                <button className="forms-button" onClick={postdata}>
                    <span>{props.name}</span>
                </button>
            )}
        </>
    );
}

export default FormsButton;
