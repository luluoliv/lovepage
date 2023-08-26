import React, {useState} from "react";
import TitlePage from "../../components/TitlePage/TitlePage";
import NavBar from "../../components/NavBar/NavBar";
import { divStyle } from "../../components/BackgroundDiv/BackgroundDiv";
import Place from "../../components/Places/Place";

export default function Places(params) {
    const [refresh, setRefresh] = useState(false)

    return (
        <>
            <div style={divStyle}>
                <NavBar />
                <TitlePage name="Lugares" refresh={refresh} setRefresh={setRefresh}/>
                <Place refresh={refresh} setRefresh={setRefresh}/>
            </div>
        </>
    )
}