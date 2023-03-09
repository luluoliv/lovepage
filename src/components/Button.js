import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Btn(props) {
    const btnStyle = {
        backgroundColor: '#E08181',
        border: '#F5F5F5 solid 1px',
        color: '#f5f5f5',
        fontWeight: '500',
        fontSize: '1.2em',
        width: '75%',
        padding: '1.5%',
        marginTop: '3%' ,
        bottom: '0',
    };

    const navigate = useNavigate();
    const [isLoggedIn, setisLoggedIn] = useState(false);

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
            {isLoggedIn || (<button style={btnStyle} onClick={() => setisLoggedIn(true)}>
                <span>{props.name}</span>
            </button>
            )}
        </>
    )
}

export default Btn;