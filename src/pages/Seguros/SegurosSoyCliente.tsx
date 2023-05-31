import { Header } from "../../components/Seguros/Landing/Header"
import { Submenu } from "../../components/Seguros/Landing/Submenu"
import './css/SegurosSoyCliente.css';
import seBackgroundCurved from "../../assets/general/curved-background.png";
import seSeguroIcono from "../../assets/seguros/general/seguros-soycli-icon.png";
import seSoycliPortrait01 from '../../assets/seguros/general/seguros-soycli-portrait01.png';
import seSoycliPhone from '../../assets/seguros/general/seguros-soycli-phone.png';
import seSoycliOption01 from '../../assets/seguros/general/seguros-soycli-option01.png';
import seSoycliOption02 from '../../assets/seguros/general/seguros-soycli-option02.png';
import seSoycliOption03 from '../../assets/seguros/general/seguros-soycli-option03.png';

import appStore from '../../assets/general/appstore.png';
import playStore from  '../../assets/general/playstore.png';
import { Link } from "react-router-dom";
import { Footer } from "../../components/Seguros/Landing/Footer";

export const SegurosSoyCliente = () => {
    function onShowContactForm () {
        const modal = document.getElementById('contact-component');
        const disp = modal?.style.display;
        modal!.style.display = disp === 'block' ? "none" : "block";
    }
    return (
        <>
            <Header />
            <Submenu />
            <section>

                <div className="seguros-soycli">
                    
                    <div className="seguros-soycli-block top">

                        <div className="floating-portrait">
                            <img src={seBackgroundCurved} className="curvedbk"></img>
                            <img src={seSeguroIcono} className="seguros-soycli-icon"></img>
                        </div>
                        <div className="paragraph">
                            <h1>Soy Cliente</h1>
                        </div>
                    </div>

                    <div className="seguros-soycli-block">

                            <div className="floating-portrait">
                                <img src={seBackgroundCurved} className="curvedbk lg"></img>
                                <img src={seSoycliPortrait01} className="seguros-soycli-portrait"></img>
                            </div>

                            <div className="paragraph">
                                <h2>Descarga nuestra APP móvil Impulsa To Go</h2>
                                <p>Puedes descargarla desde App Store (para dispositivos iPhone o iPad) o bien, desde Google Play (para dispositivos Android).</p>
                                <div className="appstore-container">
                                    <Link to='https://apps.apple.com/us/app/impulsa-to-go/id1633313375' target="_blank"><img src={appStore}></img></Link>
                                    <Link to='https://play.google.com/store/apps/details?id=mx.impulsaasesores.togo' target="_blank"><img src={playStore}></img></Link>
                                </div>
                            </div>

                    </div>

                    
                    <div className="single-paragraph">
                        <h2>Sigue estos 3 sencillos pasos..</h2>
                    </div>
                    <div className="seguros-soycli-block">
                        <div className="single-image">
                            <img src={seSoycliPhone}></img>
                        </div>
                        <div className="paragraph">
                                <h2>Paso 1</h2>
                                <p>Descarga en tu celular nuestra app móvil “Impulsa To go” disponible en App Store o Google Play.</p>
                                <h2>Paso 2</h2>
                                <p>Inicia sesión registrando tus datos; Nombre, Teléfono, correo electrónico y contraseña.</p>
                                <h2>Paso 3</h2>
                                <p>Listo!, Ya puedes consultar todas las pólizas que tengas contratadas con nosotros y tendrás la opción de reportar un siniestro desde tu App.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="seguros-soycli-gethelp">
                <div className="gethelp-container">
                        <div>
                            <h2>¡Cualquier duda, contáctanos y con gusto te ayudamos!</h2>
                            <p>800 902 34 56</p>
                        </div>
                        <div>               
                            <Link className='btn-seguros' to="/seguros/soycliente" onClick={onShowContactForm}>Contáctanos</Link>
                        </div>
                </div>
            </div>
            <section className="seguros-soycli-ventajas">
                <h2>Ventajas</h2>
                <div className="ventajas-container">
                    <div className="box">
                        <img src={seSoycliOption01}></img>
                        <h3>Pólizas</h3>
                        <p>Administración de póliza(s) y consulta de datos: vigencia, Aseguradora, estatus, coberturas, documento de Pdf.</p>
                    </div>
                    <div className="box">
                        <img src={seSoycliOption02}></img>
                        <h3>Siniestros</h3>
                        <p>La aplicación te dará la ventaja de tener los contactos para reportar un siniestro con cualquier Aseguradora.</p>
                        
                    </div>
                    <div className="box">
                        <img src={seSoycliOption03}></img>
                        <h3>Notificaciones</h3>
                        <p>Le ofrecemos diferentes opciones para resolver sus dudas o preguntas sobre la aplicación o su póliza, al igual se notificará los próximos vencimientos de sus seguros.</p>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}