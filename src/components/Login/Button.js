import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { Hearts } from 'react-loader-spinner'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

import PostLogin from "../../hooks/Login/PostLogin";

import "./Button.css";

function FormsButton(props) {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    const [toastState, setToastState] = useState(null)
    
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/");
        } else {
            navigate("/home");
        }
    }, [navigate, isLoggedIn]);

    async function Login() {
        props.setLoading(true);

        let isLoginTrue = await PostLogin({
          username: props.username,
          password: props.password,
          toastState: props.toastState,
          setToastState: props.setToastState
        });

        if (isLoginTrue) {
          setisLoggedIn((prev) => !prev);
        }

        props.setLoading(false);
    }
      
      

    return (
        <>
            {isLoggedIn || (
                <button className="forms-button" onClick={()=> Login()}>
                    <span>{props.name}</span>
                </button>
            )}
        </>
    );
}

export default FormsButton;
