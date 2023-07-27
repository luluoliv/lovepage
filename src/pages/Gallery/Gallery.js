import React, { useState } from "react";
import { divStyle } from "../../components/BackgroundDiv/BackgroundDiv";

import NavBar from "../../components/NavBar/NavBar";
import TitlePage from "../../components/TitlePage/TitlePage";
import Photo from "../../components/Gallery/Photo";

import "./Gallery.css";

export default function Gallery() {
    const [refresh, setRefresh] = useState(false);

    return (
        <>
            <div style={divStyle}>
                <NavBar />
                <TitlePage
                    name="Galeria"
                    refresh={refresh}
                    setRefresh={setRefresh}
                />
                <div className="photos">
                    <Photo refresh={refresh} setRefresh={setRefresh} />
                </div>
            </div>
        </>
    );
}
