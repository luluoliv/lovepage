
import BgHome from '../assets/bgHome.svg';
import NavBar from '../components/NavBar';

export default function Home() {
    const divStyle = {
        position: 'fixed',
        backgroundSize: 'cover',
        backgroundImage: `url(${BgHome})`,
        width: '100%',
        height: '100%',
    }
    return (
        <>
            <div style={divStyle}>
                <NavBar />
            </div>
        </>

    );
}