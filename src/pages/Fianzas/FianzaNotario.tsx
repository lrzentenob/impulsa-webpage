import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";

import fiTipoNotario from '../../assets/fianzas/notario-fianza-tipo.png';
import fiCurveBk from '../../assets/general/curved-background.png';


export const FianzaNotario = () => {
    return (
        <>
            <Header />
            <Submenu />
            <section className="tipo-fianza">
                <div className="tipo-fianza-content">

                    <div className="tipo-fianza-box left-box-tipo-fianza">
                        <img src={fiTipoNotario} className="fianza-tipo-photo"></img>
                        <img src={fiCurveBk} className="fianza-tipo-curved-image"></img>
                    </div>
                    <div className="tipo-fianza-box">
                        <h2>Fianzas de Notario</h2>
                        <h3>Protección y cumplimiento en tu ejercicio profesional.</h3>
                        <p>Para el inicio de sus funciones el notario deberá cumplir con ciertos requisitos que marcan las leyes de los estados, dentro de los cuales se establece que deberá otorgar depósito en efectivo, fianza, o hipoteca ante la autoridad competente, para integrarlo al fondo de garantía del notariado. Nosotros le ayudamos a tener su fianza de notario rápido, fácil y al mejor precio del mercado.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}