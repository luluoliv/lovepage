import TitlePage from "../../components/TitlePage/TitlePage";
import NavBar from "../../components/NavBar/NavBar";
import { divStyle } from "../../components/BackgroundDiv/BackgroundDiv";

export default function Games(props) {
    return (
        <>
            <div style={divStyle}>
                <NavBar />
                <TitlePage name="Jogos" />
            </div>
        </>
    )
}