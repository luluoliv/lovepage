import { useState } from "react";
import { divStyle } from "../../components/BackgroundDiv/BackgroundDiv";

import TitlePage from "../../components/TitlePage/TitlePage";
import NavBar from "../../components/NavBar/NavBar";
import Movie from "../../components/Movies/Movie";

import './Movies.css';


export default function Movies() {
    const [refresh, setRefresh] = useState(false);

    return (
        <>
            <div className="movies-page" style={divStyle}>
                <NavBar />
                <TitlePage
                    name="Filmes"
                    refresh={refresh}
                    setRefresh={setRefresh}
                />
                <div className="movies">
                    <Movie refresh={refresh} setRefresh={setRefresh} />
                </div>
            </div>
        </>
    );
}
