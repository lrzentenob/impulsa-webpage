import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";

import fiTipoArrendamiento from '../../assets/fianzas/arrendamiento-fianza-tipo.png';
import fiCurveBk from '../../assets/general/curved-background.png';

export const FianzaArrendamiento = () => {
    return (
        <>
            <Header />
            <Submenu />
            <section className="tipo-fianza">
                <div className="tipo-fianza-content">

                    <div className="tipo-fianza-box left-box-tipo-fianza">
                        <div>
                            <img src={fiTipoArrendamiento} className="fianza-tipo-photo"></img>
                            <img src={fiCurveBk} className="fianza-tipo-curved-image"></img>
                        </div>
                    </div>

                    <div className="tipo-fianza-box">
                        <h1>Fianza de Arrendamiento:</h1>
                        <h2>Seguridad en sus contratos de alquiler</h2>
                        <p>Tiene como objetivo asegurar el cumplimiento del contrato que se celebra entre el inquilino y el dueño de un inmueble, garantizando así que los arrendatarios cumplan con el pago de las rentas y demás obligaciones adquiridas al rentar el inmueble.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}