import React from "react";
import { Card, Form } from "react-bootstrap";
import { useState } from "react";

import FormsButton from "./Button";

import "./Form.css";

function LoginForm(props) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword((prev) => !prev);

    return (
        <Card className="card-style">
            <h3 className="card-title">LovingDevs</h3>
            <Form className="mt-2">
                <Form.Select
                    className="input-style"
                    aria-label="Default select example"
                >
                    <option>Quem é você?</option>
                    <option value="1">Lulu</option>
                    <option value="2">Guizen</option>
                </Form.Select>
                <Form.Group
                    className="input-style"
                    controlId="formGroupPassword"
                >
                    <Form.Control
                        className="input-content"
                        id="login-input"
                        type={showPassword ? "text" : "password"}
                        placeholder="Senha"
                        autocomplete="off"
                    />
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
                <FormsButton name={"Logar"} />
            </Form>
        </Card>
    );
}

export default LoginForm;
