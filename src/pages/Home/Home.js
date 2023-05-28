import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import { divStyle } from '../../components/BackgroundDiv/BackgroundDiv';
import HomeTitle from '../../components/Home/Title'

export default function Home() {

    return (
        <div style={divStyle}>
            <NavBar />
            <HomeTitle />
        </div>
    );
}