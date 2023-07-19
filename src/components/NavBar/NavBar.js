import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

import "../NavBar/NavBar.css";

export default function NavBar() {

    const handleClickLogout = () => {
        localStorage.clear();
    };

    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                className="navbar navbar-expand-lg navbar-light bg-light"
            >
                <Container
                    className="collapse navbar-collapse justify-content-right gap-5"
                    id="navbarNav align-items-center"
                >
                    <Navbar.Toggle aria-controls="navbarNav toggle" />
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="m-auto">
                            <Nav.Link>
                                <Link to={"/home"} className="nav-link">
                                    <i className="fa-solid fa-house"></i>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={"/gallery"} className="nav-link">
                                    <i className="fa-solid fa-images"></i>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={"/games"} className="nav-link">
                                    <i className="fa-solid fa-gamepad"></i>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={"/places"} className="nav-link">
                                    <i className="fa-solid fa-earth-americas"></i>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={"/movies"} className="nav-link">
                                    <i className="fa-solid fa-ticket"></i>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={"/notes"} className="nav-link">
                                    <i className="fa-solid fa-note-sticky"></i>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={"/aboutus"} className="nav-link">
                                    <i className="fa-solid fa-circle-user"></i>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <a
                                    href="/"
                                    className="nav-link"
                                    onClick={handleClickLogout}
                                >
                                    <i
                                        className="fa-solid fa-right-from-bracket"
                                        style={{ color: "grey" }}
                                    ></i>
                                </a>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
