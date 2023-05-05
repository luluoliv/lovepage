import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FormsButton(props) {    
    let btnStyle = {};

    const navigate = useNavigate();
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [buttonHovered, setButtonHovered] = useState(false);

    if (buttonHovered){
        btnStyle = {
            backgroundColor: '#BB6A6A',
            border: '#F5F5F5 solid 1px',
            color: '#FFFFFF',
            fontWeight: '700',
            fontSize: '1.3em',
            width: '300px',
            height: '55px',
            padding: '1.5%',
            marginTop: '49px' ,
            bottom: '0',    
            borderRadius: '18px',
        };
    }else{
        btnStyle = {
            backgroundColor: '#E08181',
            border: '#F5F5F5 solid 1px',
            color: '#FFFFFF',
            fontWeight: '700',
            fontSize: '1.3em',
            width: '300px',
            height: '55px',
            padding: '1.5%',
            marginTop: '49px' ,
            bottom: '0',    
            borderRadius: '18px',
        };
    }

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
            {isLoggedIn || (<button style={btnStyle} onClick={() => setisLoggedIn(true)} onMouseEnter={() => setButtonHovered(true)} onMouseLeave={() => setButtonHovered(false)}>
                <span>{props.name}</span>
            </button>
            )}
        </>
    )
}

export default FormsButton;