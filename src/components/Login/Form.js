
import { Card } from "react-bootstrap";
import Btn from '../Button.js';
import Form from 'react-bootstrap/Form';

function LoginForm(props) {
    function showPass() {
        let inputLogin = document.querySelector("#login-input");
        let icon = document.querySelector('#login-eye');

        if (inputLogin.type === "password") {
            inputLogin.type = "text";
        } else {
            inputLogin.type = "password";
        }

        if (icon.classList.contains("fa-eye")) {
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        } else {
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
    }; 
    
    const cardStyle = {
        position: 'absolute',
        right: '12%',
        margin: '10%',
        backgroundColor: '#D9D9D9',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        borderRadius: '64px',
        border: 'none',
        padding: '3%',
        width: '25%',
        height: '50%',
        textAlign: 'center',
    };
    
    const inputStyle = {
        display: 'flex',
        cursor: 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
        focus: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        borderRadius: '64px',
        margin: '5% 0 10% 0',
        border: 'solid 1px #252525',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    };
    
    const inputContent = {
        focus: 'none',
        outline: 'none',
        width: '100%',
        height: '100%',
        borderRadius: '64px',
        backgroundColor: 'transparent',
    };

    return (
        <Card style={cardStyle}>
            <h3 style={{fontSize: '2em'}}>LovingDevs</h3>
            <Form>
                <Form.Select style={inputStyle} aria-label="Default select example">
                    <option>Quem é você?</option>
                    <option value="1">Lulu</option>
                    <option value="2">Guizen</option>
                </Form.Select>
                <Form.Group style={inputStyle} className="mb-3" controlId="formBasicPassword">
                    <Form.Control style={inputContent} id='login-input' type="password" placeholder="Senha" />
                    <i style={{backgroundColor: 'transparent', cursor: 'pointer', padding: '2%'}} onClick={showPass} id="login-eye" className="fa-regular fa-eye"></i>
                </Form.Group>
                <Btn name={'Logar'}/>
            </Form>
        </Card>
    )
}

export default LoginForm;