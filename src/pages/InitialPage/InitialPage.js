import React from "react";
import { useNavigate } from "react-router-dom";

import "./InitialPage.css";
import imgInitial from "../../assets/initialImg.svg";

export default function InitialPage() {
    const navigate = useNavigate();

    return (
        <div className="initial-page">
            <div className="initial-page-body">
                <div className="initial-page-left">
                    <h1 className="initial-page-title">Conecte-se,</h1>
                    <h1 className="initial-page-title">Discuta, Organize, e</h1>
                    <h1 className="initial-page-title">
                        Guarde{" "}
                        <span style={{ color: "#E08181", fontSize: "1em" }}>
                            memórias!
                        </span>
                    </h1>
                    <p className="initial-page-subtitle">
                        Junte-se com seu{" "}
                        <span style={{ color: "#E08181", fontSize: "1em" }}>
                            amor
                        </span>{" "}
                        nessa jornada!
                    </p>

                    <button
                        onClick={() => {
                            navigate("/login");
                        }}
                        className="initial-page-btn"
                    >
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <img
                    className="initial-page-img"
                    src={imgInitial}
                    alt="inicial-page-img"
                />
            </div>
        </div>
    );
}
