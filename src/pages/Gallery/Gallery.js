import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import { divStyle } from "../../components/BackgroundDiv/BackgroundDiv";
import TitlePage from "../../components/TitlePage/TitlePage";
import Photo from "../../components/Gallery/Photo";

import "./Gallery.css";

export default function Gallery() {
    return (
        <>
            <div style={divStyle}>
                <NavBar />
                <TitlePage name="Galeria" />
                <div className="photos">
                    <Photo />
                </div>
            </div>
        </>
    );
}