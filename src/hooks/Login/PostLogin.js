import getUserId from './GetUserId';
import axios from "axios";
import { useState } from 'react';
import { toast } from 'react-toastify';

async function PostLogin(props) {

    let id = await getUserId(props.username);
    const { toastState, setToastState } = props
    
    
    const data = {
        username: props.username,
        password: props.password,
    };
    
    if (props.username !== "Visitante") {
        try {
        const response = await axios.post(
            "https://love-pageapi.onrender.com/usuarios/login",
            JSON.stringify(data),
            {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
            }
        );
    
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", props.username);
        localStorage.setItem("user_id", id);

        return true;

        } catch (error) {
        console.error("Error:", error);

        props.setToastState(
            {
                state: true,
                type: 'error',
                message: 'Senha incorreta'
            }
        )

        return false;
        }
    } else {

        localStorage.setItem("username", props.username);
        localStorage.removeItem("token");

        return true;
    }
}
  
export default PostLogin;
