import './css/ModalHome.css';
import impulsaLogo from '../../../assets/general/LogoModal.svg';
import iconFi from '../../../assets/general/impulsa-icon-fi.png';
import iconRi from '../../../assets/general/impulsa-icon-ri.png';
import iconSe from '../../../assets/general/impulsa-icon-se.png';
import iconCo from '../../../assets/general/impulsa-icon-co.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faSquareMinus } from '@fortawesome/free-regular-svg-icons';

export const ModalHome = () => {

    function onCloseModal () {
        const modal = document.getElementById("impulsa-home-modal-window");
        console.log(modal);
        modal!.style.display = "none";
    }

    return(
        <div className="impulsa-modal" id='impulsa-home-modal-window'>

            <div className="impulsa-content">
                <span className="close" onClick={onCloseModal}>&times;</span>
                
                <div className='modalhome-title-content'>
                    <img src={impulsaLogo} className='modalhome-logo'></img>
                    <h1 className='title-shadow'>¡Siempre cerca de ti!</h1>
                    <p>Bienvenido a Impulsa Fianzas, contamos con 37 años de experiencia en el ramo afianzador.</p>
                </div>
                
                
                <div className='modalhome-banner'>
                    <div className='modalhome-banner-box banner-box-fianzas'>
                        <img src={iconFi}></img>
                        <h1>Fianzas</h1>
                        <p>Procuramos resolver tus fianzas necesarias en un lapso de 24 horas y brindarte el apoyo que necesitas.</p>
                    </div>
                    <div className='modalhome-banner-box banner-box-seguros'>
                        <img src={iconSe}></img>
                        <h1>Seguros</h1>
                        <p>Necesarios para que en tus actividades y vida cotidiana te sientas tranquilo de que estás protegido.</p>
                    </div>
                    <div className='modalhome-banner-box banner-box-riesgos'>
                        <img src={iconRi}></img>
                        <h1>Riesgos</h1>
                        <p>Diseñamos productos que puedan resguardar a tu empresa ante cualquier eventualidad que se pueda presentar.</p>
                    </div>
                    <div className='modalhome-banner-box banner-box-consultoria'>
                        <img src={iconCo}></img>
                        <h1>Consultoria</h1>
                        <p>Nuestros expertos te dan la mano para buscar soluciones, resolver tus dudas y orientarte en lo que tú o tu empresa necesitan.</p>
                    </div>
                </div>


                <div className='modal-mvision-content'>
                    <div className='modal-mvision-box'>
                        <input type='checkbox' id='modalhome-toggle-a' className='modalhome-check-a' ></input>
                        <FontAwesomeIcon icon={faSquarePlus} className='fa-dropdown-icon-plus-a'/>
                        <FontAwesomeIcon icon={faSquareMinus} className='fa-dropdown-icon-minus-a'/>
                        <label htmlFor='modalhome-toggle-a'>Nuestra empresa</label>
                        <div className='modalhome-descripton-a'>
                            <p>Impulsa Asesores fue fundada en 2012 con el objetivo de ser una empresa líder en el sector financiero. Con nuestra amplia experiencia y conocimiento de la industria, brindamos soluciones a medida para ayudar a nuestros clientes a alcanzar sus metas. Contamos con 8 sedes y un equipo especializado que se dedica a brindar el mejor servicio.<br /><br /> Con nosotros, podrá contar con una asesoría personalizada y un servicio excepcional que le permitirá tomar decisiones informadas y alcanzar sus objetivos empresariales.</p>
                        </div>
                    </div>
                    <div className='modal-mvision-box'>
                        <input type='checkbox' id='modalhome-toggle-b' className='modalhome-check-b' ></input>
                        <FontAwesomeIcon icon={faSquarePlus} className='fa-dropdown-icon-plus-b'/>
                        <FontAwesomeIcon icon={faSquareMinus} className='fa-dropdown-icon-minus-b'/>
                        <label htmlFor='modalhome-toggle-b'>Mision</label>
                        <div className='modalhome-descripton-b'>
                            <p>Atraer y Satisfacer la demanda de los consumidores, generando constantemente valor para nuestros clientes y colaboradores.</p>
                        </div>
                    </div>
                    <div className='modal-mvision-box'>
                        <input type='checkbox' id='modalhome-toggle-c' className='modalhome-check-c' ></input>
                        <FontAwesomeIcon icon={faSquarePlus} className='fa-dropdown-icon-plus-c'/>
                        <FontAwesomeIcon icon={faSquareMinus} className='fa-dropdown-icon-minus-c'/>
                        <label htmlFor='modalhome-toggle-c'>Vision</label>
                        <div className='modalhome-descripton-c'>
                            <ul>
                                <li><p>Ser la mejor opción para los consumidores.</p></li>
                                <li><p>Ser el Corredor de Fianzas y Seguros más rentable y reconocido en la región Sur-Sureste del país.</p></li>
                                <li><p>Introducir y hacer crecer los nuevos servicios en consultoría y riesgos para incrementar el valor de nuestros negocio.</p></li>
                                <li><p>Utilizar la tecnología y los sistemas de información para que sean uno de los principales motores para el desarrollo de la organización</p></li>
                                <li><p>Que Impulsa Asesores sea para sus colaboradores, una excelente oportunidad de desarrollo profesional y el mejor lugar para trabajar.</p></li>
                            </ul>

                        </div>
                    </div>
                    <div className='modal-mvision-box'>
                        <input type='checkbox' id='modalhome-toggle-d' className='modalhome-check-d' ></input>
                        <FontAwesomeIcon icon={faSquarePlus} className='fa-dropdown-icon-plus-d'/>
                        <FontAwesomeIcon icon={faSquareMinus} className='fa-dropdown-icon-minus-d'/>
                        <label htmlFor='modalhome-toggle-d'>Valores</label>
                        <div className='modalhome-descripton-d'>
                            <ul>
                                <li><p>Trabajo en Equipo</p></li>
                                <li><p>Es la fuerza que nos hace diferentes.</p></li>
                                <li><p>Creatividad y Eficiencia</p></li>
                                <li><p>Representa una base de liderazgo y distinción en el mercado.</p></li>
                                <li><p>Ética y Lealtad</p></li>
                                <li><p>La integridad y honestidad con que la que cada integrante de la organización se desenvuelve.</p></li>
                                <li><p>Actitud de Servicio</p></li>
                                <li><p>La actitud positiva y la disposición por servir a nuestros clientes internos y externos nos permite crear una relación de confianza y liderazgo.</p></li>
                            </ul>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}