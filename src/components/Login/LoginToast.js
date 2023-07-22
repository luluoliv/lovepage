import React from "react";
import { ToastContainer, toast } from "react-toastify";

export default function LoginToast(props) {
    const notify = () => {
        toast.error('Senha incorreta', {
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

    return(
        <ToastContainer />
    )
}