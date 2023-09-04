import {React, useState} from "react";
import TitlePage from "../../components/TitlePage/TitlePage";
import NavBar from "../../components/NavBar/NavBar";
import GameItems from "../../components/Games/Games";
import { divStyle } from "../../components/BackgroundDiv/BackgroundDiv";

export default function Games(props) {
    const [refresh, setRefresh] = useState(false)

    return (
        <>
            <div style={divStyle}>
                <NavBar />
                <TitlePage name="Jogos" refresh={refresh} setRefresh={setRefresh}/>
                <GameItems refresh={refresh} setRefresh={setRefresh}/>
            </div>
        </>
    )
}