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
                    <div className="tipo-fianza-box">

                        <div className="img-bk-container">
                            <img className="curved-bk" src={fiCurveBk}></img>
                            <img className="rounded-image" src={fiCancelacion}></img>
                        </div>

                    </div>
                    <div className="tipo-fianza-box">
                        <h2>Cancela tu Fianza</h2>
                        <p>Todas las pólizas de fianzas que se expiden deben de ser canceladas, debido a que las fianzas no canceladas se acumulan en el saldo del cliente y no le permiten liberar su capacidad de afianzamiento.<br/><br/>
                            Por esta razón, es de suma importancia realizar las cancelaciones de las obligaciones que ya se hayan cumplido.
                            <br/>
                            Para ello contamos con las siguientes opciones:
                            <br/><br/>
                            </p>
                            <ol>
                                <strong><li>Acta de – Recepción</li></strong>
                                <strong><li>Carta del beneficiario dando por terminada y cumplida la obligación afianzada</li></strong>
                                <strong><li>Facturas y depósitos (Estados de Cuenta), reflejando la amortización del anticipo afianzado</li></strong>
                            </ol>


                        
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}