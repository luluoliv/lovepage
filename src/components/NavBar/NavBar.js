import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

import "../NavBar/NavBar.css";

export default function NavBar() {
    const handleClickLogout = () => {
        localStorage.clear();
        console.log("local storage limpo!");
    };

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Container
                    className="collapse navbar-collapse justify-content-right gap-5"
                    id="navbarNav align-items-center"
                >
                    <Navbar.Toggle aria-controls="navbarNav toggle">
                        <i className="fa-solid fa-bars-staggered"></i>
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbar-collapse-content navbarNav">
                        <Nav className="m-auto">
                            <Nav.Link className="nav-item" data-title='Home'>
                                <Link to={"/home"} className="nav-link">
                                    <i className="fa-solid fa-house"></i>
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="nav-item" data-title='Galeria'>
                                <Link to={"/gallery"} className="nav-link">
                                    <i className="fa-solid fa-images"></i>
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="nav-item" data-title='Jogos'>
                                <Link to={"/games"} className="nav-link">
                                    <i className="fa-solid fa-gamepad"></i>
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="nav-item" data-title='Lugares'>
                                <Link to={"/places"} className="nav-link">
                                    <i className="fa-solid fa-earth-americas"></i>
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="nav-item" data-title='Filmes'>
                                <Link to={"/movies"} className="nav-link">
                                    <i className="fa-solid fa-ticket"></i>
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="nav-item" data-title='Reclamações'>
                                <Link to={"/notes"} className="nav-link">
                                    <i className="fa-solid fa-note-sticky"></i>
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="nav-item" data-title='Sobre Nós'>
                                <Link to={"/aboutus"} className="nav-link">
                                    <i class="fa-solid fa-circle-info"></i>
                                </Link>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Link
                                to="/"
                                onClick={handleClickLogout}
                                className="nav-link"
                            >
                                <i
                                    className="fa-solid fa-right-from-bracket"
                                    style={{ color: "grey" }}
                                ></i>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
