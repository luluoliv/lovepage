import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    const NavBarStyle = {
        margin: "2% auto",
        borderRadius: "60px",
        width: "900px",
        padding: "15px",
        fontSize: "1.3em",
    };

    const handleClickLogout = () =>{
        localStorage.clear()
    }

    return (
        <nav
            style={NavBarStyle}
            className="navbar navbar-expand-lg navbar-light bg-light"
        >
            <div
                className="collapse navbar-collapse justify-content-center gap-5"
                id="navbarNav align-items-center"
            >
                <Link to={"/home"} className="nav-item active navbar-nav fa-xl">
                    <a className="nav-link" href="/">
                        <i className="fa-solid fa-house"></i>
                        <span className="sr-only">(current)</span>
                    </a>
                </Link>
                <Link to={"/gallery"} className="nav-item navbar-nav fa-xl">
                    <a className="nav-link" href="/">
                        <i className="fa-solid fa-images"></i>
                    </a>
                </Link>
                <Link to={"/games"} className="nav-item navbar-nav fa-xl">
                    <a className="nav-link" href="/">
                        <i className="fa-solid fa-gamepad"></i>
                    </a>
                </Link>
                <Link to={"/places"} className="nav-item navbar-nav fa-xl">
                    <a className="nav-link" href="/">
                        <i className="fa-solid fa-earth-americas"></i>
                    </a>
                </Link>
                <Link to={"/movies"} className="nav-item navbar-nav fa-xl">
                    <a className="nav-link" href="/">
                        <i className="fa-solid fa-ticket"></i>
                    </a>
                </Link>
                <Link to={"/notes"} className="nav-item navbar-nav fa-xl">
                    <a className="nav-link" href="/">
                        <i className="fa-solid fa-note-sticky"></i>
                    </a>
                </Link>
                <Link to={"/aboutus"} className="nav-item navbar-nav fa-xl">
                    <a className="nav-link disabled" href="/">
                        <i className="fa-solid fa-circle-user"></i>
                    </a>
                </Link>
                    <a href="/" className="fa-xl" onClick={handleClickLogout}>
                        <i class="fa-solid fa-right-from-bracket" style={{ color: "grey"}}></i>
                    </a>
            </div>
        </nav>
    );
}
