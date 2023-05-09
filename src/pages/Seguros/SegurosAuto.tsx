import { Footer } from "../../components/Seguros/Landing/Footer";
import { Header } from "../../components/Seguros/Landing/Header";
import { Submenu } from "../../components/Seguros/Landing/Submenu";
import seBackgroundCurved from "../../assets/general/curved-background.png";
import seSeguroIcono from "../../assets/seguros/general/seguros-auto-icon.png";
import seSegurosVidaPortrait from "../../assets/seguros/general/seguros-auto-portrait.png";
import seSegurosVidaWhatis from "../../assets/seguros/general/seguros-auto-single01.png";
import seSegurosVidaWhatis2 from "../../assets/seguros/general/seguros-auto-single02.png";

import seSegurosAutoOption01 from '../../assets/seguros/general/seguros-auto-option01.png';
import seSegurosAutoOption02 from '../../assets/seguros/general/seguros-auto-option02.png';
import seSegurosAutoOption03 from '../../assets/seguros/general/seguros-auto-option03.png';
import seSegurosAutoOption04 from '../../assets/seguros/general/seguros-auto-option04.png';


import './css/SegurosAuto.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
export const SegurosAuto = () =>{

    return (
        <>
        <Header />
        <Submenu />
        <section>

            <div className="seguros-auto">

                <div className="seguros-auto-block top">
                    
                    <div className="floating-portrait">
                            <img src={seBackgroundCurved} className="curvedbk"></img>
                            <img src={seSeguroIcono} className="seguros-auto-icon"></img>
                    </div>

                    <div className="paragraph">
                        <h1>Seguro de Autos y Flotillas</h1>
                        <p>Es la protección que necesitas para tu auto, moto o pickup en caso de robo o accidente. Si sufres algún percance tendrás asistencia médica para ti, tus acompañantes y terceros que se vieran perjudicados por el accidente. También incluye asistencia legal en manos de expertos.</p>
                    </div>
                    
                </div>

                <div className="seguros-auto-block">

                    <div className="vertical-centered">
                        <div className="floating-portrait">
                            <img src={seBackgroundCurved} className="curvedbk lg"></img>
                            <img src={seSegurosVidaPortrait} className="seguros-auto-portrait"></img>
                        </div>
                    </div>

                    <div className="paragraph">
                        <h2>¿Qué tipos de seguro para auto existen?</h2>
                        <p> Existen diferentes seguros para tu auto, pero te compartimos los 3 tipos más comunes, cada uno de ellos ofrece diferentes coberturas, te platicamos brevemente de cada uno: <br/><br/>
                            <b>1. Seguro en cobertura de RESPONSABILIDAD CIVIL</b><br/>
                            En la Ciudad de México y en varios estados de la república, la ley, establece este seguro de carácter obligatorio para circular, ya que cubre los daños materiales y personales que el coche asegurado pueda causar a un tercero, por ejemplo, si chocaste con otro auto y el conductor sufrió algún daño, tu seguro lo cubre.
                            <br/><br/>
                            <b>2. Seguro en cobertura LIMITADA</b><br/>
                            Tiene algunas variantes al seguro de responsabilidad civil, como coberturas adicionales, puede cubrir robo TOTAL del vehículo, asistencia vial o legal, gastos médicos que requiera por lesiones corporales de los ocupantes del vehículo, etc. Esto dependerá de la compañía en la que contrates tu seguro.<br/><br/>
                            <b>3. Seguro en cobertura AMPLIA</b><br/>
                            Este seguro, aunque puede parecer que es más costoso, es el más completo, pues ofrece una amplia gama de coberturas para tu auto, las antes ya mencionadas y más, ya que estas pueden cubrir  tanto al conductor como al vehículo, considerando sus daños materiales en caso de haber tenido un accidente independientemente si haya sido o no el causante del percance. También puedes cubrir asistencia legal y mecánica en cualquier momento.<br/><br/>
                        </p>
                    </div>
                    
                </div>

            <div className="seguros-auto-block">
                <p className="footnote"><b>En IMPULSA ASESORES te brindaremos el respaldo que necesites en los momentos más difíciles.</b></p>
            </div>

                <div className="seguros-auto-block table-area">
                    <div className="table-title">
                        <h1>Paquetes</h1>
                        <p>Cobertura a prueba de todo</p>
                    </div>
                    <table>
                        <tr>
                            <th className="th-left">Amplia</th>
                            <th>Limitada</th>
                            <th className="th-right">Responsabilidad Civil</th>
                        </tr>
                        <tr>
                            <td data-cell="full"><FontAwesomeIcon icon={faSquareCheck} size="1x"/> Daños materiales</td>
                            <td data-cell="limited"><FontAwesomeIcon icon={faSquareCheck} size="1x"/> Robo total</td>
                            <td data-cell="civil"><FontAwesomeIcon icon={faSquareCheck} size="1x"/> Responsabilidad civil</td>
                        </tr>
                        <tr>
                            <td data-cell="full"><FontAwesomeIcon icon={faSquareCheck} size="1x"/> Robo total</td>
                            <td data-cell="limited"><FontAwesomeIcon icon={faSquareCheck} size="1x"/> Gastos médicos</td>
                            <td data-cell="civil"><FontAwesomeIcon icon={faSquareCheck} size="1x"/> Gastos médicos</td>                            
                        </tr>
                        <tr>
                            <td data-cell="full"><FontAwesomeIcon icon={faSquareCheck} size="1x"/> Gastos médicos</td>
                            <td data-cell="limited"><FontAwesomeIcon icon={faSquareCheck} size="1x"/> Defensa legal</td>
                            <td data-cell="civil"><FontAwesomeIcon icon={faSquareCheck} size="1x"/> Defensa legal</td>
                        </tr>
                        <tr>
                            <td data-cell="full"><FontAwesomeIcon icon={faSquareCheck} size="1x"/> Defensa legal</td>
                            <td data-cell="limited"><FontAwesomeIcon icon={faSquareCheck} size="1x"/> Responsabilidad civil</td>
                            <td data-cell="civil"><FontAwesomeIcon icon={faSquareCheck} size="1x"/> Asistencia en viajes</td>
                        </tr>
                        <tr>
                            <td data-cell="full"><FontAwesomeIcon icon={faSquareCheck} size="1x"/> Responsabilidad civil</td>
                            <td data-cell="limited"><FontAwesomeIcon icon={faSquareCheck} size="1x"/> Asistencia en viajes</td>
                            <td data-cell="civil"></td>
                        </tr>
                        <tr>
                            <td data-cell="full" className="td-left"><FontAwesomeIcon icon={faSquareCheck} size="1x"/> Asistencia en viajes</td>
                            <td data-cell="limited"></td>
                            <td data-cell="civil" className="td-right"></td>
                        </tr>
                    </table>
                
                </div>

                <div className="seguros-auto-block">
                    
                    <div className="single-image">
                        <img src={seSegurosVidaWhatis}></img>
                    </div>
                    <div className="paragraph">
                        <h2>¿Por qué contratar un seguro con nosotros?</h2>
                            <ul>
                                <li><p>Asesoría adecuada a tus necesidades</p></li>
                                <li><p>Te acompañamos antes, durante y después de un siniestro</p></li>
                                <li><p>Asistencia y apoyo personalizado</p></li>
                                <li><p>Servicio 24/7 los 365 días del año</p></li>
                                <li><p>Contamos con el respaldo de las mejores aseguradoras del mercado</p></li>
                            </ul>
                        <h2>¿Tienes alguna duda?</h2>
                        <p>Comunícate con uno de nuestros asesores al <b>800 902 3456</b></p>
                    </div>
                </div>

        <div className="seguros-auto-block">
            <div className="footnote">
                <p>No esperes más para brindar seguridad y calma a tu familia, recuerda que estamos para apoyarte y esperamos que te acerques a nuestras <Link to='/seguros/oficinas'>oficinas de servicio</Link>.</p>
            </div>
        </div>

            
            <div className="seguros-auto-block">
                <div className="seguros-auto-choices">

                    <div className="option">
                        <img src={seSegurosAutoOption01}></img>
                        <h4>Personaliza tu seguro</h4>
                        <p>Elige el tipo de cobertura y agrega solo lo que tú necesites.</p>
                    </div>

                    <div className="option">
                        <img src={seSegurosAutoOption02}></img>
                        <h4>¡Estamos contigo!</h4>
                        <p>Después de contratar, nosotros te acompañamos en caso de un siniestro.</p>
                    </div>
                    
                    <div className="option">
                        <img src={seSegurosAutoOption03}></img>
                        <h4>¿Ya checaste nuestra app?</h4>
                        <p>Lleva tus seguros contigo en todo momento, podrás reportar un siniestro ded manera rápida desde tu app.</p>
                    </div>

                    <div className="option">
                        <img src={seSegurosAutoOption04}></img>
                        <h4>Modalidades de pago</h4>
                        <p>Paga como tú quieras, a 3, 6 9 o 12 MSI según la compañía que deseas o puedes fraccionar tus pagos.</p>
                    </div>

                </div>
            </div>
            <hr></hr>
            
            <div className="seguros-auto-block">

                    <div className="paragraph">
                        <h2>¿Qué hacer en caso de siniestro?</h2>
                        <p>Nuestra calidad en la atención a tu siniestro está basada y garantizada en la estrecha relación que mantenemos con las principales aseguradoras y despachos de ajustadores en la república mexicana para ofrecerte el respaldo, la tranquilidad y satisfacción durante estas situaciones.</p>
                            <ul>
                                <li><p><b>Mantén la calma</b></p></li>
                                <li><p><b>Repórtalo al teléfono que aparece en tu póliza</b></p></li>
                            </ul>

                        <p>Los ejecutivos que te apoyarán son especialistas para cada tipo de seguro y cuentan con el conocimiento técnico para obtener el resultado adecuado a tu persona.</p>
                    </div>
                    
                    <div className="single-image">
                        <img src={seSegurosVidaWhatis2}></img>
                    </div>
            </div>


            </div>
        </section>
        <Footer />
        </>  
    );
}