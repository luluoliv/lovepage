import React from 'react';
import ImgLogin from "../../assets/login.png";
import LoginForm from '../../components/Login/Form';
import AboutUsText from '../../components/LandingPageAbout/AboutUs';

import "./Login.css";

function Login() {

    return (
        <div className='div-style'>
            <img className='img-style' src={ImgLogin} alt='logo'/>
            <LoginForm/>
            <div className='button-container'>
                <AboutUsText />
            </div>
        </div>
    )
}

export default Login;