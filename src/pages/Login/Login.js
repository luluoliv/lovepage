import React, { useState, useEffect } from 'react';
import ImgLogin from "../../assets/login.png";
import LoginForm from '../../components/Login/Form';
import HeartLoading from '../../components/Login/Loading';
import "./Login.css";
import { toast, ToastContainer } from 'react-toastify';

function Login() {
    const [loading, setLoading] = useState(false);
    const [toastState, setToastState] = useState([]);


    useEffect(() => {
        if (toastState.state){
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
            <div className='div-style'>
                <img className='img-style' src={ImgLogin} alt='logo'/>
                <LoginForm 
                    loading={loading} 
                    setLoading={setLoading}
                    toastState={toastState}
                    setToastState={setToastState}
                />
                <div className='loading-div'>
                    {loading && <HeartLoading />}
                </div>
            </div>
        </>
    )
}

export default Login;
