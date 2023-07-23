import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import { divStyle } from '../../components/BackgroundDiv/BackgroundDiv';
import HomeTitle from '../../components/Home/Title'
import HomeBody from '../../components/Home/body';

export default function Home() {

    return (
        <div style={divStyle}>
            <NavBar />
            <HomeTitle />
            <HomeBody/>
        </div>
    );
}