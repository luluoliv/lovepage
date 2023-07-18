import React from "react";
import { divStyle } from "../../components/BackgroundDiv/BackgroundDiv";
import NavBar from "../../components/NavBar/NavBar";
import TitlePage from "../../components/TitlePage/TitlePage";
import AboutUsTitle from "../../components/AboutUs/Title";

export default function AboutUs() {
    return (
        <>
            <div style={divStyle}>
                <NavBar />
                <div className="AboutUs">
                    <AboutUsTitle />
                    <text className="content">
                        Bem-vindo(a) à LovingDevs!

                        Somos Guilherme e Luara, um casal apaixonado que está preparando algo especial para vocês.
                        Estamos empolgados em apresentar uma prévia do que o nosso site tem a oferecer. Em breve, você
                        poderá desfrutar de todas as funcionalidades incríveis que estamos preparando.

                        Nossa jornada começou com a simples ideia de criar um espaço único para casais compartilharem momentos
                        especiais, organizarem suas fotos, se divertirem com jogos envolventes, planejarem futuras aventuras e
                        participarem de discussões enriquecedoras.

                        A LovingDevs será o seu lugar para eternizar memórias inesquecíveis. Você poderá criar álbuns
                        personalizados para compartilhar suas fotos favoritas, desafiar seu parceiro(a) em jogos emocionantes
                        que fortalecem o vínculo entre vocês e planejar aventuras incríveis juntos.

                        Além disso, nosso site será um espaço para que casais possam se conectar com outros apaixonados ao
                        redor do mundo. Você poderá participar de discussões e fóruns temáticos, compartilhar suas experiências
                        e aprender com a sabedoria coletiva de pessoas que, como você, acreditam no poder do amor.

                        Estamos trabalhando arduamente para garantir que a LovingDevs seja um ambiente seguro e acolhedor, onde
                        você possa expressar livremente seus sentimentos e compartilhar momentos íntimos com seu parceiro(a).
                        Acreditamos que a comunicação é fundamental em qualquer relacionamento e, por isso, incentivamos diálogos
                        saudáveis e construtivos entre os casais que nos visitam.

                        Agradecemos por nos acompanhar nesta jornada até aqui. Em breve, lançaremos oficialmente todas as
                        funcionalidades incríveis que preparamos para vocês. Mal podemos esperar para compartilhar o verdadeiro
                        poder da LovingDevs com casais de todo o mundo.

                        Fique atento(a) e junte-se a nós nessa emocionante aventura do amor!
                        Com carinho,
                        Guilherme e Luara
                    </text>
                </div>
            </div>
        </>
    );
}