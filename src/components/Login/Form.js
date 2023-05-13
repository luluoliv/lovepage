import React from "react";
import { Card, Form } from "react-bootstrap";
import FormsButton from "./Button";
import { useState } from "react";

function LoginForm(props) {
    const [showPassword, setShowPassword] = useState(false);

    const cardStyle = {
        position: "absolute",
        width: "593px",
        height: "500px",
        left: "70%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#D9D9D9",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        borderRadius: "64px",
        border: "none",
        padding: "3%",
        textAlign: "center",
    };

    const inputStyle = {
        display: "flex",
        cursor: "pointer",
        justifyContent: "center",
        alignItems: "center",
        focus: "none",
        height: "48px",
        outline: "none",
        backgroundColor: "transparent",
        borderRadius: "64px",
        marginTop: "30px",
        marginBottom: "15px",
        border: "solid 1px #252525",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    };

    const inputContent = {
        outline: "none",
        width: "100%",
        height: "100%",
        borderRadius: "64px",
        backgroundColor: "transparent",
        boxShadow: "none",
        border: "none",
        focus: "backgroundColor: transparent",
    };

    const toggleShowPassword = () => setShowPassword((prev) => !prev);

    return (
        <Card style={cardStyle}>
            <h3 style={{ fontSize: "3em" }}>LovingDevs</h3>
            <Form className="mt-2">
                <Form.Select
                    style={inputStyle}
                    aria-label="Default select example"
                >
                    <option>Quem é você?</option>
                    <option value="1">Lulu</option>
                    <option value="2">Guizen</option>
                </Form.Select>
                <Form.Group style={inputStyle} controlId="formGroupPassword">
                    <Form.Control
                        style={inputContent}
                        id="login-input"
                        type={showPassword ? "text" : "password"}
                        placeholder="Senha"
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
