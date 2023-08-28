import React from "react";
import { useNavigate } from "react-router-dom";
import AboutUsTitle from "../../components/AboutUs/Title";

import "./AboutUs.css";

export default function AboutUs() {
    const navigate = useNavigate();

    return (
        <>
            <div className="about-us-content">
                    <div className="about-us-section-header">
                        <div className="div-voltar">
                            <button className="about-us-btn" onClick={() => navigate("/home")}>
                                <i class="fa-solid fa-chevron-left"></i>
                                <h5>Voltar</h5>
                            </button>
                            <AboutUsTitle />
                        </div>
                        <p className="about-us-text">
                            Bem-vindo(a) à LovingDevs! <br/> Somos <p style={{ fontWeight: 'bold', display: 'inline' }}>Guilherme e Luara</p>, um casal <br/>
                            <p style={{ fontWeight: 'bold', display: 'inline' }}>apaixonado</p> que está preparando <br/> algo <p style={{ fontWeight: 'bold', display: 'inline' }}>especial</p> para vocês.
                        </p>
                    </div>
                <section className="about-us-section">
                    <p className="about-us-text">
                        Estamos <p style={{ fontWeight: 'bold', display: 'inline' }}> empolgados </p> em apresentar uma prévia do que o
                        nosso site tem a oferecer.
                    </p>
                </section>
                <section className="about-us-section">
                    <p className="about-us-text">
                        Nossa jornada começou com a simples ideia de criar um
                        espaço único para casais compartilharem <p style={{ fontWeight: 'bold', display: 'inline' }}> momentos especiais</p>
                        , <p style={{ fontWeight: 'bold', display: 'inline' }}> organizarem suas fotos </p>,
                        se divertirem com <p style={{ fontWeight: 'bold', display: 'inline' }}> jogos envolventes </p>,
                        planejarem futuras <p style={{ fontWeight: 'bold', display: 'inline' }}> aventuras </p> e participarem de
                        <p style={{ fontWeight: 'bold', display: 'inline' }}>discussões enriquecedoras</p>.
                    </p>
                </section>

                <section className="about-us-section">
                    <p className="about-us-text">
                        <p style={{ fontWeight: 'bold', display: 'inline' }}>A LovingDevs </p>
                        será o seu lugar para eternizar
                        <p style={{ fontWeight: 'bold', display: 'inline' }}> memórias inesquecíveis. </p>
                        Você poderá criar 
                        álbuns personalizados
                        para compartilhar suas fotos favoritas, desafiar seu
                        parceiro(a) em jogos 
                        <p style={{ fontWeight: 'bold', display: 'inline' }}> emocionantes </p>
                        e planejar 
                        <p style={{ fontWeight: 'bold', display: 'inline' }}> aventuras incríveis </p>
                        juntos.
                    </p>
                </section>

                <section className="about-us-section">
                    <p className="about-us-text">
                        Estamos trabalhando arduamente para garantir que a
                        LovingDevs seja um 
                        <p style={{ fontWeight: 'bold', display: 'inline' }}> ambiente seguro e acolhedor, </p>
                        onde você possa expressar livremente seus sentimentos e
                        compartilhar 
                        <p style={{ fontWeight: 'bold', display: 'inline' }}> momentos íntimos </p>
                        com seu parceiro(a).
                        Incentivamos 
                        <p style={{ fontWeight: 'bold', display: 'inline' }}> diálogos saudáveis </p>
                        entre os casais que nos
                        visitam.
                    </p>
                </section>

                <section className="about-us-section">
                    <p className="about-us-text">
                        Agradecemos por nos acompanhar nesta jornada até aqui.
                        Mal podemos esperar para compartilhar o verdadeiro poder
                        da LovingDevs com casais de todo o mundo. Fique
                        atento(a) e junte-se a nós nessa 
                        <p style={{ fontWeight: 'bold', display: 'inline' }}> emocionante aventura do amor! </p>
                        Com carinho, Guilherme e Luara
                    </p>
                </section>
            </div>
        </>
    );
}
