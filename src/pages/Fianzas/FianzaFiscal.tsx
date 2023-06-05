import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";

import fiTipoFiscal from '../../assets/fianzas/fiscal-fianza-tipo.png';
import fiCurveBk from '../../assets/general/curved-background.png';

export const FianzaFiscal = () => {
    return (
        <>
            <Header />
            <Submenu />
            <section className="tipo-fianza">
                <div className="tipo-fianza-content">

                    <div className="tipo-fianza-box">
                        <div className="img-bk-container">
                            <img className="rounded-image" src={fiTipoFiscal}></img>
                            <img className="curved-bk" src={fiCurveBk}></img>
                        </div>

                    </div>
                    <div className="tipo-fianza-box">
                        <h1>Fianzas Fiscales:</h1>
                        <h2>Garantiza tus obligaciones fiscales y evita embargos.</h2>
                        <p>Te permite garantizar tus obligaciones fiscales como una Persona Moral o Física, frente a la Secretaría de Hacienda y Crédito Público y evitar el pago o embargo por parte de la autoridad hasta que se obtenga resolución.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}