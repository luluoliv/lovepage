import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { divStyle } from "../../components/BackgroundDiv/BackgroundDiv";
import TitlePage from "../../components/TitlePage/TitlePage";

export default function Gallery() {
    return (
        <>
            <div style={divStyle}>
                <NavBar />
                <TitlePage name="Gallery" />
            </div>
        </>
    );
}
