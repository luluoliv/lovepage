import React from "react";
import AboutUsTitle from "../../components/AboutUs/Title";

import "./AboutUs.css";

export default function AboutUs() {
    return (
        <>
            <div className="about-us-content">
                <section className="about-us-section">
                    <div className="about-us-section-header">
                        <button className="about-us-btn">
                            <i class="fa-solid fa-chevron-left"></i>
                            <h4>Voltar</h4>
                        </button>
                        <AboutUsTitle />
                    </div>
                    <p className="about-us-text">
                        Bem-vindo(a) à LovingDevs! Somos Guilherme e Luara, um
                        casal apaixonado que está preparando algo especial para
                        vocês.
                    </p>
                </section>
                <section className="about-us-section">
                    <p className="about-us-text">
                        Estamos empolgados em apresentar uma prévia do que o
                        nosso site tem a oferecer.
                    </p>
                </section>
                <section className="about-us-section">
                    <p className="about-us-text">
                        Nossa jornada começou com a simples ideia de criar um
                        espaço único para casais compartilharem momentos
                        especiais, organizarem suas fotos, se divertirem com
                        jogos envolventes, planejarem futuras aventuras e
                        participarem de discussões enriquecedoras.
                    </p>
                </section>

                <section className="about-us-section">
                    <p className="about-us-text">
                        A LovingDevs será o seu lugar para eternizar memórias
                        inesquecíveis. Você poderá criar álbuns personalizados
                        para compartilhar suas fotos favoritas, desafiar seu
                        parceiro(a) em jogos emocionantes e planejar aventuras
                        incríveis juntos.
                    </p>
                </section>

                <section className="about-us-section">
                    <p className="about-us-text">
                        Estamos trabalhando arduamente para garantir que a
                        LovingDevs seja um ambiente seguro e acolhedor, onde
                        você possa expressar livremente seus sentimentos e
                        compartilhar momentos íntimos com seu parceiro(a).
                        Incentivamos diálogos saudáveis entre os casais que nos
                        visitam.
                    </p>
                </section>

                <section className="about-us-section">
                    <p className="about-us-text">
                        Agradecemos por nos acompanhar nesta jornada até aqui.
                        Mal podemos esperar para compartilhar o verdadeiro poder
                        da LovingDevs com casais de todo o mundo. Fique
                        atento(a) e junte-se a nós nessa emocionante aventura do
                        amor! Com carinho, Guilherme e Luara
                    </p>
                </section>
            </div>
        </>
    );
}
