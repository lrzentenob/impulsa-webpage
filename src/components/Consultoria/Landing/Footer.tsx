import { faFacebook, faInstagram,faTwitter, faGoogle, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import seLogo from '../../../assets/consultoria/consult-logo.png';
import appStore from '../../../assets/general/appstore.png';
import playStore from  '../../../assets/general/playstore.png';
import { Link } from 'react-router-dom';
import { getCurrentYear } from '../../../utils/CurrencyFormatter';

export const Footer = ()=>{
    function onShowContactForm () {
        const modal = document.getElementById('contact-component');
        const disp = modal?.style.display;
        modal!.style.display = disp === 'block' ? "none" : "block";
    }


    return (
        <footer className='footer-consult'>
            <div className='services-content'>
                <div className='service-title'>
                    <h2>Servicio Eficiente</h2>
                    <p>Consultoría profesional para empresas</p>
                </div>
                <div className='service-action'>
                    <Link className='btn-consult' to="/consultoria" onClick={onShowContactForm}>Contáctanos</Link>
                </div>
            </div>


            <div className='footer-upper-content'>
                <div className='footer-upper-content-container'>
                    <div>
                        <img src={seLogo} className='logo'></img>
                        {/* <p>Más de {getYearsFromYear(1981)} años de experiencia en el ramo afianzador.</p> */}
                    </div>

                    <div>
                        <h4>Legal</h4>
                        <ul>
                            <li><Link to="/avisoprivacidad.pdf" target='_blank'>Aviso de privacidad</Link></li>
                            {/* <li><Link to="/">Términos</Link></li>
                            <li><Link to="/">Condiciones</Link></li> */}
                        </ul>
                    </div>
                    <div>
                        <h4>Contacto</h4>
                        <ul>
                            <li><Link to="/"><p><FontAwesomeIcon icon={faPhone} size='1x'  className='fa-iconx'/> 800 902 3456</p></Link></li>
                            <li><Link to="/"><p><FontAwesomeIcon icon={faLocationDot} size='1x' className='fa-iconx'/> 9 oficinas en todo el país</p></Link></li>
                            <li><Link to="mailto:atencion@impulsaasesores.mx"><p><FontAwesomeIcon icon={faEnvelope} size='1x' className='fa-iconx'/><span> atencion@impulsaasesores.mx</span></p></Link></li>
                        </ul>
                    </div>
                    {/*<div>
                        <p>Descarga nuestra aplicación móvil</p>
                        <ul>
                            <li><Link to='https://apps.apple.com/us/app/impulsa-to-go/id1633313375' target="_blank"><img src={appStore} className='store'></img></Link></li>
                            <li><Link to='https://play.google.com/store/apps/details?id=mx.impulsaasesores.togo' target="_blank"><img src={playStore} className='store'></img></Link></li>
                        </ul>
                        </div>*/}
                </div>
            </div>

            <div className='footer-lower-content'>
                <div className='footer-lower-content-foot'>
                    <p>© {getCurrentYear()} Impulsa Asesores. Todos los derechos reservados</p>
                    <div className='footer-social'>
                        <Link to='https://www.facebook.com/impulsa.asesores.mx' target='_blank'><FontAwesomeIcon icon={faFacebook} size='2x' /></Link>
                        <Link to='https://www.instagram.com/impulsa_asesores/?hl=es' target='_blank'><FontAwesomeIcon icon={faInstagram} size='2x' /></Link>
                        <Link to='https://twitter.com/ImpulsaAsesores' target='_blank'><FontAwesomeIcon icon={faTwitter} size='2x' /></Link>
                        <Link to='https://www.tiktok.com/@impulsaasesoresmx' target='_blank'><FontAwesomeIcon icon={faTiktok} size='2x' /></Link>
                        <Link to='https://www.google.com/search?q=Impulsa-asesores' target='_blank'><FontAwesomeIcon icon={faGoogle} size='2x' /></Link>
                        <Link to='https://wa.link/m6wvk3' target='_blank'><FontAwesomeIcon icon={faWhatsapp} size='2x' /></Link>
                    </div>
                </div>
            </div>

        </footer>
    );
}