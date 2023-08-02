import React from "react";

import { divStyle } from "../../components/BackgroundDiv/BackgroundDiv";

import NavBar from "../../components/NavBar/NavBar";
import HomeTitle from "../../components/Home/Title";
import HomeBody from "../../components/Home/body";

import "./Home.css";

export default function Home() {
    return (
        <div className="home-page" style={divStyle}>
            <NavBar />
            <HomeTitle />
            <HomeBody />
        </div>
    );
}
