import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";

import fiGuiaReclamos from '../../assets/fianzas/fianzas-guia-reclamos.png';
import fiGuiaReclamosP from '../../assets/fianzas/fianzas-guia-reclamos-paragraph.png';
import fiCurvedBk from '../../assets/general/curved-background.png';

import './css/FianzasGuiaReclamos.css'
import { Link } from "react-router-dom";
export const FianzasGuiaReclamos = () => {
    return (
        <>
            <Header />
            <Submenu />
            <section>
                <div className="guiareclamos-content">
                    

                    <div className="row">


                        <div className="logo-curvebk">
                            <img src={fiCurvedBk} className="bk"></img>
                            <img src={fiGuiaReclamos} className="icon"></img>
                        </div>

                        <div className="paragraph vertical-centered">
                            <div className="top">
                                <h1>Guía para Reclamos</h1>
                                <p>Reclamación de Fianzas: Conoce tus derechos como beneficiario y aprende cómo ejercerlos en caso de incumplimiento de la obligación garantizada. Revisa el proceso y requisitos esenciales para una reclamación exitosa.</p>
                            </div>

                        </div>

                    </div>

                    <div className="row">
                        <div className="single-img">
                            <img src={fiGuiaReclamosP}></img>
                        </div> 
                        <div className="paragraph vertical-centered">
                            <div className="mid">
                                <h2>Reclamación</h2>
                                <p>Es el derecho que tiene el acreedor (beneficiario) de exigir que se cumpla con la obligación asumida por el deudor (fiado) o a ser indemnizado por parte del fiador (afianzadora).</p>
                                <h2>¿Cómo Reclamar una Fianza?</h2>
                                <p>El procedimiento de reclamación, se encuentra regulado en La Ley de Instituciones de Seguros y de Fianzas así como en la Ley de Defensa al Usuario De Servicios Financieros.</p>                            
                            </div>
                        </div>            
                    </div>


                    <div className="row">
                        <div className="text-note">
                            <h2>Requisitos Esenciales de una Reclamación</h2>                        
                            <ol>
                                <li>Los beneficiarios deberán presentar sus reclamaciones en la institución de fianzas, entendiendo como tal a las oficinas principales, sucursales u oficinas de servicio.</li>
                                <li>La reclamación debe hacerse por escrito y acompañando la documentación y demás elementos que sean necesarios para demostrar la existencia y exigibilidad de la obligación garantizada por la fianza.</li>
                                <li>La institución de fianzas cuenta con un plazo de 15 días naturales a partir de la presentación de la reclamación para solicitar al beneficiario todo tipo de información o documentación que sean necesarias relacionadas con la fianza motivo de la reclamación.</li>
                            </ol>
                        </div>
                    </div>
    
                </div>
                
                <hr className="hr-orange"></hr>
                <div className="text-titles-container">
                    <div>
                        <h2>Sector Gobierno</h2>
                        <div className="actions">
                            <Link to='' className="btn-fianzas">Obra</Link>
                            <Link to='' className="btn-fianzas-outline">Proveeduría</Link>
                        </div>
                    </div>
                </div>
                <hr className="hr-orange"></hr>
                <div className="text-titles-container">
                    <div>
                        <h2>Sector Privado</h2>
                        <div className="actions">
                            <Link to='' className="btn-fianzas">Obra</Link>
                            <Link to='' className="btn-fianzas-outline">Proveeduría</Link>
                        </div>
                    </div>
                </div>
                <hr className="hr-orange"></hr>

            <div className="text-footer-notes vertical-centered">
                <p>
                    En caso de que su reclamación sea para otro ramo y/o tipo de fianza, podrá recibir orientación telefónica en cualquiera de nuestras <Link to='/fianzas/oficinas'>oficinas de servicio</Link>.
                </p>
            </div>


                


            </section>
            <Footer />
        </>
    );
}