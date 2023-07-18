import TitlePage from "../../components/TitlePage/TitlePage";
import NavBar from "../../components/NavBar/NavBar";
import { divStyle } from "../../components/BackgroundDiv/BackgroundDiv";

export default function Places(params) {
    return (
        <>
            <div style={divStyle}>
                <NavBar />
                <TitlePage name="Lugares" />
            </div>
        </>
    )
}