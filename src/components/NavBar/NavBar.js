import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
    const NavBarStyle = {
        margin: '2% auto',
        borderRadius: '60px',
        width: '900px',
        padding: '15px',
        fontSize: '1.3em'
    }

    return (
        <nav style={NavBarStyle} class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse justify-content-center gap-5" id="navbarNav align-items-center">
                    <Link to={"/home"} class="nav-item active navbar-nav fa-xl">
                        <a class="nav-link" href="/"><i class="fa-solid fa-house"></i> <span class="sr-only">(current)</span></a>
                    </Link>
                    <Link to={"/gallery"} class="nav-item navbar-nav fa-xl">
                        <a class="nav-link" href="/"><i class="fa-solid fa-images"></i></a>
                    </Link>
                    <Link to={"/games"} class="nav-item navbar-nav fa-xl">
                        <a class="nav-link" href="/"><i class="fa-solid fa-gamepad"></i></a>
                    </Link>
                    <Link to={"/places"} class="nav-item navbar-nav fa-xl">
                        <a class="nav-link" href="/"><i class="fa-solid fa-earth-americas"></i></a>
                    </Link>
                    <Link to={"/movies"} class="nav-item navbar-nav fa-xl">
                        <a class="nav-link" href="/"><i class="fa-solid fa-ticket"></i></a>
                    </Link>
                    <Link to={"/notes"} class="nav-item navbar-nav fa-xl">
                        <a class="nav-link" href="/"><i class="fa-solid fa-note-sticky"></i></a>
                    </Link>
                    <Link to={"/profile"} class="nav-item navbar-nav fa-xl">
                        <a class="nav-link disabled" href="/"><i class="fa-solid fa-circle-user"></i></a>
                    </Link>
            </div>
        </nav>
    );
}