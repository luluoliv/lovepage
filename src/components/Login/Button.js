import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Button.css";

function FormsButton(props) {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Checking if user is not loggedIn
        if (!isLoggedIn) {
            navigate("/");
        } else {
            navigate("/home");
        }
    }, [navigate, isLoggedIn]);

    return (
        <>
            {isLoggedIn || (
                <button
                    className="forms-button"
                    onClick={() => setisLoggedIn(true)}
                >
                    <span>{props.name}</span>
                </button>
            )}
        </>
    );
}

export default FormsButton;
