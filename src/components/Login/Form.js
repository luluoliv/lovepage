import React from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";

import FormsButton from "./Button";

import "./Form.css";

function LoginForm(props) {
    const [showPassword, setShowPassword] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [password, setPassword] = useState("");

    const { loading, setLoading } = props;
    const { toastState, setToastState } = props;

    const toggleShowPassword = () => setShowPassword((prev) => !prev);

    const toggleValidUser = () => {
        if (selectedOption === "Luara" || selectedOption === "Guilherme") {
            return true;
        } else {
            return false;
        }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="form-style">
            <h3 className="form-title">LovingDevs</h3>
            <p className="form-p">Logue sua conta ou entre como Visitante!</p>
            <Form onSubmit={handleSubmit}>
                <Form.Select
                    className="form-input select"
                    aria-label="Quem é você"
                    onChange={handleOptionChange}
                >
                    <option value="Visitante">Quem é você</option>
                    <option value="Luara">Lulu</option>
                    <option value="Guilherme">Guizen</option>
                    <option value="Visitante">Visitante</option>
                </Form.Select>

                <Form.Group className="form-input group">
                    {toggleValidUser() ? (
                        <Form.Control
                        style={{color: '#d9d9d9'}}
                            className="form-input-content"
                            id="login-input"
                            type={showPassword ? "text" : "password"}
                            onChange={handlePassword}
                            placeholder="Senha"
                            autoComplete="off"
                        />
                    ) : (
                        <Form.Control
                            className="form-input-content"
                            id="login-input"
                            placeholder="Senha"
                            readOnly
                        />
                    )}

                    <i
                        style={{
                            backgroundColor: "transparent",
                            cursor: "pointer",
                            padding: "2%",
                        }}
                        onClick={toggleShowPassword}
                        id="login-eye"
                        className={`fa-regular ${
                            showPassword ? "fa-eye-slash" : "fa-eye"
                        }`}
                    ></i>
                </Form.Group>
                <FormsButton
                    name={"Logar"}
                    username={selectedOption ? selectedOption : "Visitante"}
                    password={password ? password : ""}
                    loading={loading}
                    setLoading={setLoading}
                    toastState={toastState}
                    setToastState={setToastState}
                />
            </Form>
            <a href="/">Cadastre-se</a>
        </div>
    );
}

export default LoginForm;