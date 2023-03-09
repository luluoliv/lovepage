import BgLogin from '../assets/bgLogin.svg';
import ImgLogin from '../assets/login.png';
import LoginForm from '../components/Login/Form';

function Login() {

    const divStyle = {
        display: 'flex',
        position: 'fixed',
        backgroundImage: `url(${BgLogin})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
    };

    const imgStyle = {
        position: 'absolute',
        height: '70%',
        left: '12%',
        top: '15%'
    }

    return (
        <div style={divStyle}>
            <img src={ImgLogin} style={imgStyle} alt='cachorro e gato'/>
            <LoginForm/>
        </div>
    )
}

export default Login;