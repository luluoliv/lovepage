import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Btn(props) {
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
            {isLoggedIn || (<button onClick={() => setisLoggedIn(true)} className="login-btn text-sm mt-7 pl-11 pr-11 pt-2 pb-2 bg-[#f5f5f5] rounded-2xl ease-in-out hover:bg-gray-200 hover:-translate-y-1 hover:duration-300">
                <span>{props.name}</span>
            </button>
            )}
        </>
    )
}

export default Btn;