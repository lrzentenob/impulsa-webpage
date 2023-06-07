import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";
import './css/FianzasValidacion.css';

import fiCheck from '../../assets/fianzas/fianzas-check.png';
import fiCurvedBk from '../../assets/general/curved-background.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const FianzasValidacion = () => {
    return (
        <>
            <Header />
            <Submenu />

            <section className="fianzas-valid">

                <div className="fianza-valid-content">

                    <div className="fianza-valid-portrait">
                        <div>
                            <img src={fiCheck} className="fianza-valid-check"></img>
                            <img src={fiCurvedBk} className="fianza-valid-curved-bk"></img>
                        </div>
                    </div>

                    <div className="fianza-valid-paragraph">
                        <h1>Valida tu fianza</h1>
                        <p>Verifica la autenticidad y vigencia de tus pólizas de fianzas, accediendo a nuestro listado de validación por afianzadora. Garantiza tranquilidad y seguridad en tus operaciones.</p>
                    </div>


                    <div className="fianza-valid-brands">
                    <ul>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to='https://fianzas.aserta.com.mx/misFianzasInsurgentesIP17/ConsultaLineCaptura.jsp'>Afianzadora Insurgentes</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to='https://fianzas.aserta.com.mx/misFianzasAsertaIP17/ConsultaLineCaptura.jsp'>Afianzadora Aserta</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to='https://www.iconfianza.com.mx/iConfianza2014/validacion/ValLineaValidacion.aspx'>Afianzas Monterrey</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to='https://serf.libertyfianzas.com/GSRFK03P/pf_indice.html1'>Liberty Fianzas</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to='http://apps.sofimex.com.mx/valida_sofimex/Sitios/'>Afianzadora Sofimex</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to='https://validafianza.berkleymex.com/ValidaFianzaBerkley/sitios/default.aspx'>Afianzadora Berkley</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to='http://apps.dorama.mx/validafianza/sitios/default.aspx?AspxAutoDetectCookieSupport=1'>Fianzas Doroma</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to='https://www.zurichfianzas.com.mx/ZIOF/(S(oabnyo32hbfdisucgdbruht0))/Electronicos/Ratificacion/Ratificacion2.aspx'>Zurich Fianzas de Mexico</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to='http://187.188.115.53/aFi_validafianza/Sitios/Default.aspx'>Fiducia</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to='https://fianzas.cescemex.mx:9090/(S(2vxjgvgwwovrxx1biv02v0nw))/Electronicos/Ratificacion/Ratificacion2.aspx'>Afianzadora Cescemex</Link> </p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to='https://www.iconfianza.com.mx/iConfianza2014/validacion/ValLineaValidacion.aspx'>Chubb México</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to='https://negocios.mapfre.com.mx/fianzas/ratificacion.aspx'>Afianzadora Mapfre</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to='https://dynamic.tmhcc.com/validation/sitios/default.aspx'>Tokio Marine</Link></p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className="icon" /> <Link to='https://www.fianzasatlas.net/efianza/Validador/ValidadorDocumentos.aspx'>Afianzadora Atlas</Link></p></li>
                    </ul>
                    </div>
                    
                </div>
            </section>
            <Footer />
        </>
    );
}
