import React, { useState, useEffect } from "react";
import LoginForm from "../../components/Login/Form";
import HeartLoading from "../../components/Login/Loading";
import "./Login.css";

import loginSVG from "./../../assets/loginSvg.svg";
import { toast, ToastContainer } from "react-toastify";

function Login() {
    const [loading, setLoading] = useState(false);
    const [toastState, setToastState] = useState([]);

    useEffect(() => {
        if (toastState.state) {
            toast.error(toastState.message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }, [toastState, setToastState]);

    return (
        <>
            <ToastContainer />
            <div className="login-page">
                <div className="login-page-body">
                    <LoginForm
                        loading={loading}
                        setLoading={setLoading}
                        toastState={toastState}
                        setToastState={setToastState}
                    />
                    <img
                        className="login-illustration"
                        src={loginSVG}
                        alt="Designed by Freepik"
                    />
                    <div className="loading-div">
                        {loading && <HeartLoading />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
