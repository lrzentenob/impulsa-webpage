import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";

import fiCancelacion from '../../assets/fianzas/fianzas-cancel.png';
import fiCurveBk from '../../assets/general/curved-background.png';
import './css/FianzasCancelacion.css';

export const FianzasCancelacion = () => {
    return (
        <>  <Header />
            <Submenu />
            <section className="tipo-fianza">
                <div className="tipo-fianza-content">
                    <div className="tipo-fianza-box left-box-tipo-fianza">
                        <img src={fiCancelacion} className="fianza-tipo-photo"></img>
                        <img src={fiCurveBk} className="fianza-tipo-curved-image"></img>
                    </div>
                    <div className="tipo-fianza-box">
                        <h2>Cancela tu Fianza</h2>
                        <p>Todas las pólizas de fianzas que se expiden deben de ser canceladas, debido a que las fianzas no canceladas se acumulan en el saldo del cliente y no le permiten liberar su capacidad de afianzamiento.<br/><br/>
                            Por esta razón, es de suma importancia realizar las cancelaciones de las obligaciones que ya se hayan cumplido.
                            <br/>
                            Para ello contamos con las siguientes opciones:
                            <br/><br/>
                            <ul>
                                <li><p><strong>1. Acta de – Recepción</strong></p></li>
                                <li><p><strong>2. Carta del beneficiario dando por terminada y cumplida la obligación afianzada</strong></p></li>
                                <li><p><strong>3. Facturas y depósitos (Estados de Cuenta), reflejando la amortización del anticipo afianzado</strong></p></li>
                            </ul>

                         



                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}