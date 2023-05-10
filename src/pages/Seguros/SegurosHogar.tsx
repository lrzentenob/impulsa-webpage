import './css/SegurosHogar.css';
import { Footer } from "../../components/Seguros/Landing/Footer";
import { Header } from "../../components/Seguros/Landing/Header";
import { Submenu } from "../../components/Seguros/Landing/Submenu";

import seHogarIcon from '../../assets/seguros/general/seguros-hogar-icon.png';
import seHogarPortrait01 from '../../assets/seguros/general/seguros-hogar-portrait01.png';
import seHogarPortrait02 from '../../assets/seguros/general/seguros-hogar-portrait02.png';
import seHogarPortrait03 from '../../assets/seguros/general/seguros-hogar-portrait03.png';
import seHogarPortrait04 from '../../assets/seguros/general/seguros-hogar-portrait04.png';
import seBackgroundCurved from "../../assets/general/curved-background.png";

export const SegurosHogar = () => {

    return (
        <>
            <Header />
            <Submenu />
            <section>
                <div className="seguros-hogar">

                    <div className="seguros-hogar-block top">

                        <div className="floating-portrait">
                                <img src={seBackgroundCurved} className="curvedbk"></img>
                                <img src={seHogarIcon} className="seguros-hogar-icon"></img>
                        </div>

                        <div className="paragraph">
                            <h1>Seguro de hogar y empresariales</h1>
                            <p>El seguro de hogar es un contrato entre una persona y una compañía aseguradora, en el cual se establecen los derechos y obligaciones de ambas partes, donde la compañía se compromete a proteger económicamente el hogar ante los riesgos a los que está expuesto, siempre que la persona pague por completo el costo del seguro. Ya sea por incendio, hurto, terremoto, etc.</p>
                        </div>

                    </div>

                    <div className="seguros-hogar-block">

                        <div className='vertical-centered'>
                            <div className="floating-portrait">
                                    <img src={seBackgroundCurved} className="curvedbk lg"></img>
                                    <img src={seHogarPortrait01} className="seguros-hogar-portrait"></img>
                            </div>
                        </div>

                        <div className="paragraph">
                            <h2>¿Qué debes considerar para contratar un seguro de hogar?</h2>
                            <p>
                                <b>1. Valor del inmueble</b> <br/>
                                Es importante brindar la información real de tu vivienda, ya que esto puede alterar el costo y cobertura de tu póliza, ya que se tomará en cuenta, la antigüedad de la construcción, sus acabados, donde está ubicado, etc.<br/><br/>

                                <b>2. Tipo de vivienda</b><br/>
                                El costo y tipo de seguro pueden variar, por ejemplo, el precio para asegurar una casa no es el mismo para un departamento, de igual forma, no es igual asegurar una vivienda propia, que una rentada. Si es rentado lo conveniente sería asegurar los bienes y no el inmueble.<br/><br/>

                                <b>3. La ubicación</b><br/>
                                Este punto es un factor muy importante, debido a que este puede definir el nivel de riesgo que puede sufrir tu hogar, por ejemplo: si vives en la playa, tiene el riesgo de sufrir daños por huracanes.<br/><br/>

                                <b>4. Las coberturas</b><br/>
                                Hay que poner mucha atención en este punto, ten en claro qué situaciones sí cubre tu póliza de seguro y cuáles no, si cubre contra terremoto, por ejemplo, inundaciones, etc.<br/><br/>
                            </p>
                        </div>

                    </div>
                    <div className='seguros-hogar-block'>
                        <div className='single-paragraph'>
                            <h2>Asegura tu patrimonio y el de tu familia</h2>
                            <p>Un seguro de Casa Habitación /Departamento  que protege los sueños construidos en tu hogar, garantiza tu tranquilidad y la de tus seres queridos contra los principales riesgos a los que están expuestos.</p>
                        </div>
                    </div>

                    <div className='seguros-hogar-block'>

                        <div className="paragraph">
                            <h2>¿Qué puede cubrir mi póliza de hogar?</h2>
                            <ul>
                                <li>Incendio</li>
                                <li>Fenómenos Hidrometeorológicos</li>
                                <li>Terremoto</li>
                                <li>Erupción volcánica</li>
                                <li>Remoción de escombros</li>
                                <li>Cristales</li>
                                <li>Robo</li>
                                <li>Equipo electrónico</li>
                                <li>Entre otros</li>
                            </ul>
                        </div>

                        <div className='single-image'>
                            <img src={seHogarPortrait02}></img>
                        </div>
                    </div>

                    <div className='seguros-hogar-block'>
                        <div className='single-paragraph'>
                            <h1>Seguro empresarial</h1>
                            <p>Conocemos el esfuerzo por crear tu empresa, el resultado de ese esfuerzo nosotros lo protegemos.</p>
                            <p>El tamaño no importa, el riesgo nos interesa y la protección te la ofrecemos a través de nuestra área especializada.</p>
                        </div>
                    </div>
                    
                    <div className='seguros-hogar-block'>
                        <div className='single-image'>
                            <img src={seHogarPortrait03}></img>
                        </div>
                        <div className='paragraph'>
                            <h2>¿Qué protege?</h2>
                            <p>Protege tanto el inmueble en el cual se ubica tu empresa, negocio o comercio, así como los bienes que contiene (muebles, maquinaria, mercancías, mejoras y/o adaptaciones, inventarios y/o existencias etc.). El seguro múltiple empresarial es un paquete integral de coberturas que se adapta a las necesidades y tipos de negocios.</p>
                            <h2>Coberturas</h2>
                            <ul>
                                <li>Incendio rayo y/o explosión</li>
                                <li>Extensión de cubierta, remoción de escombros</li>
                                <li>Fenómenos hidrometeorológicos</li>
                                <li>Terremoto y/o erupción volcánica</li>
                                <li>Pérdidas consecuenciales</li>
                                <li>Gastos extraordinarios</li>
                                <li>Responsabilidad civil general</li>
                                <li>Rotura de cristales</li>
                                <li>Anuncios</li>
                                <li>Robo con violencia</li>
                                <li>Dinero y/o valores</li>
                                <li>Rotura de maquinaria</li>
                                <li>Calderas y recipientes sujetos a presión</li>
                                <li>Equipo electrónico</li>
                            </ul>
                        </div>
                    </div>

                    <div className='seguros-hogar-block'>
                        
                        <div className='paragraph'>
                            <h2>Múltiple empresarial</h2>
                            <p>En el departamento de daños de Impulsa Asesores, nos encargamos de proteger a las empresas, personas y todo aquel bien asegurable de algún riesgo, ya sea por incendio, riesgos hidrometeorológicos o Responsabilidad Civil.
Nuestro propósito es reducir la pérdida en caso de algún siniestro y apoyar a nuestros asegurados en tiempo de crisis.</p>

                        </div>

                        <div className='single-image'>
                            <img src={seHogarPortrait04}></img>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    );
}