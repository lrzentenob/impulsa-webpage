import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";

import fiFidelidad from '../../assets/fianzas/fidelidad-fianza-tipo.png';
import fiCurveBk from '../../assets/general/curved-background.png';

export const FianzaFidelidad = () => {
    return (
        <>
            <Header />
            <Submenu />
            <section className="tipo-fianza">
                <div className="tipo-fianza-content">
                    
                    <div className="tipo-fianza-box">
                        <div className="img-bk-container">
                            <img className="rounded-image" src={fiFidelidad}></img>
                            <img className="curved-bk" src={fiCurveBk}></img>
                        </div>
                    </div>

                    <div className="tipo-fianza-box">
                        <h1>Fianzas de Fidelidad:</h1>
                        <h2>Resguarde su patrimonio empresarial ante delitos.</h2>
                        <p> Son aquellas fianzas que garantizan al patrón, la reparación del daño patrimonial derivado de un delito cometido por uno o varios de sus empleados en contra de bienes del patrón o de bienes de los que sea jurídicamente responsable.
                            Esta fianza es un instrumento auxiliar de una administración empresarial sana que protege el patrimonio de la empresa cuando se comete cualquiera de los siguientes delitos:</p>
                            <ul>
                                <li><strong>Abuso de confianza</strong></li>
                                <li><strong>Robo</strong></li>
                                <li><strong>Fraude</strong></li>
                                <li><strong>Peculado</strong></li>
                            </ul>
                        <p>Contar con una Fianza de Fidelidad en su empresa ejercerá un efecto positivo, ya que los empleados evitarán cometer ilícitos que afecten su patrimonio; no obstante, en caso de reclamaciones USTED contará con asesoría jurídica a través de abogados especialistas, además de una guía que lo apoyará para agilizar el proceso de su reclamación.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}