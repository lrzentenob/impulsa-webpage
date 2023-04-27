import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";

import fiGuiaReclamos from '../../assets/fianzas/fianzas-guia-reclamos.png';
import fiGuiaReclamosP from '../../assets/fianzas/fianzas-guia-reclamos-paragraph.png';
import fiCurvedBk from '../../assets/general/curved-background.png';

import './css/FianzasGuiaReclamos.css'
export const FianzasGuiaReclamos = () => {
    return (
        <>
            <Header />
            <Submenu />
            <section>

                <div className="guiareclamos-content">
                    
                    <div className="guiareclamos-box">
                    
                        <div className="guiareclamos-protrait">
                            <img className="guiareclamos-img" src={fiGuiaReclamos}></img>
                            <img className="guiareclamos-bk" src={fiCurvedBk}></img>
                        </div>

                        <div className="guiareclamos-paragraph">
                            <h1>Guia de Reclamos</h1>
                            <p>Reclamación de Fianzas: Conoce tus derechos como beneficiario y aprende cómo ejercerlos en caso de incumplimiento de la obligación garantizada. Revisa el proceso y requisitos esenciales para una reclamación exitosa.</p>
                        </div>

                    </div>

                    <div className="guiareclamos-box">
                        <div className='guiareclamos-protrait'>
                            <img className="guiareclamos-img2" src={fiGuiaReclamosP}></img>
                        </div>
                        <div className="guiareclamos-paragraph">
                            <h1>Reclamación</h1>
                            <p>Es el derecho que tiene el acreedor (beneficiario) de exigir que se cumpla con la obligación asumida por el deudor (fiado) o a ser indemnizado por parte del fiador (afianzadora).</p>
                            
                            <h1>¿Cómo Reclamar una Fianza?</h1>
                            <p>El procedimiento de reclamación, se encuentra regulado en La Ley de Instituciones de Seguros y de Fianzas así como en la Ley de Defensa al Usuario De Servicios Financieros.</p>
                        </div>


                    </div>
                    <div className="guiareclamos-box">
                        <div className="requisitos-reclamos">
                            <h2>Requisitos Esenciales de una Reclamación</h2>
                            <ul>
                                <li><p>Los beneficiarios deberán presentar sus reclamaciones en la institución de fianzas, entendiendo como tal a las oficinas principales, sucursales u oficinas de servicio.</p></li>
                                <li><p>La reclamación debe hacerse por escrito y acompañando la documentación y demás elementos que sean necesarios para demostrar la existencia y exigibilidad de la obligación garantizada por la fianza.</p></li>
                                <li><p>La institución de fianzas cuenta con un plazo de 15 días naturales a partir de la presentación de la reclamación para solicitar al beneficiario todo tipo de información o documentación que sean necesarias relacionadas con la fianza motivo de la reclamación.</p></li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="guiareclamos-box">
                        <h2>Sector Gobierno</h2>
                        <div className="guiareclamos-actions">
                            <a href='#' className="btn-fianzas"> Obra</a>
                            <a className="btn-fianzas-outline">Proveeduría</a>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="guiareclamos-box">
                        <h2>Sector Privado</h2>
                        <div className="guiareclamos-actions">
                            <a href='#' className="btn-fianzas"> Obra</a>
                            <a href='#' className="btn-fianzas-outline">Proveeduría</a>
                        </div>
                    </div>
                    <div className="guiareclamos-box">
                        <div className="requisitos-reclamos">
                            <p>En caso de que su reclamación sea para otro ramo y/o tipo de fianza, podrá recibir orientación telefónica en cualquiera de nuestras <a href='/oficinas'>oficinas de servicio</a>.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}